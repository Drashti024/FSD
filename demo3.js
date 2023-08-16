class Car
{
    constructor(color,model)
    {
        this.color = color;
        this.model = model;
    }
    getcolor()
    {
        console.log("Color is " +this.color);
    }
    getModel()
    {
        console.log("Model is " +this.model);
    }
}
var myobj = new Car("white",2023);
myobj.getcolor();
myobj.getModel();
