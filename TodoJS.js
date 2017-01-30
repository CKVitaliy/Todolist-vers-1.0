var addText = document.getElementById("addText");
var addButton = document.getElementById("addButton");
addButton.addEventListener("click",adder);
function adder (){
    if (addText.value){
        var textInLi = document.createElement("li");
        textInLi.innerText = addText.value;

        var del = document.createElement("button");
        del.innerHTML = "Del";
        del.classList.add("del");
        del.addEventListener("click", deleteList);

        var done = document.createElement("button");
        done.innerHTML = "Done";
        done.classList.add("done");
        done.addEventListener("click",doneList);

        textInLi.appendChild(del);
        textInLi.appendChild(done);

        var list = document.getElementById("list");
        list.insertBefore(textInLi,list.childNodes[0]);
        addText.value = "";
    }
    function deleteList(){
        var stroka = this.parentNode;
        stroka.parentNode.removeChild(stroka);
    }
    function doneList(){
        if (done.className === "done"){
            done.classList.remove("done");
            done.classList.add("done1");
        } else {
            done.classList.remove("done1");
            done.classList.add("done");
        }

    }
}

