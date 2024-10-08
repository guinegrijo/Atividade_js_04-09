const express = require('express') //importa o módulo express
const { use } = require('express/lib/application')

//Define uma class para organizar a lógica da aplicação

class AppControllers{
    constructor(){
        //Cria uma novo instância do express dentro da class
        this.express = express()
        //chama o método middlewares para configurar os middlewares
        this.middlewares()
        //chama o método routes para definir as rotas da API
        this.routes()
    }
    middlewares(){
        //permitir que a aplicação receba dados em formato JSON nas requisições
        this.express.use(express.json())
    }
    //Define as rotas da nossa API
    routes(){


        const apiRoutes = require("./routes/apiRoutes")
        this.express.use("/project-senai/api/v1", apiRoutes)

        //Define uma rota Get para o caminho health
        this.express.get("/health/", (req, res)=>{
            res.send({
                nome: "Guilherme Negrijo",
                idade: "16 anos",
                CPF: "473.974.768-56"
             })
        }) //Essa rota é usada para verificar se a API está OK
    }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppControllers().express