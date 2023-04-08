enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class PaymentCls {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
    //this.createdAt = new Date();
    //this.status = PaymentStatus.Holded;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unHoldPayment(): void {
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
