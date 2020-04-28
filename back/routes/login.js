const config              = require('../config');
const express             = require('express');
const router              = express.Router();
const db                  = require('../lib/db');
const format              = require('mysql').format;
const generateToken       = require('../lib/generateToken');
let connection;
let res = {};

/*
send JSON like:
{
   "nombre": "",
   "apellidos": "",
   "password": "",
   "dni": "",
   "email": "",
   "direccion": "",
   "tarjeta_credito": "",
   "fecha_nacimiento": "",
   "sexo": ""
}
 */

router.post('/register', async(request, response, next)=>{
 let body              = request.body;
 let nombre            = body.nombre;
 let apellidos         = body.apellidos;
 let password          = body.password;
 let dni               = body.dni;
 let email             = body.email;
 let direccion         = body.direccion;
 let tarjeta_credito   = body.tarjeta_credito;
 let fecha_nacimiento  = body.fecha_nacimiento;
 let sexo              = body.sexo;

 let fechaAlta = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();

 connection = db.connect(config.db.user, config.db.password);
 //let insert = ['permisos', 'user'];
 let query = format("insert into usuarios (password, dni, nombre, apellidos, permisos, email, direccion, tarjeta_credito, fecha_nacimiento, fecha_alta, sexo)  values (" + "\'" + password + "\'" + ", \'" + dni + "\' , " + "\'" + nombre + "\', \'" + apellidos + "\', " + "\'user\', \'" + email + "\', \'" + direccion + "\', \'" + tarjeta_credito + "\', \'" + fecha_nacimiento + "\', \'" + fechaAlta + "\', \'" + sexo + "\')");
 console.log('format query ', query);
 res = await db.query(query).catch(e=>{
   console.error(e);
   return response.status(500).json({ ok: false, data:[], fails:[{error: e}] });
 });
 console.log(res);
 //console.log('router res: ', res);
 if(res.affectedRows === 1){
   return response.status(200).json({ ok: true, data:[res], fails:[] });
 }
});

router.post('/login', async(request, response, next)=>{
  let user        = request.body.user;
  let password    = request.body.password;
  const token     = await generateToken(user, password);

  try{
    connection = db.connect(config.db.user, config.db.password);
    let insert = ["permisos", 'user'];
    let query = format("select * from Usuarios where nombre = \'" + user + "\' and password = \'" + password + "\' and ?? = ?", insert);
    console.log('format query: ', query);
    res = await db.query(query).catch(e=>console.error(e));
    console.log(res);
    if(res.length > 0 && res[0].id_usuario > 5){
      return response.status(200).json({ ok: true, data: [{usuario: res[0].nombre, apellidos: res[0].apellidos, permisos: res[0].permisos, token: token}], fails:[] });
    }
    return response.status(400).json({ ok: false, data:[], fails:[{error: "Could not log in"}] });
  }catch(e){
    console.error(e);
    throw new Error(e);
  }
});

router.post('/admin', async(request, response, next)=>{
  let user        = request.body.user;
  let password    = request.body.password;
  const token     = await generateToken(user, password);

  try{
    connection = await db.connect(config.db.user, config.db.password);
    let insert = ["permisos", 'admin'];
    /*
      ?? -> permisos
      ? -> admin
    * */
    let query = format("select * from Usuarios where nombre = \'" + user + "\' and password = \'" + password + "\' and ?? = ?", insert);
    console.log('formatted query: ', query);
    res = await db.query(query).catch(e=>console.error(e));
    if(res.length > 0 && (res[0].id_usuario >= 1 || res[0].id_usuario <= 5)){
      console.log('res: ', res);
      return response.status(200).json({ ok: true, data: [{usuario: res[0].nombre, apellidos: res[0].apellidos, permisos: res[0].permisos, token: token}], fails:[] });
    }
    return response.status(400).json({ ok: false, data:[], fails:[{error: "user not allowed"}] });
  }catch(e){
    console.error(e.message);
  }
});

module.exports = router;
