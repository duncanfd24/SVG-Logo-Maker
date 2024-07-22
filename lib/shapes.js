//adds circle class
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
//adds square class
class Square {
    constructor (color) {
        this.color = color
    }
    setColor(chosenColor){
        this.color = chosenColor
    }

    render(){
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

    sayHello(){
        return `${this.name}`
    }   
}



module.exports = {Circle, Square, Triangle}
