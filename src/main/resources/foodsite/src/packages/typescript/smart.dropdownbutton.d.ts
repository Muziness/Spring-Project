import  {BaseElement, Animation} from "./smart.element"

/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
export interface DropDownButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets a placeholder text to appear when there is no content inside the dropdown.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines the visibility of the horizontal Scroll bar inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Sets a label above the element. The label is always visible.
   * Default value: ""
   */
  label?: string;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder, displayed in the element's action button container.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner is visible or not.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
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
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /** 
   * This event is triggered when user clicks on the action button. The action button is visible when the <strong>placeholder</strong> is set.
   * @param ev. The custom event.    */
  onactionbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
   * @param ev. The custom event.    */
  ondropdownbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user finishes resizing the drop down.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new HTML node to the drop down.
   * @param {Node} node. The node to be appended
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Closes the dropDown.
   */
  close(): void;
  /**
   * Opens the dropDown.
   */
  open(): void;
  /**
   * Removes everything from the drop down.
   */
  removeAll(): void;
  /**
   * Removes a child node from the drop down.
   * @param {Node} node. The node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Scrolls the drop down to a specific position.
   * @param {number} top. Y axis coordinate
   * @param {number} left. X axis coordinate
   */
  scrollTo(top: number, left: number): void;
   scrollTo(options?: ScrollToOptions): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-drop-down-button"): DropDownButton;
			querySelector(selectors: "jqx-drop-down-button"): DropDownButton | null;	
			querySelectorAll(selectors: "jqx-drop-down-button"): NodeListOf<DropDownButton>;
			getElementsByTagName(qualifiedName: "jqx-drop-down-button"): HTMLCollectionOf<DropDownButton>;
			getElementsByName(elementName: "jqx-drop-down-button"): NodeListOf<DropDownButton>;	
    }
}

/**Determines the position of the drop down button. */
export const enum DropDownButtonPosition{
	Left = "left",
	Right = "right",
	Top = "top",
	Bottom = "bottom"
}

/**Determines how the drop down is going to open. */
export const enum DropDownOpenMode{
	None = "none",
	Default = "default",
	DropDownButton = "dropDownButton",
	Auto = "auto"
}

/**Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
export const enum DropDownPosition{
	Auto = "auto",
	Top = "top",
	Bottom = "bottom",
	OverlayTop = "overlay-top",
	OverlayCenter = "overlay-center",
	OverlayBottom = "overlay-bottom",
	CenterBottom = "center-bottom",
	CenterTop = "center-top"
}

/**Determines the visibility of the horizontal Scroll bar inside the drop down. */
export const enum HorizontalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
}

/**Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
export const enum ResizeMode{
	None = "none",
	Horizontal = "horizontal",
	Vertical = "vertical",
	Both = "both"
}

/**Determines the visibility of the vertical scroll bar. */
export const enum VerticalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
}

