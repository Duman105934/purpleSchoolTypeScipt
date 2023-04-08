type PaymentStatus = 'new' | 'paid';

class Payment {
  id: number;
  status: PaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistendPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }
  save() {
    /// method save on database
  }

  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

new PersistendPayment();

//----------------------
class User {
  name: string = 'user';

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = 'admin';

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin();

new Error('');

class HttpError extends Error {
  code: number;

  constructor(messege: string, code?: number) {
    super(messege);
    this.code = code ?? 500;
  }
}
