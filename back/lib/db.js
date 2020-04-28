const mysql         = require('mysql');


let db;
let connection = {};
db = {
  connect : (user, password)=>{

    return new Promise((resolve, reject)=>{
      connection = mysql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'saphiredb'
      });

      connection.connect();

      if(connection){
        resolve(connection);
      }else{
        reject(new Error('error connecting to mySQL.'));
      }
    });
  },

  query: (query)=>{
    return new Promise((resolve, reject)=>{
      let res = {};
      connection.query(query, (error, results, fields)=>{
        if(error){
          reject(error.sqlMessage);
        }
        res = results;
        if(res !== undefined){
          resolve(JSON.parse(JSON.stringify(res)));
        }else{
          reject(error.sqlMessage);
        }
      });

    });
  }
};

module.exports = db;
