Smalltalk createPackage: 'Rubx'!
Widget subclass: #RXNavigationWidget
	instanceVariableNames: ''
	package: 'Rubx'!

!RXNavigationWidget methodsFor: 'actions'!

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
			with: 'Helios IDE' ]
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
!

renderSideNavOn: html
	html ul id: 'nav-mobile'; class: 'side-nav'; with: [
		self renderNavLinksOn: html ]
! !

Object subclass: #Rubx
	instanceVariableNames: ''
	package: 'Rubx'!

!Rubx methodsFor: 'starting'!

start
	RXNavigationWidget new appendToJQuery: '#navigation' asJQuery
! !

!Rubx class methodsFor: 'starting'!

start
	self new start
! !

