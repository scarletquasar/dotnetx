import chalk from 'chalk';
import { versions } from './check-versions.js';
import { checkForDotnet } from '../command-line/check-for-dotnet.js';

class CommandEnvironment {
    private readonly curretDotnetxVersion = '0.1.1 alpha';
    private readonly currentPlatform = process.platform;
    private readonly currentSolutionFilePath: string | null;

    constructor() {
        this.currentSolutionFilePath = '';
    }

    start() {
        const version = chalk.cyan('v' + this.curretDotnetxVersion);
        const title = `dotnetx ${version}`;

        console.log(title);
        console.log('');

        checkForDotnet();

        versions(['list-runtimes']);
    }
}

export { CommandEnvironment }