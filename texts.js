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

    document.getElementById("idioma").innerHTML = data[n].idioma;

    // document.getElementById("sobre_p7").innerHTML = data[n].sobre_p7;

    document.getElementById("sobre").innerHTML = data[n].sobre;
    document.getElementById("sobre_p1").innerHTML = data[n].sobre_p1;
    document.getElementById("sobre_p2").innerHTML = data[n].sobre_p2;
    document.getElementById("sobre_p3").innerHTML = data[n].sobre_p3;
    document.getElementById("sobre_p4").innerHTML = data[n].sobre_p4;
    document.getElementById("sobre_p5").innerHTML = data[n].sobre_p5;
    document.getElementById("sobre_p6").innerHTML = data[n].sobre_p6;

    document.getElementById("formacao").innerHTML = data[n].formacao;
    document.getElementById("formacao_p2").innerHTML = data[n].formacao_p2;
    document.getElementById("formacao_p1").innerHTML = data[n].formacao_p1;
    
    document.getElementById("habilidades").innerHTML = data[n].habilidades;

    document.getElementById("programacao").innerHTML = data[n].programacao;
    document.getElementById("analise").innerHTML = data[n].analise;
    document.getElementById("processos").innerHTML = data[n].processos;
    document.getElementById("iot").innerHTML = data[n].iot;

    document.getElementById("p1_r1_c1").innerHTML = data[n].p1_r1_c1;
    document.getElementById("p1_r1_c2").innerHTML = data[n].p1_r1_c2;
    document.getElementById("p1_r1_c3").innerHTML = data[n].p1_r1_c3;
    document.getElementById("p1_r1_c4").innerHTML = data[n].p1_r1_c4;
    document.getElementById("p1_r1_c5").innerHTML = data[n].p1_r1_c5;

    document.getElementById("p1_r2_c1").innerHTML = data[n].p1_r2_c1;
    document.getElementById("p1_r2_c2").innerHTML = data[n].p1_r2_c2;
    document.getElementById("p1_r2_c3").innerHTML = data[n].p1_r2_c3;
    document.getElementById("p1_r2_c4").innerHTML = data[n].p1_r2_c4;
    document.getElementById("p1_r2_c5").innerHTML = data[n].p1_r2_c5;

    document.getElementById("p1_r3_c1").innerHTML = data[n].p1_r3_c1;
    document.getElementById("p1_r3_c2").innerHTML = data[n].p1_r3_c2;
    document.getElementById("p1_r3_c3").innerHTML = data[n].p1_r3_c3;
    document.getElementById("p1_r3_c4").innerHTML = data[n].p1_r3_c4;
    document.getElementById("p1_r3_c5").innerHTML = data[n].p1_r3_c5;

    document.getElementById("p2_r1_c1").innerHTML = data[n].p2_r1_c1;
    document.getElementById("p2_r1_c2").innerHTML = data[n].p2_r1_c2;
    document.getElementById("p2_r1_c3").innerHTML = data[n].p2_r1_c3;
    document.getElementById("p2_r1_c4").innerHTML = data[n].p2_r1_c4;
    document.getElementById("p2_r1_c5").innerHTML = data[n].p2_r1_c5;

    document.getElementById("p2_r2_c1").innerHTML = data[n].p2_r2_c1;
    document.getElementById("p2_r2_c2").innerHTML = data[n].p2_r2_c2;
    document.getElementById("p2_r2_c3").innerHTML = data[n].p2_r2_c3;
    document.getElementById("p2_r2_c4").innerHTML = data[n].p2_r2_c4;
    document.getElementById("p2_r2_c5").innerHTML = data[n].p2_r2_c5;

    document.getElementById("p2_r3_c1").innerHTML = data[n].p2_r3_c1;
    document.getElementById("p2_r3_c2").innerHTML = data[n].p2_r3_c2;
    document.getElementById("p2_r3_c3").innerHTML = data[n].p2_r3_c3;
    document.getElementById("p2_r3_c4").innerHTML = data[n].p2_r3_c4;
    document.getElementById("p2_r3_c5").innerHTML = data[n].p2_r3_c5;

    document.getElementById("p3_r1_c1").innerHTML = data[n].p3_r1_c1;
    document.getElementById("p3_r1_c2").innerHTML = data[n].p3_r1_c2;
    document.getElementById("p3_r1_c3").innerHTML = data[n].p3_r1_c3;
    document.getElementById("p3_r1_c4").innerHTML = data[n].p3_r1_c4;
    document.getElementById("p3_r1_c5").innerHTML = data[n].p3_r1_c5;

    document.getElementById("p3_r2_c1").innerHTML = data[n].p3_r2_c1;
    document.getElementById("p3_r2_c2").innerHTML = data[n].p3_r2_c2;
    document.getElementById("p3_r2_c3").innerHTML = data[n].p3_r2_c3;
    document.getElementById("p3_r2_c4").innerHTML = data[n].p3_r2_c4;
    document.getElementById("p3_r2_c5").innerHTML = data[n].p3_r2_c5;

    document.getElementById("p3_r3_c1").innerHTML = data[n].p3_r3_c1;
    document.getElementById("p3_r3_c2").innerHTML = data[n].p3_r3_c2;
    document.getElementById("p3_r3_c3").innerHTML = data[n].p3_r3_c3;
    document.getElementById("p3_r3_c4").innerHTML = data[n].p3_r3_c4;
    document.getElementById("p3_r3_c5").innerHTML = data[n].p3_r3_c5;

    document.getElementById("p4_r1_c1").innerHTML = data[n].p4_r1_c1;
    document.getElementById("p4_r1_c2").innerHTML = data[n].p4_r1_c2;
    document.getElementById("p4_r1_c3").innerHTML = data[n].p4_r1_c3;
    document.getElementById("p4_r1_c4").innerHTML = data[n].p4_r1_c4;
    document.getElementById("p4_r1_c5").innerHTML = data[n].p4_r1_c5;

    document.getElementById("p4_r2_c1").innerHTML = data[n].p4_r2_c1;
    document.getElementById("p4_r2_c2").innerHTML = data[n].p4_r2_c2;
    document.getElementById("p4_r2_c3").innerHTML = data[n].p4_r2_c3;
    document.getElementById("p4_r2_c4").innerHTML = data[n].p4_r2_c4;
    document.getElementById("p4_r2_c5").innerHTML = data[n].p4_r2_c5;

    document.getElementById("p4_r3_c1").innerHTML = data[n].p4_r3_c1;
    document.getElementById("p4_r3_c2").innerHTML = data[n].p4_r3_c2;
    document.getElementById("p4_r3_c3").innerHTML = data[n].p4_r3_c3;
    document.getElementById("p4_r3_c4").innerHTML = data[n].p4_r3_c4;
    document.getElementById("p4_r3_c5").innerHTML = data[n].p4_r3_c5;

    document.getElementById("projetos").innerHTML = data[n].projetos;

    document.getElementById("titulo_proj_1").innerHTML = data[n].titulo_proj_1;
    document.getElementById("proj_1_1").innerHTML = data[n].proj_1_1;
    document.getElementById("proj_1_2").innerHTML = data[n].proj_1_2;
    document.getElementById("proj_1_3").innerHTML = data[n].proj_1_3;
    document.getElementById("proj_1_4").innerHTML = data[n].proj_1_4;
    document.getElementById("proj_1_5").innerHTML = data[n].proj_1_5;
    
    document.getElementById("titulo_proj_2").innerHTML = data[n].titulo_proj_2;
    document.getElementById("proj_2_1").innerHTML = data[n].proj_2_1;
    document.getElementById("proj_2_2").innerHTML = data[n].proj_2_2;
    document.getElementById("proj_2_3").innerHTML = data[n].proj_2_3;
    document.getElementById("proj_2_4").innerHTML = data[n].proj_2_4;
    document.getElementById("proj_2_5").innerHTML = data[n].proj_2_5;

    document.getElementById("titulo_proj_3").innerHTML = data[n].titulo_proj_3;
    document.getElementById("proj_3_1").innerHTML = data[n].proj_3_1;
    document.getElementById("proj_3_2").innerHTML = data[n].proj_3_2;
    document.getElementById("proj_3_3").innerHTML = data[n].proj_3_3;
    document.getElementById("proj_3_4").innerHTML = data[n].proj_3_4;
    document.getElementById("proj_3_5").innerHTML = data[n].proj_3_5;

    document.getElementById("titulo_proj_4").innerHTML = data[n].titulo_proj_4;
    document.getElementById("proj_4_1").innerHTML = data[n].proj_4_1;
    document.getElementById("proj_4_2").innerHTML = data[n].proj_4_2;
    document.getElementById("proj_4_3").innerHTML = data[n].proj_4_3;
    document.getElementById("proj_4_4").innerHTML = data[n].proj_4_4;
    document.getElementById("proj_4_5").innerHTML = data[n].proj_4_5;


    document.getElementById("experiencia").innerHTML = data[n].experiencia;

    document.getElementById("penultimo_ano").innerHTML = data[n].penultimo_ano;
    document.getElementById("penultimo_cargo").innerHTML = data[n].penultimo_cargo;
    document.getElementById("penultimo_desc").innerHTML = data[n].penultimo_desc;

    document.getElementById("antepenultimo_ano").innerHTML = data[n].antepenultimo_ano;
    document.getElementById("antepenultimo_cargo").innerHTML = data[n].antepenultimo_cargo;
    document.getElementById("antepenultimo_desc").innerHTML = data[n].antepenultimo_desc;

    document.getElementById("atual_ano").innerHTML = data[n].atual_ano;
    document.getElementById("atual_cargo").innerHTML = data[n].atual_cargo;
    document.getElementById("atual_desc").innerHTML = data[n].atual_desc;

    document.getElementById("ultimo_ano").innerHTML = data[n].ultimo_ano;
    document.getElementById("ultimo_cargo").innerHTML = data[n].ultimo_cargo;
    document.getElementById("ultimo_desc").innerHTML = data[n].ultimo_desc;

});

}
