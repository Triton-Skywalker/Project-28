//Constants for the Matter.js library classes
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Render = Matter.Render
const Constrain = Matter.Constraint

// Variables for the objects in the game -> [--Tree, Stone, Ground, Mangoes, Boy and World--]
var treeObj, stoneObj, groundObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world, boy;

//Declare launcherObject and launchForce variable here
var launcherObject;
var launchForce = 100;

//Preloads the images for adding
function preload()
{
	boy = loadImage("Images/Boy.png");
}

//Setup function
function setup()
{
    //Creates the drawing canvas
	createCanvas(1300, 600)

    //Initialization of the physics engine
	engine = Engine.create()

    //Creation of the world
	world = engine.world

    //Creates a new stone body [--properties in Stone.js class--]
	stoneObj = new Stone(235,420,30)
    
    //Creates 12 new mango bodies [--properties in Mango.js class--]
	mango1 = new Mango(1100,100,30)
    mango2 = new Mango(1170,130,30)
	mango3 = new Mango(1010,140,30)
	mango4 = new Mango(1000,70,30)
	mango5 = new Mango(1100,70,30)
	mango6 = new Mango(1000,230,30)
	mango7 = new Mango(900,230,40)
	mango8 = new Mango(1140,150,40)
	mango9 = new Mango(1100,230,40)
	mango10 = new Mango(1200,200,40)
	mango11 = new Mango(1120,50,40)
	mango12 = new Mango(900,160,40)

    //Creates a new tree body [--properties in Tree.js--]
	treeObj = new Tree(1050,580)

    //Creates a new ground body [--properties in Ground.js--]
	groundObject = new Ground(width/2,600,width,20)

    //create launcherObject here
    launcherObject = new Launcher(stoneObj.body,{x:235,y:420})

    //Runs the creates engine
	Engine.run(engine)
}

//Draw function
function draw()
{
    //Sets the color of background
    background(230)

    push()
        //Sets the text size
        textSize(25)

        //writes the given string in the first parameter
        text("Press Space to get a second Chance to Play!!",50 ,50)
    pop()

    //Draws an image with the predefined path which was preloaded in the preload function
    image(boy ,200,340,200,300)
    
    //Display function for the tree object
    treeObj.display()

    //Display function for the stone object
    stoneObj.display()

    //Display finction for the 12 mango objects
    mango1.display()
    mango2.display()
    mango3.display()
    mango4.display()
    mango6.display()
    mango7.display()
    mango8.display()
    mango9.display()
    mango10.display()
    mango11.display()
    mango12.display()
    
    //Display functionn for the 
    groundObject.display()

    //Displays the launche object
    launcherObject.display()

    detectollision(stoneObj, mango1)
    detectollision(stoneObj, mango2)
    detectollision(stoneObj, mango3)
    detectollision(stoneObj, mango4)
    detectollision(stoneObj, mango5)
    detectollision(stoneObj, mango6)
    detectollision(stoneObj, mango7)
    detectollision(stoneObj, mango8)
    detectollision(stoneObj, mango9)
    detectollision(stoneObj, mango10)
    detectollision(stoneObj, mango11)
    detectollision(stoneObj, mango12)
}

//create mouseDragged function here
function mouseDragged()
{
    Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

//create mouseReleased function here
function mouseReleased()
{
    launcherObject.fly()
}

//create keyPressed function here
function keyPressed()
{
    if(keyCode == 32 && launcherObject.chain.bodyA == null)
    {
        Body.setPosition(stoneObj.body,{x:235,y:420})
        launcherObject.attach(stoneObj.body)
    }
}

function detectollision(lstone,lmango)
{

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
  
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	    Matter.Body.setStatic(lmango.body,false)
    }

}