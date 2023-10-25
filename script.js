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
    let senha;
    let confirmacaoNome;
    let audio = document.getElementById('meuAudio')
    const resetAudio = audio.currentTime = 0;
    confirmacaoNome = false;
    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    votoBranco = 0;
    votoNulo = 0;
    encerrar = 0;

    do {
        nomeCandidato1 = prompt('Digite o nome do candidato 1')
        nomeCandidato2 = prompt('Digite o nome do candidato 2')
        nomeCandidato3 = prompt('Digite o nome do candidato 3')
        console.log('Candidato 1: '+ nomeCandidato1)
        console.log('Candidato 2: '+ nomeCandidato2)
        console.log('Candidato 3: '+ nomeCandidato3)
        if(confirm('Você tem certeza que esses  são os candidatos ?')){
            confirmacaoNome = true
        }

    } while (confirmacaoNome == 0);

    senha = parseInt(prompt('Digite uma senha para o encerramento da votação'))

    do {
        resetAudio
        voto = parseInt(prompt(
           '|1| '+nomeCandidato1 +'\n' +
           '|2| '+nomeCandidato2 +'\n'+ 
           '|3| '+nomeCandidato3 +'\n'+
           '|5| Voto Branco\n' 
            ));
            
              
        if(voto == 1){
            if(confirm('Você realmente deseja votar no candidato: '+ nomeCandidato1 )){
                candidato1++
                audio.play()
                resetAudio
                
            }         
    
        }
        else if (voto == 2){
            if(confirm('Você realmente deseja votar no candidato: '+ nomeCandidato2 )){
                candidato2++
                audio.play()
                resetAudio
            }
            
        }
        else if (voto == 3){
            if(confirm('Você realmente deseja votar no candidato: '+ nomeCandidato3 )){
                candidato3++
                audio.play()
                resetAudio
                
            }
            audio.play()
        }
        else if (voto == 5 ){
            votoBranco++
            console.log('Voto em branco Confirmado!')
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

        else {
            if(confirm('Você tem certeza que deseja anular seu voto ?')){
                    votoNulo++
                    console.log('Voto Anulado')
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