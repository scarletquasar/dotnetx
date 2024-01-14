module ConfigTypes {
    // Global option types

    export type Version = `${number}.${number}.${number}`;
    export type PackageVersion = `${'>' | '>>' | '*'}${Version}`;

    export type TargetFrameworkBase = 
    | 'netcoreapp1.0'
    | 'netcoreapp1.1'
    | 'netcoreapp2.0'
    | 'netcoreapp2.1'
    | 'netcoreapp2.2'
    | 'netcoreapp3.0'
    | 'netcoreapp3.1'
    | 'net5.0*'
    | 'net6.0*'
    | 'net7.0*'
    | 'net8.0*'
    | 'netstandard1.0'
    | 'netstandard1.1'
    | 'netstandard1.2'
    | 'netstandard1.3'
    | 'netstandard1.4'
    | 'netstandard1.5'
    | 'netstandard1.6'
    | 'netstandard2.0'
    | 'netstandard2.1'
    | 'net11'
    | 'net20'
    | 'net35'
    | 'net40'
    | 'net403'
    | 'net45'
    | 'net451'
    | 'net452'
    | 'net46'
    | 'net461'
    | 'net462'
    | 'net47'
    | 'net471'
    | 'net472'
    | 'net48'
    | 'netcore'
    | 'netcore45'
    | 'netcore451'
    | 'netmf'
    | 'sl4'
    | 'sl5'
    | 'wp'
    | 'wp7'
    | 'wp75'
    | 'wp8'
    | 'wp81'
    | 'wpa81'
    | 'uap'
    | 'uap10.0';

    export type TargetFramework = `${TargetFrameworkBase}${( 
        '-windows' |
        '-android' |
        '-ios' |
        '-maccatalyst' |
        '-macos' |
        '-tvos' |
        '-browser' |
        ''
    )}`;

    export type ProjectSdk = 
        | 'Microsoft.NET.Sdk'
        | 'Microsoft.NET.Sdk.Web'
        | 'Microsoft.NET.Sdk.BlazorWebAssembly'
        | 'Microsoft.NET.Sdk.Razor'
        | 'Microsoft.NET.Sdk.Worker'
        | 'Microsoft.NET.Sdk.WindowsDesktop';

    // Version identifiers (no action if empty):
    // > - Will update to the latest MINOR version
    // >> - Will update to the latest MAJOR version
    // * - Will update to the latest PATH version
    export interface NugetPackage {
        name: string;
        version: PackageVersion
    }

    // Project option types

    export interface ProjectOptions {
        sdk: ProjectSdk,
        targetFramework: TargetFramework,
        version?: Version,
        name?: string,
        description?: string,
        packages?: NugetPackage[],
        implicitUsings?: boolean
    }

    // Solution option types

    export interface ProjectReference {
        path: `${string}.json`,
        isStartupProject?: boolean,
        configuration?: 'Debug' | 'Release',
        platform?: 'ARM32' | 'ARM64' | 'x64' | 'x86'
    }

    export interface SolutionOptions {
        name: string,
        projects: ProjectReference[]
    }
}

export default ConfigTypes;