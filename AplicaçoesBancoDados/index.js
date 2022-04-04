(async () => 
{
    const db = require("./db");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({id: 1, nome: "Lucas"});
    console.log(result.rowCount);
    
    console.log("chegou aqui 1");
    console.log('SELECT * FROM CLIENTES;');
    const clientes = await db.selectCustomers();
    console.log("chegou aqui 2");
    console.log(clientes);
})();

