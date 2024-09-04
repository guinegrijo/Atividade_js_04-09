module.exports = class controllerNumbers {
  //Cadastro de pessoa
  static async checkPar(req, res) {
    const { numero } = req.body

    if (isNaN(numero) || typeof numero == "string") {
      res.status(404).json({ message: " Digite um número valido" });
    } else {
      if (numero % 2 === 0) {
        res.status(200).json({ message: `O número: ${numero} é par` });
      } else {
        res.status(200).json({ message: `O número: ${numero} é impar` });
      }
    }
  }


  static async checkPrimo(req, res) {
    const { numero } = req.body


    // Criando a função para verificar se um número é ou não primo
    function primos(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          /* Se um número(num) é divisível por qualquer número(i) entre 2 e a raíz dele(num), 
            ele não é primo*/
            return false
        }
      }
      return true
    }

    if (isNaN(numero) || typeof numero === "string") {
        res.status(404).json({ message: " Digite um número valido" })
    } else if (primos(numero)){
        res.status(200).json({ message: `O número: ${numero} é Primo` });
    } else {
        res.status(200).json({ message: `O número: ${numero} não é Primo` });
    }
  }
}
