#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import currency from "./currencyQuestion.js";
let currencies = { "usd_dollar": 277.90, "k_dinar": 903.07, "aus_dollar": 183.29, "saudi_riyal": 74.22 };
console.log(chalk.bgBlue(chalk.cyanBright("Welcome to Currency Converter\n")));
while (true) {
    const selectCurrency = await currency();
    if (selectCurrency === "USD Dollar") {
        console.log(`\n1 United States Dollar = ${currencies.usd_dollar} PKR`);
        console.log("Input Amount or type 'exit' to Exit");
        while (true) {
            let dollarToPkr = await inquirer.prompt({
                message: chalk.yellow("Enter Amount: "),
                name: "dollar",
                type: "input"
            });
            if (dollarToPkr.dollar.toLowerCase() === "exit") {
                console.log("Exited");
                selectCurrency;
                break;
            }
            if (isNaN(dollarToPkr.dollar)) {
                console.log("Enter a valid number or exit");
                continue;
            }
            else {
                let convert_Dollar = dollarToPkr.dollar * currencies.usd_dollar;
                console.log(` ${dollarToPkr.dollar} USD Dollar = ${convert_Dollar.toFixed(2)} Pakistani Rupee`);
            }
        }
    }
    else if (selectCurrency === "Kuwaiti Dinar") {
        console.log(`1 Kuwaiti Dinar = ${currencies.k_dinar}`);
        console.log("Input Amount or type 'exit' to Exit");
        while (true) {
            let kDinarToPkr = await inquirer.prompt({
                message: "Enter Amount: ",
                name: "dinar",
                type: "input"
            });
            if (kDinarToPkr.dinar === "exit") {
                console.log("Exited");
                break;
            }
            if (isNaN(kDinarToPkr.dinar)) {
                console.log("Enter Valid number or exit");
                continue;
            }
            else {
                let convert_k_Dinar = kDinarToPkr.dinar * currencies.k_dinar;
                console.log(` ${kDinarToPkr.dinar} Kuwaiti Dinar\n ${convert_k_Dinar.toFixed(2)} Pakistani Rupee`);
            }
        }
    }
    else if (selectCurrency === "Australian Dollar") {
        console.log(`1 Australian Dollar = ${currencies.aus_dollar}`);
        console.log("Input Amount or type 'exit' to Exit");
        while (true) {
            let ausToPkr = await inquirer.prompt({
                message: "Enter Amount: ",
                name: "dollar",
                type: "input"
            });
            if (ausToPkr.dollar === "exit") {
                console.log("Exited");
                break;
            }
            if (isNaN(ausToPkr.dollar)) {
                console.log("Enter Valid number or exit");
                continue;
            }
            else {
                let convert_ausDollar = ausToPkr.dollar * currencies.aus_dollar;
                console.log(` ${ausToPkr.dollar} Australian Dollar ${convert_ausDollar.toFixed(2)} Pakistani Rupee`);
            }
        }
    }
    else if (selectCurrency === "Saudi Riyal") {
        console.log(`1 Saudi Riyal = ${currencies.saudi_riyal}`);
        console.log("Input Amount or type 'exit' to Exit");
        while (true) {
            let saudi_riyal = await inquirer.prompt({
                message: "Enter Amount: ",
                name: "riyal",
                type: "input"
            });
            if (saudi_riyal.riyal === "exit") {
                console.log("Exited");
                break;
            }
            if (isNaN(saudi_riyal.riyal)) {
                console.log("Enter Valid number or exit");
                continue;
            }
            else {
                let convert_saudiRiyal = saudi_riyal.riyal * currencies.saudi_riyal;
                console.log(` ${saudi_riyal.riyal} Saudi Riyal ${convert_saudiRiyal.toFixed(2)} Pakistani Rupee`);
            }
        }
    }
    else {
        console.log("Exited\nThank you for using converters come back soon!!");
        break;
    }
}
