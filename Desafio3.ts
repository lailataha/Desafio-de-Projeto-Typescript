enum Trabalho {
    psicologa,
    motorista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'marcos',
    idade: 39,
    profissao: Trabalho.motorista
};

let pessoa2: Humano = {
    nome: 'leticia',
    idade: 25,
    profissao: Trabalho.psicologa
};

let pessoa3: Humano = {
    nome: 'pedro',
    idade: 45,
    profissao: Trabalho.motorista
};

let pessoa4: Humano = {
    nome: "andreia",
    idade: 19,
    profissao: Trabalho.motorista
}