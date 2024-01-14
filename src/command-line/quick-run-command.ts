import { spawnSync } from "child_process";

const CHILD_SPAWN_OPTIONS = { stdio: "inherit" } as const;

function quickRunShellCommand(shellCommand: string) {
    const args = shellCommand.split(' ');
    const arg0 = args[0];
    const otherArgs = args.slice(1);

    const instance = spawnSync(arg0, otherArgs);

    return { 
        stdout: instance.stdout.toString(),
        stderr: instance.stderr.toString()
    };
}

export { quickRunShellCommand }