//BOTÕES DE APARIÇÃO NA PÁGINA
let b1 = $('button')[0];
//Cria variavel e evento do botao 'Apresentação'
b1.onclick = function () {
    $('#sobre').toggle();
}

let b2 = $('button')[1];
//Cria variavel e evento do botao 'Integrantes'
b2.onclick = function () {
    $('#autores').toggle();
}



//Iniciamos com um array bidimensional, que irá receber a opção escolhida pelo usuário: 
let sudokutab = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],       
    ['', '', '', '', '', '', '', '', ''],       
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];



//OPÇÕES:
//Primeira opção de tabela
let op1 = [
    ['5', '3', '', '', '7', '', '', '', ''],
    ['6', '', '', '1', '9', '5', '', '', ''],
    ['', '9', '8', '', '', '', '', '6', ''],
    ['8', '', '', '', '6', '', '', '', '3'],
    ['4', '', '', '8', '', '3', '', '', '1'],       
    ['7', '', '', '', '2', '', '', '', '6'],      
    ['', '6', '', '', '', '', '2', '8', ''],
    ['', '', '', '4', '1', '9', '', '', '5'],
    ['', '', '', '', '8', '', '', '7', '9']
];
//Resolução da primeira tabela, ela é comparada com as entradas do usuário
let resolucaoop1 = [
    ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
    ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
    ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
    ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
    ['4', '2', '6', '8', '5', '3', '7', '9', '1'],       
    ['7', '1', '3', '9', '2', '4', '8', '5', '6'],      
    ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
    ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
    ['3', '4', '5', '2', '8', '6', '1', '7', '9']

];
//segunda opção de tabela

let op2 = [
    ['9', '4', '', '1', '', '2', '', '5', '8'],
    ['6', '', '', '', '5', '', '', '', '4'],
    ['', '', '2', '4', '', '3', '1', '', ''],
    ['', '2', '', '', '', '', '', '6', ''],
    ['5', '', '8', '', '2', '', '4', '', '1'],       
    ['', '6', '', '', '', '', '', '8', ''],      
    ['', '', '1', '6', '', '8', '7', '', ''],
    ['7', '', '', '', '4', '', '', '', '3'],
    ['4', '3', '', '5', '', '9', '', '1', '2']

];
//resolução da segunda tabela
let resolucaoop2 = [
    ['9', '4', '7', '1', '6', '2', '3', '5', '8'],
    ['6', '1', '3', '8', '5', '7', '9', '2', '4'],
    ['8', '5', '2', '4', '9', '3', '1', '7', '6'],
    ['1', '2', '9', '3', '8', '4', '5', '6', '7'],
    ['5', '7', '8', '9', '2', '6', '4', '3', '1'],       
    ['3', '6', '4', '7', '1', '5', '2', '8', '9'],      
    ['2', '9', '1', '6', '3', '8', '7', '4', '5'],
    ['7', '8', '5', '2', '4', '1', '6', '9', '3'],
    ['4', '3', '6', '5', '7', '9', '8', '1', '2']

];

let op3 = [
    ['3', '7', '', '6', '', '9', '', '2', '1'],
    ['4', '', '', '', '8', '', '', '', '3'],
    ['', '', '6', '3', '', '5', '7', '', ''],
    ['6', '', '4', '', '', '', '3', '', '9'],
    ['', '9', '', '', '3', '', '', '8', ''],       
    ['2', '', '7', '', '', '', '1', '', '4'],       
    ['', '', '1', '9', '', '8', '4', '', ''],
    ['5', '', '', '', '6', '', '', '', '7'],
    ['8', '2', '', '1', '', '4', '', '9', '5']

];

let resolucaoop3 = [
    ['3', '7', '8', '6', '4', '9', '5', '2', '1'],
    ['4', '5', '2', '7', '8', '1', '9', '6', '3'],
    ['9', '1', '6', '3', '2', '5', '7', '4', '8'],
    ['6', '8', '4', '5', '1', '2', '3', '7', '9'],
    ['1', '9', '5', '4', '3', '7', '2', '8', '6'],       
    ['2', '3', '7', '8', '9', '6', '1', '5', '4'],       
    ['7', '8', '1', '9', '5', '8', '4', '3', '2'],
    ['5', '4', '9', '2', '6', '3', '8', '1', '7'],
    ['8', '2', '3', '1', '7', '4', '6', '9', '5']
];

//criação da tabela vazia
tabela(); 

//escolha do usuário:
let bf = $('button')[2]; //recebe opção 1
let bm = $('button')[3]; //recebe opção 2
let bd = $('button')[4]; //recebe opção 3


//AQUI A TABELA "OP1" É CHAMADA E O VAZIO DO "SUDOKUTAB" É PREENCHIDO COM OS VALORES
bf.onclick = function () { 
    sudokutab = op1;
    resolucao = resolucaoop1;
    tabela();
    $('input');
    $('tr');
    aviso.hide();
}

//AQUI A TABELA "OP2" É CHAMADA E O VAZIO DO "SUDOKUTAB" É PREENCHIDO COM OS VALORES
bm.onclick = function () {  
    sudokutab = op2;
    resolucao = resolucaoop2;
    tabela();
    $('input');
    $('tr');
    aviso.hide();
}

//AQUI A TABELA "OP3" É CHAMADA E O VAZIO DO "SUDOKUTAB" É PREENCHIDO COM OS VALORES
bd.onclick = function () { 
    sudokutab = op3;
    resolucao = resolucaoop3;
    tabela();
    $('input');
    $('tr');
    aviso.hide();
}

function tabela() {
    // apaga a tabela anterior para não haver sobreposição
    $('tr').remove(); 

    //FUNÇÃO DE VERIFICAÇÃO DOS VALORES DAS CÉLULAS
    let celula1 = [];
    let celula2 = [];
    let celula3 = [];
    let celula4 = [];
    let celula5 = [];   
    let celula6 = [];
    let celula7 = [];
    let celula8 = [];
    let celula9 = [];

    let QUADRO = [celula1, celula2, celula3, celula4, celula5, celula6, celula7, celula8, celula9];


//AQUI O USUÁRIO RECEBE MENSAGENS QUANTO AOS SEUS INPUTS
let aviso = $('#aviso');
aviso.hide();
//FUNÇÃO QUE VERIFICA ONDE ESTÁ O INPUT 
///VERIFICA O ID DO "P"= INPUT E ESTABELECE O GRUPO
function nja(a1, a2, a3, a4, a5, a6, a7, a8, a9, p, l, c) {
    if (p.attr('id')[2] <= 2 && p.attr('id')[3] <= 2) {
        a1.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] <= 2 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a2.push(sudokutab[l][c]);
    }

    if (p.attr('id')[2] <= 2 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a3.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] <= 2) {
        a4.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a5.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 2 && p.attr('id')[2] <= 5 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a6.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] <= 2) {
        a7.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] > 2 && p.attr('id')[3] <= 5) {
        a8.push(sudokutab[l][c]);
    }
    if (p.attr('id')[2] > 5 && p.attr('id')[2] <= 8 && p.attr('id')[3] > 5 && p.attr('id')[3] <= 8) {
        a9.push(sudokutab[l][c]);
    }
}

    // CRIANDO LINHAS NA TABELA:
    for (let l = 0; l <= 8; l++) { 

        let tr = $('<tr>');
    // CRIANDO COLUNAS    
        for (let c = 0; c <= 8; c++) {  
            let td = $('<td>');

            //INSERÇÃO DOS VALORES NA TABELA

            //Se o valor de <td> for diferente de 0, um input é criado 
            if (sudokutab[l][c] != 0) { 
                // <p> recebe id de linha e coluna
                let p = $(`<p id="LC${l}${c}"> ${sudokutab[l][c]} </p>`); 
                td.append(p);    //adiciona o <p> ao <td> criado
                tr.append(td);   //adiciona o <td> a <tr> criada  
                nja(celula1, celula2, celula3, celula4, celula5, celula6, celula7, celula8, celula9, p, l, c);

                //VALORES DE ENTRADA DO USUÁRIO:

            } else {
                let input = $(`<input type="text" maxlength="1" id="LC${l}${c}" value="${sudokutab[l][c]}">`);
                //se o valor fo 0(vazio) cria-se input  
                 //adiciona input ao <td>    
                td.append(input); 
                //adiciona <td> ao <tr>         
                tr.append(td);  
                
                //RECEBIMENTO DOS INPUTS:

                input.on('input',          //cria evento no input quando se recebe input
                    //função executada na entrada de um input
                    function (e) {        
                        let el = $(this);               //armazena-se a propria tag input             
                        let linha = el.attr('id')[2];   //armazena o terceiro valor do id(linha)
                        let coluna = el.attr('id')[3];  //armazena o quarto valor do id(coluna)
                        let valor = el.val();           //armazena o valor digitado
                        let elid = el.attr('id');

                        let a = false;
                        let b = false;
                        let c = false;

                        if (sudokutab[linha].includes(valor) && valor != 0) {

                            let existel = $('<p class="aviso">Ops, já existe nessa linha! Use outro valor! </p>');
                            aviso.append(existel);
                            aviso.show();

                            a = true;
                        } else {
                            for (let i = 0; i < 9; i++) {
                                if (sudokutab[i][coluna] == valor && valor != 0) {

                                    let existec = $('<p class="aviso">Ops, já existe nessa coluna! Use outro valor!</p>');
                                    aviso.append(existec);
                                    aviso.show();

                                    b = true;
                                }        
                            }
                        }

                        if (a == true || b == true || c == true) {
                            console.log('Use outro valor');
                        } else {
                            $('.aviso').remove();
                            aviso.hide();
                            sudokutab[linha][coluna] = valor;
                        }

                        let t = 0;
                        let f = 0;

                        for (let i = 0; i < 9; i++) {

                            for (let j = 0; j < 9; j++) {
                                if (sudokutab[i][j] == resolucao[i][j]) {
                                    t++;

                                } else {
                                    f++;
                                }
                            }
                        }
                        if (t == 81) {
                            let win = $('<p class="aviso">Você conseguiu!</p>');
                            aviso.append(win);
                            aviso.show();
                        }
                        console.log(sudokutab); //mostra o array atualizado no console
                        console.log(area5);

                    }

                );

            }
        }

        $('#tabela').append(tr); //adiciona as <tr> com <tds> na tabela
    }

}
