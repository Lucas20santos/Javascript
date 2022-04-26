const con = require('./connect')


async function selectCustomer()
{
    const client = await con.connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

async function insertCustomer(customer)
{
    const client = await con.connect();
    const sql = 'INSERT INTO clientes(cod_cliente, nome_cliente, sobrenome_cliente) VALUES ($1,$2,$3);';
    const values = [customer.cod_cliente, customer.nome_cliente, customer.sobrenome_cliente];
    return await client.query(sql, values);
}

module.exports = { selectCustomer, insertCustomer }
