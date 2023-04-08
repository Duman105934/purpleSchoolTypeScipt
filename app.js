"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class PaymentCls {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
        //this.createdAt = new Date();
        //this.status = PaymentStatus.Holded;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unHoldPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Platezh ne mozhet byt vozvrashen');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const newPayment = new PaymentCls(1);
newPayment.unHoldPayment();
const time = newPayment.getPaymentLifeTime();
console.log(newPayment);
//console.log(time);
