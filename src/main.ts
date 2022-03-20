pkg.initGettext();
pkg.initFormat();
pkg.require({ 'Gdk': '3.0',
              'Gio': '2.0',
              'GLib': '2.0',
              'GObject': '2.0',
              'Gtk': '3.0',
              'Atk': '1.0',
              'Atspi': '2.0',
              'Wnck': '3.0' });

imports.gi.versions.Gtk = '3.0';

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Atk = imports.gi.Atk;
const Wnck = imports.gi.Wnck;
const Gdk = imports.gi.Gdk
const atspi = imports.gi.Atspi

// Atk.ref_acc

const mainWindow = imports.dist.mainWindow as { MainWindow: import("./mainWindow").MainWindow };

function main(argv: any[]) {
    // @ts-ignore
    window.getApp = function() {
        return Gio.Application.get_default();
    };

    const application = new Gtk.Application({
        application_id: 'io.orta.demouse',
        flags: Gio.ApplicationFlags.FLAGS_NONE
    }); 
    

    

    application.connect('activate', app => {
        // let activeWindow: GTK.Window | undefined = app.activeWindow;
    
        // if (!activeWindow) {
        //    activeWindow = new mainWindow.MainWindow(application)
        //    activeWindow.connect("delete-event", () => Gtk.main_quit());
        // }
    
        // // I feel like this should be .present - but that doesn't show the content
        // // of the window?
        // activeWindow.show_all();
        
        // const windows = Gtk.Window.list_toplevels()// as import("@gi-types/gdk").Window[]
        

        // https://github.com/GNOME/accerciser/blob/f927564e08680272f58338a4aa601e69259fd477/macaroon/macaroon/record/script_factory.py#L199

        // const active_wspace = scr.get_active_workspace()
        log(atspi.get_desktop(0))
        log("started")


            const scr = Wnck.Screen.get_default()
            scr.force_update()
            const windows = scr.get_windows_stacked() as WnckWindow[]
            const foreground = windows.pop() 
            const fgName = foreground?.get_name() || ""
            log("Looking for: " + fgName)

            // https://lazka.github.io/pgi-docs/Atspi-2.0/classes/Accessible.html#Atspi.Accessible
            const desktop = atspi.get_desktop(0)
            for (let index = 0; index < desktop.get_child_count(); index++) {
                const element = desktop.get_child_at_index(index);
                log(element.get_name())
                
            }
// for (const iterator of desktop) {
//     log(iterator.get_name())
// }

            // // log(foreground)
            
            // // const apps = Gdk.app
         
            // const r = new Atk.Registry()
            // const fg =  r//Object.keys(r)
            // // log(Atk.get_focus_object())
            // // log(fg)

            //     //     const focus = Atk.get_focus_object()
            //     // })
            // const r2 = Atk.get_default_registry()
            // log(r2)
            // r2.connect("notify", (a, b) =>{
            //     log("connected")
            //     log(a)
            //     log(b)
            // })

            // const root = Atk.get_root()
            // // log(Object.keys(root)
            // log(root.accessibleName)
            // // log(root.role)
            // log(root.child)
            // root.emit("focus-event", () => {
            //     log("focused")
            // })

            
            // Atk.focus_tracker_notify()

            // log(r2.factory_singleton_cache.keys())
            // r2.connect("focus-event", (registry, object, old_state, new_state) => {
            //     log(object)
            //     log(old_state)
            //     log(new_state)
            // })
            // r2.get_data()

            // Atk.focus_tracker_notify()

            // const r3 = Gdk.get_default_root_window()
            // log("root")
            // log(r3)
            // log(r3.get_width())
            
            // log(r3.get_children().length)

            // const frames = foreground.

        // const windows2 = Gtk.Window.list_toplevels()// as import("@gi-types/gdk").Window[]
        // log(windows2)



        // const d = gdk.Display.get_default()
        // const [screen, x, y, flags]= d!.get_pointer()
    
        // const i =  GLib.timeout_add_seconds(GLib.PRIORITY_HIGH, 300, () => {
        //     log("look")
        //     const scr = Wnck.Screen.get_default()
        //     scr.force_update()
            
        //     const windows = scr.get_windows() as WnckWindow[]
        //     const foreground = windows.find(w => w.is_active)
        //     const fgName = foreground?.get_name() || ""
        //     log(fgName)
        //     if (fgName !== activeWindowName) {
        //         activeWindowName = fgName
        //         log(fgName)
        //     }
        //     return GLib.SOURCE_CONTINUE;
        // })
        // log(i)
    
    });

    return application.run(argv)
  }


// const setGTKTimeout = function(func: () => void, millis: number) {

//     let args = [];
//     if (arguments.length > 2) {
//         args = args.slice.call(arguments, 2);
//     }
 
//     let id = loop.get_context(). (millis, () => {
//         func.apply(null, args);
//         return false; // Stop repeating
//     }, null);

//     return id;
// };

// const clearTimeout = function(id) {

//     Mainloop.source_remove(id);
// };




