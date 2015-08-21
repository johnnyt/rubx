define("amber-rubx/Rubx", ["amber/boot", "amber_core/Kernel-Objects", "amber/web/Web"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Rubx');
$core.packages["Rubx"].innerEval = function (expr) { return eval(expr); };
$core.packages["Rubx"].transport = {"type":"amd","amdNamespace":"amber-rubx"};

$core.addClass('Foo', $globals.Object, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "bar",
protocol: 'whatever',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Foo);



$core.addClass('RXCardWidget', $globals.Widget, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("card");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("card-image");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._img())._src_("https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($5)._class_("card-header");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._with_("First Card");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._div();
$recv($7)._class_("card-copy");
$8=$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._p_("Lorem ipsum dolor sit amet, consectetur adipisicing elit. \x0a\x09\x09\x09\x09Fuga, officiis sunt neque facilis culpa molestiae necessitatibus\x0a\x09\x09\x09\x09delectus veniam provident.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
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
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.RXCardWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'card'; with: [\x0a\x09\x09html div class: 'card-image'; with: [\x0a\x09\x09\x09html img src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png' ].\x0a\x09\x09html div class: 'card-header'; with: 'First Card'.\x0a\x09\x09html div class: 'card-copy'; with: [\x0a\x09\x09\x09html p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \x0a\x09\x09\x09\x09Fuga, officiis sunt neque facilis culpa molestiae necessitatibus\x0a\x09\x09\x09\x09delectus veniam provident.']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "src:", "img", "p:"]
}),
$globals.RXCardWidget);



$core.addClass('RXCardsWidget', $globals.Widget, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $RXCardWidget(){return $globals.RXCardWidget||(typeof RXCardWidget=="undefined"?nil:RXCardWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("cards");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($RXCardWidget())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(html)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($RXCardWidget())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv(html)._with_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$5=$recv($RXCardWidget())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv(html)._with_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$6=$recv($RXCardWidget())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv(html)._with_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $recv(html)._with_($recv($RXCardWidget())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.RXCardsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'cards'; with: [\x0a\x09\x09html with: RXCardWidget new.\x0a\x09\x09html with: RXCardWidget new.\x0a\x09\x09html with: RXCardWidget new.\x0a\x09\x09html with: RXCardWidget new.\x0a\x09\x09html with: RXCardWidget new]",
referencedClasses: ["RXCardWidget"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "new"]
}),
$globals.RXCardsWidget);



$core.addClass('RXNavigationWidget', $globals.Widget, [], 'Rubx');
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
selector: "openWorkspace",
protocol: 'actions',
fn: function (){
var self=this;
function $WorkspaceWindow(){return $globals.WorkspaceWindow||(typeof WorkspaceWindow=="undefined"?nil:WorkspaceWindow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(e)._preventDefault();
return $recv($recv($WorkspaceWindow())._new())._appendToJQuery_("#content"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openWorkspace",{},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openWorkspace\x0a\x09^ [:e |\x0a\x09\x09e preventDefault.\x0a\x09\x09WorkspaceWindow new appendToJQuery: '#content' asJQuery ]",
referencedClasses: ["WorkspaceWindow"],
//>>excludeEnd("ide");
messageSends: ["preventDefault", "appendToJQuery:", "new", "asJQuery"]
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
$recv($4)._href_("#workspace");
$recv($4)._onClick_(self._openWorkspace());
$5=$recv($4)._with_("Workspace");
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
source: "renderNavLinksOn: html\x0a\x09html li with: [\x0a\x09\x09html a href: '#ide';\x0a\x09\x09\x09onClick: self openIde;\x0a\x09\x09\x09with: 'Helios IDE' ].\x0a\x09html li with: [\x0a\x09\x09html a href: '#workspace';\x0a\x09\x09\x09onClick: self openWorkspace;\x0a\x09\x09\x09with: 'Workspace' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", "href:", "a", "onClick:", "openIde", "openWorkspace"]
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
var $1,$3,$5,$6,$7,$9,$10,$8,$4,$2;
$1=$recv(html)._nav();
$recv($1)._class_("deep-purple");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("role","navigation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("nav-wrapper container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($5)._id_("logo-container");
$recv($5)._href_("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$recv($5)._class_("brand-logo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._with_("Rubx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6;
self._renderNavOn_(html);
self._renderSideNavOn_(html);
$7=$recv(html)._a();
$recv($7)._href_("#");
$recv($7)._class_("button-collapse");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($7)._at_put_("data-activates","nav-mobile");
$8=$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$9=$recv(html)._tag_("i");
$recv($9)._class_("material-icons");
$10=$recv($9)._with_("menu");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $8;
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
source: "renderOn: html\x0a\x09html nav class: 'deep-purple'; at: 'role' put: 'navigation'; with: [\x0a\x09\x09html div class: 'nav-wrapper container'; with: [\x0a\x09\x09\x09html a id: 'logo-container'; href: '#'; class: 'brand-logo'; with: 'Rubx'.\x0a\x09\x09\x09self renderNavOn: html.\x0a\x09\x09\x09self renderSideNavOn: html.\x0a\x09\x09\x09html a href: '#'; class: 'button-collapse'; at: 'data-activates' put: 'nav-mobile'; with: [\x0a\x09\x09\x09\x09(html tag: 'i') class: 'material-icons'; with: 'menu' ]]]\x0a\x0a\x22\x09\x09html ul class: 'right hide-on-med-and-down'; with: [\x0a\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09html a href: '#ide';\x0a\x09\x09\x09\x09\x09onClick: self openIde;\x0a\x09\x09\x09\x09\x09with: 'Helios IDE' ].\x0a\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09html a href: '#workspace';\x0a\x09\x09\x09\x09\x09onClick: self openWorkspace;\x0a\x09\x09\x09\x09\x09with: 'Workspace' ]]]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "nav", "at:put:", "with:", "div", "id:", "a", "href:", "renderNavOn:", "renderSideNavOn:", "tag:"]
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



$core.addClass('Rubx', $globals.Object, [], 'Rubx');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Rubx)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "doJQueryAppend"]
}),
$globals.Rubx);

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


$core.addClass('RubxWindow', $globals.Widget, ['container'], 'Rubx');
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'interactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@container"])._asJQuery())._empty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09container asJQuery empty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery"]
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "closeWindow",
protocol: 'interactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@container"])._asJQuery())._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"closeWindow",{},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "closeWindow\x0a\x09container asJQuery remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery"]
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "container",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@container"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "container\x0a\x09^ container",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "prepareWindow",
protocol: 'rendering',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prepareWindow",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "renderCloseButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._span();
$recv($1)._class_("display-inline-block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._style_("float: right; margin-top: 3px; margin-left: 3px;");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
$recv($3)._href_("#");
$recv($3)._class_("window-close-button");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._closeWindow();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$4=$recv($3)._with_(" x ");
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
}, function($ctx1) {$ctx1.fill(self,"renderCloseButtonOn:",{html:html},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCloseButtonOn: html\x0a\x09html span\x0a\x09\x09class: 'display-inline-block';\x0a\x09\x09style: 'float: right; margin-top: 3px; margin-left: 3px;';\x0a\x09\x09with: [html a\x0a\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09class: 'window-close-button';\x0a\x09\x09\x09\x09onClick: [self closeWindow];\x0a\x09\x09\x09\x09with: ' x ' \x22MaglevIcon remove\x22].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "style:", "with:", "href:", "a", "onClick:", "closeWindow"]
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$7,$5,$3,$receiver;
$1=self["@container"];
if(($receiver = $1) == null || $receiver.isNil){
self["@container"]=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
self["@container"];
self._prepareWindow();
} else {
$1;
};
$2=self["@container"];
$recv($2)._class_("card window");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($4)._class_("nowrap");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._renderWindowTitleOn_(html);
$6=$recv(html)._div();
$recv($6)._class_("card-copy");
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderWindowContentOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09container ifNil: [\x0a\x09\x09container := html div.\x0a\x09\x09self prepareWindow].\x0a\x09container\x0a\x09\x09class: 'card window';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'nowrap';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderWindowTitleOn: html.\x0a\x09\x09\x09\x09\x09html div class: 'card-copy'; with: [\x0a\x09\x09\x09\x09\x09\x09self renderWindowContentOn: html]]].\x0a\x09\x22container onMouseDown: [self moveToFront].\x0a\x09self moveToFront.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "div", "prepareWindow", "class:", "with:", "renderWindowTitleOn:", "renderWindowContentOn:"]
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWindowContentOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._with_("A new window");
self._renderCloseButtonOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html with: 'A new window'.\x0a\x09\x22self renderHeightPlaceholderOn: html.\x22\x0a\x09self renderCloseButtonOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "renderCloseButtonOn:"]
}),
$globals.RubxWindow);

$core.addMethod(
$core.method({
selector: "renderWindowTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("card-header");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
$recv($3)._class_("window-title-content");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderWindowTitleContentOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
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
}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleOn:",{html:html},$globals.RubxWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWindowTitleOn: html\x0a\x09html div\x0a\x09\x09class: 'card-header';\x0a\x09\x09with: [html span\x0a\x09\x09\x09\x09class: 'window-title-content';\x0a\x09\x09\x09\x09with: [self renderWindowTitleContentOn: html]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "span", "renderWindowTitleContentOn:"]
}),
$globals.RubxWindow);



$core.addClass('WorkspaceWindow', $globals.RubxWindow, ['idSpan', 'commandBox', 'terminalBox'], 'Rubx');
$core.addMethod(
$core.method({
selector: "evaluate:withCallback:",
protocol: 'interactions',
fn: function (aCommand,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._alert_("You should perform the needed ajax now");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:withCallback:",{aCommand:aCommand,aBlock:aBlock},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand", "aBlock"],
source: "evaluate: aCommand withCallback: aBlock\x0a\x09window alert: 'You should perform the needed ajax now'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.WorkspaceWindow);

$core.addMethod(
$core.method({
selector: "handleEnter",
protocol: 'interactions',
fn: function (){
var self=this;
var command,html;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5,$8,$9,$10;
$1=$recv(self["@terminalBox"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
html=$recv($HTMLCanvas())._onJQuery_($1);
$2=$recv(self["@commandBox"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
command=$recv($2)._val();
$3=$recv(self["@commandBox"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$recv($3)._prop_value_("disabled",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["prop:value:"]=1;
//>>excludeEnd("ctx");
$4=html;
$recv($4)._with_(command);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$6=$4;
$7=$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["br"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._with_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
self._evaluate_withCallback_(command,(function(success,resultObj){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@terminalBox"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$8=$recv(html)._div();
$recv($8)._with_("=> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($8)._with_($recv(resultObj)._at_((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$9=$recv($8)._with_($recv(html)._br());
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$10=$recv(self["@commandBox"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$recv($10)._prop_value_("disabled",false);
return $recv($recv(self["@commandBox"])._asJQuery())._val_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleEnter",{command:command,html:html},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleEnter\x0a\x09|command html|\x0a\x09html := HTMLCanvas onJQuery: terminalBox asJQuery.\x0a\x09command := commandBox asJQuery val.\x0a\x09\x22command := command replace: '''' with: ''''''.\x22\x0a\x09commandBox asJQuery prop: 'disabled' value: true.\x0a\x09html\x0a\x09\x09with: command;\x0a\x09\x09with: html br.\x0a\x09self evaluate: command\x0a\x09\x09withCallback: [:success :resultObj |\x0a\x09\x09\x09terminalBox with: [html div\x0a\x09\x09\x09\x09with: '=> ';\x0a\x09\x09\x09\x09with: (resultObj at: 2);\x0a\x09\x09\x09\x09with: html br].\x0a\x09\x09\x09\x22self scrollToBottom.\x22\x0a\x09\x09\x09commandBox asJQuery prop: 'disabled' value: false.\x0a\x09\x09\x09commandBox asJQuery val: ''].\x0a\x09\x22object \x0a\x09\x09evaluate: 'self.evaluate(''', command, ''')'\x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:success :resultObj | |class|\x0a\x09\x09\x09(resultObj at: 1) value\x0a\x09\x09\x09\x09ifTrue: [class := 'alert alert-error']\x0a\x09\x09\x09\x09ifFalse: [class := 'alert alert-success'].\x0a\x09\x09\x09terminalBox with: [html div\x0a\x09\x09\x09\x09class: class;\x0a\x09\x09\x09\x09with: '=> ';\x0a\x09\x09\x09\x09with: (resultObj at: 2) inlineViewComponent;\x0a\x09\x09\x09\x09with: html br].\x0a\x09\x09\x09self scrollToBottom.\x0a\x09\x09\x09commandBox asJQuery prop: 'disabled' value: false.\x0a\x09\x09\x09commandBox asJQuery val: ''].\x0a\x09\x22",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["onJQuery:", "asJQuery", "val", "prop:value:", "with:", "br", "evaluate:withCallback:", "div", "at:", "val:"]
}),
$globals.WorkspaceWindow);

$core.addMethod(
$core.method({
selector: "populateWindow:",
protocol: 'interactions',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@idSpan"])._with_($recv($recv(json)._result())._oop());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"populateWindow:",{json:json},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "populateWindow: json\x0a\x09idSpan with: json result oop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "oop", "result"]
}),
$globals.WorkspaceWindow);

$core.addMethod(
$core.method({
selector: "prepareWindow",
protocol: 'interactions',
fn: function (){
var self=this;
var xhr;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
xhr=$recv($Platform())._newXhr();
$recv(xhr)._open_url_async_("POST","/workspaces",true);
$recv(xhr)._onreadystatechange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(xhr)._readyState()).__eq((4));
if($core.assert($1)){
$4=$recv(xhr)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_eq((200));
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(xhr)._status()).__lt((300));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
return self._populateWindow_($recv($JSON())._parse_($recv(xhr)._responseText()));
} else {
return $recv(console)._error_(xhr);
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(xhr)._send();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prepareWindow",{xhr:xhr},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prepareWindow\x0a\x09| xhr |\x0a\x09xhr := Platform newXhr.\x0a\x09xhr open: 'POST' url: '/workspaces' async: true.\x0a\x09xhr onreadystatechange: [\x0a\x09\x09xhr readyState = 4 ifTrue: [\x0a\x09\x09\x09(xhr status >= 200 and: [ xhr status < 300 ])\x0a\x09\x09\x09\x09ifTrue: [ self populateWindow: (JSON parse: xhr responseText) ]\x0a\x09\x09\x09\x09ifFalse: [ console error: xhr ]]].\x0a\x09xhr send",
referencedClasses: ["Platform", "JSON"],
//>>excludeEnd("ide");
messageSends: ["newXhr", "open:url:async:", "onreadystatechange:", "ifTrue:", "=", "readyState", "ifTrue:ifFalse:", "and:", ">=", "status", "<", "populateWindow:", "parse:", "responseText", "error:", "send"]
}),
$globals.WorkspaceWindow);

$core.addMethod(
$core.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
self["@terminalBox"]=$recv($recv(html)._pre())._style_("height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._input();
$recv($1)._type_("text");
$recv($1)._style_("width: 97%;");
$2=$recv($1)._onKeyPress_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(e)._keyCode()).__eq_eq((13));
if($core.assert($3)){
return self._handleEnter();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@commandBox"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderWindowContentOn:",{html:html},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWindowContentOn: html\x0a\x09terminalBox := html pre\x0a\x09\x09style: 'height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;'.\x0a\x09commandBox := html input\x0a\x09\x09type: 'text';\x0a\x09\x09style: 'width: 97%;';\x0a\x09\x09onKeyPress: [:e | e keyCode == 13 \x0a\x09\x09\x09ifTrue: [self handleEnter]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["style:", "pre", "type:", "input", "onKeyPress:", "ifTrue:", "==", "keyCode", "handleEnter"]
}),
$globals.WorkspaceWindow);

$core.addMethod(
$core.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._with_("Workspace ");
self["@idSpan"]=$recv(html)._span();
self._renderCloseButtonOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},$globals.WorkspaceWindow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html with: 'Workspace '.\x0a\x09idSpan := html span.\x0a\x09self renderCloseButtonOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "span", "renderCloseButtonOn:"]
}),
$globals.WorkspaceWindow);


});
