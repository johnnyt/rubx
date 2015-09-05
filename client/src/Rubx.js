define("amber-rubx/Rubx", ["amber/boot", "amber/web/Web", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Rubx');
$core.packages["Rubx"].innerEval = function (expr) { return eval(expr); };
$core.packages["Rubx"].transport = {"type":"amd","amdNamespace":"amber-rubx"};

$core.addClass('RXNavigationWidget', $globals.Widget, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "lookupObject",
protocol: 'actions',
fn: function (){
var self=this;
function $Rubx(){return $globals.Rubx||(typeof Rubx=="undefined"?nil:Rubx)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(e){
var objId,obj;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(e)._preventDefault();
objId=$recv(window)._prompt_("Enter ObjectID");
objId;
obj=$recv($recv($Rubx())._objectSpace())._at_(objId);
obj;
$recv(console)._log_(obj);
return $recv(obj)._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,objId:objId,obj:obj},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupObject",{},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lookupObject\x0a\x09^ [:e || objId obj |\x0a\x09\x09e preventDefault.\x0a\x09\x09objId := window prompt: 'Enter ObjectID'.\x0a\x09\x09obj := Rubx objectSpace at: objId.\x0a\x09\x09console log: obj.\x0a\x09\x09obj inspect ]",
referencedClasses: ["Rubx"],
//>>excludeEnd("ide");
messageSends: ["preventDefault", "prompt:", "at:", "objectSpace", "log:", "inspect"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "openIde",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(e)._preventDefault();
return $recv($recv(window)._require_("amber/helpers"))._popupHelios();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openIde",{},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openIde\x0a\x09^ [:e |\x0a\x09\x09e preventDefault.\x0a\x09\x09(window require: 'amber/helpers') popupHelios ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["preventDefault", "popupHelios", "require:"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "renderNavLinksOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($2)._href_("#ide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$recv($2)._onClick_(self._openIde());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_("Helios IDE");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
$recv($4)._href_("#lookup");
$recv($4)._onClick_(self._lookupObject());
$5=$recv($4)._with_("Lookup Object");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderNavLinksOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderNavLinksOn: html\x0a\x09html li with: [\x0a\x09\x09html a href: '#ide';\x0a\x09\x09\x09onClick: self openIde;\x0a\x09\x09\x09with: 'Helios IDE' ].\x0a\x09html li with: [\x0a\x09\x09html a href: '#lookup';\x0a\x09\x09\x09onClick: self lookupObject;\x0a\x09\x09\x09with: 'Lookup Object' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", "href:", "a", "onClick:", "openIde", "lookupObject"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "renderNavOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("right hide-on-small-and-down");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderNavLinksOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderNavOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderNavOn: html\x0a\x09html ul class: 'right hide-on-small-and-down'; with: [\x0a\x09\x09self renderNavLinksOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "renderNavLinksOn:"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$9,$11,$12,$10,$6,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("navbar-fixed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._nav();
$recv($3)._class_("deep-purple");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._at_put_("role","navigation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._div();
$recv($5)._class_("nav-wrapper container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($7)._id_("logo-container");
$recv($7)._href_("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$recv($7)._class_("brand-logo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("Rubx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8;
self._renderNavOn_(html);
self._renderSideNavOn_(html);
$9=$recv(html)._a();
$recv($9)._href_("#");
$recv($9)._class_("button-collapse");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$recv($9)._at_put_("data-activates","nav-mobile");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$11=$recv(html)._tag_("i");
$recv($11)._class_("material-icons");
$12=$recv($11)._with_("menu");
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'navbar-fixed'; with: [\x0a\x09\x09html nav class: 'deep-purple'; at: 'role' put: 'navigation'; with: [\x0a\x09\x09\x09html div class: 'nav-wrapper container'; with: [\x0a\x09\x09\x09\x09html a id: 'logo-container'; href: '#'; class: 'brand-logo'; with: 'Rubx'.\x0a\x09\x09\x09\x09self renderNavOn: html.\x0a\x09\x09\x09\x09self renderSideNavOn: html.\x0a\x09\x09\x09\x09\x22self renderSearchOn: html.\x22\x0a\x09\x09\x09\x09html a href: '#'; class: 'button-collapse'; at: 'data-activates' put: 'nav-mobile'; with: [\x0a\x09\x09\x09\x09\x09(html tag: 'i') class: 'material-icons'; with: 'menu' ]]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "nav", "at:put:", "id:", "a", "href:", "renderNavOn:", "renderSideNavOn:", "tag:"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "renderSearchOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$7,$8;
$recv($recv(html)._form())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._input();
$recv($1)._id_("search");
$2=$recv($1)._type_("search");
$2;
$3=$recv(html)._label();
$recv($3)._for_("search");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._tag_("i");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tag:"]=1;
//>>excludeEnd("ctx");
$recv($5)._class_("material-icons");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$6=$recv($5)._with_("search");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$7=$recv(html)._tag_("i");
$recv($7)._class_("material-icons");
$8=$recv($7)._with_("close");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSearchOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSearchOn: html\x0a\x09html form with: [\x0a\x09\x09html input id: 'search'; type: 'search'.\x0a\x09\x09html label for: 'search'; with: [\x0a\x09\x09\x09(html tag: 'i') class: 'material-icons'; with: 'search' ].\x0a\x09\x09(html tag: 'i') class: 'material-icons'; with: 'close' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "form", "id:", "input", "type:", "for:", "label", "class:", "tag:"]
}),
$globals.RXNavigationWidget);

$core.addMethod(
$core.method({
selector: "renderSideNavOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._id_("nav-mobile");
$recv($1)._class_("side-nav");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderNavLinksOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSideNavOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSideNavOn: html\x0a\x09html ul id: 'nav-mobile'; class: 'side-nav'; with: [\x0a\x09\x09self renderNavLinksOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "ul", "class:", "with:", "renderNavLinksOn:"]
}),
$globals.RXNavigationWidget);



$core.addClass('RXObject', $globals.Object, ['objectId', 'klass'], 'Rubx');
$core.addMethod(
$core.method({
selector: "klass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@klass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "klass\x0a\x09^ klass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RXObject);

$core.addMethod(
$core.method({
selector: "objectId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@objectId"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "objectId\x0a\x09^ objectId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RXObject);

$core.addMethod(
$core.method({
selector: "parseJSON:",
protocol: 'initialization',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@objectId"]=$recv(json)._at_("object_id");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self["@klass"]=$recv(json)._at_("class");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{json:json},$globals.RXObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "parseJSON: json\x0a\x09\x22self isLoaded \x0a\x09\x09ifNil: [isLoaded := false].\x22\x0a\x09objectId := json at: 'object_id'.\x0a\x09klass := json at: 'class'.\x0a\x22\x09to_s := json to_s.\x0a\x09inspect: json inspect.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.RXObject);


$core.addMethod(
$core.method({
selector: "newObject:",
protocol: 'instance creation',
fn: function (json){
var self=this;
var object;
function $Rubx(){return $globals.Rubx||(typeof Rubx=="undefined"?nil:Rubx)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
object=self._parseJSON_(json);
$recv($recv($Rubx())._objectSpace())._updateObject_(object);
$1=object;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newObject:",{json:json,object:object},$globals.RXObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "newObject: json\x0a\x09|object|\x0a\x09object := self parseJSON: json.\x0a\x09Rubx objectSpace updateObject: object.\x0a\x09^ object",
referencedClasses: ["Rubx"],
//>>excludeEnd("ide");
messageSends: ["parseJSON:", "updateObject:", "objectSpace"]
}),
$globals.RXObject.klass);

$core.addMethod(
$core.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (json){
var self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
object=self._new();
$2=object;
$recv($2)._parseJSON_(json);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{json:json,object:object},$globals.RXObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "parseJSON: json\x0a\x09|object|\x0a\x09object := self new.\x0a\x09^ object parseJSON: json; yourself\x0a\x09\x22object := self newFor: obj basetype.\x0a\x09json loaded\x0a\x09\x09ifTrue: [^ object parseJSON: json; yourself]\x0a\x09\x09ifFalse: [^ object parseJSONNotLoaded: json; yourself].\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "parseJSON:", "yourself"]
}),
$globals.RXObject.klass);


$core.addClass('RXObjectSpace', $globals.Object, ['objects'], 'Rubx');
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'objects',
fn: function (anObjectId){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@objects"])._at_ifAbsent_(anObjectId,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._reloadObject_(anObjectId);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{anObjectId:anObjectId},$globals.RXObjectSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObjectId"],
source: "at: anObjectId\x0a\x09^ objects \x0a\x09\x09at: anObjectId\x0a\x09\x09ifAbsent: [self reloadObject: anObjectId]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "reloadObject:"]
}),
$globals.RXObjectSpace);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@objects"]=$recv($Dictionary())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RXObjectSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09objects := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.RXObjectSpace);

$core.addMethod(
$core.method({
selector: "reloadObject:",
protocol: 'objects',
fn: function (anObjectId){
var self=this;
var obj;
function $Rubx(){return $globals.Rubx||(typeof Rubx=="undefined"?nil:Rubx)}
function $RXObject(){return $globals.RXObject||(typeof RXObject=="undefined"?nil:RXObject)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
obj=$recv($Rubx())._ajax_("objects/".__comma($recv(anObjectId)._asString()));
$1=$recv($RXObject())._newObject_(obj);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reloadObject:",{anObjectId:anObjectId,obj:obj},$globals.RXObjectSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObjectId"],
source: "reloadObject: anObjectId\x0a\x09|obj|\x0a\x09obj := Rubx ajax: 'objects/', anObjectId asString.\x0a\x09^ RXObject newObject: obj.",
referencedClasses: ["Rubx", "RXObject"],
//>>excludeEnd("ide");
messageSends: ["ajax:", ",", "asString", "newObject:"]
}),
$globals.RXObjectSpace);

$core.addMethod(
$core.method({
selector: "updateObject:",
protocol: 'objects',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@objects"])._at_put_($recv(anObject)._objectId(),anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateObject:",{anObject:anObject},$globals.RXObjectSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "updateObject: anObject\x0a\x09objects at: anObject objectId put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "objectId"]
}),
$globals.RXObjectSpace);


$globals.RXObjectSpace.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@instance"];
if(($receiver = $1) == null || $receiver.isNil){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.RXObjectSpace.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.RXObjectSpace.klass);


$core.addClass('Rubx', $globals.Object, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
function $RXNavigationWidget(){return $globals.RXNavigationWidget||(typeof RXNavigationWidget=="undefined"?nil:RXNavigationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($RXNavigationWidget())._new())._appendToJQuery_("#navigation"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Rubx)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09RXNavigationWidget new appendToJQuery: '#navigation' asJQuery",
referencedClasses: ["RXNavigationWidget"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.Rubx);


$core.addMethod(
$core.method({
selector: "ajax:",
protocol: 'ajax',
fn: function (aString){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ajax_data_(aString,$recv($Dictionary())._new());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:",{aString:aString},$globals.Rubx.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "ajax: aString\x0a\x09^ self ajax: aString data: Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ajax:data:", "new"]
}),
$globals.Rubx.klass);

$core.addMethod(
$core.method({
selector: "ajax:data:",
protocol: 'ajax',
fn: function (aString,data){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	} else {
		return result;
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajax:data:",{aString:aString,data:data},$globals.Rubx.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "data"],
source: "ajax: aString data: data\x0a\x09< var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);\x0a\x09if (result.success === false) {\x0a\x09\x09self.error('Server call failed: ' + result.exception);\x0a\x09} else {\x0a\x09\x09return result;\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rubx.klass);

$core.addMethod(
$core.method({
selector: "objectSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $RXObjectSpace(){return $globals.RXObjectSpace||(typeof RXObjectSpace=="undefined"?nil:RXObjectSpace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($RXObjectSpace())._instance();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectSpace",{},$globals.Rubx.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "objectSpace\x0a\x09^ RXObjectSpace instance",
referencedClasses: ["RXObjectSpace"],
//>>excludeEnd("ide");
messageSends: ["instance"]
}),
$globals.Rubx.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Rubx.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start", "new"]
}),
$globals.Rubx.klass);

});
