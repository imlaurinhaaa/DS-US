class Aluno{
    constructor(nome, turma) {
        this.id = this.generateId()
        this.nome = nome
        this.turma = turma
    }
    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}

export default Aluno