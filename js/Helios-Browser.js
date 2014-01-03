define("amber_core/Helios-Browser", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Helios-Core", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Browser');
smalltalk.packages["Helios-Browser"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget', 'bottomDiv'], 'Helios-Browser');
smalltalk.HLBrowser.comment="I render a system browser with 4 panes (Packages, Classes, Protocols, Methods) and a source area.";
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "classesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLClassesListWidget(){return smalltalk.HLClassesListWidget||(typeof HLClassesListWidget=="undefined"?nil:HLClassesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@classesListWidget"]=_st($HLClassesListWidget())._on_(self._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(self._protocolsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self protocolsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"],
referencedClasses: ["HLClassesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._environment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLBrowser)})},
args: [],
source: "environment\x0a\x09^ self model environment",
messageSends: ["environment", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._packagesListWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowser)})},
args: [],
source: "focus\x0a\x09^ self packagesListWidget focus",
messageSends: ["focus", "packagesListWidget"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLMethodsListWidget(){return smalltalk.HLMethodsListWidget||(typeof HLMethodsListWidget=="undefined"?nil:HLMethodsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@methodsListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@methodsListWidget"]=_st($HLMethodsListWidget())._on_(self._model());
self["@methodsListWidget"];
$1=_st(self["@methodsListWidget"])._next_(self._sourceWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "methodsListWidget\x0a\x09^ methodsListWidget ifNil: [\x0a      \x09methodsListWidget := HLMethodsListWidget on: self model.\x0a\x09\x09methodsListWidget next: self sourceWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "sourceWidget"],
referencedClasses: ["HLMethodsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserModel(){return smalltalk.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == null){
self["@model"]=_st($HLBrowserModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLBrowser)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLBrowserModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLBrowserModel"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLPackagesListWidget(){return smalltalk.HLPackagesListWidget||(typeof HLPackagesListWidget=="undefined"?nil:HLPackagesListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@packagesListWidget"]=_st($HLPackagesListWidget())._on_(self._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(self._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"],
referencedClasses: ["HLPackagesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLProtocolsListWidget(){return smalltalk.HLProtocolsListWidget||(typeof HLProtocolsListWidget=="undefined"?nil:HLProtocolsListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == nil || $receiver == null){
self["@protocolsListWidget"]=_st($HLProtocolsListWidget())._on_(self._model());
self["@protocolsListWidget"];
$1=_st(self["@protocolsListWidget"])._next_(self._methodsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "protocolsListWidget\x0a\x09^ protocolsListWidget ifNil: [\x0a      \x09protocolsListWidget := HLProtocolsListWidget on: self model.\x0a\x09\x09protocolsListWidget next: self methodsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"],
referencedClasses: ["HLProtocolsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return smalltalk.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
return smalltalk.withContext(function($ctx1) { 
_st($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},smalltalk.HLBrowser)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
messageSends: ["registerConcreteClassesOn:for:", "model"],
referencedClasses: ["HLToolCommand"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$1;
$5=self._packagesListWidget();
$ctx1.sendIdx["packagesListWidget"]=1;
$4=_st($HLVerticalSplitter())._with_with_($5,self._classesListWidget());
$ctx1.sendIdx["with:with:"]=3;
$3=_st($HLVerticalSplitter())._with_with_($4,_st($HLVerticalSplitter())._with_with_(self._protocolsListWidget(),self._methodsListWidget()));
$ctx1.sendIdx["with:with:"]=2;
$2=_st($HLHorizontalSplitter())._with_with_($3,self._sourceWidget());
$ctx1.sendIdx["with:with:"]=1;
$1=_st($HLContainer())._with_($2);
_st(html)._with_($1);
$ctx1.sendIdx["with:"]=1;
_st(self._packagesListWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowser)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self protocolsListWidget\x0a                with: self methodsListWidget)) \x0a        with: self sourceWidget)).\x0a\x09\x0a\x09self packagesListWidget focus",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget", "focus"],
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLBrowserBottomWidget(){return smalltalk.HLBrowserBottomWidget||(typeof HLBrowserBottomWidget=="undefined"?nil:HLBrowserBottomWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@sourceWidget"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($HLBrowserBottomWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@sourceWidget"]=$4;
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{},smalltalk.HLBrowser)})},
args: [],
source: "sourceWidget\x0a\x09^ sourceWidget ifNil: [\x0a      \x09sourceWidget := HLBrowserBottomWidget new\x0a\x09\x09\x09model: self model;\x0a\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "model:", "new", "model", "yourself"],
referencedClasses: ["HLBrowserBottomWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLBrowser.superclass.fn.prototype._unregister.apply(_st(self), []);
$ctx1.sendIdx["unregister"]=1;
_st([self._packagesListWidget(),self._classesListWidget(),self._protocolsListWidget(),self._methodsListWidget(),self._sourceWidget()])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._unregister();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLBrowser)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x0a\x09{ \x0a\x09\x09self packagesListWidget.\x0a\x09\x09self classesListWidget.\x0a\x09\x09self protocolsListWidget.\x0a\x09\x09self methodsListWidget.\x0a\x09\x09self sourceWidget\x0a\x09} \x0a\x09\x09do: [ :each | each unregister ]",
messageSends: ["unregister", "do:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"],
referencedClasses: []
}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == null){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2="browser_".__comma(_st(_st(self["@nextId"]).__plus((1)))._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextId",{},smalltalk.HLBrowser.klass)})},
args: [],
source: "nextId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a    ^ 'browser_', (nextId + 1) asString",
messageSends: ["ifNil:", ",", "asString", "+"],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "browser";
},
args: [],
source: "tabClass\x0a\x09^ 'browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Browser";
},
args: [],
source: "tabLabel\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (0);
},
args: [],
source: "tabPriority\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserBottomWidget', smalltalk.HLWidget, ['model', 'codeWidget', 'documentationWidget'], 'Helios-Browser');
smalltalk.HLBrowserBottomWidget.comment="I render the code area of a browser and optionally the documentation for the selected class.";
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return smalltalk.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($HLBrowserCodeWidget())._new();
_st($3)._browserModel_(self._model());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "browserModel:", "new", "model", "yourself"],
referencedClasses: ["HLBrowserCodeWidget"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentationWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLDocumentationWidget(){return smalltalk.HLDocumentationWidget||(typeof HLDocumentationWidget=="undefined"?nil:HLDocumentationWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@documentationWidget"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($HLDocumentationWidget())._new();
_st($3)._model_(self._model());
$4=_st($3)._yourself();
self["@documentationWidget"]=$4;
$1=self["@documentationWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentationWidget",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "documentationWidget\x0a\x09^ documentationWidget ifNil: [ documentationWidget := HLDocumentationWidget new\x0a\x09\x09model: self model;\x0a\x09\x09yourself ]",
messageSends: ["ifNil:", "model:", "new", "model", "yourself"],
referencedClasses: ["HLDocumentationWidget"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._codeWidget())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "focus\x0a\x09self codeWidget focus",
messageSends: ["focus", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLBrowserBottomWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09on: HLShowCommentToggled\x0a\x09\x09send: #onShowCommentToggled\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLShowInstanceToggled", "HLShowCommentToggled"]
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "onShowCommentToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLBrowserBottomWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
return self},
args: [],
source: "previous\x0a\x09\x22For navigation\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
return self},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22For navigation\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showComment();
if(smalltalk.assert($1)){
self._renderPanesOn_(html);
} else {
_st(html)._with_(self._codeWidget());
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLBrowserBottomWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showComment \x0a\x09\x09ifTrue: [ self renderPanesOn: html ]\x0a\x09\x09ifFalse: [ html with: self codeWidget ]",
messageSends: ["ifTrue:ifFalse:", "showComment", "model", "renderPanesOn:", "with:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserBottomWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPanesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return smalltalk.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLVerticalSplitter())._with_with_(self._codeWidget(),self._documentationWidget()));
return self}, function($ctx1) {$ctx1.fill(self,"renderPanesOn:",{html:html},smalltalk.HLBrowserBottomWidget)})},
args: ["html"],
source: "renderPanesOn: html\x0a\x09html with: (HLVerticalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: self documentationWidget)",
messageSends: ["with:", "with:with:", "codeWidget", "documentationWidget"],
referencedClasses: ["HLVerticalSplitter"]
}),
smalltalk.HLBrowserBottomWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.HLToolModel, ['showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "editComment",
protocol: 'commands actions',
fn: function (){
var self=this;
function $HLEditComment(){return smalltalk.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLEditComment())._new());
return self}, function($ctx1) {$ctx1.fill(self,"editComment",{},smalltalk.HLBrowserModel)})},
args: [],
source: "editComment\x0a\x09self announcer announce: HLEditComment new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLEditComment"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnClasses",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLClassesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnClasses",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnClasses\x0a\x09self announcer announce: HLClassesFocusRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLClassesFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnMethods",
protocol: 'actions',
fn: function (){
var self=this;
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLMethodsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnMethods",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnMethods\x0a\x09self announcer announce: HLMethodsFocusRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLMethodsFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnPackages",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLPackagesFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnPackages",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnPackages\x0a\x09self announcer announce: HLPackagesFocusRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLPackagesFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnProtocols",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLProtocolsFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnProtocols",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnProtocols\x0a\x09self announcer announce: HLProtocolsFocusRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLProtocolsFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnSourceCode",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(_st($HLSourceCodeFocusRequested())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnSourceCode",{},smalltalk.HLBrowserModel)})},
args: [],
source: "focusOnSourceCode\x0a\x09self announcer announce: HLSourceCodeFocusRequested new",
messageSends: ["announce:", "announcer", "new"],
referencedClasses: ["HLSourceCodeFocusRequested"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "isBrowserModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBrowserModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassComment:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._setClassCommentOf_to_(_st(self._selectedClass())._theNonMetaClass(),aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},smalltalk.HLBrowserModel)})},
args: ["aString"],
source: "setClassComment: aString\x0a\x09self environment\x0a\x09\x09setClassCommentOf: self selectedClass theNonMetaClass\x0a\x09\x09to: aString",
messageSends: ["setClassCommentOf:to:", "environment", "theNonMetaClass", "selectedClass"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showComment"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLBrowserModel)})},
args: [],
source: "showComment\x0a\x09^ showComment ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
return smalltalk.withContext(function($ctx1) { 
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showComment"]=aBoolean;
self["@showComment"];
return _st(self._announcer())._announce_(_st($HLShowCommentToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self withChangesDo: [\x0a\x09\x09showComment := aBoolean.\x0a\x09\x09self announcer announce: HLShowCommentToggled new ]",
messageSends: ["withChangesDo:", "announce:", "announcer", "new"],
referencedClasses: ["HLShowCommentToggled"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@showInstance"];
if(($receiver = $2) == nil || $receiver == null){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLBrowserModel)})},
args: [],
source: "showInstance\x0a\x09^ showInstance ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
self._withChangesDo_((function(){
return smalltalk.withContext(function($ctx2) {
self["@showInstance"]=aBoolean;
self["@showInstance"];
$1=self._selectedClass();
$ctx2.sendIdx["selectedClass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
if(smalltalk.assert(aBoolean)){
$3=self._selectedClass();
$ctx2.sendIdx["selectedClass"]=2;
$2=_st($3)._theNonMetaClass();
} else {
$2=_st(self._selectedClass())._theMetaClass();
};
self._selectedClass_($2);
};
return _st(self._announcer())._announce_(_st($HLShowInstanceToggled())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09showInstance := aBoolean.\x0a\x0a    \x09self selectedClass ifNotNil: [\x0a    \x09\x09self selectedClass: (aBoolean\x0a    \x09\x09\x09ifTrue: [ self selectedClass theNonMetaClass ]\x0a\x09    \x09  \x09ifFalse: [ self selectedClass theMetaClass ]) ].\x0a    \x0a\x09\x09self announcer announce: HLShowInstanceToggled new ]",
messageSends: ["withChangesDo:", "ifNotNil:", "selectedClass", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "announce:", "announcer", "new"],
referencedClasses: ["HLShowInstanceToggled"]
}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLBrowserModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'selectorsCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "invalidateChildrenSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._theClass())._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._selectorsCache())._cacheFor_(each);
_st($1)._removeSelector_(aSelector);
$2=_st($1)._invalidateChildrenSelector_(aSelector);
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"invalidateChildrenSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateChildrenSelector: aSelector\x0a\x09self theClass subclasses do: [ :each |\x0a    \x09(self selectorsCache cacheFor: each)\x0a        \x09removeSelector: aSelector;\x0a        \x09invalidateChildrenSelector: aSelector ]",
messageSends: ["do:", "subclasses", "theClass", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateChildrenSelector:"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateParentSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._theClass();
$ctx1.sendIdx["theClass"]=1;
$1=_st($2)._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$3=_st(self._selectorsCache())._cacheFor_(_st(self._theClass())._superclass());
_st($3)._removeSelector_(aSelector);
$4=_st($3)._invalidateParentSelector_(aSelector);
$4;
};
return self}, function($ctx1) {$ctx1.fill(self,"invalidateParentSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateParentSelector: aSelector\x0a\x09self theClass superclass ifNotNil: [\x0a    \x09(self selectorsCache cacheFor: self theClass superclass)\x0a        \x09removeSelector: aSelector;\x0a\x09\x09\x09invalidateParentSelector: aSelector ]",
messageSends: ["ifNotNil:", "superclass", "theClass", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateParentSelector:"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._invalidateParentSelector_(aSelector);
self._invalidateChildrenSelector_(aSelector);
$1=self._removeSelector_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"invalidateSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "invalidateSelector: aSelector\x0a\x09self \x0a    \x09invalidateParentSelector: aSelector;\x0a        invalidateChildrenSelector: aSelector;\x0a        removeSelector: aSelector",
messageSends: ["invalidateParentSelector:", "invalidateChildrenSelector:", "removeSelector:"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._overriddenCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverridden();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ self overriddenCache \x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverridden ]",
messageSends: ["at:ifAbsentPut:", "overriddenCache", "selector", "isOverridden"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._overrideCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMethod)._isOverride();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ self overrideCache\x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverride ]",
messageSends: ["at:ifAbsentPut:", "overrideCache", "selector", "isOverride"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overriddenCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overriddenCache"];
if(($receiver = $2) == nil || $receiver == null){
self["@overriddenCache"]=_st($HashedCollection())._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{},smalltalk.HLClassCache)})},
args: [],
source: "overriddenCache\x0a\x09^ overriddenCache ifNil: [ overriddenCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@overrideCache"];
if(($receiver = $2) == nil || $receiver == null){
self["@overrideCache"]=_st($HashedCollection())._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{},smalltalk.HLClassCache)})},
args: [],
source: "overrideCache\x0a\x09^ overrideCache ifNil: [ overrideCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
protocol: 'private',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._overriddenCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["removeKey:ifAbsent:"]=1;
_st(self._overrideCache())._removeKey_ifAbsent_(aSelector,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aSelector:aSelector},smalltalk.HLClassCache)})},
args: ["aSelector"],
source: "removeSelector: aSelector\x0a\x09self overriddenCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ].\x0a    self overrideCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ]",
messageSends: ["removeKey:ifAbsent:", "overriddenCache", "overrideCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectorsCache"];
return $1;
},
args: [],
source: "selectorsCache\x0a\x09^ selectorsCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache:",
protocol: 'accessing',
fn: function (aCache){
var self=this;
self["@selectorsCache"]=aCache;
return self},
args: ["aCache"],
source: "selectorsCache: aCache\x0a\x09selectorsCache := aCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@class"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ class",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);


smalltalk.addMethod(
smalltalk.method({
selector: "on:selectorsCache:",
protocol: 'instance creation',
fn: function (aClass,aSelectorsCache){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
_st($2)._selectorsCache_(aSelectorsCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:selectorsCache:",{aClass:aClass,aSelectorsCache:aSelectorsCache},smalltalk.HLClassCache.klass)})},
args: ["aClass", "aSelectorsCache"],
source: "on: aClass selectorsCache: aSelectorsCache\x0a\x09^ self new\x0a    \x09theClass: aClass;\x0a        selectorsCache: aSelectorsCache;\x0a        yourself",
messageSends: ["theClass:", "new", "selectorsCache:", "yourself"],
referencedClasses: []
}),
smalltalk.HLClassCache.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.HLClassesListWidget.comment="I render a list of classes in the selected package.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4;
$3=_st(aClass)._theNonMetaClass();
$ctx1.sendIdx["theNonMetaClass"]=1;
$2=_st($3)._comment();
$1=_st($2)._isEmpty();
if(smalltalk.assert($1)){
return "uncommented";
};
$4=_st(_st(aClass)._theNonMetaClass())._heliosClass();
return $4;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "cssClassForItem: aClass\x0a\x09aClass theNonMetaClass comment isEmpty \x0a\x09\x09ifTrue: [ ^ 'uncommented' ].\x0a\x09^ aClass theNonMetaClass heliosClass",
messageSends: ["ifTrue:", "isEmpty", "comment", "theNonMetaClass", "heliosClass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusMethodsListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLMethodsListFocus(){return smalltalk.HLMethodsListFocus||(typeof HLMethodsListFocus=="undefined"?nil:HLMethodsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLMethodsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "focusMethodsListWidget\x0a\x09self model announcer announce: HLMethodsListFocus new",
messageSends: ["announce:", "announcer", "model", "new"],
referencedClasses: ["HLMethodsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusProtocolsListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolsListFocus(){return smalltalk.HLProtocolsListFocus||(typeof HLProtocolsListFocus=="undefined"?nil:HLProtocolsListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLProtocolsListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "focusProtocolsListWidget\x0a\x09self model announcer announce: HLProtocolsListFocus new",
messageSends: ["announce:", "announcer", "model", "new"],
referencedClasses: ["HLProtocolsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getChildrenOf:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._items())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._superclass()).__eq(aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "getChildrenOf: aClass\x0a\x09^ self items select: [ :each | each superclass = aClass ]",
messageSends: ["select:", "items", "=", "superclass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "getRootClassesOf:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aCollection)._includes_(_st(each)._superclass()))._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection},smalltalk.HLClassesListWidget)})},
args: ["aCollection"],
source: "getRootClassesOf: aCollection\x0a\x09^ aCollection select: [ :each |\x0a    \x09\x09(aCollection includes: each superclass) not ]",
messageSends: ["select:", "not", "includes:", "superclass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";
},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return smalltalk.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassesFocusRequested(){return smalltalk.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
$ctx1.sendIdx["on:send:to:"]=3;
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=4;
$2=_st($1)._on_send_to_($HLClassesFocusRequested(),"onClassesFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a    \x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLShowInstanceToggled \x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowCommentToggled\x0a\x09\x09send: #onShowCommentToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassesFocusRequested\x0a\x09\x09send: #onClassesFocusRequested\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLPackageSelected", "HLShowInstanceToggled", "HLShowCommentToggled", "HLClassSelected", "HLClassesFocusRequested"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $ClassMoved(){return smalltalk.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
function $ClassRenamed(){return smalltalk.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $ClassMigrated(){return smalltalk.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ClassAdded(),"onClassAdded:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($ClassRemoved(),"onClassRemoved:",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($ClassMoved(),"onClassMoved:",self);
$ctx1.sendIdx["on:send:to:"]=3;
_st($1)._on_send_to_($ClassRenamed(),"onClassRenamed:",self);
$ctx1.sendIdx["on:send:to:"]=4;
_st($1)._on_send_to_($ClassMigrated(),"onClassMigrated:",self);
$ctx1.sendIdx["on:send:to:"]=5;
$2=_st($1)._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a    \x09on: ClassAdded\x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a        on: ClassRemoved\x0a        send: #onClassRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassMoved\x0a\x09\x09send: #onClassMoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassRenamed\x0a\x09\x09send: #onClassRenamed:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassMigrated\x0a\x09\x09send: #onClassMigrated:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassCommentChanged\x0a        send: #onClassCommentChanged:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "model"],
referencedClasses: ["ClassAdded", "ClassRemoved", "ClassMoved", "ClassRenamed", "ClassMigrated", "ClassCommentChanged"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._items())._includes_(class_);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09\x0a\x09(class package = self model selectedPackage or: [\x0a\x09\x09self items includes: class ]) ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["theClass", "ifFalse:", "or:", "=", "package", "selectedPackage", "model", "includes:", "items", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassCommentChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
return self;
};
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassCommentChanged: anAnnouncement\x0a\x09| class |\x0a\x09class := anAnnouncement theClass.\x0a\x0a\x09class package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self refresh",
messageSends: ["theClass", "ifFalse:", "=", "package", "selectedPackage", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMigrated:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,oldClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
class_=_st(anAnnouncement)._theClass();
oldClass=_st(anAnnouncement)._oldClass();
$1=_st(self._items())._includes_(oldClass);
if(! smalltalk.assert($1)){
return self;
};
$4=self._model();
$ctx1.sendIdx["model"]=1;
$3=_st($4)._selectedClass();
$2=_st($3).__eq(oldClass);
if(smalltalk.assert($2)){
_st(self._model())._selectedClass_(class_);
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMigrated:",{anAnnouncement:anAnnouncement,class_:class_,oldClass:oldClass},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassMigrated: anAnnouncement\x0a\x09| class oldClass |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09oldClass := anAnnouncement oldClass.\x0a\x0a\x09(self items includes: oldClass) ifFalse: [ ^ self ].\x0a\x0a\x09self model selectedClass = oldClass ifTrue: [\x0a\x09\x09self model selectedClass: class ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["theClass", "oldClass", "ifFalse:", "includes:", "items", "ifTrue:", "=", "selectedClass", "model", "selectedClass:", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassMoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,oldPackage;
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$6,$8,$7,$1,$9,$10;
class_=_st(anAnnouncement)._theClass();
oldPackage=_st(anAnnouncement)._oldPackage();
$3=oldPackage;
$5=self._model();
$ctx1.sendIdx["model"]=1;
$4=_st($5)._selectedPackage();
$ctx1.sendIdx["selectedPackage"]=1;
$2=_st($3).__eq($4);
$ctx1.sendIdx["="]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(class_)._package();
$8=self._model();
$ctx2.sendIdx["model"]=2;
$7=_st($8)._selectedPackage();
$ctx2.sendIdx["selectedPackage"]=2;
return _st($6).__eq($7);
$ctx2.sendIdx["="]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(! smalltalk.assert($1)){
return self;
};
$9=_st(oldPackage).__eq(_st(self._model())._selectedPackage());
if(smalltalk.assert($9)){
self._selectedItem_(nil);
$10=self._selectItem_(nil);
$10;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassMoved:",{anAnnouncement:anAnnouncement,class_:class_,oldPackage:oldPackage},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassMoved: anAnnouncement\x0a\x09| class oldPackage |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09oldPackage := anAnnouncement oldPackage.\x0a\x09\x0a\x09(oldPackage = self model selectedPackage or: [\x0a\x09\x09class package = self model selectedPackage ])\x0a\x09\x09\x09ifFalse: [ ^ self ].\x0a\x09\x0a\x09oldPackage = self model selectedPackage ifTrue: [ \x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09selectItem: nil ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["theClass", "oldPackage", "ifFalse:", "or:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectedItem:", "selectItem:", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1;
class_=_st(anAnnouncement)._theClass();
$1=_st(_st(class_)._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRemoved:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassRemoved: anAnnouncement\x0a\x09| class |\x0a\x09class := anAnnouncement theClass.\x0a\x0a\x09class package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["theClass", "ifFalse:", "=", "package", "selectedPackage", "model", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassRenamed:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anAnnouncement)._theClass())._package()).__eq(_st(self._model())._selectedPackage());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassRenamed:",{anAnnouncement:anAnnouncement},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassRenamed: anAnnouncement\x0a\x09anAnnouncement theClass package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "package", "theClass", "selectedPackage", "model", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var selectedClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(anAnnouncement)._item();
$ctx1.sendIdx["item"]=1;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
selectedClass=_st(_st(anAnnouncement)._item())._theNonMetaClass();
self._selectedItem_(selectedClass);
$2=self._hasFocus();
if(! smalltalk.assert($2)){
self._activateItem_(selectedClass);
$3=self._focus();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,selectedClass:selectedClass},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| selectedClass |\x0a\x09\x0a\x09anAnnouncement item ifNil: [ ^ self ].\x0a\x09\x0a\x09selectedClass := anAnnouncement item theNonMetaClass.\x0a\x09self selectedItem: selectedClass.\x0a\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: selectedClass;\x0a\x09\x09\x09focus ]",
messageSends: ["ifNil:", "item", "theNonMetaClass", "selectedItem:", "ifFalse:", "hasFocus", "activateItem:", "focus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassesFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassesFocusRequested",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onClassesFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedPackage();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLClassesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedPackage", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowCommentToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onShowCommentToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var checkbox;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$5,$7,$8,$9,$10,$2,$11,$13,$14,$12,$15;
$1=_st(html)._div();
_st($1)._class_("btn-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
$4=$3;
$5=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$ctx3.sendIdx["nextPutAll:"]=1;
$6=self._showInstance();
if(smalltalk.assert($6)){
return _st(str)._nextPutAll_(" active");
$ctx3.sendIdx["nextPutAll:"]=2;
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2,2)})}));
$ctx2.sendIdx["streamContents:"]=1;
_st($4)._class_($5);
$ctx2.sendIdx["class:"]=2;
_st($3)._with_("Instance");
$ctx2.sendIdx["with:"]=2;
$7=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showInstance_(true);
$ctx3.sendIdx["showInstance:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=1;
$7;
$8=_st(html)._button();
_st($8)._class_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {
_st(str)._nextPutAll_("btn");
$ctx3.sendIdx["nextPutAll:"]=3;
$9=self._showClass();
if(smalltalk.assert($9)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2,5)})})));
$ctx2.sendIdx["class:"]=3;
_st($8)._with_("Class");
$ctx2.sendIdx["with:"]=3;
$10=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showInstance_(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$ctx2.sendIdx["onClick:"]=2;
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$11=_st(html)._label();
_st($11)._class_("checkbox");
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$13=_st(html)._input();
_st($13)._type_("checkbox");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._toggleShowComment();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)})}));
checkbox=$14;
checkbox;
return _st(html)._with_("Doc");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)})}));
$ctx1.sendIdx["with:"]=4;
$15=self._showComment();
if(smalltalk.assert($15)){
_st(checkbox)._at_put_("checked","checked");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,checkbox:checkbox},smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| checkbox |\x0a\x09\x0a\x09html div \x0a        class: 'btn-group';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showInstance ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Instance';\x0a                onClick: [ self showInstance: true ].\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showClass ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Class';\x0a\x09\x09\x09\x09onClick: [ self showInstance: false ] ].\x0a\x09\x09html label \x0a\x09\x09\x09class: 'checkbox';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09checkbox := html input\x0a\x09\x09\x09\x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09onClick: [ self toggleShowComment ].\x0a\x09\x09\x09\x09html with: 'Doc' ].\x0a\x09\x09\x09\x09\x0a\x09\x09self showComment ifTrue: [\x0a\x09\x09\x09checkbox at: 'checked' put: 'checked' ]",
messageSends: ["class:", "div", "with:", "button", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "onClick:", "showInstance:", "showClass", "label", "type:", "input", "toggleShowComment", "showComment", "at:put:"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:level:on:",
protocol: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
li=_st(html)._li();
$1=_st(li)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._data_put_("item",aClass);
$2=li;
_st($2)._class_(self._listCssClassForItem_(aClass));
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._tag_("i"))._class_(self._cssClassForItem_(aClass));
return self._renderItemLabel_level_on_(aClass,anInteger,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(self._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_level_on_(each,_st(anInteger).__plus((1)),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li},smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItem: aClass level: anInteger on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: aClass.\x0a    li\x0a\x09\x09class: (self listCssClassForItem: aClass);\x0a\x09\x09with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: aClass).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: aClass level: anInteger on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ].\x0a                    \x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: anInteger + 1 on: html ]",
messageSends: ["li", "data:put:", "asJQuery", "class:", "listCssClassForItem:", "with:", "a", "tag:", "cssClassForItem:", "renderItemLabel:level:on:", "onClick:", "activateListItem:", "do:", "getChildrenOf:", "renderItem:level:on:", "+"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLClassesListWidget.superclass.fn.prototype._renderItem_on_.apply(_st(self), [aClass,html]);
_st(self._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_level_on_(each,(1),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItem: aClass on: html\x0a\x09super renderItem: aClass on: html.\x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: 1 on: html ]",
messageSends: ["renderItem:on:", "do:", "getChildrenOf:", "renderItem:level:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:level:on:",
protocol: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._span())._asJQuery())._html_(_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
$ctx3.sendIdx["nextPutAll:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return _st(str)._nextPutAll_(_st(aClass)._name());
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItemLabel: aClass level: anInteger on: html\x0a\x09html span asJQuery html: (String streamContents: [ :str |\x0a\x09\x09anInteger timesRepeat: [\x0a\x09\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;' ].\x0a\x09\x09\x09str nextPutAll: aClass name ])",
messageSends: ["html:", "asJQuery", "span", "streamContents:", "timesRepeat:", "nextPutAll:", "name"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderItemLabel_level_on_(aClass,(0),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09self renderItemLabel: aClass level: 0 on: html",
messageSends: ["renderItemLabel:level:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._getRootClassesOf_(self._items()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderListOn: html\x0a\x09(self getRootClassesOf: self items)\x0a    \x09do: [ :each | self renderItem: each on: html ]",
messageSends: ["do:", "getRootClassesOf:", "items", "renderItem:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass},smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "selectItem: aClass\x0a    self model selectedClass: aClass",
messageSends: ["selectedClass:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForPackage:",
protocol: 'private',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
if(($receiver = aPackage) == nil || $receiver == null){
$1=[];
} else {
$1=_st(_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})})))._asArray())._sort())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._name();
$ctx2.sendIdx["name"]=1;
return _st($2).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)})}));
};
self._items_($1);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForPackage:",{aPackage:aPackage},smalltalk.HLClassesListWidget)})},
args: ["aPackage"],
source: "setItemsForPackage: aPackage\x0a\x09self items: (aPackage \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ ((aPackage classes \x0a        \x09collect: [ :each | each theNonMetaClass ]) asArray sort) \x0a            \x09sort: [ :a :b | a name < b name ] ]).",
messageSends: ["items:", "ifNil:ifNotNil:", "sort:", "sort", "asArray", "collect:", "classes", "theNonMetaClass", "<", "name"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedPackage",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForPackage_(_st(self._model())._selectedPackage());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedPackage",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "setItemsForSelectedPackage\x0a\x09self setItemsForPackage: self model selectedPackage",
messageSends: ["setItemsForPackage:", "selectedPackage", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showClass",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._showInstance())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showClass",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showClass\x0a\x09^ self model showInstance not",
messageSends: ["not", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showComment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showComment\x0a\x09^ self model showComment",
messageSends: ["showComment", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showComment:",
protocol: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showComment_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self model showComment: aBoolean",
messageSends: ["showComment:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._showInstance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "showInstance\x0a\x09^ self model showInstance",
messageSends: ["showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showInstance:",
protocol: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showInstance_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},smalltalk.HLClassesListWidget)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09self model showInstance: aBoolean",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleShowComment",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._showComment_(_st(self._showComment())._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleShowComment",{},smalltalk.HLClassesListWidget)})},
args: [],
source: "toggleShowComment\x0a\x09self model showComment: self showComment not",
messageSends: ["showComment:", "model", "not", "showComment"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLDocumentationWidget', smalltalk.HLFocusableWidget, ['model'], 'Helios-Browser');
smalltalk.HLDocumentationWidget.comment="I render the documentation for the selected class";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultDocumentation",
protocol: 'defaults',
fn: function (){
var self=this;
return "No documentation available. \x0a**That's bad. Seriously.**";
},
args: [],
source: "defaultDocumentation\x0a\x09^ 'No documentation available. \x0a**That''s bad. Seriously.**'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHead",
protocol: 'defaults',
fn: function (){
var self=this;
return "No class selected";
},
args: [],
source: "defaultHead\x0a\x09^ 'No class selected'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
var item;
item=$receiver;
$1=_st(_st(item)._comment())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._defaultDocumentation();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "documentation\x0a\x09^ self selectedItem \x0a\x09\x09ifNil: [ '' ]\x0a\x09\x09ifNotNil: [ :item | item comment ifEmpty: [ self defaultDocumentation ] ]",
messageSends: ["ifNil:ifNotNil:", "selectedItem", "ifEmpty:", "comment", "defaultDocumentation"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editDocumentation",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._editComment();
return self}, function($ctx1) {$ctx1.fill(self,"editDocumentation",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "editDocumentation\x0a\x09self model editComment",
messageSends: ["editComment", "model"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "head",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._selectedItem();
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultHead();
} else {
var item;
item=$receiver;
$1=_st(item)._name();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"head",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "head\x0a\x09^ self selectedItem \x0a\x09\x09ifNil: [ self defaultHead ]\x0a\x09\x09ifNotNil: [ :item | item name ]",
messageSends: ["ifNil:ifNotNil:", "selectedItem", "defaultHead", "name"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@model"]=aModel;
self._observeSystem();
$1=self._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLDocumentationWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeModel",
messageSends: ["observeSystem", "observeModel"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLEditComment(){return smalltalk.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($HLEditComment(),"onEditDocumentation",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLEditComment\x0a\x09\x09send: #onEditDocumentation\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLClassSelected", "HLEditComment"]
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._systemAnnouncer())._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer \x0a\x09\x09on: ClassCommentChanged\x0a\x09\x09send: #onClassCommentChanged:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "model"],
referencedClasses: ["ClassCommentChanged"]
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassCommentChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anAnnouncement)._theClass()).__eq(_st(_st(self._model())._selectedClass())._theNonMetaClass());
if(smalltalk.assert($1)){
self._refresh();
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement},smalltalk.HLDocumentationWidget)})},
args: ["anAnnouncement"],
source: "onClassCommentChanged: anAnnouncement\x0a\x09anAnnouncement theClass = self model selectedClass theNonMetaClass\x0a\x09\x09ifTrue: [ self refresh ]",
messageSends: ["ifTrue:", "=", "theClass", "theNonMetaClass", "selectedClass", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLDocumentationWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onEditDocumentation",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$1;
$5=self._model();
$ctx1.sendIdx["model"]=1;
$4=_st($5)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
$3=_st($4)._theNonMetaClass();
$ctx1.sendIdx["theNonMetaClass"]=1;
$2=_st($3)._name();
$1=_st($2).__comma(" comment");
self._request_value_do_($1,_st(_st(_st(self._model())._selectedClass())._theNonMetaClass())._comment(),(function(comment){
return smalltalk.withContext(function($ctx2) {
return self._setClassComment_(comment);
}, function($ctx2) {$ctx2.fillBlock({comment:comment},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"onEditDocumentation",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "onEditDocumentation\x0a\x09self \x0a\x09\x09request: self model selectedClass theNonMetaClass name, ' comment'\x0a\x09\x09value: self model selectedClass theNonMetaClass comment\x0a\x09\x09do: [ :comment | self setClassComment: comment ]",
messageSends: ["request:value:do:", ",", "name", "theNonMetaClass", "selectedClass", "model", "comment", "setClassComment:"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._div();
_st($1)._class_("doc");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderHeadOn_(html);
$3=self._renderDocOn_(html);
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLDocumentationWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'doc';\x0a\x09\x09with: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09renderHeadOn: html;\x0a\x09\x09\x09\x09renderDocOn: html ]",
messageSends: ["class:", "div", "with:", "renderHeadOn:", "renderDocOn:"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDocOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Showdown(){return smalltalk.Showdown||(typeof Showdown=="undefined"?nil:Showdown)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7;
$1=self._selectedItem();
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self._renderInheritanceOn_(html);
$2=_st(html)._h1();
_st($2)._with_("Overview");
$ctx1.sendIdx["with:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._button();
_st($4)._class_("button default");
$ctx2.sendIdx["class:"]=1;
_st($4)._with_("Edit");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._editDocumentation();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=2;
$3;
$6=_st(html)._div();
_st($6)._class_("markdown");
$7=_st($6)._asJQuery();
_st($7)._html_(_st(_st(_st($Showdown())._at_("converter"))._new())._makeHtml_(self._documentation()));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html},smalltalk.HLDocumentationWidget)})},
args: ["html"],
source: "renderDocOn: html\x0a\x09self selectedItem ifNotNil: [\x0a\x09\x09self renderInheritanceOn: html.\x0a\x09\x09html h1 \x0a\x09\x09\x09with: 'Overview';\x0a\x09\x09\x09with: [ \x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09\x09with: 'Edit';\x0a\x09\x09\x09\x09\x09onClick: [ self editDocumentation ] ].\x0a\x09\x09(html div \x0a\x09\x09\x09class: 'markdown';\x0a\x09\x09\x09asJQuery) html: ((Showdown at: 'converter') new makeHtml: self documentation) ]",
messageSends: ["ifNotNil:", "selectedItem", "renderInheritanceOn:", "with:", "h1", "class:", "button", "onClick:", "editDocumentation", "html:", "div", "asJQuery", "makeHtml:", "new", "at:", "documentation"],
referencedClasses: ["Showdown"]
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("head");
$2=_st($1)._with_(self._head());
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.HLDocumentationWidget)})},
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'head';\x0a\x09\x09with: self head",
messageSends: ["class:", "div", "with:", "head"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInheritanceOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$5,$6,$9,$8,$7,$10,$2;
$1=_st(html)._div();
_st($1)._class_("inheritance");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Subclass of ");
$ctx2.sendIdx["with:"]=2;
$4=self._selectedItem();
$ctx2.sendIdx["selectedItem"]=1;
$3=_st($4)._superclass();
$ctx2.sendIdx["superclass"]=1;
if(($receiver = $3) == nil || $receiver == null){
return _st(_st(html)._em())._with_("nil");
$ctx2.sendIdx["with:"]=3;
} else {
$5=_st(html)._a();
$6=$5;
$9=self._selectedItem();
$ctx2.sendIdx["selectedItem"]=2;
$8=_st($9)._superclass();
$ctx2.sendIdx["superclass"]=2;
$7=_st($8)._name();
_st($6)._with_($7);
$10=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectClass_(_st(self._selectedItem())._superclass());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
return $10;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderInheritanceOn:",{html:html},smalltalk.HLDocumentationWidget)})},
args: ["html"],
source: "renderInheritanceOn: html\x0a\x09html div \x09\x0a\x09\x09class: 'inheritance';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: 'Subclass of '.\x0a\x09\x09\x09self selectedItem superclass \x0a\x09\x09\x09\x09ifNil: [ html em with: 'nil' ]\x0a\x09\x09\x09\x09ifNotNil: [\x0a\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09with: self selectedItem superclass name;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self selectClass: self selectedItem superclass ] ] ]",
messageSends: ["class:", "div", "with:", "ifNil:ifNotNil:", "superclass", "selectedItem", "em", "a", "name", "onClick:", "selectClass:"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},smalltalk.HLDocumentationWidget)})},
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self model selectedClass: aClass",
messageSends: ["selectedClass:", "model"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._model())._selectedClass();
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
var class_;
class_=$receiver;
$1=_st(class_)._theNonMetaClass();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "selectedItem\x0a\x09^ self model selectedClass ifNotNil: [ :class | class theNonMetaClass ]",
messageSends: ["ifNotNil:", "selectedClass", "model", "theNonMetaClass"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassComment:",
protocol: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._setClassComment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},smalltalk.HLDocumentationWidget)})},
args: ["aString"],
source: "setClassComment: aString\x0a\x09self model setClassComment: aString",
messageSends: ["setClassComment:", "model"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLDocumentationWidget.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(_st(self._model())._announcer())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLDocumentationWidget)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self model announcer unregister: self",
messageSends: ["unregister", "unregister:", "announcer", "model"],
referencedClasses: []
}),
smalltalk.HLDocumentationWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLToolListWidget, ['selectorsCache'], 'Helios-Browser');
smalltalk.HLMethodsListWidget.comment="I render a list of methods for the selected protocol.";
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
var override,overriden,method;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
method=self._methodForSelector_(aSelector);
override=self._isOverride_(method);
overriden=self._isOverridden_(method);
$2=override;
if(smalltalk.assert($2)){
$3=overriden;
if(smalltalk.assert($3)){
$1="override-overridden";
} else {
$1="override";
};
} else {
$4=overriden;
if(smalltalk.assert($4)){
$1="overridden";
} else {
$1="";
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aSelector:aSelector,override:override,overriden:overriden,method:method},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "cssClassForItem: aSelector\x0a\x09| override overriden method |\x0a    \x0a    method := self methodForSelector: aSelector.\x0a    override := self isOverride: method.\x0a    overriden := self isOverridden: method.\x0a    \x0a\x09^ override\x0a    \x09ifTrue: [ overriden\x0a\x09\x09\x09ifTrue: [ 'override-overridden' ]\x0a\x09\x09\x09ifFalse: [ 'override' ] ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09overriden\x0a\x09\x09\x09ifTrue: [ 'overridden' ]\x0a\x09\x09\x09ifFalse: [ '' ] ]",
messageSends: ["methodForSelector:", "isOverride:", "isOverridden:", "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectorsCache())._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a   ^ self selectorsCache isOverridden: aMethod",
messageSends: ["isOverridden:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectorsCache())._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a   ^ self selectorsCache isOverride: aMethod",
messageSends: ["isOverride:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";
},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodForSelector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._model())._selectedClass())._methodDictionary())._at_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodForSelector:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "methodForSelector: aSelector\x0a\x09^ self model selectedClass\x0a    \x09methodDictionary at: aSelector",
messageSends: ["at:", "methodDictionary", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$7,$6,$4;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._selectedClass();
$ctx1.sendIdx["selectedClass"]=1;
if(($receiver = $1) == nil || $receiver == null){
$3=[];
return $3;
} else {
$1;
};
$5=_st(aString).__eq(self._allProtocol());
if(smalltalk.assert($5)){
$7=self._model();
$ctx1.sendIdx["model"]=2;
$6=_st($7)._selectedClass();
$ctx1.sendIdx["selectedClass"]=2;
$4=_st($6)._methods();
} else {
$4=_st(_st(self._model())._selectedClass())._methodsInProtocol_(aString);
};
return $4;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09self model selectedClass ifNil: [ ^ #() ].\x0a    \x0a\x09^ aString = self allProtocol\x0a    \x09ifTrue: [ self model selectedClass methods ]\x0a      \x09ifFalse: [ self model selectedClass methodsInProtocol: aString ]",
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:ifFalse:", "=", "allProtocol", "methods", "methodsInProtocol:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLMethodsFocusRequested(){return smalltalk.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
$ctx1.sendIdx["on:send:to:"]=3;
$2=_st($1)._on_send_to_($HLMethodsFocusRequested(),"onMethodsFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLProtocolSelected \x0a\x09\x09send: #onProtocolSelected: \x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowInstanceToggled \x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09send: #onMethodSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodsFocusRequested \x0a\x09\x09send: #onMethodsFocusRequested\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLProtocolSelected", "HLShowInstanceToggled", "HLMethodSelected", "HLMethodsFocusRequested"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
$ctx1.sendIdx["on:send:to:"]=3;
_st($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
$ctx1.sendIdx["on:send:to:"]=4;
$2=_st($1)._on_send_to_($MethodMoved(),"onMethodMoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer \x0a    \x09on: ProtocolAdded\x0a        send: #onProtocolAdded:\x0a\x09\x09to: self;\x0a    \x09\x0a\x09\x09on: ProtocolRemoved\x0a        send: #onProtocolRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: MethodAdded \x0a        send: #onMethodAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a        on: MethodRemoved \x0a        send: #onMethodRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodMoved \x0a        send: #onMethodMoved:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "model"],
referencedClasses: ["ProtocolAdded", "ProtocolRemoved", "MethodAdded", "MethodRemoved", "MethodMoved"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(_st(anAnnouncement)._method())._methodClass());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onMethodAdded: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement method methodClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedProtocol.\x0a    self refresh",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "methodClass", "method", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodMoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$6,$5,$4,$7;
$3=self._model();
$ctx1.sendIdx["model"]=1;
$2=_st($3)._selectedMethod();
$1=_st($2).__eq(_st(anAnnouncement)._method());
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
return self;
};
$6=self._model();
$ctx1.sendIdx["model"]=2;
$5=_st($6)._selectedProtocol();
$4=_st($5).__eq(_st(self._model())._allProtocol());
if(! smalltalk.assert($4)){
self._selectedItem_(nil);
self._selectItem_(nil);
self._setItemsForSelectedProtocol();
$7=self._refresh();
$7;
};
return self}, function($ctx1) {$ctx1.fill(self,"onMethodMoved:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onMethodMoved: anAnnouncement\x0a\x09self model selectedMethod = anAnnouncement method ifFalse: [ ^ self ].\x0a    \x0a\x09self model selectedProtocol = self model allProtocol ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil; \x0a\x09\x09\x09selectItem: nil;\x0a\x09\x09\x09setItemsForSelectedProtocol;\x0a    \x09\x09refresh ]",
messageSends: ["ifFalse:", "=", "selectedMethod", "model", "method", "selectedProtocol", "allProtocol", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
var $early={};
try {
method=_st(anAnnouncement)._method();
_st(self._items())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(method)._selector();
$ctx2.sendIdx["selector"]=1;
return _st(each).__eq($1);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[self];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$2=self._selectedItem();
$ctx1.sendIdx["selectedItem"]=1;
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
$4=_st(_st(method)._methodClass()).__eq(_st(self._model())._selectedClass());
$ctx1.sendIdx["="]=2;
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(method)._selector()).__eq(self._selectedItem());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
if(smalltalk.assert($3)){
self._selectedItem_(nil);
$5=self._selectItem_(nil);
$5;
};
};
self._setItemsForSelectedProtocol();
self._refresh();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onMethodRemoved: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement method.\x0a\x09\x0a\x09self items detect: [ :each | each = method selector ] ifNone: [ ^ self ].\x0a\x0a    self selectedItem ifNotNil: [\x0a      \x09(method methodClass = self model selectedClass and: [ method selector = self selectedItem ])\x0a  \x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self selectedItem: nil; \x0a\x09\x09\x09\x09selectItem: nil ] ].\x0a\x0a    self setItemsForSelectedProtocol.\x0a\x09self refresh",
messageSends: ["method", "detect:ifNone:", "items", "=", "selector", "ifNotNil:", "selectedItem", "ifTrue:", "and:", "methodClass", "selectedClass", "model", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var selector,method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
method=_st(anAnnouncement)._item();
$1=_st(method)._isCompiledMethod();
if(smalltalk.assert($1)){
selector=_st(method)._selector();
} else {
selector=nil;
};
self._selectedItem_(selector);
$2=self._activateItem_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,selector:selector,method:method},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onMethodSelected: anAnnouncement\x0a\x09| selector method |\x0a\x09\x0a\x09method := anAnnouncement item.\x0a\x09\x0a\x09selector := method isCompiledMethod \x0a\x09\x09ifTrue: [ method selector ]\x0a\x09\x09ifFalse: [ nil ].\x0a\x09\x09\x0a\x09self \x0a\x09\x09selectedItem: selector;\x0a\x09\x09activateItem: selector",
messageSends: ["item", "ifTrue:ifFalse:", "isCompiledMethod", "selector", "selectedItem:", "activateItem:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodsFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodsFocusRequested",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "onMethodsFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(anAnnouncement)._theClass());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolAdded: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "theClass", "setItemsForSelectedProtocol", "refresh", "focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._model())._selectedClass()).__eq(_st(anAnnouncement)._theClass());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolRemoved: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
messageSends: ["ifFalse:", "=", "selectedClass", "model", "theClass", "setItemsForSelectedProtocol", "refresh", "focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedProtocol();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLMethodsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedProtocol", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._onProtocolSelected_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self onProtocolSelected: nil",
messageSends: ["onProtocolSelected:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._selectorsCache())._at_ifAbsentPut_("override",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self._model())._selectedClass())._allSuperclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
_st(acc)._addAll_(_st(each)._selectors());
$2=_st(acc)._yourself();
return $2;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "overrideSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'override'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSuperclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "selectorsCache", "inject:into:", "allSuperclasses", "selectedClass", "model", "new", "addAll:", "selectors", "yourself"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "overridenSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self._model())._selectedClass())._allSubclasses())._inject_into_(_st($Set())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {
_st(acc)._addAll_(_st(each)._selectors());
$2=_st(acc)._yourself();
return $2;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "overridenSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'overriden'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSubclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "selectorsCache", "inject:into:", "allSubclasses", "selectedClass", "model", "new", "addAll:", "selectors", "yourself"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
$ctx2.sendIdx["renderContentOn:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLMethodsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "showInstance", "model", "class:", "div", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aSelector,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(aSelector);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aSelector:aSelector,html:html},smalltalk.HLMethodsListWidget)})},
args: ["aSelector", "html"],
source: "renderItemLabel: aSelector on: html\x0a\x09html with: aSelector",
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
if(($receiver = aSelector) == nil || $receiver == null){
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._selectedMethod_(nil);
$ctx1.sendIdx["selectedMethod:"]=1;
return $1;
} else {
aSelector;
};
_st(self._model())._selectedMethod_(self._methodForSelector_(aSelector));
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aSelector:aSelector},smalltalk.HLMethodsListWidget)})},
args: ["aSelector"],
source: "selectItem: aSelector\x0a\x09aSelector ifNil: [ ^ self model selectedMethod: nil ].\x0a\x0a   \x09self model selectedMethod: (self methodForSelector: aSelector)",
messageSends: ["ifNil:", "selectedMethod:", "model", "methodForSelector:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._selectorsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "selectorsCache\x0a\x09^ self class selectorsCache",
messageSends: ["selectorsCache", "class"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodsInProtocol_(aString))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsInProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "selectorsInProtocol: aString\x0a\x09^ ((self methodsInProtocol: aString)\x0a    \x09collect: [ :each | each selector ]) sorted",
messageSends: ["sorted", "collect:", "methodsInProtocol:", "selector"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForProtocol:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
if(($receiver = aString) == nil || $receiver == null){
$2=[];
} else {
$2=self._selectorsInProtocol_(aString);
};
$1=self._items_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"setItemsForProtocol:",{aString:aString},smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "setItemsForProtocol: aString\x0a\x09^ self items: (aString\x0a    \x09ifNil: [ #() ]\x0a      \x09ifNotNil: [ self selectorsInProtocol: aString ])",
messageSends: ["items:", "ifNil:ifNotNil:", "selectorsInProtocol:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedProtocol",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForProtocol_(_st(self._model())._selectedProtocol());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedProtocol",{},smalltalk.HLMethodsListWidget)})},
args: [],
source: "setItemsForSelectedProtocol\x0a\x09self setItemsForProtocol: self model selectedProtocol",
messageSends: ["setItemsForProtocol:", "selectedProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);


smalltalk.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSelectorsCache(){return smalltalk.HLSelectorsCache||(typeof HLSelectorsCache=="undefined"?nil:HLSelectorsCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLSelectorsCache())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},smalltalk.HLMethodsListWidget.klass)})},
args: [],
source: "selectorsCache\x0a\x09^ HLSelectorsCache current",
messageSends: ["current"],
referencedClasses: ["HLSelectorsCache"]
}),
smalltalk.HLMethodsListWidget.klass);


smalltalk.addClass('HLPackagesListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.HLPackagesListWidget.comment="I render a list of the system packages.";
smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "commitPackage\x0a\x09self model commitPackage",
messageSends: ["commitPackage", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
return "package";
},
args: ["anItem"],
source: "cssClassForItem: anItem\x09\x0a\x09^ 'package'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focusClassesListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassesListFocus(){return smalltalk.HLClassesListFocus||(typeof HLClassesListFocus=="undefined"?nil:HLClassesListFocus)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLClassesListFocus())._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "focusClassesListWidget\x0a\x09self model announcer announce: HLClassesListFocus new",
messageSends: ["announce:", "announcer", "model", "new"],
referencedClasses: ["HLClassesListFocus"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeItems",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self["@items"]=_st(_st(self._model())._packages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._name();
$ctx2.sendIdx["name"]=1;
return _st($2).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "initializeItems\x0a\x09^ items := self model packages \x0a\x09\x09sort: [ :a :b | a name < b name ]",
messageSends: ["sort:", "packages", "model", "<", "name"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";
},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return smalltalk.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackagesFocusRequested(){return smalltalk.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($HLPackagesFocusRequested(),"onPackagesFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackagesFocusRequested \x0a\x09\x09send: #onPackagesFocusRequested\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLPackageSelected", "HLPackagesFocusRequested"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $PackageAdded(){return smalltalk.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._model();
$ctx1.sendIdx["model"]=1;
$1=_st($2)._systemAnnouncer();
$ctx1.sendIdx["systemAnnouncer"]=1;
_st($1)._on_send_to_($ClassAdded(),"onClassAdded:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st(_st(self._model())._systemAnnouncer())._on_send_to_($PackageAdded(),"onPackageAdded:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "observeSystem\x0a    self model systemAnnouncer \x0a\x09\x09on: ClassAdded \x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model systemAnnouncer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "model"],
referencedClasses: ["ClassAdded", "PackageAdded"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._items())._includes_(_st(_st(anAnnouncement)._theClass())._package());
if(! smalltalk.assert($1)){
self._initializeItems();
$2=self._refresh();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLPackagesListWidget)})},
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x0a\x09\x22Amber doesn't have yet a global organizer for packages\x22\x0a\x09\x0a\x09(self items includes: anAnnouncement theClass package) ifFalse: [ \x0a\x09\x09self \x0a\x09\x09\x09initializeItems;\x0a\x09\x09\x09refresh ]",
messageSends: ["ifFalse:", "includes:", "items", "package", "theClass", "initializeItems", "refresh"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._initializeItems();
$1=self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLPackagesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09self \x0a\x09\x09initializeItems;\x0a\x09\x09refresh",
messageSends: ["initializeItems", "refresh"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
package_=_st(anAnnouncement)._item();
self._selectedItem_(package_);
$1=self._hasFocus();
if(! smalltalk.assert($1)){
self._activateItem_(package_);
$2=self._focus();
$2;
};
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},smalltalk.HLPackagesListWidget)})},
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| package |\x0a\x09\x0a\x09package := anAnnouncement item.\x0a\x09\x0a\x09self selectedItem: package.\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self\x0a\x09\x09\x09activateItem: package;\x0a\x09\x09\x09focus ]",
messageSends: ["item", "selectedItem:", "ifFalse:", "hasFocus", "activateItem:", "focus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPackagesFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackagesFocusRequested",{},smalltalk.HLPackagesListWidget)})},
args: [],
source: "onPackagesFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aPackage,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(aPackage)._name());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},smalltalk.HLPackagesListWidget)})},
args: ["aPackage", "html"],
source: "renderItemLabel: aPackage on: html\x0a\x09html with: aPackage name",
messageSends: ["with:", "name"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedPackage_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage},smalltalk.HLPackagesListWidget)})},
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09self model selectedPackage: aPackage",
messageSends: ["selectedPackage:", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLToolListWidget, [], 'Helios-Browser');
smalltalk.HLProtocolsListWidget.comment="I render a list of protocols for the selected class.";
smalltalk.addMethod(
smalltalk.method({
selector: "allProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(anItem).__eq(self._allProtocol());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
return "";
};
$2=_st(anItem).__eq("private");
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($2)){
return "private";
};
$3=_st(anItem).__eq("initialization");
if(smalltalk.assert($3)){
return "initialization";
};
$4=_st(anItem)._match_("^\x5c*");
if(smalltalk.assert($4)){
return "extension";
};
return "";
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},smalltalk.HLProtocolsListWidget)})},
args: ["anItem"],
source: "cssClassForItem: anItem\x0a\x09anItem = self allProtocol ifTrue: [ ^ '' ].\x0a\x09anItem = 'private' ifTrue: [ ^ 'private' ].\x0a\x09anItem = 'initialization' ifTrue: [ ^ 'initialization' ].\x0a\x09(anItem match: '^\x5c*') ifTrue: [ ^ 'extension' ].\x0a\x09^ ''",
messageSends: ["ifTrue:", "=", "allProtocol", "match:"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";
},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLProtocolsFocusRequested(){return smalltalk.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._announcer();
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=1;
_st($1)._on_send_to_($HLShowInstanceToggled(),"onClassSelected:",self);
$ctx1.sendIdx["on:send:to:"]=2;
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
$ctx1.sendIdx["on:send:to:"]=3;
$2=_st($1)._on_send_to_($HLProtocolsFocusRequested(),"onProtocolsFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLShowInstanceToggled \x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLProtocolSelected\x0a\x09\x09send: #onProtocolSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLProtocolsFocusRequested \x0a\x09\x09send: #onProtocolsFocusRequested\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "announcer", "model"],
referencedClasses: ["HLClassSelected", "HLShowInstanceToggled", "HLProtocolSelected", "HLProtocolsFocusRequested"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._model())._systemAnnouncer();
_st($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a\x09\x09on: ProtocolAdded \x0a\x09\x09send: #onProtocolAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolRemoved\x0a\x09\x09send: #onProtocolRemoved:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "systemAnnouncer", "model"],
referencedClasses: ["ProtocolAdded", "ProtocolRemoved"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedItem_(nil);
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLProtocolsListWidget)})},
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["selectedItem:", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1;
class_=_st(anAnnouncement)._theClass();
$1=_st(class_).__eq(_st(self._model())._selectedClass());
if(! smalltalk.assert($1)){
return self;
};
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLProtocolsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolAdded: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09\x0a\x09class = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["theClass", "ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,protocol;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$5,$6;
class_=_st(anAnnouncement)._theClass();
protocol=_st(anAnnouncement)._protocol();
$2=class_;
$4=self._model();
$ctx1.sendIdx["model"]=1;
$3=_st($4)._selectedClass();
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
return self;
};
$5=_st(_st(self._model())._selectedProtocol()).__eq(protocol);
if(smalltalk.assert($5)){
self._selectedItem_(nil);
$6=self._selectItem_(nil);
$6;
};
self._setItemsForSelectedClass();
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement,class_:class_,protocol:protocol},smalltalk.HLProtocolsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolRemoved: anAnnouncement\x0a\x09| class protocol |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09protocol := anAnnouncement protocol.\x0a\x09\x0a\x09class = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self model selectedProtocol = protocol \x0a    \x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09\x09selectItem: nil ].\x0a        \x0a    self setItemsForSelectedClass.\x0a    self refresh",
messageSends: ["theClass", "protocol", "ifFalse:", "=", "selectedClass", "model", "ifTrue:", "selectedProtocol", "selectedItem:", "selectItem:", "setItemsForSelectedClass", "refresh"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var protocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
protocol=_st(anAnnouncement)._item();
self._selectedItem_(protocol);
$1=protocol;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
$2=self._hasFocus();
if(! smalltalk.assert($2)){
self._activateItem_(protocol);
$3=self._focus();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement,protocol:protocol},smalltalk.HLProtocolsListWidget)})},
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a\x09| protocol |\x0a\x09\x0a\x09protocol := anAnnouncement item.\x0a\x09\x0a\x09self selectedItem: protocol.\x0a\x09protocol ifNil: [ ^ self ].\x0a    \x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: protocol;\x0a\x09\x09\x09focus ]",
messageSends: ["item", "selectedItem:", "ifNil:", "ifFalse:", "hasFocus", "activateItem:", "focus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolsFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolsFocusRequested",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "onProtocolsFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply(_st(self), [html]);
$ctx2.sendIdx["renderContentOn:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLProtocolsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "showInstance", "model", "class:", "div", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._selectedProtocol_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString},smalltalk.HLProtocolsListWidget)})},
args: ["aString"],
source: "selectItem: aString\x0a    self model selectedProtocol: aString",
messageSends: ["selectedProtocol:", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HLProtocolsListWidget.superclass.fn.prototype._selectedItem.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "selectedItem\x0a\x09^ super selectedItem\x22 ifNil: [ self allProtocol ]\x22",
messageSends: ["selectedItem"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
if(($receiver = aClass) == nil || $receiver == null){
$2=self._allProtocol();
$ctx1.sendIdx["allProtocol"]=1;
$1=_st($Array())._with_($2);
$ctx1.sendIdx["with:"]=1;
} else {
$3=_st($Array())._with_(self._allProtocol());
_st($3)._addAll_(_st(aClass)._protocols());
$4=_st($3)._yourself();
$1=$4;
};
self._items_($1);
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForClass:",{aClass:aClass},smalltalk.HLProtocolsListWidget)})},
args: ["aClass"],
source: "setItemsForClass: aClass\x0a\x09self items: (aClass\x0a    \x09ifNil: [ Array with: self allProtocol ]\x0a      \x09ifNotNil: [ \x0a        \x09(Array with: self allProtocol) \x0a            \x09addAll: aClass protocols; \x0a                yourself ])",
messageSends: ["items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setItemsForSelectedClass",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setItemsForClass_(_st(self._model())._selectedClass());
return self}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedClass",{},smalltalk.HLProtocolsListWidget)})},
args: [],
source: "setItemsForSelectedClass\x0a\x09self setItemsForClass: self model selectedClass",
messageSends: ["setItemsForClass:", "selectedClass", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLSelectorsCache', smalltalk.Object, ['classesCache'], 'Helios-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "cacheFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(($receiver = aClass) == nil || $receiver == null){
return nil;
} else {
aClass;
};
$1=_st(self._classesCache())._at_ifAbsentPut_(_st(aClass)._name(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._newCacheFor_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "cacheFor: aClass\x0a\x09aClass ifNil: [ ^ nil ].\x0a    \x0a\x09^ self classesCache\x0a    \x09at: aClass name\x0a        ifAbsentPut: [ self newCacheFor: aClass ]",
messageSends: ["ifNil:", "at:ifAbsentPut:", "classesCache", "name", "newCacheFor:"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "classesCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@classesCache"];
if(($receiver = $2) == nil || $receiver == null){
self["@classesCache"]=_st($HashedCollection())._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesCache",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "classesCache\x0a\x09^ classesCache ifNil: [ classesCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLSelectorsCache.superclass.fn.prototype._initialize.apply(_st(self), []);
self._observeSystem();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self observeSystem",
messageSends: ["initialize", "observeSystem"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "invalidateCacheFor:",
protocol: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cacheFor_(_st(aMethod)._methodClass()))._invalidateSelector_(_st(aMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"invalidateCacheFor:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "invalidateCacheFor: aMethod\x0a\x09(self cacheFor: aMethod methodClass)\x0a    \x09invalidateSelector: aMethod selector",
messageSends: ["invalidateSelector:", "cacheFor:", "methodClass", "selector"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._cacheFor_(_st(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverridden: aMethod",
messageSends: ["isOverridden:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._cacheFor_(_st(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverride: aMethod",
messageSends: ["isOverride:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "newCacheFor:",
protocol: 'factory',
fn: function (aClass){
var self=this;
function $HLClassCache(){return smalltalk.HLClassCache||(typeof HLClassCache=="undefined"?nil:HLClassCache)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLClassCache())._on_selectorsCache_(aClass,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass},smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "newCacheFor: aClass\x0a\x09^ HLClassCache \x0a    \x09on: aClass\x0a        selectorsCache: self",
messageSends: ["on:selectorsCache:"],
referencedClasses: ["HLClassCache"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SystemAnnouncer())._current();
_st($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
$ctx1.sendIdx["on:send:to:"]=1;
$2=_st($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLSelectorsCache)})},
args: [],
source: "observeSystem\x0a\x09SystemAnnouncer current\x0a\x09\x09on: MethodAdded\x0a\x09\x09send: #onMethodAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodRemoved\x0a        send: #onMethodRemoved:\x0a\x09\x09to: self",
messageSends: ["on:send:to:", "current"],
referencedClasses: ["SystemAnnouncer", "MethodAdded", "MethodRemoved"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._invalidateCacheFor_(_st(anAnnouncement)._method());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},smalltalk.HLSelectorsCache)})},
args: ["anAnnouncement"],
source: "onMethodAdded: anAnnouncement\x0a\x09self invalidateCacheFor: anAnnouncement method",
messageSends: ["invalidateCacheFor:", "method"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._invalidateCacheFor_(_st(anAnnouncement)._method());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement},smalltalk.HLSelectorsCache)})},
args: ["anAnnouncement"],
source: "onMethodRemoved: anAnnouncement\x0a\x09self invalidateCacheFor: anAnnouncement method",
messageSends: ["invalidateCacheFor:", "method"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);


smalltalk.HLSelectorsCache.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=smalltalk.HLSelectorsCache.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "flush",
protocol: 'accessing',
fn: function (){
var self=this;
self["@current"]=nil;
return self},
args: [],
source: "flush\x0a\x09current := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

});
