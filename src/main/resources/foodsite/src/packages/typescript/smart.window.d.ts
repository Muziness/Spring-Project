import  {BaseElement, Animation} from "./smart.element"

/**
 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
*/
export interface Window extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
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
   * Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow.
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
   * Default value: false
   */
  disableSnap?: boolean;
  /**
   * Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed.
   * Default value: 
   */
  dropPosition?: WindowDropPosition;
  /**
   * Determines the position of the footer of the window element.
   * Default value: top
   */
  footerPosition?: WindowFooterPosition;
  /**
   * Determines the template for the Dialog section of the window. By default footerTemplate is null.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: close,maximize,minimize
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
   * Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout.
   * Default value: null
   */
  layout?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
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
   * Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item.
   * Default value: 
   */
  max?: string | number | null;
  /**
   * Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item.
   * Default value: 
   */
  min?: string | number | null;
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
   * Sets or gets which tab is selected. Applicable only to TabsWindow.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Determines the way the user can switch between tabs. Applicable only to TabsWindow.
   * Default value: click
   */
  selectionMode?: TabSelectionMode;
  /**
   * A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout.
   * Default value: 
   */
  siblings?: any;
  /**
   * Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow.
   * Default value: false
   */
  tabCloseButtons?: boolean;
  /**
   * Determines if the close button is visible on select or always. Applicable only to TabsWindow.
   * Default value: default
   */
  tabCloseButtonMode?: WindowTabCloseButtonMode;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow.
   * Default value: auto
   */
  tabOverflow?: Overflow;
  /**
   * Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow.
   * Default value: top
   */
  tabPosition?: TabPosition;
  /**
   * Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow.
   * Default value: both
   */
  tabScrollButtonsPosition?: LayoutPosition;
  /**
   * Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation;
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
   * This event is triggered when window's dragging is ended.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's dragging is started.
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
   * This event is triggered when window's resizing is ended.
   * @param ev. The custom event.    */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when window's resizing is started.
   * @param ev. The custom event.    */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is restored to it's previous state before maximization.
   * @param ev. The custom event.    */
  onrestore?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a tabitem to the end of the list of tab items inside element.
   * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Sets the window to the top level so the user can interact with it.
   */
  bringToFront(): void;
  /**
   * Clears the content of the Window.
   */
  clear(): void;
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
   * Makes sure a tab item is visible by scrolling to it. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the window after being collapsed.
   * @returns {any[]}
   */
  expand(): any[];
  /**
   * Inserts a new tab and an associated content section. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "jqx-tab-item" node before the reference "jqx-tab-item" node. <strong>Applicable only to TabsWindow.</strong>
   * @param {Node} newNode. The "jqx-tab-item" node to insert.
   * @param {Node | null} referenceNode?. The "jqx-tab-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a tab and its associated content section. <strong>Applicable only to TabsWindow.</strong>
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Removes a child "jqx-tab-item" node. <strong>Applicable only to TabsWindow.</strong>
   * @param {Node} node. The "jqx-tab-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Maximizes the window to fill the area.
   */
  maximize(): void;
  /**
   * Minimizes the window.
   */
  minimize(): void;
  /**
   * Opens the window
   */
  open(): void;
  /**
   * Pins the window. Disables window dragging.
   */
  pin(): void;
  /**
   * Restores the window to it's previous size before maximization/minimization.
   */
  restore(): void;
  /**
   * Selects a tab. <strong> Applicalbe only to TabsWindow elements.</strong>
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Unpins the window. Enables window dragging.
   */
  unpin(): void;
  /**
   * Updates a tab and its associated content section. <strong> Applicalbe only to TabsWindow elements.</strong>
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

export interface Dialog extends Window {}


declare global {    
    interface Document {
			createElement(tagName: "jqx-window"): Dialog;
			querySelector(selectors: "jqx-window"): Dialog | null;	
			querySelectorAll(selectors: "jqx-window"): NodeListOf<Dialog>;
			getElementsByTagName(qualifiedName: "jqx-window"): HTMLCollectionOf<Dialog>;
			getElementsByName(elementName: "jqx-window"): NodeListOf<Dialog>;	
    }
}


declare global {    
    interface Document {		
		/**
		* Returns the first element that is a descendant of node that matches selectors.
		*/
		querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
		querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
		querySelector<E extends Element = Element>(selectors: string): E | null;
		/**
		* Returns all element descendants of node that match selectors.
		*/
		querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
		querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
		querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
		/**
		 * Gets a collection of objects based on the value of the NAME or ID attribute.
		 * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
		 */
		getElementsByName(elementName: string): NodeListOf<HTMLElement>;
		/**
		 * Retrieves a collection of objects based on the specified element name.
		 * @param name Specifies the name of an element.
		 */
		getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
		getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
		getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;		
	}
}
		/**Applicable to TabsWindow when docked inside a DockingLayout Custom Element. <br/> Determines where the window(it's tab items as well) can be dropped inside the DockingLayout. <br/> The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed. */
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

/**Determines the position of the footer of the window element. */
export const enum WindowFooterPosition{
	Bottom = "bottom",
	None = "none"
}

/**Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow. */
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

/**Determines the way the user can switch between tabs. Applicable only to TabsWindow. */
export const enum TabSelectionMode{
	Click = "click",
	Dblclick = "dblclick",
	Mouseenter = "mouseenter",
	None = "none"
}

/**Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
export const enum WindowTabCloseButtonMode{
	Default = "default",
	Selected = "selected"
}

/**Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow. */
export const enum Overflow{
	Auto = "auto",
	Hidden = "hidden",
	Scroll = "scroll"
}

/**Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow. */
export const enum LayoutPosition{
	Near = "near",
	Far = "far",
	Both = "both"
}

/**Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow. */
export const enum Orientation{
	Horizontal = "horizontal",
	Vertical = "vertical"
}

