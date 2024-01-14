import { readFile } from "fs/promises";
import ConfigTypes from "./config-types";

type AnyOfLoader = ConfigTypes.SolutionOptions | ConfigTypes.ProjectOptions;

async function internalLoadOptions<T extends AnyOfLoader>(path: string): Promise<T> {
    const binary = await readFile(path);
    const options = JSON.parse(binary.toString());
    return options;
}

export { internalLoadOptions }