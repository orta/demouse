pkg.initGettext();
pkg.initFormat();
pkg.require({ 'Gdk': '3.0',
              'Gio': '2.0',
              'GLib': '2.0',
              'GObject': '2.0',
              'Gtk': '3.0',
              'Atk': '1.0',
              'Wnck': '3.0' });

imports.gi.versions.Gtk = '3.0';

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Atk = imports.gi.Atk;
const Wnck = imports.gi.Wnck;


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
        

        // const active_wspace = scr.get_active_workspace()
        
        let activeWindowName = "";
        log("started")
        const i =  GLib.timeout_add_seconds(GLib.PRIORITY_HIGH, 300, () => {
            log("look")
            const scr = Wnck.Screen.get_default()
            scr.force_update()
            const windows = scr.get_windows() as WnckWindow[]
            const foreground = windows.find(w => w.is_active)
            const fgName = foreground?.get_name() || ""
            log(fgName)
            if (fgName !== activeWindowName) {
                activeWindowName = fgName
                log(fgName)
            }
            return GLib.SOURCE_CONTINUE;
        })
        log(i)
    
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




