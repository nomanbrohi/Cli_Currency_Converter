#! /usr/bin/env node
import chalk from "chalk";
import { currency1, currency2, amount } from "./currencyQuestion.js";
let currencies = {
    "USD": 1, //United States Dollar Base Currency 
    "EUR": 0.920955, //Euro
    "KWD": 0.307461, //Kuwaiti Dinar
    "AUD": 1.513908, //Australian Dollar
    "PKR": 277.57, //Pakistani Rupee
    "INR": 83, //Indian Rupee
    "SAR": 3.750000 //Saudi Riyal
};
console.log(chalk.bgBlue(chalk.cyanBright("Welcome to Currency Converter\n")));
while (true) {
    console.log("Please select the currency or select 'Exit' for exit");
    const selectFromCurrency = await currency1();
    if (selectFromCurrency === "Exit") {
        break;
    }
    const selectToCurrency = await currency2();
    if (selectToCurrency === "Exit") {
        break;
    }
    const currencyRate = currencies[selectToCurrency] / currencies[selectFromCurrency];
    console.log(`1 ${selectFromCurrency} equals ${currencyRate.toFixed(2)} ${selectToCurrency}`);
    while (true) {
        console.log("Please enter the amount, or type 'exit' to exit");
        const enteredAmount = await amount();
        const result = enteredAmount * currencyRate;
        if (enteredAmount === "exit") {
            break;
        }
        if (isNaN(enteredAmount)) {
            console.log("Enter number or exit!!");
        }
        else {
            console.log(`${result.toFixed(2)} ${selectToCurrency}`);
        }
    }
}
