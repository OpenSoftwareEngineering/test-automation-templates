# CodeceptJS setup on Arch Linux

## Installation:

`npm` and `nodejs` need to be installed prior.  
A npm package must exist in the current directory, if it does not, create one:

```bash
npm init -y
```

Run `npx codeceptjs init` in the current dir with the existing package.

This command often prints an error which includes a command like:

```
[sudo] npm install webdriverio.....
```

Run this command, in current directory, omitting the `[sudo] ` part, a local
install will suffice.

Ensure Chrome or Chromium is installed. This guide was tested with the
`ungoogled-chromium-bin` AUR package.

export the following environment variable:
```
CHROME_EXECUTABLE=/usr/bin/chromium
```

This can be done by adding the following at the end of you `~/.bashrc` file:

```bash
export CHROME_EXECUTABLE=/usr/bin/chromium
```

Following all this, codeceptjs tests can be run using the `npx codeceptjs run`
command.
