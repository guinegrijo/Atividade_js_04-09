module.exports = class teacherController {
    //Cadastro de pessoa
    static async postTeacher(req, res){
        const {nome, cargaHoraria} = req.body
        if (!nome || !cargaHoraria){
            res.status(404).json({message:" Dados invalidos"})
        } else {
            res.status(200).json({message:"Informação recebida: Docente cadastrado com sucesso", nome, cargaHoraria})
        }
    }

    //listar professor
    static async getTeacher(req, res){
        res.status(200).json({nome:"Negrijo"})
    }
}