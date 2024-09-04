//importar a função Router do express (Router é usado para definir rotas específicas da aplicação
const router = require('express').Router()

//importa a controller onde contém a lógica relacionada a professores
const controllerNumbers = require("../controllers/controllerNumbers")

//Rota POST para "/teacher"
router.post("/checkPar/", controllerNumbers.checkPar)
router.post("/checkPrimo/", controllerNumbers.checkPrimo)

module.exports = router
