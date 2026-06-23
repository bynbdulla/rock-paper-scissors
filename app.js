/*-------- Constants --------------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const reset = document.querySelector('#reset')
console.log(choices)

/*-------- Variables --------------------------------*/
let userChoice = null //it's empty so we can put null or ''

/*--------- Cached Element References ------------------------*/

/*--------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id
    // we want to hide buttons if they are not the userChoice 
    // add hidden class to paper, and scissors
    if (userChoice == 'rock'){
        // console.log('use choice Rock')
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
    }
    else if (userChoice == 'paper'){
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
    }
    else {
        rock.classList.add('hidden')
        paper.classList.add('hidden')
    }
    // console.log('User Choice: ', userChoice)
})

reset.addEventListener('click', function(){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
})

/*--------- Functions --------------------------------*/