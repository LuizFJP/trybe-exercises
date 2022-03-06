var Client = /** @class */ (function () {
    function Client() {
        this._name = '';
    }
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem() {
        this._name = [];
        this._value = [];
    }
    Object.defineProperty(OrderItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return OrderItem;
}());
var Order = /** @class */ (function () {
    function Order(percentualDiscount) {
        if (percentualDiscount === void 0) { percentualDiscount = 0; }
        this._payment = '';
        this._percentualDiscount = percentualDiscount;
        this._client = new Client();
        this._itens = new OrderItem();
        this._values = new OrderItem();
    }
    Object.defineProperty(Order.prototype, "payment", {
        get: function () {
            return this._payment;
        },
        set: function (payment) {
            this._payment = payment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (client) {
            this._client = client;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "orderItem", {
        get: function () {
            return this._itens;
        },
        set: function (itens) {
            this._itens = itens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (values) {
            this._values = values;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.calculateTotal = function () {
        return this._values.value.reduce(function (acc, crr) { return acc + crr; });
    };
    Order.prototype.calculateDiscount = function () {
        if (!this._percentualDiscount)
            this._percentualDiscount = 0;
        return this.calculateTotal() - this.calculateTotal() * this._percentualDiscount;
    };
    return Order;
}());
var objClient = new Client();
objClient.name = 'Luiz';
var objOrders = new OrderItem();
objOrders.name = ['Batata frita', 'Açaí'];
objOrders.value = [3, 10];
var objOrderPrice = new Order();
objOrderPrice.payment = 'Dinheiro';
objOrderPrice.client = objClient;
objOrderPrice.orderItem = objOrders;
objOrderPrice.values = objOrders;
console.log('Nome do cliente: ', objOrderPrice.client);
console.log('Método de pagamento: ', objOrderPrice.payment);
console.log('Itens comprados: ', objOrderPrice.orderItem);
console.log('Valores: ', objOrderPrice.values);
console.log('Valor total: ', objOrderPrice.calculateTotal);
console.log('Valor com desconto: ', objOrderPrice.calculateDiscount);
