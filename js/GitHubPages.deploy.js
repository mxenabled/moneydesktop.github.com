smalltalk.addPackage('GitHubPages', {});
smalltalk.addClass('RepoPageWidget', smalltalk.Widget, ['orgName', 'repos'], 'GitHubPages');
smalltalk.addMethod(
"_addRepo_",
smalltalk.method({
selector: "addRepo:",
fn: function (aRepo){
var self=this;
smalltalk.send(smalltalk.send(self,"_repos",[]),"_add_",[aRepo]);
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_fetchAndRenderRepos",
smalltalk.method({
selector: "fetchAndRenderRepos",
fn: function (){
var self=this;
smalltalk.send(self,"_initializeRepos",[]);
smalltalk.send(jQuery,"_getJSON_callback_",[smalltalk.send(smalltalk.send("https://api.github.com/orgs/","__comma",[smalltalk.send(self,"_orgName",[])]),"__comma",["/repos?callback=?"]),(function(response){
smalltalk.send(smalltalk.send(response,"_data",[]),"_do_",[(function(repo){
return smalltalk.send(self,"_addRepo_",[repo]);
})]);
return smalltalk.send(self,"_appendToJQuery_",[smalltalk.send("#app","_asJQuery",[])]);
})]);
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_fetchRepos",
smalltalk.method({
selector: "fetchRepos",
fn: function (){
var self=this;
smalltalk.send(self,"_initializeRepos",[]);
smalltalk.send(jQuery,"_getJSON_callback_",[smalltalk.send(smalltalk.send("https://api.github.com/orgs/","__comma",[smalltalk.send(self,"_orgName",[])]),"__comma",["/repos?callback=?"]),(function(response){
return smalltalk.send(smalltalk.send(response,"_data",[]),"_do_",[(function(repo){
return smalltalk.send(self,"_addRepo_",[repo]);
})]);
})]);
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_initializeRepos",
smalltalk.method({
selector: "initializeRepos",
fn: function (){
var self=this;
self["@repos"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_orgName",
smalltalk.method({
selector: "orgName",
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
}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_orgName_",
smalltalk.method({
selector: "orgName:",
fn: function (aString){
var self=this;
self["@orgName"]=aString;
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
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
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderReposOn_",
smalltalk.method({
selector: "renderReposOn:",
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
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_renderSidebarOn_",
smalltalk.method({
selector: "renderSidebarOn:",
fn: function (html){
var self=this;
var $1,$2;
$1=smalltalk.send(html,"_div",[]);
smalltalk.send($1,"_class_",["span3 well"]);
$2=smalltalk.send($1,"_with_",[(function(){
return smalltalk.send(html,"_h3_",["Sidebar"]);
})]);
return self}
}),
smalltalk.RepoPageWidget);

smalltalk.addMethod(
"_repos",
smalltalk.method({
selector: "repos",
fn: function (){
var self=this;
if(($receiver = self["@repos"]) == nil || $receiver == undefined){
smalltalk.send(self,"_initializeRepos",[]);
} else {
self["@repos"];
};
return self["@repos"];
}
}),
smalltalk.RepoPageWidget);


smalltalk.addMethod(
"_newForOrg_",
smalltalk.method({
selector: "newForOrg:",
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_orgName_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.RepoPageWidget.klass);

smalltalk.addMethod(
"_renderOrg_",
smalltalk.method({
selector: "renderOrg:",
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self,"_newForOrg_",[aString]),"_fetchAndRenderRepos",[]);
return self}
}),
smalltalk.RepoPageWidget.klass);


