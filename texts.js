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

    document.getElementById("sobre").innerHTML = data[n].sobre;
    document.getElementById("slogan").innerHTML = data[n].slogan;
    document.getElementById("resumido").innerHTML = data[n].resumido;
    
    document.getElementById("sobre_p1").innerHTML = data[n].sobre_p1;
    document.getElementById("sobre_p2").innerHTML = data[n].sobre_p2;
    document.getElementById("sobre_p3").innerHTML = data[n].sobre_p3;
    document.getElementById("sobre_p4").innerHTML = data[n].sobre_p4;
    document.getElementById("sobre_p5").innerHTML = data[n].sobre_p5;
    document.getElementById("sobre_p6").innerHTML = data[n].sobre_p6;
    document.getElementById("sobre_p7").innerHTML = data[n].sobre_p7;

    document.getElementById("formacao").innerHTML = data[n].formacao;
    document.getElementById("formacao_p1").innerHTML = data[n].formacao_p1;
    document.getElementById("formacao_p2").innerHTML = data[n].formacao_p2;
    
    document.getElementById("programacao").innerHTML = data[n].programacao;
    document.getElementById("analise").innerHTML = data[n].analise;
    document.getElementById("processos").innerHTML = data[n].processos;

    document.getElementById("prog1").innerHTML = data[n].prog1;
    document.getElementById("prog2").innerHTML = data[n].prog2;
    document.getElementById("prog3").innerHTML = data[n].prog3;
    document.getElementById("prog4").innerHTML = data[n].prog4;
    document.getElementById("prog5").innerHTML = data[n].prog5;
    document.getElementById("prog6").innerHTML = data[n].prog6;
    document.getElementById("prog7").innerHTML = data[n].prog7;
    document.getElementById("prog8").innerHTML = data[n].prog8;
    document.getElementById("prog9").innerHTML = data[n].prog9;
    document.getElementById("prog10").innerHTML = data[n].prog10;
    document.getElementById("prog11").innerHTML = data[n].prog11;
    document.getElementById("prog12").innerHTML = data[n].prog12;
    // document.getElementById("prog13").innerHTML = data[n].prog13;
    // document.getElementById("prog14").innerHTML = data[n].prog14;
    // document.getElementById("prog15").innerHTML = data[n].prog15;

    document.getElementById("dados1").innerHTML = data[n].dados1;
    document.getElementById("dados2").innerHTML = data[n].dados2;
    document.getElementById("dados3").innerHTML = data[n].dados3;
    document.getElementById("dados4").innerHTML = data[n].dados4;
    document.getElementById("dados5").innerHTML = data[n].dados5;
    document.getElementById("dados6").innerHTML = data[n].dados6;
    document.getElementById("dados7").innerHTML = data[n].dados7;
    // document.getElementById("dados8").innerHTML = data[n].dados8;
    // document.getElementById("dados9").innerHTML = data[n].dados9;
    // document.getElementById("dados10").innerHTML = data[n].dados10;

    document.getElementById("proc1").innerHTML = data[n].proc1;
    document.getElementById("proc2").innerHTML = data[n].proc2;
    document.getElementById("proc3").innerHTML = data[n].proc3;
    document.getElementById("proc4").innerHTML = data[n].proc4;
    document.getElementById("proc5").innerHTML = data[n].proc5;
    document.getElementById("proc6").innerHTML = data[n].proc6;
    document.getElementById("proc7").innerHTML = data[n].proc7;
    document.getElementById("proc8").innerHTML = data[n].proc8;
    document.getElementById("proc9").innerHTML = data[n].proc9;
    document.getElementById("proc10").innerHTML = data[n].proc10;

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



    document.getElementById("projetos").innerHTML = data[n].projetos;

    document.getElementById("titulo_proj_1").innerHTML = data[n].titulo_proj_1;
    document.getElementById("desc_proj_1").innerHTML = data[n].desc_proj_1;
    document.getElementById("status_proj_1").innerHTML = data[n].status_proj_1;

    document.getElementById("titulo_proj_2").innerHTML = data[n].titulo_proj_2;
    document.getElementById("desc_proj_2").innerHTML = data[n].desc_proj_2;
    document.getElementById("status_proj_2").innerHTML = data[n].status_proj_2;

    document.getElementById("titulo_proj_3").innerHTML = data[n].titulo_proj_3;
    document.getElementById("desc_proj_3").innerHTML = data[n].desc_proj_3;
    document.getElementById("status_proj_3").innerHTML = data[n].status_proj_3;

    document.getElementById("titulo_proj_4").innerHTML = data[n].titulo_proj_4;
    document.getElementById("desc_proj_4").innerHTML = data[n].desc_proj_4;
    document.getElementById("status_proj_4").innerHTML = data[n].status_proj_4;

    document.getElementById("titulo_proj_5").innerHTML = data[n].titulo_proj_5;
    document.getElementById("desc_proj_5").innerHTML = data[n].desc_proj_5;
    document.getElementById("status_proj_5").innerHTML = data[n].status_proj_5;

    document.getElementById("titulo_proj_6").innerHTML = data[n].titulo_proj_6;
    document.getElementById("desc_proj_6").innerHTML = data[n].desc_proj_6;
    document.getElementById("status_proj_6").innerHTML = data[n].status_proj_6;

    document.getElementById("titulo_proj_7").innerHTML = data[n].titulo_proj_7;
    document.getElementById("desc_proj_7").innerHTML = data[n].desc_proj_7;
    document.getElementById("status_proj_7").innerHTML = data[n].status_proj_7;

});

}
