const config              = require('../config');
const express             = require('express');
const router              = express.Router();
const db                  = require('../lib/db');
const fs                  = require('fs');
const path                = require('path');
const format              = require('mysql').format;
const generateToken       = require('../lib/generateToken');

/*const corsOptions = {
  origin: 'http://127.0.0.1:8081'
};*/

let connection;
let res = {};

/* GET home page. */
/*router.get('/login', (request, response, next)=>{
  response.render('login', { title: 'Login', data:[], fails: [] });
});*/

router.get('/users', async(request, response, next)=>{
  try{
    connection  = db.connect(config.db.user, config.db.password);
    let query   = format("Select * from usuarios");
    res         = await db.query(query).catch(e=>console.error(e));
    if(res.length > 0){
      response.status(200).json({ ok: true, data: res, fails: [] });
      //response.status(200).json(res);
    }else{
      response.status(500).json({ ok: false, data:[], fails:[{error: "No data found"}] });
    }
  }catch(e){
    console.error(e);
    response.status(500).json({ ok: false, data: [], fails:[{error: e}] });
  }
});

router.get('/user/:id', async(request, response, next)=>{
  connection  = db.connect(config.db.user, config.db.password);
  let insert  = ["id_usuario", request.params.id];
  let query   = format ("Select * from usuarios where ?? = ?", insert);
  console.log('formatted query: ', query);
  res         = await db.query(query).catch(e=>console.error(e));
  if(res.length > 0){
    return response.status(200).json({ ok: true, data: res, fails:[] });
  }else{
    return response.status(500).json({ ok: false, data: [], fails:[{error: "User not found."}] });
  }
});

router.get('/user/:name/:surname', async(request, response, next)=>{
  connection  = db.connect(config.db.user, config.db.password);
  let query   = format ("Select * from usuarios where nombre = \'" + request.params.name + "\' and apellidos = \'" + request.params.surname + "\'");
  console.log('formatted query: ', query);
  res         = await db.query(query).catch(e=>console.error(e));
  console.log(res[0]);
  if(res.length > 0){
    return response.status(200).json({ ok: true, data: res[0], fails:[] });
  }
  return response.status(500).json({ ok: false, data:[], fails:[{error: "User not found."}] });
});

router.put('/user/:id', async(request, response, next)=>{
  let nombre            = request.body.nombre;
  let apellidos         = request.body.apellidos;
  let dni               = request.body.dni;
  let direccion         = request.body.direccion;
  let email             = request.body.email;
  let fechaNacimiento   = request.body.fechaNacimiento;

  let f                 = new Date(fechaNacimiento);
  let date              = f.getDate();
  let month             = f.getMonth();
  let year              = f.getFullYear();
  let dateString        = `${year}-${month + 1}-${date}`;

  connection            = db.connect(config.db.user, config.db.password);
  let insert            = ["id_usuario", request.params.id];
  let query             = format("update usuarios set nombre=\'" + nombre + "\', apellidos=\'" + apellidos + "\', dni=\'" + dni + "\', direccion=\'" + direccion + "\', email=\'" + email + "\', fecha_nacimiento=\'" + dateString + "\' where ?? = ?", insert);
  console.log('formatted query: ', query);
  res                   = await db.query(query).catch(e=>console.error(e));
  if(res.affectedRows === 1){
    return response.status(200).json({ ok: true, data: res, fails:[] });
  }else{
    return response.status(500).json({ ok: false, data: [], fails: [{error: "user could not be updated."}] });
  }
});

router.delete('/user/:id', async(request, response, next)=>{
  connection            = db.connect(config.db.user, config.db.password);
  let insert            = ["id_usuario", request.params.id];
  let query             = format("delete from usuarios where ?? = ?", insert);
  console.log('formatted query: ', query);
  res                   = await db.query(query).catch(e=>{
    console.error(e);
    return response.status(500).json({ ok: false, data:[], fails:[{error: e}] });
  });
  console.log(res);
  if(res.affectedRows === 1){
    return response.status(200).json({ ok: true, data: res, fails:[] });
  }

});

/*router.get('/admin', (request, response, next)=>{

  response.render('adminLogin', { title: 'Admin Login', data:[], fails: [] });
});*/

/*router.get('/videos', (request, response)=>{
  let videos;
  let pathVideos = path.join('./' + 'public/assets/videos');
  videos = fs.readdirSync(pathVideos, { encoding: 'utf-8' });
  //videos = JSON.stringify(videos);
  if(videos.length > 0){
    response.status(200).json({ok: true, data:videos, fails:[]});
  }else{
    response.status(400).json({ok: false, data: [], fails:[{error: 'There were not found any videos.'}]});
  }
});*/

/*router.get('/video/:id', (request, response)=>{

  const filepath = path.join('public/assets/videos/'+request.params.id);
  const stat = fs.statSync(filepath);
  const fileSize = stat.size;
  const range = request.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1;
    const chunksize = (end-start)+1;
    const file = fs.createReadStream(filepath, {start, end});
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    response.writeHead(206, head);
    file.pipe(response);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    response.writeHead(200, head);
    fs.createReadStream(filepath).pipe(response);
  }
});*/

module.exports = router;
