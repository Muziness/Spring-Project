import  {BaseElement, Animation} from "./smart.element"

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

/**Determines the format of the dates in the timeline header when they represent days. */
export const enum DayFormat{
	TwoDigit = "2-digit",
	Numeric = "numeric",
	Long = "long",
	Short = "short",
	Narrow = "narrow"
}

/**Determines in what unit is task duration property measured. */
export const enum Duration{
	Day = "day",
	Hour = "hour",
	Minute = "minute",
	Second = "second",
	Milisecond = "milisecond"
}

/**Determines weather or not horizontal scrollbar is shown. */
export const enum HorizontalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
}

/**Determines the format of the dates the timeline header when they represent months. */
export const enum MonthFormat{
	TwoDigit = "2-digit",
	Numeric = "numeric",
	Long = "long",
	Short = "short",
	Narrow = "narrow"
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

/**Determines weather or not vertical scrollbar is shown. */
export const enum VerticalScrollBarVisibility{
	Auto = "auto",
	Disabled = "disabled",
	Hidden = "hidden",
	Visible = "visible"
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

/**Determines the format of the dates inside the timeline header when they represent years. */
export const enum YearFormat{
	TwoDigit = "2-digit",
	Numeric = "numeric"
}

/**Determines the format of the dates inside the timeline header when they represent weeks.  */
export const enum WeekFormat{
	Long = "long",
	Numeric = "numeric"
}

