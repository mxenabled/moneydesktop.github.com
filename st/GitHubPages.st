Smalltalk current createPackage: 'GitHubPages' properties: #{}!
Widget subclass: #RepoPageWidget
	instanceVariableNames: 'orgName repos'
	package: 'GitHubPages'!

!RepoPageWidget methodsFor: 'accessing'!

addRepo: aRepo
	self repos add: aRepo
!

orgName
	^ orgName ifNil: [ orgName := 'unknown' ]
!

orgName: aString
	orgName := aString
!

repos
	repos ifNil: [ self initializeRepos ].
    ^repos.
! !

!RepoPageWidget methodsFor: 'fetching'!

fetchAndRenderRepos
	self initializeRepos.
	jQuery
		getJSON: 'https://api.github.com/orgs/', self orgName, '/repos?callback=?'
		callback: [ :response |
        	response data do: [ :repo | self addRepo: repo ].
			self appendToJQuery: '#app' asJQuery ]
!

fetchRepos
	self initializeRepos.
	jQuery
		getJSON: 'https://api.github.com/orgs/', self orgName, '/repos?callback=?'
		callback: [ :response | response data do: [ :repo | self addRepo: repo ] ]
! !

!RepoPageWidget methodsFor: 'initialization'!

initializeRepos
	repos := Array new
! !

!RepoPageWidget methodsFor: 'rendering'!

renderContentOn: html
	html div class: 'span9'; with: [
		html ul class: 'thumbnails'; with: [ self renderReposOn: html ]]
!

renderOn: html
	html div class: 'container-fluid'; with: [
		html div class: 'row-fluid'; with: [
			self renderSidebarOn: html.
            self renderContentOn: html ]]
!

renderReposOn: html
	self repos do: [ :repo |
		html li class: 'span3'; with: [
			html div class: 'thumbnail'; with: [
				html div class: 'caption'; with: [
					html h3: repo name.
					html p class: 'small muted'; with: repo language.
					html p: repo description. ]]]]
!

renderSidebarOn: html
	html div class: 'span3 well'; with: [ html h3: 'Sidebar' ]
! !

!RepoPageWidget class methodsFor: 'instance creation'!

newForOrg: aString
	^self new
    	orgName: aString;
        yourself
!

renderOrg: aString
	(self newForOrg: aString)
    	fetchAndRenderRepos
! !

