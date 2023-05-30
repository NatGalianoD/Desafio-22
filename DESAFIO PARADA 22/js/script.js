var nome = '';
var resposta = '';
var pontos = 0;
function respostaT(){
    nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Qual o seu nome")
        nome = prompt("Prepare-se para as perguntas  \n Digite seu nome: ")
    }
    
    resposta = prompt("1. O autismo é uma condição que afeta apenas crianças. verdadeiro ou falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta correta")
    }
    resposta = prompt("2. As pessoas com autismo têm dificuldade em compreender e expressar emoções. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("3. As pessoas com autismo preferem rotinas e podem ter dificuldade em lidar com mudanças. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("4. O autismo pode ser diagnosticado precocemente na infância. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("5. A terapia comportamental pode ser eficaz no tratamento do autismo. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("6. Todos os indivíduos com autismo possuem habilidades especiais em áreas específicas. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    

    document.getElementById("tea").innerHTML = `<h2>Olá ${nome}, você escolheu perguntas sobre o Autismo(TEA)<br></h2>`
    if(pontos >= 3){
        document.getElementById("respostaTea").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTea").style = 'background-color: blue';
    } else if(pontos <= 2 ){
        document.getElementById("respostaTea").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTea").style = 'background-color: red';
    }
}
 



function respostaB(){
     nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Diga o seu nome")
        nome = prompt("Prepare-se para as perguntas \n Digite seu nome:")
    }
    resposta = prompt("1. O TDAH é uma condição que afeta apenas crianças.Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada. ")
    }
    resposta = prompt("2. O TDAH é causado por um único fator, como a falta de disciplina dos pais. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada. ")
    }
    resposta = prompt("3. O TDAH pode ser curado com o tempo. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada. ")
    }
    resposta = prompt("4. O TDAH é caracterizado por falta de atenção, hiperatividade e impulsividade. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada.")
    }
    resposta = prompt("5. O TDAH pode ser diagnosticado em adultos.  Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada. ")
    }
    resposta = prompt("6. A medicação é o único tratamento eficaz para o TDAH. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada. ")
    }
    

    document.getElementById("tdah").innerHTML = `<h2>Olá ${nome}, Você escolheu perguntas sobre TDAH.</h2>`
    if(pontos >= 3){
        document.getElementById("respostaTdah").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTdah").style = 'background-color: green';
    } else if(pontos <= 2 ){
        document.getElementById("respostaTdah").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaTdah").style = 'background-color: red';
    }
    
}
function respostaS(){
     nome = prompt("Prepare-se para as perguntas \n Digite seu nome: ")
    while(nome == ''){
        alert("Diga o seu nome")
        nome = prompt("Prepare-se para as perguntas \n Digite seu nome:")
    }
    resposta = prompt("1. A dislexia está relacionada à visão e à capacidade de ver as palavras corretamente. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("2. A dislexia é uma condição permanente que não pode ser superada. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada")
    }
    resposta = prompt("3. A dislexia é um transtorno de aprendizagem que afeta apenas a leitura. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("4. A dislexia é um problema de processamento de linguagem que pode afetar a escrita, a leitura e a ortografia.Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("5. O sono é importante para o funcionamento pleno do organismo?  verdadeiro ou falso?").toLowerCase();
    if(resposta == 'verdadeiro'){
        pontos++
    }else{
        alert("Resposta errada ")
    }
    resposta = prompt("6. A dislexia é mais comum em meninos do que em meninas. Verdadeiro ou Falso?").toLowerCase();
    if(resposta == 'falso'){
        pontos++
    }else{
        alert("Resposta correta")
    }
    document.getElementById("dislexia").innerHTML = `<h2>Olá ${nome}, você escolheu perguntas sobre Dislexia</h2>`
    if(pontos >= 3){
        document.getElementById("respostaDis").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaDis").style = 'background-color: green';
    } else if(pontos <= 2 ){
        document.getElementById("respostaDis").innerHTML = `<h3>Você fez <br> ${pontos} pontos </h3>`
        pontos = 0;

        document.getElementById("respostaDis").style = 'background-color: red';
    }
}