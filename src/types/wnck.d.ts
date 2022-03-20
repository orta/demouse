/**
 * Wnck 3.0
 *
 * Generated from 40.0.0
 */

import * as Atk from "@gi-types/atk";
import * as Gtk from "@gi-types/gtk";
import * as GObject from "@gi-tyes/gobject";
import * as Gdk from "@gi-tyes/gdk";
// import * as GdkPixbuf from "gdkpixbuf";
type GdkPixbuf = any;
import * as GLib from "@gi-types/glib";

export const DEFAULT_ICON_SIZE: number;
export const DEFAULT_MINI_ICON_SIZE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export function pid_read_resource_usage(gdk_display: Gdk.Display, pid: number, usage: ResourceUsage): void;
export function set_client_type(ewmh_sourceindication_client_type: ClientType): void;
export function set_default_icon_size(size: number): void;
export function set_default_mini_icon_size(size: number): void;
export function shutdown(): void;
export function xid_read_resource_usage(gdk_display: Gdk.Display, xid: number, usage: ResourceUsage): void;

export namespace ClientType {
  export const $gtype: GObject.GType<ClientType>;
}

export enum ClientType {
  APPLICATION = 1,
  PAGER = 2,
}

export namespace MotionDirection {
  export const $gtype: GObject.GType<MotionDirection>;
}

export enum MotionDirection {
  UP = -1,
  DOWN = -2,
  LEFT = -3,
  RIGHT = -4,
}

export namespace PagerDisplayMode {
  export const $gtype: GObject.GType<PagerDisplayMode>;
}

export enum PagerDisplayMode {
  NAME = 0,
  CONTENT = 1,
}

export namespace PagerScrollMode {
  export const $gtype: GObject.GType<PagerScrollMode>;
}

export enum PagerScrollMode {
  "2D" = 0,
  "1D" = 1,
  NONE = 2,
}

export namespace TasklistGroupingType {
  export const $gtype: GObject.GType<TasklistGroupingType>;
}

export enum TasklistGroupingType {
  NEVER_GROUP = 0,
  AUTO_GROUP = 1,
  ALWAYS_GROUP = 2,
}

export namespace WindowGravity {
  export const $gtype: GObject.GType<WindowGravity>;
}

export enum WindowGravity {
  CURRENT = 0,
  NORTHWEST = 1,
  NORTH = 2,
  NORTHEAST = 3,
  WEST = 4,
  CENTER = 5,
  EAST = 6,
  SOUTHWEST = 7,
  SOUTH = 8,
  SOUTHEAST = 9,
  STATIC = 10,
}

export namespace WindowType {
  export const $gtype: GObject.GType<WindowType>;
}

export enum WindowType {
  NORMAL = 0,
  DESKTOP = 1,
  DOCK = 2,
  DIALOG = 3,
  TOOLBAR = 4,
  MENU = 5,
  UTILITY = 6,
  SPLASHSCREEN = 7,
}

export namespace _LayoutCorner {
  export const $gtype: GObject.GType<_LayoutCorner>;
}

export enum _LayoutCorner {
  TOPLEFT = 0,
  TOPRIGHT = 1,
  BOTTOMRIGHT = 2,
  BOTTOMLEFT = 3,
}

export namespace _LayoutOrientation {
  export const $gtype: GObject.GType<_LayoutOrientation>;
}

export enum _LayoutOrientation {
  HORIZONTAL = 0,
  VERTICAL = 1,
}

export namespace WindowActions {
  export const $gtype: GObject.GType<WindowActions>;
}

export enum WindowActions {
  MOVE = 1,
  RESIZE = 2,
  SHADE = 4,
  STICK = 8,
  MAXIMIZE_HORIZONTALLY = 16,
  MAXIMIZE_VERTICALLY = 32,
  CHANGE_WORKSPACE = 64,
  CLOSE = 128,
  UNMAXIMIZE_HORIZONTALLY = 256,
  UNMAXIMIZE_VERTICALLY = 512,
  UNSHADE = 1024,
  UNSTICK = 2048,
  MINIMIZE = 4096,
  UNMINIMIZE = 8192,
  MAXIMIZE = 16384,
  UNMAXIMIZE = 32768,
  FULLSCREEN = 65536,
  ABOVE = 131072,
  BELOW = 262144,
}

export namespace WindowMoveResizeMask {
  export const $gtype: GObject.GType<WindowMoveResizeMask>;
}

export enum WindowMoveResizeMask {
  X = 1,
  Y = 2,
  WIDTH = 4,
  HEIGHT = 8,
}

export namespace WindowState {
  export const $gtype: GObject.GType<WindowState>;
}

export enum WindowState {
  MINIMIZED = 1,
  MAXIMIZED_HORIZONTALLY = 2,
  MAXIMIZED_VERTICALLY = 4,
  SHADED = 8,
  SKIP_PAGER = 16,
  SKIP_TASKLIST = 32,
  STICKY = 64,
  HIDDEN = 128,
  FULLSCREEN = 256,
  DEMANDS_ATTENTION = 512,
  URGENT = 1024,
  ABOVE = 2048,
  BELOW = 4096,
}
export module ActionMenu {
  export interface ConstructorProperties extends Gtk.Menu.ConstructorProperties {
    [key: string]: any;
    window: any | any;
  }
}
export class ActionMenu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
  static $gtype: GObject.GType<ActionMenu>;

  constructor(properties?: Partial<ActionMenu.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<ActionMenu.ConstructorProperties>, ...args: any[]): void;

  // Properties
  // This accessor conflicts with another accessor's type in a parent class or interface.
  // @ts-expect-error
  get window(): any;

  // Constructors

  static ["new"](window: Window): ActionMenu;
  // Conflicted with Gtk.Menu.new
  static ["new"](...args: never[]): any;
}
export module Application {
  export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Application extends GObject.Object {
  static $gtype: GObject.GType<Application>;

  constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "icon-changed", callback: (_source: this) => void): number;
  connect_after(signal: "icon-changed", callback: (_source: this) => void): number;
  emit(signal: "icon-changed"): void;
  connect(signal: "name-changed", callback: (_source: this) => void): number;
  connect_after(signal: "name-changed", callback: (_source: this) => void): number;
  emit(signal: "name-changed"): void;

  // Members

  get_icon(): GdkPixbuf.Pixbuf;
  get_icon_is_fallback(): boolean;
  get_icon_name(): string;
  get_mini_icon(): GdkPixbuf.Pixbuf;
  get_n_windows(): number;
  get_name(): string;
  get_pid(): number;
  get_startup_id(): string;
  get_windows(): Window[];
  get_xid(): number;
  vfunc_icon_changed(): void;
  vfunc_name_changed(): void;
  static get(xwindow: number): Application;
}
export module ClassGroup {
  export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class ClassGroup extends GObject.Object {
  static $gtype: GObject.GType<ClassGroup>;

  constructor(properties?: Partial<ClassGroup.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<ClassGroup.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "icon-changed", callback: (_source: this) => void): number;
  connect_after(signal: "icon-changed", callback: (_source: this) => void): number;
  emit(signal: "icon-changed"): void;
  connect(signal: "name-changed", callback: (_source: this) => void): number;
  connect_after(signal: "name-changed", callback: (_source: this) => void): number;
  emit(signal: "name-changed"): void;

  // Members

  get_icon(): GdkPixbuf.Pixbuf;
  get_id(): string;
  get_mini_icon(): GdkPixbuf.Pixbuf;
  get_name(): string;
  get_res_class(): string;
  get_windows(): Window[];
  vfunc_icon_changed(): void;
  vfunc_name_changed(): void;
  static get(id: string): ClassGroup;
}
export module ImageMenuItem {
  export interface ConstructorProperties extends Gtk.MenuItem.ConstructorProperties {
    [key: string]: any;
  }
}
export class ImageMenuItem extends Gtk.MenuItem implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
  static $gtype: GObject.GType<ImageMenuItem>;

  constructor(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]): void;

  // Implemented Properties

  get action_name(): string;
  set action_name(val: string);
  get actionName(): string;
  set actionName(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);
  get actionTarget(): GLib.Variant;
  set actionTarget(val: GLib.Variant);
  get related_action(): Gtk.Action;
  set related_action(val: Gtk.Action);
  get relatedAction(): Gtk.Action;
  set relatedAction(val: Gtk.Action);
  get use_action_appearance(): boolean;
  set use_action_appearance(val: boolean);
  get useActionAppearance(): boolean;
  set useActionAppearance(val: boolean);

  // Constructors

  static ["new"](): ImageMenuItem;
  static new_with_label(label: string): ImageMenuItem;

  // Members

  make_label_bold(): void;
  make_label_normal(): void;
  set_image_from_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
  set_image_from_window(window: Window): void;

  // Implemented Members

  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
  do_set_related_action(action: Gtk.Action): void;
  get_related_action(): Gtk.Action;
  get_use_action_appearance(): boolean;
  set_related_action(action: Gtk.Action): void;
  set_use_action_appearance(use_appearance: boolean): void;
  sync_action_properties(action?: Gtk.Action | null): void;
  vfunc_sync_action_properties(action?: Gtk.Action | null): void;
  vfunc_update(action: Gtk.Action, property_name: string): void;
}
export module Pager {
  export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
    [key: string]: any;
  }
}
export class Pager extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
  static $gtype: GObject.GType<Pager>;

  constructor(properties?: Partial<Pager.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Pager.ConstructorProperties>, ...args: any[]): void;

  // Constructors

  static ["new"](): Pager;

  // Members

  get_wrap_on_scroll(): boolean;
  set_display_mode(mode: PagerDisplayMode): void;
  set_n_rows(n_rows: number): boolean;
  set_orientation(orientation: Gtk.Orientation): boolean;
  set_scroll_mode(scroll_mode: PagerScrollMode): void;
  set_shadow_type(shadow_type: Gtk.ShadowType): void;
  set_show_all(show_all_workspaces: boolean): void;
  set_wrap_on_scroll(wrap_on_scroll: boolean): void;

  // Implemented Members

  add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
  construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
  custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
  custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
  custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
  get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
  get_name(): string;
  parser_finished(builder: Gtk.Builder): void;
  set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
  set_name(name: string): void;
  vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
  vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
  vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
  vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
  vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, any | null];
  vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
  vfunc_get_name(): string;
  vfunc_parser_finished(builder: Gtk.Builder): void;
  vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
  vfunc_set_name(name: string): void;
}
export module Screen {
  export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Screen extends GObject.Object {
  static $gtype: GObject.GType<Screen>;

  constructor(properties?: Partial<Screen.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Screen.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "active-window-changed", callback: (_source: this, previously_active_window: Window) => void): number;
  connect_after(signal: "active-window-changed", callback: (_source: this, previously_active_window: Window) => void): number;
  emit(signal: "active-window-changed", previously_active_window: Window): void;
  connect(signal: "active-workspace-changed", callback: (_source: this, previously_active_space: Workspace) => void): number;
  connect_after(signal: "active-workspace-changed", callback: (_source: this, previously_active_space: Workspace) => void): number;
  emit(signal: "active-workspace-changed", previously_active_space: Workspace): void;
  connect(signal: "application-closed", callback: (_source: this, app: Application) => void): number;
  connect_after(signal: "application-closed", callback: (_source: this, app: Application) => void): number;
  emit(signal: "application-closed", app: Application): void;
  connect(signal: "application-opened", callback: (_source: this, app: Application) => void): number;
  connect_after(signal: "application-opened", callback: (_source: this, app: Application) => void): number;
  emit(signal: "application-opened", app: Application): void;
  connect(signal: "background-changed", callback: (_source: this) => void): number;
  connect_after(signal: "background-changed", callback: (_source: this) => void): number;
  emit(signal: "background-changed"): void;
  connect(signal: "class-group-closed", callback: (_source: this, class_group: ClassGroup) => void): number;
  connect_after(signal: "class-group-closed", callback: (_source: this, class_group: ClassGroup) => void): number;
  emit(signal: "class-group-closed", class_group: ClassGroup): void;
  connect(signal: "class-group-opened", callback: (_source: this, class_group: ClassGroup) => void): number;
  connect_after(signal: "class-group-opened", callback: (_source: this, class_group: ClassGroup) => void): number;
  emit(signal: "class-group-opened", class_group: ClassGroup): void;
  connect(signal: "showing-desktop-changed", callback: (_source: this) => void): number;
  connect_after(signal: "showing-desktop-changed", callback: (_source: this) => void): number;
  emit(signal: "showing-desktop-changed"): void;
  connect(signal: "viewports-changed", callback: (_source: this) => void): number;
  connect_after(signal: "viewports-changed", callback: (_source: this) => void): number;
  emit(signal: "viewports-changed"): void;
  connect(signal: "window-closed", callback: (_source: this, window: Window) => void): number;
  connect_after(signal: "window-closed", callback: (_source: this, window: Window) => void): number;
  emit(signal: "window-closed", window: Window): void;
  connect(signal: "window-manager-changed", callback: (_source: this) => void): number;
  connect_after(signal: "window-manager-changed", callback: (_source: this) => void): number;
  emit(signal: "window-manager-changed"): void;
  connect(signal: "window-opened", callback: (_source: this, window: Window) => void): number;
  connect_after(signal: "window-opened", callback: (_source: this, window: Window) => void): number;
  emit(signal: "window-opened", window: Window): void;
  connect(signal: "window-stacking-changed", callback: (_source: this) => void): number;
  connect_after(signal: "window-stacking-changed", callback: (_source: this) => void): number;
  emit(signal: "window-stacking-changed"): void;
  connect(signal: "workspace-created", callback: (_source: this, space: Workspace) => void): number;
  connect_after(signal: "workspace-created", callback: (_source: this, space: Workspace) => void): number;
  emit(signal: "workspace-created", space: Workspace): void;
  connect(signal: "workspace-destroyed", callback: (_source: this, space: Workspace) => void): number;
  connect_after(signal: "workspace-destroyed", callback: (_source: this, space: Workspace) => void): number;
  emit(signal: "workspace-destroyed", space: Workspace): void;

  // Members

  calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void;
  change_workspace_count(count: number): void;
  force_update(): void;
  get_active_window(): Window;
  get_active_workspace(): Workspace;
  get_background_pixmap(): number;
  get_height(): number;
  get_number(): number;
  get_previously_active_window(): Window;
  get_showing_desktop(): boolean;
  get_width(): number;
  get_window_manager_name(): string;
  get_windows(): Window[];
  get_windows_stacked(): Window[];
  get_workspace(workspace: number): Workspace;
  get_workspace_count(): number;
  get_workspaces(): Workspace[];
  move_viewport(x: number, y: number): void;
  net_wm_supports(atom: string): boolean;
  release_workspace_layout(current_token: number): void;
  toggle_showing_desktop(show: boolean): void;
  try_set_workspace_layout(current_token: number, rows: number, columns: number): number;
  vfunc_active_window_changed(previous_window: Window): void;
  vfunc_active_workspace_changed(previous_workspace: Workspace): void;
  vfunc_application_closed(app: Application): void;
  vfunc_application_opened(app: Application): void;
  vfunc_background_changed(): void;
  vfunc_class_group_closed(class_group: ClassGroup): void;
  vfunc_class_group_opened(class_group: ClassGroup): void;
  vfunc_showing_desktop_changed(): void;
  vfunc_viewports_changed(): void;
  vfunc_window_closed(window: Window): void;
  vfunc_window_manager_changed(): void;
  vfunc_window_opened(window: Window): void;
  vfunc_window_stacking_changed(): void;
  vfunc_workspace_created(space: Workspace): void;
  vfunc_workspace_destroyed(space: Workspace): void;
  static free_workspace_layout(layout: WorkspaceLayout): void;
  static get(index: number): Screen;
  static get_default(): Screen | null;
  static get_for_root(root_window_id: number): Screen;
}
export module Selector {
  export interface ConstructorProperties extends Gtk.MenuBar.ConstructorProperties {
    [key: string]: any;
  }
}
export class Selector extends Gtk.MenuBar implements Atk.ImplementorIface, Gtk.Buildable {
  static $gtype: GObject.GType<Selector>;

  constructor(properties?: Partial<Selector.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Selector.ConstructorProperties>, ...args: any[]): void;

  // Constructors

  static ["new"](): Selector;
}
export module Tasklist {
  export interface ConstructorProperties extends Gtk.Container.ConstructorProperties {
    [key: string]: any;
  }
}
export class Tasklist extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
  static $gtype: GObject.GType<Tasklist>;

  constructor(properties?: Partial<Tasklist.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Tasklist.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "task-enter-notify", callback: (_source: this, windows: any | null) => void): number;
  connect_after(signal: "task-enter-notify", callback: (_source: this, windows: any | null) => void): number;
  emit(signal: "task-enter-notify", windows: any | null): void;
  connect(signal: "task-leave-notify", callback: (_source: this, windows: any | null) => void): number;
  connect_after(signal: "task-leave-notify", callback: (_source: this, windows: any | null) => void): number;
  emit(signal: "task-leave-notify", windows: any | null): void;

  // Constructors

  static ["new"](): Tasklist;

  // Members

  get_scroll_enabled(): boolean;
  get_size_hint_list(n_elements: number): number;
  set_button_relief(relief: Gtk.ReliefStyle): void;
  set_grouping(grouping: TasklistGroupingType): void;
  set_grouping_limit(limit: number): void;
  set_include_all_workspaces(include_all_workspaces: boolean): void;
  set_middle_click_close(middle_click_close: boolean): void;
  set_orientation(orient: Gtk.Orientation): void;
  set_scroll_enabled(scroll_enabled: boolean): void;
  set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void;
}
export module Window {
  export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Window extends GObject.Object {
  static $gtype: GObject.GType<Window>;

  constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "actions-changed", callback: (_source: this, changed_mask: WindowActions, new_state: WindowActions) => void): number;
  connect_after(signal: "actions-changed", callback: (_source: this, changed_mask: WindowActions, new_state: WindowActions) => void): number;
  emit(signal: "actions-changed", changed_mask: WindowActions, new_state: WindowActions): void;
  connect(signal: "class-changed", callback: (_source: this) => void): number;
  connect_after(signal: "class-changed", callback: (_source: this) => void): number;
  emit(signal: "class-changed"): void;
  connect(signal: "geometry-changed", callback: (_source: this) => void): number;
  connect_after(signal: "geometry-changed", callback: (_source: this) => void): number;
  emit(signal: "geometry-changed"): void;
  connect(signal: "icon-changed", callback: (_source: this) => void): number;
  connect_after(signal: "icon-changed", callback: (_source: this) => void): number;
  emit(signal: "icon-changed"): void;
  connect(signal: "name-changed", callback: (_source: this) => void): number;
  connect_after(signal: "name-changed", callback: (_source: this) => void): number;
  emit(signal: "name-changed"): void;
  connect(signal: "role-changed", callback: (_source: this) => void): number;
  connect_after(signal: "role-changed", callback: (_source: this) => void): number;
  emit(signal: "role-changed"): void;
  connect(signal: "state-changed", callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void): number;
  connect_after(signal: "state-changed", callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void): number;
  emit(signal: "state-changed", changed_mask: WindowState, new_state: WindowState): void;
  connect(signal: "type-changed", callback: (_source: this) => void): number;
  connect_after(signal: "type-changed", callback: (_source: this) => void): number;
  emit(signal: "type-changed"): void;
  connect(signal: "workspace-changed", callback: (_source: this) => void): number;
  connect_after(signal: "workspace-changed", callback: (_source: this) => void): number;
  emit(signal: "workspace-changed"): void;

  // Members

  activate(timestamp: number): void;
  activate_transient(timestamp: number): void;
  close(timestamp: number): void;
  get_actions(): WindowActions;
  get_application(): Application;
  get_class_group(): ClassGroup;
  get_class_group_name(): string;
  get_class_instance_name(): string;
  get_client_window_geometry(): [number, number, number, number];
  get_geometry(): [number, number, number, number];
  get_group_leader(): number;
  get_icon(): GdkPixbuf.Pixbuf;
  get_icon_is_fallback(): boolean;
  get_icon_name(): string;
  get_mini_icon(): GdkPixbuf.Pixbuf;
  get_name(): string;
  get_pid(): number;
  get_role(): string;
  get_screen(): Screen;
  get_session_id(): string;
  get_session_id_utf8(): string;
  get_sort_order(): number;
  get_state(): WindowState;
  get_transient(): Window;
  get_window_type(): WindowType;
  get_workspace(): Workspace;
  get_xid(): number;
  has_icon_name(): boolean;
  has_name(): boolean;
  is_above(): boolean;
  is_active(): boolean;
  is_below(): boolean;
  is_fullscreen(): boolean;
  is_in_viewport(workspace: Workspace): boolean;
  is_maximized(): boolean;
  is_maximized_horizontally(): boolean;
  is_maximized_vertically(): boolean;
  is_minimized(): boolean;
  is_most_recently_activated(): boolean;
  is_on_workspace(workspace: Workspace): boolean;
  is_pinned(): boolean;
  is_shaded(): boolean;
  is_skip_pager(): boolean;
  is_skip_tasklist(): boolean;
  is_sticky(): boolean;
  is_visible_on_workspace(workspace: Workspace): boolean;
  keyboard_move(): void;
  keyboard_size(): void;
  make_above(): void;
  make_below(): void;
  maximize(): void;
  maximize_horizontally(): void;
  maximize_vertically(): void;
  minimize(): void;
  move_to_workspace(space: Workspace): void;
  needs_attention(): boolean;
  or_transient_needs_attention(): boolean;
  pin(): void;
  set_fullscreen(fullscreen: boolean): void;
  set_geometry(gravity: WindowGravity, geometry_mask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void;
  set_icon_geometry(x: number, y: number, width: number, height: number): void;
  set_skip_pager(skip: boolean): void;
  set_skip_tasklist(skip: boolean): void;
  set_sort_order(order: number): void;
  set_window_type(wintype: WindowType): void;
  shade(): void;
  stick(): void;
  transient_is_most_recently_activated(): boolean;
  unmake_above(): void;
  unmake_below(): void;
  unmaximize(): void;
  unmaximize_horizontally(): void;
  unmaximize_vertically(): void;
  unminimize(timestamp: number): void;
  unpin(): void;
  unshade(): void;
  unstick(): void;
  vfunc_actions_changed(changed_mask: WindowActions, new_actions: WindowActions): void;
  vfunc_class_changed(): void;
  vfunc_geometry_changed(): void;
  vfunc_icon_changed(): void;
  vfunc_name_changed(): void;
  vfunc_role_changed(): void;
  vfunc_state_changed(changed_mask: WindowState, new_state: WindowState): void;
  vfunc_type_changed(): void;
  vfunc_workspace_changed(): void;
  static get(xwindow: number): Window;
}
export module Workspace {
  export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Workspace extends GObject.Object {
  static $gtype: GObject.GType<Workspace>;

  constructor(properties?: Partial<Workspace.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Workspace.ConstructorProperties>, ...args: any[]): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "name-changed", callback: (_source: this) => void): number;
  connect_after(signal: "name-changed", callback: (_source: this) => void): number;
  emit(signal: "name-changed"): void;

  // Members

  activate(timestamp: number): void;
  change_name(name: string): void;
  get_height(): number;
  get_layout_column(): number;
  get_layout_row(): number;
  get_name(): string;
  get_neighbor(direction: MotionDirection): Workspace;
  get_number(): number;
  get_screen(): Screen;
  get_viewport_x(): number;
  get_viewport_y(): number;
  get_width(): number;
  is_virtual(): boolean;
  vfunc_name_changed(): void;
}

export class ActionMenuPrivate {
  static $gtype: GObject.GType<ActionMenuPrivate>;

  constructor(copy: ActionMenuPrivate);
}

export class ApplicationPrivate {
  static $gtype: GObject.GType<ApplicationPrivate>;

  constructor(copy: ApplicationPrivate);
}

export class ClassGroupPrivate {
  static $gtype: GObject.GType<ClassGroupPrivate>;

  constructor(copy: ClassGroupPrivate);
}

export class Handle {
  static $gtype: GObject.GType<Handle>;

  constructor(copy: Handle);
}

export class PagerPrivate {
  static $gtype: GObject.GType<PagerPrivate>;

  constructor(copy: PagerPrivate);
}

export class ResourceUsage {
  static $gtype: GObject.GType<ResourceUsage>;

  constructor(
    properties?: Partial<{
      total_bytes_estimate?: number;
      pixmap_bytes?: number;
      n_pixmaps?: number;
      n_windows?: number;
      n_gcs?: number;
      n_pictures?: number;
      n_glyphsets?: number;
      n_fonts?: number;
      n_colormap_entries?: number;
      n_passive_grabs?: number;
      n_cursors?: number;
      n_other?: number;
      pad1?: number;
      pad2?: number;
      pad3?: number;
      pad4?: number;
      pad5?: number;
      pad6?: number;
      pad7?: number;
      pad8?: number;
      pad9?: number;
    }>
  );
  constructor(copy: ResourceUsage);

  // Fields
  total_bytes_estimate: number;
  pixmap_bytes: number;
  n_pixmaps: number;
  n_windows: number;
  n_gcs: number;
  n_pictures: number;
  n_glyphsets: number;
  n_fonts: number;
  n_colormap_entries: number;
  n_passive_grabs: number;
  n_cursors: number;
  n_other: number;
  pad1: number;
  pad2: number;
  pad3: number;
  pad4: number;
  pad5: number;
  pad6: number;
  pad7: number;
  pad8: number;
  pad9: number;
}

export class ScreenPrivate {
  static $gtype: GObject.GType<ScreenPrivate>;

  constructor(copy: ScreenPrivate);
}

export class SelectorPrivate {
  static $gtype: GObject.GType<SelectorPrivate>;

  constructor(copy: SelectorPrivate);
}

export class TasklistPrivate {
  static $gtype: GObject.GType<TasklistPrivate>;

  constructor(copy: TasklistPrivate);
}

export class WindowPrivate {
  static $gtype: GObject.GType<WindowPrivate>;

  constructor(copy: WindowPrivate);
}

export class WorkspaceLayout {
  static $gtype: GObject.GType<WorkspaceLayout>;

  constructor(
    properties?: Partial<{
      rows?: number;
      cols?: number;
      grid?: number;
      grid_area?: number;
      current_row?: number;
      current_col?: number;
    }>
  );
  constructor(copy: WorkspaceLayout);

  // Fields
  rows: number;
  cols: number;
  grid: number;
  grid_area: number;
  current_row: number;
  current_col: number;
}

export class WorkspacePrivate {
  static $gtype: GObject.GType<WorkspacePrivate>;

  constructor(copy: WorkspacePrivate);
}
