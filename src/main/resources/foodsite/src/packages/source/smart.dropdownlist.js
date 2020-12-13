
/* Smart UI v7.0.0 (2020-Mar)
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-drop-down-list",class extends Smart.ContentElement{static get properties(){return{autoCloseDelay:{value:100,type:"number"},dataSource:{value:null,type:"any",reflectToAttribute:!1},displayLoadingIndicator:{value:!1,type:"boolean"},displayMember:{value:"",type:"string"},displayMode:{allowedValues:["outlined","filled","underlined"],value:"outlined",type:"string"},dropDownAppendTo:{value:null,type:"any"},dropDownButtonPosition:{allowedValues:["none","left","right","top","bottom"],value:"right",defaultReflectToAttribute:!0,type:"string"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"default",type:"string"},dropDownOverlay:{value:!1,type:"boolean"},dropDownPlaceholder:{value:"No Items",type:"string"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},filterable:{value:!1,type:"boolean"},filterInputPlaceholder:{value:"",type:"string"},filterCallback:{value:null,type:"function?"},filterMode:{value:"startsWithIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase","custom"],type:"string"},grouped:{value:!1,type:"boolean"},groupMember:{value:"",type:"string"},hint:{value:"",type:"string"},horizontalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},incrementalSearchDelay:{value:700,type:"number?"},incrementalSearchMode:{value:"startsWithIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase"],type:"string"},itemMeasureMode:{value:"auto",allowedValues:["auto","precise"],type:"string"},inputMember:{value:"label",type:"string"},itemTemplate:{value:null,type:"any"},itemHeight:{value:null,type:"number?"},label:{value:"",type:"string"},loadingIndicatorPlaceholder:{value:"Loading...",type:"string"},loadingIndicatorPosition:{value:"center",allowedValues:["bottom","center","top"],type:"string"},messages:{extend:!0,value:{en:{invalidNode:"{{elementType}}: Invalid parameter \"{{node}}\" when calling {{method}}."}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"",type:"string"},resizeMode:{value:"none",allowedValues:["none","horizontal","vertical","both"],type:"string"},resizeIndicator:{value:!1,type:"boolean"},selectionDisplayMode:{value:"plain",allowedValues:["plain","placeholder","tokens"],type:"string"},selectionMode:{value:"one",allowedValues:["none","oneOrManyExtended","zeroOrMany","oneOrMany","zeroOrOne","one","checkBox","radioButton"],type:"string"},selectedIndexes:{value:[],type:"array"},selectedValues:{value:[],type:"array"},sorted:{value:!1,type:"boolean"},sortDirection:{value:"asc",type:"string"},tokenTemplate:{value:null,type:"any"},type:{value:"list",type:"string",defaultReflectToAttribute:!0,readonly:!0},valueMember:{value:"",type:"string"},virtualized:{value:!1,type:"boolean"},verticalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]}}}static get listeners(){return{"actionButton.down":"_buttonsDownHandler","actionButton.mouseenter":"_buttonsMouseEventsHandler","actionButton.mouseleave":"_buttonsMouseEventsHandler","actionButton.focus":"_buttonsFocusHandler","actionButton.blur":"_buttonsFocusHandler","document.selectstart":"_selectStartHandler","document.dragstart":"_dragStartHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.move":"_documentMoveHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",keyup:"_keyUpHandler",focus:"_focusEventHandler",blur:"_blurEventHandler","dropDownButton.focus":"_buttonsFocusHandler","dropDownButton.blur":"_buttonsFocusHandler","dropDownContainer.transitionend":"_dropDownTransitionendHandler","listBox.change":"_listBoxChangeHandler","listBox.itemClick":"_listBoxItemClickHandler","listBox.keydown":"_listBoxKeyDownHandler","listBox.bindingComplete":"_bindingCompleteHandler",mouseenter:"_mouseEnterHandler",mouseleave:"_mouseLeaveHandler",resize:"_resizeHandler","resizeBar.move":"_resizeBarMoveHandler",styleChanged:"_styleChangedHandler",wheel:"_mouseWheelHandler"}}template(){return`<div id="container" role="presentation">
                    <span class="smart-label" id="label">[[label]]</span>
                    <div id="content" class="smart-content" role="presentation">
                        <div class="smart-buttons-container" id="buttonsContainer" role="presentation">
                            <span id="actionButton" class ="smart-action-button" role="presentation">[[placeholder]]</span>
                            <span id="dropDownButton" class="smart-drop-down-button">
                                <span class ="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>
                            </span>
                        </div>
                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="presentation">
                            <smart-list-box id="listBox" unfocusable
                                    animation="[[animation]]"
                                    data-source="[[dataSource]]"
                                    disabled="[[disabled]]"
                                    display-loading-indicator="[[displayLoadingIndicator]]"
                                    display-member="[[displayMember]]"
                                    filterable="[[filterable]]"
                                    filter-callback="[[filterCallback]]"
                                    filter-mode="[[filterMode]]"
                                    filter-input-placeholder="[[filterInputPlaceholder]]"
                                    grouped="[[grouped]]"
                                    group-member="[[groupMember]]"
                                    item-height="[[itemHeight]]"
                                    item-measure-mode="[[itemMeasureMode]]"
                                    item-template="[[itemTemplate]]"
                                    incremental-search-delay="[[incrementalSearchDelay]]"
                                    incremental-search-mode="[[incrementalSearchMode]]"
                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"
                                    loading-indicator-position="[[loadingIndicatorPosition]]"
                                    name="[[name]]"
                                    placeholder="[[dropDownPlaceholder]]"
                                    right-to-left="[[rightToLeft]]"
                                    readonly="[[readonly]]"
                                    selected-indexes="{{selectedIndexes}}"
                                    selection-mode="[[selectionMode]]"
                                    selected-values="{{selectedValues}}"
                                    sorted="[[sorted]]"
                                    sort-direction="[[sortDirection]]"
                                    theme="[[theme]]"
                                    value-member="[[valueMember]]"
                                    horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"
                                    vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]"
                                    virtualized="[[virtualized]]">
                                <content></content>
                            </smart-list-box>
                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">
                                <div></div>
                            </div>
                         </div>
                    </div>
                    <span class="smart-hint" id="hint">[[hint]]</span>
                </div>`}static get styleUrls(){return["smart.dropdownlist.css","smart.dropdown.css"]}propertyChangedHandler(e,t,o){super.propertyChangedHandler(e,t,o);const n=this;switch(e){case"animation":n.$.dropDownContainer.setAttribute("animation",n.animation);break;case"disabled":n._setFocusable(),n.close(),n._positionDetection.handleAutoPositioning();break;case"dataSource":case"displayMember":case"inputMember":n.$.actionButton&&(n.$.actionButton.innerHTML=n.placeholder),n._setDropDownSize(),n._positionDetection.checkBrowserBounds("vertically"),n._positionDetection.positionDropDown(),n._positionDetection.checkBrowserBounds("horizontally");break;case"dropDownAppendTo":n._positionDetection.dropDownAppendToChangedHandler();break;case"dropDownOpenMode":n._setFocusable(),n.$dropDownContainer.addClass("smart-visibility-hidden"),n.$.dropDownButton.removeAttribute("selected"),n.removeAttribute("drop-down-button-focus"),n.removeAttribute("action-button-focus"),n.opened=!1,n._ariaButton&&n._ariaButton.setAttribute("aria-expanded",!1),n._setAriaRelations();break;case"dropDownOverlay":o||n._positionDetection.removeOverlay();break;case"dropDownPosition":n._positionDetection.dropDownPositionChangedHandler();break;case"dropDownMinWidth":case"dropDownWidth":case"dropDownMaxWidth":case"dropDownHeight":case"dropDownMinHeight":case"dropDownMaxHeight":n._setDropDownSize();break;case"filterable":n.$.listBox.filterable=o,n._dropDownSize&&"auto"===n._dropDownSize.height&&n._setDropDownSize();break;case"label":if(!n._ariaButton)return;o?n._ariaButton.setAttribute("aria-labelledby",n.$.label.id):"DropDownList"===n.elementName&&n._ariaButton.setAttribute("aria-labelledby",n.$.actionButton.id);break;case"opened":if(n.disabled||n.readonly)return;o?n.open():n.close();break;case"placeholder":n._applySelection();break;case"readonly":n.close();break;case"resizeIndicator":o?n.$.dropDownContainer.setAttribute("resize-indicator",""):n.$.dropDownContainer.removeAttribute("resize-indicator");break;case"resizeMode":n.$.dropDownContainer.setAttribute("resize-mode",n.resizeMode);break;case"selectedValues":case"selectedIndexes":0===o.length?n.$.actionButton.innerHTML=n.placeholder:n._applySelection();break;case"selectionDisplayMode":n._applySelection();break;case"tokenTemplate":n._tokenTemplate=n._validateTemplate(n.tokenTemplate),n._applySelection();break;case"unfocusable":n._setFocusable();}}appendChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}return e?void(t.$.listBox.appendChild(e),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize()):void t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}attached(){const e=this;super.attached();e.isCompleted&&e.$.dropDownContainer&&(e._positionDetection.dropDownAttached("_setDropDownSize"),e._positionDetection.checkBrowserBounds())}detached(){const e=this;super.detached();e.$.dropDownContainer&&(e.close(),e._positionDetection&&e._positionDetection.dropDownDetached())}clearItems(){const e=this;e.$.listBox&&(e.$.listBox.clearItems(),e.$.actionButton.innerHTML=e.placeholder)}clearSelection(){const e=this;e.$.listBox&&(e.$.listBox.clearSelection(),e.$.actionButton.innerHTML=e.placeholder)}close(){const e=this;if(!e.$dropDownContainer.hasClass("smart-visibility-hidden")){const t=e.$.fireEvent("closing").defaultPrevented;t||(e.$dropDownContainer.addClass("smart-visibility-hidden"),e.$.fireEvent("close"),e.$.dropDownButton&&e.$.dropDownButton.removeAttribute("selected"),e.opened=!1,e._ariaButton&&e._ariaButton.setAttribute("aria-expanded",!1),e._preventDropDownClose=!1,e._positionDetection.removeOverlay(!0),e.$.listBox.removeAttribute("focus"),e._edgeMacFF&&!e.hasAnimation&&e.$.dropDownContainer&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view")))}}cloneNode(){const e=this;if(e.$.listBox){let t=HTMLElement.prototype.cloneNode.apply(e,Array.prototype.slice.call(arguments,0,1));return t.dataSource=e.dataSource,t}}ensureVisible(e){const t=this;t.$.listBox&&t.$.listBox.ensureVisible(e)}getItem(e){const t=this;return t.$.listBox?t.$.listBox.getItem(e):void 0}get items(){const e=this;return e.$&&e.$.listBox?e.$.listBox.items:void 0}get _focusedItem(){const e=this;return e.$&&e.$.listBox?e.$.listBox._focusedItem:void 0}insert(e,t){const o=this;o.$.listBox&&(o.$.listBox.insert(e,t),o._applySelection(),o._dropDownSize&&"auto"===o._dropDownSize.height&&o._setDropDownSize())}insertBefore(e,t){const o=this;if(!o.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(o,e.concat(Array.prototype.slice.call(arguments)))}return e&&t?void(!o.$.listBox||(o.$.listBox.insertBefore(e,t),o._dropDownSize&&"auto"===o._dropDownSize.height&&o._setDropDownSize())):void o.error(o.localize("invalidNode",{elementType:o.nodeName.toLowerCase(),method:"insertBefore",node:"newNode/referenceNode"}))}open(){const e=this,t=function(){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled)return e.items[t]};if(!e.disabled&&e.offsetHeight&&e.$dropDownContainer.hasClass("smart-visibility-hidden")){if(e.$dropDownContainer.hasClass("not-in-view")&&e.$dropDownContainer.removeClass("not-in-view"),e.$.dropDownContainer.style.transition=null,e.dropDownAppendTo&&0<e.dropDownAppendTo.length){const t=e.getBoundingClientRect();if(e.$.container.contains(e.$.dropDownContainer)){let t=0;const o=setInterval(function(){const n=e.getBoundingClientRect();t++,n.top===e._positionTop&&10>t||(e.open(),clearInterval(o),e._positionTop=n.top)},100);return}t.top!==e._positionTop&&(e._positionTop=t.top)}const o=e.$.fireEvent("opening").defaultPrevented;o||(e._shadowDOMStylesDelay&&(e._setDropDownSize(),delete e._shadowDOMStylesDelay),e.opened=!0,e._ariaButton&&e._ariaButton.setAttribute("aria-expanded",!0),e.$.listBox.setAttribute("focus",""),e._positionDetection.placeOverlay(),e._positionDetection.checkBrowserBounds("vertically"),e._positionDetection.positionDropDown(),e._positionDetection.checkBrowserBounds("horizontally"),e.$dropDownContainer.removeClass("smart-visibility-hidden"),e.$.fireEvent("open"),e.$.dropDownButton&&("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("selected",""):e.$.dropDownButton.removeAttribute("selected")),(e.$.listBox&&!e._focusedItem||e._focusedItem&&!e._focusedItem._focused)&&(0<e.selectedIndexes.length?e._focus(e.items[e.selectedIndexes[0]]):e._focus(t)),e.$.input&&!Smart.Utilities.Core.isMobile&&e.$.input.focus())}}ready(){super.ready()}render(){const e=this;e.rightToLeft&&(e.dropDownButtonPosition="right"===e.dropDownButtonPosition?"left":"right"),e.classList.add("smart-drop-down-box"),e.$.dropDownContainer&&(e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDownContainer,e.$.container,"close"),e._positionDetection.getDropDownParent(!0),e._positionDetection.setDropDownPosition(),e._calculateDropDownSize(),e.$.dropDownContainer.setAttribute("resize-mode",e.resizeMode),e.resizeIndicator&&e.$.dropDownContainer.setAttribute("resize-indicator",""),e._positionDetection.handleAutoPositioning()),e.opened&&e.open(),e._positionTop=e.getBoundingClientRect().top,e._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),e._edgeMacFF&&e.hasAnimation&&e.$.dropDownContainer&&e.$dropDownContainer.addClass("not-in-view"),e.$.label&&!e.$.label.id&&(e.$.label.id=e.id+"Label"),e.$.actionButton&&!e.$.actionButton.id&&(e.$.actionButton.id=e.id+"ActionButton"),e.$.hint&&!e.$.hint.id&&(e.$.hint.id=e.id+"Hint"),e._createElement(),super.render()}remove(e){const t=this;t.$.listBox&&(t.$.listBox.remove(e),t._applySelection(),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize())}removeChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}return e&&e instanceof Smart.ListItem?void(t.$.listBox.removeChild(e),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize()):void t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}select(e){const t=this;t.$.listBox&&t.$.listBox.select(e)}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),e.$.actionButton.removeAttribute("tabindex"),void e.$.dropDownButton.removeAttribute("tabindex");let t=0<e.tabIndex?e.tabIndex:0;"dropDownButton"===e.dropDownOpenMode?(e.removeAttribute("tabindex"),e.$.actionButton.setAttribute("tabindex",t),e.$.dropDownButton.setAttribute("tabindex",t)):(e.$.actionButton.removeAttribute("tabindex"),e.$.dropDownButton.removeAttribute("tabindex"),e.tabIndex=t)}static get requires(){return{"Smart.ListBox":"smart.listbox.js"}}unselect(e){const t=this;t.$.listBox&&t.$.listBox.unselect(e)}update(e,t){const o=this;o.$.listBox&&(o.$.listBox.update(e,t),o._applySelection())}_resizeBarMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_createToken(){const e=this;let t,o=!1;const n=document.createDocumentFragment(),r=e.selectedIndexes[e.selectedIndexes.length-1];"plain"===e.selectionDisplayMode&&("one"===e.selectionMode||"zeroOrOne"===e.selectionMode||"radioButton"===e.selectionMode)?t="":"tokens"===e.selectionDisplayMode?1===e.selectedIndexes.length&&-1<["oneOrManyExtended","oneOrMany","one","radioButton"].indexOf(e.selectionMode)?t="":(t="&#10006",o=!0):t=1===e.selectedIndexes.length?"":",";const a=e.selectedIndexes,s=e.$.listBox._items;for(let l=0;l<a.length;l++){const i=a[l];s[i]&&n.appendChild(e._applyTokenTemplate(s[i][e.inputMember],"tokens"!==e.selectionDisplayMode&&i===r?"":t,o))}return n}_applySelection(){const e=this;return"placeholder"===e.selectionDisplayMode||0===e.selectedIndexes.length?void(e.$.actionButton.innerHTML=e.placeholder):void(!e.$.listBox._items||0===e.$.listBox._items.length||(e.$.actionButton.innerHTML="",e.$.actionButton.appendChild(e._createToken())))}_applyTokenTemplate(e,t,o){const n=this,r=document.createElement("span"),a=function(){return"<span class='smart-drop-down-list-selection-label' role=\"presentation\">"+e+`</span><span class=\'smart-drop-down-list-unselect-button\' role="button"${o?" aria-label=\"Unselect\"":""}> ${t}</span >`};if(r.classList.add("smart-token"),n._tokenTemplate){let e=document.importNode(n._tokenTemplate.content,!0);const t=e.childNodes.length,o=/{{\w+}}/g;let s;for(let n=0;n<t;n++)s=o.exec(e.childNodes[n].innerHTML),s&&(e.childNodes[n].innerHTML=e.childNodes[n].innerHTML.replace(s[0],a())),e.childNodes[n].outerHTML&&(r.innerHTML+=e.childNodes[n].outerHTML)}else"function"==typeof n.tokenTemplate?n.tokenTemplate(r,{label:e,iconSeparator:t}):r.innerHTML=a();return r}_bindingCompleteHandler(){const e=this;e.$.listBox&&requestAnimationFrame(()=>{e._setDropDownSize(),e._positionDetection.checkBrowserBounds()})}_buttonsDownHandler(e){const t=this;if(!t.disabled){if(t.hasRippleAnimation)if(!t.$.buttonsContainer||"dropDownButton"===t.dropDownOpenMode)Smart.Utilities.Animation.Ripple.animate(e.target,e.pageX,e.pageY);else{const o=t.$.buttonsContainer;o.firstElementChild.noRipple=!0,Smart.Utilities.Animation.Ripple.animate(o,e.pageX,e.pageY),o.firstElementChild.noRipple=!1}t._preventsSelectStart=!0,"dropDownButton"===t.dropDownOpenMode&&e.target===t.$.actionButton&&t.$.actionButton.setAttribute("active",""),t.opened&&(t._preventDropDownClose=!0)}}_buttonsMouseEventsHandler(e){const t=this;t.disabled||("mouseenter"===e.type?(t.setAttribute("hover",""),e.target.setAttribute("hover","")):(t.removeAttribute("hover"),e.target.removeAttribute("hover")))}_calculateDropDownSize(){const e=this;e._dropDownSize={};const t=window.getComputedStyle(e.$.dropDownContainer),o=parseFloat(t.getPropertyValue("border-top-width").trim()),n=parseFloat(t.getPropertyValue("border-bottom-width").trim()),i=parseFloat(t.getPropertyValue("margin-top").trim()),r=parseFloat(t.getPropertyValue("margin-bottom").trim()),a=parseFloat(t.getPropertyValue("padding-top").trim()),s=parseFloat(t.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(e._dropDownSize.width=t.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),e._dropDownSize.height=t.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!e._dropDownSize.width||-1<e._dropDownSize.width.indexOf("initial"))&&(e._dropDownSize.width=e.offsetWidth),e._dropDownSize.height||(e._dropDownSize.height="auto"),e._dropDownSize.minHeight=parseFloat(t.getPropertyValue("min-height").trim()),e._dropDownSize.maxHeight=parseFloat(t.getPropertyValue("max-height").trim()),e._dropDownSize.borderWidth=(isNaN(o)?0:o)+(isNaN(n)?0:n),e._dropDownSize.paddingWidth=(isNaN(a)?0:a)+(isNaN(s)?0:s),e._dropDownSize.marginWidth=(isNaN(i)?0:i)+(isNaN(r)?0:r)}_createElement(){const e=this;e._tokenTemplate=e._validateTemplate(e.tokenTemplate),e._applySelection(),e._setDropDownSize(),e._setFocusable(),e.$.arrow.noRipple=!0,e._shadowDOMStylesDelay=e.shadowRoot,e._setAriaRelations(!0)}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let o=e.originalEvent.target;if(o===t._overlay&&(t._overlayDown=!0),t.shadowRoot){o=e.originalEvent.composedPath()[0];for(let e=o.getRootNode().host;e;)e.closest(".smart-drop-down-container")===t.$.dropDownContainer&&(t._isDropDownClicked=!0),e=e.getRootNode().host}else t.isInShadowDOM&&(o=e.originalEvent.composedPath()[0]),t._isDropDownClicked=o.closest(".smart-drop-down-container")===t.$.dropDownContainer;if(t._buttonClicked=o.closest(".smart-action-button")||o.closest(".smart-drop-down-button"),t.$.listBox){let n=o.closest("smart-list-item");t.$.listBox.contains(n)||(n=void 0),t.hasRippleAnimation&&n&&Smart.Utilities.Animation.Ripple.animate(n,e.pageX,e.pageY),(n||o===t.$.listBox.$.filterInput||o.closest(".smart-token"))&&(t._preventDropDownClose=!0)}if(t._isDropDownClicked&&(t._preventDropDownClose=!0),o===t.$.resizeBar&&"none"!==t.resizeMode){t._resizeDetails||(t._resizeDetails={});const o=t.$.dropDownContainer.getBoundingClientRect();t._resizeDetails.started=!0,t._resizeDetails.x=e.pageX,t._resizeDetails.y=e.pageY,t._resizeDetails.width=t.$.dropDownContainer.offsetWidth,t._resizeDetails.height=t.$.dropDownContainer.offsetHeight,t._resizeDetails.offsetXL=e.clientX-o.left,t._resizeDetails.offsetXR=o.left+t.$.dropDownContainer.offsetWidth-e.clientX,t._resizeDetails.offsetY=o.top+t.$.dropDownContainer.offsetHeight-e.clientY,t._resizeDetails.offsetYtop=e.clientY-o.top,t._preventDropDownClose=!0}}_documentMoveHandler(e){function t(){if(u=e.pageY-r._resizeDetails.y,"bottom"===p)r._resizeDetails.height=n(s.clientHeight-l.top-6,i(0,r._resizeDetails.height+u)),r._resizeDetails.y=i(l.top+s.scrollTop-r._resizeDetails.offsetY,n(s.clientHeight+s.scrollTop-1.5*r._resizeDetails.offsetY,e.pageY));else{if(r._resizeDetails.height=n(r._dropDownSize.maxHeight,i(0,n(d.top,r._resizeDetails.height-u))),u=i(0,l.top+(l.height-i(r._dropDownSize.minHeight,r._resizeDetails.height))),r.dropDownAppendTo&&0<r.dropDownAppendTo.length){const e=Math.abs(parseFloat(getComputedStyle(r.$.dropDownContainer).getPropertyValue("margin-bottom")))||0;r.$.dropDownContainer.style.top=r.dropDownAppendTo&&0<r.dropDownAppendTo.length?e+u+"px":""}const t=d.top+s.scrollTop+r._resizeDetails.offsetYtop;r._resizeDetails.y=i(r._resizeDetails.offsetYtop,n(t,i(t-r._dropDownSize.maxHeight,e.pageY)))}r.$.dropDownContainer.style.height=r._resizeDetails.height+"px"}function o(){u=e.pageX-r._resizeDetails.x,r._resizeDetails.width=n(s.clientWidth-l.left-6,i(0,r._resizeDetails.width+u)),r.$.dropDownContainer.style.width=r._resizeDetails.width+"px",r._resizeDetails.x=i(l.left+s.scrollLeft-r._resizeDetails.offsetXR,n(s.clientWidth+s.scrollLeft-1.5*r._resizeDetails.offsetXR,e.pageX))}var n=Math.min,i=Math.max;const r=this,a=r.shadowRoot||r.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("auto"===r.dropDownOpenMode&&null!==r.dropDownAppendTo&&(r.contains(a)||r.$.dropDownContainer.contains(a)?r._isElementHovered=!0:(r._isElementHovered=!1,r._autoClose())),!r._resizeDetails||r._resizeDetails&&!r._resizeDetails.started)return;r.setAttribute("resizing",""),r._resizeDetails.resizeEventFired||(r.$.fireEvent("resizeStart",{position:{left:e.pageX,top:e.pageY}}),r._resizeDetails.resizeEventFired=!0);const s=document.documentElement,l=r.$.dropDownContainer.getBoundingClientRect(),d=r.getBoundingClientRect(),p=r.$.dropDownContainer.hasAttribute("top")?"top":"bottom";let u;switch(r.resizeMode){case"vertical":t();break;case"horizontal":o();break;case"both":o(),t();}}_documentUpHandler(e){const t=this;if(t.$.actionButton.removeAttribute("active"),t._resizeDetails&&t._resizeDetails.started)return t._resizeDetails.started=t._resizeDetails.resizeEventFired=!1,t.removeAttribute("resizing"),t._preventDropDownClose=!1,t.focus(),void t.$.fireEvent("resizeEnd",{position:{left:e.pageX,top:e.pageY}});if(t.disabled||t._isDropDownClicked||t.readonly)return void delete t._isDropDownClicked;if(t._overlayDown)return t.close(),void delete t._overlayDown;let o=e.originalEvent.target,n=o.closest?o.closest("smart-drop-down-list"):void 0;if((t.enableShadowDOM||t.isInShadowDOM)&&(o=e.originalEvent.composedPath()[0],n=o.getRootNode().host),t._preventsSelectStart=!1,"undefined"!=typeof o&&o!==t.$.resizeBar){if("tokens"===t.selectionDisplayMode&&o.classList.contains("smart-drop-down-list-selection-label")&&n===t){"none"!==t.dropDownOpenMode&&t.open();let e=t.$.listBox._items.filter(e=>e[t.inputMember].toString()===o.textContent)[0];return t.$.listBox._scrollView.scrollTop=e.offsetTop,void t._focus(e)}if("tokens"===t.selectionDisplayMode&&o.classList.contains("smart-drop-down-list-unselect-button")&&n===t)return 1===t.selectedIndexes.length&&0>["zeroOrMany","zeroOrOne","checkBox"].indexOf(t.selectionMode)?void 0:void t.unselect(t.$.listBox._items.filter(e=>e[t.inputMember].toString()===o.previousElementSibling.textContent)[0]);const e=o.closest(".smart-action-button");if(t._buttonClicked&&("dropDownButton"===t.dropDownOpenMode&&e&&t._buttonClicked===t.$.actionButton?t.$.fireEvent("actionButtonClick"):(o.closest(".smart-drop-down-button")===t._buttonClicked||e===t._buttonClicked)&&t.$.fireEvent("dropDownButtonClick")),t._buttonClicked=void 0,e===t.$.actionButton||o.closest(".smart-drop-down-button")===t.$.dropDownButton)return"dropDownButton"===t.dropDownOpenMode&&e===t.$.actionButton?void t.close():void(t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==t.dropDownOpenMode?t.open():t.close());o=t._getUpEventTarget(o),void 0===o||("dropDownContainer"!==o&&"item"!==o||"item"===o&&"checkBox"!==t.selectionMode&&0>t.selectionMode.indexOf("Many"))&&t.close()}}_dragStartHandler(e){const t=this;t._resizeDetails&&t._resizeDetails.started&&e.preventDefault()}_dropDownTransitionendHandler(){const e=this;e._edgeMacFF&&!e.opened&&e.hasAnimation&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view"))}_focus(e){this.$.listBox._focus(e)}_blurEventHandler(){const e=this;e.$.dropDownButton&&(e.removeAttribute("focus"),e.$.dropDownButton.removeAttribute("focus")),e.$.actionButton&&(e.removeAttribute("focus"),e.$.actionButton.removeAttribute("focus")),e.nodeName&&"smart-drop-down-list"===e.nodeName.toLowerCase()&&!e._preventDropDownClose&&e.close()}_focusEventHandler(){const e=this;e.$.dropDownButton&&(e.setAttribute("focus",""),e.$.dropDownButton.setAttribute("focus","")),e.$.actionButton&&(e.setAttribute("focus",""),e.$.actionButton.setAttribute("focus","")),e.removeAttribute("drop-down-button-focus"),e.removeAttribute("action-button-focus")}_buttonsFocusHandler(e){const t=this;e.target===t.$.dropDownButton?"focus"===e.type?t.setAttribute("drop-down-button-focus",""):(t.removeAttribute("drop-down-button-focus"),t.nodeName&&"smart-drop-down-list"===t.nodeName.toLowerCase()&&!t._preventDropDownClose&&t.close()):"focus"===e.type?t.setAttribute("action-button-focus",""):t.removeAttribute("action-button-focus")}_getUpEventTarget(e){const t=this;let o=e;for(o=void 0===o.parentElement?o.getRootNode().host:o.parentElement;o;){if(o===t.$.dropDownContainer){o="dropDownContainer";break}o=o.parentElement===void 0?o.getRootNode().host:o.parentElement}return o}_keyDownHandler(e){const t=this,o=t.enableShadowDOM?t.shadowRoot.activeElement||document.activeElement:document.activeElement,n=t.enableShadowDOM?e.composedPath()[0]:e.target;if(!(t.$.listBox&&n===t.$.listBox.$.filterInput||o!==t&&o!==t.$.dropDownButton&&o!==t.$.actionButton))switch(e.key){case"Enter":case" ":n.setAttribute("active",""),e.preventDefault(),n!==t.$.actionButton&&(t._keyPressed=!0,t.opened?(t._focusedItem&&t.select(t._focusedItem),("Enter"===e.key&&0>["none"].indexOf(t.selectionMode)||" "===e.key&&-1<["none","one","radioButton"].indexOf(t.selectionMode))&&t.close()):!t.opened&&!t.readonly&&"none"!==t.dropDownOpenMode&&t.open());break;case"End":case"Home":case"PageUp":case"PageDown":case"ArrowUp":case"ArrowDown":if(t.readonly)return;if(e.altKey)return t._keyPressed=!1,void(t.$dropDownContainer.hasClass("smart-visibility-hidden")?t.open():t.close());e.preventDefault(),t.$.listBox._handleKeyStrokes(e.key);break;case"Escape":e.preventDefault(),t.close();break;default:if(t.readonly)return;"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!0),t.$.listBox._applyIncrementalSearch(e.key);}}_keyUpHandler(e){const t=this,o=t.enableShadowDOM?e.composedPath()[0]:e.target;t.$.listBox&&o===t.$.listBox.$.filterInput||(("Enter"===e.key||" "===e.key)&&(o.removeAttribute("active"),!t.$dropDownContainer.hasClass("smart-visibility-hidden")&&(t._keyPressed=!1)),t.$.listBox&&"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!1))}_listBoxChangeHandler(e){const t=this;if(e.target!==t.$.listBox)return void e.stopPropagation();if((t.dropDownAppendTo&&0<t.dropDownAppendTo.length||t.enableShadowDOM)&&t.$.fireEvent("change",e.detail),"list"===t.autoComplete&&e.detail){const o=t.$.listBox._items[e.detail.index];t._lastSelectedItem=o&&o.selected?o:void 0}t._applySelection(t.selectionMode,e.detail)}_listBoxItemClickHandler(e){const t=this;(t.dropDownAppendTo&&0<t.dropDownAppendTo.length||t.enableShadowDOM)&&t.$.fireEvent(e.type,e.detail),"checkBox"!==t.selectionMode&&0>t.selectionMode.indexOf("Many")&&t.close(),"smart-combo-box"!==t.nodeName.toLowerCase()||Smart.Utilities.Core.isMobile||t.$.input.focus(),delete t._isDropDownClicked}_listBoxKeyDownHandler(e){const t=this;return"Enter"===e.key?(t.close(),"dropDownButton"===t.dropDownOpenMode?t.$.dropDownButton.focus():t.focus(),void e.stopPropagation()):"Escape"===e.key?void t.close():void 0}_mouseEnterHandler(){const e=this;e._isElementHovered=!0,!(-1<e.tagName.toLowerCase().indexOf("smart-drop-down-"))||"auto"!==e.dropDownOpenMode||e.disabled||e.readonly||e.open()}_mouseLeaveHandler(){const e=this;e.removeAttribute("hover"),e._isElementHovered=!1,"auto"!==e.dropDownOpenMode||e.disabled||e.readonly||e._autoClose()}_mouseWheelHandler(e){const t=this;t.disabled||t.readonly||t.items&&0===t.items.length||t.$dropDownContainer&&!t.$dropDownContainer.hasClass("smart-visibility-hidden")||t.$.listBox&&(e.preventDefault(),t.$.listBox._handleKeyStrokes(0<e.deltaY?"ArrowDown":"ArrowUp"))}_autoClose(){const e=this;e._autoCloseTimeout=setTimeout(function(){e._isElementHovered||e.close(),clearTimeout(e._autoCloseTimeout)}.bind(e),e.autoCloseDelay)}_propertyValidator(e,t){return"number"!=typeof t&&"string"!=typeof t?e:t}_resizeHandler(){const e=this;"none"===e.resizeMode&&(e._calculateDropDownSize(),e._setDropDownSize())}_selectStartHandler(e){this._preventsSelectStart&&e.preventDefault()}_setAriaRelations(e){const t=this;let o,n;"dropDownButton"===t.dropDownOpenMode?(o=t,n=t.$.dropDownButton,n.removeAttribute("aria-hidden"),t.$.actionButton.setAttribute("role","button")):(o=t.$.dropDownButton,o.setAttribute("aria-hidden",!0),n=t,t.$.actionButton.removeAttribute("role")),t._ariaButton=n,n.setAttribute("role","button"),n.setAttribute("aria-haspopup","listbox"),n.setAttribute("aria-owns",t.$.listBox.id),n.setAttribute("aria-describedby",t.$.hint.id),t.label?n.setAttribute("aria-labelledby",t.$.label.id):"DropDownList"===t.elementName&&n.setAttribute("aria-labelledby",t.$.actionButton.id),o.setAttribute("role","presentation"),o.removeAttribute("aria-owns"),e?n.setAttribute("aria-expanded",t.opened):(o.removeAttribute("aria-describedby"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-labelledby"))}_setDropDownSize(){const e=this;if(e._dropDownSize||e._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach(t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]=e[t]?e[t]+(e[t].toString().endsWith("%")?"%":"px"):null}),!e.dropDownWidth)e.$.dropDownContainer.style.width="auto"===e._dropDownSize.width?"auto":(parseFloat(e._dropDownSize.width)||0)+"px";else if("auto"!==e.dropDownWidth)e.$.dropDownContainer.style.width=("initial"===e.dropDownWidth?e.offsetWidth:parseFloat(e.dropDownWidth))+"px";else if(e.$.dropDownContainer.style.width="auto",e.$.listBox){let t=2+2*parseInt(window.getComputedStyle(e.$.listBox.$.itemsContainer).getPropertyValue("--smart-list-item-horizontal-offset"));e.$.dropDownContainer.style.width=t+e.$.listBox._scrollWidth+"px"}if(e.dropDownHeight&&"auto"!==e.dropDownHeight)e.$.dropDownContainer.style.height=parseFloat(e.dropDownHeight)+(-1<(e.dropDownHeight+"").indexOf("%")?"%":"px");else if(e.$.listBox&&("auto"===e._dropDownSize.height||"auto"===e.dropDownHeight)){e.$.dropDownContainer.style.height="";let t=2*parseInt(window.getComputedStyle(e.$.listBox.$.itemsContainer).getPropertyValue("--smart-list-item-vertical-offset"));isNaN(t)&&(t=6);let o=t;if(0<e.$.listBox.items.length?e.$.listBox.items.map(e=>o+=e.height||e.offsetHeight):o=e.$.listBox.$.placeholder.offsetHeight,e.filterable){const t=e.$.listBox.$.filterInputContainer;o+=t.offsetHeight+t.offsetTop}o=o+e._dropDownSize.paddingWidth+e._dropDownSize.borderWidth,e.$.dropDownContainer.style.height=o+"px"}else e.$.dropDownContainer.style.height=e._dropDownSize.height;e.$.listBox&&e.$.listBox._refreshLayout()}_styleChangedHandler(e){const t=this;if(t.dropDownAppendTo&&0<t.dropDownAppendTo.length){const o=e.detail.styleProperties,n=["font-size","font-family","font-style","font-weight"];for(let e=0;e<n.length;e++)o[n[e]]&&(t.$.dropDownContainer.style[n[e]]=o[n[e]].value)}"auto"===t._dropDownSize.height&&t._setDropDownSize()}_validateTemplate(e){const t=this;if(e)return"function"==typeof e?void 0:"content"in document.createElement("template")?(e instanceof HTMLTemplateElement||(e=document.getElementById(e)),null!==e&&"content"in e?e:void t.error(t.localize("invalidTemplate",{elementType:t.nodeName.toLowerCase(),property:"tokenTemplate"}))):void t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()}))}});