smalltalk.addPackage('GitHubPages', {});
smalltalk.addClass('RepoPageWidget', smalltalk.Widget, ['orgName', 'repos'], 'GitHubPages');
smalltalk.addMethod(
"_addRepo_",
smalltalk.method({
selector: "addRepo:",
category: 'accessing',
fn: function (aRepo){
var self=this;
smalltalk.send(smalltalk.send(self,"_repos",[]),"_add_",[aRepo]);
return self},
args: ["aRepo"],
source: "addRepo: aRepo\x0a\x09self repos add: aRepo",
messageSends: ["add:", "repos"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_fetchAndRenderRepos",
smalltalk.method({
selector: "fetchAndRenderRepos",
category: 'fetching',
fn: function (){
var self=this;
smalltalk.send(self,"_initializeRepos",[]);
smalltalk.send(jQuery,"_getJSON_callback_",[smalltalk.send(smalltalk.send("https://api.github.com/orgs/","__comma",[smalltalk.send(self,"_orgName",[])]),"__comma",["/repos?callback=?"]),(function(response){
smalltalk.send(smalltalk.send(response,"_data",[]),"_do_",[(function(repo){
return smalltalk.send(self,"_addRepo_",[repo]);
})]);
return smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("#app","_asJQuery",[])]);
})]);
return self},
args: [],
source: "fetchAndRenderRepos\x0a\x09self initializeRepos.\x0a\x09jQuery\x0a\x09\x09getJSON: 'https://api.github.com/orgs/', self orgName, '/repos?callback=?'\x0a\x09\x09callback: [ :response |\x0a        \x09response data do: [ :repo | self addRepo: repo ].\x0a\x09\x09\x09self appendToJQuery: '#app' asJQuery ]",
messageSends: ["initializeRepos", "getJSON:callback:", ",", "orgName", "do:", "addRepo:", "data", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_fetchRepos",
smalltalk.method({
selector: "fetchRepos",
category: 'fetching',
fn: function (){
var self=this;
smalltalk.send(self,"_initializeRepos",[]);
smalltalk.send(jQuery,"_getJSON_callback_",[smalltalk.send(smalltalk.send("https://api.github.com/orgs/","__comma",[smalltalk.send(self,"_orgName",[])]),"__comma",["/repos?callback=?"]),(function(response){
return smalltalk.send(smalltalk.send(response,"_data",[]),"_do_",[(function(repo){
return smalltalk.send(self,"_addRepo_",[repo]);
})]);
})]);
return self},
args: [],
source: "fetchRepos\x0a\x09self initializeRepos.\x0a\x09jQuery\x0a\x09\x09getJSON: 'https://api.github.com/orgs/', self orgName, '/repos?callback=?'\x0a\x09\x09callback: [ :response | response data do: [ :repo | self addRepo: repo ] ]",
messageSends: ["initializeRepos", "getJSON:callback:", ",", "orgName", "do:", "addRepo:", "data"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_initializeRepos",
smalltalk.method({
selector: "initializeRepos",
category: 'initialization',
fn: function (){
var self=this;
self["@repos"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
return self},
args: [],
source: "initializeRepos\x0a\x09repos := Array new",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_orgName",
smalltalk.method({
selector: "orgName",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@orgName"]) == nil || $receiver == undefined){
self["@orgName"]="unknown";
$1=self["@orgName"];
} else {
$1=self["@orgName"];
};
return $1;
},
args: [],
source: "orgName\x0a\x09^ orgName ifNil: [ orgName := 'unknown' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_orgName_",
smalltalk.method({
selector: "orgName:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@orgName"]=aString;
return self},
args: ["aString"],
source: "orgName: aString\x0a\x09orgName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["span9"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_ul",[]);
smalltalk.send($3,"_class_",["thumbnails"]);
$4=smalltalk.send($3,"_with_",[(function(){
return smalltalk.send(self,"_renderReposOn_",[html]);
})]);
return $4;
})]);
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'span9'; with: [\x0a\x09\x09html ul class: 'thumbnails'; with: [ self renderReposOn: html ]]",
messageSends: ["class:", "div", "with:", "ul", "renderReposOn:"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["container-fluid"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["row-fluid"]);
$4=smalltalk.send($3,"_with_",[(function(){
smalltalk.send(self,"_renderSidebarOn_",[html]);
return smalltalk.send(self,"_renderContentOn_",[html]);
})]);
return $4;
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'container-fluid'; with: [\x0a\x09\x09html div class: 'row-fluid'; with: [\x0a\x09\x09\x09self renderSidebarOn: html.\x0a            self renderContentOn: html ]]",
messageSends: ["class:", "div", "with:", "renderSidebarOn:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderReposOn_",
smalltalk.method({
selector: "renderReposOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$3,$5,$7,$8,$6,$4,$2;
smalltalk.send(smalltalk.send(self,"_repos",[]),"_do_",[(function(repo){
$1=smalltalk.send(html,"_li",[]);
smalltalk.send($1,"_class_",["span3"]);
$2=smalltalk.send($1,"_with_",[(function(){
$3=smalltalk.send(html,"_div",[]);
smalltalk.send($3,"_class_",["thumbnail"]);
$4=smalltalk.send($3,"_with_",[(function(){
$5=smalltalk.send(html,"_div",[]);
smalltalk.send($5,"_class_",["caption"]);
$6=smalltalk.send($5,"_with_",[(function(){
smalltalk.send(html,"_h3_",[smalltalk.send(repo,"_name",[])]);
$7=smalltalk.send(html,"_p",[]);
smalltalk.send($7,"_class_",["small muted"]);
$8=smalltalk.send($7,"_with_",[smalltalk.send(repo,"_language",[])]);
$8;
return smalltalk.send(html,"_p_",[smalltalk.send(repo,"_description",[])]);
})]);
return $6;
})]);
return $4;
})]);
return $2;
})]);
return self},
args: ["html"],
source: "renderReposOn: html\x0a\x09self repos do: [ :repo |\x0a\x09\x09html li class: 'span3'; with: [\x0a\x09\x09\x09html div class: 'thumbnail'; with: [\x0a\x09\x09\x09\x09html div class: 'caption'; with: [\x0a\x09\x09\x09\x09\x09html h3: repo name.\x0a\x09\x09\x09\x09\x09html p class: 'small muted'; with: repo language.\x0a\x09\x09\x09\x09\x09html p: repo description. ]]]]",
messageSends: ["do:", "class:", "li", "with:", "div", "h3:", "name", "p", "language", "p:", "description", "repos"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderSidebarOn_",
smalltalk.method({
selector: "renderSidebarOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["span3 well"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(html,"_h3_",["Sidebar"]);
})]);
return self},
args: ["html"],
source: "renderSidebarOn: html\x0a\x09html div class: 'span3 well'; with: [ html h3: 'Sidebar' ]",
messageSends: ["class:", "div", "with:", "h3:"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_repos",
smalltalk.method({
selector: "repos",
category: 'accessing',
fn: function (){
var self=this;
if(($receiver = self["@repos"]) == nil || $receiver == undefined){
smalltalk.send(self,"_initializeRepos",[]);
} else {
self["@repos"];
};
return self["@repos"];
},
args: [],
source: "repos\x0a\x09repos ifNil: [ self initializeRepos ].\x0a    ^repos.",
messageSends: ["ifNil:", "initializeRepos"],
referencedClasses: []
}),
smalltalk.RepoPageWidget);


smalltalk.addMethod(
"_newForOrg_",
smalltalk.method({
selector: "newForOrg:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_orgName_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString"],
source: "newForOrg: aString\x0a\x09^self new\x0a    \x09orgName: aString;\x0a        yourself",
messageSends: ["orgName:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RepoPageWidget.klass);

smalltalk.addMethod(
"_renderOrg_",
smalltalk.method({
selector: "renderOrg:",
category: 'instance creation',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self,"_newForOrg_",[aString]),"_fetchAndRenderRepos",[]);
return self},
args: ["aString"],
source: "renderOrg: aString\x0a\x09(self newForOrg: aString)\x0a    \x09fetchAndRenderRepos",
messageSends: ["fetchAndRenderRepos", "newForOrg:"],
referencedClasses: []
}),
smalltalk.RepoPageWidget.klass);


