function Point(x, y) {
    return {
        x: x,
        y: y,
        toString: function toString() {
            return this.x + ', ' + this.y;
        }
    }
};
