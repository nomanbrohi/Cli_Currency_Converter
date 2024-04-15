import inquirer from "inquirer";
async function currency1() {
    const selectCurrency1 = await inquirer.prompt({
        message: "From which currency?",
        name: "fromCurrency",
        type: "list",
        choices: ["USD", "EUR", "KWD", "AUD", "PKR", "SAR", "Exit"]
    });
    return selectCurrency1.fromCurrency;
}
async function currency2() {
    const selectCurrency2 = await inquirer.prompt({
        message: "To which currency?",
        name: "toCurrency",
        type: "list",
        choices: ["USD", "EUR", "KWD", "AUD", "PKR", "SAR", "Exit"]
    });
    return selectCurrency2.toCurrency;
}
async function amount() {
    const enterAmount = await inquirer.prompt({
        message: "Enter Amount: ",
        name: "amount",
        type: "input"
    });
    return enterAmount.amount;
}
export { currency1, currency2, amount };
