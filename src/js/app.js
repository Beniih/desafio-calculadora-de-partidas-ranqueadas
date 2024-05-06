function calcularRanking() {
    let heroName = document.getElementById("heroname").value;
    let vitorias = document.getElementById("victory").value;
    let derrotas = document.getElementById("defeat").value;

    if (isNaN(vitorias) || isNaN(derrotas) || !vitorias || !derrotas) {
        alert("Inisra quantidades válidas de vitórias e derrotas!");
        return;
    };

    let saldo = vitorias - derrotas;

    let rank = ranking(saldo);
     
    document.getElementById("result").innerText = "O Herói tem de saldo de "+saldo+" e está no nível de "+rank+"!";

    document.getElementById("result").style.direction = "block";
    document.getElementById("match-list").style.display = "none";
}

function ranking(saldo) {
    let rank
    switch(true){
        case saldo<=10:
            return rank = "Ferro";
            break;
        case saldo<=20:
            return rank = "Bronze";
            break;
        case saldo<=50:
            return rank = "Prata";
            break;
        case saldo<=80:
            return rank = "Ouro";
            break;
        case saldo<=90:
            return rank = "Diamante";
            break;
        case saldo<=100:
            return rank = "Lendário";
            break;
        default:
            return rank = "Imortal";
            break;
    }
    return rank
}