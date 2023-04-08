"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistendPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        /// method save on database
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
