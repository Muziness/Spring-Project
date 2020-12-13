import  {BaseElement, Animation} from "./smart.element"

/**
 Tabs window displays a dialog with tabs.
*/
export interface TabsWindow extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Determines if 'Add New' Tab inside the Tabs element is visible.
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Determines if toggle mode is enabled. Toggle mode allows null selection.
   * Default value: false
   */
  allowToggle?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * When enabled the only visible section of the window is the tabs label section. The header,content and footer of the window is hidden. When an item is selected from the tabs label section the content is visualized in an auto-hide popup container beneath the tabsWindow element. 
   * Default value: false
   */
  autoHide?: boolean;
  /**
   * By default  when autoHide is enabled a jqxWindow is used as the autoHideWindow popup to display the content of the selected tabItem. The 'autoHideWindow' property is used to reference a different jqxWindow element inside the DOM to be used as the autoHideContainer instead of the one provided by the actual TabsWindow.
   * Default value: null
   */
  autoHideWindow?: any;
  /**
   * Determines if the window is collapsed or not. When collapsed the only the header of the window is visible.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * When a modal window is opened, thid property determines if clicking on the mask closes the window or not.
   * Default value: false
   */
  closeOnMaskClick?: boolean;
  /**
   * Determines the data source that will be loaded to the Tabs.
   * Default value: null
   */
  dataSource?: {label: string, content: string}[];
  /**
   * Enables or disables the window.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Enables or disables the window snapping feature.
   * Default value: true
   */
  disableSnap?: boolean;
  /**
   * Applicable to DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed.
   * Default value: 
   */
  dropPosition?: WindowDropPosition;
  /**
   * Determines the template for the Dialog section of the window. By default footerTemplate is null.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: pin,maximize,close
   */
  headerButtons?: string[];
  /**
   * Determines the template for the Dialog section of the window. By default headerTemplate is null.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Determines the position of the header of the window element.
   * Default value: top
   */
  headerPosition?: TabPosition;
  /**
   * The label of the window that appears in the header area.
   * Default value: ""
   */
  label?: string;
  /**
   * When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout.
   * Default value: null
   */
  layout?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Applicable to DockingLayout Custom Element.Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Determines if the window is maximized or not. When maximized the window covers the whole viewport.
   * Default value: false
   */
  maximized?: boolean;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "ambiguousIndexes": "jqx-tabs: Initially set jqx-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "jqx-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "jqx-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "jqx-tabs: Passed  is not part of this jqx-tabs element.",
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page.
   * Default value: false
   */
  modal?: boolean;
  /**
   * Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport.
   * Default value: false
   */
  minimized?: boolean;
  /**
   * Determines if the window is visible or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized.
   * Default value: false
   */
  pinned?: boolean;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side. 
   * Default value: none
   */
  resizeMode?: WindowResizeMode;
  /**
   * Sets or gets whether close buttons are displayed.
   * Default value: false
   */
  tabCloseButtons?: boolean;
  /**
   * Determines if the close button is visible on select or always.
   * Default value: default
   */
  tabCloseButtonMode?: TabsWindowTabCloseButtonMode;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
   * Default value: auto
   */
  tabOverflow?: Overflow;
  /**
   * Applies one of four behaviors when the element is not wide enough to display all tab labels.
   * Default value: scroll
   */
  tabLayout?: TabLayout;
  /**
   * Sets or gets where the tab strip is positioned.
   * Default value: top
   */
  tabPosition?: TabPosition;
  /**
   * Sets or gets the orientation of the text in the tabs.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation;
  /**
   * Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
   * Default value: false
   */
  tabReorder?: boolean;
  /**
   * Sets or gets whether tab labels can be resized by dragging with the mouse.
   * Default value: false
   */
  tabResize?: boolean;
  /**
   * Sets or gets the position of the scroll buttons inside the Tab header.
   * Default value: both
   */
  tabScrollButtonsPosition?: LayoutPosition;
  /**
   * Sets or gets which tab is selected.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Determines the way the user can switch between tabs.
   * Default value: click
   */
  selectionMode?: TabSelectionMode;
  /**
   * Applicable to DockingLayout Custom Element. Determines of the item can be collapsed. If set to false, the item can't be collapsed
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Applicable to DockingLayout Custom Element. Determines the min size of the item
   * Default value: ""
   */
  min?: string;
  /**
   * Applicable to DockingLayout Custom Element. Determines the max size of the item.
   * Default value: ""
   */
  max?: string;
  /**
   * Applicable to DockingLayout Custom Element. Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the actual parent of the element. The window can size and move only in the area of that element.
   * Default value: null
   */
  windowParent?: any;
  /** 
   * This event is triggered just before the window starts opening.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is opened( visible ).
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window starts closing.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is closed( hidden )
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is collapsed.
   * @param ev. The custom event.    */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has ended.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has started.
   * @param ev. The custom event.    */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is expanded.
   * @param ev. The custom event.    */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is maximized.
   * @param ev. The custom event.    */
  onmaximize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is minimized.
   * @param ev. The custom event.    */
  onminimize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is restored to it's previous state before maximization.
   * @param ev. The custom event.    */
  onrestore?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when tabs have been reordered.
   * @param ev. The custom event.    */
  onreorder?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the window.
   */
  close(): void;
  /**
   * Collapses the window.
   * @returns {HTMLElement}
   */
  collapse(): HTMLElement;
  /**
   * Makes sure a tab item is visible by scrolling to it.
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the window after being collapsed.
   * @returns {any[]}
   */
  expand(): any[];
  /**
   * Inserts a new tab and an associated content section.
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "jqx-tab-item" node before the reference "jqx-tab-item" node.
   * @param {Node} newNode. The "jqx-tab-item" node to insert.
   * @param {Node | null} referenceNode?. The "jqx-tab-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a tab and its associated content section.
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Removes a child "jqx-tab-item" node.
   * @param {Node} node. The "jqx-tab-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Opens the window
   */
  open(): void;
  /**
   * Maximizes the window to fill the area.
   */
  maximize(): void;
  /**
   * Minimizes the window.
   */
  minimize(): void;
  /**
   * Pins the window. Disables window dragging.
   */
  pin(): void;
  /**
   * Restores the window to it's previous size before maximization/minimization.
   */
  restore(): void;
  /**
   * Selects a tab.
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Unpins the window. Enables window dragging.
   */
  unpin(): void;
  /**
   * Updates a tab and its associated content section.
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tabs-window"): TabsWindow;
			querySelector(selectors: "jqx-tabs-window"): TabsWindow | null;	
			querySelectorAll(selectors: "jqx-tabs-window"): NodeListOf<TabsWindow>;
			getElementsByTagName(qualifiedName: "jqx-tabs-window"): HTMLCollectionOf<TabsWindow>;
			getElementsByName(elementName: "jqx-tabs-window"): NodeListOf<TabsWindow>;	
    }
}

/**Applicable to DockingLayout Custom Element. <br/> Determines where the window(it's tab items as well) can be dropped inside the DockingLayout. <br/> The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
export const enum WindowDropPosition{
	All = "all",
	Top = "top",
	Bottom = "bottom",
	Left = "left",
	Right = "right",
	Center = "center",
	Header = "header",
	LayoutTop = "layout-top",
	LayoutBottom = "layout-bottom",
	LayoutLeft = "layout-left",
	LayoutRight = "layout-right"
}

/**Sets or gets where the tab strip is positioned. */
export const enum TabPosition{
	Top = "top",
	Bottom = "bottom",
	Left = "left",
	Right = "right",
	Hidden = "hidden"
}

/**Determines the resizing mode of the window. <br/> Several modes are available:   none - resizing is disabled. 
 vertical - vertical resizing is allowed. 
 horizontal - horizontal resizing is allowed.
 both - horizontal and vertical resizing is allowed.
 top - the window can only be resized from the top side.
 bottom - the window is resizable only from the bottom side.
 left - the window can be resized only from the left side.
 right - the window can be resized only from the right side.
  */
export const enum WindowResizeMode{
	None = "none",
	Horizontal = "horizontal",
	Vertical = "vertical",
	Both = "both",
	Top = "top",
	Bottom = "bottom",
	Left = "left",
	Right = "right"
}

/**Determines if the close button is visible on select or always. */
export const enum TabsWindowTabCloseButtonMode{
	Default = "default",
	Selected = "selected"
}

/**Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. */
export const enum Overflow{
	Auto = "auto",
	Hidden = "hidden",
	Scroll = "scroll"
}

/**Applies one of four behaviors when the element is not wide enough to display all tab labels. */
export const enum TabLayout{
	Scroll = "scroll",
	Dropdown = "dropdown",
	Wrap = "wrap",
	Shrink = "shrink"
}

/**Sets or gets the orientation of the text in the tabs. */
export const enum Orientation{
	Horizontal = "horizontal",
	Vertical = "vertical"
}

/**Sets or gets the position of the scroll buttons inside the Tab header. */
export const enum LayoutPosition{
	Near = "near",
	Far = "far",
	Both = "both"
}

/**Determines the way the user can switch between tabs. */
export const enum TabSelectionMode{
	Click = "click",
	Dblclick = "dblclick",
	Mouseenter = "mouseenter",
	None = "none"
}

