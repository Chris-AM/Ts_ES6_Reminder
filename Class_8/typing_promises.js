"use strict";
const TAKEMONEY = (amountTake) => {
    let currentMoney = 10000;
    return new Promise((res, err) => {
        if (amountTake > currentMoney) {
            err("you don't have the enough money");
        }
        else {
            currentMoney -= amountTake;
            res(currentMoney);
        }
    });
};
let money = 5000;
TAKEMONEY(money).then(currentMoney => console.log(`You've taken ${money}. Now you have ${currentMoney} in your account`))
    .catch(err => console.warn(err));
