function entrar(){
    let candidato1;
    let candidato2;
    let candidato3;
    let votoBranco;
    let votoNulo;
    let encerrar;
    let confirmacao;
    let voto;
    let ganhador;
    let votoTotal;
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    const senha = 759304;

    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    votoBranco = 0;
    votoNulo = 0;
    encerrar = 0;
    nomeCandidato1 = prompt('Digite o nome do candidato 1')
    nomeCandidato2 = prompt('Digite o nome do candidato 2')
    nomeCandidato3 = prompt('Digite o nome do candidato 3')

    do {
        voto = parseInt(prompt(
           '|1| '+ nomeCandidato1 +'\n' +
           '|2| '+nomeCandidato2 +'\n'+ 
           '|3|'+nomeCandidato3 +'\n'+
           '|5| Voto Branco\n' +
           '|8| Voto Nulo\n' +
           ''));
        if(voto == 1){
            candidato1++
            console.log('Voto confirmado!')
        }
        else if (voto == 2){
            candidato2++
            console.log('Voto confirmado!')
        }
        else if (voto == 3){
            candidato3++
            console.log('Voto confirmado!')
        }
        else if (voto == 5 ){
            votoBranco++
            console.log('Voto Confirmado!')
        }
        else if(voto == 8){
            votoNulo++
            console.log('Voto confirmado!')
        }
        else if (voto == senha){
            confirmacao = prompt('Você tem certeza que deseja encerrar a votação ? (S) (N)').toUpperCase()
            if(confirmacao =='S'){
                encerrar++
            }
            else{
                continue
            }

        }
    } while (encerrar == 0);

    console.log(nomeCandidato1 + ' recebeu: ' + candidato1 + ' votos');
    console.log(nomeCandidato2 + ' recebeu: ' + candidato2 + ' votos');
    console.log(nomeCandidato3 + ' recebeu: ' + candidato3 + ' votos');
    console.log('Voto branco recebeu: ' + votoBranco + ' votos');
    console.log('Voto nulo recebeu:   ' + votoNulo   + ' votos');

    if(candidato1 > candidato2 && candidato1 > candidato3){
        console.log('O '+ nomeCandidato1 + ' é o ganhador !!!!')
        ganhador = candidato1
    }
    else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log('O '+ nomeCandidato2 + ' 2 é o ganhador !!!!')
        ganhador = candidato2
    }
    else if ( candidato3 > candidato1 && candidato3 > candidato2){
        console.log('O '+ nomeCandidato3 + ' 3 é o ganhador !!!!')
        ganhador = candidato3
    }
    else{
        console.log('Empate')
        
    }
    votoTotal = ganhador + votoBranco;
    console.log('Total de votos do ganhador + votos brancos: ' + votoTotal )
}