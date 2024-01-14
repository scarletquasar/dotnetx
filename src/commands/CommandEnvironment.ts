class CommandEnvironment {
    private readonly curretDotnetxVersion = '0.1.1 alpha';
    private readonly currentPlatform = process.platform;
    private readonly currentSolutionFilePath: string | null;

    constructor() {
        this.currentSolutionFilePath = '';
    }

    start() {
        console.log(`dotnetx v${this.curretDotnetxVersion}`)
    }
}

export { CommandEnvironment }