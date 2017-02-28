"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var order_model_1 = require("./order.model");
var rest_datasource_1 = require("./rest.datasource");
var OrderRepository = (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    OrderRepository.prototype.loadOrders = function () {
        var _this = this;
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(function (orders) { return _this.orders = orders; });
        getOrders();
        order_model_1.Order[];
        {
            if (!this.loaded) {
                this.loadOrders();
            }
            return this.orders;
        }
        saveOrder(order, order_model_1.Order);
        Observable_1.Observable < order_model_1.Order > {
            return: this.dataSource.saveOrder(order)
        };
        updateOrder(order, order_model_1.Order);
        {
            this.dataSource.updateOrder(order).subscribe(function (order) {
                _this.orders.splice(_this.orders.
                    findIndex(function (o) { return o.id == order.id; }), 1, order);
            });
        }
        deleteOrder(id, number);
        {
            this.dataSource.deleteOrder(id).subscribe(function (order) {
                _this.orders.splice(_this.orders.findIndex(function (o) { return id == o.id; }));
            });
        }
    };
    OrderRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], OrderRepository);
    return OrderRepository;
}());
exports.OrderRepository = OrderRepository;
