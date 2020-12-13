import  {BaseElement, Animation} from "./smart.element"

/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
export interface RepeatButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the delay between repeats in miliseconds.
   * Default value: 50
   */
  delay?: number;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a delay before the first repeat iteration in miliseconds.
   * Default value: 150
   */
  initialDelay?: number;
  /**
   * Sets the inner HTML of the element.
   * Default value: """"
   */
  innerHTML: string;
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
   * Sets an object with string values, related to the different states of passwords strength.
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
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
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
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the element is clicked.
   * @param ev. The custom event.    */
  onclick: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-repeat-button"): RepeatButton;
			querySelector(selectors: "jqx-repeat-button"): RepeatButton | null;	
			querySelectorAll(selectors: "jqx-repeat-button"): NodeListOf<RepeatButton>;
			getElementsByTagName(qualifiedName: "jqx-repeat-button"): HTMLCollectionOf<RepeatButton>;
			getElementsByName(elementName: "jqx-repeat-button"): NodeListOf<RepeatButton>;	
    }
}

/**Sets the click mode of the button. */
export const enum ClickMode{
	Hover = "hover",
	Press = "press",
	Release = "release",
	PressAndRelease = "pressAndRelease"
}

