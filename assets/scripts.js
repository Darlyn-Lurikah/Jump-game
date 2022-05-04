//Using DOM content loaded event listener is like putting js at the bottom of html file, 
// but just a but more foolproof (as we put in the head for this project)
document.addEventListener('DOMContentLoaded', () => {
    //Query selector lets us target elements from html.. Here we target the .grid class 
    const grid = document.querySelector('.grid')
    //We use Create element to get html to creat an element, in this case a DIV
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomtSpace = 150
    // isGameOver defined as false to being because the game is obviously not finished if its just started
    let isGameOver = false
    let platformCount = 5

    //CREATING THE DOODLER
    function createDoodler() {
        //Append Child means we are putting the doodler var (that holds a DIV) into the 
        //parent element which is the div with the class of GRID. We are appending  DOODLER as a child of GRID
        grid.appendChild(doodler)
        //To display our doodler we add the styling by grabbing the DOODLER const in js and adding the css .doodler
        // class to the html the const is creating
        doodler.classList.add('doodler')
        // Saving css style so we can move the doodler by those amounts later
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomtSpace + 'px'
    }
    
    // Function checks if game is over, if thats false, it will create the doodler to start the game
    function start() {
        if(!isGameOver) {
            createDoodler()
        }
    }
    start()

    //CREATING THE PLATFORMS
    function createPlatforms() {
        for(let i=0; i < platformCount)
    }

    function isGameOver() {

    }
    


})