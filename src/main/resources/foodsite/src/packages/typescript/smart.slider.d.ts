import  {BaseElement, Animation} from "./smart.element"

/**
 Sliders allow users to make selections from a range of values.
*/
export interface Slider extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * With the coerce property true and clicking the track, the thumb and value are moved and set to the nearest value allowed by the interval property. 
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
   * Enables or disables incrementing/decrementing the value using the mouse wheel in jqxSlider. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines what values the thumb snaps to. 
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the slider. If is true - positions of the slider's begin and end are changed. 
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed on the slider labels and tooltip.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Sets or gets the widget's label visibility. 
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
   * Sets the orientation of the widget. 
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'. 
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Enables or disables the slider to be in range mode. If is  set to true, the range is represented between two thumbs. 
   * Default value: false
   */
  rangeSlider?: boolean;
  /**
   * When the slider is read only the users cannot drag or click in the fill of the slider.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets the position of the widget's scales. 
   * Default value: near
   */
  scalePosition?: ScalePosition;
  /**
   * Sets the type of the slider's scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Enables or disables displaying of the buttons. 
   * Default value: false
   */
  showButtons?: boolean;
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
   * Default value: null
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
   * Sets or gets the position of the ticks in jqxSlider widget.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Sets or gets the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets the position of the tooltip in jqxSlider widget. 
   * Default value: near
   */
  tooltipPosition?: Position;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used in jqxSlider widget. 
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to false.
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to true.
   * Default value: 0,100
   */
  values?: number[];
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'. 
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the slider is changed. 
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the slider. 
   */
  focus(): void;
  /**
   * Gets the optimal size of the widget. 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the slider. 
   * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider. 
   * @returns {string}
   */
  val(value?: string | number | number[] | string[]): string;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-slider"): Slider;
			querySelector(selectors: "jqx-slider"): Slider | null;	
			querySelectorAll(selectors: "jqx-slider"): NodeListOf<Slider>;
			getElementsByTagName(qualifiedName: "jqx-slider"): HTMLCollectionOf<Slider>;
			getElementsByName(elementName: "jqx-slider"): NodeListOf<Slider>;	
    }
}

/**Sets or gets the widget's label visibility.  */
export const enum LabelsVisibility{
	All = "all",
	EndPoints = "endPoints",
	None = "none"
}

/**Sets or gets the type of used mechanical action.  */
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

/**Sets the orientation of the widget.  */
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

/**Sets the type of the slider's scale.  */
export const enum ScaleType{
	FloatingPoint = "floatingPoint",
	Integer = "integer"
}

/**Sets or gets the position of the tooltip in jqxSlider widget.  */
export const enum Position{
	Near = "near",
	Far = "far"
}

/**Sets or gets the position of the ticks in jqxSlider widget. */
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

/**Sets or gets the word length. Applicable only when scaleType is 'integer'.  */
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

