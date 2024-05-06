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

    document.getElementById("result").style.display = "flex";
    document.getElementById("match-list").style.display = "none";
}

function ranking(saldo) {
    const rankings = [
        { limite: 10, rank: "Ferro" },
        { limite: 20, rank: "Bronze" },
        { limite: 50, rank: "Prata" },
        { limite: 80, rank: "Ouro" },
        { limite: 90, rank: "Diamante" },
        { limite: 100, rank: "Lendário" }
    ];

    for (let i = 0; i < rankings.length; i++) {
        if (saldo <= rankings[i].limite) {
            return rankings[i].rank;
        }
    }

    return "Imortal";
}