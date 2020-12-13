import  {BaseElement, Animation} from "./smart.element"

/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export interface ListItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: -1
   */
  alternationIndex?: number;
  /**
   * 
   * Default value: ""
   */
  color?: string;
  /**
   * 
   * Default value: plain
   */
  displayMode?: ListItemDisplayMode;
  /**
   * 
   * Default value: false
   */
  grouped?: boolean;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
  /**
   * 
   * Default value: ""
   */
  value?: string;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: ""
   */
  details?: string;
  /**
   * 
   * Default value: ""
   */
  group?: string;
  /**
   * 
   * Default value: false
   */
  hidden: boolean;
  /**
   * 
   * Default value: false
   */
  readonly?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-list-item"): ListItem;
			querySelector(selectors: "jqx-list-item"): ListItem | null;	
			querySelectorAll(selectors: "jqx-list-item"): NodeListOf<ListItem>;
			getElementsByTagName(qualifiedName: "jqx-list-item"): HTMLCollectionOf<ListItem>;
			getElementsByName(elementName: "jqx-list-item"): NodeListOf<ListItem>;	
    }
}


export const enum ListItemDisplayMode{
	Plain = "plain",
	CheckBox = "checkBox",
	RadioButton = "radioButton"
}

/**
 Defines a group of list items.
*/
export interface ListItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-list-items-group"): ListItemsGroup;
			querySelector(selectors: "jqx-list-items-group"): ListItemsGroup | null;	
			querySelectorAll(selectors: "jqx-list-items-group"): NodeListOf<ListItemsGroup>;
			getElementsByTagName(qualifiedName: "jqx-list-items-group"): HTMLCollectionOf<ListItemsGroup>;
			getElementsByName(elementName: "jqx-list-items-group"): NodeListOf<ListItemsGroup>;	
    }
}

/**
 ListMenu allows you to present users a listing of options and sub options.
*/
export interface ListMenu extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the element becomes focused on hover or not.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Allows top-level ListMenu items to be checkable.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its jqx-menu-item/jqx-menu-items-group subitems. See also the property checkable.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the check mode of top-level ListMenu items(groups).
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Displays or hides the loading indicator. Loading indicator is hidden by default.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets or gets the opening direction of the ListMenu minimized dropdown.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition;
  /**
   * Enables or disables scrolling using the mouse wheel through overflowing menu items.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the filter input.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter and sorted.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator inside the element.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
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
   * Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number | null;
  /**
   * Sets or gets the ListMenu's scroll buttons behavior.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
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
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when a jqx-menu-items-group is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the item that was expanded.
   *  value - The value of the item that was expanded.
   *  path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children of the item that was expanded.
   */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a menu item check state is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, checked)
   *  item - The menu item which state was changed.
   *  label - The label of the item which state was changed.
   *  value - The value of the item which state was changed.
   *  checked - The checked state of the toggled item. If false the item is not toggled.
   */
  onitemcheckchange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a list menu item is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that was clicked.
   *  label - The label of the clicked item.
   *  value - The value of the clicked item.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the bottom of the ListMenu.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item to the list.
   * @param {HTMLElement} Item. A jqx-menu-item to add to the List Menu.
   * @param {HTMLElement | string} Parent?. The jqx-menu-items-group (or its id or numeric path) to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Navigates to the previous page (jqx-menu-items-group).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
   */
  back(animation?: boolean): void;
  /**
   * Navigates to a particular page (jqx-menu-items-group).
   * @param {string} id. The id or numeric path of a page (jqx-menu-items-group).
   */
  changePage(id: string): void;
  /**
   * Checks an item.
   * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Maximizes the List Menu.
   */
  maximize(): void;
  /**
   * Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized.
   */
  minimize(): void;
  /**
   * Removes an item.
   * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unchecks an item.
   * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
   */
  uncheckItem(item: HTMLElement | string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-list-menu"): ListMenu;
			querySelector(selectors: "jqx-list-menu"): ListMenu | null;	
			querySelectorAll(selectors: "jqx-list-menu"): NodeListOf<ListMenu>;
			getElementsByTagName(qualifiedName: "jqx-list-menu"): HTMLCollectionOf<ListMenu>;
			getElementsByName(elementName: "jqx-list-menu"): NodeListOf<ListMenu>;	
    }
}

/**Sets the check mode of top-level ListMenu items(groups). */
export const enum MenuCheckMode{
	Checkbox = "checkbox",
	RadioButton = "radioButton"
}

/**Sets or gets the opening direction of the ListMenu minimized dropdown. */
export const enum MenuDropDownPosition{
	Auto = "auto",
	TopLeft = "top-left",
	TopRight = "top-right",
	BottomLeft = "bottom-left",
	BottomRight = "bottom-right",
	OverlayLeft = "overlay-left",
	OverlayRight = "overlay-right"
}

/**Determines the filtering mode. */
export const enum FilterMode{
	Contains = "contains",
	ContainsIgnoreCase = "containsIgnoreCase",
	DoesNotContain = "doesNotContain",
	DoesNotContainIgnoreCase = "doesNotContainIgnoreCase",
	Equals = "equals",
	EqualsIgnoreCase = "equalsIgnoreCase",
	StartsWith = "startsWith",
	StartsWithIgnoreCase = "startsWithIgnoreCase",
	EndsWith = "endsWith",
	EndsWithIgnoreCase = "endsWithIgnoreCase"
}

/**Determines the position of the loading indicator inside the element. */
export const enum VerticalAlignment{
	Bottom = "bottom",
	Center = "center",
	Top = "top"
}

/**Sets or gets the ListMenu's scroll buttons behavior. */
export const enum Overflow{
	Auto = "auto",
	Hidden = "hidden",
	Scroll = "scroll"
}

