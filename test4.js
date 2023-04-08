"use strict";
// typy otvetov k otpravlennomu zaprosu
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
//type guard
function isSucsess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
// osnivnaya function
function getIdData(res) {
    if (isSucsess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
