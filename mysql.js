const mysql=require('mysql')
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database name'
  });
  connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });

    con.query('SELECT * FROM authors', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });

      



connection.end()
