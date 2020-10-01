(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{311:function(module,exports,__webpack_require__){__webpack_require__(312),__webpack_require__(464),__webpack_require__(465),__webpack_require__(648),__webpack_require__(660),__webpack_require__(663),module.exports=__webpack_require__(668)},378:function(module,exports){},465:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(250)},668:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(250).configure)([__webpack_require__(669)],module,!1)}).call(this,__webpack_require__(73)(module))},669:function(module,exports,__webpack_require__){var map={"./0-AnalogueClock.stories.js":686};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=669},686:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultAnalogueClock",(function(){return _0_AnalogueClock_stories_DefaultAnalogueClock})),__webpack_require__.d(__webpack_exports__,"CustomAnalogueClock",(function(){return _0_AnalogueClock_stories_CustomAnalogueClock})),__webpack_require__.d(__webpack_exports__,"FiveAnalogueClocks",(function(){return _0_AnalogueClock_stories_FiveAnalogueClocks}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=(__webpack_require__(20),__webpack_require__(13)),index_es=__webpack_require__(91),styled_components_browser_esm=__webpack_require__(14);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  box-sizing: border-box;\n"]);return _templateObject=function _templateObject(){return data},data}var src_Box=styled_components_browser_esm.b.div(_templateObject());function Base_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  border-radius: 100%;\n"]);return Base_templateObject=function _templateObject(){return data},data}var Base=Object(styled_components_browser_esm.b)(src_Box)(Base_templateObject(),(function(props){return props.baseColor}));Base.propTypes={baseColor:index_es.a.isRequired};var src_Base=Base,prop_types=__webpack_require__(51),prop_types_default=__webpack_require__.n(prop_types);function Border_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  padding: ",";\n  border-radius: 100%;\n"]);return Border_templateObject=function _templateObject(){return data},data}var Border=Object(styled_components_browser_esm.b)(src_Box)(Border_templateObject(),(function(props){return props.borderWidth&&props.borderColor?props.borderColor:"transparent"}),(function(props){return props.borderWidth?"".concat(props.borderWidth,"px"):"0"}));Border.propTypes={borderColor:index_es.a.isRequired,borderWidth:prop_types_default.a.number.isRequired};var src_Border=Border;function Center_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 16px;\n  height: 16px;\n  // border: 1px solid #fff;\n  background-color: ",";\n  border-radius: 100%;\n  margin-left: -8px;\n  margin-top: -8px;\n  z-index: 100;\n"]);return Center_templateObject=function _templateObject(){return data},data}var Center=Object(styled_components_browser_esm.b)(src_Box)(Center_templateObject(),(function(props){return props.centerColor}));Center.propTypes={centerColor:index_es.a.isRequired};var src_Center=Center;function Container_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  height: ",";\n  width: ",";\n  > *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n"]);return Container_templateObject=function _templateObject(){return data},data}var Container=Object(styled_components_browser_esm.b)(src_Box)(Container_templateObject(),(function(props){return"".concat(props.size,"px")}),(function(props){return"".concat(props.size,"px")}));Container.propTypes={size:prop_types_default.a.number.isRequired};var src_Container=Container,slicedToArray=__webpack_require__(92);function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n      background: ",";\n      width: 20%;\n      height: 2.5%;\n      margin-top: -1.25%;\n      z-index: 10;\n    "]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n      background: ",";\n      width: 40%;\n      height: 2%;\n      margin-top: -1%;\n      z-index: 9;\n    "]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n      height: 1%;\n      margin-top: -0.5%;\n      transform-origin: 80% 50%;\n      right: 40%;\n      background: ",";\n      width: 50%;\n      z-index: 11;\n    "]);return _templateObject2=function _templateObject2(){return data},data}function Hand_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 50%;\n  right: 50%;\n  height: 3px;\n  position: absolute;\n  top: 50%;\n  transform-origin: 100% 50%;\n  transition: ",";\n  ","\n  ","\n  ","\n"]);return Hand_templateObject=function _templateObject(){return data},data}var getHandAngle=function getHandAngle(_ref){var type=_ref.type,seconds=_ref.seconds,minutes=_ref.minutes,hours=_ref.hours,handAngle=0;switch(type){case"second":handAngle=360*minutes+6*seconds;break;case"minute":handAngle=360*hours+6*minutes;break;case"hour":handAngle=30*hours+minutes/2;break;default:handAngle=360}return handAngle},StyledHand=Object(styled_components_browser_esm.b)(src_Box)(Hand_templateObject(),(function(props){return props.showAnimation?"transform 0.3s cubic-bezier(.4,2.08,.55,.44)":"none"}),(function(props){return"second"===props.type&&Object(styled_components_browser_esm.a)(_templateObject2(),(function(innerProps){return innerProps.handColors&&innerProps.handColors.second?innerProps.handColors.second:"#d81c7a"}))}),(function(props){return"minute"===props.type&&Object(styled_components_browser_esm.a)(_templateObject3(),(function(innerProps){return innerProps.handColors&&innerProps.handColors.minute?innerProps.handColors.minute:"#d81c7a"}))}),(function(props){return"hour"===props.type&&Object(styled_components_browser_esm.a)(_templateObject4(),(function(innerProps){return innerProps.handColors&&innerProps.handColors.hour?innerProps.handColors.hour:"#d81c7a"}))})),Hand_Hand=function Hand(_ref2){var type=_ref2.type,seconds=_ref2.seconds,minutes=_ref2.minutes,hours=_ref2.hours,handColors=_ref2.handColors,_useState=Object(react.useState)(6*seconds),secondStartAngle=Object(slicedToArray.a)(_useState,1)[0],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),showAnimation=_useState4[0],setShowAnimation=_useState4[1],_useState5=Object(react.useState)(getHandAngle({type:type,seconds:seconds,minutes:minutes,hours:hours})),_useState6=Object(slicedToArray.a)(_useState5,2),handAngle=_useState6[0],setHandAngle=_useState6[1];return Object(react.useLayoutEffect)((function(){setHandAngle(getHandAngle({type:type,seconds:seconds,minutes:minutes,hours:hours})),setShowAnimation(!0)}),[type,seconds,minutes,hours]),react_default.a.createElement(StyledHand,{style:{transform:"rotate(".concat(handAngle+90,"deg)")},type:type,handAngle:handAngle,secondStartAngle:secondStartAngle,handColors:handColors,showAnimation:showAnimation})},src_Hand=Hand_Hand;try{Hand_Hand.displayName="Hand",Hand_Hand.__docgenInfo={description:"",displayName:"Hand",props:{handColors:{defaultValue:null,description:"",name:"handColors",required:!0,type:{name:"IHandColors"}},hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},minutes:{defaultValue:null,description:"",name:"minutes",required:!0,type:{name:"number"}},seconds:{defaultValue:null,description:"",name:"seconds",required:!0,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hand.tsx#Hand"]={docgenInfo:Hand_Hand.__docgenInfo,name:"Hand",path:"src/Hand.tsx#Hand"})}catch(__react_docgen_typescript_loader_error){}function Notches_templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n      &:before {\n        content: '","';\n        position: absolute;\n        width: 30px;\n        text-align: center;\n        left: 50%;\n        margin-left: -15px;\n        top: 15px;\n        font-size: 25px;\n        transform: ",";\n        color: ",";\n      }\n    "]);return Notches_templateObject3=function _templateObject3(){return data},data}function Notches_templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  background: ",";\n  height: 10px;\n  left: calc(50% - 2px);\n  position: absolute;\n  top: 10px;\n  transform-origin: ",";\n  width: 4px;\n  transform: ",";\n  ","\n"]);return Notches_templateObject2=function _templateObject2(){return data},data}function Notches_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  background: ",";\n  height: 6px;\n  left: calc(50% - 1px);\n  position: absolute;\n  top: 10px;\n  transform-origin: ",";\n  width: 2px;\n  transform: ",";\n"]);return Notches_templateObject=function _templateObject(){return data},data}var AnalogueSmallTick=Object(styled_components_browser_esm.b)(src_Box)(Notches_templateObject(),(function(props){return props.notchColor}),(function(props){return"50% ".concat(Math.ceil(props.size/2)-(props.borderSize+10),"px")}),(function(props){return"rotate(\n      ".concat(6*props.i,"deg)")})),AnalogueLargeTick=Object(styled_components_browser_esm.b)(src_Box)(Notches_templateObject2(),(function(props){return props.notchColor}),(function(props){return"50% ".concat(Math.ceil(props.size/2)-(props.borderSize+10),"px")}),(function(props){return"rotate(\n        ".concat(6*props.i,"deg)")}),(function(props){return props.showNumbers&&Object(styled_components_browser_esm.a)(Notches_templateObject3(),(function(innerProps){return 0===innerProps.i?12:innerProps.i/5}),(function(innerProps){return"rotate(-".concat(6*innerProps.i,"deg)")}),(function(innerProps){return innerProps.numbersColor}))}));AnalogueLargeTick.propTypes={borderSize:prop_types_default.a.number.isRequired,i:prop_types_default.a.number.isRequired,notchColor:prop_types_default.a.string.isRequired,showNumbers:prop_types_default.a.bool.isRequired,size:prop_types_default.a.number.isRequired};var Notches_Notches=function Notches(_ref){for(var notchColor=_ref.notchColor,size=_ref.size,borderSize=_ref.borderSize,showNumbers=_ref.showNumbers,numbersColor=_ref.numbersColor,notches=[],i=0;i<60;i++){var Component=i%5==0?AnalogueLargeTick:AnalogueSmallTick;notches.push(react_default.a.createElement(Component,{key:i,i:i,notchColor:notchColor,size:size,borderSize:borderSize,showNumbers:showNumbers,numbersColor:numbersColor}))}return react_default.a.createElement(react_default.a.Fragment,null,notches)},src_Notches=Notches_Notches;try{Notches_Notches.displayName="Notches",Notches_Notches.__docgenInfo={description:"",displayName:"Notches",props:{notchColor:{defaultValue:null,description:"",name:"notchColor",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},borderSize:{defaultValue:null,description:"",name:"borderSize",required:!0,type:{name:"number"}},showNumbers:{defaultValue:null,description:"",name:"showNumbers",required:!0,type:{name:"boolean"}},numbersColor:{defaultValue:null,description:"",name:"numbersColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Notches.tsx#Notches"]={docgenInfo:Notches_Notches.__docgenInfo,name:"Notches",path:"src/Notches.tsx#Notches"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(18),__webpack_require__(203);var src_useTime=function useTime(){var _useState=Object(react.useState)({hours:0,minutes:0,seconds:0}),_useState2=Object(slicedToArray.a)(_useState,2),state=_useState2[0],setState=_useState2[1];return react_default.a.useEffect((function(){var date=new Date;setState({hours:date.getHours()>12?date.getHours()-12:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds()});var tick=setInterval((function(){date=new Date,setState({hours:date.getHours()>12?date.getHours()-12:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds()})}),1e3);return function cleanup(){clearInterval(tick)}}),[setState]),state},AnalogueClock_AnalogueClock=function AnalogueClock(_ref){var size=_ref.size,showNumbers=_ref.showNumbers,borderWidth=_ref.borderWidth,baseColor=_ref.baseColor,notchColor=_ref.notchColor,borderColor=_ref.borderColor,centerColor=_ref.centerColor,handColors=_ref.handColors,numbersColor=_ref.numbersColor,time=src_useTime();return react_default.a.createElement(src_Container,{size:size},react_default.a.createElement(src_Border,{borderColor:borderColor,borderWidth:borderWidth},react_default.a.createElement(src_Base,{baseColor:baseColor},react_default.a.createElement(src_Center,{centerColor:centerColor}),react_default.a.createElement(src_Notches,{notchColor:notchColor,size:size,borderSize:borderWidth,showNumbers:showNumbers,numbersColor:numbersColor}),react_default.a.createElement(src_Hand,Object.assign({type:"second"},time,{handColors:handColors})),react_default.a.createElement(src_Hand,Object.assign({type:"minute"},time,{handColors:handColors})),react_default.a.createElement(src_Hand,Object.assign({type:"hour"},time,{handColors:handColors})))))};AnalogueClock_AnalogueClock.defaultProps={baseColor:"#ffffff",borderColor:"#000000",borderWidth:5,centerColor:"#000000",handColors:{hour:"#000000",minute:"#000000",second:"#000000"},notchColor:"#000000",numbersColor:"#000000",showNumbers:!0,size:300};var src_AnalogueClock=AnalogueClock_AnalogueClock;try{AnalogueClock_AnalogueClock.displayName="AnalogueClock",AnalogueClock_AnalogueClock.__docgenInfo={description:"",displayName:"AnalogueClock",props:{size:{defaultValue:{value:300},description:"",name:"size",required:!1,type:{name:"number"}},showNumbers:{defaultValue:{value:!0},description:"",name:"showNumbers",required:!1,type:{name:"boolean"}},borderWidth:{defaultValue:{value:5},description:"",name:"borderWidth",required:!1,type:{name:"number"}},baseColor:{defaultValue:{value:"#ffffff"},description:"",name:"baseColor",required:!1,type:{name:"string"}},notchColor:{defaultValue:{value:"#000000"},description:"",name:"notchColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"#000000"},description:"",name:"borderColor",required:!1,type:{name:"string"}},centerColor:{defaultValue:{value:"#000000"},description:"",name:"centerColor",required:!1,type:{name:"string"}},handColors:{defaultValue:{value:"{\n    hour: '#000000',\n    minute: '#000000',\n    second: '#000000',\n  }"},description:"",name:"handColors",required:!1,type:{name:"IHandColors"}},numbersColor:{defaultValue:{value:"#000000"},description:"",name:"numbersColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AnalogueClock.tsx#AnalogueClock"]={docgenInfo:AnalogueClock_AnalogueClock.__docgenInfo,name:"AnalogueClock",path:"src/AnalogueClock.tsx#AnalogueClock"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(35),_0_AnalogueClock_stories_DefaultAnalogueClock=(__webpack_exports__.default={title:"AnalogueClock",component:src_AnalogueClock,decorators:[dist.withKnobs]},function DefaultAnalogueClock(){return react_default.a.createElement(src_AnalogueClock,null)});_0_AnalogueClock_stories_DefaultAnalogueClock.displayName="DefaultAnalogueClock";var _0_AnalogueClock_stories_CustomAnalogueClock=function CustomAnalogueClock(){return react_default.a.createElement(src_AnalogueClock,{baseColor:Object(dist.color)("baseColor","#ffffff"),borderColor:Object(dist.color)("borderColor","#000000"),borderWidth:Object(dist.number)("borderWidth",5),centerColor:Object(dist.color)("centerColor","#000000"),handColors:{hour:Object(dist.color)("handColors.hour","#000000"),minute:Object(dist.color)("handColors.minute","#000000"),second:Object(dist.color)("handColors.second","#000000")},notchColor:Object(dist.color)("notchColor","#000000"),showNumbers:Object(dist.boolean)("showNumbers",!0),numbersColor:Object(dist.color)("numbersColor","#000000"),size:Object(dist.number)("size",300)})};_0_AnalogueClock_stories_CustomAnalogueClock.displayName="CustomAnalogueClock";var _0_AnalogueClock_stories_FiveAnalogueClocks=function FiveAnalogueClocks(){return react_default.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},react_default.a.createElement(src_AnalogueClock,{baseColor:"#CEEC97",borderColor:"#F4B393",borderWidth:5,centerColor:"#FC60A8",handColors:{hour:"#494368",minute:"#494368",second:"#494368"},notchColor:"#7A28CB",numbersColor:"#494368",showNumbers:!0,size:250}),react_default.a.createElement(src_AnalogueClock,{baseColor:"#DB2B39",borderColor:"#29335C",borderWidth:5,centerColor:"#6B2034",handColors:{hour:"#000000",minute:"#000000",second:"#000000"},notchColor:"#F3A712",numbersColor:"#F0CEA0",showNumbers:!1,size:250}),react_default.a.createElement(src_AnalogueClock,{baseColor:"#2DBCE9",borderColor:"#9ACA3D",borderWidth:5,centerColor:"#000022",handColors:{hour:"#000000",minute:"#000000",second:"#000000"},notchColor:"#001242",numbersColor:"#005E7C",showNumbers:!0,size:250}),react_default.a.createElement(src_AnalogueClock,{baseColor:"#3E000C",borderColor:"#FB4B4E",borderWidth:0,centerColor:"#7C0B2B",handColors:{hour:"#ffffff",minute:"#ffffff",second:"#ffffff"},notchColor:"#D10000",numbersColor:"#FFCBDD",showNumbers:!0,size:250}),react_default.a.createElement(src_AnalogueClock,{baseColor:"#587B7F",borderColor:"#1E2019",borderWidth:10,centerColor:"#394032",handColors:{hour:"#000000",minute:"#000000",second:"#000000"},notchColor:"#8DAB7F",numbersColor:"#CFEE9E",showNumbers:!0,size:250}))};_0_AnalogueClock_stories_FiveAnalogueClocks.displayName="FiveAnalogueClocks",_0_AnalogueClock_stories_DefaultAnalogueClock.story={name:"Default"},_0_AnalogueClock_stories_CustomAnalogueClock.story={name:"Custom"},_0_AnalogueClock_stories_DefaultAnalogueClock.__docgenInfo={description:"",methods:[],displayName:"DefaultAnalogueClock"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-AnalogueClock.stories.js"]={name:"DefaultAnalogueClock",docgenInfo:_0_AnalogueClock_stories_DefaultAnalogueClock.__docgenInfo,path:"stories/0-AnalogueClock.stories.js"}),_0_AnalogueClock_stories_CustomAnalogueClock.__docgenInfo={description:"",methods:[],displayName:"CustomAnalogueClock"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-AnalogueClock.stories.js"]={name:"CustomAnalogueClock",docgenInfo:_0_AnalogueClock_stories_CustomAnalogueClock.__docgenInfo,path:"stories/0-AnalogueClock.stories.js"}),_0_AnalogueClock_stories_FiveAnalogueClocks.__docgenInfo={description:"",methods:[],displayName:"FiveAnalogueClocks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-AnalogueClock.stories.js"]={name:"FiveAnalogueClocks",docgenInfo:_0_AnalogueClock_stories_FiveAnalogueClocks.__docgenInfo,path:"stories/0-AnalogueClock.stories.js"})}},[[311,1,2]]]);
//# sourceMappingURL=main.68b7f210b77e50369a30.bundle.js.map