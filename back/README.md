**Saphire**

To run node.js server execute

    npm run dev

or `cd back` and then `nodemon index.js`

* * * 

The main endpoints are:

   + GET http://127.0.0.1:3000/users
       - returns a response in the form of: response.status(200|500).json({ok: true|false, data: [users], fails:[]}), users is an array, which contains all the users in table users from MySQL, 
       fails contains an array in case an error object is thrown.
   + POST http://127.0.0.1:3000/auth/register
       - returns a response in the form of: response.status(200|500).json({ok: true|false, data: [], fails:[]}), in order to insert a new user, 
       send and object to this endpoint like:
           `{
               "password": "",
               "dni": "",
               "nombre": "",
               "apellidos": "",
               "permisos": "",
               "email": "",
               "direccion": "",
               "tarjeta_credito": "",
               "fecha_nacimiento": "1975-12-23T23:00:00.000Z",
               "fecha_alta": "2019-04-21T22:00:00.000Z",
               "sexo": ""
           }`
   + POST http://127.0.0.1:3000/auth/login
       - returns a response in the form of: response.status(200|500).json({ ok: true, data: [{id_usuario: res[0].id_usuario}], fails:[] });
       to post to this endpoint send an object like: 
           `{user: "", password: ""}`
   + POST http://127.0.0.1:3000/auth/admin
       - returns a response in the form of: `response.status(200|500).json({ ok: true, data: [{id_usuario: res[0].id_usuario}], fails:[] });`
       to post to this endpoint send an object like:
           `{user: "", password: ""}`
   + GET http://127.0.0.1:3000/videos
       - returns a response in the form of: `response.json({ok: true, data:videos, fails:[]});`
   + GET http://127.0.0.1:3000/videos/:id where :id is the name of the video to be streamed.
