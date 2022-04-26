async function connect() 
{
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://postgres:123456@localhost:5432/banco_teste'
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    global.connection = pool;
    return pool.connect();
}

module.exports = { connect }
