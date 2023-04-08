interface ILogger {
  log(...args: any): void;
  error(...args: any): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    // kinut vo vneshnuu sistemu
    console.log(...args);
  }
}

interface IDeletable {
  delete(): void;
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }
  pay(paymentId: number | string): void {
    ///
  }
}
