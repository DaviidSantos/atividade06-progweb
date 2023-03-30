class Pessoa {
    constructor(nome, email, idade, ...hobbies) {
        this.nome = nome,
        this.email = email,
        this.idade = idade,
        this.hobbies = hobbies
    }
}

const listaDePessoas = [
    new Pessoa('David', 'david.santos54@fatec.sp.gov.br', 21, 'Programar', 'Basquete', 'Anime'),
    new Pessoa('Sirlene', 'sirlene@gmail.com', 26, 'Eletronica', 'Programar'),
    new Pessoa('Joãozinho', 'joaozinho@gmail.com', 23, 'Video Game', 'Corrida')
]

export const listarPessoas = async (req, res) => {
    return res.status(200).json(listaDePessoas);
}

export const procurarPessoa = async (req, res) => {
    const { nome } = req.params;

    const pessoa = listaDePessoas.filter((pessoa) => pessoa.nome.toUpperCase() === nome.toUpperCase());

    if (!pessoa) return res.status(404).json({ erro: 'Pessoa não encontrada!'});

    res.status(200).json(pessoa);    
}