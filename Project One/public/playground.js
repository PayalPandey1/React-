

class Bus{
    constructor()
    {
        this.wheels = 6 ;
        this.brand = 'Ford' ;
    }

}

class MegaBus extends Bus{
    constructor()
    {
        super() ;
        this.age = 90 ;
    }
}

const busa = new MegaBus() ;
console.log(busa.brand );