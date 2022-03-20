import { Accessible } from "./types/atspi";

pkg.initGettext();
pkg.initFormat();
pkg.require({ Gdk: "3.0", Gio: "2.0", GLib: "2.0", GObject: "2.0", Gtk: "3.0", Atk: "1.0", Atspi: "2.0", Wnck: "3.0" });

imports.gi.versions.Gtk = "3.0";

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Atk = imports.gi.Atk;
const Wnck = imports.gi.Wnck;
const Gdk = imports.gi.Gdk;
const atspi = imports.gi.Atspi;

const mainWindow = imports.dist.mainWindow as { MainWindow: import("./mainWindow").MainWindow };

function main(argv: any[]) {
  // @ts-ignore
  window.getApp = function () {
    return Gio.Application.get_default();
  };

  const application = new Gtk.Application({
    application_id: "io.orta.demouse",
    flags: Gio.ApplicationFlags.FLAGS_NONE,
  });

  application.connect("activate", (app) => {
    log("activate");
    // https://github.com/GNOME/accerciser/blob/f927564e08680272f58338a4aa601e69259fd477/macaroon/macaroon/record/script_factory.py#L199

    const scr = Wnck.Screen.get_default();
    if (!scr) {
      log("no screen found with wnck");
      return;
    }
    scr.force_update();
    const windows = scr.get_windows_stacked();
    const foreground = windows.pop();
    if (!foreground) {
      log("no foreground window, NOOPing");
      return;
    }

    const fgName = foreground?.get_name() || "";
    log("Looking for: " + fgName);

    // https://lazka.github.io/pgi-docs/Atspi-2.0/classes/Accessible.html#Atspi.Accessible
    const desktop = atspi.get_desktop(0);

    for (let index = 0; index < desktop.get_child_count(); index++) {
      const element = desktop.get_child_at_index(index);
      log(element.get_name());
    }
  });
  return application.run(argv);
}

const printChildren = (element: Accessible) => {
  for (let index = 0; index < element.get_child_count(); index++) {
    const child = element.get_child_at_index(index);
    log(child.get_name());
  }
};
