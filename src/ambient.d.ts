// Sets up the known globals 

declare const pkg: any

declare const imports: {
    gi: {
        versions: {
            Gtk: string
        }
        Gio: typeof import("@gi-types/gio"),
        GLib: typeof import("@gi-types/glib"),
        Gtk: typeof import("@gi-types/gtk"),
        Gdk: typeof import("@gi-types/gdk"), 
        GObject: typeof import("@gi-types/gobject"), 
        Atk: typeof import("@gi-types/atk")
        Wnck: any

    }
    // There correspond to files which have gone from src -> dist
    // via esbuild, the general rule of thumb to remember is that
    // anything classed as a `var` is exported.
    //
    // Changes to the list of srcfiles will need corresponding
    // changes to the gresource xml doc too
    dist: {
        mainWindow: any
    }
}

// https://lazka.github.io/pgi-docs/Wnck-3.0/classes/Window.html
interface WnckWindow extends GObject.Object {
    is_active: boolean
    get_name: () => string
    get_application: () => WnkcApplication
}

//https://lazka.github.io/pgi-docs/Wnck-3.0/classes/Application.html#Wnck.Application
interface WnkcApplication extends GObject.Object {
    get_pid: () => number
    get_windows: () => WnckWindow[]

}

declare function print(str: string): void