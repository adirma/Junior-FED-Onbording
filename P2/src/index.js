function addNewRow(){
    let table = document.getElementById("table");
    var row = table.insertRow(1);
    row.id='regular_row'
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var title = document.getElementById("title").value;
    var expiredDate = document.getElementById("date").value;
    cell1.innerHTML=title;
    cell2.innerHTML='31/01/2022'
    cell3.innerHTML=expiredDate;
    cell4.innerHTML="active";
    cell5.innerHTML='<td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction(this)"><input type="button" value="mark Row" onclick="markRow(this)"></td>'
    save()
}

function SomeDeleteRowFunction(o) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    save()
}

function markRow(o){
    var p=o.parentNode.parentNode;
    (p.id=='mark_row')? p.id='regular_row' : p.id='mark_row'
    save()
}

function init(){
    let table = document.getElementById("table");
    table.innerHTML=JSON.parse(localStorage.getItem('table'))

}

function save(){
    localStorage.setItem('table',JSON.stringify(table.innerHTML))
}
window.addEventListener("DOMContentLoaded", function() {
    init();
}, false);



