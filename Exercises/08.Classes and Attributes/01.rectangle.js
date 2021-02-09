class Rectangle {
    constructor(width, height, color) {
        Object.assign(this, {width, height, color: color[0].toUpperCase() + color.slice(1)});
    }
    calcArea() {
        return this.width * this.height;
    }
}
