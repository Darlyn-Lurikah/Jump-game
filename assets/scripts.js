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
    //Saving platform count in var so it can be changed. We currently need 5 platforms for the current screensize
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
    

    class Platform {
        //Use a constructor to construct (build) our class
        //We pass the new platform newPlatformBottom into the consructor so each new value we get via 
        //that variable will pass through this class
        constructor(newPlatformBottom) {
            //'this' refers to the current platform being passed into the class
            this.bottom = newPlatformBottom
            // The Math.random() method multiplied by any num here will return a num from 0-315
            // We get 315 by subtracting the platform width (85) from the grid width (400) so as long 
            // as the num is 315 or under our platform will appear in our grid
            this.left = Math.random() * 315
            //We create a div to display the new platform in 
            this.visual = document.createElement('div')  

            //We save this.visual in a variable to allow us to add a css classes and styling to it 
            const visual = this.visual
            //Add a css class to give some overall styling
            visual.classList.add('platform')
            //Set the left spacing to the number we declared in the js class and concat 'px' so it styles in pixels
            visual.style.left = this.left + 'px'
            //Set the bottom spacing to the number we declared in the js class and concat 'px' so it styles in pixels
            visual.style.bottom = this.bottom + 'px'
            //Then we append the newly declared visual as a child of the '.grid' so it can appear within the grid
            grid.appendChild(visual)
        }
    }

    //CREATING THE PLATFORMS
    function createPlatforms() {
        // for loop says when i is less that the 5 declared in platformCount var, increment i by 1 to get to 5
        for(let i=0; i < platformCount; i++) {
            //So the gaps between the platforms can be evenly spaced horizontally we take the 600px height of the grid and divide it by the 
            //number of platforms (5 currently)
            let platformGap = 600 / platformCount
            //To space the platforms vertically we need to set a bottom spacing. Here we've set the space to be
            //100 + the increment i is on / platform gap (which is 600/whatever increment i is on)
            //Eg. if i = 2 then platformGap is 300. So the equation for newPlatformBottm is 2 / 300 = 150 , 100 + 150 = 250 COME BACK TO THIS EXPLAINATION
            let newPlatformBottom = 100 + i * platformGap
            // We will make a class (above) to house the variables for making a new platform 
            let newPlatform = new Platform (newPlatformBottom)
        }
    }

    


    // Function checks if game is over, if thats false, it will create the doodler to start the game
    function start() {
        // if the game is NOT over, call these two functions to create our doodler and new platforms
        if(!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    start()

    


})