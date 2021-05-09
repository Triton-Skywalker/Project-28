class Launcher
{
    constructor(BodyA, pointB)
    {
        var Property =
        {
            bodyA: BodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Matter.Constraint.create(Property)
        this.color = 'brown'
        World.add(world, this.chain)
    }

    fly()
    {
        this.chain.bodyA = null
    }

    attach(body)
    {
        this.chain.bodyA = body
    }
    display()
    {
        if(this.chain.bodyA)
        {
            push()
                strokeWeight(4)
                stroke(this.color)
                line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
            pop()
        }
        
    }
}