let score = JSON.parse( localStorage.getItem('score')) || 
        { wins: 0, losses: 0, ties: 0 };
        updatescore();

       
        

        // if (!score) {
        //     score = { wins: 0, losses: 0, ties: 0 };
        // }
        
        function computerPlay() {
            let c= Math.random();
            if (c<= 1/3) {   return 'rock'}
            else if (c<= 2/3) { return 'paper'}
            else { return 'scissor' }
        }

        function playGame( userchoice){
            let computerChoice = computerPlay();
            let result = '';

            
            if (userchoice=== 'rock') {
                if (computerChoice === 'rock') {
                    result = 'tie';
                }
                else if (computerChoice === 'paper') {
                    result = 'loss';
                    }
                    else { result ='win' }
            }

            else if (userchoice==='paper') {
                
                if (computerChoice === 'rock') {
                    result = 'win';
                }
                else if (computerChoice === 'paper') {
                    result = 'tie';
                    }
                    else { result ='loss' }
                
            }

            else if (userchoice=== 'scissor') {
                if (computerChoice === 'rock') {
                    result = 'loss';
                }
                else if (computerChoice === 'paper') {
                    result = 'win';
                    }
                    else { result ='tie' }
            }

            if (result==='tie') {
                score.ties+=1;
            }

            else if (result==='win') {
                score.wins+=1;
            }
            else if (result==='loss') {
                score.losses+=1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            showresult(userchoice, computerChoice,result);
            // document.querySelector('.moves').innerHTML= `you choose ${userchoice} pc choose ${computerChoice}`;
            // document.querySelector('.result').innerHTML=`You ${result}`;
            updatescore();

            
    }

    document.body.addEventListener('keydown' , (event) => {
        if (event.key=== 'r'){
            playGame('rock');
        } else if (event.key==='p')
        {
            playGame('paper');
        }
        else if (event.key==='s'){
            playGame('scissor');
        } 



    })

    function updatescore(){
        document.querySelector('.score').innerHTML= `wins: ${score.wins} loss: ${score.losses} ties: ${score.ties}`;
            

    }

    function showresult(userchoice, computerChoice,result) {
        document.querySelector('.moves').innerHTML= ` You <img src="images/${userchoice}-emoji.png" class="img-e" alt=""> <img class="img-e" src="images/${computerChoice}-emoji.png" alt=""> Computer`;
        document.querySelector('.result').innerHTML=`You ${result}`;

    }
    let autoplayon= false;
    let idd;
    function autoplay(){
        if (!autoplayon){
        idd= setInterval( function() {
            playGame( computerPlay());
        }, 1000 ); autoplayon=true ;
    }

        else{
            clearInterval(idd);
            autoplayon=false ;
        }

    }