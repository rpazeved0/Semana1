let valor: number = 300;
let nome: string = "Rafael"
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 654;


//Arrays
const lista = [];
lista.push("asdasdasd","ldlasldalsd",22, true);

const listaNumeros: number[] = [];
listaNumeros.push(10,11,22, 1.23);

//Tipo Personalizado
type Transacao1 = {
    tipoTransacao: TipoTransacao1;
    data: Date;
    valor: number;

}

enum TipoTransacao1 {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao1 = {
    tipoTransacao: TipoTransacao1.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}
