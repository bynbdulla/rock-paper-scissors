/*-------- Constants --------------------------------*/
const choices = document.querySelector('#choices')
console.log(choices)

/*-------- Variables --------------------------------*/
let userChoice = null //it's empty so we can put null or ''

/*--------- Cached Element References ------------------------*/

/*--------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id
    console.log('userChoice: ', userChoice)
})

/*--------- Functions --------------------------------*/