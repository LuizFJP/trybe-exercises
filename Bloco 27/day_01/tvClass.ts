class Tv {
  private _size: number
  private _resolution: string
  private _connections: string
  private _connectedTo: string
  constructor(size: number, resolution: string, connections: string) {
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(this._size, this._resolution, this._connections);
  }
}

const tv = new Tv(25, '1366x644', 'Ethernet, HDMI, VGA');

tv.turnOn();