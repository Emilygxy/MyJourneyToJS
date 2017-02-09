/**
 * Created by mao on 2017/2/9.
 */
var para=document.createElement("p");//创建一个文本元素
var node=document.createTextNode("这是新段落。");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);

function RemoveFunction() {
    var parent=document.getElementById("div1");
    var child=document.getElementById("p3");
    parent.removeChild(child);
}