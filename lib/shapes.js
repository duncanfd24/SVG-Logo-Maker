class Circle {
    constructor (color) {
        this.color = color
    }

    setColor(chosenColor){
        this.color = chosenColor
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

    sayHello(){
        return `${this.name}`
    }
}
//const circle = new Circle("blue").render()  // renders <circle cx="150" cy="100" r="80" fill="blue" />

class Square {
    constructor (color) {
        this.color = color
    }
    setColor(chosenColor){
        this.color = chosenColor
    }

    render(){
        return `<square x="100" y="100" width="100" height="100" fill="${this.color}" />`
    }

}

// add Triangle class
class Triangle{
    constructor (color) {
        this.color = color
    }
    setColor(chosenColor){
        this.color = chosenColor
    }

    render(){
        return `<triangle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

    sayHello(){
        return `${this.name}`
    }   
}



module.exports = {Circle, Square, Triangle}