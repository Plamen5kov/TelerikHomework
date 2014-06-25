function Line(startPoint, endPoint) {
    return {
        startPoint: startPoint,
        endPoint: endPoint,
        length: function length() {
            var dX = Math.abs(this.startPoint.x - this.endPoint.x),
                dY = Math.abs(this.startPoint.y - this.endPoint.y);
            return '\nlength: ' + Math.sqrt(dX * dX + dY * dY);
        },
        toString: function toString() {
            var start = this.startPoint.toString(),
                end = this.endPoint.toString();
            return 'startPoint: ' + start + '\nendPoint: ' + end + '' + this.length();
        }
    }
}