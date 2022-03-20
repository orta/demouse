### GTK Accessibility Vim-style Keyboard Shortcuts

Taking inspiration from:

- https://shortcatapp.com/
- https://github.com/dexterleng/vimac#vimac---productive-macos-keyboard-driven-navigation
- https://github.com/lethalman/gtkhah
- https://gitlab.gnome.org/GNOME/accerciser

Uses the GTK accessibility APIs (ATK) to find all of the current window's buttons and provide a keyboard shortcut for them.

### Getting Set Up

You'll need a few development dependencies. First up are _system_ dependencies: gtk dev, meson, ninja and gjs.

```sh
sudo apt-get install libgtk-3-dev
sudo apt-get install meson
sudo apt-get install python3 python3-pip python3-setuptools python3-wheel ninja-build
sudo apt-get install gjs libgjs-dev
```

Now you can think about the JS level deps:

```sh
yarn install

# Prove your setup is fine
yarn tsc
code .
```

### Compiling

GTK apps are built by meson, I have some quick scripts for building the app:

```sh
# Run this once, or any time you change something in the data folder:
sh ./scripts/bootstrap.sh

# Now run this:
sh ./scripts/run.sh
```

You can use `yarn dev` to start up a watch mode which restarts the app when you save a `.ts` file.