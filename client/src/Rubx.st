Smalltalk createPackage: 'Rubx'!
Object subclass: #Foo
	instanceVariableNames: ''
	package: 'Rubx'!

!Foo methodsFor: 'whatever'!

bar
! !

Widget subclass: #RXCardWidget
	instanceVariableNames: ''
	package: 'Rubx'!

!RXCardWidget methodsFor: 'rendering'!

renderOn: html
	html div class: 'card'; with: [
		html div class: 'card-image'; with: [
			html img src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png' ].
		html div class: 'card-header'; with: 'First Card'.
		html div class: 'card-copy'; with: [
			html p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Fuga, officiis sunt neque facilis culpa molestiae necessitatibus
				delectus veniam provident.']]
! !

Widget subclass: #RXCardsWidget
	instanceVariableNames: ''
	package: 'Rubx'!

!RXCardsWidget methodsFor: 'rendering'!

renderOn: html
	html div class: 'cards'; with: [
		html with: RXCardWidget new.
		html with: RXCardWidget new.
		html with: RXCardWidget new.
		html with: RXCardWidget new.
		html with: RXCardWidget new]
! !

Widget subclass: #RXNavigationWidget
	instanceVariableNames: ''
	package: 'Rubx'!

!RXNavigationWidget methodsFor: 'actions'!

openIde
	^ [:e |
		e preventDefault.
		(window require: 'amber/helpers') popupHelios ]
!

openWorkspace
	^ [:e |
		e preventDefault.
		WorkspaceWindow new appendToJQuery: '#content' asJQuery ]
! !

!RXNavigationWidget methodsFor: 'rendering'!

renderNavLinksOn: html
	html li with: [
		html a href: '#ide';
			onClick: self openIde;
			with: 'Helios IDE' ].
	html li with: [
		html a href: '#workspace';
			onClick: self openWorkspace;
			with: 'Workspace' ]
!

renderNavOn: html
	html ul class: 'right hide-on-small-and-down'; with: [
		self renderNavLinksOn: html ]
!

renderOn: html
	html nav class: 'deep-purple'; at: 'role' put: 'navigation'; with: [
		html div class: 'nav-wrapper container'; with: [
			html a id: 'logo-container'; href: '#'; class: 'brand-logo'; with: 'Rubx'.
			self renderNavOn: html.
			self renderSideNavOn: html.
			html a href: '#'; class: 'button-collapse'; at: 'data-activates' put: 'nav-mobile'; with: [
				(html tag: 'i') class: 'material-icons'; with: 'menu' ]]]

"		html ul class: 'right hide-on-med-and-down'; with: [
			html li with: [
				html a href: '#ide';
					onClick: self openIde;
					with: 'Helios IDE' ].
			html li with: [
				html a href: '#workspace';
					onClick: self openWorkspace;
					with: 'Workspace' ]]]"
!

renderSideNavOn: html
	html ul id: 'nav-mobile'; class: 'side-nav'; with: [
		self renderNavLinksOn: html ]
! !

Object subclass: #Rubx
	instanceVariableNames: ''
	package: 'Rubx'!

!Rubx methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
!

start
	RXNavigationWidget new appendToJQuery: '#navigation' asJQuery
! !

!Rubx class methodsFor: 'starting'!

start
	self new start
! !

Widget subclass: #RubxWindow
	instanceVariableNames: 'container'
	package: 'Rubx'!

!RubxWindow methodsFor: 'accessing'!

container
	^ container
! !

!RubxWindow methodsFor: 'interactions'!

clear
	container asJQuery empty
!

closeWindow
	container asJQuery remove
! !

!RubxWindow methodsFor: 'rendering'!

prepareWindow
!

renderCloseButtonOn: html
	html span
		class: 'display-inline-block';
		style: 'float: right; margin-top: 3px; margin-left: 3px;';
		with: [html a
				href: '#';
				class: 'window-close-button';
				onClick: [self closeWindow];
				with: ' x ' "MaglevIcon remove"].
!

renderOn: html
	container ifNil: [
		container := html div.
		self prepareWindow].
	container
		class: 'card window';
		with: [
			html div
				class: 'nowrap';
				with: [
					self renderWindowTitleOn: html.
					html div class: 'card-copy'; with: [
						self renderWindowContentOn: html]]].
	"container onMouseDown: [self moveToFront].
	self moveToFront."
!

renderWindowContentOn: html
!

renderWindowTitleContentOn: html
	html with: 'A new window'.
	"self renderHeightPlaceholderOn: html."
	self renderCloseButtonOn: html.
!

renderWindowTitleOn: html
	html div
		class: 'card-header';
		with: [html span
				class: 'window-title-content';
				with: [self renderWindowTitleContentOn: html]].
! !

RubxWindow subclass: #WorkspaceWindow
	instanceVariableNames: 'idSpan commandBox terminalBox'
	package: 'Rubx'!

!WorkspaceWindow methodsFor: 'interactions'!

evaluate: aCommand withCallback: aBlock
	window alert: 'You should perform the needed ajax now'
!

handleEnter
	|command html|
	html := HTMLCanvas onJQuery: terminalBox asJQuery.
	command := commandBox asJQuery val.
	"command := command replace: '''' with: ''''''."
	commandBox asJQuery prop: 'disabled' value: true.
	html
		with: command;
		with: html br.
	self evaluate: command
		withCallback: [:success :resultObj |
			terminalBox with: [html div
				with: '=> ';
				with: (resultObj at: 2);
				with: html br].
			"self scrollToBottom."
			commandBox asJQuery prop: 'disabled' value: false.
			commandBox asJQuery val: ''].
	"object 
		evaluate: 'self.evaluate(''', command, ''')'
		language: 'ruby'
		withCallback: [:success :resultObj | |class|
			(resultObj at: 1) value
				ifTrue: [class := 'alert alert-error']
				ifFalse: [class := 'alert alert-success'].
			terminalBox with: [html div
				class: class;
				with: '=> ';
				with: (resultObj at: 2) inlineViewComponent;
				with: html br].
			self scrollToBottom.
			commandBox asJQuery prop: 'disabled' value: false.
			commandBox asJQuery val: ''].
	"
!

populateWindow: json
	idSpan with: json result oop
!

prepareWindow
	| xhr |
	xhr := Platform newXhr.
	xhr open: 'POST' url: '/workspaces' async: true.
	xhr onreadystatechange: [
		xhr readyState = 4 ifTrue: [
			(xhr status >= 200 and: [ xhr status < 300 ])
				ifTrue: [ self populateWindow: (JSON parse: xhr responseText) ]
				ifFalse: [ console error: xhr ]]].
	xhr send
! !

!WorkspaceWindow methodsFor: 'rendering'!

renderWindowContentOn: html
	terminalBox := html pre
		style: 'height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;'.
	commandBox := html input
		type: 'text';
		style: 'width: 97%;';
		onKeyPress: [:e | e keyCode == 13 
			ifTrue: [self handleEnter]].
!

renderWindowTitleContentOn: html
	html with: 'Workspace '.
	idSpan := html span.
	self renderCloseButtonOn: html.
! !

