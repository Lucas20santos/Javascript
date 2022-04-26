(async () => 
{
    const db = require("./db");
    
    // console.log('INSERT INTO CLIENTES');
    // const result = await db.insertCustomer({cod_cliente: 6, nome_cliente: "Marcelo", sobrenome_cliente: "Perreira"});
    // console.log(result.rowCount);
    
    const clientes = await db.selectCustomer();
    console.log('NOME: ');
    let isTrue = false;
    clientes.forEach(item => {
        if('Fabio' === item['nome_cliente']) isTrue = true;
    });
    
    if(isTrue) console.log('Cliente existente');
    else console.log('Cliente não existente');

})();


