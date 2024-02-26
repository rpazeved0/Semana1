let valor = 300;
let nome = "Rafael";
let isPago = false;
let qualquer = "";
qualquer = 654;
//Arrays
const lista = [];
lista.push("asdasdasd", "ldlasldalsd", 22, true);
const listaNumeros = [];
listaNumeros.push(10, 11, 22, 1.23);
var TipoTransacao1;
(function (TipoTransacao1) {
    TipoTransacao1["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao1["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao1["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao1 || (TipoTransacao1 = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao1.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};
