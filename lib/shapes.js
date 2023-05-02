// all shapes will have a fill and color
class Shape {

    // 'fill' will come in from above, start with green
    constructor(fill = "green") {
        this.fill = fill;
    }
    //set color here, to change current color of shape ...
    setColor(color = "white") {
        this.color = color;
    }
}

// Circle class
class Circle extends Shape {

    constructor(fill) {
        super(fill)
    }

    render() {
        // what is returned to render
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// Square class
class Square extends Shape {

    constructor(fill) {
        super(fill)
    }
    render() {
        // what is returned to render
        return `<rect width="100%" height="100%" fill="${this.color}" />`
    }
}

// Triangle class
class Triangle extends Shape {

    constructor(fill) {
        super(fill)
    }
    render() {
        // what is returned to render
        return `<polygon points="150,20 20,180 280,180" fill="${this.color}" />`
    }
};

module.exports = { Circle, Square, Triangle }
