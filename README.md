# 🛡 dotnetx

**dotnetx** is an extension to dotnet command line tool and also a solution-project manager focused on providing a easy to use api to create, manage and ship projects with default or customized languages that support the .NET runtime.

> [!WARNING]
>
> **dotnetx** is a project in development, this means that the project is not ready to be used yet. A stable version is being developed right now and will appear in releases.

## ❄️ Features

### Command-line tool

**dotnetx** extends the functionalities of the default `dotnet` command and provides various others like project tree visualization and dynamic package management. <br>
The integration with **nuget** provide easy package management through projects and solutions, provide an easy visualization of nuget repository providers and also provide a hint system to help the developer to solve package-related problems. 

Example:

```bash
dotnetx nuget add-source my-source https://source.net
```
```
> dotnetx vx.x.x
> Checking source reliability...
> Source added with success in 0.94s.
```

```bash
dotnetx install Custom.Package --source my-source
```

```
> dotnetx vx.x.x
> Accessing solution "MySolution"
> Accessing source "my-source"
> Installing package "Custom.Package"
> Package "Custom.Package" v0.19.0 added with success in 0.75s.
```

<br>


Troubleshooting tools can find common and customized problems in the target codebase and provide hints to solve them in the most seamless possible way.

### Accessible API


 
### 
 
