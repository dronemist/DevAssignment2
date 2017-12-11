

var i=0;
var a=0;

function addtodo(){
a=0;
var text=document.getElementById("input").value;
document.getElementById("input").value="";
var node=document.createElement("li");
var textno=document.createTextNode(text);
node.appendChild(textno);
var att1=document.createAttribute("onclick");
att1.value="striketodo(this)";
node.setAttributeNode(att1);
document.getElementById("list").appendChild(node);
var span2=document.createElement("span");
var el2=document.createTextNode("edit");
span2.className="edit";
var att3=document.createAttribute("onclick");
att3.value="edittodo(this)";
span2.setAttributeNode(att3);
span2.appendChild(el2);
node.appendChild(span2);
var mylist=document.getElementsByTagName("LI");
var span=document.createElement("span");
var el=document.createTextNode("delete");
span.className="delete";
var att4=document.createAttribute("onclick");
att4.value="deletetodo(this)";
span.setAttributeNode(att4);
span.appendChild(el);
node.appendChild(span);
i++;
}

function striketodo(x){
if(a==0){
x.style.textDecoration="line-through";
x.style.backgroundColor="gray";
x.style.color="black";
}
}
function deletetodo(y){
  a=0;
  var div=y.parentElement;
  div.style.display="none";

}
function edittodo(z){
  a=0;
  var div=z.parentElement;
  var li=document.createElement("li");
  var child=prompt("enter the new value");
  var cre=document.createTextNode(child);
  li.appendChild(cre);
  var att1=document.createAttribute("onclick");
  att1.value="striketodo(this)";
  li.setAttributeNode(att1);
  var span2=document.createElement("span");
  var el2=document.createTextNode("edit");
  span2.className="edit";
  var att3=document.createAttribute("onclick");
  att3.value="edittodo(this)";
  span2.setAttributeNode(att3);
  span2.appendChild(el2);
  li.appendChild(span2);
  var mylist=document.getElementsByTagName("LI");
  var span=document.createElement("span");
  var el=document.createTextNode("delete");
  span.className="delete";
  var att4=document.createAttribute("onclick");
  att4.value="deletetodo(this)";
  span.setAttributeNode(att4);
  span.appendChild(el);
  li.appendChild(span);
  var p=div.parentElement;
  p.replaceChild(li,div);

}
