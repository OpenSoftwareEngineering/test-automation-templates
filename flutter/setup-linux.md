# Setting up Flutter on Linux dev environment

Environment:

* Arch Linux - up-to-date as of 2024-05-01, with Linux-LTS kernel

## Initial Attempt

Flutter packages installed from AUR and Arch Repos, along with android sdk
packages.

### Issues

Dart compiler seems to expect an older version of libraries, some error with
unsupported binary format.

## Second Attempt

Uninstalled android sdk packages through AUR, installed them through
android-studio. Issue persisted.

## Third Attempt

Uninstalled flutter and android sdk packages, kept android-studio. Install 
flutter through vscode. Does not matter if you prefer using it without vscode,
like in my case I use `flutter-tools.nvim` in neovim, it will still work.

### Issues

Flutter desktop apps can now be built, but `flutter doctor` still reports issue
with missing android SDK. Some initial searching shows that the `ANDROID_HOME`
environment variable must be set.

---

### Fourth Attempt

Attempted to install the `android-sdk-cmdline-tools-latest` package from AUR.
This did not fix the android issue. However installing the cmdline tools from
android-studio's SDK manager, and adding `$HOME/Android/Sdk/platform-tools` to
$PATH did fix the issue.

---

## "Cannot find Chrome" issue

Occurs when some other "version" of Google chrome is installed, like `chromium`
or `ungoogled-chromium`. To fix, the environment variable `CHROME_EXECUTABLE`
should be set to `/usr/bin/chromium`, in my case, since `.bashrc` is run before
`sway`, I added the following line to my `.bashrc`:

```bash
export CHROME_EXECUTABLE=/usr/bin/chromium
```
