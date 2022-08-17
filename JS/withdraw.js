// 1. add withdraw button event hadnler
// 2.get withdraw amount by using getinputfieldvaluebyid function
// 3. get previous withdraw amount by using getTextElementvalueById function
// 4.calculate new withdraw total and set the value
// 4.5 set new withdraw total by using setTextElementValueById function 
//   5.get previous balance total by using getTextElementValueById function
// 6 .calculate new balance 
// 7.set balance total using setTextElementValueById function

document.getElementById("btn-widthdraw").addEventListener("click", function () {
 const newWithdrawAmount=getInputFieldValueById('withdraw-field');
 if (isNaN(newWithdrawAmount)) {
    alert("please proivide an amount");
    return;
  }
 const previousWithdrawTotal = getTextElementValueById("withdraw-total");
 const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;

 
 const previousBalanceTotal = getTextElementValueById("balance-total");

 if(newWithdrawAmount>previousBalanceTotal)
 {
    alert("Please provide correct amount");
    return;
 }
 setTextElementValueById('withdraw-total',newWithdrawTotal);
 
 const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
 setTextElementValueById('balance-total',newBalanceTotal);
     

});