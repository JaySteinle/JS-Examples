
# **BITO as VS Code Extension** #

<img src="../media/vscode_BITO.gif" width="900" height="500"/> <br/></br>

*<h3 style="text-align:justify">[Pick Me For Home Page](../README.md)</h3>*

## <ins>Build Extension</ins> ##

### Prerequisite ###

- Ensure that you are connected to the VPN network to download the `authwidget` builds from Nexus.
Contact BITO DevOps Team for required support.

- Navigate to Nexus to check about the available versions of `authwidget`.
[BITO Nexus Repository](http://nexus.bito.ops:8083/#browse/browse:bito-builds-npm)

### **Quick Build with Shell Script** ###

1. **Update `authwidget` and `spectre` Version:**

- Navigate to project directory: `<your-project-directory>/ide-plugins/ui-code`.
- Open the `package.json` file.
- Update the `authwidget` version according to the environment you are targeting (Staging | Pre-Production |Production).

Staging:

```json
"dependencies": {
    "authwidget": "file:authwidget_staging-<major>.<minor>.<patch>.tgz"
}
```

Pre-Production:

```json
"dependencies": {
    "authwidget": "file:authwidget_preprod-<major>.<minor>.<patch>.tgz"
}

Production:

```json
"dependencies": {
    "authwidget": "file:authwidget_prod-<major>.<minor>.<patch>.tgz"
}
```

2. **Update `version`:**

- Navigate to project directory: `<your-project-directory>/ide-plugins/vscode`.
- Update the `version` in the file `package.json` for BITO as VSCode extension build.

3. **Run the Build Script:**

- Open your command-line terminal.
- Navigate to the build directory: `<your-project-directory>/ide-plugins/vscode`.
- Execute the build script `build.sh` with the appropriate environment parameter.
or,
- Execute the build script `build.bat` with the appropriate environment parameter.

```sh
./build.sh staging
```

or

```sh
./build.sh production
```
<strong> Important: </strong>

- When running `./build.sh production`, the build process will first create the Pre-Production build and then automatically proceed to create the Production build.

4. **Locate BITO as VSCode Extension Installer:**

- Navigate to `ide-plugins\vscode\`
- Install the desired build in the VSCode IDE.


### **Step 1:** Update properties in `ui-code\package.json` as shown below ###

For Production environment

```javascript
    "build": "ng build --configuration production",
    "authwidget": "file:authwidget_prod-<latest-version>.tgz",
```

For Staging environment

```javascript
    "build": "ng build",
    "authwidget": "file:authwidget_staging-<latest-version>.tgz",
```

### **Step 2:** Modify properties in `vscode\webpack.config.js ` ###

For Production environment

```javascript
    mode: 'production'
```

For Staging environment

```javascript
    mode: 'development'
```

### **Step 3:** If required, Force install dependencies ###

For production or staging environment whenever the version of common-login (authwidget) is updated<br/>
in `ui-code\package.json ` do run command: `npm i --legacy-peer-deps --force` <br/>
to update the dependencies in local environment. 


### **Step 4:** Run build script ###

- Update AES key (secret key shared in 1Password) in AESKey.java (src/cdn-url/AESKey.ts) file.

- Navigate to `vscode` as current working directory (repository) and run build script

On Windows Platform

```javascript
<your-directory>\vscode>build.bat
```

On Linux / macOS Platform (**NOTE:** the shell script needs to be updated)

```javascript
<your-directory>\vscode>build.sh
```

**<ins>NOTE:</ins>** This script will build BITO UI application and later it will build vscode extension.

<br/>

<img src="../media/important.png" width="20" height="20" /> Look for any build failure(s) or compilation issue(s).<br/>
For any error(s) fix the issue and then run again build script to create installer for vscode.


### **Step 5:** Verify the version(s) of lazy chunk files generated at the time of build creation   ###

- Compare the version(s) with the version(s) mentioned in `vscode\assets\config\application.properties` under `[Prod]` section

- If there is any chage in version(s) of lazy chunk files on command line then update the version of corresponding files in `application.properties`

- **NOTE** This change or modification is only required when the build is being created for Production environment

<img src="../media/vscode_build.png" width="800" height="400"/>



### **Step 6:** Manually install extension packaged in `.vsix` file  ###

- Option 1: Open vscode editor -> Click on Extensions Icon in the Activity Bar -> Click on View (3 dots) -> Install from VSIX..

Or, <br/>
- Option 2: Using Command Palette -> `Ctrl+Shift+P` -> Type `Install from VSIX`

- Choose the version of installer generated after running build script to install the BITO as vscode extension

- Restart vscode editor.

<br/>

<img src="../media/install_extension_vscode.gif" width="900" height="500"/>

<br/>

## Contribute ##

To contribute development work for frontend or backend application development please read the [contribution guidelines](https://bito.atlassian.net/wiki/spaces/EN/pages/209092633/Process+and+Guidelines+for+Dev+Team) first.

## License ##

Copyright (C) 2021, Bito Inc - All Rights Reserved

[Scroll to top](#bito-as-vs-code-extension)
