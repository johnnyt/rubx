Smalltalk createPackage: 'Rubx'!
Widget subclass: #RXNavigationWidget
	instanceVariableNames: ''
	package: 'Rubx'!

!RXNavigationWidget methodsFor: 'actions'!

lookupObject
	^ [:e || objId obj |
		e preventDefault.
		objId := window prompt: 'Enter ObjectID' default: '125606401'.
		obj := Rubx objectSpace at: objId.
		self renderObject: obj ]
!

openIde
	^ [:e |
		e preventDefault.
		(window require: 'amber/helpers') popupHelios ]
! !

!RXNavigationWidget methodsFor: 'rendering'!

renderNavLinksOn: html
	html li with: [
		html a href: '#ide';
			onClick: self openIde;
			with: 'Helios IDE' ].
	html li with: [
		html a href: '#lookup';
			onClick: self lookupObject;
			with: 'Lookup Object' ]
!

renderNavOn: html
	html ul class: 'right hide-on-small-and-down'; with: [
		self renderNavLinksOn: html ]
!

renderObject: anRXObject
	|html|
	html := HTMLCanvas onJQuery: '#content' asJQuery.
	html
		div class: 'row'; with: [
			html div class: 'col s12 m7'; with: [
				(RXObjectCardWidget newWithObject: anRXObject)
					renderOn: html ]]
!

renderOn: html
	html div class: 'navbar-fixed'; with: [
		html nav class: 'deep-purple'; at: 'role' put: 'navigation'; with: [
			html div class: 'nav-wrapper container'; with: [
				html a id: 'logo-container'; href: '#'; class: 'brand-logo'; with: 'Rubx'.
				self renderNavOn: html.
				self renderSideNavOn: html.
				"self renderSearchOn: html."
				html a href: '#'; class: 'button-collapse'; at: 'data-activates' put: 'nav-mobile'; with: [
					html icon: 'menu' ]]]]
!

renderSearchOn: html
	html form with: [
		html input id: 'search'; type: 'search'.
		html label for: 'search'; with: [
			(html tag: 'i') class: 'material-icons'; with: 'search' ].
		(html tag: 'i') class: 'material-icons'; with: 'close' ]
!

renderSideNavOn: html
	html ul id: 'nav-mobile'; class: 'side-nav'; with: [
		self renderNavLinksOn: html ]
! !

Object subclass: #RXObject
	instanceVariableNames: 'objectId klass inspection string'
	package: 'Rubx'!

!RXObject methodsFor: 'accessing'!

inspection
	^ inspection
!

klass
	^ klass
!

objectId
	^ objectId
!

string
	^ string
! !

!RXObject methodsFor: 'initialization'!

parseJSON: json
	"self isLoaded 
		ifNil: [isLoaded := false]."
	objectId := json at: 'object_id'.
	klass := json at: 'class'.
	string := json at: 'to_s'.
	inspection := json at: 'inspect'.
! !

!RXObject class methodsFor: 'instance creation'!

newObject: json
	|object|
	object := self parseJSON: json.
	Rubx objectSpace updateObject: object.
	^ object
!

parseJSON: json
	|object|
	object := self new.
	^ object parseJSON: json; yourself
	"object := self newFor: obj basetype.
	json loaded
		ifTrue: [^ object parseJSON: json; yourself]
		ifFalse: [^ object parseJSONNotLoaded: json; yourself]."
! !

Widget subclass: #RXObjectCardWidget
	instanceVariableNames: 'container object'
	package: 'Rubx'!

!RXObjectCardWidget methodsFor: 'accessing'!

object
	^ object
!

object: anRXObject
	object := anRXObject
! !

!RXObjectCardWidget methodsFor: 'rendering'!

renderObjectOn: html
	html a href: '#close';
		class: 'right';
		onClick: [:e|e preventDefault.
			container asJQuery remove ];
		with: [
			html icon: 'highlight_off' ].
	html h4: object klass.
	html p: object inspection.
!

renderOn: html
	container ifNil: [
		container := html div ].
	container
		class: 'card';
		with: [
			html div class: 'card-content'; with: [
				self renderObjectOn: html ]]
! !

!RXObjectCardWidget class methodsFor: 'instance creation'!

newWithObject: aRXObject
	^ self new
		object: aRXObject;
		yourself
! !

Object subclass: #RXObjectSpace
	instanceVariableNames: 'objects'
	package: 'Rubx'!

!RXObjectSpace methodsFor: 'initialization'!

initialize
	objects := Dictionary new
! !

!RXObjectSpace methodsFor: 'objects'!

at: anObjectId
	^ objects 
		at: anObjectId
		ifAbsent: [self reloadObject: anObjectId]
!

reloadObject: anObjectId
	|obj|
	obj := Rubx ajax: 'objects/', anObjectId asString.
	^ RXObject newObject: obj.
!

updateObject: anObject
	objects at: anObject objectId put: anObject
! !

RXObjectSpace class instanceVariableNames: 'instance'!

!RXObjectSpace class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

Object subclass: #Rubx
	instanceVariableNames: ''
	package: 'Rubx'!

!Rubx methodsFor: 'starting'!

start
	RXNavigationWidget new appendToJQuery: '#navigation' asJQuery
! !

!Rubx class methodsFor: 'accessing'!

objectSpace
	^ RXObjectSpace instance
! !

!Rubx class methodsFor: 'ajax'!

ajax: aString
	^ self ajax: aString data: Dictionary new
!

ajax: aString data: data
	< var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	} else {
		return result;
	} >
! !

!Rubx class methodsFor: 'starting'!

start
	self new start
! !

!HTMLCanvas methodsFor: '*Rubx'!

icon: aString
	^ (self tag: 'i')
		class: 'material-icons';
		with: aString
! !

