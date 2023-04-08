// typy otvetov k otpravlennomu zaprosu
enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

// interface zaprosa na oplatu
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

// otvet IResponseSuccess
interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

// otvet IResponseFailed
interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

//----------------------
// moi variant
/*
function isResponseStatus(
  responceStatus: IResponseSuccess | IResponseFailed
): responceStatus is IResponseSuccess {
  return 'data' in responceStatus;
}

function setStatus(responceStatus: IResponseSuccess | IResponseFailed) {
  if (isResponseStatus(responceStatus)) {
    return 'IResponseSuccess';
  } else {
    return 'IResponseFailed';
  }
}
*/

// typiziruem osnovnuiu funcion
type f = (res: IResponseSuccess | IResponseFailed) => number;

// dlyz udobstva responce obyavim kak union type
type Res = IResponseSuccess | IResponseFailed;

//type guard
function isSucsess(res: Res): res is IResponseSuccess {
  if (res.status === PaymentStatus.Success) {
    return true;
  }
  return false;
}

// osnivnaya function
function getIdData(res: Res): number {
  if (isSucsess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
