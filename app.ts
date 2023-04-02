// buisnes entity
interface IPayment {
  sun: number;
  from: number;
  to: number;
}

// esli budet nuzhno dobavit v IPayment mozhno dobavit suda
interface IPaymentReauest extends IPayment {}

enum paymentStatus {
  Sucsess = 'success',
  Failed = 'failed',
}

interface IDataSucsess extends IPayment {
  databaseId: number;
}

interface IDataFaield {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSucsess {
  status: paymentStatus.Sucsess;
  data: IDataSucsess;
}

interface IResponseFailed {
  status: paymentStatus.Failed;
  data: IDataFaield;
}
