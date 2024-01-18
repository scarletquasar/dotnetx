import chalk from 'chalk';
import { quickRunShellCommand } from '../command-line/quick-run-command.js';

async function versions(flags: string[]) {
    const result = {
        runtimes: [] as string[],
        sdks: [] as string[]
    };
    
    const listPathes = flags.includes('--list-pathes');
    const listRuntimes = flags.includes('--list-runtimes');

    const initialMessage = `- ${chalk.bold.cyan('Currently installed .NET versions')}`;
    console.log(initialMessage);
    console.log('');

    const sdksData = quickRunShellCommand('dotnet --list-sdks');
    if (sdksData.stderr) {
        throw new Error(sdksData.stderr);
    }

    const lines = sdksData.stdout.split('\n');

    for (const line of lines) {
        if (line) {
            const items = line.split(' ');
            const sdkVersion = chalk.magenta(items[0]);
            const sdkPath = listPathes ? chalk.yellow([items[1], items[2]].join('')) : '';
            const final = `- SDK ${sdkVersion} ${sdkPath}`;
            result.sdks.push(final);
        }
    }

    if (listRuntimes) {
        const runtimesData = quickRunShellCommand('dotnet --list-runtimes');
        
        if (runtimesData.stderr) {
            throw new Error(runtimesData.stderr);
        }

        const lines = runtimesData.stdout.split('\n');

        for (const line of lines) {
            if (line) {
                const items = line.split(' ');
                const runtimeName = chalk.greenBright.bold(items[0]);
                const runtimeVersion = chalk.magenta(items[1]);
                const runtimePath = listPathes ? chalk.yellow([items[2], items[3]].join('')) : '';
                const final = `- Runtime ${runtimeName} ${runtimeVersion} ${runtimePath}`;
                result.runtimes.push(final);
            }
        }
    }

    if (result.sdks.length) {
        console.log(result.sdks.join('\n'));
    }

    if (result.runtimes.length) {
        console.log(result.runtimes.join('\n'));
    }
}

export { versions }