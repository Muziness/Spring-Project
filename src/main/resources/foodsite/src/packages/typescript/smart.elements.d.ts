declare global {
    interface Window {
        Smart: any;
    }
}

/**
 Accordion organizes content within collapsable items.
*/
export interface Accordion extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the accordion. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode.
   * Default value: 
   */
  expandedIndexes?: number[];
  /**
   * Sets or gets the expand mode. Expand mode determines how the items will expand or collapse.
   * Default value: singleFitHeight
   */
  expandMode?: AccordionExpandMode;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines if the element is readonly or not. If the element true, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Enables or disables accordion reordering.
   * Default value: false
   */
  reorder?: boolean;
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
   * Determines whether the element can be focused or not.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when an item is collapsed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is going to be collapsed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  oncollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a reordering operation is completed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item that was dragged.
   *  target - The item that was dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a reordering operation is started.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item that is about to be dragged.
   *  target - The item that is about to be dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - The current top and left position of the item.
   *  target - The item that was dragged.
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item.
   */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is going to be expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item.
   *  index - The index of the item.
   *  label - The label of the item
   */
  onexpanding?: ((this: any, ev: Event) => any) | null;
  /**
   * Collapses an item at a specified index.
   * @param {number} position. The index of the collapsed item.
   */
  collapse(position: number): void;
  /**
   * Expands an item at a specified index.
   * @param {number} position. The index of the expanded item.
   */
  expand(position: number): void;
  /**
   * Inserts a new item at a specified index.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} item. An object containing the values for the properties of the new item to be inserted.
   */
  insert(index: number, item: any): void;
  /**
   * Removes an item at a specified index.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Updates an item from the element.
   * @param {number} index. The index of the item to be updated.
   * @param {any} settings. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-accordion"): Accordion;
			querySelector(selectors: "jqx-accordion"): Accordion | null;	
			querySelectorAll(selectors: "jqx-accordion"): NodeListOf<Accordion>;
			getElementsByTagName(qualifiedName: "jqx-accordion"): HTMLCollectionOf<Accordion>;
			getElementsByName(elementName: "jqx-accordion"): NodeListOf<Accordion>;	
    }
}

/**Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
export const enum Animation{
	None = "none",
	Simple = "simple",
	Advanced = "advanced"
}

/**Sets or gets the expand mode. Expand mode determines how the items will expand or collapse. */
export const enum AccordionExpandMode{
	Single = "single",
	SingleFitHeight = "singleFitHeight",
	Multiple = "multiple",
	Toggle = "toggle",
	None = "none"
}

/**
 Single item in an Accordion view.
*/
export interface AccordionItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets header's arrow position. If the value is 'none' the arrow is not shown.
   * Default value: left
   */
  arrow?: AccordionItemArrow;
  /**
   * Sets or gets the content if the item.
   * Default value: ''
   */
  content?: string | HTMLElement;
  /**
   * Sets or gets the expanded state.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Sets or gets the focus state.
   * Default value: false
   */
  focused?: boolean;
  /**
   * Sets or gets the label if the item.
   * Default value: ""
   */
  label?: string;
  /** 
   * This event is triggered when the item is collapsed.
   * @param ev. The custom event.    */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the item is expanded.
   * @param ev. The custom event.    */
  onexpand?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-accordion-item"): AccordionItem;
			querySelector(selectors: "jqx-accordion-item"): AccordionItem | null;	
			querySelectorAll(selectors: "jqx-accordion-item"): NodeListOf<AccordionItem>;
			getElementsByTagName(qualifiedName: "jqx-accordion-item"): HTMLCollectionOf<AccordionItem>;
			getElementsByName(elementName: "jqx-accordion-item"): NodeListOf<AccordionItem>;	
    }
}

/**Sets or gets header's arrow position. If the value is 'none' the arrow is not shown. */
export const enum AccordionItemArrow{
	Left = "left",
	Right = "right",
	None = "none"
}

/**
 Array is broadly used in Engineering applications and displays a Grid of values.
*/
export interface Array extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the indexing mode of the Array.
   * Default value: LabVIEW
   */
  arrayIndexingMode?: ArrayArrayIndexingMode;
  /**
   * A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'.
   * Default value: null
   */
  changeProperty?: any;
  /**
   * Sets or gets the number of visible columns in the Array.
   * Default value: 1
   */
  columns?: number;
  /**
   * Sets or gets the default value of inner elements when type is 'custom'.
   * Default value: null
   */
  customWidgetDefaultValue?: any;
  /**
   * Sets or gets the dimensions of the Array.
   * Default value: 1
   */
  dimensions?: number;
  /**
   * Sets or gets disabled state of the Array.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the height of Array elements (row height).
   * Default value: 25
   */
  elementHeight?: number;
  /**
   * A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function.
   * Default value: null
   */
  elementTemplate?: any;
  /**
   * Sets or gets the width of Array elements (column width).
   * Default value: 75
   */
  elementWidth?: number;
  /**
   * A callback function that can be used for getting the value of element widgets.
   * Default value: null
   */
  getElementValue?: any;
  /**
   * Sets or gets the height of indexers.
   * Default value: 25
   */
  indexerHeight?: number;
  /**
   * Sets or gets the width of indexers.
   * Default value: 50
   */
  indexerWidth?: number;
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
   *     "callbackFunctionRequired": "jqx-array: When \"type\" is 'custom', the  callback function has to be implemented."
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the number of visible rows in the Array.
   * Default value: 1
   */
  rows?: number;
  /**
   * A callback function that can be used for setting the value of element widgets.
   * Default value: null
   */
  setElementValue?: any;
  /**
   * Sets or gets whether to display the horizontal scrollbar.
   * Default value: false
   */
  showHorizontalScrollbar?: boolean;
  /**
   * Sets or gets whether to display the array indexers.
   * Default value: false
   */
  showIndexDisplay?: boolean;
  /**
   * Sets or gets whether to highlight selected elements.
   * Default value: false
   */
  showSelection?: boolean;
  /**
   * Sets or gets whether to display the vertical scrollbar.
   * Default value: false
   */
  showVerticalScrollbar?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the data type and element widgets to be used in the Array.
   * Default value: none
   */
  type?: ArrayType;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the Array.
   * Default value: 
   */
  value?: number[];
  /** 
   * This event is triggered when a visible row or column has been added or removed.
   * @param ev. The custom event.    */
  onarraysizechange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value of the Array is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dimension has been added or removed.
   * @param ev. The custom event.    */
  ondimensionchange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an Array element has been clicked.
   * @param ev. The custom event.    */
  onelementclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Array is scrolled with one of the scrollbars.
   * @param ev. The custom event.    */
  onscroll: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the column width or the row height has been changed.
   * @param ev. The custom event.    */
  onsizechange?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a dimension to the array.<br /> <em>Note:</em> when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the <strong>dimensions</strong> property.
   */
  addDimension(): void;
  /**
   * Clears the selection.
   */
  clearSelection(): void;
  /**
   * Copies the value of an Array element to the clipboard.
   * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
   * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
   */
  copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void;
  /**
   * Deletes a column in the <strong>value</strong> array.
   * @param {number} Columnindex. Index of the column to be deleted.
   */
  deleteColumn(Columnindex: number): void;
  /**
   * Deletes a row in the <strong>value</strong> array.
   * @param {number} Rowindex. Index of the row to be deleted.
   */
  deleteRow(Rowindex: number): void;
  /**
   * Empties the <strong>value</strong> array.
   */
  emptyArray(): void;
  /**
   * Designates the end of a selection started with the method <strong>startSelection</strong>.
   * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
   * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
   */
  endSelection(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Returns the HTML element at the specified visible row and column coordinates of the Array.
   * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
   * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
   * @returns {HTMLElement}
   */
  getElement(Rowvisibleindex: number, Columnvisibleindex: number): HTMLElement;
  /**
   * Returns an object with the values of the Array element width and height.
   * @returns {any}
   */
  getElementSize(): any;
  /**
   * Gets an array with the values of all indexers.
   * @returns {any[]}
   */
  getIndexerValue(): any[];
  /**
   * Returns an HTML element from the Array at the specified page coordinates and other information about this element.
   * @param {number} Pagexcoordinate. 
   * @param {number} Pageycoordinate. 
   * @returns {any}
   */
  hitTest(Pagexcoordinate: number, Pageycoordinate: number): any;
  /**
   * Inserts a column in the <strong>value</strong> array before the specified column. The new column is filled with default values.
   * @param {number} Columnindex. Index of the column to add a new column before.
   */
  insertColumnBefore(Columnindex: number): void;
  /**
   * Inserts a row in the <strong>value</strong> array before the specified row. The new row is filled with default values.
   * @param {number} Rowindex. Index of the row to add a new row before.
   */
  insertRowBefore(Rowindex: number): void;
  /**
   * Sets all <strong>value</strong> array members to the default value.
   */
  reinitializeArray(): void;
  /**
   * Removes a dimension from the array.<br /> <em>Note:</em> when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the <strong>dimensions</strong> property.
   */
  removeDimension(): void;
  /**
   * Sets the array's <strong>type</strong> to <em>'none'</em>.
   */
  reset(): void;
  /**
   * Resizes Array elements (changes both the column width and the row height).
   * @param {number} Elementwidth. The new element (column) width.
   * @param {number} Elementheight. The new element (row) height.
   */
  resizeElement(Elementwidth: number, Elementheight: number): void;
  /**
   * Selects all members of the array.
   */
  selectAll(): void;
  /**
   * Selects an element with the passed row and column bound indexes.
   * @param {number} Rowboundindex. 
   * @param {number} Columnboundindex. 
   */
  selectElement(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Sets the column (element) width.
   * @param {number} Columnwidth. The new column width.
   */
  setColumnWidth(Columnwidth: number): void;
  /**
   * Sets the default value of array members.
   * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
   */
  setDefaultValue(Defaultvalue: any): void;
  /**
   * Sets the value of one or more Array indexers.
   * @param {any[]} Settings. An array of objects with the fields index and value.
   */
  setIndexerValue(Settings: any[]): void;
  /**
   * Sets the row (element) height.
   * @param {number} Rowheight. The new row height.
   */
  setRowHeight(Rowheight: number): void;
  /**
   * Makes the last array member visible.
   */
  showLastElement(): void;
  /**
   * Designates the start of a selection. To end a selection, call <strong>endSelection</strong>.
   * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
   * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
   */
  startSelection(Rowboundindex: number, Columnboundindex: number): void;
  /**
   * Increases or decreases the visual gap between Array elements.
   */
  toggleElementGap(): void;
  /**
   * Transposes the array. Applicable only when <strong>dimensions</strong> is <em>2</em> (2D array).
   */
  transposeArray(): void;
  /**
   * Sets or gets the value of the whole array or sets the value of a member of the array.
   * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
   * @param {number} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
   * @returns {any[]}
   */
  val(Newvalue?: any, Elementindexes?: number): any[];
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-array"): Array;
			querySelector(selectors: "jqx-array"): Array | null;	
			querySelectorAll(selectors: "jqx-array"): NodeListOf<Array>;
			getElementsByTagName(qualifiedName: "jqx-array"): HTMLCollectionOf<Array>;
			getElementsByName(elementName: "jqx-array"): NodeListOf<Array>;	
    }
}

/**Sets or gets the indexing mode of the Array. */
export const enum ArrayArrayIndexingMode{
	LabVIEW = "LabVIEW",
	JavaScript = "JavaScript"
}

/**Sets or gets the data type and element widgets to be used in the Array. */
export const enum ArrayType{
	None = "none",
	Boolean = "boolean",
	Numeric = "numeric",
	String = "string",
	Custom = "custom"
}

/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export interface Breadcrumb extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the "Add new item" (+) button.
   * Default value: false
   */
  addNewItem?: boolean;
  /**
   * Enables or disables the dragging of breadcrumb items.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the dropping of dragged breadcrumb items.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Show/Hide the close button of breadcrumb items.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item.
   * Default value: []
   */
  dataSource?: {label: string, value: string}[];
  /**
   * Enables or disables the Breadcrumb.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   * Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when a Breadcrumb item is closed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that has been closed.
   */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling <code>event.preventDefault()</code> in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item)
   *  item - The item that is going to be closed.
   */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is dropped.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Breadcrumb item is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, originalEvent, target)
   *  item - The item that is being dragged.
   *  originalEvent - The original event that initiates the dragging operation.
   *  target - The original target.
   */
  ondragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Add new item" (+) button is clicked.
   * @param ev. The custom event.    */
  onaddnewitem?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item.
   * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
   */
  addItem(itemDetails: any): void;
  /**
   * Restores the Breadcrumb from minimized state back to normal.
   */
  maximize(): void;
  /**
   * Minimizes the Breadcrumb.
   */
  minimize(): void;
  /**
   * Removes an item.
   * @param {HTMLElement} item. The item to remove.
   */
  removeItem(item: HTMLElement): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-breadcrumb"): Breadcrumb;
			querySelector(selectors: "jqx-breadcrumb"): Breadcrumb | null;	
			querySelectorAll(selectors: "jqx-breadcrumb"): NodeListOf<Breadcrumb>;
			getElementsByTagName(qualifiedName: "jqx-breadcrumb"): HTMLCollectionOf<Breadcrumb>;
			getElementsByName(elementName: "jqx-breadcrumb"): NodeListOf<Breadcrumb>;	
    }
}

/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
export interface Button extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the click mode for the element.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets the content of the element.
   * Default value: ""
   */
  content?: any;
  /**
   * Enables or disables the button. 
   * Default value: false
   */
  disabled?: boolean;
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
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the custom element is readonly, it cannot be interacted with.
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
   * Sets or gets the type of the button.
   * Default value: "Reset"
   */
  type?: string;
  /**
   * Sets or gets the button's value. 
   * Default value: ""
   */
  value?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * Click event is triggered regarding to the chosen clickMode.
   * @param ev. The custom event.    */
  onclick: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-button"): Button;
			querySelector(selectors: "jqx-button"): Button | null;	
			querySelectorAll(selectors: "jqx-button"): NodeListOf<Button>;
			getElementsByTagName(qualifiedName: "jqx-button"): HTMLCollectionOf<Button>;
			getElementsByName(elementName: "jqx-button"): NodeListOf<Button>;	
    }
}

/**Determines the click mode for the element. */
export const enum ClickMode{
	Hover = "hover",
	Press = "press",
	Release = "release",
	PressAndRelease = "pressAndRelease"
}

/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export interface Calendar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines the date controls inside the header of the Calendar.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Determines the format of the day names located above the days inside the calendar.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   *  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'.
   * Default value: null
   */
  dateFormatFunction?: any;
  /**
   * Enables or disables the Calendar.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation when the user clicks on a date that's not from the current month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the date view of the calendar when calendarMode is set to 'default'
   * Default value: month
   */
  displayMode?: CalendarDisplayMode;
  /**
   * Determines the type of the month/year view when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Determines the height of the month's drop down inside the Calendar.
   * Default value: "200"
   */
  dropDownHeight?: string;
  /**
   * Determines the width of the month's drop down inside the Calendar.
   * Default value: ""
   */
  dropDownWidth?: string;
  /**
   * Determines the first day of the week. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Hides the dates from other months.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets the dates that will be displayed as important.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it.
   * Default value: null
   */
  importantDatesTemplate?: any;
  /**
   *  Determines the language of the Calendar. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines the max date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(2100, 1, 1)
   */
  max?: any;
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
   * Determines the min date for the Calendar. Accepts date objects and valid date string formats.
   * Default value: new Date(1900, 1, 1)
   */
  min?: any;
  /**
   * Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown.
   * Default value: 1
   */
  months?: number;
  /**
   * Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. 
   * Default value: long
   */
  monthNameFormat?: MonthFormat;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date.
   * Default value: 
   */
  restrictedDates?: string[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   *  Determines the direction of the navigation buttons located in the header and the animation.
   * Default value: landscape
   */
  scrollButtonsNavigationMode?: ViewLayout;
  /**
   *  Determines the position of the navigation buttons located inside the header. 
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition;
  /**
   * Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format.
   * Default value: 
   */
  selectedDates?: string[];
  /**
   * Determines the date selection mode.
   * Default value: default
   */
  selectionMode?: CalendarSelectionMode;
  /**
   * Sets the delay between clicks of the date navigation buttons located in the header of the Calendar. 
   * Default value: 80
   */
  spinButtonsDelay?: number;
  /**
   * Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it.
   * Default value: null
   */
  titleTemplate?: any;
  /**
   * Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible.
   * Default value: true
   */
  tooltipArrow?: boolean;
  /**
   * Sets the delay of the tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate.
   * Default value: 
   */
  tooltipOffset?: number[][];
  /**
   * Sets the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference.
   * Default value: null
   */
  tooltipTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the orientation of the Calendar.
   * Default value: portrait
   */
  view?: ViewLayout;
  /**
   * Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible.
   * Default value: header
   */
  viewSections?: string[];
  /**
   * Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar.
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ).
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /** 
   * This event is triggered when a new date has been selected/unselected.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value)
   *  value - An array of all currently selected dates.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldDisplayMode, newDisplayMode)
   *  oldDisplayMode - The previous display mode.
   *  newDisplayMode - The new display mode.
   */
  ondisplaymodechanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the display mode has changed.
   * @param ev. The custom event.    */
  ondisplaymodechange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onnavigationchanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the view is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value, type)
   *  value - The view's date.
   *  type - The view type - 'month', 'decade' or 'year'.
   */
  onnavigationchange?: ((this: any, ev: Event) => any) | null;
  /**
   * Clears the selection. Removes all seleceted dates.
   */
  clearSelection(): void;
  /**
   * Navigates forwards/backwards depending on the argument.
   * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
   * @returns {boolean}
   */
  navigate(step: number | Date | string): boolean;
  /**
   * Selects or Unselects a date.
   * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
   */
  select(date: Date | string): void;
  /**
   * Selects today's date.
   * @returns {Date}
   */
  today(): Date;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-calendar"): Calendar;
			querySelector(selectors: "jqx-calendar"): Calendar | null;	
			querySelectorAll(selectors: "jqx-calendar"): NodeListOf<Calendar>;
			getElementsByTagName(qualifiedName: "jqx-calendar"): HTMLCollectionOf<Calendar>;
			getElementsByName(elementName: "jqx-calendar"): NodeListOf<Calendar>;	
    }
}

/**Determines the date controls inside the header of the Calendar. */
export const enum CalendarMode{
	Default = "default",
	Classic = "classic"
}

/**Determines the format of the day names located above the days inside the calendar. */
export const enum DayFormat{
	Narrow = "narrow",
	FirstTwoLetters = "firstTwoLetters",
	Long = "long",
	Short = "short"
}

/**Determines the date view of the calendar when calendarMode is set to 'default' */
export const enum CalendarDisplayMode{
	Month = "month",
	Year = "year",
	Decade = "decade"
}

/**Determines the type of the month/year view when calendarMode is set to Default. */
export const enum CalendarDisplayModeView{
	Table = "table",
	List = "list"
}

/**Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1. <br/> */
export const enum MonthFormat{
	Narrow = "narrow",
	FirstTwoLetters = "firstTwoLetters",
	Long = "long",
	Short = "short",
	TwoDigit = "2-digit",
	Numeric = "numeric"
}

/**Determines the orientation of the Calendar. */
export const enum ViewLayout{
	Landscape = "landscape",
	Portrait = "portrait"
}

/** Determines the position of the navigation buttons located inside the header.  */
export const enum LayoutPosition{
	Near = "near",
	Far = "far",
	Both = "both"
}

/**Determines the date selection mode. */
export const enum CalendarSelectionMode{
	Null = "null",
	Default = "default",
	Many = "many",
	One = "one",
	OneOrMany = "oneOrMany",
	Range = "range",
	Week = "week",
	ZeroOrMany = "zeroOrMany",
	ZeroOrOne = "zeroOrOne"
}

/**Sets the position of the tooltip. */
export const enum TooltipPosition{
	Auto = "auto",
	Absolute = "absolute",
	Bottom = "bottom",
	Top = "top",
	Left = "left",
	Right = "right"
}

/**Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.<br/> */
export const enum YearFormat{
	TwoDigit = "2-digit",
	Numeric = "numeric"
}

/**
 Card component with header, footer and content sections.
*/
export interface Card extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A callback function, used to add event handlers and other custom logic related to the content inside the card element.
   * Default value: null
   */
  contentHandler?: any;
  /**
   * This object is used to populate card's template. Object keys represent the placeholders surrounded in braces ( e.g.  ) inside the template of an item and their values are used to replace the bindings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom card template. The template can be the id of an HTMLTemplate element inside the DOM or it's reference. The content of the template may hold one or many property placeholders in format . These placeholders will be replaced with the values of the corresponding properties defined in the dataSource object.
   * Default value: null
   */
  itemTemplate?: any;
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
   * This event is triggered when the card is swiped bottom.
   * @param ev. The custom event.    */
  onswipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped left.
   * @param ev. The custom event.    */
  onswipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped right.
   * @param ev. The custom event.    */
  onswiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the card is swiped top.
   * @param ev. The custom event.    */
  onswipetop?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-card"): Card;
			querySelector(selectors: "jqx-card"): Card | null;	
			querySelectorAll(selectors: "jqx-card"): NodeListOf<Card>;
			getElementsByTagName(qualifiedName: "jqx-card"): HTMLCollectionOf<Card>;
			getElementsByName(elementName: "jqx-card"): NodeListOf<Card>;	
    }
}

/**
 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
*/
export interface CardView extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Toggles the button for adding new cards.
   * Default value: false
   */
  addNewButton?: boolean;
  /**
   * Allows reordering by dragging cards.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Describes the height for each card.
   * Default value: null
   */
  cardHeight?: number | null;
  /**
   * Describes the orientation of the card cells.
   * Default value: vertical
   */
  cellOrientation?: Orientation;
  /**
   * Allows collapsing the card content.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value
   * Default value: 
   */
  columns?: CardViewColumn[];
  /**
   * Describes which data field to be set as cover.
   * Default value: "''"
   */
  coverField?: string;
  /**
   * Describes the cover image fit property.
   * Default value: crop
   */
  coverMode?: CardViewCoverMode;
  /**
   * Determines the data source for the item that will be displayed inside the card.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Allowes the edit option for the cards.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Describes the header positions of the elements.
   * Default value: none
   */
  headerPosition?: CardViewHeaderPosition;
  /**
   * Describes the header positions of the elements.
   * Default value:    * {
   *   "en": {
   *     "addFilter": "+ Add filter",
   *     "addImage": "Add",
   *     "and": "And",
   *     "apply": "Apply",
   *     "booleanFirst": "☐",
   *     "booleanLast": "☑",
   *     "cancel": "Cancel",
   *     "CONTAINS": "contains",
   *     "CONTAINS_CASE_SENSITIVE": "contains (case sensitive)",
   *     "coverField": "Cover field",
   *     "crop": "Crop",
   *     "customizeCards": "Customize cards",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "dateTabLabel": "DATE",
   *     "DOES_NOT_CONTAIN": "does not contain",
   *     "DOES_NOT_CONTAIN_CASE_SENSITIVE": "does not contain (case sensitive)",
   *     "draggedRecord": "Record ",
   *     "EMPTY": "empty",
   *     "ENDS_WITH": "ends with",
   *     "ENDS_WITH_CASE_SENSITIVE": "ends with (case sensitive)",
   *     "EQUAL": "equal",
   *     "EQUAL_CASE_SENSITIVE": "equal (case sensitive)",
   *     "filter": "Filter",
   *     "filteredByMultiple": " filters",
   *     "filteredByOne": "1 filter",
   *     "find": "Find a field",
   *     "findInView": "Find in view",
   *     "firstBy": "Sort by",
   *     "fit": "Fit",
   *     "found": "",
   *     "from": "from",
   *     "GREATER_THAN": "greater than",
   *     "GREATER_THAN_OR_EQUAL": "greater than or equal",
   *     "imageUrl": "New image URL:",
   *     "incorrectStructure": "'dataSource' must be an instance of JQX.DataAdapter or an array of objects with key-value pairs.",
   *     "LESS_THAN": "less than",
   *     "LESS_THAN_OR_EQUAL": "less than or equal",
   *     "nextRecord": "Next record",
   *     "noCoverField": "No cover field",
   *     "noData": "No data to display",
   *     "noFilters": "No filters applied",
   *     "noMatches": "No matched records",
   *     "noSorting": "No sorting applied",
   *     "noResults": "No results",
   *     "NOT_EMPTY": "not empty",
   *     "NOT_EQUAL": "not equal",
   *     "NOT_NULL": "not null",
   *     "now": "Now",
   *     "NULL": "null",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "ok": "OK",
   *     "or": "Or",
   *     "pickAnother": "Pick another field to sort by",
   *     "previousRecord": "Previous record",
   *     "removeImage": "Remove",
   *     "sort": "Sort",
   *     "sortedByMultiple": "Sorted by  fields",
   *     "sortedByOne": "Sorted by 1 field",
   *     "STARTS_WITH": "starts with",
   *     "STARTS_WITH_CASE_SENSITIVE": "starts with (case sensitive)",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "timeTabLabel": "TIME",
   *     "toggleVisibility": "Toggle field visibility",
   *     "where": "Where"
   *   }
   * }
   */
  messages?: any;
  /**
   * Callback function, used when record is inserted.
   * Default value: null
   */
  onRecordInserted?: any;
  /**
   * Callback function, used when record is removed.
   * Default value: null
   */
  onRecordRemoved?: any;
  /**
   * Describes the scrolling behavior of the element.
   * Default value: physical
   */
  scrolling?: Scrolling;
  /**
   * Describes which data field to be set as title.
   * Default value: ""
   */
  titleField?: string;
  /** 
   * This event is triggered when the filtering apply button in the header menu is clicked.
   * @param ev. The custom event.    */
  onfilter?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the sorting apply button in the header menu is clicked.
   * @param ev. The custom event.    */
  onsort?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts dragging the card.
   * @param ev. The custom event.    */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user is dragging the card.
   * @param ev. The custom event.    */
  ondragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user dragged the card.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /**
   * Adds filtering
   * @param {string[]} filters. Filter information
   * @param {string} operator?. Logical operator between the filters of different fields
   */
  addFilter(filters: string[], operator?: string): void;
  /**
   * Adds a new record
   * @param {number | string} recordId?. The id of the record to add
   * @param {any} data?. The data of the record to add
   * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
   */
  addRecord(recordId?: number | string, data?: any, position?: string): void;
  /**
   * Adds sorting
   * @param {[] | string} dataFields. The data field(s) to sort by
   * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
   */
  addSort(dataFields: [] | string, orderBy: [] | string): void;
  /**
   * Begins an edit operation
   * @param {number | string} recordId. The id of the record to edit
   */
  beginEdit(recordId: number | string): void;
  /**
   * Ends the current edit operation and discards changes
   */
  cancelEdit(): void;
  /**
   * Closes any open header panel (drop down)
   */
  closePanel(): void;
  /**
   * Ends the current edit operation and saves changes
   */
  endEdit(): void;
  /**
   * Makes sure a record is visible by scrolling to it
   * @param {number | string} recordId. The id of the record to scroll to
   */
  ensureVisible(recordId: number | string): void;
  /**
   * Opens the "Customize cards" header panel (drop down)
   */
  openCustomizePanel(): void;
  /**
   * Opens the "Filter" header panel (drop down)
   */
  openFilterPanel(): void;
  /**
   * Opens the "Sort" header panel (drop down)
   */
  openSortPanel(): void;
  /**
   * Removes filtering
   */
  removeFilter(): void;
  /**
   * Removes a record
   * @param {number | string} recordId. The id of the record to remove
   */
  removeRecord(recordId: number | string): void;
  /**
   * Removes sorting
   */
  removeSort(): void;
  /**
   * Shows a column
   * @param {string} dataField. The data field of the column
   */
  showColumn(dataField: string): void;
}

export interface CardViewColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: 
   */
  icon?: any;
  /**
   * Sets or gets the column's image visibility.
   * Default value: 
   */
  image?: boolean;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets or gets the column's format function.
   * Default value: 
   */
  formatFunction?: {(): void};
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-card-view"): CardView;
			querySelector(selectors: "jqx-card-view"): CardView | null;	
			querySelectorAll(selectors: "jqx-card-view"): NodeListOf<CardView>;
			getElementsByTagName(qualifiedName: "jqx-card-view"): HTMLCollectionOf<CardView>;
			getElementsByName(elementName: "jqx-card-view"): NodeListOf<CardView>;	
    }
}

/**Describes the orientation of the card cells. */
export const enum Orientation{
	Horizontal = "horizontal",
	Vertical = "vertical"
}

/**Describes the cover image fit property. */
export const enum CardViewCoverMode{
	Fit = "fit",
	Crop = "crop"
}

/**Describes the header positions of the elements. */
export const enum CardViewHeaderPosition{
	None = "none",
	Top = "top",
	Bottom = "bottom"
}

/**Describes the scrolling behavior of the element. */
export const enum Scrolling{
	Physical = "physical",
	Virtual = "virtual",
	Infinite = "infinite",
	Deferred = "deferred"
}

/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export interface Carousel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
   * Default value: false
   */
  autoPlay?: any;
  /**
   * An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
   * Default value: 200
   */
  delay?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
   * Default value: false
   */
  disableItemClick?: boolean;
  /**
   * Determines the display mode.
   * Default value: default
   */
  displayMode?: CarouselDisplayMode;
  /**
   * Hides the navigation buttons.
   * Default value: false
   */
  hideArrows?: boolean;
  /**
   * Hides the slide indication panel that shows which item is currently in view (active item).
   * Default value: false
   */
  hideIndicators?: boolean;
  /**
   * Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
   * Default value: null
   */
  indicatorTemplate?: any;
  /**
   * Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
   * Default value: 5000
   */
  interval?: number;
  /**
   * Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
   * Default value: false
   */
  keyboard?: boolean;
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
   * Determines whether the the items should start over when the first or last item is reached.
   * Default value: false
   */
  loop?: boolean;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
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
   * When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
   * Default value: false
   */
  slideShow?: boolean;
  /**
   * Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
   * Default value: false
   */
  swipe?: boolean;
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
   * Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
   * Default value: false
   */
  wheel?: boolean;
  /** 
   * Triggered when the active ( in view ) slide is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * Triggered when the process of slide changing starts.
   * @param ev. The custom event. Custom data event was created with: ev.detail(index, previousIndex)
   *  index - The index of the new active slide.
   *  previousIndex - The index of the previous slide that was active.
   */
  onchanging?: ((this: any, ev: Event) => any) | null;
  /**
   * Navigates to the next slide.
   */
  next(): void;
  /**
   * Pauses the slide show if <strong>slideShow</strong> is enabled.
   */
  pause(): void;
  /**
   * Starts the slide show if <strong>slideShow</strong> is enabled.
   */
  play(): void;
  /**
   * Navigates to the previous slide.
   */
  prev(): void;
  /**
   * Navigates to a specific slide with the given index.
   * @param {number} index. The index of the target slide.
   */
  slideTo(index: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-carousel"): Carousel;
			querySelector(selectors: "jqx-carousel"): Carousel | null;	
			querySelectorAll(selectors: "jqx-carousel"): NodeListOf<Carousel>;
			getElementsByTagName(qualifiedName: "jqx-carousel"): HTMLCollectionOf<Carousel>;
			getElementsByName(elementName: "jqx-carousel"): NodeListOf<Carousel>;	
    }
}

/**Determines the display mode. */
export const enum CarouselDisplayMode{
	Default = "default",
	Multiple = "multiple",
	Threed = "3d"
}

/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export interface Chart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * Sets the chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Sets the chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the chart's border line width.
   * Default value: 1
   */
  borderLineWidth?: number;
  /**
   * Sets the caption (title) of the chart.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Determines whether to clip plotted elements that overflow the axis boundaries.
   * Default value: true
   */
  clip?: boolean;
  /**
   * Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Gets or sets the color of the crosshairs lines.
   * Default value: null
   */
  crosshairsColor?: string | null;
  /**
   * Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: "2,2"
   */
  crosshairsDashStyle?: string;
  /**
   * Gets or sets the width of the crosshairs lines.
   * Default value: 1
   */
  crosshairsLineWidth?: number;
  /**
   * Sets the chart's data source.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets the description text of the chart.
   * Default value: "Description"
   */
  description?: string;
  /**
   * Enables or disables the chart.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
   * Default value: null
   */
  draw?: any;
  /**
   * Function for custom drawing before the caption and other chart elements.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines if the animation of the axes text is enabled.
   * Default value: false
   */
  enableAxisTextAnimation?: boolean;
  /**
   * Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
   * Default value: false
   */
  enableCrosshairs?: boolean;
  /**
   * Determines whether to display the chart using greyscale colors.
   * Default value: false
   */
  greyScale?: boolean;
  /**
   * Sets the legend's layout.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
   * Default value: [object Object]
   */
  localization?: ChartLocalization;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets the left, top, right and bottom padding of the Chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the legend bar position in the Chart.
   * Default value: [object Object]
   */
  legendPosition?: ChartLegendPosition;
  /**
   * Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
   * Default value: 
   */
  renderEngine?: ChartRenderEngine;
  /**
   * Sets or gets a value indicating whether the Chart's layout is mirrored.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
   * Default value: 
   */
  seriesGroups?: ChartSeriesGroup[];
  /**
   * Determines whether to display the chart's border line.
   * Default value: true
   */
  showBorderLine?: boolean;
  /**
   * Determines whether to show or hide the chart series legend.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Enables or disables the chart tooltips.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Determines whether to show a composite tooltip containing information for all series.
   * Default value: false
   */
  showToolTipsOnAllSeries?: boolean;
  /**
   * Determines the set of default background, line, text and band colors that will be used in the Chart.
   * Default value: light
   */
  theme?: ChartTheme;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Tooltip background color.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * User defined tooltip text formatting callback function.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines the tooltip hide delay in milliseconds.
   * Default value: 4000
   */
  toolTipHideDelay?: number;
  /**
   * Tooltip line color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
   * Default value: 300
   */
  toolTipShowDelay?: number;
  /**
   * An object with settings about the Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Sets the Chart's xAxis.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
  /** 
   * The event is raised when the user clicks on a chart annotation.
   * @param ev. The custom event.    */
  onannotationclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a chart annotation.
   * @param ev. The custom event.    */
  onannotationmouseenter?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a chart annotation.
   * @param ev. The custom event.    */
  onannotationmouseleave?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user clicks on series element.
   * @param ev. The custom event.    */
  onclick: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a series element.
   * @param ev. The custom event.    */
  onmouseout: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a series element.
   * @param ev. The custom event.    */
  onmouseover: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised after the chart's range selector position changes and after the chart ends rendering.
   * @param ev. The custom event.    */
  onrangeselectionchanged?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart's range selector position changes and before the chart starts rendering.
   * @param ev. The custom event.    */
  onrangeselectionchanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart begins rendering.
   * @param ev. The custom event.    */
  onrefreshbegin?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart finishes rendering.
   * @param ev. The custom event.    */
  onrefreshend?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
   * @param ev. The custom event.    */
  ontoggle: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Gets the rendered coordinates of a data point element.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @returns {any}
   */
  getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
  /**
   * Gets the number of rendered items in a specific serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @returns {number}
   */
  getItemsCount(groupIndex: number, serieIndex: number): number;
  /**
   * Gets the rendered coordinates and values of the valueAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any[]}
   */
  getValueAxisLabels(groupIndex: number): any[];
  /**
   * Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisRect(groupIndex: number): any;
  /**
   * Gets the valueAxis (vertical axis)'s value.
   * @param {number} offset. Vertical offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisValue(offset: number, groupIndex: number): any;
  /**
   * Gets the rendered coordinates and values of the xAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any[]}
   */
  getXAxisLabels(groupIndex: number): any[];
  /**
   * Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisRect(groupIndex: number): any;
  /**
   * Gets the xAxis (horizontal axis)'s value.
   * @param {number} offset. Horizontal offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisValue(offset: number, groupIndex: number): any;
  /**
   * Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides the current tooltip if visible.
   * @param {number} hideDelay?. Hide delay.
   */
  hideToolTip(hideDelay?: number): void;
  /**
   * Prints the chart.
   */
  print(): void;
  /**
   * Refreshes the content of the chart element after a property or data update.
   */
  refresh(): void;
  /**
   * Removes an existing color scheme. If the scheme does not exist, the method has no effect.
   * @param {string} schemeName. The name of the custom color scheme.
   */
  removeColorScheme(schemeName: string): void;
  /**
   * Exports the chart's content as JPEG image.
   * @param {string} fileName?. File name.
   */
  saveAsJPEG(fileName?: string): void;
  /**
   * Exports the chart's content as PNG image.
   * @param {string} fileName?. File name.
   */
  saveAsPNG(fileName?: string): void;
  /**
   * Exports the chart's content as PDF.
   * @param {string} fileName?. File name.
   * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
   */
  saveAsPDF(fileName?: string, pageOrientation?: string): void;
  /**
   * Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Shows a the tooltip for a particular data point.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @param {number} showDelay?. Show delay.
   * @param {number} hideDelay?. Hide delay.
   */
  showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
  /**
   * Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
   */
  update(): void;
}

/**Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
export interface ChartLocalization {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * An object containing datetime formatting patterns.
   * Default value: null
   */
  patterns?: any;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc.
   * Default value: ""
   */
  thousandsSeparator?: string;
}

/**Sets the left, top, right and bottom padding of the Chart. */
export interface Padding {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Bottom padding of the Chart.
   * Default value: 5
   */
  bottom?: number;
  /**
   * Left padding of the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Right padding of the Chart.
   * Default value: 5
   */
  right?: number;
  /**
   * Top padding of the Chart.
   * Default value: 5
   */
  top?: number;
}

/**Sets the legend bar position in the Chart. */
export interface ChartLegendPosition {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Height of legend in the Chart.
   * Default value: 5
   */
  height?: number;
  /**
   * Left legend position in the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Width of legend in the Chart.
   * Default value: 5
   */
  width?: number;
  /**
   * Top legend position in the Chart.
   * Default value: 5
   */
  top?: number;
}

export interface ChartSeriesGroup {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An array of chart annotation objects.
   * Default value: null
   */
  annotations?: ChartAnnotation[];
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Maximum width of columns in column series.
   * Default value: null
   */
  columnsMaxWidth?: number;
  /**
   * Minimum width of columns in column series.
   * Default value: 1
   */
  columnsMinWidth?: number;
  /**
   * Columns bottom width (as percentage of the total width).
   * Default value: 100
   */
  columnsBottomWidthPercent?: number;
  /**
   * Columns top width (as percentage of the total width).
   * Default value: 100
   */
  columnsTopWidthPercent?: number;
  /**
   * Determines the drawing function of the series group. When the property is set, you can draw after the series group has been plotted.
   * Default value: null
   */
  draw?: any;
  /**
   * Determines the data source of the serie
   * Default value: null
   */
  dataSource?: any;
  /**
   * Function for custom drawing before the series group.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines whether series are selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * The end angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Callback function used to format series labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of series labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
  /**
   * Horizontal position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetX?: number;
  /**
   * Vertical position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetY?: number;
  /**
   * Specifies the orientation of the series group.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * When polar is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  polar?: boolean;
  /**
   * The radius of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  radius?: number;
  /**
   * An array of chart series.
   * Default value: 
   */
  series?: ChartSeriesGroupSerie[];
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * When showLabels is set to true, the chart will render pie labels.
   * Default value: true
   */
  showLabels?: boolean;
  /**
   * When spider is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  spider?: boolean;
  /**
   * The start angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Sets the chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: null
   */
  type?: ChartType;
  /**
   * Object describing the format settings of series tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * Sets the tooltip format function. The function is used to format the tooltips of the Chart serie
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
  /**
   * Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group.
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Object describing the xAxis for this group.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
}

export interface ChartAnnotation {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Fill/background color of the annotation.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Height of the annotation.
   * Default value: null
   */
  height?: number;
  /**
   * Line color of the annotation.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Custom offset of the annotation relative to xValue & yValue.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Line path command in case the type is 'path', e.g. 'M 10,10 L 20,20 L 50,50'.
   * Default value: null
   */
  path?: string | null;
  /**
   * Radius of the annotation in case its type is 'circle'.
   * Default value: null
   */
  radius?: number;
  /**
   * Object describing the text of the annotation.
   * Default value: [object Object]
   */
  text?: ChartAnnotationText;
  /**
   * Shape type of the annotation.
   * Default value: null
   */
  type?: ChartAnnotationType;
  /**
   * Width of the annotation.
   * Default value: null
   */
  width?: number;
  /**
   * Value to determine the horizontal offset of the annotation.
   * Default value: null
   */
  xValue?: number;
  /**
   * Optional 2nd value to determine the horizontal offset of the annotation bottom-right point.
   * Default value: null
   */
  xValue2?: number;
  /**
   * Value to determine the vertical offset of the annotation.
   * Default value: null
   */
  yValue?: number;
  /**
   * Optional 2nd value to determine the vertical offset of the annotation's bottom-right point.
   * Default value: null
   */
  yValue2?: number;
}

/**Custom offset of the annotation relative to <strong>xValue</strong> & <strong>yValue</strong>. */
export interface Offset {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Horizontal offset.
   * Default value: null
   */
  x?: number | null;
  /**
   * Vertical offset.
   * Default value: null
   */
  y?: number | null;
}

/**Object describing the text of the annotation. */
export interface ChartAnnotationText {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: null
   */
  angle?: number;
  /**
   * CSS class of the annotation.
   * Default value: null
   */
  class?: string | null;
  /**
   * Inner text color (fill).
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Horizontal text alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Outer text color (stroke).
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Offset of the annotation text relative to the base annotation offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Position to rotate the text around.
   * Default value: centermiddle
   */
  rotationPoint?: ChartRotationPoint;
  /**
   * Text of the annotation.
   * Default value: null
   */
  value?: string | null;
  /**
   * Vertical text alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
}

export interface ChartBand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color?: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle?: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth?: string | number | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity?: number;
}

/**Object describing the format settings of series labels. */
export interface ChartFormatSettings {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat?: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces?: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator?: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets?: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix?: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix?: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator?: string | null;
}

export interface ChartSeriesGroupSerie {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Offset from the center point in a pie/donut series.
   * Default value: 0
   */
  centerOffset?: any;
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction?: any;
  /**
   * Color palette to use when rendering the serie.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
  /**
   * Name of the field in the data source.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldClose?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldHigh?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldLow?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldOpen?: string;
  /**
   * Data field used in in range column series as a start data field.
   * Default value: "null"
   */
  dataFieldFrom?: string;
  /**
   * Data field used in range column series as an end data field.
   * Default value: "null"
   */
  dataFieldTo?: string;
  /**
   * Data field used in bubble series.
   * Default value: "null"
   */
  radiusDataField?: string;
  /**
   * Name to display for this serie.
   * Default value: "null"
   */
  displayText?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextClose?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextHigh?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextLow?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextOpen?: string;
  /**
   * Determines how to display value gaps in line series.
   * Default value: skip
   */
  emptyPointsDisplay?: ChartSeriesGroupSerieEmptyPointsDisplay;
  /**
   * Determines whether the serie is selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle the series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * Determines the labels rotation radius when the Chart is 'pie' or 'donut'.
   * Default value: 0
   */
  labelRadius?: number;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * Maximum angle in a pie, donut, polar and spider series.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Fill color for the serie.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Alternating fill color for the serie. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAlt?: string | null;
  /**
   * Alternating fill color for the serie when selected. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAltSelected?: string | null;
  /**
   * Fill color for the serie when selected.
   * Default value: null
   */
  fillColorSelected?: string | null;
  /**
   * Fill color for the marker symbols in the serie.
   * Default value: null
   */
  fillColorSymbol?: string | null;
  /**
   * Fill color for the the marker symbols in serie when selected.
   * Default value: null
   */
  fillColorSymbolSelected?: string | null;
  /**
   * Determines whether to display the serie in grey scale.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Determines whether to hide slices of toggled points in pie and donut series.
   * Default value: false
   */
  hiddenPointsDisplay?: boolean;
  /**
   * Initial angle in pie and donut series.
   * Default value: 0
   */
  initialAngle?: number;
  /**
   * Inner radius of donut series in pixels or percents.
   * Default value: 0
   */
  innerRadius?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Fill color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendFillColor?: string | null;
  /**
   * Legend data formatting function for the values in the serie.
   * Default value: null
   */
  legendFormatFunction?: any;
  /**
   * Legend data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  legendFormatSettings?: ChartFormatSettings;
  /**
   * Line color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendLineColor?: string | null;
  /**
   * Line color for the serie.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Line color for the serie when selected.
   * Default value: null
   */
  lineColorSelected?: string | null;
  /**
   * Line color for the marker symbols in serie.
   * Default value: null
   */
  lineColorSymbol?: string | null;
  /**
   * Line color for the marker symbols in the serie when selected.
   * Default value: null
   */
  lineColorSymbolSelected?: string | null;
  /**
   * A string sequence of numbers represening line and space lengths, e.g. '2,2'.
   * Default value: null
   */
  lineDashStyle?: string | null;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
  /**
   * Determines the line tickness of the items in this serie.
   * Default value: null
   */
  lineWidth?: string | null | number;
  /**
   * Determines the line tickness of the items in this serie when selected.
   * Default value: null
   */
  lineWidthSelected?: string | null | number;
  /**
   * Min radius of bubble series in pixels or percents.
   * Default value: null
   */
  minRadius?: any;
  /**
   * Max radius of bubble series in pixels or percents.
   * Default value: null
   */
  maxRadius?: any;
  /**
   * Determines the opacity of the items in this serie.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Outer radius of pie and donut series in pixels or percents.
   * Default value: null
   */
  radius?: any;
  /**
   * Radius change on selection of pie and donut series in pixels or percents.
   * Default value: null
   */
  selectedRadiusChange?: any;
  /**
   * Minimum angle in a pie, donut, polar and spider series.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Determines the size of the symbol element.
   * Default value: null
   */
  symbolSize?: number;
  /**
   * Determines the size of the symbol element. This property is applicable to line and area series only.
   * Default value: null
   */
  symbolSizeSelected?: number;
  /**
   * Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only.
   * Default value: none
   */
  symbolType?: ChartSymbolType;
  /**
   * Determines the tooltip's background.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * Determines the tooltip's CSS class name.
   * Default value: null
   */
  toolTipClass?: string | null;
  /**
   * Tooltip data formatting function for the values in the serie.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Tooltip data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * Determines the tooltip's border lines color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
}

/**Object describing the labels properties of the axis. */
export interface ChartLabels {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle?: number;
  /**
   * boolean determining if auto rotation is enabled.
   * Default value: false
   */
  autoRotate?: boolean;
  /**
   * Labels background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Labels background opacity.
   * Default value: 1
   */
  backgroundOpacity?: number | null;
  /**
   * Labels border line color.
   * Default value: null
   */
  borderColor?: string | null;
  /**
   * Labels border line opacity.
   * Default value: 1
   */
  borderOpacity?: number | null;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class?: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Determines whether to use direct lines for the labels in pie/donut series.
   * Default value: true
   */
  linesAngles?: boolean;
  /**
   * Determines whether to use lines for the labels in pie/donut series.
   * Default value: true
   */
  linesEnabled?: boolean;
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Object describing the padding of the labels.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Radius of the labels in pie/donut series.
   * Default value: null
   */
  radius?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint?: ChartRotationPoint;
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group. */
export interface ChartValueAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue?: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Sets the description of the value axis.
   * Default value: ""
   */
  description?: string;
  /**
   * Specifies whether the values axis is displayed.
   * Default value: true
   */
  displayValueAxis?: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position?: AxisPosition;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Value Axis Type
   * Default value: ""
   */
  type?: string;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartLines {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color?: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth?: string | number | null;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size?: string | number | null;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the line properties of the axis. */
export interface ChartLine {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of axis line.
   * Default value: ""
   */
  color?: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth?: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartTitle {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class?: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Text of the title.
   * Default value: ""
   */
  text?: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the xAxis for this group. */
export interface ChartXAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the xAxis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Optional date format for parsing the data from the data source. Applicable when xAxis.type is set to 'date'.
   * Default value: null
   */
  dateFormat?: string | null;
  /**
   * Optional custom xAxis display text.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'bottom' and 'top' are available in the default case. If the xAxis is vertical, only 'left' and 'right' are available.
   * Default value: bottom
   */
  position?: AxisPosition;
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of jqx-chart.
   * Default value: [object Object]
   */
  rangeSelector?: ChartRangeSelector;
  /**
   * xAxis's text value.
   * Default value: ""
   */
  text?: string;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the xAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the xAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Custom function to format xAxis values in tooltips.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format xAxis values in tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type?: ChartXAxisType;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of jqx-chart. */
export interface ChartRangeSelector {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the range selector chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the range selector chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * Sets the range selector chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the range selector chart's border line width.
   * Default value: null
   */
  borderLineWidth?: number | null;
  /**
   * Sets the caption (title) of the range selector chart.
   * Default value: ""
   */
  caption?: string;
  /**
   * Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Points to a data field in the data source.
   * Default value: null
   */
  dataField?: string | null;
  /**
   * Sets the description text of the range selector chart.
   * Default value: ""
   */
  description?: string;
  /**
   * Determines whether to display the range selector chart using greyscale colors.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Object describing the grid lines properties of the range selector chart's xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Callback function used to format the values.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Chart Format Settings
   * Default value: null
   */
  formatSettings?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Sets the maximum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the range selector chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the range selector chart position.
   * Default value: null
   */
  position?: AxisPosition;
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo?: HTMLElement | null;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: null
   */
  rightToLeft?: boolean | null;
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * (Optional) The seriesGroups property is used to describe all series displayed on the range selector chart.Please refer to the main seriesGroups property entry for more information and a full subproperty list.
   * Default value: null
   */
  seriesGroups?: [] | null;
  /**
   * Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: area
   */
  serieType?: ChartType;
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: null
   */
  showBorderLine?: boolean | null;
  /**
   * Sets the size of the range selector chart.
   * Default value: null
   */
  size?: number | null;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * An object with settings about the range selector Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-chart"): Chart;
			querySelector(selectors: "jqx-chart"): Chart | null;	
			querySelectorAll(selectors: "jqx-chart"): NodeListOf<Chart>;
			getElementsByTagName(qualifiedName: "jqx-chart"): HTMLCollectionOf<Chart>;
			getElementsByName(elementName: "jqx-chart"): NodeListOf<Chart>;	
    }
}

/**Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
export const enum ChartColorScheme{
	Scheme01 = "scheme01",
	Scheme02 = "scheme02",
	Scheme03 = "scheme03",
	Scheme04 = "scheme04",
	Scheme05 = "scheme05",
	Scheme06 = "scheme06",
	Scheme07 = "scheme07",
	Scheme08 = "scheme08",
	Scheme09 = "scheme09",
	Scheme10 = "scheme10",
	Scheme11 = "scheme11",
	Scheme12 = "scheme12",
	Scheme13 = "scheme13",
	Scheme14 = "scheme14",
	Scheme15 = "scheme15",
	Scheme16 = "scheme16",
	Scheme17 = "scheme17",
	Scheme18 = "scheme18",
	Scheme19 = "scheme19",
	Scheme20 = "scheme20",
	Scheme21 = "scheme21",
	Scheme22 = "scheme22",
	Scheme23 = "scheme23",
	Scheme24 = "scheme24",
	Scheme25 = "scheme25",
	Scheme26 = "scheme26",
	Scheme27 = "scheme27",
	Scheme28 = "scheme28",
	Scheme29 = "scheme29",
	Scheme30 = "scheme30",
	Scheme31 = "scheme31",
	Scheme32 = "scheme32",
	Custom = "custom"
}

/**Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
export const enum ChartRenderEngine{
	Null = "",
	SVG = "SVG",
	HTML5 = "HTML5"
}

/**Horizontal alignment. */
export const enum HorizontalAlignment{
	Left = "left",
	Center = "center",
	Right = "right"
}

/**Position to rotate the text around. */
export const enum ChartRotationPoint{
	Auto = "auto",
	Left = "left",
	Center = "center",
	Right = "right",
	Topleft = "topleft",
	Topcenter = "topcenter",
	Topright = "topright",
	Bottomleft = "bottomleft",
	Bottomcenter = "bottomcenter",
	Bottomright = "bottomright",
	Centermiddle = "centermiddle"
}

/**Vertical alignment. */
export const enum VerticalAlignment{
	Top = "top",
	Center = "center",
	Bottom = "bottom"
}

/**Shape type of the annotation. */
export const enum ChartAnnotationType{
	Text = "text",
	Rect = "rect",
	Circle = "circle",
	Line = "line",
	Path = "path",
	Null = "null"
}

/**Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart. */
export const enum ChartUnselectMode{
	Click = "click",
	Default = "default"
}

/**Determines how to display value gaps in line series. */
export const enum ChartSeriesGroupSerieEmptyPointsDisplay{
	Connect = "connect",
	Skip = "skip",
	Zero = "zero"
}

/**Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only. */
export const enum ChartSymbolType{
	None = "none",
	Circle = "circle",
	Square = "square",
	Diamond = "diamond",
	Triangle_up = "triangle_up",
	Triangle_down = "triangle_down",
	Triangle_left = "triangle_left",
	Triangle_right = "triangle_right"
}

/**Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series
'stackedcolumn' - stacked column series
'stackedcolumn100' - percentage stacked columns
'rangecolumn' - floating column between two values
'waterfall' - waterfall series
'stackedwaterfall' - stacked waterfall series
'line' - simple straight lines connecting the value points
'stackedline' - stacked lines
'stackedline100' - percentage stacked lines
'spline' - smooth lines connecting the value points
'stackedspline' - smooth stacked lines
'stackedspline100' - percentage stacked smooth lines
'stepline' - step line
'stackedstepline' - stacked step line
'stackedstepline100' - percentage stacked step line
'area' - area connecting the value points with straight lines
'stackedarea' - stacked area with straight lines between the points
'stackedarea100' - percentage stacked area with straight lines between the points
'rangearea' - floating area between pairs of value points
'splinearea' - smooth area connecting the value points
'stackedsplinearea' - stacked smooth area connecting the value points
'stackedsplinearea100' - percentage stacked smooth area
'splinerangearea' - smooth floating area between pairs of value points
'steprangearea' - step area between pairs of value points
'stackedsplineara' - smooth stacked area
'steparea' - step area connecting the value points
'stackedsteparea' - step stacked area
'stackedsteparea100' - percentage stacked step area
'pie' - circular chart divided into sectors, illustrating proportion
'donut' - chart divided into circular sectors with different inner and outer radius
'scatter' - data is displayed as a collection of points
'stackedscatter' - data is displayed as a collection of points and the values are stacked
'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked
'bubble' - data is displayed as a collection of bubbles
'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked
'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked
'candlestick' - display candlestick series using open, high, low, close data points
'ohlc' - display OHLC series using open, high, low, close data points
 */
export const enum ChartType{
	Column = "column",
	Stackedcolumn = "stackedcolumn",
	Stackedcolumn100 = "stackedcolumn100",
	Rangecolumn = "rangecolumn",
	Waterfall = "waterfall",
	Stackedwaterfall = "stackedwaterfall",
	Line = "line",
	Stackedline = "stackedline",
	Stackedline100 = "stackedline100",
	Spline = "spline",
	Stackedspline = "stackedspline",
	Stackedspline100 = "stackedspline100",
	Stepline = "stepline",
	Stackedstepline = "stackedstepline",
	Stackedstepline100 = "stackedstepline100",
	Area = "area",
	Stackedarea = "stackedarea",
	Stackedarea100 = "stackedarea100",
	Rangearea = "rangearea",
	Splinearea = "splinearea",
	Stackedsplinearea = "stackedsplinearea",
	Stackedsplinearea100 = "stackedsplinearea100",
	Splinerangearea = "splinerangearea",
	Steprangearea = "steprangearea",
	Stackedsplineara = "stackedsplineara",
	Steparea = "steparea",
	Stackedsteparea = "stackedsteparea",
	Stackedsteparea100 = "stackedsteparea100",
	Pie = "pie",
	Donut = "donut",
	Scatter = "scatter",
	Stackedscatter = "stackedscatter",
	Stackedscatter100 = "stackedscatter100",
	Bubble = "bubble",
	Stackedbubble = "stackedbubble",
	Stackedbubble100 = "stackedbubble100",
	Candlestick = "candlestick",
	Ohlc = "ohlc"
}

/**Sets the range selector chart position. */
export const enum AxisPosition{
	Bottom = "bottom",
	Top = "top",
	Left = "left",
	Right = "right"
}

/**The base unit when used with 'date' axis. */
export const enum ChartBaseUnit{
	Year = "year",
	Month = "month",
	Day = "day",
	Hour = "hour",
	Minute = "minute",
	Second = "second",
	Millisecond = "millisecond"
}

/**The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.
'date' - when displaying dates.
'basic' - displays all data points sequentially.
'linear' - linear arrangement by the value of the xAxis data field.
 */
export const enum ChartXAxisType{
	Auto = "auto",
	Date = "date",
	Basic = "basic",
	Linear = "linear"
}

/**Determines the set of default background, line, text and band colors that will be used in the Chart. */
export const enum ChartTheme{
	Light = "light",
	Dark = "dark"
}

/**
 Checkbox is a component used for allowing a user to make a multiple choice. Broadly used in the forms and surveys.
*/
export interface CheckBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the checked state. 
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines which part of the element can be used to toggle it.
   * Default value: both
   */
  checkMode?: CheckMode;
  /**
   * Sets the click mode of the checkbox.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the checkbox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the elements's innerHTML.
   * Default value: """"
   */
  innerHTML: string;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the value of the element.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value, oldValue, changeType)
   *  value - A boolean value indicating the new state of the button ( checked or not ).
   *  oldValue - A boolean value indicating the previous state of the button ( checked or not ).
   *  changeType - A string flag indicating whether the change event was triggered via API or an event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-check-box"): CheckBox;
			querySelector(selectors: "jqx-check-box"): CheckBox | null;	
			querySelectorAll(selectors: "jqx-check-box"): NodeListOf<CheckBox>;
			getElementsByTagName(qualifiedName: "jqx-check-box"): HTMLCollectionOf<CheckBox>;
			getElementsByName(elementName: "jqx-check-box"): NodeListOf<CheckBox>;	
    }
}

/**Determines which part of the element can be used to toggle it. */
export const enum CheckMode{
	Both = "both",
	Input = "input",
	Label = "label"
}

/**
 Chip is a simple rounded box that displays a single value and optionally an icon.
*/
export interface Chip extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets a custom avatar that is positioned on the left side of the chip. The avatar can be an image(if the value is a url to an image), plain text or HTML.
   * Default value: null
   */
  avatar?: string | null;
  /**
   * Determines whether a close button is displayed on the right side of the element.
   * Default value: false
   */
  closeButton?: boolean;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets a custom template for the chip. The template can be a string that represents the id of an HTMLTemplateElement inside the DOM or it's direct reference.
   * Default value: null
   */
  itemTemplate?: any;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
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
   * Sets the text content of the chip. The text inside the chip represents it's value. Value must be of type string. By default it's an empty string.
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the chip is closed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A string representing the current value of the element.
   */
  onclose: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the chip and removes it from the DOM.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-chip"): Chip;
			querySelector(selectors: "jqx-chip"): Chip | null;	
			querySelectorAll(selectors: "jqx-chip"): NodeListOf<Chip>;
			getElementsByTagName(qualifiedName: "jqx-chip"): HTMLCollectionOf<Chip>;
			getElementsByName(elementName: "jqx-chip"): NodeListOf<Chip>;	
    }
}

/**
 Progress Bar displayed as a circle.
*/
export interface CircularProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets the value of the Circular Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Circular Progress Bar.
   * Default value: false
   */
  inverted?: boolean;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
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
   *     "htmlTemplateNotSuported": ":  Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
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
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-circular-progress-bar"): CircularProgressBar;
			querySelector(selectors: "jqx-circular-progress-bar"): CircularProgressBar | null;	
			querySelectorAll(selectors: "jqx-circular-progress-bar"): NodeListOf<CircularProgressBar>;
			getElementsByTagName(qualifiedName: "jqx-circular-progress-bar"): HTMLCollectionOf<CircularProgressBar>;
			getElementsByName(elementName: "jqx-circular-progress-bar"): NodeListOf<CircularProgressBar>;	
    }
}

/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
export interface ColorInput extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source ( that represent valid colors ) that will be loaded to the Input. The dataSource can be an array of strings or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Determines the position of the drop down button.
   * Default value: none
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: ColorQueryMode;
  /**
   * Determines whether the user can enter text inside the input or not. Determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines what will be displayed inside the color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /** 
   * This event is triggered when the selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected color.
   *  oldLabel - The label of the color that was previously selected before the event was triggered.
   *  oldValue - The value of the color that was previously selected before the event was triggered.
   *  value - The value of the new selected color.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-color-input"): ColorInput;
			querySelector(selectors: "jqx-color-input"): ColorInput | null;	
			querySelectorAll(selectors: "jqx-color-input"): NodeListOf<ColorInput>;
			getElementsByTagName(qualifiedName: "jqx-color-input"): HTMLCollectionOf<ColorInput>;
			getElementsByName(elementName: "jqx-color-input"): NodeListOf<ColorInput>;	
    }
}

/**Determines the colors that will be displayed and their layout. */
export const enum ColorDisplayMode{
	Default = "default",
	Grid = "grid"
}

/**Determines the position of the drop down button. */
export const enum DropDownButtonPosition{
	Left = "left",
	Right = "right",
	Top = "top",
	Bottom = "bottom"
}

/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export const enum ColorQueryMode{
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

/**Determines what will be displayed inside the color picker's action section. */
export const enum ColorValueDisplayMode{
	Default = "default",
	ColorBox = "colorBox",
	ColorCode = "colorCode",
	None = "none"
}

/**Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
export const enum ColorValueFormat{
	Default = "default",
	Rgb = "rgb",
	Rgba = "rgba",
	Hex = "hex"
}

/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export interface ColorPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies how the value is applied.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridStandardColors?: [] | null;
  /**
   * Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
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
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "redPrefix": "R:",
   *     "greenPrefix": "G:",
   *     "bluePrefix": "B:",
   *     "hexPrefix": "#:",
   *     "alphaPrefix": "Alpha:",
   *     "ok": "OK",
   *     "cancel": "CANCEL",
   *     "customColor": "CUSTOM COLOR ..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: any;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
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
   * Determines how the tooltip displays the value of the color that is being hovered.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode;
  /**
   * Represents the value of the selected color.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'.
   * Default value: "null"
   */
  valueMember?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the color is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
   * @param ev. The custom event.    */
  oncancelbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  oncustomcolorselection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
   * @param ev. The custom event.    */
  onokbuttonclick?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-color-panel"): ColorPanel;
			querySelector(selectors: "jqx-color-panel"): ColorPanel | null;	
			querySelectorAll(selectors: "jqx-color-panel"): NodeListOf<ColorPanel>;
			getElementsByTagName(qualifiedName: "jqx-color-panel"): HTMLCollectionOf<ColorPanel>;
			getElementsByName(elementName: "jqx-color-panel"): NodeListOf<ColorPanel>;	
    }
}

/**Specifies how the value is applied. */
export const enum ColorApplyValueMode{
	Instantly = "instantly",
	UseButtons = "useButtons"
}

/**Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
export const enum ColorPalette{
	Default = "default",
	Gray = "gray",
	Red = "red",
	Green = "green",
	Blue = "blue",
	Custom = "custom"
}

/**Determines how the tooltip displays the value of the color that is being hovered. */
export const enum ColorTooltipDisplayMode{
	None = "none",
	Rgb = "rgb",
	Rgba = "rgba",
	Hex = "hex"
}

/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
export interface ColorPicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
   * Default value: body
   */
  dropDownAppendTo?: any;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables.
   * Default value: "auto"
   */
  dropDownHeight?: string;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: "auto"
   */
  dropDownWidth?: string;
  /**
   * Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridStandardColors?: string[] | null;
  /**
   * Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Sets additional helper text below the element that is only visible when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets a label above the element.
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
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "redPrefix": "R:",
   *     "greenPrefix": "G:",
   *     "bluePrefix": "B:",
   *     "hexPrefix": "#:",
   *     "alphaPrefix": "Alpha:",
   *     "ok": "OK",
   *     "cancel": "CANCEL",
   *     "customColor": "CUSTOM COLOR ..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: {name: string, value: string}[] | string[] | null;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * The placeholder is shown when the value is not set yet or is set to null.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
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
   * Determines how the tooltip displays the value of the color that is being hovered.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Represents the value of the selected color as the value of the element.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines which elements will be displayed in color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /** 
   * This event is triggered when user clicks on the action button. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
   * @param ev. The custom event.    */
  onactionbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
   * @param ev. The custom event.    */
  oncancelbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the color value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
   * @param ev. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  oncustomcolorselection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
   * @param ev. The custom event.    */
  ondropdownbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked.
   * @param ev. The custom event.    */
  onokbuttonclick?: ((this: any, ev: Event) => any) | null;
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
   * This event is triggered when the resizing of the drop down is finished.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the drop down of the color picker.
   */
  open(): void;
  /**
   * Closes the drop down of the color picker.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-color-picker"): ColorPicker;
			querySelector(selectors: "jqx-color-picker"): ColorPicker | null;	
			querySelectorAll(selectors: "jqx-color-picker"): NodeListOf<ColorPicker>;
			getElementsByTagName(qualifiedName: "jqx-color-picker"): HTMLCollectionOf<ColorPicker>;
			getElementsByName(elementName: "jqx-color-picker"): NodeListOf<ColorPicker>;	
    }
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

/**Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
export const enum ResizeMode{
	None = "none",
	Horizontal = "horizontal",
	Vertical = "vertical",
	Both = "both"
}

/**
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
export interface ComboBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: none
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Allows the user to define a custom key name ( or multiple key names) to open that popup with.
   * Default value: 
   */
  autoOpenShortcutKey?: string[];
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the combo box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: null
   */
  escKeyMode?: ComboBoxEscKeyMode;
  /**
   * Determines whether filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode of the Combo box.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: ""
   */
  groupMember?: string;
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
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
  /**
   * Determines what will be displayed in the input.
   * Default value: plain
   */
  selectionDisplayMode?: SelectionDisplayMode;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a custom content for the tokens when selectionDisplayMode is set to 'tokens'. Tokens are used only for multiple selection.
   * Default value: null
   */
  tokenTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value.
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used for the Combo box. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when the selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the drop down list.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Closes the dropDown list.
   */
  close(): void;
  /**
   * Ensures the desired item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the dropDown list.
   * @param {string} value. The value of an item from the drop down list.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified position.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} item. Describes the properties of the item that will be inserted.
   */
  insert(position: number, item: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Opens the dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  select(item: string | HTMLElement): void;
  /**
   * Unselects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-combo-box"): ComboBox;
			querySelector(selectors: "jqx-combo-box"): ComboBox | null;	
			querySelectorAll(selectors: "jqx-combo-box"): NodeListOf<ComboBox>;
			getElementsByTagName(qualifiedName: "jqx-combo-box"): HTMLCollectionOf<ComboBox>;
			getElementsByName(elementName: "jqx-combo-box"): NodeListOf<ComboBox>;	
    }
}

/**Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input. */
export const enum AutoComplete{
	None = "none",
	Auto = "auto",
	Inline = "inline",
	Manual = "manual"
}

/**Determines the behavior of the element when Escape key is pressed. */
export const enum ComboBoxEscKeyMode{
	None = "none",
	PreviousValue = "previousValue",
	ClearValue = "clearValue"
}

/**Determines the filtering mode of the Combo box. */
export const enum FilterMode{
	Contains = "contains",
	ContainsIgnoreCase = "containsIgnoreCase",
	Custom = "custom",
	DoesNotContain = "doesNotContain",
	DoesNotContainIgnoreCase = "doesNotContainIgnoreCase",
	Equals = "equals",
	EqualsIgnoreCase = "equalsIgnoreCase",
	StartsWith = "startsWith",
	StartsWithIgnoreCase = "startsWithIgnoreCase",
	EndsWith = "endsWith",
	EndsWithIgnoreCase = "endsWithIgnoreCase"
}

/**Determines the visibility of the horizontal Scroll bar inside the drop down. */
export const enum HorizontalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
}

/**Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
export const enum SearchMode{
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

/**Determines the item width measuring algorithm. */
export const enum ListItemMeasureMode{
	Auto = "auto",
	Precise = "precise"
}

/**Determines what will be displayed in the input. */
export const enum SelectionDisplayMode{
	Plain = "plain",
	Placeholder = "placeholder",
	Tokens = "tokens"
}

/**Determines how many items can be selected. */
export const enum ListSelectionMode{
	None = "none",
	OneOrManyExtended = "oneOrManyExtended",
	ZeroOrMany = "zeroOrMany",
	OneOrMany = "oneOrMany",
	ZeroOrOne = "zeroOrOne",
	One = "one",
	CheckBox = "checkBox",
	RadioButton = "radioButton"
}

/**Determines the visibility of the vertical scroll bar. */
export const enum VerticalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
}

/**
 Defines a dialog for customization of filtering, sorting.
*/
export interface CustomizationDialog extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: ""
   */
  displayMember?: string;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets whether is enabled/disabled filtering tab.
   * Default value: false
   */
  filtering?: boolean;
  /**
   * Sets whether is enabled/disabled grouping tab.
   * Default value: false
   */
  grouping?: boolean;
  /**
   * Set's the buttons that will be visible in the header section.
   * Default value: apply,close
   */
  headerButtons?: string[];
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
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument.",
   *     "sorting": "SORTING",
   *     "grouping": "GROUPING",
   *     "filtering": "FILTERING",
   *     "columnChooser": "COLUMN CHOOSER",
   *     "applyButton": "Apply",
   *     "closeButton": "Close",
   *     "columnsToSort": "Columns to Sort",
   *     "columnsToGroup": "Columns to Group",
   *     "placeholderSorting": "No sorting applied",
   *     "placeholderGrouping": "No grouping applied",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets whether the columns reordering is active.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets the tab, wich is selected on initialization.
   * Default value: 0
   */
  selectedTab?: number;
  /**
   * Sets whether is enabled/disabled sorting tab.
   * Default value: false
   */
  sorting?: boolean;
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
   * Sets or gets element's value. It's represente by object, contained
   * Default value: null
   */
  value?: any;
  /**
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: ""
   */
  valueMember?: string;
  /**
   * Sets or gets whether the columns of the element could be hidden.
   * Default value: false
   */
  visibility?: boolean;
  /** 
   * This event is triggered when the dialog is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the data in the value property is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dialog is closed via clicking the apply button.
   * @param ev. The custom event.    */
  onapply?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the dialog
   */
  open(): void;
  /**
   * Closes the dialog.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-customization-dialog"): CustomizationDialog;
			querySelector(selectors: "jqx-customization-dialog"): CustomizationDialog | null;	
			querySelectorAll(selectors: "jqx-customization-dialog"): NodeListOf<CustomizationDialog>;
			getElementsByTagName(qualifiedName: "jqx-customization-dialog"): HTMLCollectionOf<CustomizationDialog>;
			getElementsByName(elementName: "jqx-customization-dialog"): NodeListOf<CustomizationDialog>;	
    }
}

export interface DataAdapter {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the binding is automatic after creating a data adapter instance.
   * Default value: true
   */
  autoBind?: boolean;
  /**
   * Sets or gets whether the binding is asynchronous.
   * Default value: false
   */
  async?: boolean;
  /**
   * Gets the bound data source after the binding is completed.
   * Default value: 
   */
  boundSource?: any[];
  /**
   * Gets the bound hierarchical data source after the binding is completed.
   * Default value: 
   */
  boundHierarchy?: any[];
  /**
   * Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created.
   * Default value: ""
   */
  childrenDataField?: string;
  /**
   * Sets or gets the data fields to group by.
   * Default value: []
   */
  groupBy?: string[];
  /**
   * Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string']
   * Default value: string[]
   */
  dataFields?: string[];
  /**
   * Sets or gets the data source of the adapter.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Sets or gets whether the data source type.
   * Default value: array
   */
  dataSourceType?: DataAdapterDataSourceType;
  /**
   * Sets or gets the dataAdapter's id
   * Default value: ""
   */
  id?: string;
  /**
   * Sets or gets the key data field to be used for building the hierarchy. It is used in combination with the parentDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  keyDataField?: string;
  /**
   * Gets the data source length.
   * Default value: 0
   */
  length?: number;
  /**
   * Sets or gets whether the request type.
   * Default value: GET
   */
  method?: DataAdapterMethod;
  /**
   * Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field'
   * Default value: ""
   */
  parentDataField?: string;
  /**
   * Sets or gets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too
   * Default value: null
   */
  virtualDataSourceOnExpand?: DataAdapterVirtualDataSourceOnExpand[];
  /**
   * Sets or gets the total length of items. If it is unknown, do not set this parameter.
   * Default value: 0
   */
  virtualDataSourceLength?: number;
  /**
   * Sets or gets a boolean param which determines whether to cache or not the new loaded data.
   * Default value: true
   */
  virtualDataSourceCache?: boolean;
  /**
   * Sets or gets the virtual data source function
   * Default value: null
   */
  virtualDataSource?: DataAdapterVirtualDataSource[];
  /**
   * Adds a new item.
   * @param {any} item. A new data source item.
   * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
   */
  add(item: any, parentId?: string | number): void;
  /**
   * Clears the adapter.
   */
  clear(): void;
  /**
   * Clears the sorting.
   */
  clearSort(): void;
  /**
   * Clears the filters.
   */
  clearFilter(): void;
  /**
   * Clears the grouping.
   */
  clearGroup(): void;
  /**
   * Data binds the adapter to the data source. If the data source is remote, perform a new AJAX call.
   */
  dataBind(): void;
  /**
   * Notifies for data changes like adding, removing, updating items.
   * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
   */
  notify(callback: any): void;
  /**
   * The find method returns the value of the first element in the provided array that satisfies the provided testing function.
   * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
   * @returns {any}
   */
  find(callback: any): any;
  /**
   * Filters the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {any} filterGroups. The filter group objects.
   */
  filter(dataFields: string[], filterGroups: any): void;
  /**
   * Filters the data source.
   * @param {string} dataField. The data field.
   * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
   */
  filterBy(dataField: string, filterExpessions: string[]): void;
  /**
   * Gets the index of an item.
   * @param {number} index. The index of the item.
   * @returns {any}
   */
  indexOf(index: number): any;
  /**
   * Inserts an item.
   * @param {number} index. The index where to insert the item.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  insert(index: number, item: any): void;
  /**
   * Moves an item.
   * @param {number} from. The item's old index.
   * @param {number} to. The item's new index.
   */
  move(from: number, to: number): void;
  /**
   * Removes the last item from the data source.
   */
  removeLast(): void;
  /**
   * Removes an item at a specified index.
   * @param {number} position. The index of the item to be removed.
   */
  removeAt(position: number): void;
  /**
   * Sorts the data source.
   * @param {string[]} dataFields. The data fields.
   * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
   */
  sort(dataFields: string[], sortOrders: string[]): void;
  /**
   * Sorts the data source.
   * @param {string} dataField. The data field.
   * @param {string} dataType. The type of the data field - string, number, date, boolean.
   * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
   */
  sortBy(dataField: string, dataType: string, sortOrder: string): void;
  /**
   * Aggregates data from the data source.
   * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
   */
  summarize(summaryItems: any[]): void;
  /**
   * Returns an array of all items.
   * @returns {any[]}
   */
  toArray(): any[];
  /**
   * Updates an item from the element.
   * @param {number} index. The index of the item to be updated.
   * @param {any} item. An object containing the values for the properties of the item that will be updated.
   */
  update(index: number, item: any): void;
}

export interface DataAdapterVirtualDataSourceOnExpand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceOnExpandResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceOnExpandDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceOnExpandResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceOnExpandDetails {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: DataAdapterVirtualDataSourceOnExpandDetailsSorting;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceOnExpandDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceOnExpandDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}

export interface DataAdapterVirtualDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Result callback function which is executed when the data loading is completed.
   * Default value: null
   */
  resultCallbackFunction?: DataAdapterVirtualDataSourceResultCallbackFunction;
  /**
   * Details of the object, which made the request
   * Default value: null
   */
  details?: DataAdapterVirtualDataSourceDetails;
}

/**Result callback function which is executed when the data loading is completed. */
export interface DataAdapterVirtualDataSourceResultCallbackFunction {
(
  /**
   * result callback function settings
   * Default value: null
   */
  settings?: any

): void;
}

/**Details of the object, which made the request */
export interface DataAdapterVirtualDataSourceDetails {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Data start index.
   * Default value: 0
   */
  first?: number;
  /**
   * Data end index.
   * Default value: 0
   */
  last?: number;
  /**
   * Sorting information.
   * Default value: null
   */
  sorting?: DataAdapterVirtualDataSourceDetailsSorting;
  /**
   * Filtering information.
   * Default value: null
   */
  filtering?: any;
  /**
   * Grouping information
   * Default value: []
   */
  grouping?: string[];
  /**
   * Request action type
   * Default value: undefined
   */
  action?: DataAdapterVirtualDataSourceDetailsAction;
}

/**Sorting information. */
export interface DataAdapterVirtualDataSourceDetailsSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sort order.
   * Default value: asc
   */
  sortOrder?: DataAdapterVirtualDataSourceDetailsSortingSortOrder;
  /**
   * Sort index.
   * Default value: -1
   */
  sortIndex?: number;
}
/**Sets or gets whether the data source type. */
export const enum DataAdapterDataSourceType{
	Array = "array",
	Json = "json",
	Xml = "xml",
	Csv = "csv",
	Tsv = "tsv"
}

/**Sets or gets whether the request type. */
export const enum DataAdapterMethod{
	GET = "GET",
	POST = "POST"
}

/**Sort order. */
export const enum DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder{
	Asc = "asc",
	Desc = "desc"
}

/**Request action type */
export const enum DataAdapterVirtualDataSourceOnExpandDetailsAction{
	Sort = "sort",
	Filter = "filter",
	DataBind = "dataBind",
	Scroll = "scroll",
	Group = "group",
	Expand = "expand",
	PageIndexChange = "pageIndexChange",
	PageSizeChange = "pageSizeChange"
}

/**Sort order. */
export const enum DataAdapterVirtualDataSourceDetailsSortingSortOrder{
	Asc = "asc",
	Desc = "desc"
}

/**Request action type */
export const enum DataAdapterVirtualDataSourceDetailsAction{
	Sort = "sort",
	Filter = "filter",
	DataBind = "dataBind",
	Scroll = "scroll",
	Group = "group",
	Expand = "expand",
	PageIndexChange = "pageIndexChange",
	PageSizeChange = "pageSizeChange"
}

/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export interface DateTimePicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
   * Default value: null
   */
  animationSettings?: any;
  /**
   * Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
   * Default value: 500
   */
  autoCloseDelay?: boolean;
  /**
   * Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
   * Default value: false
   */
  calendarButton?: boolean;
  /**
   * Determines the position of the calendar button.
   * Default value: right
   */
  calendarButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the header mode of the calendar pop-up.
   * Default value: default
   */
  calendarMode?: CalendarMode;
  /**
   * Sets or gets the format of calendar pop-up's day names.
   * Default value: firstTwoLetters
   */
  dayNameFormat?: DayFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
   * Default value: false
   */
  disableAutoNavigation?: boolean;
  /**
   * Determines the time zone to display the value in.
   * Default value: unspecified
   */
  displayKind?: DateTimePickerDisplayKind;
  /**
   * Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
   * Default value: table
   */
  displayModeView?: CalendarDisplayModeView;
  /**
   * Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
   * Default value: default
   */
  dropDownDisplayMode?: DateTimePickerDropDownDisplayMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the pop-up position when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines how the the value can be edited inside the input.
   * Default value: default
   */
  editMode?: DateTimePickerEditMode;
  /**
   * Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
   * Default value: 0
   */
  firstDayOfWeek?: number;
  /**
   * Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Determines the pattern that is used to display the value in.
   * Default value: "dd-MMM-yy HH:mm:ss.fff"
   */
  formatString?: string;
  /**
   * Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Hides the names of the weekdays in the calendar pop-up.
   * Default value: false
   */
  hideDayNames?: boolean;
  /**
   * Determines if dates from other months are visible or not in the calendar pop-up.
   * Default value: false
   */
  hideOtherMonthDays?: boolean;
  /**
   * Hides the arrow of the tooltip in the calendar pop-up.
   * Default value: false
   */
  hideTooltipArrow?: boolean;
  /**
   * Sets additional helper text below the element that appears only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets dates, displayed as important in the calendar pop-up.
   * Default value: 
   */
  importantDates?: string[];
  /**
   * Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  importantDatesTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
   * Default value: new JQX.Utilities.TimeSpan(0, 0, 1)
   */
  interval?: any;
  /**
   * Sets a label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets the maximum allowed value.
   * Default value: new JQX.Utilities.DateTime(3001, 1, 1)
   */
  max?: any;
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
   *     "now": "Now",
   *     "dateTabLabel": "DATE",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum allowed value.
   * Default value: new JQX.Utilities.DateTime(1600, 1, 1)
   */
  min?: any;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the calendar pop-up is opened.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the placeholder text to be shown in the input when value is null.
   * Default value: "Enter date"
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
   * Default value: 
   */
  restrictedDates?: Date[];
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of the spin buttons in miliseconds.
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds.
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons.
   * Default value: right
   */
  spinButtonsPosition?: DateTimePickerSpinButtonsPosition;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Enables/Disabled the tooltip for the important dates in the calendar pop-up.
   * Default value: false
   */
  tooltip?: boolean;
  /**
   * Sets the delay of the calendar pop-up's tooltip before it appears.
   * Default value: 100
   */
  tooltipDelay?: number;
  /**
   * Sets the position of the tooltip in the calendar pop-up.
   * Default value: top
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
   * Default value: null
   */
  tooltipTemplate?: string | HTMLTemplateElement;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the validation mechanism for the value by min/max.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
   * Default value: new JQX.Utilities.DateTime()
   */
  value?: any;
  /**
   * Enables/Disabled week numbering in the calendar pop-up. 
   * Default value: false
   */
  weekNumbers?: boolean;
  /**
   * Determines the number of visible weeks in the calendar pop-up.
   * Default value: 6
   */
  weeks?: number;
  /**
   * Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
   * Default value: 1926
   */
  yearCutoff?: number;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a DateTime object.
   *  value - The new value presented as a DateTime object.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the calendar pop-up.
   */
  close(): void;
  /**
   * Focuses the input.
   */
  focus(): void;
  /**
   * Opens the calendar pop-up.
   */
  open(): void;
  /**
   * Selects the text inside the input.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-date-time-picker"): DateTimePicker;
			querySelector(selectors: "jqx-date-time-picker"): DateTimePicker | null;	
			querySelectorAll(selectors: "jqx-date-time-picker"): NodeListOf<DateTimePicker>;
			getElementsByTagName(qualifiedName: "jqx-date-time-picker"): HTMLCollectionOf<DateTimePicker>;
			getElementsByName(elementName: "jqx-date-time-picker"): NodeListOf<DateTimePicker>;	
    }
}

/**Determines the time zone to display the value in. */
export const enum DateTimePickerDisplayKind{
	UTC = "UTC",
	Local = "local",
	Unspecified = "unspecified"
}

/**Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
export const enum DateTimePickerDropDownDisplayMode{
	Auto = "auto",
	Default = "default",
	Classic = "classic",
	Calendar = "calendar",
	TimePicker = "timePicker"
}

/**Determines how the the value can be edited inside the input. */
export const enum DateTimePickerEditMode{
	Default = "default",
	Full = "full",
	Partial = "partial"
}

/**Sets or gets the position of the spin buttons. */
export const enum DateTimePickerSpinButtonsPosition{
	Left = "left",
	Right = "right"
}

/**Determines the validation mechanism for the value by min/max. */
export const enum Validation{
	Strict = "strict",
	Interaction = "interaction"
}

/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export interface DockingLayout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * A getter that returns an array of all DockingLayout items that are auto hidden inside the element.
   * Default value: 
   */
  autoHideItems?: any;
  /**
   * Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods.
   * Default value: true
   */
  draggable: boolean;
  /**
   * If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected.
   * Default value: true
   */
  floatable?: boolean;
  /**
   * Hides all splitter bars inside the element.
   * Default value: false
   */
  hideSplitterBars?: boolean;
  /**
   * A getter that returns an array of all DockingLayout items that are docked inside the element.
   * Default value: 
   */
  items?: any;
  /**
   * A getter that returns an array of all DockingLayout items that have been closed.
   * Default value: 
   */
  closedItems?: any;
  /**
   * Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. disableDrag - a boolean property that disables the dragging of the Tab item.    
   * Default value: 
   */
  layout?: any;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
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
   *     "invalidNode": "' method accepts an instance of JQX.TabsWindow",
   *     "invalidNodeRemove": "' method accepts an instance of JQX.TabsWindow that is a child of the DockingLayout.",
   *     "invalidNodeType": "' requires a \"jqx-tabs-window\" element to be passed as an argument.",
   *     "invalidTargetNode": "' requires an index of an item that is not hidden/closed. Only visible items that are part of the Layout are valid.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "noId": "jqxDockingLayout requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins. 
   * Default value: advanced
   */
  snapMode?: DockingLayoutSnapMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in.
   * Default value: 
   */
  undockedItems?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the tab selection is changed. <strong>Note:</strong> Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
   * @param ev. The custom event.    */
  onstatechange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing begins.
   * @param ev. The custom event.    */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when item resizing finishes.
   * @param ev. The custom event.    */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /**
   * Makes a "jqx-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
   */
  autoHideBottom(node: HTMLElement | number | string): void;
  /**
   * Makes a "jqx-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
   */
  autoHideLeft(node: HTMLElement | number | string): void;
  /**
   * Makes a "jqx-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
   */
  autoHideRight(node: HTMLElement | number | string): void;
  /**
   * Makes a "jqx-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
   * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
   */
  autoHideTop(node: HTMLElement | number | string): void;
  /**
   * Clears the localStorage of any previous cached state of the DockingLayout.
   */
  clearState(): void;
  /**
   * The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. <strong>Note:</strong> Items inserted via this method are added as a top level items.
   * @param {string | number | Node} node. An autohidden "jqx-tabs-window" item instance or a new "jqx-tabs-window" instance.
   * @returns {Node}
   */
  dock(node: string | number | Node): Node;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertBeforeItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertAfterItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoLeft(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoRight(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoTop(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoBottom(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutTop(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutBottom(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutLeft(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutRight(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * The method returns an array of all autohidden items.
   * @param {string} node?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
   * @returns {any[]}
   */
  getAutoHideItems(node?: string): any[];
  /**
   * The method returns the index of a target item.
   * @param {HTMLElement} node. Returns the index of the target item.
   * @returns {number}
   */
  getIndex(node: HTMLElement): number;
  /**
   * Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
   * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
   * @returns {any[]}
   */
  getState(noInstances?: boolean): any[];
  /**
   * Returns the Splitter parent of a Layout item
   * @param {HTMLElement} item?. DockingLayout item
   * @returns {HTMLElement}
   */
  getItemGroupElement(item?: HTMLElement): HTMLElement;
  /**
   * Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
   * @returns {any[]}
   */
  getJSONStructure(): any[];
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
   * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
  /**
   * Removes a DockingLayout item (TabsWindow) from the element.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
   */
  removeAt(index: number | HTMLElement | string): void;
  /**
   * Removes all items from the element.
   */
  removeAll(): void;
  /**
   * Removes a "jqx-tabs-window" node that is a DockingLayout item.
   * @param {Node} node. The "jqx-tabs-window" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
   */
  saveState(): void;
  /**
   * The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
   * @param {string | number | Node} node. A "jqx-tabs-window" instance that is part of the DockingLayout.
   */
  undock(node: string | number | Node): void;
  /**
   * Updates a TabsWindow and it's contents.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
   * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
   */
  update(index: number | HTMLElement | string, settings: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-docking-layout"): DockingLayout;
			querySelector(selectors: "jqx-docking-layout"): DockingLayout | null;	
			querySelectorAll(selectors: "jqx-docking-layout"): NodeListOf<DockingLayout>;
			getElementsByTagName(qualifiedName: "jqx-docking-layout"): HTMLCollectionOf<DockingLayout>;
			getElementsByName(elementName: "jqx-docking-layout"): NodeListOf<DockingLayout>;	
    }
}

/**Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter.
 advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.
  <br/> The feedback/highlighter is displayed when the dragging of an item begins.  */
export const enum DockingLayoutSnapMode{
	Simple = "simple",
	Advanced = "advanced"
}

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

/**
 The DropDownList is a form component that lets you choose a single predefined value from a list. It is a more advanced version of the 'select' tag.
*/
export interface DropDownList extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down list when it's empty.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines whether filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Determines the filtering mode of the drop down list.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: null
   */
  groupMember?: string | null;
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
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder, displayed in the element's selection field.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: none
   */
  resizeMode?: ResizeMode;
  /**
   * Determines what will be displayed in the dropDown selection field.
   * Default value: plain
   */
  selectionDisplayMode?: SelectionDisplayMode;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'.
   * Default value: null
   */
  tokenTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
   * @param ev. The custom event.    */
  onactionbuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is closed.
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
   * This event is triggered when an item is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
   * @param ev. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the end of the dropDown list.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user scrolls to the start of the dropDown list.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the drop down list.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Closes the dropDown list.
   */
  close(): void;
  /**
   * Ensures the desired item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the dropDown list.
   * @param {string} value. The value of an item from the drop down list.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified position.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} value. The value of the new item.
   */
  insert(position: number, value: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Opens the dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  select(item: string | HTMLElement): void;
  /**
   * Unselects an item from the dropDown list. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-drop-down-list"): DropDownList;
			querySelector(selectors: "jqx-drop-down-list"): DropDownList | null;	
			querySelectorAll(selectors: "jqx-drop-down-list"): NodeListOf<DropDownList>;
			getElementsByTagName(qualifiedName: "jqx-drop-down-list"): HTMLCollectionOf<DropDownList>;
			getElementsByName(elementName: "jqx-drop-down-list"): NodeListOf<DropDownList>;	
    }
}


declare global {
    interface Window {
        Smart: any;
		NG: any;
    }
}

export interface BaseElement extends HTMLElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the accordion. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Returns true when the rendering is completed. Otherwise returns false
   * Default value: false
   */
  isRendered?: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Callback called when the element is attached to the DOM.
   * Default value: null
   */
  onAttached?: any;
  /**
   * Callback called when the element is detached from the DOM.
   * Default value: null
   */
  onDetached?: any;
  /**
   * Callback called when the element is created.
   * Default value: null
   */
  onCreated?: any;
  /**
   * Callback called when the element is attached to the DOM for first time. It can be used for property initialization. 
   * Default value: null
   */
  onReady?: any;
  /**
   * Callback called when the element is rendered. 
   * Default value: null
   */
  onRender?: any;
  /**
   * Determines if the element is readonly or not. If the element true, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the element is automatically rendered or is rendered after calling the render method.
   * Default value: auto
   */
  renderMode?: ElementRenderMode;
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
   * Determines whether the element can be focused or not.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the element is resized.
   * @param ev. The custom event.    */
  onresize: ((ev: Event) => any) | null;
  /** 
   * This event is triggered when a style which affects the layout of the element is changed is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(styleProperties)
   *  styleProperties - Array with changed style properties.
   */
  onstylechanged?: ((this: any, ev: Event) => any) | null;
  /**
   * Unwatches the element.
   */
  unwatch(): void;
  /**
   * Renders the element.
   */
  render(): void;
  /**
   * Watch for property changes.
   * @param {any[]} properties. Properties array to watch for changes.
   * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
   */
  watch(properties: any[], propertyChangedCallback: any): void;
  /**
   * Notifies with a callback function, when the rendering is completed.
   * @param {any} renderCallback. Callback which is called, when the rendering is completed.
   */
  whenRendered(renderCallback: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-element"): Element;
			querySelector(selectors: "jqx-element"): Element | null;	
			querySelectorAll(selectors: "jqx-element"): NodeListOf<Element>;
			getElementsByTagName(qualifiedName: "jqx-element"): HTMLCollectionOf<Element>;
			getElementsByName(elementName: "jqx-element"): NodeListOf<Element>;	
    }
}

/**Determines whether the element is automatically rendered or is rendered after calling the render method. */
export const enum ElementRenderMode{
	Auto = "auto",
	Manual = "manual"
}

/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export interface FileUpload extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: null
   */
  accept?: string | null;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether files will be automatically uploaded after selection.
   * Default value: false
   */
  autoUpload?: boolean;
  /**
   * Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome.
   * Default value: false
   */
  directory?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone.
   * Default value: null
   */
  dropZone?: any;
  /**
   * Hides the footer element and it's contents (Upload All, Pause All and Close All buttons).
   * Default value: false
   */
  hideFooter?: boolean;
  /**
   * Applies a custom template to the file items that represent the uploaded files.
   * Default value: null
   */
  itemTemplate?: any;
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
   * Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization.
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
   *     "browse": "Browse",
   *     "uploadFile": "Upload File",
   *     "cancelFile": "Cancel File",
   *     "pauseFile": "Pause File",
   *     "uploadAll": "Upload All",
   *     "cancelAll": "Cancel All",
   *     "pauseAll": "Pause All",
   *     "totalFiles": "Total files: ",
   *     "connectionError": ": File Upload requires connection to the server.",
   *     "wrongItemIndex": ": There is no file with such an index in the list of uploaded files.",
   *     "tooLongFileName": ": File name is too long."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets whether multiple item uploads are allowed.
   * Default value: false
   */
  multiple?: boolean;
  /**
   * Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Callback that can used to handle various server responses and error codes.
   * Default value: null
   */
  responseHandler?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Callback function, used to change the headers of the file upload's XHR request.
   * Default value: null
   */
  setHeaders?: any;
  /**
   * Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process.
   * Default value: false
   */
  showProgress?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
   * Default value: ""
   */
  uploadUrl?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired.
   * Default value: null
   */
  validateFile?: any;
  /** 
   * This event is triggered when a file has been selected.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the selected file.
   *  type - The type of the selected file.
   *  size - The size of the selected file.
   *  index - The index of the selected file.
   */
  onfileselected?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is canceled.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   */
  onuploadcanceled?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is completed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onuploadcompleted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when during the file upload process something happens and upload fails.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onuploaderror?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is paused.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the paused file.
   *  type - The type of the paused file.
   *  size - The size of the paused file.
   *  index - The index of the paused file.
   */
  onuploadpaused?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is started.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the file that is being uploaded.
   *  type - The type of the file that is being uploaded.
   *  size - The size of the file that is being uploaded.
   *  index - The index of the file that is being uploaded.
   */
  onuploadstarted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the validation of a user defined 'validateFile' callback fails.
   * @param ev. The custom event. Custom data event was created with: ev.detail(filename, type, size)
   *  filename - The name of the file which validation has failed.
   *  type - The type of the file which validation has failed.
   *  size - The size of the file which validation has failed.
   */
  onvalidationerror?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens a popup to browse for a file.
   */
  browse(): void;
  /**
   * Cancels all selected files. The files are removed from the list and their uploading is prevented.
   */
  cancelAll(): void;
  /**
   * Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
   * @param {number} index. Index of the file which will be canceled.
   */
  cancelFile(index: number): void;
  /**
   * Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
   */
  pauseAll(): void;
  /**
   * Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
   * @param {number} id. Index of the file which will be paused.
   */
  pauseFile(id: number): void;
  /**
   * Uploads all selected files.
   */
  uploadAll(): void;
  /**
   * Uploads a selected file.
   * @param {number} id. Index of the file which will be uploaded.
   */
  uploadFile(id: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-file-upload"): FileUpload;
			querySelector(selectors: "jqx-file-upload"): FileUpload | null;	
			querySelectorAll(selectors: "jqx-file-upload"): NodeListOf<FileUpload>;
			getElementsByTagName(qualifiedName: "jqx-file-upload"): HTMLCollectionOf<FileUpload>;
			getElementsByName(elementName: "jqx-file-upload"): NodeListOf<FileUpload>;	
    }
}

/**
 FilterBuilder allows you to dynamically build filters.
*/
export interface FilterBuilder extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Adds more operations, that can be used in the filter bilder's conditions structure.
   * Default value: 
   */
  customOperations?: {name: string, caption: string, icon: string}[];
  /**
   * Enables or disables the context menu.
   * Default value: false
   */
  disableContextMenu?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Array with filtered fields and their settings.
   * Default value: null
   */
  fields?: any;
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'datetime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * Sets hint in form of popup message.
   * Default value: "null"
   */
  hint?: string;
  /**
   * Defines icon's representatino as characters.
   * Default value: { '=': '=', '<>': '<>', '>': '>', '>=': '>=', '<': '<', '<=': '<=', 'startswith': 'a|bc', 'endswith': 'ab|c', 'contains': 'abc', 'notcontains': '!abc', 'isblank': 'o', 'isnotblank': '*'}
   */
  icons?: FilterBuilderIcons;
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
   * Defines maximum number of allowed conditions in the element.
   * Default value: null
   */
  maxConditions?: number | null;
  /**
   * Defines maximum number of allowed conditions in group.
   * Default value: null
   */
  maxConditionsPerGroup?: number | null;
  /**
   * Defines maximum level of grouping in the FilterBuilder.
   * Default value: null
   */
  maxLevel?: number | null;
  /**
   * Defines field names of the filtered element.
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
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank",
   *     "wrongParentGroupIndex": "' method.",
   *     "missingFields": ": Fields are required for proper condition's adding. Set \"fields\" source and then conditions will be added as expected.",
   *     "wrongElementNode": "' method.",
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method."
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied.
   * Default value: false
   */
  restrictedMode?: boolean;
  /**
   * Enables or disables the display of the icons.
   * Default value: false
   */
  showIcons?: boolean;
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
   * The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels.
   * Default value: or
   */
  value?: string[];
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Sets the placeholder text used in the condition's value box in case the value is not set.
   * Default value: "&lt;enter a value&gt;"
   */
  valuePlaceholder?: string;
  /** 
   * This event is triggered when the element's value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is closed.
   * @param ev. The custom event.    */
  oneditorclose?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to close.
   * @param ev. The custom event.    */
  oneditorclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor is opened.
   * @param ev. The custom event.    */
  oneditoropen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an editor starts to open.
   * @param ev. The custom event.    */
  oneditoropening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when some of the filterbuilder's building blocks is clicked.
   * @param ev. The custom event.    */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is opened. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu starts to open. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu is closed. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the built-in menu  starts to close. If the <strong>disableContextMenu</strong> property is set to true this event is not fired.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds new condition in particular group. 
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  addCondition(parentGroup: string | HTMLElement, data: any[]): void;
  /**
   * Adds new group in particular parent group.
   * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  addGroup(parentGroup: string | HTMLElement, data: string): void;
  /**
   * Removes condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
   */
  removeCondition(item: string | HTMLElement): void;
  /**
   * Deletes group and all of  it's children
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   */
  removeGroup(item: string | HTMLElement): void;
  /**
   * Returns a string representation of the filter builder's value.
   * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
   * @returns {string}
   */
  toString(useLabels?: boolean): string;
  /**
   * Updates condition.
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
   * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
   */
  updateCondition(item: string | HTMLElement, data: any[]): void;
  /**
   * Updates group
   * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
   * @param {string} data. A string, representing the group operator.
   */
  updateGroup(item: string | HTMLElement, data: string): void;
}

/**Defines icon's representatino as characters. */
export interface FilterBuilderIcons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: undefined
   */
  0?: any;
  /**
   * 
   * Default value: undefined
   */
  1?: any;
  /**
   * 
   * Default value: undefined
   */
  2?: any;
  /**
   * 
   * Default value: undefined
   */
  3?: any;
  /**
   * 
   * Default value: undefined
   */
  4?: any;
  /**
   * 
   * Default value: undefined
   */
  5?: any;
  /**
   * 
   * Default value: undefined
   */
  6?: any;
  /**
   * 
   * Default value: undefined
   */
  7?: any;
  /**
   * 
   * Default value: undefined
   */
  8?: any;
  /**
   * 
   * Default value: undefined
   */
  9?: any;
  /**
   * 
   * Default value: undefined
   */
  10?: any;
  /**
   * 
   * Default value: undefined
   */
  11?: any;
  /**
   * 
   * Default value: undefined
   */
  12?: any;
  /**
   * 
   * Default value: undefined
   */
  13?: any;
  /**
   * 
   * Default value: undefined
   */
  14?: any;
  /**
   * 
   * Default value: undefined
   */
  15?: any;
  /**
   * 
   * Default value: undefined
   */
  16?: any;
  /**
   * 
   * Default value: undefined
   */
  17?: any;
  /**
   * 
   * Default value: undefined
   */
  18?: any;
  /**
   * 
   * Default value: undefined
   */
  19?: any;
  /**
   * 
   * Default value: undefined
   */
  20?: any;
  /**
   * 
   * Default value: undefined
   */
  21?: any;
  /**
   * 
   * Default value: undefined
   */
  22?: any;
  /**
   * 
   * Default value: undefined
   */
  23?: any;
  /**
   * 
   * Default value: undefined
   */
  24?: any;
  /**
   * 
   * Default value: undefined
   */
  25?: any;
  /**
   * 
   * Default value: undefined
   */
  26?: any;
  /**
   * 
   * Default value: undefined
   */
  27?: any;
  /**
   * 
   * Default value: undefined
   */
  28?: any;
  /**
   * 
   * Default value: undefined
   */
  29?: any;
  /**
   * 
   * Default value: undefined
   */
  30?: any;
  /**
   * 
   * Default value: undefined
   */
  31?: any;
  /**
   * 
   * Default value: undefined
   */
  32?: any;
  /**
   * 
   * Default value: undefined
   */
  33?: any;
  /**
   * 
   * Default value: undefined
   */
  34?: any;
  /**
   * 
   * Default value: undefined
   */
  35?: any;
  /**
   * 
   * Default value: undefined
   */
  36?: any;
  /**
   * 
   * Default value: undefined
   */
  37?: any;
  /**
   * 
   * Default value: undefined
   */
  38?: any;
  /**
   * 
   * Default value: undefined
   */
  39?: any;
  /**
   * 
   * Default value: undefined
   */
  40?: any;
  /**
   * 
   * Default value: undefined
   */
  41?: any;
  /**
   * 
   * Default value: undefined
   */
  42?: any;
  /**
   * 
   * Default value: undefined
   */
  43?: any;
  /**
   * 
   * Default value: undefined
   */
  44?: any;
  /**
   * 
   * Default value: undefined
   */
  45?: any;
  /**
   * 
   * Default value: undefined
   */
  46?: any;
  /**
   * 
   * Default value: undefined
   */
  47?: any;
  /**
   * 
   * Default value: undefined
   */
  48?: any;
  /**
   * 
   * Default value: undefined
   */
  49?: any;
  /**
   * 
   * Default value: undefined
   */
  50?: any;
  /**
   * 
   * Default value: undefined
   */
  51?: any;
  /**
   * 
   * Default value: undefined
   */
  52?: any;
  /**
   * 
   * Default value: undefined
   */
  53?: any;
  /**
   * 
   * Default value: undefined
   */
  54?: any;
  /**
   * 
   * Default value: undefined
   */
  55?: any;
  /**
   * 
   * Default value: undefined
   */
  56?: any;
  /**
   * 
   * Default value: undefined
   */
  57?: any;
  /**
   * 
   * Default value: undefined
   */
  58?: any;
  /**
   * 
   * Default value: undefined
   */
  59?: any;
  /**
   * 
   * Default value: undefined
   */
  60?: any;
  /**
   * 
   * Default value: undefined
   */
  61?: any;
  /**
   * 
   * Default value: undefined
   */
  62?: any;
  /**
   * 
   * Default value: undefined
   */
  63?: any;
  /**
   * 
   * Default value: undefined
   */
  64?: any;
  /**
   * 
   * Default value: undefined
   */
  65?: any;
  /**
   * 
   * Default value: undefined
   */
  66?: any;
  /**
   * 
   * Default value: undefined
   */
  67?: any;
  /**
   * 
   * Default value: undefined
   */
  68?: any;
  /**
   * 
   * Default value: undefined
   */
  69?: any;
  /**
   * 
   * Default value: undefined
   */
  70?: any;
  /**
   * 
   * Default value: undefined
   */
  71?: any;
  /**
   * 
   * Default value: undefined
   */
  72?: any;
  /**
   * 
   * Default value: undefined
   */
  73?: any;
  /**
   * 
   * Default value: undefined
   */
  74?: any;
  /**
   * 
   * Default value: undefined
   */
  75?: any;
  /**
   * 
   * Default value: undefined
   */
  76?: any;
  /**
   * 
   * Default value: undefined
   */
  77?: any;
  /**
   * 
   * Default value: undefined
   */
  78?: any;
  /**
   * 
   * Default value: undefined
   */
  79?: any;
  /**
   * 
   * Default value: undefined
   */
  80?: any;
  /**
   * 
   * Default value: undefined
   */
  81?: any;
  /**
   * 
   * Default value: undefined
   */
  82?: any;
  /**
   * 
   * Default value: undefined
   */
  83?: any;
  /**
   * 
   * Default value: undefined
   */
  84?: any;
  /**
   * 
   * Default value: undefined
   */
  85?: any;
  /**
   * 
   * Default value: undefined
   */
  86?: any;
  /**
   * 
   * Default value: undefined
   */
  87?: any;
  /**
   * 
   * Default value: undefined
   */
  88?: any;
  /**
   * 
   * Default value: undefined
   */
  89?: any;
  /**
   * 
   * Default value: undefined
   */
  90?: any;
  /**
   * 
   * Default value: undefined
   */
  91?: any;
  /**
   * 
   * Default value: undefined
   */
  92?: any;
  /**
   * 
   * Default value: undefined
   */
  93?: any;
  /**
   * 
   * Default value: undefined
   */
  94?: any;
  /**
   * 
   * Default value: undefined
   */
  95?: any;
  /**
   * 
   * Default value: undefined
   */
  96?: any;
  /**
   * 
   * Default value: undefined
   */
  97?: any;
  /**
   * 
   * Default value: undefined
   */
  98?: any;
  /**
   * 
   * Default value: undefined
   */
  99?: any;
  /**
   * 
   * Default value: undefined
   */
  100?: any;
  /**
   * 
   * Default value: undefined
   */
  101?: any;
  /**
   * 
   * Default value: undefined
   */
  102?: any;
  /**
   * 
   * Default value: undefined
   */
  103?: any;
  /**
   * 
   * Default value: undefined
   */
  104?: any;
  /**
   * 
   * Default value: undefined
   */
  105?: any;
  /**
   * 
   * Default value: undefined
   */
  106?: any;
  /**
   * 
   * Default value: undefined
   */
  107?: any;
  /**
   * 
   * Default value: undefined
   */
  108?: any;
  /**
   * 
   * Default value: undefined
   */
  109?: any;
  /**
   * 
   * Default value: undefined
   */
  110?: any;
  /**
   * 
   * Default value: undefined
   */
  111?: any;
  /**
   * 
   * Default value: undefined
   */
  112?: any;
  /**
   * 
   * Default value: undefined
   */
  113?: any;
  /**
   * 
   * Default value: undefined
   */
  114?: any;
  /**
   * 
   * Default value: undefined
   */
  115?: any;
  /**
   * 
   * Default value: undefined
   */
  116?: any;
  /**
   * 
   * Default value: undefined
   */
  117?: any;
  /**
   * 
   * Default value: undefined
   */
  118?: any;
  /**
   * 
   * Default value: undefined
   */
  119?: any;
  /**
   * 
   * Default value: undefined
   */
  120?: any;
  /**
   * 
   * Default value: undefined
   */
  121?: any;
  /**
   * 
   * Default value: undefined
   */
  122?: any;
  /**
   * 
   * Default value: undefined
   */
  123?: any;
  /**
   * 
   * Default value: undefined
   */
  124?: any;
  /**
   * 
   * Default value: undefined
   */
  125?: any;
  /**
   * 
   * Default value: undefined
   */
  126?: any;
  /**
   * 
   * Default value: undefined
   */
  127?: any;
  /**
   * 
   * Default value: undefined
   */
  128?: any;
  /**
   * 
   * Default value: undefined
   */
  129?: any;
  /**
   * 
   * Default value: undefined
   */
  130?: any;
  /**
   * 
   * Default value: undefined
   */
  131?: any;
  /**
   * 
   * Default value: undefined
   */
  132?: any;
  /**
   * 
   * Default value: undefined
   */
  133?: any;
  /**
   * 
   * Default value: undefined
   */
  134?: any;
  /**
   * 
   * Default value: undefined
   */
  135?: any;
  /**
   * 
   * Default value: undefined
   */
  136?: any;
  /**
   * 
   * Default value: undefined
   */
  137?: any;
  /**
   * 
   * Default value: undefined
   */
  138?: any;
  /**
   * 
   * Default value: undefined
   */
  139?: any;
  /**
   * 
   * Default value: undefined
   */
  140?: any;
  /**
   * 
   * Default value: undefined
   */
  141?: any;
  /**
   * 
   * Default value: undefined
   */
  142?: any;
  /**
   * 
   * Default value: undefined
   */
  143?: any;
  /**
   * 
   * Default value: undefined
   */
  144?: any;
  /**
   * 
   * Default value: undefined
   */
  145?: any;
  /**
   * 
   * Default value: undefined
   */
  146?: any;
  /**
   * 
   * Default value: undefined
   */
  147?: any;
  /**
   * 
   * Default value: undefined
   */
  148?: any;
  /**
   * 
   * Default value: undefined
   */
  149?: any;
  /**
   * 
   * Default value: undefined
   */
  150?: any;
  /**
   * 
   * Default value: undefined
   */
  151?: any;
  /**
   * 
   * Default value: undefined
   */
  152?: any;
  /**
   * 
   * Default value: undefined
   */
  153?: any;
  /**
   * 
   * Default value: undefined
   */
  154?: any;
  /**
   * 
   * Default value: undefined
   */
  155?: any;
  /**
   * 
   * Default value: undefined
   */
  156?: any;
  /**
   * 
   * Default value: undefined
   */
  157?: any;
  /**
   * 
   * Default value: undefined
   */
  158?: any;
  /**
   * 
   * Default value: undefined
   */
  159?: any;
  /**
   * 
   * Default value: undefined
   */
  160?: any;
  /**
   * 
   * Default value: undefined
   */
  161?: any;
  /**
   * 
   * Default value: undefined
   */
  162?: any;
  /**
   * 
   * Default value: undefined
   */
  163?: any;
  /**
   * 
   * Default value: undefined
   */
  164?: any;
  /**
   * 
   * Default value: undefined
   */
  165?: any;
  /**
   * 
   * Default value: undefined
   */
  166?: any;
  /**
   * 
   * Default value: undefined
   */
  167?: any;
  /**
   * 
   * Default value: undefined
   */
  168?: any;
  /**
   * 
   * Default value: undefined
   */
  169?: any;
  /**
   * 
   * Default value: undefined
   */
  170?: any;
  /**
   * 
   * Default value: undefined
   */
  171?: any;
  /**
   * 
   * Default value: undefined
   */
  172?: any;
  /**
   * 
   * Default value: undefined
   */
  173?: any;
  /**
   * 
   * Default value: undefined
   */
  174?: any;
  /**
   * 
   * Default value: undefined
   */
  175?: any;
  /**
   * 
   * Default value: undefined
   */
  176?: any;
  /**
   * 
   * Default value: undefined
   */
  177?: any;
  /**
   * 
   * Default value: undefined
   */
  178?: any;
  /**
   * 
   * Default value: undefined
   */
  179?: any;
  /**
   * 
   * Default value: undefined
   */
  180?: any;
  /**
   * 
   * Default value: undefined
   */
  181?: any;
  /**
   * 
   * Default value: undefined
   */
  182?: any;
  /**
   * 
   * Default value: undefined
   */
  183?: any;
  /**
   * 
   * Default value: undefined
   */
  184?: any;
  /**
   * 
   * Default value: undefined
   */
  185?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-filter-builder"): FilterBuilder;
			querySelector(selectors: "jqx-filter-builder"): FilterBuilder | null;	
			querySelectorAll(selectors: "jqx-filter-builder"): NodeListOf<FilterBuilder>;
			getElementsByTagName(qualifiedName: "jqx-filter-builder"): HTMLCollectionOf<FilterBuilder>;
			getElementsByName(elementName: "jqx-filter-builder"): NodeListOf<FilterBuilder>;	
    }
}

/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export interface FilterPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Defines which operation buttons will be shown in the filter panel
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
   * Default value: null
   */
  data?: number[];
  /**
   * Describes filtered data field.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables filter panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function, used for custom evaluations in filter panel.
   * Default value: null
   */
  evaluateFilterExpression?: any;
  /**
   * Defines which filter type is used.
   * Default value: string
   */
  filterType?: FilterPanelFilterType;
  /**
   * Format string used in filterType 'Date'.
   * Default value: "d"
   */
  formatString?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines field names of the filtered element.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "and",
   *     "blanks": "(Blanks)",
   *     "cancel": "Cancel",
   *     "clear": "Clear",
   *     "contains": "contains",
   *     "containsCaseSensitive": "contains (case sensitive)",
   *     "dateTabLabel": "DATE",
   *     "doesNotContain": "does not contain",
   *     "doesNotContainCaseSensitive": "does not contain (case sensitive)",
   *     "empty": "empty",
   *     "endsWith": "ends with",
   *     "endsWithCaseSensitive": "ends with (case sensitive)",
   *     "equal": "equal",
   *     "equalCaseSensitive": "equal (case sensitive)",
   *     "filter": "Filter",
   *     "filterBuilderPlaceholder": "&lt;enter a value&gt;",
   *     "greaterThan": "greater than",
   *     "greaterThanOrEqual": "greater than or equal",
   *     "lessThan": "less than",
   *     "lessThanOrEqual": "less than or equal",
   *     "notEmpty": "not empty",
   *     "notEqual": "not equal",
   *     "notNull": "not null",
   *     "null": "null ",
   *     "or": "or",
   *     "placeholderDate": "Enter date",
   *     "placeholderTime": "Enter time",
   *     "selectAll": "(Select All)",
   *     "showRows": "Show rows where:",
   *     "startsWith": "starts with",
   *     "startsWithCaseSensitive": "starts with (case sensitive)",
   *     "timeTabLabel": "TIME"
   *   }
   * }
   */
  messages?: any;
  /**
   * Desfines filter panel's  mode
   * Default value: default
   */
  mode?: FilterPanelMode;
  /**
   * If the element is readonly, users cannot interact with it.
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
   * This event is triggered when the current filtering is discarted.
   * @param ev. The custom event.    */
  oncancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the current filtering is cleared.
   * @param ev. The custom event.    */
  onclear?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when filter panel settings are applied.
   * @param ev. The custom event.    */
  onfilter?: ((this: any, ev: Event) => any) | null;
  /**
   * Discards current filtering.
   */
  cancel(): void;
  /**
   * Clears current filtering.
   */
  clear(): void;
  /**
   * Evaluates a filter.
   * @param {any} value. The evalueated element in filter panel.
   */
  evaluate(value: any): void;
  /**
   * Applies current filtering.
   */
  filter(): void;
  /**
   * Gets the current filter state.
   * @returns {any}
   */
  getState(): any;
  /**
   * Loads a previously saved filter state.
   * @param {any} state. An object returned by the method getState.
   */
  loadState(state: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-filter-panel"): FilterPanel;
			querySelector(selectors: "jqx-filter-panel"): FilterPanel | null;	
			querySelectorAll(selectors: "jqx-filter-panel"): NodeListOf<FilterPanel>;
			getElementsByTagName(qualifiedName: "jqx-filter-panel"): HTMLCollectionOf<FilterPanel>;
			getElementsByName(elementName: "jqx-filter-panel"): NodeListOf<FilterPanel>;	
    }
}

/**Defines which filter type is used. */
export const enum FilterPanelFilterType{
	Numeric = "numeric",
	String = "string",
	Date = "date",
	Boolean = "boolean"
}

/**Desfines filter panel's  mode */
export const enum FilterPanelMode{
	Default = "default",
	Excel = "excel",
	FilterBuilder = "filterBuilder"
}

/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export interface GanttChart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
   * Default value: false
   */
  autoSchedule?: boolean;
  /**
   * Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
   * Default value: false
   */
  autoScheduleStrictMode?: boolean;
  /**
   * Determines the scroll speed when dragging when autoScroll property is set. 
   * Default value: 5
   */
  autoScrollStep?: number;
  /**
   * Sets the GanttChart's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GanttChartDataExport;
  /**
   * Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..
   * Default value: 
   */
  dataSource?: GanttChartDataSource[];
  /**
   * Determines the format of the dates in the timeline header when they represent days.
   * Default value: short
   */
  dayFormat?: DayFormat;
  /**
   * Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
   * Default value: false
   */
  disableAutoScroll?: boolean;
  /**
   * Determines in what unit is task duration property measured.
   * Default value: milisecond
   */
  durationUnit?: Duration;
  /**
   * Determines weather or not horizontal scrollbar is shown.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Detetmines the maximum possible date of the Timeline.
   * Default value: 2100-1-1
   */
  max?: any;
  /**
   * Detetmines the minimum possible date of the Timeline.
   * Default value: 1900-1-1
   */
  min?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the format of the dates the timeline header when they represent months.
   * Default value: short
   */
  monthFormat?: MonthFormat;
  /**
   * Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations.
   * Default value: 
   */
  nonworkingDays?: number[];
  /**
   * Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest.
   * Default value: 
   */
  nonworkingHours?: number[];
  /**
   * A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
   * Default value: null
   */
  popupWindowCustomizationFunction?: any;
  /**
   * Determines the selected task(s). If empty no tasks are selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
   * Default value: false
   */
  snapToNearest?: boolean;
  /**
   * A getter that returns a flat structure as an array of all tasks inside the element.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
   * Default value: { "label": "Task Name", "value": "label" }
   */
  taskColumns?: GanttChartTaskColumn[];
  /**
   * Determines the min width of the timeline.
   * Default value: 200
   */
  timelineMin?: any;
  /**
   * Determines the min width of the task tree.
   * Default value: 100
   */
  treeMin?: any;
  /**
   * Determines the size(width) of the task tree.
   * Default value: 100
   */
  treeSize?: any;
  /**
   * Determines the format of the dates inside the timeline header when they represent hours.
   * Default value: numeric
   */
  hourFormat?: HourFormat;
  /**
   * A format function for the Header of the Timeline.
   * Default value: null
   */
  timelineHeaderFormatFunction?: any;
  /**
   * Determines weather or not vertical scrollbar is shown.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
   * Default value: year
   */
  view?: GanttChartView;
  /**
   * Determines the format of the dates inside the timeline header when they represent years.
   * Default value: numeric
   */
  yearFormat?: YearFormat;
  /**
   * Determines the format of the dates inside the timeline header when they represent weeks. 
   * Default value: long
   */
  weekFormat?: WeekFormat;
  /**
   * Sets or gets the element's visual theme. 
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when a Task is selected/unselected.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task bar starts to change as a result of user interaction.
   * @param ev. The custom event.    */
  onprogresschangestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the progress of a task is changed.
   * @param ev. The custom event.    */
  onprogresschangeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task starts.
   * @param ev. The custom event.    */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when dragging of a task finishes.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing of a task starts.
   * @param ev. The custom event.    */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of a task finishes.
   * @param ev. The custom event.    */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user starts connecting one task to another.
   * @param ev. The custom event.    */
  onconnectionstart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user completes a connection between two tasks.
   * @param ev. The custom event.    */
  onconnectionend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the bottom.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Timeline has been scrolled to the top.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is opened( visible ).
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the window for task editing is closed( hidden )
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /**
   * Removes all connections between tasks. 
   */
  removeAllConnections(): void;
  /**
   * Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   * @returns {any}
   */
  removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): any;
  /**
   * Removes all connections of a task or between two tasks if the second argument is provided and valid.
   * @param {number} taskStartIndex. The index of the start task. 
   * @param {number} taskEndIndex?. The index of the end task.
   * @returns {string}
   */
  removeTaskConnection(taskStartIndex: number, taskEndIndex?: number): string;
  /**
   * Removes all tasks. 
   */
  clearTasks(): void;
  /**
   * Creates a connection between two tasks. 
   * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
   * @param {number} taskEndIndex?. The index of the end task.
   * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
   */
  createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void;
  /**
   * Collapses an expanded project with tasks.
   * @param {string | number} index. The index of a project task that should be collapsed.
   */
  collapse(index: string | number): void;
  /**
   * Makes sure a Task is visible by scrolling to it.
   * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
   */
  ensureVisible(item: string | number): void;
  /**
   * Expands a collapsed project with tasks.
   * @param {string | number} index. The index of a project task that should be expanded.
   */
  expand(index: string | number): void;
  /**
   * Returns a JSON representation of all tasks inside the element along with their connections and settings.
   * @returns {any[]}
   */
  getState(): any[];
  /**
   * Returns the index of a task.
   * @param {HTMLElement} task. A JQX.TreeItem from the Task Tree or a Timeline task HTML element.
   * @returns {number}
   */
  getTaskIndex(task: HTMLElement): number;
  /**
   * Removes a previously saved state of the element form LocalStorage according to it's id. <strong>Requires an id to be set to the element.</strong>
   */
  clearState(): void;
  /**
   * Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  loadState(state?: any[]): void;
  /**
   * Saves the current settings of the element to LocalStorage. <strong>Requires an id to be set to the element.</strong>
   * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
   */
  saveState(state?: any[]): void;
  /**
   * Inserts a new task in the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task.
   */
  insertTask(index: string | number, taskObject: any): void;
  /**
   * Updates a task inside the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
   * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
   */
  updateTask(index: string | number, taskObject: any): void;
  /**
   * Removes a task from the timeline.
   * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
   */
  removeTask(index: string | number): void;
  /**
   * Opens the popup Window for specific task Editing.
   * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
   */
  openWindow(index: string | number): void;
  /**
   * Closes an opened popup Window. The method will close any opened popup window inside the element.
   */
  closeWindow(): void;
  /**
   * Prepares the GanttChart for printing by opening the browser's Print Preview.
   */
  print(): void;
}

/**Sets the GanttChart's Data Export options. */
export interface GanttChartDataExport {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxGanttChart"
   */
  fileName?: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
  /**
   * Sets the expand char displayed for the Project tasks when GanttChart exported.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Sets the collapse char displayed for the Project tasks when GanttChart is exported.
   * Default value: "-"
   */
  collapseChar?: string;
}

export interface GanttChartDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartDataSourceConnection[];
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Project, Task or Milestone with disabled resources.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: false
   */
  resources?: GanttChartDataSourceResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
  /**
   * Project, Task or Milestone value.
   * Default value: true
   */
  visible?: boolean;
}

export interface GanttChartDataSourceConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartDataSourceResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Resource capacity.
   * Default value: 0
   */
  capacity?: number;
  /**
   * Resource format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Resource id.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: number;
  /**
   * Resource max capacity.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource min capacity.
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource visibility.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Resource workload.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartTask {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tasks connection.
   * Default value: undefined
   */
  connections?: GanttChartTaskConnection[];
  /**
   * Project, Task or Milestone CSS class.
   * Default value: ""
   */
  class?: string;
  /**
   * Project, Task or Milestone start date.
   * Default value: 
   */
  dateStart?: string | Date;
  /**
   * Project, Task or Milestone end date.
   * Default value: 
   */
  dateEnd?: string | Date;
  /**
   * Project, Task or Milestone with disabled resources.
   * Default value: false
   */
  disableResources?: boolean;
  /**
   * Project, Task or Milestone dragging is disabled.
   * Default value: false
   */
  disableDrag?: boolean;
  /**
   * Project, Task or Milestone resizing is disabled.
   * Default value: false
   */
  disableResize?: boolean;
  /**
   * Project, Task or Milestone drag enabled in the view.
   * Default value: true
   */
  dragProject?: boolean;
  /**
   * Project, Task or Milestone expanded state in the view.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Project, Task or Milestone id.
   * Default value: 
   */
  id?: string | null;
  /**
   * Project, Task or Milestone label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Project, Task or Milestone format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Project, Task or Milestone min start date.
   * Default value: 
   */
  minDateStart?: string | Date;
  /**
   * Project, Task or Milestone max end date.
   * Default value: 
   */
  maxDateEnd?: string | Date;
  /**
   * Project, Task or Milestone progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Project, Task or Milestone resources.
   * Default value: false
   */
  resources?: GanttChartTaskResource[];
  /**
   * Project, Task or Milestone synchronized in the view.
   * Default value: false
   */
  synchronized?: boolean;
  /**
   * Project's tasks.
   * Default value: 
   */
  tasks?: GanttChartTask[];
  /**
   * Project, Task or Milestone type. Possible values are 'project' and 'task'
   * Default value: 
   */
  type?: GanttChartTaskType;
  /**
   * Project, Task or Milestone value.
   * Default value: 
   */
  value?: any;
  /**
   * Project, Task or Milestone value.
   * Default value: true
   */
  visible?: boolean;
}

export interface GanttChartTaskConnection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Task's connection target.
   * Default value: 0
   */
  target?: string | number;
  /**
   * Task's connection type.
   * Default value: 0
   */
  type?: number;
}

export interface GanttChartTaskResource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Resource capacity.
   * Default value: 0
   */
  capacity?: number;
  /**
   * Resource format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Resource id.
   * Default value: ""
   */
  id?: string;
  /**
   * Resource label.
   * Default value: 0
   */
  label?: number;
  /**
   * Resource max capacity.
   * Default value: 0
   */
  maxCapacity?: number;
  /**
   * Resource min capacity.
   * Default value: 0
   */
  minCapacity?: number;
  /**
   * Resource progress.
   * Default value: 0
   */
  progress?: number;
  /**
   * Resource value.
   * Default value: 
   */
  value?: any;
  /**
   * Resource visibility.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Resource workload.
   * Default value: 0
   */
  workload?: string | number;
}

export interface GanttChartTaskColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Column's label.
   * Default value: 
   */
  label?: string | null;
  /**
   * Column's value.
   * Default value: 
   */
  value?: string | null;
  /**
   * Column's min size.
   * Default value: 0
   */
  min?: string | number | null;
  /**
   * Column's size.
   * Default value: 0
   */
  size?: string | number | null;
  /**
   * Column's format function. You can use it to customize the column label's rendering.
   * Default value: null
   */
  formatFunction?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-gantt-chart"): GanttChart;
			querySelector(selectors: "jqx-gantt-chart"): GanttChart | null;	
			querySelectorAll(selectors: "jqx-gantt-chart"): NodeListOf<GanttChart>;
			getElementsByTagName(qualifiedName: "jqx-gantt-chart"): HTMLCollectionOf<GanttChart>;
			getElementsByName(elementName: "jqx-gantt-chart"): NodeListOf<GanttChart>;	
    }
}

/**Determines in what unit is task duration property measured. */
export const enum Duration{
	Day = "day",
	Hour = "hour",
	Minute = "minute",
	Second = "second",
	Milisecond = "milisecond"
}

/**Project, Task or Milestone type. Possible values are 'project' and 'task' */
export const enum GanttChartTaskType{
	Project = "project",
	Milestone = "milestone",
	Task = "task"
}

/**Determines the format of the dates inside the timeline header when they represent hours. */
export const enum HourFormat{
	Default = "default",
	TwoDigit = "2-digit",
	Numeric = "numeric"
}

/**Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.
week - the timeline shows the days of the week.
month - the timeline shows the days of the month.
year - the timeline shows the months of the year.
 <br /> The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
export const enum GanttChartView{
	Day = "day",
	Week = "week",
	Month = "month",
	Year = "year"
}

/**Determines the format of the dates inside the timeline header when they represent weeks.  */
export const enum WeekFormat{
	Long = "long",
	Numeric = "numeric"
}

/**
 Gauge displays an indicator within a range of values.
*/
export interface Gauge extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Determines the type of gauge's indicator.
   * Default value: needle
   */
  analogDisplayType?: GaugeAnalogDisplayType;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets gauge's animation duration. Applicable only when animation is not 'none'.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * With the coerce property true, the value is set to the nearest value allowed by the interval property. 
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
   * Determines the date pattern of the labels when mode is 'date'.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the digital display of the element.
   * Default value: false
   */
  digitalDisplay?: boolean;
  /**
   * Sets the position of the digital display inside the element.
   * Default value: bottom
   */
  digitalDisplayPosition?: GaugeDigitalDisplayPosition;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle.
   * Default value: null
   */
  drawNeedle?: any;
  /**
   * Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees.
   * Default value: 210
   */
  endAngle?: number;
  /**
   * When cooerce property is true, all values coerce to the interval's value.
   * Default value: 1
   */
  interval?: any;
  /**
   * Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that can be used to format the values displayed inside the gauge labels.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Determines the visibility of the labels inside the element.
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Enables or disables the usage of logarithmic scale in the element.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Determines the maximum value for the scale of the element.
   * Default value: 100
   */
  max?: any;
  /**
   * Determines when the value of the element is updated.
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
   * Determines the minimum value for the scale of the element. 
   * Default value: 0
   */
  min?: any;
  /**
   * Determines whether the element works with numbers or dates.
   * Default value: numeric
   */
  mode?: ScaleMode;
  /**
   * Sets or gets the element's name, which is used as a reference when the data is submitted.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines the position of the needle when analogDisplayType is 'needle'. 
   * Default value: center
   */
  needlePosition?: GaugeNeedlePosition;
  /**
   * Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * This property represents an array of objects. Each object is a different range. The range is a colored area with specific size.
   * Default value: 
   */
  ranges?: {startValue: number, endValue: number, className: string}[];
  /**
   * When the element is read only the users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the position of the scale in the element. 
   * Default value: inside
   */
  scalePosition?: GaugeScalePosition;
  /**
   * Determines the type of the gauge's value and scale. 
   * Default value: floatingPoint
   */
  scaleType?: ScaleType;
  /**
   * Enables or disables scientific notation.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * This property indicates whether the gauge ranges are visible or not.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Enables or disables displaying of units.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
   * Default value: null
   */
  significantDigits?: number | null;
  /**
   * Determines how the Gauge will size.
   * Default value: circle
   */
  sizeMode?: GaugeSizeMode;
  /**
   * Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees.
   * Default value: -30
   */
  startAngle?: number;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the position of the ticks in the Gauge.
   * Default value: scale
   */
  ticksPosition?: TicksPosition;
  /**
   * Determines the visibility of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the name of unit used for the values on the scale of the element.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the element. The value can be a date only when scaleType is 'date'.
   * Default value: 0
   */
  value?: string | number | Date;
  /**
   * Sets or gets the word length. Applicable only when scaleType is 'integer'.
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value of the element is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element.
   *  value - The new value of the element.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * Gets the optimal size of the element (the current width and the height based on the plotted internal elements). 
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Get/set the value of the gauge.
   * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
   * @returns {string}
   */
  val(value?: string | number | Date): string;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-gauge"): Gauge;
			querySelector(selectors: "jqx-gauge"): Gauge | null;	
			querySelectorAll(selectors: "jqx-gauge"): NodeListOf<Gauge>;
			getElementsByTagName(qualifiedName: "jqx-gauge"): HTMLCollectionOf<Gauge>;
			getElementsByName(elementName: "jqx-gauge"): NodeListOf<Gauge>;	
    }
}

/**Determines the type of gauge's indicator. */
export const enum GaugeAnalogDisplayType{
	Needle = "needle",
	Fill = "fill",
	Line = "line"
}

/**Sets the position of the digital display inside the element. */
export const enum GaugeDigitalDisplayPosition{
	Bottom = "bottom",
	Center = "center",
	Right = "right",
	Top = "top"
}

/**Determines the visibility of the labels inside the element. */
export const enum LabelsVisibility{
	All = "all",
	EndPoints = "endPoints",
	None = "none"
}

/**Determines when the value of the element is updated. */
export const enum DragMechanicalAction{
	SwitchUntilReleased = "switchUntilReleased",
	SwitchWhenReleased = "switchWhenReleased",
	SwitchWhileDragging = "switchWhileDragging"
}

/**Determines whether the element works with numbers or dates. */
export const enum ScaleMode{
	Date = "date",
	Numeric = "numeric"
}

/**Determines the position of the needle when analogDisplayType is 'needle'.  */
export const enum GaugeNeedlePosition{
	Center = "center",
	Edge = "edge"
}

/**Determines the position of the scale in the element.  */
export const enum GaugeScalePosition{
	Inside = "inside",
	Outside = "outside",
	None = "none"
}

/**Determines the type of the gauge's value and scale.  */
export const enum ScaleType{
	FloatingPoint = "floatingPoint",
	Integer = "integer"
}

/**Determines how the Gauge will size. */
export const enum GaugeSizeMode{
	Auto = "auto",
	Circle = "circle",
	None = "none"
}

/**Determines the position of the ticks in the Gauge. */
export const enum TicksPosition{
	Scale = "scale",
	Track = "track"
}

/**Determines the visibility of the ticks. */
export const enum TicksVisibility{
	Major = "major",
	Minor = "minor",
	None = "none"
}

/**Sets or gets the word length. Applicable only when scaleType is 'integer'. */
export const enum WordLength{
	Int8 = "int8",
	Int16 = "int16",
	Int32 = "int32",
	Int64 = "int64",
	Uint8 = "uint8",
	Uint16 = "uint16",
	Uint32 = "uint32",
	Uint64 = "uint64"
}

/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export interface Grid extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An object containing settings related to the grid's appearance.
   * Default value: [object Object]
   */
  appearance?: GridAppearance;
  /**
   * An object containing settings related to the grid's behavior.
   * Default value: [object Object]
   */
  behavior?: GridBehavior;
  /**
   * An object containing settings related to the grid's layout.
   * Default value: [object Object]
   */
  layout?: GridLayout;
  /**
   * The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
   * Default value: [object Object]
   */
  clipboard?: GridClipboard;
  /**
   * The columns property is used to describe all columns displayed in the grid. 
   * Default value: []
   */
  columns?: GridColumn[];
  /**
   * Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
   * Default value: [object Object]
   */
  columnMenu?: GridColumnMenu;
  /**
   * Describes the settings of the column groups.
   * Default value: 
   */
  columnGroups?: GridColumnGroup[];
  /**
   * Sets the Grid Charting Data Visualization.
   * Default value: [object Object]
   */
  charting?: GridCharting;
  /**
   * Sets the TreeGrid checkboxes.
   * Default value: [object Object]
   */
  checkBoxes?: GridCheckBoxes;
  /**
   * Sets the Grid Data Export options.
   * Default value: [object Object]
   */
  dataExport?: GridDataExport;
  /**
   * Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter.
   * Default value: null
   */
  dataSource?: DataAdapter;
  /**
   * Describes the grid's editing settings.
   * Default value: [object Object]
   */
  editing?: GridEditing;
  /**
   * Describes the grid's filtering settings.
   * Default value: [object Object]
   */
  filtering?: GridFiltering;
  /**
   * Describes the grid's grouping settings.
   * Default value: [object Object]
   */
  grouping?: GridGrouping;
  /**
   * Sets the messages values.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Callback function, which is called when the Grid needs a cell value to render it. When you implement this function, you can override the default cell value rendering.
   * Default value: null
   */
  onCellValue?: {(cell: GridCell): void};
  /**
   * Callback function, which is called when a cell value will be updated. This function is useful if you want to make Ajax call to a server to validate the cell changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onCellUpdate?: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void};
  /**
   * Callback function, which is called when a cell is rendered. This function is useful if you want to customize GridCell properties, before the cell is rendered.
   * Default value: null
   */
  onCellRender?: {(cell: GridCell): void};
  /**
   * Callback function() called before the grid has been initialized and the Grid's Virtual DOM is not created.
   * Default value: null
   */
  onBeforeInit?: {(): void};
  /**
   * Callback function() called when the grid is initializing and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onInit?: {(): void};
  /**
   * Callback function() called after the grid has been initialized and the Grid's Virtual DOM is created.
   * Default value: null
   */
  onAfterInit?: {(): void};
  /**
   * Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
   * Default value: null
   */
  onChartInit?: any;
  /**
   * Callback function() called when the grid has been rendered.
   * Default value: null
   */
  onRender?: {(): void};
  /**
   * Callback function(event: KeyboardEvent) called when the grid is on focus and a keyboard key is pressed.
   * Default value: null
   */
  onKey?: {(event: KeyboardEvent): void};
  /**
   * Callback function, which is called when a row is initializing. This function can be used to customize the row settings.
   * Default value: null
   */
  onRowInit?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a row detail is initializing. Row details are displayed below the row's data or in a separate dialog.
   * Default value: null
   */
  onRowDetailInit?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * Callback function, which is called when a row detail is udpating.
   * Default value: null
   */
  onRowDetailUpdated?: {(index: number, row: GridRow, details: HTMLElement): void};
  /**
   * Callback function which is called when a row has been inserted.
   * Default value: null
   */
  onRowInserted?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a row has been removed.
   * Default value: null
   */
  onRowRemoved?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when row's cell values will be updated. This function is useful if you want to make Ajax call to a server to validate the edit changes. If the changes are validated, invoke the confirm function.
   * Default value: null
   */
  onRowUpdate?: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void};
  /**
   * Callback function, called when a row has been updated.
   * Default value: null
   */
  onRowUpdated?: {(index: number, row: GridRow): void};
  /**
   * Callback function, which is called when a column has been initialized. This function can be used to customize the column settings.
   * Default value: null
   */
  onColumnInit?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which called when a column has been inserted.
   * Default value: null
   */
  onColumnInserted?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a column has been removed.
   * Default value: null
   */
  onColumnRemoved?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a column has been updated.
   * Default value: null
   */
  onColumnUpdated?: {(index: number, column: GridColumn): void};
  /**
   * Callback function, which is called when a command is executed. The name argument is the command's name. The command argument is the command's function. details are built in command arguments passed by the Grid. The handled parameter allows you to cancel built-in command, because when you set it to true the Grid will not execute the default command's behavior.
   * Default value: null
   */
  onCommand?: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void};
  /**
   * Describes the paging settings.
   * Default value: [object Object]
   */
  paging?: GridPaging;
  /**
   * Describes the pager settings.
   * Default value: [object Object]
   */
  pager?: GridPager;
  /**
   * Sets the row details.
   * Default value: [object Object]
   */
  rowDetail?: GridRowDetail;
  /**
   * Sets the scroll mode settings.
   * Default value: physical
   */
  scrolling?: Scrolling;
  /**
   * Describes the column header settings.
   * Default value: [object Object]
   */
  columnHeader?: GridColumnHeader;
  /**
   * Describes the settings for the group header.
   * Default value: [object Object]
   */
  groupHeader?: GridGroupHeader;
  /**
   * Describes the header settings of the grid.
   * Default value: [object Object]
   */
  header?: GridHeader;
  /**
   * Describes the footer settings of the grid.
   * Default value: [object Object]
   */
  footer?: GridFooter;
  /**
   * The rows property is used to describe all rows displayed in the grid.
   * Default value: 
   */
  rows?: GridRow[];
  /**
   * Describes the selection settings.
   * Default value: [object Object]
   */
  selection?: GridSelection;
  /**
   * Describes sorting settings.
   * Default value: [object Object]
   */
  sorting?: GridSorting;
  /** 
   * This event is triggered, when the edit begins.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onbeginedit?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
   * @param ev. The custom event. Custom data event was created with: ev.detail(started, finished, originalEvent)
   *  started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
   *  finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on the header of a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The clicked column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncolumnclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on the header of a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, originalEvent)
   *  column - The double-clicked column.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncolumndoubleclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a column.
   * @param ev. The custom event. Custom data event was created with: ev.detail(column, oldWidth, width)
   *  column - The resized column.
   *  oldWidth - The old width of the column.
   *  width - The new width of the column.
   */
  oncolumnresize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The expanded row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The collapsed row. 
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowcollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a row of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a row of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The double-clicked row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowdoubleclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user resized a row.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, oldHeight, height)
   *  row - The resized row.
   *  oldHeight - The old height of the row.
   *  height - The new height of the row.
   */
  onrowresize?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user clicks on a cell of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The clicked cell.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncellclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user double clicks on a cell of the grid.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The double-clicked cell. 
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncelldoubleclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the edit ends.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, column, cell)
   *  row - The edited row.
   *  column - The edited column.
   *  cell - The edited cell.
   */
  onendedit?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a filter is added or removed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
   */
  onfilter?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the grid is resized.
   * @param ev. The custom event.    */
  onresize: ((ev: Event) => any) | null;
  /** 
   * This event is triggered when the user touches and holds on the row for at least 300ms.
   * @param ev. The custom event. Custom data event was created with: ev.detail(row, originalEvent)
   *  row - The tapped row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  onrowtap?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user touches and holds on the cell for at least 300ms.
   * @param ev. The custom event. Custom data event was created with: ev.detail(cell, originalEvent)
   *  cell - The tapped row.
   *  originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
   */
  oncelltap?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user changes the pages.
   * @param ev. The custom event.    */
  onpage?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when a sorting column is added or removed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(columns, data)
   *  columns - Array of columns.
   *  data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
   */
  onsort?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the bottom of the grid.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered, when the user reaches the top of the grid.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string} position?. 'near' or 'far'
   * @returns {boolean}
   */
  addNewRow(position?: string): boolean;
  /**
   * Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
   * @param {number} count. The count of unbound rows.
   * @param {string} position?. 'near' or 'far'
   * @returns {boolean}
   */
  addUnboundRow(count: number, position?: string): boolean;
  /**
   * Adds a filter to a column. This method will apply a filter to the Grid data.
   * @param {string} dataField. column bound data field
   * @param {string} filter. Filter expression like: 'startsWith B'
   * @param {boolean} refreshFilters?. 
   */
  addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
  /**
   * Auto-sizes grid rows. This method will update the <em>height</em> of all Grid rows.
   */
  autoSizeRows(): void;
  /**
   * Auto-sizes grid columns. This method will update the <em>width</em> of all Grid columns.
   */
  autoSizeColumns(): void;
  /**
   * Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
   */
  beginUpdate(): void;
  /**
   * Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  beginEdit(rowId: string | number, dataField?: string): boolean;
  /**
   * Clears all filters. Refreshes the view and updates all filter input components.
   */
  clearFilter(): void;
  /**
   * Clears the selection that user have made. All row, cell and column selection highlights will be removed.
   */
  clearSelection(): void;
  /**
   * Cancels the editing. This method closes the cell editor and cancels the changes.
   */
  cancelEdit(): void;
  /**
   * Checks a TreeGrid row. This method updates the row's check-box.
   * @param {string | number} rowId. row bound id
   */
  checkRow(rowId: string | number): void;
  /**
   * Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
   */
  checkAllRows(): void;
  /**
   * Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
   */
  clearRows(): void;
  /**
   * Closes the column drop-down menu.
   */
  closeMenu(): void;
  /**
   * Collapses a TreeGrid or Grouping row.
   * @param {string | number} rowId. row bound id
   */
  collapseRow(rowId: string | number): void;
  /**
   * Collapses all TreeGrid or Grouping rows.
   */
  collapseAllRows(): void;
  /**
   * Creates a Chart, when charting is enabled.
   * @param {string} type. Chart's type
   * @param {any[]} dataSource?. Chart's data source
   */
  createChart(type: string, dataSource?: any[]): void;
  /**
   * Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
   * @param {string | number} rowId. row bound id
   */
  deleteRow(rowId: string | number): void;
  /**
   * Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   * @returns {boolean}
   */
  ensureVisible(rowId: string | number, dataField?: string): boolean;
  /**
   * Ends the editing. This method confirms all changes and closes the opened cell editor(s).
   */
  endEdit(): void;
  /**
   * Ends the update operation. This method will resume the rendering and will refresh the Grid.
   * @param {boolean} refresh?. The flag that control the calls of the refresh method.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Expands a TreeGrid or Grouping row.
   * @param {string | number} rowId. row bound id
   */
  expandRow(rowId: string | number): void;
  /**
   * Expands all TreeGrid or Grouping rows.
   */
  expandAllRows(): void;
  /**
   * Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the <em>dataExport</em> property.
   * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
   */
  exportData(Dataformat: string): void;
  /**
   * Gets an array of columns with applied sorting.
   * @returns 
   */
  getSortedColumns(): {[dataField: string]: { sortOrder: string, sortIndex: number }};
  /**
   * Gets the selection.
   * @returns {any}
   */
  getSelection(): any;
  /**
   * Gets an array of columns with applied filters.
   * @returns {any}
   */
  getFilteredColumns(): any;
  /**
   * Gets an array of rows, which are visible and match the applied filter.
   * @returns {any}
   */
  getVisibleRows(): any;
  /**
   * Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
   * @returns {any}
   */
  getViewRows(): any;
  /**
   * Gets the changes from the batch edit.
   * @returns 
   */
  getBatchEditChanges(): { upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] };
  /**
   * Gets whether a column's drop-down menu is opened.
   * @returns {boolean}
   */
  hasMenu(): boolean;
  /**
   * Hides the Details of a Row, when row details are enabled.
   * @param {string | number} rowId. row bound id
   */
  hideDetail(rowId: string | number): void;
  /**
   * Opens a column drop-down menu.
   * @param {string} dataField. column bound data field
   */
  openMenu(dataField: string): void;
  /**
   * Prints the Grid data. The method uses the options of the <em>dataExport</em> property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the <em>dataExport</em> property.
   */
  print(): void;
  /**
   * Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
   */
  render(): void;
  /**
   * Refreshes the grid with the current property values. This method will refresh the Grid layout.
   */
  refresh(): void;
  /**
   * Refreshes the grid cells in view. The method is useful for live-updates of cell values.
   */
  refreshView(): void;
  /**
   * Removes a column filter. 
   * @param {string} dataField. column bound data field
   * @param {boolean} refreshFilters?. 
   */
  removeFilter(dataField: string, refreshFilters?: boolean): void;
  /**
   * Reverts the batch edit changes. This method cancels all changes made by the end-user.
   */
  revertBatchEdit(): void;
  /**
   * Saves the batch edit changes. This method confirms the editing changes made by the end-user.
   */
  saveBatchEdit(): void;
  /**
   * Selects a row, cell or column.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  select(rowId: string | number, dataField?: string): void;
  /**
   * Selects a range of rows, cells or columns. The result of the method depends on the <em>selection</em> configuration of the Grid.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField. column bound data field
   * @param {string | number} endRowId. row bound id
   * @param {string} endDataField. column bound data field
   */
  selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
  /**
   * Shows the Details of a Row, when row details are enabled.
   * @param {string | number} rowId. row bound id
   */
  showDetail(rowId: string | number): void;
  /**
   * Unselects a row, cell or column.
   * @param {string | number} rowId. row bound id
   * @param {string} dataField?. column bound data field
   */
  unselect(rowId: string | number, dataField?: string): void;
  /**
   * Unchecks a TreeGrid row. Sets its check-box to false.
   * @param {string | number} rowId. row bound id
   */
  uncheckRow(rowId: string | number): void;
  /**
   * Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
   */
  uncheckAllRows(): void;
  /**
   * Toggles a TreeGrid row. When this method is called, the row is expanded, if it's state is collapsed and collapsed if it's state is expanded.
   * @param {string | number} rowId. row bound id
   */
  toggleRow(rowId: string | number): void;
}

/**An object containing settings related to the grid's appearance. */
export interface GridAppearance {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Starting row index of alternating colors.
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Ending row index of alternating colors.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * number of row color alternations.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Enables sticky columns.
   * Default value: false
   */
  allowColumnStickyPosition?: boolean;
  /**
   * Enables row hover effect. Applies a hover style to the cells.
   * Default value: false
   */
  allowHover?: boolean;
  /**
   * Enables header hover effect. Applies a hover style to the headers.
   * Default value: true
   */
  allowHeaderHover?: boolean;
  /**
   * Enables row toggle animation. This animation starts when you expand/collapse a row in TreeGrid/Grouping mode.
   * Default value: false
   */
  allowRowToggleAnimation?: boolean;
  /**
   * Enables row detail toggle animation. This animation starts when you expand/collapse a row in TreeGrid/Grouping mode.
   * Default value: false
   */
  allowRowDetailToggleAnimation?: boolean;
  /**
   * Enables sorting animation. Data records are sorted with animation, when sorting is applied.
   * Default value: false
   */
  allowSortAnimation?: boolean;
  /**
   * Enables column label animation. The label is moved to 'left' with animation, when the column header's drop-down button is displayed on hover or sorting is applied.
   * Default value: true
   */
  allowColumnLabelAnimation?: boolean;
  /**
   * Enables column menu animation. When you click on the column header's drop-down button, the menu is animated.
   * Default value: true
   */
  allowColumnMenuAnimation?: boolean;
  /**
   * Enables column sort button animation. When you click on a sortable column to change the sort order, the sort button is animated.
   * Default value: true
   */
  allowColumnSortButtonAnimation?: boolean;
  /**
   * Enables column action button animation. The drop-down button displayed on column header hover is optionally animated.
   * Default value: true
   */
  allowColumnActionButtonAnimation?: boolean;
  /**
   * Enables column filter button animation.
   * Default value: true
   */
  allowColumnFilterButtonAnimation?: boolean;
  /**
   * If enabled, automatically shows column sort button. The sort button is displayed only when the column is sorted. If the property's value is false, sort button will be always displayed to indicate that sorting is possible.
   * Default value: true
   */
  autoShowColumnSortButton?: boolean;
  /**
   * If enabled, automatically shows column action button.
   * Default value: true
   */
  autoShowColumnActionButton?: boolean;
  /**
   * If enabled, automatically shows column filter button.
   * Default value: true
   */
  autoShowColumnFilterButton?: boolean;
  /**
   * Generates labels as 'numbers' or 'letters'. This property affects the rendering of the row header.
   * Default value: "number"
   */
  autoGenerateRowLabelMode?: string;
  /**
   * Generates labels as 'numbers' or 'letters.  This property affects the rendering of the column header.
   * Default value: "letter"
   */
  autoGenerateColumnLabelMode?: string;
  /**
   * Sets the visibility of the loading indicator. This is the Loading... image displayed in the Grid while loading data.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets the loading indicator label.  This is the Text displayed while loading data.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Sets the placeholder of the Grid. The placeholder is displayed when the Grid is empty.
   * Default value: "No Rows"
   */
  placeholder?: string;
  /**
   * Sets the duration of sorting animation. This property is related to the allowSortAnimation property.
   * Default value: 500
   */
  sortAnimationDuration?: number;
  /**
   * Shows or hides Row header.
   * Default value: false
   */
  showRowHeader?: boolean;
  /**
   * Shows row indexes in the row header. The showRowHeader property should be true
   * Default value: false
   */
  showRowHeaderNumber?: boolean;
  /**
   * Shows edit icon when a cell or row is in edit state.
   * Default value: true
   */
  showRowHeaderEditIcon?: boolean;
  /**
   * Shows select icon when the pointer is over the row header cell.
   * Default value: false
   */
  showRowHeaderSelectIcon?: boolean;
  /**
   * Shows focus icon on cell or row focus.
   * Default value: false
   */
  showRowHeaderFocusIcon?: boolean;
  /**
   * Shows column header lines.
   * Default value: true
   */
  showColumnHeaderLines?: boolean;
  /**
   * Shows column lines.
   * Default value: true
   */
  showColumnLines?: boolean;
  /**
   * Shows row lines.
   * Default value: true
   */
  showRowLines?: boolean;
  /**
   * Shows filtered column background, when filter is applied.
   * Default value: true
   */
  showFilterColumnBackground?: boolean;
  /**
   * Shows sorted column background, when sorting is applied.
   * Default value: true
   */
  showSortColumnBackground?: boolean;
  /**
   * Shows frozen column background, when the Grid has frozen columns.
   * Default value: true
   */
  showFrozenColumnBackground?: boolean;
  /**
   * Shows filtered row background, when the Grid has frozen rows.
   * Default value: true
   */
  showFrozenRowBackground?: boolean;
  /**
   * Shows column sort button.
   * Default value: true
   */
  showColumnSortButton?: boolean;
  /**
   * Shows column filter button.
   * Default value: true
   */
  showColumnFilterButton?: boolean;
  /**
   * Shows column description button. The button's style is customizable through the Grid CSS.
   * Default value: false
   */
  showColumnDescriptionButton?: boolean;
  /**
   * Shows column icon within the column's header.
   * Default value: false
   */
  showColumnIcon?: boolean;
  /**
   * Shows column custom button. User-defined button shown in the column header.
   * Default value: false
   */
  showColumnCustomButton?: boolean;
  /**
   * Shows column action button. This is the drop-down button displayed in the column header.
   * Default value: true
   */
  showColumnActionButton?: boolean;
  /**
   * Shows tooltips when user hovers columns or cells.
   * Default value: false
   */
  showTooltips?: boolean;
  /**
   * Shows horizontal scrollbar on fixed columns.
   * Default value: false
   */
  showHorizontalScrollBarOnFixedColumns?: boolean;
  /**
   * Shows vertical scrollbar on fixed columns.
   * Default value: false
   */
  showVerticalScrollBarOnFixedColumns?: boolean;
}

/**An object containing settings related to the grid's behavior. */
export interface GridBehavior {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Auto-Resize on double-click of a column's right border.
   * Default value: true
   */
  allowColumnAutoSizeOnDoubleClick?: boolean;
  /**
   * Auto-Resize on double-click of a row's bottom border.
   * Default value: true
   */
  allowRowAutoSizeOnDoubleClick?: boolean;
  /**
   * Sets the column resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  columnResizeMode?: GridResizeMode;
  /**
   * Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size
   * Default value: none
   */
  rowResizeMode?: GridResizeMode;
}

/**An object containing settings related to the grid's layout. */
export interface GridLayout {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the Cells Value wrapping. When the property is true, cell value can wrap in multiple lines.
   * Default value: false
   */
  allowCellsWrap?: boolean;
  /**
   * Sets the width of the auto-generated Grid columns.
   * Default value: null
   */
  autoGenerateColumnWidth?: number | null;
  /**
   * Sets the width of the Grid columns.
   * Default value: null
   */
  columnWidth?: any;
  /**
   * Sets the height of the Grid columns.
   * Default value: null
   */
  columnHeight?: any;
  /**
   * Sets the minimum height of the Grid columns.
   * Default value: 30
   */
  columnMinHeight?: any;
  /**
   * Sets the minimum height of the Grid rows.
   * Default value: 30
   */
  rowMinHeight?: number;
  /**
   * Sets the height of the Grid rows. The property can be set to null, auto or a number.
   * Default value: null
   */
  rowHeight?: any;
}

/**The <em>clipboard</em> property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
export interface GridClipboard {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the property is enabled.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc.
   * Default value: fillSeries
   */
  autoFillMode?: GridClipboardAutoFillMode;
  /**
   * Sets or gets a callback on paste.
   * Default value: none
   */
  onPasteValue?: any;
}

export interface GridColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the column's header alignment. Accepts: 'left', 'right', 'center'
   * Default value: left
   */
  align?: HorizontalAlignment;
  /**
   * Sets or gets whether the column can be exported.
   * Default value: true
   */
  allowExport?: boolean;
  /**
   * Sets or gets whether the column can be grouped.
   * Default value: true
   */
  allowGroup?: boolean;
  /**
   * Sets or gets whether the column can be hidden.
   * Default value: true
   */
  allowHide?: boolean;
  /**
   * Sets or gets whether the column can be selected.
   * Default value: true
   */
  allowSelect?: boolean;
  /**
   * Sets or gets whether the column can be edited.
   * Default value: true
   */
  allowEdit?: boolean;
  /**
   * Sets or gets whether the column can be sorted.
   * Default value: true
   */
  allowSort?: boolean;
  /**
   * Sets or gets whether the column can be edited, when header editing is enabled.
   * Default value: true
   */
  allowHeaderEdit?: boolean;
  /**
   * Sets or gets whether the column can be filtered.
   * Default value: true
   */
  allowFilter?: boolean;
  /**
   * Sets or gets whether the column can be reordered.
   * Default value: true
   */
  allowReorder?: boolean;
  /**
   * Sets or gets whether the column can be resized.
   * Default value: true
   */
  allowResize?: boolean;
  /**
   * Sets or gets the column's cells format.
   * Default value: ""
   */
  cellsFormat?: string;
  /**
   * Sets or gets the column's cells alignment. Accepts: 'left', 'right' and 'center'
   * Default value: left
   */
  cellsAlign?: HorizontalAlignment;
  /**
   * Sets or gets the column's cells wrapping. Accepts: true or false.
   * Default value: "false"
   */
  cellsWrap?: string;
  /**
   * Sets or gets the column's cells vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  cellsVerticalAlign?: VerticalAlignment;
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  columnGroup?: string;
  /**
   * Sets or gets the column's data source bound field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Sets or gets the column's data source bound field which will be displayed to the user. When the property is not set, it is equal to the 'dataField'.
   * Default value: ""
   */
  displayField?: string;
  /**
   * Gets the HTML Element. The property returns null when the Column is not in the View.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Sets or gets the column's editor. The property expects 'input', 'autoComplete', 'numberInput', 'checkBox', 'deteTimePicker', 'textArea' or a custom object with 'template' property which defines the editor type, 'onInit' and 'onRender' callback functions.
   * Default value: null
   */
  editor?: any;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the column to left(near) or right(far).
   * Default value: false
   */
  freeze?: Position;
  /**
   * Sets or gets the filter of the column.
   * Default value: ""
   */
  filter?: string;
  /**
   * Sets or gets the column's format function.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets or gets the column's format settings. You can use any of the build in formatting options or to NumberFormat object like that: 'Intl: {  NumberFormat: {  style: \'currency\', currency: \'EUR\' }}' or DateTimeFormat object like that: 'Intl: {  DateTimeFormat: {  dateStyle: \'full\' }}''
   * Default value: [object Object]
   */
  formatSettings?: any;
  /**
   * Sets or gets the column's group.
   * Default value: ""
   */
  group?: string;
  /**
   * Sets or gets the column's icon. Expects CSS class name.
   * Default value: 
   */
  icon?: any;
  /**
   * Sets or gets the text displayed in the column's header.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the minimum width.
   * Default value: 30
   */
  minWidth?: number;
  /**
   * Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null.
   * Default value: null
   */
  sortOrder?: GridColumnSortOrder | null;
  /**
   * Sets or gets whether the column's header action drop-down button is displayed. This button opens the column's menu.
   * Default value: false
   */
  showActionButton?: boolean;
  /**
   * Sets or gets whether the column's header icon is displayed.
   * Default value: false
   */
  showIcon?: boolean;
  /**
   * Sets or gets whether the column's header description button is displayed.
   * Default value: false
   */
  showDescriptionButton?: boolean;
  /**
   * Sets or gets the width. Accepts: 'number', 'px', 'em', 'auto', 'null' values.
   * Default value: 
   */
  width?: any;
  /**
   * Sets or gets the column's template. The property expects the 'id' of HTMLTemplateElement or HTML string which is displayed in the cells.
   * Default value: 
   */
  template?: any;
  /**
   * Sets or gets the column's header vertical alignment. Accepts: 'top', 'bottom' and 'center'
   * Default value: center
   */
  verticalAlign?: VerticalAlignment;
  /**
   * Sets or gets whether the column is visible. Set the property to 'false' to hide the column.
   * Default value: true
   */
  visible?: boolean;
}

/**Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
export interface GridColumnMenu {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Automatically closes the column menu.
   * Default value: true
   */
  autoClose?: boolean;
  /**
   * Sets the data sources to the column menu.
   * Default value: [object Object]
   */
  dataSource?: GridColumnMenuDataSource;
  /**
   * Gets the visibility of the column menu. Returns true, when the column menu is visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets or gets whether the column menu is enabled. If the value is false, the column menu will not be displayed, when user hovers the column.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the width of the column menu.
   * Default value: 250
   */
  width?: number;
  /**
   * Sets the height of the column menu.
   * Default value: null
   */
  height?: number | null;
}

/**Sets the data sources to the column menu. */
export interface GridColumnMenuDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Describes the settings of the column menu customize type
   * Default value: [object Object]
   */
  columnMenuCustomizeType?: GridCommand;
  /**
   * Describes the settings of the column menu item rename.
   * Default value: [object Object]
   */
  columnMenuItemRename?: GridCommand;
  /**
   * Describes the settings of the column menu item edit description.
   * Default value: [object Object]
   */
  columnMenuItemEditDescription?: GridCommand;
  /**
   * Describes the settings of the column menu item duplicate.
   * Default value: [object Object]
   */
  columnMenuItemDuplicate?: GridCommand;
  /**
   * Describes the settings of the column menu item insert left.
   * Default value: [object Object]
   */
  columnMenuItemInsertLeft?: GridCommand;
  /**
   * Describes the settings of the of the column menu item insert right.
   * Default value: [object Object]
   */
  columnMenuItemInsertRight?: GridCommand;
  /**
   * Describes the settings of the column menu item sort ascending.
   * Default value: [object Object]
   */
  columnMenuItemSortAsc?: GridCommand;
  /**
   * Describes the settings of the column menu item sort descending.
   * Default value: [object Object]
   */
  columnMenuItemSortDesc?: GridCommand;
  /**
   * Describes the settings of the column menu item remove sort.
   * Default value: [object Object]
   */
  columnMenuItemRemoveSort?: GridCommand;
  /**
   * Describes the settings of the column menu item filter.
   * Default value: [object Object]
   */
  columnMenuItemFilter?: GridCommand;
  /**
   * Describes the settings of the column menu item remove filter.
   * Default value: [object Object]
   */
  columnMenuItemRemoveFilter?: GridCommand;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemGroupBy?: GridCommand;
  /**
   * Describes the settings of the column menu item group by.
   * Default value: [object Object]
   */
  columnMenuItemRemoveGroupBy?: GridCommand;
  /**
   * Describes the settings of the column menu item hide.
   * Default value: [object Object]
   */
  columnMenuItemHide?: GridCommand;
  /**
   * Describes the settings of the column menu item delete.
   * Default value: [object Object]
   */
  columnMenuItemDelete?: GridCommand;
}

/**Describes the settings of the column menu customize type */
export interface GridCommand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the commant of the column menu customize type.
   * Default value: customizeTypeCommand
   */
  command?: any;
  /**
   * Enables the column menu customize type.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Sets the visibility of the column menu customize type.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the icon of the column menu customize type.
   * Default value: "jqx-icon-customize"
   */
  icon?: string;
  /**
   * Sets the label of the column menu customize type.
   * Default value: ""
   */
  label?: string;
}

export interface GridColumnGroup {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets the align.
   * Default value: center
   */
  align?: HorizontalAlignment;
  /**
   * Sets the name of the column group.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets the name of the parent column group.
   * Default value: ""
   */
  parentGroup?: string;
  /**
   * Sets the vertical align.
   * Default value: center
   */
  verticalAlign?: VerticalAlignment;
}

/**Sets the Grid Charting Data Visualization. */
export interface GridCharting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether charting is enabled.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets the charting colors. Accepts the 'colorScheme' values of our Chart component.
   * Default value: "scheme01"
   */
  colorScheme?: string;
  /**
   * Sets or gets the chart's container.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets the charting dialog.
   * Default value: [object Object]
   */
  dialog?: Dialog;
}

/**Sets or gets the charting dialog. */
export interface Dialog {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the dialog header.
   * Default value: ""
   */
  header?: string;
  /**
   * Sets or gets the dialog height.
   * Default value: 400
   */
  height?: any;
  /**
   * Sets or gets the dialog width.
   * Default value: 400
   */
  width?: any;
  /**
   * Sets or gets the dialog Left position.
   * Default value: center
   */
  left?: any;
  /**
   * Sets or gets the dialog Top position.
   * Default value: center
   */
  top?: any;
  /**
   * Sets or gets whether the dialog is enabled.
   * Default value: true
   */
  enabled?: boolean;
  /**
   * Gets whether the dialog is displayed.
   * Default value: false
   */
  visible?: boolean;
}

/**Sets the TreeGrid checkboxes. */
export interface GridCheckBoxes {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of the TreeGrid checkboxes.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the three-state mode of the TreeGrid checkboxes. In that mode, checking a checkbox affects the parent-child rows checkboxes.
   * Default value: false
   */
  hasThreeStates?: boolean;
}

/**Sets the Grid Data Export options. */
export interface GridDataExport {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets whether the columns header will be exported.
   * Default value: true
   */
  header?: boolean;
  /**
   * Sets whether the export uses the applied filters.
   * Default value: null
   */
  filterBy?: any;
  /**
   * Sets the groups of the exported data.
   * Default value: null
   */
  groupBy?: any;
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxGrid"
   */
  fileName?: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
  /**
   * Sets the expand char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "+"
   */
  expandChar?: string;
  /**
   * Sets the collapse char displayed when the Grid with row hierarchy(TreeGrid / Grouped) is exported.
   * Default value: "-"
   */
  collapseChar?: string;
  /**
   * Exports only the visible data of the Grid.
   * Default value: false
   */
  view?: boolean;
  /**
   * Determines the start row index that will be exported or printed. 'view' should be set to true
   * Default value: false
   */
  viewStart?: number | null;
  /**
   * Determines the end row index that will be exported or printed. 'view' should be set to true
   * Default value: false
   */
  viewEnd?: number | null;
}

/**Describes the grid's editing settings. */
export interface GridEditing {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables row header cells editing.
   * Default value: false
   */
  allowRowHeaderEdit?: boolean;
  /**
   * Enables column headers editing.
   * Default value: false
   */
  allowColumnHeaderEdit?: boolean;
  /**
   * Enables editing.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Enables batch editing. This allows editing multiple grid rows on the client side and sending them with a single server request.
   * Default value: false
   */
  batch?: boolean;
  /**
   * Determines the way editing is initiated.
   * Default value: click
   */
  action?: GridEditingAction;
  /**
   * Describes command keys.
   * Default value: [object Object]
   */
  commandKeys?: GridEditingCommandKeys;
  /**
   * Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits.
   * Default value: [object Object]
   */
  commandBar?: GridEditingCommandBar;
  /**
   * Describes the grid's command column settings. The command column can be used to edit or delete a row.
   * Default value: [object Object]
   */
  commandColumn?: GridEditingCommandColumn;
  /**
   * Sets the grid's edit mode.
   * Default value: cell
   */
  mode?: GridEditingMode;
  /**
   * Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click.
   * Default value: [object Object]
   */
  addNewRow?: GridEditingAddNewRow;
  /**
   * Describes dialog's editing settings.
   * Default value: [object Object]
   */
  dialog?: Dialog;
  /**
   * Describes add dialog's settings
   * Default value: [object Object]
   */
  addDialog?: Dialog;
  /**
   * Describes delete dialog's settings
   * Default value: [object Object]
   */
  deleteDialog?: Dialog;
}

/**Describes command keys. */
export interface GridEditingCommandKeys {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Describes the edit command key.
   * Default value: [object Object]
   */
  commandKeyEdit?: GridCommandKey;
  /**
   * Describes the cancel command key.
   * Default value: [object Object]
   */
  commandKeyCancel?: GridCommandKey;
  /**
   * Describes the update command key.
   * Default value: [object Object]
   */
  commandKeyUpdate?: GridCommandKey;
}

/**Describes the edit command key. */
export interface GridCommandKey {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the name of the edit key command.
   * Default value: "commandKeyEditCommand"
   */
  command?: string;
  /**
   * Sets the key that invokes the edit command.
   * Default value: "F2"
   */
  key?: string;
}

/**Describes the grid's command bar settings. The command bar is a toolbar or statusbar with tools for saving and reverting edits. */
export interface GridEditingCommandBar {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the command bar visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the command bar's position.
   * Default value: near
   */
  position?: LayoutPosition;
  /**
   * Sets what is to be displayed in command bar buttons.
   * Default value: labelAndIcon
   */
  displayMode?: GridCommandDisplayMode;
  /**
   * Sets the command bar's data source.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandBarDataSource;
}

/**Sets the command bar's data source. */
export interface GridEditingCommandBarDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Describes the settings of the command bar's button for adding rows.
   * Default value: [object Object]
   */
  commandBarAddRow?: GridCommand;
  /**
   * Describes the settings of the command bar's button for deleting rows.
   * Default value: [object Object]
   */
  commandBarDeleteRow?: GridCommand;
  /**
   * Describes the settings of the command bar's button for saving changes.
   * Default value: [object Object]
   */
  commandBarBatchSave?: GridCommand;
  /**
   * Describes the settings of the command bar's button for reverting changes.
   * Default value: [object Object]
   */
  commandBarBatchRevert?: GridCommand;
}

/**Describes the grid's command column settings. The command column can be used to edit or delete a row. */
export interface GridEditingCommandColumn {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the command column visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables inline display of the command column.
   * Default value: false
   */
  inline?: boolean;
  /**
   * Sets the command column's position.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets what is to be displayed in command column buttons.
   * Default value: icon
   */
  displayMode?: GridCommandDisplayMode;
  /**
   * Sets the command column's data source.
   * Default value: [object Object]
   */
  dataSource?: GridEditingCommandColumnDataSource;
  /**
   * Sets the width of the command column.
   * Default value: null
   */
  width?: number | null;
}

/**Sets the command column's data source. */
export interface GridEditingCommandColumnDataSource {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Describes the settings of the command column's button displayed in the column's header. By default, this Command opens a Menu with Column Chooser.
   * Default value: [object Object]
   */
  commandColumnMenu?: GridCommand;
  /**
   * Describes the settings of the command column's button for editing rows.
   * Default value: [object Object]
   */
  commandColumnEdit?: GridCommand;
  /**
   * Describes the settings of the command column's button for deleting rows.
   * Default value: [object Object]
   */
  commandColumnDelete?: GridCommand;
  /**
   * Describes the settings of the command column's button for updating rows.
   * Default value: [object Object]
   */
  commandColumnUpdate?: GridCommand;
  /**
   * Describes the settings of the command column's button for canceling edits.
   * Default value: [object Object]
   */
  commandColumnCancel?: GridCommand;
  /**
   * Describes the settings of the command column's row menu button.
   * Default value: [object Object]
   */
  commandColumnRowMenu?: GridCommand;
  /**
   * Describes the settings of the command column's custom button.
   * Default value: [object Object]
   */
  commandColumnCustom?: GridCommand;
}

/**Describes the settings of the 'Add New Row' UI element which enables the quick adding of rows to the Grid with a single click. */
export interface GridEditingAddNewRow {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the position of the 'Add New Row' UI element.
   * Default value: both
   */
  position?: LayoutPosition;
  /**
   * Makes the 'Add New Row' UI element visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the label of the 'Add New Row' UI element.
   * Default value: ""
   */
  label?: string;
}

/**Describes the grid's filtering settings. */
export interface GridFiltering {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables filtering.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * An array of filtering conditions to apply to the grid. Each member of the filter array is an array with two members. The first one is the column dataField to apply the filter to. The second one is the filtering condition.
   * Default value: 
   */
  filter?: any[];
  /**
   * (In Development)Describes the filter row's settings.
   * Default value: [object Object]
   */
  filterRow?: GridFilteringFilterRow;
  /**
   * Describes the settings for the filter menu.
   * Default value: [object Object]
   */
  filterMenu?: GridFilteringFilterMenu;
  /**
   * (In Development)Describes the settings for the filter builder.
   * Default value: [object Object]
   */
  filterBuilder?: GridFilteringFilterBuilder;
}

/**(In Development)Describes the filter row's settings. */
export interface GridFilteringFilterRow {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the filter row visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Makes the filter row's menu visible.
   * Default value: false
   */
  menuVisible?: boolean;
  /**
   * Sets the way filtering through the filter row is applied.
   * Default value: auto
   */
  applyMode?: GridFilteringFilterRowApplyMode;
  /**
   * Sets the delay (in milliseconds) before applying filtering (when filtering.filterRow.applyMode is 'auto').
   * Default value: 300
   */
  autoApplyModeDelay?: number;
}

/**Describes the settings for the filter menu. */
export interface GridFilteringFilterMenu {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of the filter menu.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the button text of the filter menu.
   * Default value: cancel,clear,filter
   */
  buttons?: string[];
  /**
   * Sets the filter menu datasource.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets the width of the filter menu.
   * Default value: 250
   */
  width?: number;
  /**
   * Sets the height of the filter menu.
   * Default value: 200
   */
  height?: number;
}

/**(In Development)Describes the settings for the filter builder. */
export interface GridFilteringFilterBuilder {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of the filter builder.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the height of the filter builder.
   * Default value: null
   */
  height?: number | null;
}

/**Describes the grid's grouping settings. */
export interface GridGrouping {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables grouping.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Enables collapsing of groups.
   * Default value: false
   */
  allowCollapse?: boolean;
  /**
   * Automatically expands all groups.
   * Default value: false
   */
  autoExpandAll?: boolean;
  /**
   * Sets the group expand mode.
   * Default value: buttonClick
   */
  expandMode?: GridGroupingExpandMode;
  /**
   * Sets the group row height.
   * Default value: 50
   */
  groupRowHeight?: any;
  /**
   * Sets the indent of the group toggle button.
   * Default value: 16
   */
  toggleButtonIndent?: number;
  /**
   * Sets the indent of the group.
   * Default value: 16
   */
  groupIndent?: number;
  /**
   * Describes the group bar's settings.
   * Default value: [object Object]
   */
  groupBar?: GridGroupingGroupBar;
  /**
   * Describes the group panel's settings.
   * Default value: [object Object]
   */
  groupPanel?: GridGroupingGroupPanel;
  /**
   * Describes the group summary row's settings.
   * Default value: [object Object]
   */
  summaryRow?: GridGroupingSummaryRow;
}

/**Describes the group bar's settings. */
export interface GridGroupingGroupBar {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the group bar visible.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Enables column drag and drop.
   * Default value: false
   */
  allowColumnDragDrop?: boolean;
  /**
   * Enables column close buttons.
   * Default value: true
   */
  allowColumnCloseButtons?: boolean;
}

/**Describes the group panel's settings. */
export interface GridGroupingGroupPanel {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Makes the group panel visible.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the group summary row's settings. */
export interface GridGroupingSummaryRow {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables inline display of the group summary row.
   * Default value: true
   */
  inline?: boolean;
  /**
   * Makes the group summary row visible.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the paging settings. */
export interface GridPaging {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables pagination.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Describes the spinner pagination settings.
   * Default value: [object Object]
   */
  spinner?: GridPagingSpinner;
  /**
   * Sets the number of rows per page.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Sets the start page.
   * Default value: 0
   */
  pageIndex?: number;
}

/**Describes the spinner pagination settings. */
export interface GridPagingSpinner {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables spinner pagination.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the step of page
   * Default value: 1
   */
  step?: number;
}

/**Describes the pager settings. */
export interface GridPager {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the ellipsis display mode.
   * Default value: both
   */
  autoEllipsis?: GridPagerAutoEllipsis;
  /**
   * Sets the position of pager.
   * Default value: far
   */
  position?: LayoutPosition;
  /**
   * Sets a template for the pager.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
  /**
   * Describes the settings for the 'rows per page' option.
   * Default value: [object Object]
   */
  pageSizeSelector?: GridPagerPageSizeSelector;
  /**
   * Describes the summary settings.
   * Default value: [object Object]
   */
  summary?: GridPagerSummary;
  /**
   * Describes the navigation buttons settings.
   * Default value: [object Object]
   */
  navigationButtons?: GridPagerNavigationButtons;
  /**
   * Describes the settings about navigation input option.
   * Default value: [object Object]
   */
  navigationInput?: GridPagerNavigationInput;
  /**
   * Describes the settings for the numeric page buttons.
   * Default value: [object Object]
   */
  pageIndexSelectors?: GridPagerPageIndexSelectors;
  /**
   * Sets the visibility of pager.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings for the 'rows per page' option. */
export interface GridPagerPageSizeSelector {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of the 'rows per page' option.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets the count of the 'rows per page' option.
   * Default value: 10,20,50
   */
  dataSource?: any;
  /**
   * Sets the position of the 'rows per page' option.
   * Default value: far
   */
  position?: Position;
}

/**Describes the summary settings. */
export interface GridPagerSummary {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the position of the summary.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets the visibility of the summary.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the navigation buttons settings. */
export interface GridPagerNavigationButtons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the navigation buttons position.
   * Default value: both
   */
  position?: LayoutPosition;
  /**
   * Describes the settings about buttons 'previous page' and 'next page'.
   * Default value: [object Object]
   */
  prevNextButtons?: GridPagerNavigationButtonsPrevNextButtons;
  /**
   * Describes the settings about buttons 'first page' and 'last page'.
   * Default value: [object Object]
   */
  firstLastButtons?: GridPagerNavigationButtonsFirstLastButtons;
  /**
   * Describes the labels settings for navigation buttons.
   * Default value: [object Object]
   */
  labels?: GridPagerNavigationButtonsLabels;
}

/**Describes the settings about buttons 'previous page' and 'next page'. */
export interface GridPagerNavigationButtonsPrevNextButtons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of 'previous page' and 'next page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the settings about buttons 'first page' and 'last page'. */
export interface GridPagerNavigationButtonsFirstLastButtons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of 'first page' and 'last page' buttons.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the labels settings for navigation buttons. */
export interface GridPagerNavigationButtonsLabels {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of labels for navigation buttons.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings about navigation input option. */
export interface GridPagerNavigationInput {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the position of navigation input option.
   * Default value: far
   */
  position?: Position;
  /**
   * Sets the visibility of navigation input option.
   * Default value: false
   */
  visible?: boolean;
}

/**Describes the settings for the numeric page buttons. */
export interface GridPagerPageIndexSelectors {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of numeric page buttons.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the number of visible page buttons.
   * Default value: 10
   */
  dataSource?: any;
}

/**Sets the row details. */
export interface GridRowDetail {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables the row details.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the height of the row details.
   * Default value: 200
   */
  height?: number;
  /**
   * Sets the position of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: near
   */
  position?: Position;
  /**
   * Sets the template of the row details.
   * Default value: 
   */
  template?: any;
  /**
   * Sets the visibility of the Column which allows you to dynamically expand/collapse the row details.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Sets the row details dialog. When enabled, row details will be displayed in a Dialog.
   * Default value: [object Object]
   */
  dialog?: Dialog;
}

/**Describes the column header settings. */
export interface GridColumnHeader {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the column header visibility.
   * Default value: true
   */
  visible?: boolean;
}

/**Describes the settings for the group header. */
export interface GridGroupHeader {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the visibility of the group header.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the group header.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

/**Describes the header settings of the grid. */
export interface GridHeader {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the header visibility.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the header.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

/**Describes the footer settings of the grid. */
export interface GridFooter {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the footer visibility.
   * Default value: false
   */
  visible?: boolean;
  /**
   * Sets a template for the footer.
   * Default value: 
   */
  template?: string | HTMLTemplateElement;
}

export interface GridRow {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the row can be expanded or collapsed.
   * Default value: true
   */
  allowToggle?: boolean;
  /**
   * Sets or gets the row can be resized.
   * Default value: true
   */
  allowResize?: boolean;
  /**
   * Sets or gets the row can be selected.
   * Default value: true
   */
  allowSelect?: boolean;
  /**
   * Sets or gets the row can be checked. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  allowCheck?: boolean;
  /**
   * Sets or gets the row's check state. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: true
   */
  checked?: boolean;
  /**
   * Gets the Row's Cells array.
   * Default value: []
   */
  cells?: GridCell[];
  /**
   * Gets the row's children array of GridRow. This property is associated to the TreeGrid and Groupng mode of the Grid.
   * Default value: null
   */
  children?: any;
  /**
   * Gets the row's bound data.
   * Default value: null
   */
  data?: any;
  /**
   * Sets or gets the row's detail height.
   * Default value: 200
   */
  detailHeight?: number;
  /**
   * Sets or gets the row's detail template.
   * Default value: null
   */
  detailTemplate?: string | HTMLTemplateElement | null;
  /**
   * Gets the HTML Element. The property returns null when the Row is not in the View.
   * Default value: null
   */
  element?: any;
  /**
   * Sets or gets the row is expanded. This property is used when the Grid is in Tree Grid or Grouped mode.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Gets the row's header element.
   * Default value: null
   */
  header?: HTMLElement;
  /**
   * Sets or gets the row's height.
   * Default value: 30
   */
  height?: number;
  /**
   * Gets the row's bound index.
   * Default value: -1
   */
  index?: number;
  /**
   * Gets the row's bound id.
   * Default value: 
   */
  id?: string | number;
  /**
   * Gets whether the row is leaf row in TreeGrid or Grouping mode.
   * Default value: false
   */
  leaf?: boolean;
  /**
   * Sets or gets the row's maximum height.
   * Default value: 100
   */
  maxHeight?: number;
  /**
   * Sets or gets the row's minimum height.
   * Default value: 30
   */
  minHeight?: number;
  /**
   * Sets or gets the Freeze mode. Accepts: 'near', 'far', true and false. Freezes/Pins the row to top(near) or bottom(far).
   * Default value: false
   */
  freeze?: Position;
  /**
   * Sets or gets whether the row is selected.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Sets or gets whether the row detail is displayed.
   * Default value: false
   */
  showDetail?: boolean;
  /**
   * Sets or gets whether the row is visible. Set the property to 'false' to hide the row.
   * Default value: true
   */
  visible?: boolean;
  /**
   * Gets the visible index of the row.
   * Default value: -1
   */
  visibleIndex?: number;
}

export interface GridCell {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * "Sets or gets the horizontal alignment. Allowed values are: 'left', 'center' or 'right'".
   * Default value: "'left'"
   */
  align?: string;
  /**
   * Gets the column associated to the cell.
   * Default value: null
   */
  column?: any;
  /**
   * Sets or gets the cell's text color.
   * Default value: "''"
   */
  color?: string;
  /**
   * Sets or gets the cell's background.
   * Default value: "''"
   */
  background?: string;
  /**
   * Sets or gets the cell's borderColor.
   * Default value: "''"
   */
  borderColor?: string;
  /**
   * Sets or gets the cell's colSpan.
   * Default value: 1
   */
  colSpan?: number;
  /**
   * Sets or gets the cell's editor.
   * Default value: null
   */
  editor?: any;
  /**
   * Gets the HTMLElement associated to the cell.
   * Default value: null
   */
  element?: HTMLElement;
  /**
   * Gets a formatted number or Date.
   * Default value: null
   */
  getFormattedValue?: {(value: any, type: string): void};
  /**
   * Gets whether the cell is in edit mode.
   * Default value: false
   */
  isEditing?: boolean;
  /**
   * Gets the old value of the cell
   * Default value: null
   */
  oldValue?: any;
  /**
   * Sets or gets the cell's fontSize
   * Default value: "''"
   */
  fontSize?: string;
  /**
   * Sets or gets the cell's fontWeight
   * Default value: "''"
   */
  fontWeight?: string;
  /**
   * Sets or gets the cell's fontFamily
   * Default value: "''"
   */
  fontFamily?: string;
  /**
   * Sets or gets the cell's fontStyle
   * Default value: "''"
   */
  fontStyle?: string;
  /**
   * "Sets or gets whether the cell can be edited.".
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets the row object associated to the cell.
   * Default value: null
   */
  row?: any;
  /**
   * Sets or gets the row span.
   * Default value: 1
   */
  rowSpan?: number;
  /**
   * Sets or gets whether the cell is selected.
   * Default value: false
   */
  selected?: boolean;
  /**
   * "Each property is an object{name: string, value: any}. This function allows you to update multiple properties with single refresh.".
   * Default value: 
   */
  setProperties?: {(properties: {name: string, value: string}[]): void};
  /**
   * "Allowed values are: 'top', 'middle' or 'bottom'".
   * Default value: ""
   */
  tooltip?: string;
  /**
   * The cell's value
   * Default value: null
   */
  value?: any;
  /**
   * "Sets or gets the vertical alignment. Allowed values are: 'top', 'middle' or 'bottom'".
   * Default value: "'middle'"
   */
  verticalAlign?: string;
}

/**Describes the selection settings. */
export interface GridSelection {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables the selection option.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row header is allowed.
   * Default value: false
   */
  allowRowHeaderSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Column header is allowed.
   * Default value: false
   */
  allowColumnHeaderSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a Row is allowed.
   * Default value: true
   */
  allowRowSelection?: boolean;
  /**
   * Sets or gets whether selection by clicking on a cell is allowed.
   * Default value: false
   */
  allowCellSelection?: boolean;
  /**
   * Sets or gets whether selection by dragging(like in Excel) is allowed.
   * Default value: true
   */
  allowDragSelection?: boolean;
  /**
   * Sets or gets whether selection by dragging will automatically scroll the Grid view.
   * Default value: true
   */
  allowDragSelectionAutoScroll?: boolean;
  /**
   * Sets or gets whether the Cells selection bottom-right corner selection 'Drag Handle' (litte square like in Excel) is displayed. That handle allows you to resize the selection horizontally or vertically
   * Default value: true
   */
  allowCellDragSelectionHandle?: boolean;
  /**
   * Sets or gets whether the Cells selection can be dragged and dropped. Drag happens when the cursor is moved to the bottom of the cells selection. The cursor is changed to a drag cursor. Press the button and hold and move the selection. By default the dragged cell values are copied on drop.
   * Default value: true
   */
  allowCellDragDropSelectionHandle?: boolean;
  /**
   * Sets or gets whether the Cells selection will be auto-filled with values on drop when dragging through the 'Drag Handle'.
   * Default value: true
   */
  allowCellDragSelectionAutoFill?: boolean;
  /**
   * Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many' 
   * Default value: many
   */
  mode?: GridSelectionMode;
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action?: GridSelectionAction;
  /**
   * 
   * Default value: [object Object]
   */
  checkBoxes?: GridSelectionCheckBoxes;
  /**
   * 
   * Default value: ""
   */
  selected?: string;
}

export interface GridSelectionCheckBoxes {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the checkboxes are automatically displayed only when the mouse is over the Grid. When false, checkboses are always displayed
   * Default value: false
   */
  autoShow?: boolean;
  /**
   * Sets or gets whether the checkboxes selection is enabled. In that mode a new column with checkboxes is displayed.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API.
   * Default value: click
   */
  action?: GridSelectionAction;
  /**
   * Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox.
   * Default value: page
   */
  selectAllMode?: GridSelectionCheckBoxesSelectAllMode;
  /**
   * Sets or gets whether the position of the checkbox selection column.
   * Default value: near
   */
  position?: Position;
}

/**Describes sorting settings. */
export interface GridSorting {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables sorting.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Sets the sort columns to be sorted.
   * Default value: 
   */
  sort?: string[];
  /**
   * Sets the count of allowed sorting columns.
   * Default value: one
   */
  mode?: GridSortingMode;
  /**
   * Enables switching between the three sort states: ascending, descending and not sorted.
   * Default value: true
   */
  sortToggleThreeStates?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-grid"): Grid;
			querySelector(selectors: "jqx-grid"): Grid | null;	
			querySelectorAll(selectors: "jqx-grid"): NodeListOf<Grid>;
			getElementsByTagName(qualifiedName: "jqx-grid"): HTMLCollectionOf<Grid>;
			getElementsByName(elementName: "jqx-grid"): NodeListOf<Grid>;	
    }
}

/**Sets the row resize mode. split resize mode 'grows' or 'shrinks' the resize element's size and 'shrinks' or 'grows' the next sibling element's size. growAndShrink resize mode 'grows' or 'shrinks' the resize element's size */
export const enum GridResizeMode{
	None = "none",
	Split = "split",
	GrowAndShrink = "growAndShrink"
}

/**Sets or gets whether the copy-pasted values will be auto-filled by using automatic pattern detection. This is used in the Drag&Drop Multiple Cells selection. none does nothing. copy just copies the cells. 'fillSeries' detects and automatically fills the values. For example, if the selection has '1, 2' and the possible positions are more, the pasted values would be '1, 2, 3, 4, etc. */
export const enum GridClipboardAutoFillMode{
	None = "none",
	Copy = "copy",
	FillSeries = "fillSeries"
}

/**Sets or gets whether the position of the checkbox selection column. */
export const enum Position{
	Near = "near",
	Far = "far"
}

/**Sets or gets the sort order of the column. Accepts: 'asc', 'desc' and null. */
export const enum GridColumnSortOrder{
	Asc = "asc",
	Desc = "desc",

}

/**Determines the way editing is initiated. */
export const enum GridEditingAction{
	None = "none",
	Click = "click",
	DblClick = "dblClick"
}

/**Sets what is to be displayed in command column buttons. */
export const enum GridCommandDisplayMode{
	Label = "label",
	Icon = "icon",
	LabelAndIcon = "labelAndIcon"
}

/**Sets the grid's edit mode. */
export const enum GridEditingMode{
	Cell = "cell",
	Row = "row"
}

/**Sets the way filtering through the filter row is applied. */
export const enum GridFilteringFilterRowApplyMode{
	Auto = "auto",
	Click = "click"
}

/**Sets the group expand mode. */
export const enum GridGroupingExpandMode{
	ButtonClick = "buttonClick",
	RowClick = "rowClick"
}

/**Sets the ellipsis display mode. */
export const enum GridPagerAutoEllipsis{
	None = "none",
	Before = "before",
	After = "after",
	Both = "both"
}

/**Sets or gets whether the selection allows you to select 'one', 'many' or a variation of 'many' called 'extended'. 'one' allows you to have only single cell or row selected. 'many'  */
export const enum GridSelectionMode{
	One = "one",
	Many = "many",
	Extended = "extended"
}

/**Sets or gets whether the selection happens on 'click' or 'doubleClick'. 'none' means that selection can happen only through API. */
export const enum GridSelectionAction{
	None = "none",
	Click = "click",
	DoubleClick = "doubleClick"
}

/**Sets or gets whether the checkbox selection selects all rows in the current page or all rows. The 'none' setting disables the header checkbox. */
export const enum GridSelectionCheckBoxesSelectAllMode{
	None = "none",
	Page = "page",
	All = "all"
}

/**Sets the count of allowed sorting columns. */
export const enum GridSortingMode{
	One = "one",
	Many = "many"
}

/**
 Defines a group of grouped items in a panel.
*/
export interface GroupPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the the position of the close button of group panel items.
   * Default value: left
   */
  closeButtonPosition?: GroupPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the group panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Enables or disables the group panel.
   * Default value: false
   */
  disabled?: boolean;
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
   * Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to group by",
   *     "firstBy": "Group by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "collapseAll": "Collapse all",
   *     "expandAll": "Expand all"
   *   }
   * }
   */
  messages?: any;
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
   * @param ev. The custom event.    */
  onapply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
   * @param ev. The custom event.    */
  oncancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Collapse all" button is clicked.
   * @param ev. The custom event.    */
  oncollapseall?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Expand all" button is clicked.
   * @param ev. The custom event.    */
  onexpandall?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-group-panel"): GroupPanel;
			querySelector(selectors: "jqx-group-panel"): GroupPanel | null;	
			querySelectorAll(selectors: "jqx-group-panel"): NodeListOf<GroupPanel>;
			getElementsByTagName(qualifiedName: "jqx-group-panel"): HTMLCollectionOf<GroupPanel>;
			getElementsByName(elementName: "jqx-group-panel"): NodeListOf<GroupPanel>;	
    }
}

/**Sets or gets the the position of the close button of group panel items. */
export const enum GroupPanelCloseButtonPosition{
	Left = "left",
	Right = "right"
}

/**
 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export interface Input extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
   * Default value: 8
   */
  items?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
   * Default value: 1
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or not.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the placeholder of the input.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
   * Default value: 
   */
  query?: string | number;
  /**
   * Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
   * Default value: containsIgnoreCase
   */
  queryMode?: InputQueryMode;
  /**
   * Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled.
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the input type. Input type determines what input can be entered.
   * Default value: ""
   */
  type?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(label, oldLabel, oldValue, value)
   *  label - The label of the new selected item.
   *  oldLabel - The label of the item that was previously selected before the event was triggered.
   *  oldValue - The value of the item that was previously selected before the event was triggered.
   *  value - The value of the new selected item.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down.
   */
  close(): void;
  /**
   * Ensures that the active ( selected ) item is always visible.
   */
  ensureVisible(): void;
  /**
   * Opens the drop down.
   */
  open(): void;
  /**
   * Selects the text inside the input or if it is <b>readonly</b> then the element is focused.
   */
  select(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-input"): Input;
			querySelector(selectors: "jqx-input"): Input | null;	
			querySelectorAll(selectors: "jqx-input"): NodeListOf<Input>;
			getElementsByTagName(qualifiedName: "jqx-input"): HTMLCollectionOf<Input>;
			getElementsByName(elementName: "jqx-input"): NodeListOf<Input>;	
    }
}

/**Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation. */
export const enum InputQueryMode{
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

/**
 Layout splits your content into resizable sections.
*/
export interface Layout extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the options that will be available for selection inside the context menu.
   * Default value: delete
   */
  contextMenuDataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets Layout's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Template"
   */
  itemLabel?: string;
  /**
   * Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
   * Default value: "Layout"
   */
  itemGroupLabel?: string;
  /**
   * A getter that returns an array of all Splitter items inside the Layout.
   * Default value: 
   */
  items?: any;
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
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "delete": "Delete",
   *     "noId": ": requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Determines the placeholder text of the empty items.
   * Default value: "Empty"
   */
  placeholder?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it.
   * Default value: null
   */
  selectedIndex?: any;
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
   * This event is triggered when resizing begins.
   * @param ev. The custom event.    */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when resizing finishes.
   * @param ev. The custom event.    */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - The Splitter item that was the target of a change.
   *  type - A description of the operation that has cause the change.
   */
  onstatechange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldSelectedIndex, selectedIndex)
   *  oldSelectedIndex - The Splitter item that was previously selected.
   *  selectedIndex - The Splitter item that is currently selected.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a the context menu is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an option from the context menu has been clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(target, item, label, value)
   *  target - The Splitter item that was the target of the context menu opening.
   *  item - The Context menu item that was clicked.
   *  label - The label of the context menu that was clicked.
   *  value - The value of the context menu that was clicked.
   */
  onmenuitemclick?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Inserts the specified "jqx-splitter-item" node before the reference "jqx-splitter-item" node.
   * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Removes a child "jqx-splitter-item" node from the Layout.
   * @param {Node} node. The "jqx-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Returns a Splitter Item according to the index that is passed as an argument.
   * @param {any} index. The index of an item.
   */
  getItem(index: any): void;
  /**
   * Returns the index of a Splitter Item that is passed as an argument.
   * @param {any} item. The index of the Splitter item that is passed as an argument.
   */
  getItemIndex(item: any): void;
  /**
   * Insert a new Splitter item at a given position.
   * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
   * @param {number | string} index. The index at which a new item will be inserted.
   * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
   */
  insert(item: any, index: number | string, position?: string): void;
  /**
   * Removes a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
   */
  removeItem(index: any): void;
  /**
   * Removes all items from the Layout
   */
  removeAll(): void;
  /**
   * Selects a Splitter item from the Layout.
   * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
   */
  select(index: any): void;
  /**
   * Unselects the selected item inside the element.
   */
  unselect(): void;
  /**
   * Updates a Splitter item that is inside the Layout.
   * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
   * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
   */
  updateItem(index: any, settings: any): void;
  /**
   * Clears the localStorage of any previous cached states of the element according to it's id.
   */
  clearState(): void;
  /**
   * Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
   * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-layout"): Layout;
			querySelector(selectors: "jqx-layout"): Layout | null;	
			querySelectorAll(selectors: "jqx-layout"): NodeListOf<Layout>;
			getElementsByTagName(qualifiedName: "jqx-layout"): HTMLCollectionOf<Layout>;
			getElementsByName(elementName: "jqx-layout"): NodeListOf<Layout>;	
    }
}

/**
 LET Toggle button with Checked boolean value.
*/
export interface Led extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Determines when the element fires a click event.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the LED.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the content for the 'false' state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template for LED's false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets the LED to indeterminate state.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the content for the 'null' state.
   * Default value: """"
   */
  indeterminateContent?: string;
  /**
   * Sets a custom template for LED's indeterminate state.
   * Default value: null
   */
  indeterminateTemplate?: any;
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
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * If the widgets is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets the shape of LED.
   * Default value: round
   */
  shape?: LedShape;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets the content for the 'true' state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template for LED's true state.
   * Default value: null
   */
  trueTemplate?: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the element's value.
   * Default value: """"
   */
  value?: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-led"): Led;
			querySelector(selectors: "jqx-led"): Led | null;	
			querySelectorAll(selectors: "jqx-led"): NodeListOf<Led>;
			getElementsByTagName(qualifiedName: "jqx-led"): HTMLCollectionOf<Led>;
			getElementsByName(elementName: "jqx-led"): NodeListOf<Led>;	
    }
}

/**Sets the shape of LED. */
export const enum LedShape{
	Round = "round",
	Square = "square"
}

/**
 ListBox allows the user to select one or more items from a list.
*/
export interface ListBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Enables or disables the ability to drop list items inside the target List box.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Determines the number of color alternations in rows.
   * Default value: 0
   */
  alternationCount?: number;
  /**
   * Determines the ending index of color alternations in rows.
   * Default value: 0
   */
  alternationEnd?: number;
  /**
   * Determines the starting index of color alternations in rows
   * Default value: 0
   */
  alternationStart?: number;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the list box.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Determines what happens when an item is dropped.
   * Default value: move
   */
  dropAction?: ListBoxDropAction;
  /**
   * Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
   * Default value: null
   */
  filterCallback?: any;
  /**
   * Determines the filtering mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
   * Default value: null
   */
  groupMember?: string | null;
  /**
   * Determines the visibility of the horizontal Scroll bar.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Sets the height for all list box items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all ListBox items.
   * Default value: 
   */
  items?: {label: string, value: string}[];
  /**
   * A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "overridingProperties": "' property is used by default.",
   *     "invalidIndex": "' method accepts an index of type number or an Array of numbers.",
   *     "indexOutOfBound": "' method.",
   *     "invalidItem": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: """"
   */
  name?: string;
  /**
   * Determines the placeholder that will be shown when the List box is empty.
   * Default value: "No Items"
   */
  placeholder?: string;
  /**
   * Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected depending on the selection mode.
   * Default value: oneOrManyExtended
   */
  selectionMode?: ListSelectionMode;
  /**
   * Determines when listbox selection is achieved - on 'press' or 'release'.
   * Default value: release
   */
  selectionChangeAction?: ListBoxSelectionChangeAction;
  /**
   * Determines whether the items are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Determines the theme for the element. Themes define the look of the elements.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines sorting direction - ascending(asc) or descending(desc)
   * Default value: "asc"
   */
  sortDirection?: string;
  /**
   * Ensures the item with the target index is in view as the first (top) item in the list box.
   * Default value: -1
   */
  topVisibleIndex?: number;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when listbox binding is completed.
   * @param ev. The custom event.    */
  onbindingcomplete?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when selection is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(addedItems, disabled, index, label, removedItems, selected, value)
   *  addedItems - An array of List items that have been selected.
   *  disabled - A flag indicating whether or not the item that caused the change event is disabled.
   *  index - The index of the List item that triggered the event.
   *  label - The label of the List item that triggered the event.
   *  removedItems - An array of List items that have been unselected before the event was fired.
   *  selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
   *  value - The value of the List item that triggered the event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a List item is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(data, item, originalEvent)
   *  data - An object that contains data about the dragging operation like start position, start time, etc.
   *  item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
   *  originalEvent - The original event that initiates the dragging operation.
   */
  ondragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, originalEvent, previousContainer, target)
   *  container - The List box that an item was dragged <strong>to.</strong>
   *  data - An object that contains data about the dragging oepration like start position, start time, etc.
   *  item - The List item that was dragged.
   *  originalEvent - That original event that was fired.
   *  previousContainer - The List box that an item was dragged <strong>from</strong>.
   *  target - The event target.
   */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(disabled, index, label, selected, value)
   *  disabled - Indicates whether the List item that was clicked is disabled or not.
   *  index - Indicates the index of the List item that was clicked.
   *  label - The label of the List item that was clicked.
   *  selected - Indicates whether the List item that was clicked is selected or not.
   *  value - The value of the List item that was clicked.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when an item has been edited.
   * @param ev. The custom event. Custom data event was created with: ev.detail(selected, disabled, index, label, value)
   *  selected - Indicates whether the List item is selected or not.
   *  disabled - Indicates whether the List item is disabled or not.
   *  index - The index of the List item that was edited.
   *  label - The label of the edited List item.
   *  value - The value of the List item that was edited.
   */
  onitemlabelchange?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the list.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the beginning of the list.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the left, inside the listBox.
   * @param ev. The custom event.    */
  onswipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the user swipes to the right, inside the listBox.
   * @param ev. The custom event.    */
  onswiperight?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a ListItem to the end of the list of items inside element.
   * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Removes all items from the listBox.
   */
  clearItems(): void;
  /**
   * Unselects all items.
   */
  clearSelection(): void;
  /**
   * Ensures the target item is visible by scrolling to it.
   * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Returns an item instance from the listBox.
   * @param {string} value. The value of an item from the listBox.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Inserts a new item at a specified index.
   * @param {number} index. The index where the item must be inserted.
   * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
   */
  insert(index: number, items: any): void;
  /**
   * Inserts a new ListItem before another in the list.
   * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
   * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
   * @returns {Node}
   */
  insertBefore<T extends Node>(node: Node, referenceNode: Node | null): T;
  /**
   * Removes an item at a specified index.
   * @param {number} index. The index of the removed item.
   */
  removeAt(index: number): void;
  /**
   * Removes a ListItem from the list of items inside element.
   * @param {Node} node. A ListItem element that is part of the list of items inside the element.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Selects an item from the listBox. 
   * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
   */
  select(item: string | number | HTMLElement): void;
  /**
   * Unselects an item from the listBox. 
   * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
   */
  unselect(item: string | HTMLElement): void;
  /**
   * Updates an item from the listBox.
   * @param {number} index. The index of the item that is going to be updated.
   * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
   */
  update(index: number, details: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-list-box"): ListBox;
			querySelector(selectors: "jqx-list-box"): ListBox | null;	
			querySelectorAll(selectors: "jqx-list-box"): NodeListOf<ListBox>;
			getElementsByTagName(qualifiedName: "jqx-list-box"): HTMLCollectionOf<ListBox>;
			getElementsByName(elementName: "jqx-list-box"): NodeListOf<ListBox>;	
    }
}

/**Determines what happens when an item is dropped. */
export const enum ListBoxDropAction{
	Copy = "copy",
	Move = "move",
	None = "none"
}

/**Determines when listbox selection is achieved - on 'press' or 'release'. */
export const enum ListBoxSelectionChangeAction{
	Press = "press",
	Release = "release"
}

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

/**Sets or gets the ListMenu's scroll buttons behavior. */
export const enum Overflow{
	Auto = "auto",
	Hidden = "hidden",
	Scroll = "scroll"
}

/**
 MaskedTextBox uses a mask to control the input of the user.
*/
export interface MaskedTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether promptChar can be entered as valid input by the user.
   * Default value: false
   */
  allowPromptAsInput?: boolean;
  /**
   * Determines whether the input accepts characters only from the ASCII character set.
   * Default value: false
   */
  asciiOnly?: boolean;
  /**
   * Specifies whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
   * Default value: false
   */
  autoShowMask?: boolean;
  /**
   * Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
   * Default value: excludePromptAndLiterals
   */
  cutCopyMaskFormat?: MaskedTextBoxCutCopyMaskFormat;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the behavior on "Enter" key press. Default mode is "submit".
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
   * Default value: false
   */
  hidePromptOnLeave?: boolean;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Determines whether new user input overwrites the existing input value or not.
   * Default value: false
   */
  isOverwriteMode?: boolean;
  /**
   * Sets label above the element. The label is always visible.
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
   * Defines the mask for the input.
   * Default value: "#####"
   */
  mask?: string;
  /**
   * Indicates whether all required fields of the mask have been populated or not.
   * Default value: false
   */
  maskCompleted?: boolean;
  /**
   * Indicates whether all required and optional fields of the mask have been populated or not.
   * Default value: false
   */
  maskFull?: boolean;
  /**
   * Determines the maximum number of characters that the user can enter.
   * Default value: 5
   */
  maxLength?: number;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * A string that appears inside the input when there's no value and mask. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the prompt char that is used for the mask of the element.
   * Default value: "_"
   */
  promptChar?: string;
  /**
   * If the element is readonly, the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the parsing of user input should stop after the first invalid character or not.
   * Default value: false
   */
  rejectInputOnFirstFailure?: boolean;
  /**
   * Specifies that the input must be filled in before submitting a form
   * Default value: false
   */
  required?: boolean;
  /**
   * Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
   * Default value: false
   */
  resetOnPrompt?: boolean;
  /**
   * Determines whether hitting space character resets the currently selected value from the input or not.
   * Default value: false
   */
  resetOnSpace?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the value of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the value of the input should contain or not the prompt/literals of the mask.
   * Default value: excludePromptAndLiterals
   */
  textMaskFormat?: MaskedTextBoxTextMaskFormat;
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
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /**
   * Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
   * Default value: null
   */
  validation?: any;
  /** 
   * This event is triggered when the value of the Text Box is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, newValue)
   *  oldValue - The previous value before it was changed.
   *  newValue - The new value.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the <b>validation</b> property is set. Indicates whether valiation has passed successfully or not.
   * @param ev. The custom event. Custom data event was created with: ev.detail(success)
   *  success - A flag inidicating whether the validation was successfull or not.
   */
  onvalidation?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element. 
   */
  focus(): void;
  /**
   * Blurs the element. 
   */
  blur(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-masked-text-box"): MaskedTextBox;
			querySelector(selectors: "jqx-masked-text-box"): MaskedTextBox | null;	
			querySelectorAll(selectors: "jqx-masked-text-box"): NodeListOf<MaskedTextBox>;
			getElementsByTagName(qualifiedName: "jqx-masked-text-box"): HTMLCollectionOf<MaskedTextBox>;
			getElementsByName(elementName: "jqx-masked-text-box"): NodeListOf<MaskedTextBox>;	
    }
}

/**Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations. */
export const enum MaskedTextBoxCutCopyMaskFormat{
	ExcludePromptAndLiterals = "excludePromptAndLiterals",
	IncludePrompt = "includePrompt",
	IncludeLiterals = "includeLiterals",
	IncludePromptAndLiterals = "includePromptAndLiterals"
}

/**Specifies the behavior on "Enter" key press. Default mode is "submit". */
export const enum EnterKeyBehavior{
	ClearOnSubmit = "clearOnSubmit",
	Submit = "submit"
}

/**Determines whether the value of the input should contain or not the prompt/literals of the mask. */
export const enum MaskedTextBoxTextMaskFormat{
	ExcludePromptAndLiterals = "excludePromptAndLiterals",
	IncludePrompt = "includePrompt",
	IncludeLiterals = "includeLiterals",
	IncludePromptAndLiterals = "includePromptAndLiterals"
}

/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export interface Menu extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * If set to true, on mouseenter, the element receives focus automatically.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective jqx-menu-items-group.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its jqx-menu-item/jqx-menu-items-group subitems. See also the property checkable.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective jqx-menu-items-group.
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown').
   * Default value: up
   */
  closeAction?: MenuCloseAction;
  /**
   * Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the opening direction of Menu dropdowns.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
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
   * Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * Determines the menu's display mode.
   * Default value: horizontal
   */
  mode?: MenuMode;
  /**
   * Opens or closes thte menu when it's in 'dropDown' mode.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null.
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
   * Determines the menu's selection mode.
   * Default value: click
   */
  selectionMode?: MenuSelectionMode;
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
   * This event is triggered when the menu is closed. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
   * @param ev. The custom event. Custom data event was created with: ev.detail(trigger)
   *  trigger - Indicates whether the event was called from inside the element or programatically.
   */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was collapsed.
   *  label - The label of the toggled item that was collapsed.
   *  value - The value of the toggled item that was collapsed.
   *  path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was collapsed.
   */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is collapsing.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be collapsed.
   *  label - The label of the toggled item that is going to be collapsed.
   *  value - The value of the toggled item that is going to be collapsed.
   *  path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be collapsed.
   */
  oncollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-menu-items-group is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the toggled item that was expanded.
   *  value - The value of the toggled item that was expanded.
   *  path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was expanded.
   */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered before a jqx-menu-items-group is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be expanded.
   *  label - The label of the toggled item that is going to be expanded.
   *  value - The value of the toggled item that is going to be expanded.
   *  path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be expanded.
   */
  onexpanding?: ((this: any, ev: Event) => any) | null;
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
   * This event is triggered when a menu item is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that is toggled.
   *  label - The label of the toggled item.
   *  value - The value of the toggled item.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is opened. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in <em>'dropDown'</em> <strong>mode</strong>.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item to the menu.
   * @param {HTMLElement} Item. A jqx-menu-item to add to the Menu.
   * @param {HTMLElement | string} Parent?. The jqx-menu-items-group or its id or numeric path to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Checks an item.
   * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Clears all Menu items.
   */
  clear(): void;
  /**
   * Closes the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   */
  close(): void;
  /**
   * Collapses an item.
   * @param {HTMLElement | string} item?. jqx-menu-item/jqx-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item?: HTMLElement | string, animation?: boolean): void;
  /**
   * Expands an item.
   * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Maximizes the Menu.
   */
  maximize(): void;
  /**
   * Minimizes the Menu.
   */
  minimize(): void;
  /**
   * Opens the Menu when <strong>mode</strong> is <em>'dropDown'</em>.
   * @param {number} left. Horizontal position
   * @param {number} top. Vertical position
   */
  open(left: number, top: number): void;
  /**
   * Removes an item from the menu.
   * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group or its id or numeric path to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unchecks an item.
   * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path)
   */
  uncheckItem(item: HTMLElement | string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-menu"): Menu;
			querySelector(selectors: "jqx-menu"): Menu | null;	
			querySelectorAll(selectors: "jqx-menu"): NodeListOf<Menu>;
			getElementsByTagName(qualifiedName: "jqx-menu"): HTMLCollectionOf<Menu>;
			getElementsByName(elementName: "jqx-menu"): NodeListOf<Menu>;	
    }
}

/**Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown'). */
export const enum MenuCloseAction{
	Down = "down",
	Up = "up",
	None = "none"
}

/**Determines the menu's display mode. */
export const enum MenuMode{
	Horizontal = "horizontal",
	Vertical = "vertical",
	DropDown = "dropDown",
	Tree = "tree"
}

/**Determines the menu's selection mode. */
export const enum MenuSelectionMode{
	Click = "click",
	Mouseenter = "mouseenter"
}

/**
 Defines a menu item.
*/
export interface MenuItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: true
   */
  checked?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-menu-item"): MenuItem;
			querySelector(selectors: "jqx-menu-item"): MenuItem | null;	
			querySelectorAll(selectors: "jqx-menu-item"): NodeListOf<MenuItem>;
			getElementsByTagName(qualifiedName: "jqx-menu-item"): HTMLCollectionOf<MenuItem>;
			getElementsByName(elementName: "jqx-menu-item"): NodeListOf<MenuItem>;	
    }
}

/**
 Defines a group of menu items.
*/
export interface MenuItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: false
   */
  checkable?: boolean;
  /**
   * 
   * Default value: false
   */
  checked?: boolean;
  /**
   * 
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode;
  /**
   * 
   * Default value: null
   */
  dropDownHeight?: number;
  /**
   * 
   * Default value: false
   */
  expanded?: boolean;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: false
   */
  separator?: boolean;
  /**
   * 
   * Default value: null
   */
  value?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-menu-items-group"): MenuItemsGroup;
			querySelector(selectors: "jqx-menu-items-group"): MenuItemsGroup | null;	
			querySelectorAll(selectors: "jqx-menu-items-group"): NodeListOf<MenuItemsGroup>;
			getElementsByTagName(qualifiedName: "jqx-menu-items-group"): HTMLCollectionOf<MenuItemsGroup>;
			getElementsByName(elementName: "jqx-menu-items-group"): NodeListOf<MenuItemsGroup>;	
    }
}

/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export interface MultiColumnFilterPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the position of the close button of multi column filter panel items.
   * Default value: left
   */
  closeButtonPosition?: MultiColumnFilterPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[];
  /**
   * Enables or disables the multi column filter panel.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * A callback function that can be used to modify the settings of value editors.
   * Default value: null
   */
  editorCallback?: any;
  /**
   * Sets or gets the placeholder for the filter value editors.
   * Default value: "Value"
   */
  editorPlaceholder?: string;
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
   * Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
   * Default value: 8
   */
  maxLevel?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to group by",
   *     "firstBy": "Group by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by",
   *     "collapseAll": "Collapse all",
   *     "expandAll": "Expand all"
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the logical operator between the items.
   * Default value: false
   */
  operator?: MultiColumnFilterPanelOperator;
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets of gets the initial value of the element.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when the "Apply" button is clicked.
   * @param ev. The custom event.    */
  onapply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
   * @param ev. The custom event.    */
  oncancel: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Collapse all" button is clicked.
   * @param ev. The custom event.    */
  oncollapseall?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Expand all" button is clicked.
   * @param ev. The custom event.    */
  onexpandall?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-multi-column-filter-panel"): MultiColumnFilterPanel;
			querySelector(selectors: "jqx-multi-column-filter-panel"): MultiColumnFilterPanel | null;	
			querySelectorAll(selectors: "jqx-multi-column-filter-panel"): NodeListOf<MultiColumnFilterPanel>;
			getElementsByTagName(qualifiedName: "jqx-multi-column-filter-panel"): HTMLCollectionOf<MultiColumnFilterPanel>;
			getElementsByName(elementName: "jqx-multi-column-filter-panel"): NodeListOf<MultiColumnFilterPanel>;	
    }
}

/**Sets or gets the position of the close button of multi column filter panel items. */
export const enum MultiColumnFilterPanelCloseButtonPosition{
	Left = "left",
	Right = "right"
}

/**Determines the logical operator between the items. */
export const enum MultiColumnFilterPanelOperator{
	And = "and",
	Or = "or"
}

/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export interface MultilineTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
   * Default value: none
   */
  autoCapitalize?: MultilineTextBoxAutoCapitalize;
  /**
   * Determines whether the value of the control can be automatically completed by the browser.
   * Default value: off
   */
  autoComplete?: AutoComplete;
  /**
   * Determines whether the input should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   * Default value: 20
   */
  cols?: number;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode;
  /**
   * Determines the behavior on "Enter" key.
   * Default value: newLine
   */
  enterKeyBehavior?: MultilineTextBoxEnterKeyBehavior;
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Controls horizontal scrollbar's visibility. 
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 0
   */
  minLength?: number;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * If enabled the users cannot iteract with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
   * Default value: false
   */
  resizable?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The number of visible text lines for the control.
   * Default value: 5
   */
  rows?: number;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Indicates the index of the last character in the current selection.
   * Default value: 0
   */
  selectionEnd?: number;
  /**
   * Indicates the index to the first character in the current selection.
   * Default value: 0
   */
  selectionStart?: number;
  /**
   * Specifies whether the element is to have its spelling and grammar checked or not.
   * Default value: false
   */
  spellCheck?: boolean;
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
   * Sets or gets the value of the element.
   * Default value: ""
   */
  value?: string;
  /**
   * Controls vertical scrollbar's visibility. 
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /**
   * Indicates how the control wraps text.
   * Default value: soft
   */
  wrap?: MultilineTextBoxWrap;
  /** 
   * This event is triggered when the value of the text box is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   *  type - Indicates when the element was called, e.g. on blur or submit.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset the value of the element box to it's initial state.
   */
  reset(): void;
  /**
   * Returns the currenctly selected text.
   * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
   * @returns {string}
   */
  selection(displayMode: string): string;
  /**
   * Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
   * @param {any} rangeFrom?. Determines the start index of the text selection.
   * @param {any} rangeTo?. Determines the end index of the text selection.
   */
  select(rangeFrom?: any, rangeTo?: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-multiline-text-box"): MultilineTextBox;
			querySelector(selectors: "jqx-multiline-text-box"): MultilineTextBox | null;	
			querySelectorAll(selectors: "jqx-multiline-text-box"): NodeListOf<MultilineTextBox>;
			getElementsByTagName(qualifiedName: "jqx-multiline-text-box"): HTMLCollectionOf<MultilineTextBox>;
			getElementsByName(elementName: "jqx-multiline-text-box"): NodeListOf<MultilineTextBox>;	
    }
}

/**Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. */
export const enum MultilineTextBoxAutoCapitalize{
	None = "none",
	Characters = "characters",
	Words = "words"
}

/**Specifies how the characters are displayed inside the input. */
export const enum TextBoxDisplayMode{
	Default = "default",
	Escaped = "escaped"
}

/**Determines the behavior on "Enter" key. */
export const enum MultilineTextBoxEnterKeyBehavior{
	ClearOnSubmit = "clearOnSubmit",
	NewLine = "newLine",
	Submit = "submit"
}

/**Indicates how the control wraps text. */
export const enum MultilineTextBoxWrap{
	Hard = "hard",
	Soft = "soft",
	Off = "off"
}

/**
 Buttons group with DropDown and multiple action buttons.
*/
export interface MultiSplitButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines a data source used to generate element's permanently visible buttons.
   * Default value: 
   */
  buttonsDataSource?: string[];
  /**
   * Determines the data source of the multi split button's dropdown.
   * Default value: []
   */
  dataSource?: any;
  /**
   * Enables or disables jqxMultiSplitButton.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Displays or hides the loading indicator
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
   * Default value: dropDownButton
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Determines whether the Filtering is enabled.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Determines the filtering for the drop down list mode.
   * Default value: startsWithIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Determines the placeholder for the drop down list filter input field.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
   * Default value: false
   */
  grouped?: boolean;
  /**
   * Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
   * Default value: "null"
   */
  groupMember?: string;
  /**
   * Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
   * Default value: 700
   */
  incrementalSearchDelay?: number;
  /**
   * Sets ot gets the mode of the incremental search mode.
   * Default value: startsWithIgnoreCase
   */
  incrementalSearchMode?: SearchMode;
  /**
   * Determines the height of the items.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * The position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets selected indexes of buttons's dropDown.
   * Default value: 
   */
  selectedIndexes?: number[];
  /**
   * Sets or gets selected values of buttons's dropDown.
   * Default value: 
   */
  selectedValues?: string[];
  /**
   * Determines how many items can be selected.
   * Default value: one
   */
  selectionMode?: MultiSplitButtonSelectionMode;
  /**
   * Determines whether the items in the dropDown are sorted alphabetically or not
   * Default value: false
   */
  sorted?: boolean;
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
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines weather or not Virtualization is used for the button's dropDownList.
   * Default value: false
   */
  virtualized?: boolean;
  /** 
   * This event is triggered when button's dropDown selection is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is closing.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks any of the element's buttons or button's dropDown items.
   * @param ev. The custom event.    */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when button's dropDown list is opening.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the end of the dropDown list.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user scrolls to the start of the dropDown list.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes button's dropDown list.
   */
  close(): void;
  /**
   * Returns an item instance occured in the element's drop down.
   * @param {string} value. The value of an item from the drop down list or a button.
   * @returns {HTMLElement}
   */
  getItem(value: string): HTMLElement;
  /**
   * Returns an array with the items from the split button's dropDown list.
   * @returns {any[]}
   */
  items(): any[];
  /**
   * Inserts a new item at a specified position in the drop down list.
   * @param {number} position. The position where the item must be inserted.
   * @param {any} value. The value of the new item.
   */
  insert(position: number, value: any): void;
  /**
   * Opens the splitButton's dropDown list.
   */
  open(): void;
  /**
   * Removes an item at a specified position in the drop down list.
   * @param {number} position. The position of the removed item.
   */
  removeAt(position: number): void;
  /**
   * Updates an item from the dropDown list.
   * @param {number} position. The position where the item must be updated.
   * @param {any} value. The value of the updated item.
   */
  update(position: number, value: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-multi-split-button"): MultiSplitButton;
			querySelector(selectors: "jqx-multi-split-button"): MultiSplitButton | null;	
			querySelectorAll(selectors: "jqx-multi-split-button"): NodeListOf<MultiSplitButton>;
			getElementsByTagName(qualifiedName: "jqx-multi-split-button"): HTMLCollectionOf<MultiSplitButton>;
			getElementsByName(elementName: "jqx-multi-split-button"): NodeListOf<MultiSplitButton>;	
    }
}

/**Determines how many items can be selected. */
export const enum MultiSplitButtonSelectionMode{
	None = "none",
	OneOrManyExtended = "oneOrManyExtended",
	ZeroOrMany = "zeroOrMany",
	OneOrMany = "oneOrMany",
	ZeroOrOne = "zeroOrOne",
	One = "one",
	CheckBox = "checkBox",
	RadioButton = "radioButton"
}

/**
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
export interface NumericTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the char to use as the decimal separator in numeric values. 
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * Enables or disables the jqxNumericTextBox. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the parent container of the radix dropdown.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems.
   * Default value: false
   */
  dropDownEnabled?: boolean;
  /**
   * Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss. 
   * Default value: integer
   */
  inputFormat?: NumericTextBoxInputFormat;
  /**
   * Sets a label above the element. 
   * Default value: ""
   */
  label?: string;
  /**
   * If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength.
   * Default value: false
   */
  leadingZeros?: boolean;
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
   * Sets or gets the maximum value of the widget. 
   * Default value: null
   */
  max?: any;
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
   *     "binary": "BIN",
   *     "octal": "OCT",
   *     "decimal": "DEC",
   *     "hexadecimal": "HEX",
   *     "integerOnly": "jqxNumericTextBox: The property  can only be set when inputFormat is integer.",
   *     "noInteger": "jqxNumericTextBox: the property  cannot be set when inputFormat is integer.",
   *     "significantPrecisionDigits": "jqxNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum value of the widget. 
   * Default value: null
   */
  min?: any;
  /**
   * The name of the control.
   * Default value: ""
   */
  name?: string;
  /**
   * Enables or disables the setting of the value property to null or empty string. 
   * Default value: false
   */
  nullable?: boolean;
  /**
   * Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true. 
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString. 
   * Default value: "null"
   */
  outputFormatString?: string;
  /**
   * Determines the widget's place holder displayed when the widget's input is empty. 
   * Default value: """"
   */
  placeholder?: string;
  /**
   * Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'. 
   * Default value: 10
   */
  radix?: NumericTextBoxRadix;
  /**
   * Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  radixDisplay?: boolean;
  /**
   * Sets or gets the position of the radix display button of the jqxNumericTextBox. 
   * Default value: left
   */
  radixDisplayPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the readonly state of the jqxNumericTextBox. 
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'. 
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Determines whether to show the current value represented in all four numeral systems in the drop down.
   * Default value: false
   */
  showDropDownValues?: boolean;
  /**
   * Enables or disables the visibility of the units. 
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
   * Default value: 8
   */
  significantDigits?: number;
  /**
   * Enables or disables the visibility of the spin buttons. 
   * Default value: false
   */
  spinButtons?: boolean;
  /**
   * Sets the delay between repeats of spin buttons in miliseconds. 
   * Default value: 75
   */
  spinButtonsDelay?: number;
  /**
   * Sets a delay before the first repeat iteration of spin buttons in miliseconds. 
   * Default value: 0
   */
  spinButtonsInitialDelay?: number;
  /**
   * Sets or gets the position of the spin buttons of the jqxNumericTextBox. 
   * Default value: right
   */
  spinButtonsPosition?: NumericTextBoxDisplayPosition;
  /**
   * Sets or gets the increase/decrease step. 
   * Default value: 1
   */
  spinButtonsStep?: any;
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
   * Sets or gets the name of unit used in jqxNumericTextBox widget. 
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
   * Default value: strict
   */
  validation?: Validation;
  /**
   * Sets or gets the value of the jqxNumericTextBox widget. 
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length. 
   * Default value: int32
   */
  wordLength?: WordLength;
  /** 
   * This event is triggered when the value is changed. 
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value in the input is being changed via keypress or paste. 
   * @param ev. The custom event.    */
  onchanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is closed. 
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is opened. 
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the radix is changed. 
   * @param ev. The custom event.    */
  onradixchange?: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the NumericTextBox. 
   */
  focus(): void;
  /**
   * Get/set the value of the NumericTextBox. 
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox. 
   * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation. 
   * @returns {string}
   */
  val(value?: string | number, suppressValidation?: boolean): string;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-numeric-text-box"): NumericTextBox;
			querySelector(selectors: "jqx-numeric-text-box"): NumericTextBox | null;	
			querySelectorAll(selectors: "jqx-numeric-text-box"): NodeListOf<NumericTextBox>;
			getElementsByTagName(qualifiedName: "jqx-numeric-text-box"): HTMLCollectionOf<NumericTextBox>;
			getElementsByName(elementName: "jqx-numeric-text-box"): NodeListOf<NumericTextBox>;	
    }
}

/**Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.  */
export const enum NumericTextBoxInputFormat{
	Integer = "integer",
	FloatingPoint = "floatingPoint",
	Complex = "complex"
}

/**Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.  */
export const enum NumericTextBoxRadix{
	Two = "2",
	Base8 = "8",
	Base10 = "10",
	Base16 = "16",
	Binary = "binary",
	Octal = "octal",
	Decimal = "decimal",
	Hexadecimal = "hexadecimal"
}

/**Sets or gets the position of the spin buttons of the jqxNumericTextBox.  */
export const enum NumericTextBoxDisplayPosition{
	Left = "left",
	Right = "right"
}

/**
 Pagination component that is used to navigate between a set of results.
*/
export interface Pager extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages.
   * Default value: none
   */
  autoEllipsis?: PagerAutoEllipsis;
  /**
   * Enables or disables the pager.
   * Default value: false
   */
  disabled?: boolean;
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
   *     "firstButton": "First",
   *     "lastButton": "Last",
   *     "previousButton": "Previous",
   *     "nextButton": "Next",
   *     "navigateToLabel": "Go to:",
   *     "pageSizeLabel": "Show:",
   *     "navigateToInputPlaceholder": "",
   *     "ellipsis": "...",
   *     "summaryString": "of",
   *     "summaryPrefix": "of",
   *     "summarySuffix": ""
   *   }
   * }
   */
  messages?: any;
  /**
   * Handles the position of the navigation buttons.
   * Default value: near
   */
  navigationButtonsPosition?: LayoutPosition;
  /**
   * Gets/sets current page index.
   * Default value: 0
   */
  pageIndex?: number;
  /**
   * Defines the number of page index selectors.
   * Default value: 0
   */
  pageIndexSelectors?: any;
  /**
   * Gets/sets total number of items displayed on page.
   * Default value: 10
   */
  pageSize?: number;
  /**
   * Defines the data source of the element's page size selector drop down.
   * Default value: 10,25,50
   */
  pageSizeSelectorDataSource?: number[];
  /**
   * The number of pages in the element.
   * Default value: 100
   */
  pagesCount?: number;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Controlls displaying of the 'first' and 'last' navigation buttons.
   * Default value: false
   */
  showFirstLastNavigationButtons?: boolean;
  /**
   * Displays text content in navigation buttons instead default icons.
   * Default value: false
   */
  showNavigationButtonLabels?: boolean;
  /**
   * Determines whether the navigation input is displayed.
   * Default value: false
   */
  showNavigationInput?: boolean;
  /**
   * Determines whether the page index selectors are displayed.
   * Default value: false
   */
  showPageIndexSelectors?: boolean;
  /**
   * Determines whether the page size selector is displayed.
   * Default value: false
   */
  showPageSizeSelector?: boolean;
  /**
   * Controlls displaying of the 'previous' and 'next' navigation buttons.
   * Default value: false
   */
  showPrevNextNavigationButtons?: boolean;
  /**
   * Determines whether the page summary is displayed.
   * Default value: false
   */
  showSummary?: boolean;
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
   * This event is triggered when user selects a new item.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when page size is changed.
   * @param ev. The custom event.    */
  onpagesizechanged?: ((this: any, ev: Event) => any) | null;
  /**
   * Selects first item.
   */
  first(): void;
  /**
   * Selects last item.
   */
  last(): void;
  /**
   * Navigates to particular item.
   * @param {any} pageIndex. 
   */
  navigateTo(pageIndex: any): void;
  /**
   * Selects next pager item.
   */
  next(): void;
  /**
   * Selects previous pager item.
   */
  prev(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-pager"): Pager;
			querySelector(selectors: "jqx-pager"): Pager | null;	
			querySelectorAll(selectors: "jqx-pager"): NodeListOf<Pager>;
			getElementsByTagName(qualifiedName: "jqx-pager"): HTMLCollectionOf<Pager>;
			getElementsByName(elementName: "jqx-pager"): NodeListOf<Pager>;	
    }
}

/**Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
export const enum PagerAutoEllipsis{
	None = "none",
	Before = "before",
	After = "after",
	Both = "both"
}

/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
export interface PasswordTextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies that the element should be focused when the page is loaded.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the behavior on "Enter" key press. Default mode is "submit".
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. Appears only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Sets label above the element. The label is displayed above the input and it's always visible.
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "passwordStrength": "Password strength",
   *     "short": "Short",
   *     "weak": "Weak",
   *     "far": "Far",
   *     "good": "Good",
   *     "strong": "Strong",
   *     "showPassword": "Show password"
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the minimum number of characters that the user can enter.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'.
   * Default value: null
   */
  passwordStrength?: any;
  /**
   * The placeholder text that is displayed when no value is applied to the element. 
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies that the user must fill in a value before submitting a form that contains the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies whether the content of the input will be selected on focus.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Determines whether the password icon is visible.
   * Default value: false
   */
  showPasswordIcon?: boolean;
  /**
   * Determines whether a tooltip which shows the password's strength will be shown.
   * Default value: false
   */
  showPasswordStrength?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines whether Tooltip's arrow will be shown or not.
   * Default value: false
   */
  tooltipArrow?: boolean;
  /**
   * Determines the delay before the tooltip appears in miliseconds.
   * Default value: 0
   */
  tooltipDelay?: number;
  /**
   * Determines the position of the tooltip.
   * Default value: top
   */
  tooltipPosition?: PasswordTextBoxTooltipPosition;
  /**
   * Sets a custom template for the content of the tooltip.
   * Default value: "null"
   */
  tooltipTemplate?: string;
  /**
   * If true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /** 
   * This event is triggered when the value of the element is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element before it was changed.
   *  value - The new value of the element.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Focuses the element.
   */
  focus(): void;
  /**
   * The method is used to reset input to it's initial value. 
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-password-text-box"): PasswordTextBox;
			querySelector(selectors: "jqx-password-text-box"): PasswordTextBox | null;	
			querySelectorAll(selectors: "jqx-password-text-box"): NodeListOf<PasswordTextBox>;
			getElementsByTagName(qualifiedName: "jqx-password-text-box"): HTMLCollectionOf<PasswordTextBox>;
			getElementsByName(elementName: "jqx-password-text-box"): NodeListOf<PasswordTextBox>;	
    }
}

/**Determines the position of the tooltip. */
export const enum PasswordTextBoxTooltipPosition{
	Absolute = "absolute",
	Bottom = "bottom",
	Top = "top",
	Left = "left",
	Right = "right"
}

/**
 Path component is used to display the path to url.
*/
export interface Path extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the data source for the item that will be displayed inside the drop down.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown.
   * Default value: null
   */
  dropDownAppendTo?: any;
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
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
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
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint?: string;
  /**
   * Sets the element as an indicator.
   * Default value: false
   */
  indicator?: boolean;
  /**
   * A getter that returns an array of all Path items.
   * Default value: 
   */
  items?: any[];
  /**
   * Sets label above the element. 
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
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
   * The name of the control.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the element's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators. 
   * Default value: windows
   */
  pathFormat?: PathFormat;
  /**
   * Disables user interaction with the element.
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
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines. 
   * Default value: false
   */
  wrap?: boolean;
  /** 
   * This event is triggered when user clicks on the browse button.
   * @param ev. The custom event.    */
  onbrowsebuttonclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closing.
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
   * This event is triggered when the drop down is opening.
   * @param ev. The custom event.    */
  onopening?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the dropDown.
   */
  close(): void;
  /**
   * Opens the dropDown.
   */
  open(): void;
  /**
   * Set's the Path element to 'emptyPath' state and changes the value to '////'.
   */
  setToEmptyPath(): void;
  /**
   * Set's the Path element to 'notAPath' state and changes the value to '//'.
   */
  setToNotAPath(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-path"): Path;
			querySelector(selectors: "jqx-path"): Path | null;	
			querySelectorAll(selectors: "jqx-path"): NodeListOf<Path>;
			getElementsByTagName(qualifiedName: "jqx-path"): HTMLCollectionOf<Path>;
			getElementsByName(elementName: "jqx-path"): NodeListOf<Path>;	
    }
}

/**Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators.  */
export const enum PathFormat{
	Windows = "windows",
	Unix = "unix"
}

/**
 PowerButton is On/Off rounded button.
*/
export interface PowerButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the power button.
   * Default value: false
   */
  disabled?: boolean;
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
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-power-button"): PowerButton;
			querySelector(selectors: "jqx-power-button"): PowerButton | null;	
			querySelectorAll(selectors: "jqx-power-button"): NodeListOf<PowerButton>;
			getElementsByTagName(qualifiedName: "jqx-power-button"): HTMLCollectionOf<PowerButton>;
			getElementsByName(elementName: "jqx-power-button"): NodeListOf<PowerButton>;	
    }
}

/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export interface ProgressBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the filling direction of the Progress Bar.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction?: any;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max?: number;
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
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets the orientation of the progress bar
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue?: boolean;
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
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-progress-bar"): ProgressBar;
			querySelector(selectors: "jqx-progress-bar"): ProgressBar | null;	
			querySelectorAll(selectors: "jqx-progress-bar"): NodeListOf<ProgressBar>;
			getElementsByTagName(qualifiedName: "jqx-progress-bar"): HTMLCollectionOf<ProgressBar>;
			getElementsByName(elementName: "jqx-progress-bar"): NodeListOf<ProgressBar>;	
    }
}

/**
 QueryBuilder allows you to build dynamically queries for filtering.
*/
export interface QueryBuilder extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables the dragging of conditions inside a group or between groups.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines when the value of the element is updated with the new changes.
   * Default value: change
   */
  applyMode?: QueryBuilderApplyMode;
  /**
   * Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closedhideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value.expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element.
   * Default value: 
   */
  customOperations?: {label: string, name: string, hideValue: boolean}[];
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the dropdown width of the property and operator editors.
   * Default value: "100%"
   */
  dropDownWidth?: string;
  /**
   * Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box
   * Default value: null
   */
  fields?: any;
  /**
   * Determines whether new fields can be dynamically added by typing in the field (property) box.
   * Default value: dynamic
   */
  fieldsMode?: QueryBuilderFieldsMode;
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate?: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'dateTime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime?: string;
  /**
   * A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'.
   * Default value: null
   */
  getDynamicField?: any;
  /**
   * Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the jqx-query-builder style sheet. This property is applicable only if showIcons is set to true.
   * Default value: { '=': 'equals', '<>': 'notequals', '>': 'greaterthan', '>=': 'greaterthanorequal', '<': 'lessthan', '<=': 'lessthanorequal', 'startswith': 'startswith', 'endswith': 'endswith', 'contains': 'contains', 'notcontains': 'notcontains', 'isblank': 'isblank', 'isnotblank': 'isnotblank' }
   */
  icons?: QueryBuilderIcons;
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
   * Defines field names of the filtered element.
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
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank",
   *     "wrongParentGroupIndex": "' method.",
   *     "missingFields": ": Fields are required for proper condition's adding. Set \"fields\" source and then conditions will be added as expected.",
   *     "wrongElementNode": "' method.",
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method."
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the placeholder text used inside the condition's operator box in case an operator is not selected.
   * Default value: "Operator"
   */
  operatorPlaceholder?: string;
  /**
   * Determines the placeholder text used inside the condition's field (property) box in case a field is not selected.
   * Default value: "Property"
   */
  propertyPlaceholder?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Shows/Hides the operator icons shown in the operator selection drop down.
   * Default value: false
   */
  showIcons?: boolean;
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
   * The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
   * Default value: 
   */
  value?: any;
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction?: any;
  /**
   * Determines the placeholder text used inside the condition's value box in case a value is not set.
   * Default value: "Value"
   */
  valuePlaceholder?: string;
  /** 
   * This event is triggered when the query builder's value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, target, targetData, targetSide)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  target - The target item.
   *  targetData - the data of the target item.
   *  targetSide - The side of the target item where the dragged item will be dropped.
   */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a condition is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  ondragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in jqx-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item is going to be dragged.
   *  data - The data of the item that is going to be dragged.
   *  originalEvent - The original event.
   */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(id, type, data)
   *  id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
   *  type - The type of the clicked item ( condition or a group ).
   *  data - The data of the item.
   */
  onitemclick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a field has been selected.
   * @param ev. The custom event. Custom data event was created with: ev.detail(label, value)
   *  label - The label of the selected property.
   *  value - The value of the selected property.
   */
  onpropertyselected?: ((this: any, ev: Event) => any) | null;
  /**
   * Converts the current value of the element to DynamicLINQ expression.
   * @returns {any}
   */
  getLinq(): any;
}

/**Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the jqx-query-builder style sheet. This property is applicable only if <strong>showIcons</strong> is set to <em>true</em>. */
export interface QueryBuilderIcons {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: undefined
   */
  0?: any;
  /**
   * 
   * Default value: undefined
   */
  1?: any;
  /**
   * 
   * Default value: undefined
   */
  2?: any;
  /**
   * 
   * Default value: undefined
   */
  3?: any;
  /**
   * 
   * Default value: undefined
   */
  4?: any;
  /**
   * 
   * Default value: undefined
   */
  5?: any;
  /**
   * 
   * Default value: undefined
   */
  6?: any;
  /**
   * 
   * Default value: undefined
   */
  7?: any;
  /**
   * 
   * Default value: undefined
   */
  8?: any;
  /**
   * 
   * Default value: undefined
   */
  9?: any;
  /**
   * 
   * Default value: undefined
   */
  10?: any;
  /**
   * 
   * Default value: undefined
   */
  11?: any;
  /**
   * 
   * Default value: undefined
   */
  12?: any;
  /**
   * 
   * Default value: undefined
   */
  13?: any;
  /**
   * 
   * Default value: undefined
   */
  14?: any;
  /**
   * 
   * Default value: undefined
   */
  15?: any;
  /**
   * 
   * Default value: undefined
   */
  16?: any;
  /**
   * 
   * Default value: undefined
   */
  17?: any;
  /**
   * 
   * Default value: undefined
   */
  18?: any;
  /**
   * 
   * Default value: undefined
   */
  19?: any;
  /**
   * 
   * Default value: undefined
   */
  20?: any;
  /**
   * 
   * Default value: undefined
   */
  21?: any;
  /**
   * 
   * Default value: undefined
   */
  22?: any;
  /**
   * 
   * Default value: undefined
   */
  23?: any;
  /**
   * 
   * Default value: undefined
   */
  24?: any;
  /**
   * 
   * Default value: undefined
   */
  25?: any;
  /**
   * 
   * Default value: undefined
   */
  26?: any;
  /**
   * 
   * Default value: undefined
   */
  27?: any;
  /**
   * 
   * Default value: undefined
   */
  28?: any;
  /**
   * 
   * Default value: undefined
   */
  29?: any;
  /**
   * 
   * Default value: undefined
   */
  30?: any;
  /**
   * 
   * Default value: undefined
   */
  31?: any;
  /**
   * 
   * Default value: undefined
   */
  32?: any;
  /**
   * 
   * Default value: undefined
   */
  33?: any;
  /**
   * 
   * Default value: undefined
   */
  34?: any;
  /**
   * 
   * Default value: undefined
   */
  35?: any;
  /**
   * 
   * Default value: undefined
   */
  36?: any;
  /**
   * 
   * Default value: undefined
   */
  37?: any;
  /**
   * 
   * Default value: undefined
   */
  38?: any;
  /**
   * 
   * Default value: undefined
   */
  39?: any;
  /**
   * 
   * Default value: undefined
   */
  40?: any;
  /**
   * 
   * Default value: undefined
   */
  41?: any;
  /**
   * 
   * Default value: undefined
   */
  42?: any;
  /**
   * 
   * Default value: undefined
   */
  43?: any;
  /**
   * 
   * Default value: undefined
   */
  44?: any;
  /**
   * 
   * Default value: undefined
   */
  45?: any;
  /**
   * 
   * Default value: undefined
   */
  46?: any;
  /**
   * 
   * Default value: undefined
   */
  47?: any;
  /**
   * 
   * Default value: undefined
   */
  48?: any;
  /**
   * 
   * Default value: undefined
   */
  49?: any;
  /**
   * 
   * Default value: undefined
   */
  50?: any;
  /**
   * 
   * Default value: undefined
   */
  51?: any;
  /**
   * 
   * Default value: undefined
   */
  52?: any;
  /**
   * 
   * Default value: undefined
   */
  53?: any;
  /**
   * 
   * Default value: undefined
   */
  54?: any;
  /**
   * 
   * Default value: undefined
   */
  55?: any;
  /**
   * 
   * Default value: undefined
   */
  56?: any;
  /**
   * 
   * Default value: undefined
   */
  57?: any;
  /**
   * 
   * Default value: undefined
   */
  58?: any;
  /**
   * 
   * Default value: undefined
   */
  59?: any;
  /**
   * 
   * Default value: undefined
   */
  60?: any;
  /**
   * 
   * Default value: undefined
   */
  61?: any;
  /**
   * 
   * Default value: undefined
   */
  62?: any;
  /**
   * 
   * Default value: undefined
   */
  63?: any;
  /**
   * 
   * Default value: undefined
   */
  64?: any;
  /**
   * 
   * Default value: undefined
   */
  65?: any;
  /**
   * 
   * Default value: undefined
   */
  66?: any;
  /**
   * 
   * Default value: undefined
   */
  67?: any;
  /**
   * 
   * Default value: undefined
   */
  68?: any;
  /**
   * 
   * Default value: undefined
   */
  69?: any;
  /**
   * 
   * Default value: undefined
   */
  70?: any;
  /**
   * 
   * Default value: undefined
   */
  71?: any;
  /**
   * 
   * Default value: undefined
   */
  72?: any;
  /**
   * 
   * Default value: undefined
   */
  73?: any;
  /**
   * 
   * Default value: undefined
   */
  74?: any;
  /**
   * 
   * Default value: undefined
   */
  75?: any;
  /**
   * 
   * Default value: undefined
   */
  76?: any;
  /**
   * 
   * Default value: undefined
   */
  77?: any;
  /**
   * 
   * Default value: undefined
   */
  78?: any;
  /**
   * 
   * Default value: undefined
   */
  79?: any;
  /**
   * 
   * Default value: undefined
   */
  80?: any;
  /**
   * 
   * Default value: undefined
   */
  81?: any;
  /**
   * 
   * Default value: undefined
   */
  82?: any;
  /**
   * 
   * Default value: undefined
   */
  83?: any;
  /**
   * 
   * Default value: undefined
   */
  84?: any;
  /**
   * 
   * Default value: undefined
   */
  85?: any;
  /**
   * 
   * Default value: undefined
   */
  86?: any;
  /**
   * 
   * Default value: undefined
   */
  87?: any;
  /**
   * 
   * Default value: undefined
   */
  88?: any;
  /**
   * 
   * Default value: undefined
   */
  89?: any;
  /**
   * 
   * Default value: undefined
   */
  90?: any;
  /**
   * 
   * Default value: undefined
   */
  91?: any;
  /**
   * 
   * Default value: undefined
   */
  92?: any;
  /**
   * 
   * Default value: undefined
   */
  93?: any;
  /**
   * 
   * Default value: undefined
   */
  94?: any;
  /**
   * 
   * Default value: undefined
   */
  95?: any;
  /**
   * 
   * Default value: undefined
   */
  96?: any;
  /**
   * 
   * Default value: undefined
   */
  97?: any;
  /**
   * 
   * Default value: undefined
   */
  98?: any;
  /**
   * 
   * Default value: undefined
   */
  99?: any;
  /**
   * 
   * Default value: undefined
   */
  100?: any;
  /**
   * 
   * Default value: undefined
   */
  101?: any;
  /**
   * 
   * Default value: undefined
   */
  102?: any;
  /**
   * 
   * Default value: undefined
   */
  103?: any;
  /**
   * 
   * Default value: undefined
   */
  104?: any;
  /**
   * 
   * Default value: undefined
   */
  105?: any;
  /**
   * 
   * Default value: undefined
   */
  106?: any;
  /**
   * 
   * Default value: undefined
   */
  107?: any;
  /**
   * 
   * Default value: undefined
   */
  108?: any;
  /**
   * 
   * Default value: undefined
   */
  109?: any;
  /**
   * 
   * Default value: undefined
   */
  110?: any;
  /**
   * 
   * Default value: undefined
   */
  111?: any;
  /**
   * 
   * Default value: undefined
   */
  112?: any;
  /**
   * 
   * Default value: undefined
   */
  113?: any;
  /**
   * 
   * Default value: undefined
   */
  114?: any;
  /**
   * 
   * Default value: undefined
   */
  115?: any;
  /**
   * 
   * Default value: undefined
   */
  116?: any;
  /**
   * 
   * Default value: undefined
   */
  117?: any;
  /**
   * 
   * Default value: undefined
   */
  118?: any;
  /**
   * 
   * Default value: undefined
   */
  119?: any;
  /**
   * 
   * Default value: undefined
   */
  120?: any;
  /**
   * 
   * Default value: undefined
   */
  121?: any;
  /**
   * 
   * Default value: undefined
   */
  122?: any;
  /**
   * 
   * Default value: undefined
   */
  123?: any;
  /**
   * 
   * Default value: undefined
   */
  124?: any;
  /**
   * 
   * Default value: undefined
   */
  125?: any;
  /**
   * 
   * Default value: undefined
   */
  126?: any;
  /**
   * 
   * Default value: undefined
   */
  127?: any;
  /**
   * 
   * Default value: undefined
   */
  128?: any;
  /**
   * 
   * Default value: undefined
   */
  129?: any;
  /**
   * 
   * Default value: undefined
   */
  130?: any;
  /**
   * 
   * Default value: undefined
   */
  131?: any;
  /**
   * 
   * Default value: undefined
   */
  132?: any;
  /**
   * 
   * Default value: undefined
   */
  133?: any;
  /**
   * 
   * Default value: undefined
   */
  134?: any;
  /**
   * 
   * Default value: undefined
   */
  135?: any;
  /**
   * 
   * Default value: undefined
   */
  136?: any;
  /**
   * 
   * Default value: undefined
   */
  137?: any;
  /**
   * 
   * Default value: undefined
   */
  138?: any;
  /**
   * 
   * Default value: undefined
   */
  139?: any;
  /**
   * 
   * Default value: undefined
   */
  140?: any;
  /**
   * 
   * Default value: undefined
   */
  141?: any;
  /**
   * 
   * Default value: undefined
   */
  142?: any;
  /**
   * 
   * Default value: undefined
   */
  143?: any;
  /**
   * 
   * Default value: undefined
   */
  144?: any;
  /**
   * 
   * Default value: undefined
   */
  145?: any;
  /**
   * 
   * Default value: undefined
   */
  146?: any;
  /**
   * 
   * Default value: undefined
   */
  147?: any;
  /**
   * 
   * Default value: undefined
   */
  148?: any;
  /**
   * 
   * Default value: undefined
   */
  149?: any;
  /**
   * 
   * Default value: undefined
   */
  150?: any;
  /**
   * 
   * Default value: undefined
   */
  151?: any;
  /**
   * 
   * Default value: undefined
   */
  152?: any;
  /**
   * 
   * Default value: undefined
   */
  153?: any;
  /**
   * 
   * Default value: undefined
   */
  154?: any;
  /**
   * 
   * Default value: undefined
   */
  155?: any;
  /**
   * 
   * Default value: undefined
   */
  156?: any;
  /**
   * 
   * Default value: undefined
   */
  157?: any;
  /**
   * 
   * Default value: undefined
   */
  158?: any;
  /**
   * 
   * Default value: undefined
   */
  159?: any;
  /**
   * 
   * Default value: undefined
   */
  160?: any;
  /**
   * 
   * Default value: undefined
   */
  161?: any;
  /**
   * 
   * Default value: undefined
   */
  162?: any;
  /**
   * 
   * Default value: undefined
   */
  163?: any;
  /**
   * 
   * Default value: undefined
   */
  164?: any;
  /**
   * 
   * Default value: undefined
   */
  165?: any;
  /**
   * 
   * Default value: undefined
   */
  166?: any;
  /**
   * 
   * Default value: undefined
   */
  167?: any;
  /**
   * 
   * Default value: undefined
   */
  168?: any;
  /**
   * 
   * Default value: undefined
   */
  169?: any;
  /**
   * 
   * Default value: undefined
   */
  170?: any;
  /**
   * 
   * Default value: undefined
   */
  171?: any;
  /**
   * 
   * Default value: undefined
   */
  172?: any;
  /**
   * 
   * Default value: undefined
   */
  173?: any;
  /**
   * 
   * Default value: undefined
   */
  174?: any;
  /**
   * 
   * Default value: undefined
   */
  175?: any;
  /**
   * 
   * Default value: undefined
   */
  176?: any;
  /**
   * 
   * Default value: undefined
   */
  177?: any;
  /**
   * 
   * Default value: undefined
   */
  178?: any;
  /**
   * 
   * Default value: undefined
   */
  179?: any;
  /**
   * 
   * Default value: undefined
   */
  180?: any;
  /**
   * 
   * Default value: undefined
   */
  181?: any;
  /**
   * 
   * Default value: undefined
   */
  182?: any;
  /**
   * 
   * Default value: undefined
   */
  183?: any;
  /**
   * 
   * Default value: undefined
   */
  184?: any;
  /**
   * 
   * Default value: undefined
   */
  185?: any;
  /**
   * 
   * Default value: undefined
   */
  186?: any;
  /**
   * 
   * Default value: undefined
   */
  187?: any;
  /**
   * 
   * Default value: undefined
   */
  188?: any;
  /**
   * 
   * Default value: undefined
   */
  189?: any;
  /**
   * 
   * Default value: undefined
   */
  190?: any;
  /**
   * 
   * Default value: undefined
   */
  191?: any;
  /**
   * 
   * Default value: undefined
   */
  192?: any;
  /**
   * 
   * Default value: undefined
   */
  193?: any;
  /**
   * 
   * Default value: undefined
   */
  194?: any;
  /**
   * 
   * Default value: undefined
   */
  195?: any;
  /**
   * 
   * Default value: undefined
   */
  196?: any;
  /**
   * 
   * Default value: undefined
   */
  197?: any;
  /**
   * 
   * Default value: undefined
   */
  198?: any;
  /**
   * 
   * Default value: undefined
   */
  199?: any;
  /**
   * 
   * Default value: undefined
   */
  200?: any;
  /**
   * 
   * Default value: undefined
   */
  201?: any;
  /**
   * 
   * Default value: undefined
   */
  202?: any;
  /**
   * 
   * Default value: undefined
   */
  203?: any;
  /**
   * 
   * Default value: undefined
   */
  204?: any;
  /**
   * 
   * Default value: undefined
   */
  205?: any;
  /**
   * 
   * Default value: undefined
   */
  206?: any;
  /**
   * 
   * Default value: undefined
   */
  207?: any;
  /**
   * 
   * Default value: undefined
   */
  208?: any;
  /**
   * 
   * Default value: undefined
   */
  209?: any;
  /**
   * 
   * Default value: undefined
   */
  210?: any;
  /**
   * 
   * Default value: undefined
   */
  211?: any;
  /**
   * 
   * Default value: undefined
   */
  212?: any;
  /**
   * 
   * Default value: undefined
   */
  213?: any;
  /**
   * 
   * Default value: undefined
   */
  214?: any;
  /**
   * 
   * Default value: undefined
   */
  215?: any;
  /**
   * 
   * Default value: undefined
   */
  216?: any;
  /**
   * 
   * Default value: undefined
   */
  217?: any;
  /**
   * 
   * Default value: undefined
   */
  218?: any;
  /**
   * 
   * Default value: undefined
   */
  219?: any;
  /**
   * 
   * Default value: undefined
   */
  220?: any;
  /**
   * 
   * Default value: undefined
   */
  221?: any;
  /**
   * 
   * Default value: undefined
   */
  222?: any;
  /**
   * 
   * Default value: undefined
   */
  223?: any;
  /**
   * 
   * Default value: undefined
   */
  224?: any;
  /**
   * 
   * Default value: undefined
   */
  225?: any;
  /**
   * 
   * Default value: undefined
   */
  226?: any;
  /**
   * 
   * Default value: undefined
   */
  227?: any;
  /**
   * 
   * Default value: undefined
   */
  228?: any;
  /**
   * 
   * Default value: undefined
   */
  229?: any;
  /**
   * 
   * Default value: undefined
   */
  230?: any;
  /**
   * 
   * Default value: undefined
   */
  231?: any;
  /**
   * 
   * Default value: undefined
   */
  232?: any;
  /**
   * 
   * Default value: undefined
   */
  233?: any;
  /**
   * 
   * Default value: undefined
   */
  234?: any;
  /**
   * 
   * Default value: undefined
   */
  235?: any;
  /**
   * 
   * Default value: undefined
   */
  236?: any;
  /**
   * 
   * Default value: undefined
   */
  237?: any;
  /**
   * 
   * Default value: undefined
   */
  238?: any;
  /**
   * 
   * Default value: undefined
   */
  239?: any;
  /**
   * 
   * Default value: undefined
   */
  240?: any;
  /**
   * 
   * Default value: undefined
   */
  241?: any;
  /**
   * 
   * Default value: undefined
   */
  242?: any;
  /**
   * 
   * Default value: undefined
   */
  243?: any;
  /**
   * 
   * Default value: undefined
   */
  244?: any;
  /**
   * 
   * Default value: undefined
   */
  245?: any;
  /**
   * 
   * Default value: undefined
   */
  246?: any;
  /**
   * 
   * Default value: undefined
   */
  247?: any;
  /**
   * 
   * Default value: undefined
   */
  248?: any;
  /**
   * 
   * Default value: undefined
   */
  249?: any;
  /**
   * 
   * Default value: undefined
   */
  250?: any;
  /**
   * 
   * Default value: undefined
   */
  251?: any;
  /**
   * 
   * Default value: undefined
   */
  252?: any;
  /**
   * 
   * Default value: undefined
   */
  253?: any;
  /**
   * 
   * Default value: undefined
   */
  254?: any;
  /**
   * 
   * Default value: undefined
   */
  255?: any;
  /**
   * 
   * Default value: undefined
   */
  256?: any;
  /**
   * 
   * Default value: undefined
   */
  257?: any;
  /**
   * 
   * Default value: undefined
   */
  258?: any;
  /**
   * 
   * Default value: undefined
   */
  259?: any;
  /**
   * 
   * Default value: undefined
   */
  260?: any;
  /**
   * 
   * Default value: undefined
   */
  261?: any;
  /**
   * 
   * Default value: undefined
   */
  262?: any;
  /**
   * 
   * Default value: undefined
   */
  263?: any;
  /**
   * 
   * Default value: undefined
   */
  264?: any;
  /**
   * 
   * Default value: undefined
   */
  265?: any;
  /**
   * 
   * Default value: undefined
   */
  266?: any;
  /**
   * 
   * Default value: undefined
   */
  267?: any;
  /**
   * 
   * Default value: undefined
   */
  268?: any;
  /**
   * 
   * Default value: undefined
   */
  269?: any;
  /**
   * 
   * Default value: undefined
   */
  270?: any;
  /**
   * 
   * Default value: undefined
   */
  271?: any;
  /**
   * 
   * Default value: undefined
   */
  272?: any;
  /**
   * 
   * Default value: undefined
   */
  273?: any;
  /**
   * 
   * Default value: undefined
   */
  274?: any;
  /**
   * 
   * Default value: undefined
   */
  275?: any;
  /**
   * 
   * Default value: undefined
   */
  276?: any;
  /**
   * 
   * Default value: undefined
   */
  277?: any;
  /**
   * 
   * Default value: undefined
   */
  278?: any;
  /**
   * 
   * Default value: undefined
   */
  279?: any;
  /**
   * 
   * Default value: undefined
   */
  280?: any;
  /**
   * 
   * Default value: undefined
   */
  281?: any;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-query-builder"): QueryBuilder;
			querySelector(selectors: "jqx-query-builder"): QueryBuilder | null;	
			querySelectorAll(selectors: "jqx-query-builder"): NodeListOf<QueryBuilder>;
			getElementsByTagName(qualifiedName: "jqx-query-builder"): HTMLCollectionOf<QueryBuilder>;
			getElementsByName(elementName: "jqx-query-builder"): NodeListOf<QueryBuilder>;	
    }
}

/**Determines when the value of the element is updated with the new changes. */
export const enum QueryBuilderApplyMode{
	Change = "change",
	Immediately = "immediately"
}

/**Determines whether new fields can be dynamically added by typing in the field (property) box. */
export const enum QueryBuilderFieldsMode{
	Dynamic = "dynamic",
	Static = "static"
}

/**
 The Radio Button component lets you add a radio button and assign it to a radio group. Users can select only one radio button at a time within a radio group
*/
export interface RadioButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets or gets the part that toggles the element.
   * Default value: both
   */
  checkMode?: CheckMode;
  /**
   * Sets the click mode of the radio button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the widget's group name.
   * Default value: """"
   */
  groupName?: string;
  /**
   * Sets or gets the widget's innerHTML.
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
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-radio-button"): RadioButton;
			querySelector(selectors: "jqx-radio-button"): RadioButton | null;	
			querySelectorAll(selectors: "jqx-radio-button"): NodeListOf<RadioButton>;
			getElementsByTagName(qualifiedName: "jqx-radio-button"): HTMLCollectionOf<RadioButton>;
			getElementsByName(elementName: "jqx-radio-button"): NodeListOf<RadioButton>;	
    }
}

/**
 Rating allows you to input a rating. It is broadly used in applications with reviews.
*/
export interface Rating extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
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
   * Determines the number of stars that will be displayed.
   * Default value: 
   */
  max?: number;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
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
   * Determines the number of stars that will be marked as active.
   * Default value: 
   */
  value?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-rating"): Rating;
			querySelector(selectors: "jqx-rating"): Rating | null;	
			querySelectorAll(selectors: "jqx-rating"): NodeListOf<Rating>;
			getElementsByTagName(qualifiedName: "jqx-rating"): HTMLCollectionOf<Rating>;
			getElementsByName(elementName: "jqx-rating"): NodeListOf<Rating>;	
    }
}

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

/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export interface ScrollBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb.
   * Default value: 100
   */
  largeStep?: number;
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
   * Sets or gets the scrollbar's maximum value.
   * Default value: 1000
   */
  max?: number;
  /**
   * Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction;
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
   * Sets or gets the scrollbar's minimum value.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or gets the scrollbar's orientation
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets scrollbar buttons visibility.
   * Default value: true
   */
  showButtons?: boolean;
  /**
   * Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button.
   * Default value: 10
   */
  step?: number;
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
   * Default value: 0
   */
  value?: number;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the element.
   */
  refresh(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-scroll-bar"): ScrollBar;
			querySelector(selectors: "jqx-scroll-bar"): ScrollBar | null;	
			querySelectorAll(selectors: "jqx-scroll-bar"): NodeListOf<ScrollBar>;
			getElementsByTagName(qualifiedName: "jqx-scroll-bar"): HTMLCollectionOf<ScrollBar>;
			getElementsByName(elementName: "jqx-scroll-bar"): NodeListOf<ScrollBar>;	
    }
}

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

/**Sets the position of the widget's scales.  */
export const enum ScalePosition{
	Near = "near",
	Far = "far",
	Both = "both",
	None = "none"
}

/**
 Sortable allows you to rearrange a group of html elements.
*/
export interface Sortable extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle').
   * Default value: item
   */
  dragMode?: SortableDragMode;
  /**
   * Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'.
   * Default value: right
   */
  handlePosition?: SortableHandlePosition;
  /**
   * Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'.
   * Default value: hover
   */
  handleVisibility?: SortableHandleVisibility;
  /**
   * Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the jqx-sortable custom element.
   * Default value: null
   */
  items?: string | null;
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the direction sortable items are stacked and can be dragged.
   * Default value: vertical
   */
  mode?: Orientation;
  /** 
   * This event is triggered when sortable items have been reordered.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /**
   * Moves a sortable item from one index to another.
   * @param {number} fromIndex?. The original index of the item.
   * @param {number} toIndex?. The index to move the item to.
   */
  move(fromIndex?: number, toIndex?: number): void;
  /**
   * Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
   */
  updateItems(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-sortable"): Sortable;
			querySelector(selectors: "jqx-sortable"): Sortable | null;	
			querySelectorAll(selectors: "jqx-sortable"): NodeListOf<Sortable>;
			getElementsByTagName(qualifiedName: "jqx-sortable"): HTMLCollectionOf<Sortable>;
			getElementsByName(elementName: "jqx-sortable"): NodeListOf<Sortable>;	
    }
}

/**Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
export const enum SortableDragMode{
	Item = "item",
	Handle = "handle"
}

/**Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
export const enum SortableHandlePosition{
	Right = "right",
	Left = "left",
	Top = "top",
	Bottom = "bottom"
}

/**Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
export const enum SortableHandleVisibility{
	Hover = "hover",
	Visible = "visible"
}

/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export interface SortPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the the position of the close button of sort panel items.
   * Default value: left
   */
  closeButtonPosition?: SortPanelCloseButtonPosition;
  /**
   * Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted.
   * Default value: null
   */
  dataSource?: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[];
  /**
   * Enables or disables the sort panel.
   * Default value: false
   */
  disabled?: boolean;
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "booleanFirst": "?",
   *     "booleanLast": "?",
   *     "cancel": "Cancel",
   *     "dateFirst": "1",
   *     "dateLast": "9",
   *     "from": "from",
   *     "numberFirst": "1",
   *     "numberLast": "9",
   *     "pickAnother": "Pick another field to sort by",
   *     "firstBy": "Sort by",
   *     "stringFirst": "A",
   *     "stringLast": "Z",
   *     "thenBy": "then by"
   *   }
   * }
   */
  messages?: any;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the "Apply" button is clicked.
   * @param ev. The custom event.    */
  onapply?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the "Cancel" button is clicked.
   * @param ev. The custom event.    */
  oncancel: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-sort-panel"): SortPanel;
			querySelector(selectors: "jqx-sort-panel"): SortPanel | null;	
			querySelectorAll(selectors: "jqx-sort-panel"): NodeListOf<SortPanel>;
			getElementsByTagName(qualifiedName: "jqx-sort-panel"): HTMLCollectionOf<SortPanel>;
			getElementsByName(elementName: "jqx-sort-panel"): NodeListOf<SortPanel>;	
    }
}

/**Sets or gets the the position of the close button of sort panel items. */
export const enum SortPanelCloseButtonPosition{
	Left = "left",
	Right = "right"
}

/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export interface Splitter extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
   * Default value: proportional
   */
  autoFitMode?: SplitterAutoFitMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets splitter's data source.
   * Default value: null
   */
  dataSource?: any;
  /**
   * A getter that returns an array of all Splitter items.
   * Default value: 
   */
  items?: any;
  /**
   * If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
   * Default value: false
   */
  keepProportionsOnResize?: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "indexOutOfBound": "' method.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "invalidType": "' must be of type string or number."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets splitter's orientation.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
   * Default value: adjacent
   */
  resizeMode?: SplitterResizeMode;
  /**
   * Determines the resize step during reisizing
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
   * Default value: false
   */
  liveResize?: boolean;
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
   * This event is triggered when splitter item is collapsed.
   * @param ev. The custom event.    */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter item is expanded.
   * @param ev. The custom event.    */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing begins.
   * @param ev. The custom event.    */
  onresizestart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when splitter resizing finishes.
   * @param ev. The custom event.    */
  onresizeend?: ((this: any, ev: Event) => any) | null;
  /**
   * Appends a new node.
   * @param {Node} node. The node to append
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Collapses splitter item.
   * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
   * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
   */
  collapse(item: any, far?: boolean): void;
  /**
   * Expands the splitter item if possible (if there's enough space available).
   * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
   */
  expand(item: any): void;
  /**
   * Hides a splitter bar
   * @param {number} splitterBar. A JQX.SplitterBar instance.
   * @returns {number}
   */
  hideBar(splitterBar: number): number;
  /**
   * Insert a new Splitter item at a given position.
   * @param {number} index. The index at which a new item will be inserted.
   * @param {any} details. An Object or string used as content if the splitter item.
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "jqx-splitter-item" node before the reference "jqx-splitter-item" node.
   * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Locks a splitter item so it's size can't change.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockItem(index: number): void;
  /**
   * Locks a splitter bar so it can't be dragged.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockBar(index: number): void;
  /**
   * Removes a Splitter item.
   * @param {number} index. An item to be removed.
   */
  removeAt(index: number): void;
  /**
   * Removes all items from the Splitter
   */
  removeAll(): void;
  /**
   * Removes a child "jqx-splitter-item" node.
   * @param {Node} node. The "jqx-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Unhides a Splitter Bar
   * @param {number} splitterBar. An instance of a splitter bar.
   */
  showBar(splitterBar: number): void;
  /**
   * Unlocks a previously locked splitter item.
   * @param {number} item. The index of a Splitter Item or it's instance.
   */
  unlockItem(item: number): void;
  /**
   * Unlocks a previously locked splitter bar.
   * @param {number} item. The index of a Splitter Bar or it's instance.
   */
  unlockBar(item: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-splitter"): Splitter;
			querySelector(selectors: "jqx-splitter"): Splitter | null;	
			querySelectorAll(selectors: "jqx-splitter"): NodeListOf<Splitter>;
			getElementsByTagName(qualifiedName: "jqx-splitter"): HTMLCollectionOf<Splitter>;
			getElementsByName(elementName: "jqx-splitter"): NodeListOf<Splitter>;	
    }
}

/**Determines how the items are arranged inside the Splitter. <br />Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour.
 proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element.
 overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
 */
export const enum SplitterAutoFitMode{
	End = "end",
	Proportional = "proportional",
	Overflow = "overflow"
}

/**Determines the resize mode of the splitter. Possible values are: </br> - None - resizing is disabled. </br> - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior. </br> - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected. </br> Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
export const enum SplitterResizeMode{
	None = "none",
	Adjacent = "adjacent",
	End = "end",
	Proportional = "proportional"
}

/**
 SplitterBar splits two Split panels in a Splitter.
*/
export interface SplitterBar extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Hides the splitter bar.
   */
  hide(): void;
  /**
   * Unhides a splitter bar.
   */
  show(): void;
  /**
   * Locks the splitter bar.
   */
  lock(): void;
  /**
   * Unlocks the splitter bar.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-splitter-bar"): SplitterBar;
			querySelector(selectors: "jqx-splitter-bar"): SplitterBar | null;	
			querySelectorAll(selectors: "jqx-splitter-bar"): NodeListOf<SplitterBar>;
			getElementsByTagName(qualifiedName: "jqx-splitter-bar"): HTMLCollectionOf<SplitterBar>;
			getElementsByName(elementName: "jqx-splitter-bar"): NodeListOf<SplitterBar>;	
    }
}

/**
 Splitter Item is a Panel in a Splitter component.
*/
export interface SplitterItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines of the item is collapsed or not.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Determines of the item can be collapsed. If set to false, the item can't be collapsed
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Determines of the item can be resized or not.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Determines the max size of the item.
   * Default value: ""
   */
  max?: string;
  /**
   * Determines the min size of the item
   * Default value: ""
   */
  min?: string;
  /**
   * Determines the size of the item.
   * Default value: ""
   */
  size?: string;
  /**
   * Collapses the item.
   * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
   */
  collapse(far: string): void;
  /**
   * Expands the item if it's collapsed.
   */
  expand(): void;
  /**
   * Locks the item so it can no longer change it's size.
   */
  lock(): void;
  /**
   * Unlocks a previously locked item.
   */
  unlock(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-splitter-item"): SplitterItem;
			querySelector(selectors: "jqx-splitter-item"): SplitterItem | null;	
			querySelectorAll(selectors: "jqx-splitter-item"): NodeListOf<SplitterItem>;
			getElementsByTagName(qualifiedName: "jqx-splitter-item"): HTMLCollectionOf<SplitterItem>;
			getElementsByName(elementName: "jqx-splitter-item"): NodeListOf<SplitterItem>;	
    }
}

/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export interface SwitchButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets the text representation of checked=false state.
   * Default value: """"
   */
  falseContent?: string;
  /**
   * Sets custom template about false state.
   * Default value: null
   */
  falseTemplate?: any;
  /**
   * Sets or gets indeterminate state of the switch.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Sets the direction of switchin. If is true - positions of the switch states are changed.
   * Default value: false
   */
  inverted?: boolean;
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
   * Sets the orientation of the switch
   * Default value: horizontal
   */
  orientation?: Orientation;
  /**
   * If the custom element is readonly, it cannot be interacted with.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets the text representation of checked=true state.
   * Default value: """"
   */
  trueContent?: string;
  /**
   * Sets custom template about true state.
   * Default value: "null"
   */
  trueTemplate?: string;
  /**
   * Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API
   * Default value: default
   */
  switchMode?: SwitchButtonSwitchMode;
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
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-switch-button"): SwitchButton;
			querySelector(selectors: "jqx-switch-button"): SwitchButton | null;	
			querySelectorAll(selectors: "jqx-switch-button"): NodeListOf<SwitchButton>;
			getElementsByTagName(qualifiedName: "jqx-switch-button"): HTMLCollectionOf<SwitchButton>;
			getElementsByName(elementName: "jqx-switch-button"): NodeListOf<SwitchButton>;	
    }
}

/**Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element.
 click - clicking inside the track changes the state of the element.
 drag - dragging the thumb changes the state of the element.
none - the state of the element can only be changed via the API
 */
export const enum SwitchButtonSwitchMode{
	Default = "default",
	Click = "click",
	Drag = "drag",
	None = "none"
}

/**
 Defines a tab item.
*/
export interface TabItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Tab item close button state
   * Default value: false
   */
  closeButtonHidden?: boolean;
  /**
   * Tab item index
   * Default value: null
   */
  index?: number;
  /**
   * Tab item selected state
   * Default value: false
   */
  selected?: boolean;
  /**
   * Tab item label
   * Default value: ""
   */
  label?: string;
  /**
   * Tab item content
   * Default value: 
   */
  content?: any;
  /**
   * Tab item label size
   * Default value: null
   */
  labelSize?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tab-item"): TabItem;
			querySelector(selectors: "jqx-tab-item"): TabItem | null;	
			querySelectorAll(selectors: "jqx-tab-item"): NodeListOf<TabItem>;
			getElementsByTagName(qualifiedName: "jqx-tab-item"): HTMLCollectionOf<TabItem>;
			getElementsByName(elementName: "jqx-tab-item"): NodeListOf<TabItem>;	
    }
}

/**
 Defines a group of tab items.
*/
export interface TabItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: null
   */
  labelSize?: number;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tab-items-group"): TabItemsGroup;
			querySelector(selectors: "jqx-tab-items-group"): TabItemsGroup | null;	
			querySelectorAll(selectors: "jqx-tab-items-group"): NodeListOf<TabItemsGroup>;
			getElementsByTagName(qualifiedName: "jqx-tab-items-group"): HTMLCollectionOf<TabItemsGroup>;
			getElementsByName(elementName: "jqx-tab-items-group"): NodeListOf<TabItemsGroup>;	
    }
}

/**
 Table is an alternative of the HTMLTableElement.
*/
export interface Table extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Disables the interaction with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Table columns
   * Default value: null
   */
  columns?: any;
  /**
   * Determines the data source of the table component.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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
   * The name of the element. Used when submiting data inside a Form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the sorting mode of the Table.
   * Default value: none
   */
  sortMode?: TableSortMode;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Clears the Table sorting.
   */
  clearSort(): void;
  /**
   * Binds the table to the data source or rebinds it.
   */
  dataBind(): void;
  /**
   * Focuses the table. 
   */
  focus(): void;
  /**
   * Refreshes the table.
   */
  refresh(): void;
  /**
   * Sorts the Table by a column.
   * @param {string} columnDataField. Column field name.
   * @param {string} sortOrder?. Sort order.
   */
  sortBy(columnDataField: string, sortOrder?: string): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-table"): Table;
			querySelector(selectors: "jqx-table"): Table | null;	
			querySelectorAll(selectors: "jqx-table"): NodeListOf<Table>;
			getElementsByTagName(qualifiedName: "jqx-table"): HTMLCollectionOf<Table>;
			getElementsByName(elementName: "jqx-table"): NodeListOf<Table>;	
    }
}

/**Determines the sorting mode of the Table. */
export const enum TableSortMode{
	None = "none",
	One = "one",
	Many = "many"
}

/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export interface Tabs extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets whether the "Add new tab" button (+) is displayed.
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
   * Default value: false
   */
  allowToggle?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets the close button mode.
   * Default value: default
   */
  closeButtonMode?: TabsCloseButtonMode;
  /**
   * Sets or gets whether close buttons are displayed.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Sets or gets whether the Tabs content section is collapsed.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Enables or disables the collapsible feature.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Determines the data source that will be loaded to the Tabs.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip. 
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
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
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name?: string;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Sets or gets whether tab labels can be resized by dragging with the mouse.
   * Default value: false
   */
  resize?: boolean;
  /**
   * Sets or gets the position of the scroll buttons.
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition;
  /**
   * Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
   * Default value: paging
   */
  scrollMode?: TabsScrollMode;
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
   * Applies one of four behaviors when the element is not wide enough to display all tab labels.
   * Default value: scroll
   */
  tabLayout?: TabsTabLayout;
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
   * This event is triggered when the tab selection is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has ended.
   * @param ev. The custom event.    */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has started.
   * @param ev. The custom event.    */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when tabs have been reordered.
   * @param ev. The custom event.    */
  onreorder?: ((this: any, ev: Event) => any) | null;
  /**
   * Collapses the content section.
   */
  collapse(): void;
  /**
   * Makes sure a tab is visible by scrolling to it.
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the content section.
   */
  expand(): void;
  /**
   * Returns the offset of the tab item container (jqx-tab-item element) from the edge of the Tabs (jqx-tabs element) where the tab strip is positioned.
   * @param {number} index. The index of the tab item.
   * @returns {number}
   */
  getOffsetFromEdgeOfElement(index: number): number;
  /**
   * Inserts a new tab and an associated content section.
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
   */
  refreshTabHeader(): void;
  /**
   * Removes a tab and its associated content section.
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Selects a tab.
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
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
			createElement(tagName: "jqx-tabs"): Tabs;
			querySelector(selectors: "jqx-tabs"): Tabs | null;	
			querySelectorAll(selectors: "jqx-tabs"): NodeListOf<Tabs>;
			getElementsByTagName(qualifiedName: "jqx-tabs"): HTMLCollectionOf<Tabs>;
			getElementsByName(elementName: "jqx-tabs"): NodeListOf<Tabs>;	
    }
}

/**Sets or gets the close button mode. */
export const enum TabsCloseButtonMode{
	Default = "default",
	Selected = "selected"
}

/**Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
export const enum TabsScrollMode{
	Paging = "paging",
	Continuous = "continuous"
}

/**Determines the way the user can switch between tabs. */
export const enum TabSelectionMode{
	Click = "click",
	Dblclick = "dblclick",
	Mouseenter = "mouseenter",
	None = "none"
}

/**Applies one of four behaviors when the element is not wide enough to display all tab labels. */
export const enum TabsTabLayout{
	Scroll = "scroll",
	DropDown = "dropDown",
	Wrap = "wrap",
	Shrink = "shrink"
}

/**Sets or gets where the tab strip is positioned. */
export const enum TabPosition{
	Top = "top",
	Bottom = "bottom",
	Left = "left",
	Right = "right",
	Hidden = "hidden"
}

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

/**Applies one of four behaviors when the element is not wide enough to display all tab labels. */
export const enum TabLayout{
	Scroll = "scroll",
	Dropdown = "dropdown",
	Wrap = "wrap",
	Shrink = "shrink"
}

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

/**
 TextBox is an input field with auto-suggest options.
*/
export interface TextBox extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines whether the text box will be focused on page load or not.
   * Default value: false
   */
  autoFocus?: boolean;
  /**
   * Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
   * Default value: manual
   */
  autoComplete?: AutoComplete;
  /**
   * Determines the delay before the drop down opens to show the matches from the auto complete operation.
   * Default value: 100
   */
  autoCompleteDelay?: number;
  /**
   * Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether an indicator will appear during filtering and remote item loading.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember?: string;
  /**
   * Determines how the characters are displayed inside the input.
   * Default value: default
   */
  displayMode?: TextBoxDisplayMode;
  /**
   * Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
   * Default value: null
   */
  dropDownAppendTo?: any;
  /**
   * Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownHeight?: string | number;
  /**
   * Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxHeight?: string | number;
  /**
   * Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMaxWidth?: string | number;
  /**
   * Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinHeight?: string | number;
  /**
   * Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownMinWidth?: string | number;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Determines the placeholder for the drop down, displayed when there are no items in it.
   * Default value: "No Items"
   */
  dropDownPlaceholder?: string;
  /**
   * Determines the position of the drop down when opened.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
   * Default value: 
   */
  dropDownWidth?: string | number;
  /**
   * Determines the behavior of the element when Escape key is pressed.
   * Default value: none
   */
  escKeyMode?: EscKeyMode;
  /**
   * Specifies the behavior of "Enter" key.
   * Default value: submit
   */
  enterKeyBehavior?: EnterKeyBehavior;
  /**
   * The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
   * Default value: ""
   */
  form?: string;
  /**
   * Sets additional helper text below the element. The hint is visible only when the element is focused.
   * Default value: null
   */
  hint?: any;
  /**
   * Determines the visibility of the horizontal Scroll bar thats inside the drop down.
   * Default value: auto
   */
  horizontalScrollBarVisibility?: HorizontalScrollBarVisibility;
  /**
   * Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
   * Default value: ""
   */
  inputMember?: string;
  /**
   * Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
   * Default value: "off"
   */
  inputPurpose?: string;
  /**
   * Sets the height for all list items. Used only when virtualization is enabled.
   * Default value: null
   */
  itemHeight?: number | null;
  /**
   * Determines the item width measuring algorithm.
   * Default value: auto
   */
  itemMeasureMode?: ListItemMeasureMode;
  /**
   * A getter that returns an array of all List items inside the drop down.
   * Default value: 
   */
  items?: any;
  /**
   * The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets a little text label above the element.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Determines the position of the loading indicator.
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
   * Sets or gets the maximum number of characters that the user can enter.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines whether the drop down is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines the input's placeholder.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies that the user must fill the input before submitting a form with the element.
   * Default value: false
   */
  required?: boolean;
  /**
   * Determines whether the content of the input will be selected on focus or not.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
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
   * Sets or gets the value of the element. 
   * Default value: ""
   */
  value?: string;
  /**
   * Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
   * Default value: """"
   */
  valueMember?: string;
  /**
   * Determines the visibility of the vertical scroll bar that's inside the drop down.
   * Default value: auto
   */
  verticalScrollBarVisibility?: VerticalScrollBarVisibility;
  /** 
   * This event is triggered when the value of the Text Box is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value, type)
   *  oldValue - The previous value before it was changed.
   *  value - The new value.
   *  type - The type of the event.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Closes the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  close(): void;
  /**
   * Opens the drop down. <strong>The drop down is used only when auto complete is enabled.</strong>
   */
  open(): void;
  /**
   * The method is used to reset the input back to it's initial value.
   */
  reset(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-text-box"): TextBox;
			querySelector(selectors: "jqx-text-box"): TextBox | null;	
			querySelectorAll(selectors: "jqx-text-box"): NodeListOf<TextBox>;
			getElementsByTagName(qualifiedName: "jqx-text-box"): HTMLCollectionOf<TextBox>;
			getElementsByName(elementName: "jqx-text-box"): NodeListOf<TextBox>;	
    }
}

/**Determines the behavior of the element when Escape key is pressed. */
export const enum EscKeyMode{
	None = "none",
	PreviousValue = "previousValue",
	ClearValue = "clearValue"
}

/**
 Time Picker component allows the user to select time from spinners.
*/
export interface TimePicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets or gets whether after selecting hours, the element will automatically switch to minute selection.
   * Default value: false
   */
  autoSwitchToMinutes?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether the footer section of the element is visible or not.
   * Default value: false
   */
  footer?: boolean;
  /**
   * Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied.
   * Default value: null
   */
  footerTemplate?: string | HTMLTemplateElement;
  /**
   * Determines the hour selection format.
   * Default value: 12-hour
   */
  format?: TimePickerFormat;
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   * Sets or gets the step when selecting minutes.
   * Default value: 1
   */
  minuteInterval?: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the view that is currently being shown. By default the hours view is visible.
   * Default value: hour
   */
  selection?: TimePickerSelection;
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
   * Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time.
   * Default value: new Date()
   */
  value?: any;
  /**
   * Determines whether the element is in landscape or portrait mode.
   * Default value: portrait
   */
  view?: ViewLayout;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a Date object.
   *  value - The new value presented as a Date object.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /**
   * Sets the hours.
   * @param {number} hours. The hours to set.
   */
  setHours(hours: number): void;
  /**
   * Sets the minutes.
   * @param {number} minutes. The minutes to set.
   */
  setMinutes(minutes: number): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-time-picker"): TimePicker;
			querySelector(selectors: "jqx-time-picker"): TimePicker | null;	
			querySelectorAll(selectors: "jqx-time-picker"): NodeListOf<TimePicker>;
			getElementsByTagName(qualifiedName: "jqx-time-picker"): HTMLCollectionOf<TimePicker>;
			getElementsByName(elementName: "jqx-time-picker"): NodeListOf<TimePicker>;	
    }
}

/**Determines the hour selection format. */
export const enum TimePickerFormat{
	Twelve2Hour = "12-hour",
	Two4Hour = "24-hour"
}

/**Determines the view that is currently being shown. By default the hours view is visible. */
export const enum TimePickerSelection{
	Hour = "hour",
	Minute = "minute"
}

/**
 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
*/
export interface Toast extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property.
   * Default value: false
   */
  autoClose?: boolean;
  /**
   * Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true).
   * Default value: 3000
   */
  autoCloseDelay?: number;
  /**
   * Sets whether the toast will open automatically immediately after widget's initialization.
   * Default value: false
   */
  autoOpen?: boolean;
  /**
   * The user will not be able to interact with toast items when disabled is set to true.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap).
   * Default value: "null"
   */
  iconClass?: string;
  /**
   * Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap).
   * Default value: "null"
   */
  itemClass?: string;
  /**
   * Sets custom item template.
   * Default value: "null"
   */
  itemTemplate?: string;
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
   * In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded.
   * Default value: false
   */
  modal?: boolean;
  /**
   * Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set.
   * Default value: top-right
   */
  position?: ToastPosition;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets whether to show the toast item's close button.
   * Default value: false
   */
  showCloseButton?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets speciffic CSS settings and icon to the toast items.
   * Default value: info
   */
  type?: ToastType;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets a text value to an toast item.
   * Default value: 
   */
  value?: any;
  /** 
   * This event is triggered when the toast item is clicked.
   * @param ev. The custom event.    */
  onclick: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the toast item is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipebottom over an toast item.
   * @param ev. The custom event.    */
  onswipebottom?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipeleft over an toast item.
   * @param ev. The custom event.    */
  onswipeleft?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swiperight over an toast item.
   * @param ev. The custom event.    */
  onswiperight?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered on swipetop over an toast item.
   * @param ev. The custom event.    */
  onswipetop?: ((this: any, ev: Event) => any) | null;
  /**
   * Closes all opened toast items.
   */
  closeAll(): void;
  /**
   * Closes particular toast item.
   * @param {HTMLElement | string} item. The toast item (or its id) to remove.
   */
  closeItem(item: HTMLElement | string): void;
  /**
   * Closes the last opened toast item.
   */
  closeLast(): void;
  /**
   * Opens a new toast item and returns the opened jqx-toast-item instance. 
   * @returns {HTMLElement}
   */
  open(): HTMLElement;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-toast"): Toast;
			querySelector(selectors: "jqx-toast"): Toast | null;	
			querySelectorAll(selectors: "jqx-toast"): NodeListOf<Toast>;
			getElementsByTagName(qualifiedName: "jqx-toast"): HTMLCollectionOf<Toast>;
			getElementsByName(elementName: "jqx-toast"): NodeListOf<Toast>;	
    }
}

/**Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
export const enum ToastPosition{
	TopLeft = "top-left",
	TopRight = "top-right",
	BottomLeft = "bottom-left",
	BottomRight = "bottom-right"
}

/**Sets speciffic CSS settings and icon to the toast items. */
export const enum ToastType{
	Info = "info",
	Warning = "warning",
	Success = "success",
	Error = "error",
	Mail = "mail",
	Time = "time",
	None = "none"
}

/**
 ToggleButton allows the user to change a setting between two states.
*/
export interface ToggleButton extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Sets the state of the element.
   * Default value: false
   */
  checked?: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode?: ClickMode;
  /**
   * Enables or disables the ratio button.
   * Default value: false
   */
  disabled?: boolean;
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
   * This event is triggered when the state of the element is changed.
   * @param ev. The custom event.    */
  onchange: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-toggle-button"): ToggleButton;
			querySelector(selectors: "jqx-toggle-button"): ToggleButton | null;	
			querySelectorAll(selectors: "jqx-toggle-button"): NodeListOf<ToggleButton>;
			getElementsByTagName(qualifiedName: "jqx-toggle-button"): HTMLCollectionOf<ToggleButton>;
			getElementsByName(elementName: "jqx-toggle-button"): NodeListOf<ToggleButton>;	
    }
}

/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export interface Tooltip extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: false
   */
  arrow?: boolean;
  /**
   * Sets the position of the arrow.
   * Default value: bottom
   */
  arrowDirection?: TooltipArrowDirection;
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: 0
   */
  delay?: number;
  /**
   * Enables or disables the tooltip.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets an offset by X and Y.
   * Default value: 0,0
   */
  offset?: number[];
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
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidSelector": "' must be a string, an HTMLElement or null.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the way of triggering the tooltip.
   * Default value: hover
   */
  openMode?: TooltipOpenMode;
  /**
   * Gets or sets the position of the tooltip.
   * Default value: top
   */
  position?: TooltipPosition;
  /**
   * Sets the element which triggers the tooltip.
   * Default value: null
   */
  selector?: any;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets custom tooltip template.
   * Default value: null
   */
  tooltipTemplate?: any;
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
   * Sets or gets the visibility of the tooltip.
   * Default value: false
   */
  visible?: boolean;
  /** 
   * This event is triggered when the tooltip is opened.
   * @param ev. The custom event.    */
  onopen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the tooltip is closed.
   * @param ev. The custom event.    */
  onclose: ((this: any, ev: Event) => any) | null;
  /**
   * Closes jqx-tooltip. 
   */
  close(): void;
  /**
   * Opens jqx-tooltip. 
   */
  open(): void;
  /**
   * Toggles jqx-tooltip. 
   */
  toggle(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tooltip"): Tooltip;
			querySelector(selectors: "jqx-tooltip"): Tooltip | null;	
			querySelectorAll(selectors: "jqx-tooltip"): NodeListOf<Tooltip>;
			getElementsByTagName(qualifiedName: "jqx-tooltip"): HTMLCollectionOf<Tooltip>;
			getElementsByName(elementName: "jqx-tooltip"): NodeListOf<Tooltip>;	
    }
}

/**Sets the position of the arrow. */
export const enum TooltipArrowDirection{
	Bottom = "bottom",
	Top = "top",
	Left = "left",
	Right = "right"
}

/**Sets or gets the way of triggering the tooltip. */
export const enum TooltipOpenMode{
	Click = "click",
	Focus = "focus",
	Hover = "hover",
	Manual = "manual"
}

/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export interface Tree extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
   * Default value: false
   */
  allowDrag?: boolean;
  /**
   * Allows drop operation. Dropped items could originate from the current tree or another tree.
   * Default value: false
   */
  allowDrop?: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
   * Default value: false
   */
  autoHideToggleElement?: boolean;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
   * Default value: true
   */
  autoSort?: boolean;
  /**
   * Determines the data source that will be loaded to the Tree.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Enables or disables jqxTree.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Shows or hides loading indicator.
   * Default value: false
   */
  displayLoadingIndicator?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
   * Default value: null
   */
  dragFeedbackFormatFunction?: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset?: number[];
  /**
   * Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Enables or disables filtering. Shows or hides filter input.
   * Default value: false
   */
  filterable?: boolean;
  /**
   * Sets custom text for placeholder in the filter input.
   * Default value: ""
   */
  filterInputPlaceholder?: string;
  /**
   * Sets filter mode.
   * Default value: containsIgnoreCase
   */
  filterMode?: FilterMode;
  /**
   * Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
   * Default value: false
   */
  hasThreeStates?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder?: string;
  /**
   * Sets the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition?: VerticalAlignment;
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
   *     "noId": "jqx-tree: Saving and loading the element's state are not available if the element has no id."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
   * Default value: auto
   */
  overflow?: Overflow;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the right-to-left support is enabled.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
   * Default value: scrollbar
   */
  scrollMode?: TreeScrollMode;
  /**
   * An array with indexes (paths) of the selected items.
   * Default value: 
   */
  selectedIndexes?: string[];
  /**
   * Determines the way selected items are highlighted.
   * Default value: row
   */
  selectionDisplayMode?: TreeSelectionDisplayMode;
  /**
   * Determines selection mode.
   * Default value: one
   */
  selectionMode?: TreeSelectionMode;
  /**
   * Shows or hides lines, displaying the relation between elements in group.
   * Default value: false
   */
  showLines?: boolean;
  /**
   * Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
   * Default value: false
   */
  showRootLines?: boolean;
  /**
   * Sets user-defined function about custom sorting.
   * Default value: null
   */
  sort?: any;
  /**
   * Determines sort direction - ascending or descending.
   * Default value: asc
   */
  sortDirection?: TreeSortDirection;
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  sorted?: boolean;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines togle element (arrow) position.
   * Default value: near
   */
  toggleElementPosition?: Position;
  /**
   * Determines the way to toggle jqx-tree-items-groups.
   * Default value: dblclick
   */
  toggleMode?: TreeToggleMode;
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember?: string;
  /** 
   * This event is triggered when selection in jqx-tree is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, oldSelectedIndexes, selectedIndexes)
   *  item - The item the user has interacted with to change the selection (only when applicable).
   *  oldSelectedIndexes - The selected indexes before the selection is changed.
   *  selectedIndexes - The selected indexes after the selection is changed.
   */
  onchange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is collapsed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the collapsed jqx-tree-items-group
   *  label - the label of the collapsed jqx-tree-items-group
   *  path - the path of the collapsed jqx-tree-items-group
   *  value - the value of the collapsed jqx-tree-items-group
   *  children - the children of the collapsed jqx-tree-items-group
   */
  oncollapse?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be collapsed
   *  label - the label of the jqx-tree-items-group to be collapsed
   *  path - the path of the jqx-tree-items-group to be collapsed
   *  value - the value of the jqx-tree-items-group to be collapsed
   *  children - the children of the jqx-tree-items-group to be collapsed
   */
  oncollapsing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-item/jqx-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the tree the dragged item(s) is dropped to
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drop operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   *  target - the element the dragged items are dropped to
   */
  ondragend: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-item/jqx-tree-items-group is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the dragging operation
   */
  ondragging?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in jqx-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the tree the dragged item(s) is dragged from
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   */
  ondragstart: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the expanded jqx-tree-items-group
   *  label - the label of the expanded jqx-tree-items-group
   *  path - the path of the expanded jqx-tree-items-group
   *  value - the value of the expanded jqx-tree-items-group
   *  children - the children of the expanded jqx-tree-items-group
   */
  onexpand?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a jqx-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the jqx-tree-items-group to be expanded
   *  label - the label of the jqx-tree-items-group to be expanded
   *  path - the path of the jqx-tree-items-group to be expanded
   *  value - the value of the jqx-tree-items-group to be expanded
   *  children - the children of the jqx-tree-items-group to be expanded
   */
  onexpanding?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the bottom.
   * @param ev. The custom event.    */
  onscrollbottomreached?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the top.
   * @param ev. The custom event.    */
  onscrolltopreached?: ((this: any, ev: Event) => any) | null;
  /**
   * Adds an item after another item as a sibling.
   * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item after.
   */
  addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item before another item as a sibling.
   * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item before.
   */
  addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item as the last child of a parent item.
   * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
   * @param {string | HTMLElement} parent?. The jqx-tree-items-group (or its id or numeric path) to add the item to.
   */
  addTo(item: HTMLElement, parent?: string | HTMLElement): void;
  /**
   * Clears selection.
   */
  clearSelection(): void;
  /**
   * Collapses all jqx-tree-items-groups.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseAll(animation?: boolean): void;
  /**
   * Collapses a jqx-tree-items-group.
   * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Makes sure an item is visible by scrolling to it.
   * @param {HTMLElement | string} item. The id or numeric path of an item
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Expands all jqx-tree-items-groups.
   * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandAll(animation?: string): void;
  /**
   * Expands single jqx-tree-items-group.
   * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Applies filter to the Tree.
   * @param {string} filterQuery. Filter query.
   */
  filter(filterQuery: string): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item.
   * @returns {any}
   */
  getItem(id: string): any;
  /**
   * Returns jqxTree's state
   * @returns {any}
   */
  getState(): any;
  /**
   * Inserts an item at the given position.
   * @param {any} item. A jqx-tree-item/jqx-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'jqx-tree-item'</em> - default - or <em>'jqx-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
   * @param {string} path?. The path to insert the item at.
   */
  insert(item: any, path?: string): void;
  /**
   * Loads the Tree's state.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
  /**
   * Moves an item down relative to its siblings.
   * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
   */
  moveDown(item: HTMLElement | string): void;
  /**
   * Moves an item up relative to its siblings.
   * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
   */
  moveUp(item: HTMLElement | string): void;
  /**
   * Removes an item.
   * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Saves the Tree's state.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Selects an item.
   * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
   */
  select(item: HTMLElement | string): void;
  /**
   * Unselects an item.
   * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
   */
  unselect(item: HTMLElement | string): void;
  /**
   * Updates an item.
   * @param {HTMLElement | string} item. jqx-tree-item/jqx-tree-items-group (or its id or numeric path).
   * @param {any} newItem. An object with updated properties.
   */
  updateItem(item: HTMLElement | string, newItem: any): void;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tree"): Tree;
			querySelector(selectors: "jqx-tree"): Tree | null;	
			querySelectorAll(selectors: "jqx-tree"): NodeListOf<Tree>;
			getElementsByTagName(qualifiedName: "jqx-tree"): HTMLCollectionOf<Tree>;
			getElementsByName(elementName: "jqx-tree"): NodeListOf<Tree>;	
    }
}

/**Determines whether to use scrollbar or scrollButtons when content overflows an element's box. */
export const enum TreeScrollMode{
	Scrollbar = "scrollbar",
	ScrollButtons = "scrollButtons"
}

/**Determines the way selected items are highlighted. */
export const enum TreeSelectionDisplayMode{
	Row = "row",
	Label = "label"
}

/**Determines selection mode. */
export const enum TreeSelectionMode{
	None = "none",
	OneOrManyExtended = "oneOrManyExtended",
	ZeroOrMany = "zeroOrMany",
	OneOrMany = "oneOrMany",
	ZeroOrOne = "zeroOrOne",
	One = "one",
	CheckBox = "checkBox",
	RadioButton = "radioButton"
}

/**Determines sort direction - ascending or descending. */
export const enum TreeSortDirection{
	Ascending = "ascending",
	Descending = "descending"
}

/**Determines the way to toggle jqx-tree-items-groups. */
export const enum TreeToggleMode{
	Click = "click",
	Dblclick = "dblclick",
	Arrow = "arrow"
}

/**
 Defines a tree items.
*/
export interface TreeItem extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: true
   */
  checked?: boolean;
  /**
   * 
   * Default value: null
   */
  items?: any;
  /**
   * 
   * Default value: 
   */
  label?: any;
  /**
   * 
   * Default value: null
   */
  level?: number;
  /**
   * 
   * Default value: true
   */
  separator?: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut?: string;
  /**
   * 
   * Default value: null
   */
  value?: any;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tree-item"): TreeItem;
			querySelector(selectors: "jqx-tree-item"): TreeItem | null;	
			querySelectorAll(selectors: "jqx-tree-item"): NodeListOf<TreeItem>;
			getElementsByTagName(qualifiedName: "jqx-tree-item"): HTMLCollectionOf<TreeItem>;
			getElementsByName(elementName: "jqx-tree-item"): NodeListOf<TreeItem>;	
    }
}

/**
 Defines a group of tree items.
*/
export interface TreeItemsGroup extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * 
   * Default value: false
   */
  selected?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "jqx-tree-items-group"): TreeItemsGroup;
			querySelector(selectors: "jqx-tree-items-group"): TreeItemsGroup | null;	
			querySelectorAll(selectors: "jqx-tree-items-group"): NodeListOf<TreeItemsGroup>;
			getElementsByTagName(qualifiedName: "jqx-tree-items-group"): HTMLCollectionOf<TreeItemsGroup>;
			getElementsByName(elementName: "jqx-tree-items-group"): NodeListOf<TreeItemsGroup>;	
    }
}

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
		/**Determines the position of the footer of the window element. */
export const enum WindowFooterPosition{
	Bottom = "bottom",
	None = "none"
}

/**Determines if the close button is visible on select or always. Applicable only to TabsWindow. */
export const enum WindowTabCloseButtonMode{
	Default = "default",
	Selected = "selected"
}

