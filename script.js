function sacar() {
   
    var saque = entrada = parseInt(prompt("Valor do saque(apenas números inteiros sem pontos)"));
    console.log(entrada)

    var cont100 = 0;
    var cont50 = 0;
    var cont20 = 0;
    var cont10 = 0;

    if (saque != 0) {
        while (saque >= 100) {
            cont100++;
            saque -= 100;
        }
        while (saque >= 50) {
            cont50++;
            saque -= 50;
        }

        while (saque >= 20) {
            cont20++;
            saque -= 20;
        }

        while (saque >= 10) {
            cont10++;
            saque -= 10;
        }

    }

    var total = (cont100 * 100 + cont50 * 50 + cont20 * 20 + cont10 * 10);
    var data = new Date;

    document.getElementById("cont100").innerHTML = cont100;
    document.getElementById("cont50").innerHTML = cont50;
    document.getElementById("cont20").innerHTML = cont20;
    document.getElementById("cont10").innerHTML = cont10;

    var resto = entrada - total;

    var visualizacao = ("Ficou na sua conta o valor de: R$" + resto);
    document.getElementById("visualizacao").innerHTML = visualizacao;


    var time = ("Consulta realizado Hoje " + "as " + data.getHours()
    + "h" + data.getMinutes() + "m" + data.getSeconds() + "s");
    document.getElementById("time").innerHTML = time;


}