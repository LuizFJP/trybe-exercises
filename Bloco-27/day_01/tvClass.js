var Tv = /** @class */ (function () {
    function Tv(size, resolution, connections) {
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log(this._size, this._resolution, this._connections);
    };
    return Tv;
}());
var tv = new Tv(25, '1366x644', 'Ethernet, HDMI, VGA');
tv.turnOn();
