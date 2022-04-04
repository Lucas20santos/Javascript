async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://postgres:123456@localhost:5432/teste'
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

async function insertCustomer(customer){
    const client = await connect();
    const sql = 'INSERT INTO clientes(id, nome) VALUES ($1,$2);';
    const values = [customer.id, customer.nome];
    return await client.query(sql, values);
}

module.exports = { selectCustomers }
module.exports = { insertCustomer  }
