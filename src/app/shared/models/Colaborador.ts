export interface Colaborador {
    id: number;
    nome: string;
    cargo: string;
    citacao: string;
    descricao:string;
    contato: ContatoColaborador[]
}

export interface ContatoColaborador {
    tipo: string;
    contato: string;
}