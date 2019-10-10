const { Pool, Client } = require('pg');
// pools will use environment variables
// for connection information
//
//

// const client = new Client()
// await client.connect();
// const res = await client.query('SELECT * FROM dashboard');
// await client.end();
// console.log(res);

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stocks',
  password: 'example',
  port: 5433 //Default 5432
});
pool.query('SELECT datname FROM pg_database', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res.rows)
    }
});
pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res.rows)
    }
});
pool.query('SELECT * FROM dashboard', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res.rows)
    }
  pool.end();
});
// // you can also use async/await
// //
// //

// (async () => {
//     const res = await pool.query('SELECT NOW()')
//     await pool.end()
// })()
// // clients will also use environment variables
// // for connection information
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT NOW()')
// await client.end()
