// Portugues
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// Data[0] PT-BR
// Data[1] Ingles
// Data[2] Espanhol

function text(n=int){
    readTextFile("data.json", function(text){
        var data = JSON.parse(text);
    
    document.getElementById("sobre").innerHTML = data[n].sobre;
    document.getElementById("sobre_p1").innerHTML = data[n].sobre_p1;
    document.getElementById("sobre_p2").innerHTML = data[n].sobre_p2;
    document.getElementById("sobre_p3").innerHTML = data[n].sobre_p3;
    document.getElementById("sobre_p4").innerHTML = data[n].sobre_p4;
    document.getElementById("sobre_p5").innerHTML = data[n].sobre_p5;
    document.getElementById("sobre_p6").innerHTML = data[n].sobre_p6;

    document.getElementById("formacao").innerHTML = data[n].formacao;
    document.getElementById("formacao_p1").innerHTML = data[n].formacao_p1;
    document.getElementById("habilidades").innerHTML = data[n].habilidades;
    });

}
