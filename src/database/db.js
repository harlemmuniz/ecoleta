// importar a dependencia do SQLite3

const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
    // utilizar o objeto de banco de dados para nossas operações

db.serialize(() => {

    //     // 1 criar uma tabela no banco de dados
    //     db.run(`
    //         CREATE TABLE IF NOT EXISTS places (
    //             id INTEGER PRIMARY KEY AUTOINCREMENT,
    //             name TEXT,
    //             image TEXT,
    //             adress TEXT,
    //             adress2 TEXT,
    //             state TEXT,
    //             city TEXT,
    //             items TEXT
    //         );
    //     `)

    //     // 2 inserir os dados na tabela
    //     const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         adress,
    //         adress2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    //     const values = [
    //         "Papersider",
    //         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //         "Guilherme Gemballa, Jardim América",
    //         "Nº 260",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Papéis e Papelões"
    //     ]

    //     function afterInsertData(err) {
    //         if (err) {
    //             return console.log(err)
    //         }

    //         console.log("Cadastrado com sucesso")
    //         console.log(this)
    //     }

    //     db.run(query, values, afterInsertData)

    // 3 consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os registros: ")
    //     console.log(rows)
    // })

    // 4 deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
})