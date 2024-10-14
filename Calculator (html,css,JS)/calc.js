var text = document.getElementById("ta");
function display(x){
    text.value +=x;
}
function calculation(){
    try{
        text.value = eval((text.value).replaceAll('^','**'));
    }
    catch{
        text.value = "error";
    }
}

function removeAll(){
    text.value = "";
}
function remove(){
    let a = text.value;
    text.value = (text.value).slice(0,(a.length-1));
}