function selectChatUser(){
    let name = document.getElementById(cmbUser).ariaValueMax;
    document.getElementById("msgtype");

}

function addTask(){
    let userInput = document.getElementById("textUserInput").value;
    let cmbUser = document.getElementById("cmbUser").value;
    let listItemClass = cmbUser ==="sashi" ? "list-group-item" : "list-group-item text-end";
    document.getElementById("msgtype").innerHTML += '<li class="'+listItemClass+'">'+userInput+'<span class="badge">12</li>';
}