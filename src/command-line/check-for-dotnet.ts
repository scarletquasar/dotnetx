import { quickRunShellCommand } from "./quick-run-command.js";
import chalk from 'chalk';

function checkForDotnet() {
    const result = quickRunShellCommand('dotnet');

    if (result.stderr) {
        const messagePrefix = chalk.redBright.bold('.NET not found')
        console.log(messagePrefix + ' The dotnet command was not found in your system.');
        process.exit(1);
    }
}

export { checkForDotnet }