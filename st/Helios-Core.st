Smalltalk createPackage: 'Helios-Core'!
InterfacingObject subclass: #HLModel
	instanceVariableNames: 'announcer environment'
	package: 'Helios-Core'!
!HLModel commentStamp!
I am the abstract superclass of all models of Helios.
I am the "Model" part of the MVC pattern implementation in Helios.

I provide access to an `Environment` object and both a local (model-specific) and global (system-specific) announcer.

The `#withChangesDo:` method is handy for performing model changes ensuring that all widgets are aware of the change and can prevent it from happening.

Modifications of the system should be done via commands (see `HLCommand` and subclasses).!

!HLModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

environment
	^ environment ifNil: [ self manager environment ]
!

environment: anEnvironment
	environment := anEnvironment
!

manager
	^ HLManager current
!

systemAnnouncer
	^ self environment systemAnnouncer
! !

!HLModel methodsFor: 'error handling'!

withChangesDo: aBlock
	[ 
		self announcer announce: (HLAboutToChange new
			actionBlock: aBlock).
		aBlock value.
	]
		on: HLChangeForbidden 
		do: [ :ex | ]
! !

!HLModel methodsFor: 'testing'!

isBrowserModel
	^ false
!

isReferencesModel
	^ false
!

isToolModel
	^ false
! !

HLModel subclass: #HLToolModel
	instanceVariableNames: 'selectedClass selectedPackage selectedProtocol selectedSelector'
	package: 'Helios-Core'!
!HLToolModel commentStamp!
I am a model specific to package and class manipulation. All browsers should either use me or a subclass as their model.

I provide methods for package, class, protocol and method manipulation and access, forwarding to my environment.

I also handle compilation of classes and methods as well as compilation and parsing errors.!

!HLToolModel methodsFor: 'accessing'!

allSelectors
	^ self environment allSelectors
!

availableClassNames
	^ self environment availableClassNames
!

availablePackageNames
	^ self environment availablePackageNames
!

availablePackages
	^ self environment availablePackageNames
!

availableProtocols
	^ self environment availableProtocolsFor: self selectedClass
!

packages
	^ self environment packages
!

selectedClass
	^ selectedClass
!

selectedClass: aClass
	(self selectedClass = aClass and: [ aClass isNil ]) 
		ifTrue: [ ^ self ].
	
	self withChangesDo: [
		selectedClass = aClass ifTrue: [ 
			self selectedProtocol: nil ].
    
		aClass 
   			ifNil: [ selectedClass := nil ]
    		ifNotNil: [
				self selectedPackage: aClass theNonMetaClass package.
				self showInstance 
   					ifTrue: [ selectedClass := aClass theNonMetaClass ]
     				ifFalse: [ selectedClass := aClass theMetaClass ] ].
		self selectedProtocol: nil.
		self announcer announce: (HLClassSelected on: self selectedClass) ]
!

selectedMethod
	^ self selectedClass ifNotNil: [ 
		self selectedClass methodDictionary 
			at: selectedSelector 
			ifAbsent: [ nil ] ]
!

selectedMethod: aCompiledMethod
	selectedSelector = aCompiledMethod ifTrue: [ ^ self ].
    
    self withChangesDo: [
		aCompiledMethod
    		ifNil: [ selectedSelector := nil ]
      		ifNotNil: [
				selectedClass := aCompiledMethod methodClass.
				selectedPackage := selectedClass theNonMetaClass package.
				selectedSelector := aCompiledMethod selector ].

		self announcer announce: (HLMethodSelected on: aCompiledMethod) ]
!

selectedPackage
	^ selectedPackage
!

selectedPackage: aPackage
	selectedPackage = aPackage ifTrue: [ ^ self ].
    
	self withChangesDo: [
		selectedPackage := aPackage.
		self selectedClass: nil.
		self announcer announce: (HLPackageSelected on: aPackage) ]
!

selectedProtocol
	^ selectedProtocol
!

selectedProtocol: aString
	selectedProtocol = aString ifTrue: [ ^ self ].

	self withChangesDo: [
		selectedProtocol := aString.
		self selectedMethod: nil.
		self announcer announce: (HLProtocolSelected on: aString) ]
! !

!HLToolModel methodsFor: 'actions'!

addInstVarNamed: aString
	self environment addInstVarNamed: aString to: self selectedClass.
	self announcer announce: (HLInstVarAdded new
		theClass: self selectedClass;
		variableName: aString;
		yourself)
!

save: aString
	self announcer announce: HLSourceCodeSaved new.
	
	(self shouldCompileClassDefinition: aString)
		ifTrue: [ self compileClassDefinition: aString ]
		ifFalse: [ self compileMethod: aString ]
!

saveSourceCode
	self announcer announce: HLSaveSourceCode new
! !

!HLToolModel methodsFor: 'commands actions'!

commitPackage
	self environment commitPackage: self selectedPackage
!

copyClassTo: aClassName
	self withChangesDo: [ 
		self environment 
			copyClass: self selectedClass theNonMetaClass
			to: aClassName ]
!

moveClassToPackage: aPackageName
	self withChangesDo: [
		self environment 
			moveClass: self selectedClass theNonMetaClass
			toPackage: aPackageName ]
!

moveMethodToClass: aClassName
	self withChangesDo: [
		self environment 
			moveMethod: self selectedMethod 
			toClass: aClassName ]
!

moveMethodToProtocol: aProtocol
	self withChangesDo: [
		self environment 
			moveMethod: self selectedMethod 
			toProtocol: aProtocol ]
!

openClassNamed: aString
	| class |
	
	self withChangesDo: [
		class := self environment classNamed: aString.
		self selectedPackage: class package.
		self selectedClass: class ]
!

removeClass
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove class ', self selectedClass name
			ifTrue: [ self environment removeClass: self selectedClass ] ]
!

removeMethod
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector
			ifTrue: [ self environment removeMethod: self selectedMethod ] ]
!

removeProtocol
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove protocol ', self selectedProtocol
			ifTrue: [ self environment 
				removeProtocol: self selectedProtocol 
				from: self selectedClass ] ]
!

renameClassTo: aClassName
	self withChangesDo: [
		self environment 
			renameClass: self selectedClass theNonMetaClass
			to: aClassName ]
!

renameProtocolTo: aString
	self withChangesDo: [
		self environment 
			renameProtocol: self selectedProtocol
			to: aString
			in: self selectedClass ]
! !

!HLToolModel methodsFor: 'compiling'!

compileClassComment: aString
	self environment 
		compileClassComment: aString 
		for: self selectedClass
!

compileClassDefinition: aString
	self environment compileClassDefinition: aString
!

compileMethod: aString
	| method |
	
	self withCompileErrorHandling: [ 
		method := self environment 
			compileMethod: aString 
			for: self selectedClass
			protocol: self compilationProtocol.

		self selectedMethod: method ]
! !

!HLToolModel methodsFor: 'defaults'!

allProtocol
	^ '-- all --'
!

unclassifiedProtocol
	^ 'as yet unclassified'
! !

!HLToolModel methodsFor: 'error handling'!

handleCompileError: anError
	self announcer announce: (HLCompileErrorRaised new
		error: anError;
		yourself)
!

handleParseError: anError
	| split line column messageToInsert |
	
	split := anError messageText tokenize: ' : '.
	messageToInsert := split second.

	"21 = 'Parse error on line ' size + 1"
	split := split first copyFrom: 21 to: split first size.
	
	split := split tokenize: ' column '.
	line := split first.
	column := split second.
	
	self announcer announce: (HLParseErrorRaised new
		line: line asNumber;
		column: column asNumber;
		message: messageToInsert;
		error: anError;
		yourself)
!

handleUnkownVariableError: anError
	self announcer announce: (HLUnknownVariableErrorRaised new
		error: anError;
		yourself)
!

withCompileErrorHandling: aBlock
	self environment
		evaluate: [
			self environment 
			evaluate: [
				self environment 
					evaluate: aBlock
					on: ParseError
					do: [ :ex | self handleParseError: ex ] ]
			on: UnknownVariableError
			do: [ :ex | self handleUnkownVariableError: ex ] ]
		on: CompilerError
		do: [ :ex | self handleCompileError: ex ]
! !

!HLToolModel methodsFor: 'private'!

compilationProtocol
	| currentProtocol |
	
	currentProtocol := self selectedProtocol.
	currentProtocol ifNil: [ currentProtocol := self unclassifiedProtocol ].
	self selectedMethod ifNotNil: [ currentProtocol := self selectedMethod protocol ].

	^ currentProtocol = self allProtocol
		ifTrue: [ self unclassifiedProtocol ]
		ifFalse: [ currentProtocol ]
!

withHelperLabelled: aString do: aBlock
	"TODO: doesn't belong here"

	'#helper' asJQuery remove.

	[ :html |
		html div 
			id: 'helper';
			with: aString ] appendToJQuery: 'body' asJQuery.
	
	[
		aBlock value.
		'#helper' asJQuery remove
	] 
		valueWithTimeout: 10
! !

!HLToolModel methodsFor: 'testing'!

isToolModel
	^ true
!

shouldCompileClassDefinition: aString
	^ self selectedClass isNil or: [
		aString match: '^\s*[A-Z]' ]
! !

!HLToolModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

Object subclass: #HLProgressHandler
	instanceVariableNames: ''
	package: 'Helios-Core'!
!HLProgressHandler commentStamp!
I am a specific progress handler for Helios, displaying progresses in a modal window.!

!HLProgressHandler methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	HLProgressWidget default
		do: aBlock 
		on: aCollection 
		displaying: aString
! !

Widget subclass: #HLTabWidget
	instanceVariableNames: 'widget label root'
	package: 'Helios-Core'!
!HLTabWidget commentStamp!
I am a widget specialized into building another widget as an Helios tab.

I should not be used directly, `HLWidget class >> #openAsTab` should be used instead.

## Example

    HLWorkspace openAsTab!

!HLTabWidget methodsFor: 'accessing'!

activate
	self manager activate: self
!

add
	self manager addTab: self
!

cssClass
	^ self widget tabClass
!

displayLabel
	^ self label size > 20 
		ifTrue: [ (self label first: 20), '...' ]
		ifFalse: [ self label ]
!

focus
	self widget canHaveFocus ifTrue: [
		self widget focus ]
!

label
	^ label ifNil: [ '' ]
!

label: aString
	label := aString
!

manager
	^ HLManager current
!

widget
	^ widget
!

widget: aWidget
	widget := aWidget
! !

!HLTabWidget methodsFor: 'actions'!

hide
	root ifNotNil: [ root asJQuery css: 'visibility' put: 'hidden' ]
!

registerBindings
	self widget registerBindings
!

remove
	self widget unregister.
	root ifNotNil: [ root asJQuery remove ]
!

show
	root
		ifNil: [ self appendToJQuery: 'body' asJQuery ]
		ifNotNil: [ root asJQuery css: 'visibility' put: 'visible' ]
! !

!HLTabWidget methodsFor: 'rendering'!

renderOn: html
	root := html div
		class: 'tab';
		yourself.
	self renderTab
!

renderTab
	root contents: [ :html |
		html div
			class: 'amber_box';
			with: [ self widget renderOn: html ] ]
! !

!HLTabWidget methodsFor: 'testing'!

isActive
	^ self manager activeTab = self
! !

!HLTabWidget class methodsFor: 'instance creation'!

on: aWidget labelled: aString
	^ self new
		widget: aWidget;
		label: aString;
		yourself
! !

Widget subclass: #HLWidget
	instanceVariableNames: 'wrapper'
	package: 'Helios-Core'!
!HLWidget commentStamp!
I am the abstract superclass of all Helios widgets.

I provide common methods, additional behavior to widgets useful for Helios, like dialog creation, command execution and tab creation.

## API

1. Rendering

    Instead of overriding `#renderOn:` as with other Widget subclasses, my subclasses should override `#renderContentOn:`.

2. Refreshing

    To re-render a widget, use `#refresh`.

3. Key bindings registration and tabs

    When displayed as a tab, the widget has a chance to register keybindings with the `#registerBindingsOn:` hook method.
    
4. Unregistration

    When a widget has subscribed to announcements or other actions that need to be cleared when closing the tab, the hook method `#unregister` will be called by helios.

5. Tabs

   To enable a widget class to be open as a tab, override the class-side `#canBeOpenAsTab` method to answer `true`. `#tabClass` and `#tabPriority` can be overridden too to respectively change the css class of the tab and the order of tabs in the main menu.

6. Command execution

    An helios command (instance of `HLCommand` or one of its subclass) can be executed with `#execute:`.!

!HLWidget methodsFor: 'accessing'!

manager
	^ HLManager current
!

tabClass
	^ self class tabClass
!

wrapper
	^ wrapper
! !

!HLWidget methodsFor: 'actions'!

confirm: aString ifTrue: aBlock
	self manager confirm: aString ifTrue: aBlock
!

execute: aCommand
	HLManager current keyBinder
		activate;
		applyBinding: aCommand asBinding
!

openAsTab
	HLManager current addTab: (HLTabWidget on: self labelled: self class tabLabel)
!

request: aString do: aBlock
	self manager request: aString do: aBlock
!

request: aString value: valueString do: aBlock
	self manager 
		request: aString 
		value: valueString
		do: aBlock
!

unregister
	"This method is called whenever the receiver is closed (as a tab).
	Widgets subscribing to announcements should unregister there"
! !

!HLWidget methodsFor: 'keybindings'!

bindKeyDown: keyDownBlock keyUp: keyUpBlock
	self wrapper asJQuery
		keydown: keyDownBlock;
		keyup: keyUpBlock
!

registerBindings
	self registerBindingsOn: self manager keyBinder bindings
!

registerBindingsOn: aBindingGroup
!

unbindKeyDownKeyUp
	self wrapper asJQuery
		unbind: 'keydown';
		unbind: 'keyup'
! !

!HLWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderOn: html
	wrapper := html div.
    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery
! !

!HLWidget methodsFor: 'testing'!

canHaveFocus
	^ false
! !

!HLWidget methodsFor: 'updating'!

refresh
	self wrapper ifNil: [ ^ self ].
    
	self wrapper asJQuery empty.
    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery
! !

!HLWidget class methodsFor: 'accessing'!

openAsTab
	| instance |
	
	instance := self new.
	HLManager current addTab: (HLTabWidget 
		on: instance 
		labelled: self tabLabel).
	^ instance
!

tabClass
	^ ''
!

tabLabel
	^ 'Tab'
!

tabPriority
	^ 500
! !

!HLWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLWidget subclass: #HLFocusableWidget
	instanceVariableNames: ''
	package: 'Helios-Core'!
!HLFocusableWidget commentStamp!
I am a widget that can be focused.

## API 

Instead of overriding `#renderOn:` as with other `Widget` subclasses, my subclasses should override `#renderContentOn:`.

To bring the focus to the widget, use the `#focus` method.!

!HLFocusableWidget methodsFor: 'accessing'!

focusClass
	^ 'focused'
! !

!HLFocusableWidget methodsFor: 'events'!

blur
	self wrapper asJQuery blur
!

focus
	self wrapper asJQuery focus
! !

!HLFocusableWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderOn: html
    wrapper := html div 
    	class: 'hl_widget';
		yourself.
		
       wrapper with: [ self renderContentOn: html ].
	
	wrapper
		at: 'tabindex' put: '0';
		onBlur: [ self wrapper asJQuery removeClass: self focusClass ];
        onFocus: [ self wrapper asJQuery addClass: self focusClass ]
! !

!HLFocusableWidget methodsFor: 'testing'!

canHaveFocus
	^ true
!

hasFocus
	^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]
! !

HLFocusableWidget subclass: #HLListWidget
	instanceVariableNames: 'items selectedItem'
	package: 'Helios-Core'!

!HLListWidget methodsFor: 'accessing'!

cssClassForItem: anObject
	^ ''
!

findListItemFor: anObject
	^ (((wrapper asJQuery find: 'li') 
		filter: [ :thisArg :otherArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)
!

items
	^ items ifNil: [ items := self defaultItems ]
!

items: aCollection
	items := aCollection
!

listCssClassForItem: anObject
	^ self selectedItem = anObject
		ifTrue: [ 'active' ]
		ifFalse: [ 'inactive' ]
!

positionOf: aListItem
	<
    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	>
!

selectedItem
	^ selectedItem
!

selectedItem: anObject
	selectedItem := anObject
! !

!HLListWidget methodsFor: 'actions'!

activateFirstListItem
	self activateListItem: ((wrapper asJQuery find: 'li.inactive') eq: 0)
!

activateItem: anObject
	self activateListItem: (self findListItemFor: anObject)
!

activateListItem: aListItem
	| item |
	
	(aListItem get: 0) ifNil: [ ^ self ].
	aListItem parent children removeClass: 'active'.
	aListItem addClass: 'active'.
    
	self ensureVisible: aListItem.
    
   "Activate the corresponding item"
   item := aListItem data: 'item'.
   self selectedItem == item ifFalse: [
	   self selectItem: item ]
!

activateNextListItem
	self activateListItem: (self wrapper asJQuery find: 'li.active') next.
	
	"select the first item if none is selected"
	(self wrapper asJQuery find: ' .active') get ifEmpty: [
		self activateFirstListItem ]
!

activatePreviousListItem
	self activateListItem: (self wrapper asJQuery find: 'li.active') prev
!

ensureVisible: aListItem	
	"Move the scrollbar to show the active element"
	
	| parent position |
	(aListItem get: 0) ifNil: [ ^ self ].
	position := self positionOf: aListItem.
	parent := aListItem parent.
	
    aListItem position top < 0 ifTrue: [
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].
    aListItem position top + aListItem height > parent height ifTrue: [ 
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]
!

focus
	super focus.
    self items isEmpty ifFalse: [ 
		self selectedItem ifNil: [ self activateFirstListItem ] ]
!

refresh
	super refresh.
	self selectedItem ifNotNil: [self ensureVisible: (self findListItemFor: self selectedItem)].
!

selectItem: anObject
	self selectedItem: anObject
! !

!HLListWidget methodsFor: 'defaults'!

defaultItems
	^ #()
! !

!HLListWidget methodsFor: 'events'!

setupKeyBindings 
	(HLRepeatedKeyDownHandler on: self)
		whileKeyDown: 38 do: [ self activatePreviousListItem ];
		whileKeyDown: 40 do: [ self activateNextListItem ];
		rebindKeys
! !

!HLListWidget methodsFor: 'rendering'!

renderButtonsOn: html
!

renderContentOn: html
	html ul 
    	class: 'nav nav-pills nav-stacked';
        with: [ self renderListOn: html ].
    html div class: 'pane_actions form-actions'; with: [
      	self renderButtonsOn: html ].
        
   self setupKeyBindings
!

renderItem: anObject on: html
	| li |
    
	li := html li.
	li asJQuery data: 'item' put: anObject.
    li
		class: (self listCssClassForItem: anObject);
        with: [ 
        	html a
            	with: [ 
            		(html tag: 'i') class: (self cssClassForItem: anObject).
  					self renderItemLabel: anObject on: html ];
				onClick: [
                  	self activateListItem: li asJQuery ] ]
!

renderItemLabel: anObject on: html
	html with: anObject asString
!

renderListOn: html
	self items do: [ :each  | 
    	self renderItem: each  on: html ]
! !

HLListWidget subclass: #HLNavigationListWidget
	instanceVariableNames: 'previous next'
	package: 'Helios-Core'!

!HLNavigationListWidget methodsFor: 'accessing'!

next
	^ next
!

next: aWidget
	next := aWidget.
    aWidget previous = self ifFalse: [ aWidget previous: self ]
!

previous
	^ previous
!

previous: aWidget
	previous := aWidget.
    aWidget next = self ifFalse: [ aWidget next: self ]
! !

!HLNavigationListWidget methodsFor: 'actions'!

nextFocus
	self next ifNotNil: [ self next focus ]
!

previousFocus
	self previous ifNotNil: [ self previous focus ]
! !

!HLNavigationListWidget methodsFor: 'events'!

setupKeyBindings
	super setupKeyBindings.

	self wrapper asJQuery keydown: [ :e |
        e which = 39 ifTrue: [ 
        	self nextFocus ].
		e which = 37 ifTrue: [ 
        	self previousFocus ] ]
! !

HLNavigationListWidget subclass: #HLToolListWidget
	instanceVariableNames: 'model'
	package: 'Helios-Core'!

!HLToolListWidget methodsFor: 'accessing'!

commandCategory
	^ self label
!

label
	^ 'List'
!

menuCommands
	"Answer a collection of commands to be put in the cog menu"
	
	^ ((HLToolCommand concreteClasses
		select: [ :each | each isValidFor: self model ])
			collect: [ :each | each for: self model ])
			select: [ :each | 
				each category = self commandCategory and: [ 
					each isAction and: [ each isActive ] ] ]
!

model
	^ model
!

model: aBrowserModel
	model := aBrowserModel.
    
    self 
		observeSystem;
		observeModel
!

selectedItem: anItem
	"Selection changed, update the cog menu"
	
	super selectedItem: anItem.
	self updateMenu
! !

!HLToolListWidget methodsFor: 'actions'!

activateListItem: anItem
	self model withChangesDo: [ super activateListItem: anItem ]
!

activateNextListItem
	self model withChangesDo: [ super activateNextListItem ]
!

activatePreviousListItem
	self model withChangesDo: [ super activatePreviousListItem ]
!

observeModel
!

observeSystem
!

unregister
	super unregister.
	
	self model announcer unsubscribe: self.
	self model systemAnnouncer unsubscribe: self
! !

!HLToolListWidget methodsFor: 'rendering'!

renderContentOn: html
	self renderHeadOn: html.	
	super renderContentOn: html
!

renderHeadOn: html
	html div 
		class: 'list-label';
		with: [
			html with: self label.
			self renderMenuOn: html ]
!

renderMenuOn: html
	| commands |
	
	commands := self menuCommands.
	commands isEmpty ifTrue: [ ^ self ].
	
	html div 
		class: 'btn-group cog';
		with: [
			html a
				class: 'btn dropdown-toggle';
				at: 'data-toggle' put: 'dropdown';
				with: [ (html tag: 'i') class: 'icon-cog' ].
		html ul 
			class: 'dropdown-menu pull-right';
			with: [ 
				self menuCommands do: [ :each | 
					html li with: [ html a 
						with: each menuLabel;
						onClick: [ self execute: each ] ] ] ] ]
! !

!HLToolListWidget methodsFor: 'updating'!

updateMenu
	(self wrapper asJQuery find: '.cog') remove.
	
	[ :html | self renderMenuOn: html ] 
		appendToJQuery: (self wrapper asJQuery find: '.list-label')
! !

!HLToolListWidget class methodsFor: 'instance creation'!

on: aModel
	^ self new 
    	model: aModel;
        yourself
! !

HLListWidget subclass: #HLTabListWidget
	instanceVariableNames: 'callback'
	package: 'Helios-Core'!
!HLTabListWidget commentStamp!
I am a widget used to display a list of helios tabs.

When a tab is selected, `callback` is evaluated with the selected tab as argument.!

!HLTabListWidget methodsFor: 'accessing'!

callback
	^ callback ifNil: [ [] ]
!

callback: aBlock
	callback := aBlock
! !

!HLTabListWidget methodsFor: 'actions'!

selectItem: aTab
	super selectItem: aTab.
	self callback value: aTab
! !

!HLTabListWidget methodsFor: 'rendering'!

renderItemLabel: aTab on: html
	html span
		class: aTab cssClass;
		with: aTab label
! !

HLWidget subclass: #HLManager
	instanceVariableNames: 'tabs activeTab environment history'
	package: 'Helios-Core'!

!HLManager methodsFor: 'accessing'!

activeTab
	^ activeTab
!

environment
	"The default environment used by all Helios objects"
    
	^ environment ifNil: [ environment := self defaultEnvironment ]
!

environment: anEnvironment
	environment := anEnvironment
!

history
	^ history ifNil: [ history := OrderedCollection new ]
!

history: aCollection
	history := aCollection
!

keyBinder
	^ HLKeyBinder current
!

tabs
	^ tabs ifNil: [ tabs := OrderedCollection new ]
! !

!HLManager methodsFor: 'actions'!

activate: aTab
	self keyBinder flushBindings.
	aTab registerBindings.
	activeTab := aTab.
	
	self 
		refresh;
		addToHistory: aTab;
		show: aTab
!

addTab: aTab
	self tabs add: aTab.
    self activate: aTab
!

addToHistory: aTab
	self removeFromHistory: aTab.
	self history add: aTab
!

confirm: aString ifFalse: aBlock
	HLConfirmationWidget new
		confirmationString: aString;
		cancelBlock: aBlock;
		show
!

confirm: aString ifTrue: aBlock
	HLConfirmationWidget new
		confirmationString: aString;
		actionBlock: aBlock;
		show
!

removeActiveTab
	self removeTab: self activeTab
!

removeFromHistory: aTab
	self history: (self history reject: [ :each | each == aTab ])
!

removeTab: aTab
	(self tabs includes: aTab) ifFalse: [ ^ self ].

	self removeFromHistory: aTab.
	self tabs remove: aTab.
	self keyBinder flushBindings.
	aTab remove.
	self refresh.
	self history ifNotEmpty: [
		self history last activate ]
!

request: aString do: aBlock
	self 
		request: aString
		value: ''
		do: aBlock
!

request: aString value: valueString do: aBlock
	HLRequestWidget new
		confirmationString: aString;
		actionBlock: aBlock;
		value: valueString;
		show
! !

!HLManager methodsFor: 'defaults'!

defaultEnvironment
	"If helios is loaded from within a frame, answer the parent window environment"
	
	| parent parentSmalltalkGlobals |
	
	parent := window opener ifNil: [ window parent ].
	parent ifNil: [ ^ Environment new ].
	
	parentSmalltalkGlobals := (parent at: 'requirejs') value: 'amber_vm/globals'.
	parentSmalltalkGlobals ifNil: [ ^ Environment new ].
	
	^ (parentSmalltalkGlobals at: 'Environment') new
! !

!HLManager methodsFor: 'initialization'!

setup
	self registerServices.
    self keyBinder 
		setupEvents;
		setupHelper
! !

!HLManager methodsFor: 'private'!

registerServices
	self
		registerInspector;
		registerErrorHandler;
		registerProgressHandler;
		registerTranscript
! !

!HLManager methodsFor: 'rendering'!

refresh
	'.navbar' asJQuery remove.
	self appendToJQuery: 'body' asJQuery
!

renderAddOn: html
    html li 
    	class: 'dropdown';
        with: [ 
			html a 
        		class: 'dropdown-toggle';
           	 	at: 'data-toggle' put: 'dropdown';
            	with: [ 
            		html with: 'Open...'.
  					(html tag: 'b') class: 'caret' ].
           html ul 
           		class: 'dropdown-menu';
                with: [
                  	((HLWidget withAllSubclasses
                    	select: [ :each | each canBeOpenAsTab ])
                        sorted: [ :a :b | a tabPriority < b tabPriority ])
                        do: [ :each |
  							html li with: [
                      			html a 
                                	with: each tabLabel;
      								onClick: [ each openAsTab ] ] ] ] ]
!

renderContentOn: html
	html div 
		class: 'navbar navbar-fixed-top';
		with: [ html div 
			class: 'navbar-inner';
			with: [ self renderTabsOn: html ] ]
!

renderTabsOn: html
	html ul 
		class: 'nav';
		with: [ 
        	self tabs do: [ :each |
				html li 
					class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);
					with: [
						html a
							with: [
      							((html tag: 'i') class: 'close')
  									onClick: [ self removeTab: each ].
                              	html span 
									class: each cssClass;
									with: each displayLabel ];
							onClick: [ each activate ] ] ].
			self renderAddOn: html ]
!

show: aTab
	self tabs do: [ :each | each hide ].
	aTab show; focus
! !

!HLManager methodsFor: 'services'!

registerErrorHandler
	self environment registerErrorHandler: HLErrorHandler new.
	ErrorHandler register: HLErrorHandler new
!

registerInspector
	self environment registerInspector: HLInspector.
	Inspector register: HLInspector
!

registerProgressHandler
	self environment registerProgressHandler: HLProgressHandler new.
	ProgressHandler register: HLProgressHandler new
!

registerTranscript
	self environment registerTranscript: HLTranscriptHandler
! !

HLManager class instanceVariableNames: 'current'!

!HLManager class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self basicNew initialize ]
! !

!HLManager class methodsFor: 'initialization'!

setup
	self current 
		setup;
		appendToJQuery: 'body' asJQuery
! !

!HLManager class methodsFor: 'instance creation'!

new
	"Use current instead"

	self shouldNotImplement
! !

HLWidget subclass: #HLModalWidget
	instanceVariableNames: ''
	package: 'Helios-Core'!
!HLModalWidget commentStamp!
I implement an abstract modal widget.!

!HLModalWidget methodsFor: 'accessing'!

cssClass
	^ ''
! !

!HLModalWidget methodsFor: 'actions'!

cancel
	self remove
!

confirm
	"Override in subclasses"
	self remove
!

remove
	'.dialog' asJQuery removeClass: 'active'.
	[ 
		'#overlay' asJQuery remove.
		'.dialog' asJQuery remove
	] valueWithTimeout: 300
!

show
	self appendToJQuery: 'body' asJQuery
! !

!HLModalWidget methodsFor: 'private'!

giveFocusToButton: aButton
	aButton asJQuery focus
! !

!HLModalWidget methodsFor: 'rendering'!

hasButtons
	^ true
!

renderButtonsOn: html
	| confirmButton |
	
	html div 
		class: 'buttons';
		with: [
			html button
				class: 'button';
				with: 'Cancel';
				onClick: [ self cancel ].
			confirmButton := html button
				class: 'button default';
				with: 'Confirm';
				onClick: [ self confirm ] ].

	self giveFocusToButton:confirmButton
!

renderContentOn: html
	| confirmButton |
	
	html div id: 'overlay'.
	html div 
		class: 'dialog ', self cssClass;
		with: [
			self renderMainOn: html.
			self hasButtons ifTrue: [ 
				self renderButtonsOn: html ] ].

	'.dialog' asJQuery addClass: 'active'.
	self setupKeyBindings
!

renderMainOn: html
!

setupKeyBindings
	'.dialog' asJQuery keyup: [ :e |
		e keyCode = String esc asciiValue ifTrue: [ self cancel ] ]
! !

HLModalWidget subclass: #HLConfirmationWidget
	instanceVariableNames: 'confirmationString actionBlock cancelBlock'
	package: 'Helios-Core'!
!HLConfirmationWidget commentStamp!
I display confirmation messages. 

Instead of creating an instance directly, use `HLWidget >> #confirm:ifTrue:`.!

!HLConfirmationWidget methodsFor: 'accessing'!

actionBlock
	^ actionBlock ifNil: [ [] ]
!

actionBlock: aBlock
	actionBlock := aBlock
!

cancelBlock
	^ cancelBlock ifNil: [ [] ]
!

cancelBlock: aBlock
	cancelBlock := aBlock
!

confirmationString
	^ confirmationString ifNil: [ 'Confirm' ]
!

confirmationString: aString
	confirmationString := aString
! !

!HLConfirmationWidget methodsFor: 'actions'!

cancel
	self cancelBlock value.
	super cancel
!

confirm
	super confirm.
	self actionBlock value
! !

!HLConfirmationWidget methodsFor: 'rendering'!

renderMainOn: html
	html span with: self confirmationString
! !

HLConfirmationWidget subclass: #HLRequestWidget
	instanceVariableNames: 'input value'
	package: 'Helios-Core'!
!HLRequestWidget commentStamp!
I display a modal window requesting user input.

Instead of creating instances manually, use `HLWidget >> #request:do:` and `#request:value:do:`.!

!HLRequestWidget methodsFor: 'accessing'!

cssClass
	^ 'large'
!

value
	^ value ifNil: [ '' ]
!

value: aString
	value := aString
! !

!HLRequestWidget methodsFor: 'actions'!

confirm
	super confirm.
	self actionBlock value: input asJQuery val
! !

!HLRequestWidget methodsFor: 'private'!

giveFocusToButton: aButton
! !

!HLRequestWidget methodsFor: 'rendering'!

renderMainOn: html
	super renderMainOn: html.
	input := html textarea.
	input asJQuery 
		val: self value;
		focus
! !

HLModalWidget subclass: #HLProgressWidget
	instanceVariableNames: 'progressBars visible'
	package: 'Helios-Core'!
!HLProgressWidget commentStamp!
I am a widget used to display progress modal dialogs.

My default instance is accessed with `HLProgressWidget class >> #default`.

See `HLProgressHandler` for usage.!

!HLProgressWidget methodsFor: 'accessing'!

progressBars
	^ progressBars ifNil: [ progressBars := OrderedCollection new ]
! !

!HLProgressWidget methodsFor: 'actions'!

addProgressBar: aProgressBar
	self show.
	self progressBars add: aProgressBar.
	aProgressBar appendToJQuery: (self wrapper asJQuery find: '.dialog')
!

do: aBlock on: aCollection displaying: aString
	| progressBar |
	
	progressBar := HLProgressBarWidget new
		parent: self;
		label: aString;
		workBlock: aBlock;
		collection: aCollection;
		yourself.
	
	self addProgressBar: progressBar.
	progressBar start
!

flush
	self progressBars do: [ :each |
		self removeProgressBar: each ]
!

remove
	self isVisible ifTrue: [
		visible := false.
		super remove ]
!

removeProgressBar: aProgressBar
	self progressBars remove: aProgressBar ifAbsent: [].
	aProgressBar wrapper asJQuery remove.
	
	self progressBars ifEmpty: [ self remove ]
!

show
	self isVisible ifFalse: [
		visible := true.
		super show ]
! !

!HLProgressWidget methodsFor: 'rendering'!

renderMainOn: html
	self progressBars do: [ :each |
		html with: each ]
! !

!HLProgressWidget methodsFor: 'testing'!

hasButtons
	^ false
!

isVisible
	^ visible ifNil: [ false ]
! !

HLProgressWidget class instanceVariableNames: 'default'!

!HLProgressWidget class methodsFor: 'accessing'!

default
	^ default ifNil: [ default := self new ]
! !

HLModalWidget subclass: #HLTabSelectionWidget
	instanceVariableNames: 'tabs tabList selectedTab selectCallback cancelCallback confirmCallback'
	package: 'Helios-Core'!
!HLTabSelectionWidget commentStamp!
I am a modal window used to select or create tabs.!

!HLTabSelectionWidget methodsFor: 'accessing'!

cancelCallback
	^ cancelCallback ifNil: [ [] ]
!

cancelCallback: aBlock
	cancelCallback := aBlock
!

confirmCallback
	^ confirmCallback ifNil: [ [] ]
!

confirmCallback: aBlock
	confirmCallback := aBlock
!

selectCallback
	^ selectCallback ifNil: [ [] ]
!

selectCallback: aBlock
	selectCallback := aBlock
!

selectedTab
	^ selectedTab
!

selectedTab: aTab
	selectedTab := aTab
!

tabs
	^ tabs ifNil: [ #() ]
!

tabs: aCollection
	tabs := aCollection
! !

!HLTabSelectionWidget methodsFor: 'actions'!

cancel
	super cancel.
	self cancelCallback value
!

confirm
	super confirm.
	self confirmCallback value: self selectedTab
!

selectTab: aTab
	self selectedTab: aTab.
	self selectCallback value: aTab
!

setupKeyBindings
	super setupKeyBindings.
	'.dialog' asJQuery keyup: [ :e |
		e keyCode = String cr asciiValue ifTrue: [ self confirm ] ]
! !

!HLTabSelectionWidget methodsFor: 'rendering'!

renderContentOn: html
	super renderContentOn: html.
	self tabList focus
!

renderMainOn: html
	html div 
		class: 'title'; 
		with: 'Tab selection'.
	
	html with: self tabList
!

renderTab: aTab on: html
	html 
		span 
			class: aTab cssClass;
			with: aTab label
!

renderTabsOn: html
	self tabs do: [ :each |
		html li with: [ 
			html a 
				with: [ 
					self renderTab: each on: html ];
				onClick: [ self selectTab: each ] ] ]
!

tabList
	tabList ifNil: [ 
		tabList := HLTabListWidget new.
		tabList
			callback: [ :tab | self selectTab: tab. tabList focus ];
			selectedItem: self selectedTab;
			items: self tabs ].
	
	^ tabList
! !

HLWidget subclass: #HLProgressBarWidget
	instanceVariableNames: 'label parent workBlock collection bar'
	package: 'Helios-Core'!
!HLProgressBarWidget commentStamp!
I am a widget used to display a progress bar while iterating over a collection.!

!HLProgressBarWidget methodsFor: 'accessing'!

collection
	^ collection
!

collection: aCollection
	collection := aCollection
!

label
	^ label
!

label: aString
	label := aString
!

parent
	^ parent
!

parent: aProgress
	parent := aProgress
!

workBlock
	^ workBlock
!

workBlock: aBlock
	workBlock := aBlock
! !

!HLProgressBarWidget methodsFor: 'actions'!

evaluateAt: anInteger
	self updateProgress: (anInteger / self collection size) * 100.
	anInteger <= self collection size
		ifTrue: [ 
			[ 
				self workBlock value: (self collection at: anInteger).
				self evaluateAt: anInteger + 1 ] valueWithTimeout: 10 ]
		ifFalse: [ [ self remove ] valueWithTimeout: 500 ]
!

remove
	self parent removeProgressBar: self
!

start
	"Make sure the UI has some time to update itself between each iteration"
	
	self evaluateAt: 1
!

updateProgress: anInteger
	bar asJQuery css: 'width' put: anInteger asString, '%'
! !

!HLProgressBarWidget methodsFor: 'rendering'!

renderContentOn: html
	html span with: self label.
	html div 
		class: 'progress';
		with: [
			bar := html div 
				class: 'bar';
				style: 'width: 0%' ]
! !

HLProgressBarWidget class instanceVariableNames: 'default'!

!HLProgressBarWidget class methodsFor: 'accessing'!

default
	^ default ifNil: [ default := self new ]
! !

HLWidget subclass: #HLSUnit
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLSUnit class methodsFor: 'accessing'!

tabClass
	^ 'sunit'
!

tabLabel
	^ 'SUnit'
!

tabPriority
	^ 1000
! !

!HLSUnit class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

