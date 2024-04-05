import inquirer from "inquirer";
import chalk from "chalk";
async function currency() {
    const selectCurrency = await inquirer.prompt({
        message: "Select Which Currency you want to convert?",
        name: "currency",
        type: "list",
        choices: ["USD Dollar", "Kuwaiti Dinar", "Australian Dollar", "Saudi Riyal",
            chalk.red("Exit")]
    });
    return selectCurrency.currency;
}
export default currency;
