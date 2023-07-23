const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

app = express()
app.use(cors());
app.use(express.json())

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'pavan'
});



db.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('MySQL connected successfully!');
  
    // Start the server after the database connection is established
 
  });

app.get('/',(req,res)=>{
    res.send('Hello World')
})





app.post('/signup', (req, res) => {
    const { name, email, password, balance } = req.body;
    const sql = 'INSERT INTO project(name,email, password,balance) VALUES (?, ?, ?, ?)';
    const values = [name, email, password, balance];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        return res.status(500).json({ error: 'Error registering user.' });
      }
      return res.status(200).json({ message: 'User registered successfully!' });
    });
  });
  



app.listen(4000,()=>{
    console.log("listening on port 4000");
})