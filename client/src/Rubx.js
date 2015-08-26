define("amber-rubx/Rubx", ["amber/boot", "amber/web/Web", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Rubx');
$core.packages["Rubx"].innerEval = function (expr) { return eval(expr); };
$core.packages["Rubx"].transport = {"type":"amd","amdNamespace":"amber-rubx"};

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
selector: "renderNavLinksOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._href_("#ide");
$recv($1)._onClick_(self._openIde());
$2=$recv($1)._with_("Helios IDE");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderNavLinksOn:",{html:html},$globals.RXNavigationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderNavLinksOn: html\x0a\x09html li with: [\x0a\x09\x09html a href: '#ide';\x0a\x09\x09\x09onClick: self openIde;\x0a\x09\x09\x09with: 'Helios IDE' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", "href:", "a", "onClick:", "openIde"]
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
source: "renderOn: html\x0a\x09html nav class: 'deep-purple'; at: 'role' put: 'navigation'; with: [\x0a\x09\x09html div class: 'nav-wrapper container'; with: [\x0a\x09\x09\x09html a id: 'logo-container'; href: '#'; class: 'brand-logo'; with: 'Rubx'.\x0a\x09\x09\x09self renderNavOn: html.\x0a\x09\x09\x09self renderSideNavOn: html.\x0a\x09\x09\x09html a href: '#'; class: 'button-collapse'; at: 'data-activates' put: 'nav-mobile'; with: [\x0a\x09\x09\x09\x09(html tag: 'i') class: 'material-icons'; with: 'menu' ]]]",
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

});
