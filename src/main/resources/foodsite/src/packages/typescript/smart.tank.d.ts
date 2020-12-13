import  {BaseElement, Animation} from "./smart.element"

/**
 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
*/
export interface Tank extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * If is set to true all values coerce to the interval, set in the interval property.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
   * Default value: 0,50,100
   */
  customTicks?: number[];
  /**
   * Sets or gets the pattern which labels are displayed in when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the widget. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * When cooerce property is true, all values coerce to the interval's value.
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the tank. If is true - positions of the tank's begin and end are changed.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed on the tank labels.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Sets or gets the widget's label visibility
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Enables or disables the usage of logarithmic scale in the widget.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Sets or gets the maximum value of the widget.
   * Default value: 100
   */
  max?: any;
  /**
   * Sets or gets the type of used mechanical action.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: 0
   */
  min?: any;
  /**
   * Sets or gets whether the widget works with numbers or dates.
   * Default value: numeric
   */
  mode?: ScaleMode;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the orientation of the widget
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * If the widgets is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets the position of the widget's scales. 
   * Default value: near
   */
  scalePosition?: ScalePosition;
  /**
   * Sets the type of the tank's scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Enables or disables displaying of the thumb label.
   * Default value: false
   */
  showThumbLabel?: boolean;
  /**
   * Enables or disables displaying of the tooltip.
   * Default value: false
   */
  showTooltip?: boolean;
  /**
   * Enables or disables displaying of the units.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
   * Default value: 0
   */
  significantDigits?: number;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the position of the thumb label.
   * Default value: near
   */
  thumbLabelPosition?: Position;
  /**
   * Sets or gets the position of the ticks in jqxTank widget.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Sets or gets the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets the position of the tooltip in jqxTank widget.
   * Default value: near
   */
  tooltipPosition?: Position;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used in jqxTank widget.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxTank widget. 
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'.
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the tank is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the tank. 
   */
  focus(): void;
  /**
   * Gets the optimal size of the widget. 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the tank. 
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank. 
   * @returns {string}
   */
  val(value?: string | number): string;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tank"): Tank;
			querySelector(selectors: "jqx-tank"): Tank | null;	
			querySelectorAll(selectors: "jqx-tank"): NodeListOf<Tank>;
			getElementsByTagName(qualifiedName: "jqx-tank"): HTMLCollectionOf<Tank>;
			getElementsByName(elementName: "jqx-tank"): NodeListOf<Tank>;	
    }
}

/**Sets or gets the widget's label visibility */
export const enum LabelsVisibility{
	All = "all",
	EndPoints = "endPoints",
	None = "none"
}

/**Sets or gets the type of used mechanical action. */
export const enum DragMechanicalAction{
	SwitchUntilReleased = "switchUntilReleased",
	SwitchWhenReleased = "switchWhenReleased",
	SwitchWhileDragging = "switchWhileDragging"
}

/**Sets or gets whether the widget works with numbers or dates. */
export const enum ScaleMode{
	Numeric = "numeric",
	Date = "date"
}

/**Sets the orientation of the widget */
export const enum Orientation{
	Horizontal = "horizontal",
	Vertical = "vertical"
}

/**Sets the position of the widget's scales.  */
export const enum ScalePosition{
	Near = "near",
	Far = "far",
	Both = "both",
	None = "none"
}

/**Sets the type of the tank's scale.  */
export const enum ScaleType{
	FloatingPoint = "floatingPoint",
	Integer = "integer"
}

/**Sets or gets the position of the tooltip in jqxTank widget. */
export const enum Position{
	Near = "near",
	Far = "far"
}

/**Sets or gets the position of the ticks in jqxTank widget. */
export const enum TicksPosition{
	Scale = "scale",
	Track = "track"
}

/**Sets or gets the visibility of the ticks. */
export const enum TicksVisibility{
	Major = "major",
	Minor = "minor",
	None = "none"
}

/**Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired. */
export const enum Validation{
	Strict = "strict",
	Interaction = "interaction"
}

/**Sets or gets the word length. Applicable only when scaleType is 'integer'. */
export const enum WordLength{
	Int8 = "int8",
	Uint8 = "uint8",
	Int16 = "int16",
	Uint16 = "uint16",
	Int32 = "int32",
	Uint32 = "uint32",
	Int64 = "int64",
	Uint64 = "uint64"
}

