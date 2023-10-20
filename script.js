function entrar(){
    let candidato1;
    let candidato2;
    let candidato3;
    let votoBranco;
    let votoNulo;
    let encerrar;
    let voto;
    let ganhador;
    let votoTotal;

    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    votoBranco = 0;
    votoNulo = 0;
    encerrar = 0;

    do {
        
        voto = parseInt(prompt(
           '|1| Candidato 1\n'+
           '|2| Candidato 2\n'+ 
           '|3| Candidato 3\n' +
           '|5| Voto Branco\n' +
           '|8| Voto Nulo\n' +
           '|0| Encerrar\n'));
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
        else if (voto == 0){
            encerrar++
        }
    } while (encerrar == 0);

    console.log('Candidato 1 recebeu: ' + candidato1 + ' votos');
    console.log('Candidato 2 recebeu: ' + candidato2 + ' votos');
    console.log('Candidato 3 recebeu: ' + candidato3 + ' votos');
    console.log('Voto branco recebeu: ' + votoBranco + ' votos');
    console.log('Voto nulo recebeu:   ' + votoNulo   + ' votos');

    if(candidato1 > candidato2 && candidato1 > candidato3){
        console.log('O candidato 1 é o ganhador !!!!')
        ganhador = candidato1
    }
    else if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log('O candidato 2 é o ganhador !!!!')
        ganhador = candidato2
    }
    else if ( candidato3 > candidato1 && candidato3 > candidato2){
        console.log('O candidato 3 é o ganhador !!!!')
        ganhador = candidato3
    }
    else{
        console.log('Empate')
        
    }
    votoTotal = ganhador + votoBranco;
    console.log('Total de votos do ganhador + votos brancos: ' + votoTotal )
}