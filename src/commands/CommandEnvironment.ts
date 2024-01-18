import chalk from 'chalk';
import { versions } from './versions.js';
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
        const processArgs = process.argv.slice(2);
        const storedCommands = {
            'versions': (args: string[]) => versions(args),
        };

        console.log(title);
        console.log('');

        checkForDotnet();

        const currentCommand = process.argv.slice(2)[0] as keyof typeof storedCommands;
        
        storedCommands[currentCommand](processArgs);
    }
}

export { CommandEnvironment }