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
new PersistendPayment();
//----------------------
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin();
new Error('');
class HttpError extends Error {
    constructor(messege, code) {
        super(messege);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
