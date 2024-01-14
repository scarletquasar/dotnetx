import chalk from 'chalk';
import { versions } from './check-versions.js';

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
        
        versions(['list-runtimes']);
    }
}

export { CommandEnvironment }