var Tv = /** @class */ (function () {
    function Tv(size, resolution, connections) {
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log(this.size, this.resolution, this.connections);
    };
    return Tv;
}());
var tv = new Tv(25, '1366x644', 'Ethernet, HDMI, VGA');
tv.turnOn();
