(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/arrows.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".arrows {\n    display: flex;\n    flex-direction: row;\n}\n\n.circle {\n    margin: 1rem;\n    color: #98A0A2;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);\n    border: 1px;\n    background-color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 1px solid rgba(160, 160, 160, 0.25);\n}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/badge.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".badge {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 16px;\n\n    position: absolute;\n    width: 100%;\n    max-width: 320px;\n\n    background: #FFFFFF;\n    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);\n    border-radius: 16px;\n}\n\n.badges {\n    margin: 1rem;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 8px;\n    background: #F3F8FC;\n    border-radius: 8px;\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    color: #939DA7;\n}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/button.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  height: 41px;\n  font-size: 14px;\n  top: 0px;\n  border-radius: 8px;\n  padding: 10px;\n  border: 0;\n  font-weight: 500;\n  width: 100%;\n}\n.button--primary {\n  color: #F0F5FC;\n  background-color: #1ea7fd;\n}\n.button--secondary {\n  color: #849295;\n  background-color: transparent;\n  border: 1px solid #849295;\n}\n.button--small {\n  max-width: 106px;\n}\n.button--medium {\n  max-width: 146px;\n\n}\n.button--large {\n  max-width: 186px;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/card.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".card {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    max-width: 420px;\n    background: #FFFFFF;\n    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);\n    border-radius: 15px;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n}\n\n.card-image {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    width: 75%;\n    margin: 20px;\n\n}\n\n.card-image img {\n    width: 100%;\n    border-radius: 16px;\n    flex: none;\n    order: 0;\n    align-self: stretch;\n    flex-grow: 0;\n}\n\n.card-content {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    padding: 0px;\n    width: 75%;\n    margin: 20px;\n}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/search.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".search-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 15px;\n    position: absolute;\n    width: 100%;\n    max-width: 520px;\n    height: 130px;\n    background: #FFFFFF;\n    box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);\n    border-radius: 15px;\n    align-items: center;\n    justify-content: center;\n}\n\n.search-group {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    height: 40px;\n}\n\ninput {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 10px 15px;\n    position: static;\n    width: 260px;\n    background: #F1F5F8;\n    border: 0;\n    border-radius: 10px;\n    flex: none;\n    order: 0;\n    flex-grow: 1;\n    margin-right: 10px;\n}",""]),module.exports=exports},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Arrows.stories.js":"./stories/Arrows.stories.js","./Badge.stories.js":"./stories/Badge.stories.js","./Button.stories.js":"./stories/Button.stories.js","./Card.stories.js":"./stories/Card.stories.js","./Search.stories.js":"./stories/Search.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Arrows.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./stories/arrows.css");var _excluded=["label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Example/Arrows"};var Primary=function Template(_ref){var label=_ref.label,args=_objectWithoutProperties(_ref,_excluded);return Object.assign({label:label},args),'<div class="arrows">\n                <div class="circle">\n                    <span class="arrow">&#60;</span> \n                </div>\n                <div class="circle">\n                    <span class="arrow">&#62;</span> \n                </div>\n            </div>'}.bind({});Primary.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createArrows({ label, ...args });\n}"}},Primary.parameters)},"./stories/Badge.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./stories/badge.css");var _excluded=["label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Example/Badge",argTypes:{backgroundColor:{control:"color"},label:{control:"text"}}};var Primary=function Template(_ref){var label=_ref.label,args=_objectWithoutProperties(_ref,_excluded);return function createBadge(_ref){var backgroundColor=_ref.backgroundColor,label=_ref.label,div=document.createElement("div"),child=document.createElement("span"),secondChild=document.createElement("span"),thirdChild=document.createElement("span");return div.className="badge",div.style.backgroundColor=backgroundColor,child.className="badges",child.innerText=label,secondChild.className="badges",secondChild.innerText=label,thirdChild.className="badges",thirdChild.innerText=label,div.appendChild(child),div.appendChild(secondChild),div.appendChild(thirdChild),div}(Object.assign({label:label},args))}.bind({});Primary.args={label:"Badge"},Primary.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createBadge({ label, ...args });\n}"}},Primary.parameters)},"./stories/Button.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./stories/button.css");var _excluded=["label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Example/Button",argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}};var Button_stories_Template=function Template(_ref){var label=_ref.label,args=_objectWithoutProperties(_ref,_excluded);return function createButton(_ref){var _ref$primary=_ref.primary,primary=void 0===_ref$primary||_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,onClick=_ref.onClick,btn=document.createElement("button");btn.type="button",btn.innerText=label,btn.addEventListener("click",onClick);var mode=primary?"button--primary":"button--secondary";return btn.className=["button","button--"+size,mode].join(" "),btn.style.backgroundColor=backgroundColor,btn}(Object.assign({label:label},args))},Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={label:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createButton({ label, ...args });\n}"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createButton({ label, ...args });\n}"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createButton({ label, ...args });\n}"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createButton({ label, ...args });\n}"}},Small.parameters)},"./stories/Card.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./stories/card.css"),__webpack_require__("./stories/arrows.css");__webpack_exports__.default={title:"Example/Card"};var Primary=function Template(){return'<div class="card">\n                <div class="card-image">\n                    <img src="https://source.unsplash.com/random/?coffee"/>\n                </div>\n                <div class="card-content">\n                    <h4>Benefits of Drinking Coffee, \n                    Can Lower the Risk of Cancer \n                    to Stroke</h4>\n                    <p>Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...</p>\n                </div>\n                <div class="arrows">\n                    <div class="circle">\n                        <span class="arrow">&#60;</span> \n                    </div>\n                    <div class="circle">\n                        <span class="arrow">&#62;</span> \n                    </div>\n                </div>\n            </div>'}.bind({});Primary.parameters=Object.assign({storySource:{source:"() => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createCard();\n}"}},Primary.parameters)},"./stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_assets_github_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./stories/assets/github.svg"),_assets_github_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_github_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_browser_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./stories/assets/browser.svg"),_assets_browser_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_browser_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./stories/assets/linkedin.svg"),_assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_email_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./stories/assets/email.svg"),_assets_email_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_email_svg__WEBPACK_IMPORTED_MODULE_10__),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"my-storybook-porfolio"},"My Storybook Porfolio"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Hello, I am Jomar Thomas and welcome to my Storybook porfolio."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"In this Storybook I built UI components in isolation from applications business logic, data, and context.\nThe components were built using HTML and JavaScript."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Browse example stories now by navigating to them in the sidebar."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("div",{className:"subheading"},"Navigation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{className:"link-item",href:"https://www.jomarthomas.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:_assets_browser_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",null,"Personal Website"),"Visit my personal website to learn more about me.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{className:"link-item",href:"https://www.github.com/jomarthomas",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:_assets_github_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",null,"Github"),"View my projects on github.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{className:"link-item",href:"https://www.linkedin.com/in/jomarthomas",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:_assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",null,"LinkedIn"),"Connet with me on LinkedIn.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{className:"link-item",href:"mailto:jomar.thomas@icloud.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:_assets_email_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",null,"Email"),"Send me an email!"))))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./stories/Search.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./stories/search.css"),__webpack_require__("./stories/button.css");var _excluded=["label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Example/Search"};var Primary=function Template(_ref){var label=_ref.label,args=_objectWithoutProperties(_ref,_excluded);return Object.assign({label:label},args),'<div class="search-wrapper">\n                <div class="search-group">\n                    <input placeholder="Search for something"/>\n                    <button type="button" class="button button--medium button--primary">Search</button>\n                </div>\n            </div>'}.bind({});Primary.parameters=Object.assign({storySource:{source:"({ label, ...args }) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return createSearch({ label, ...args });\n}"}},Primary.parameters)},"./stories/arrows.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/arrows.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/assets/browser.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/browser.3328e159.svg"},"./stories/assets/email.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/email.30ff3fdc.svg"},"./stories/assets/github.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/github.833b63e2.svg"},"./stories/assets/linkedin.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/linkedin.35d7cb01.svg"},"./stories/badge.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/badge.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/button.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/button.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/card.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/card.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/search.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/search.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/html/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);