
function addNewRow(title,expiredDate,updateDate,status,mark){
    let table = document.getElementById("table");
    var row = table.insertRow(1);
    row.id=mark
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML=title;
    cell2.innerHTML=updateDate;
    cell3.innerHTML=expiredDate;
    cell4.innerHTML=status;
    cell5.innerHTML='<td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction(this)"><input type="button" value="mark Row" onclick="markRow(this)"></td>'
}

function addNewTask(){
    var title = document.getElementById("title").value;
    var expiredDate = document.getElementById("date").value;
    addNewRow(title,expiredDate,new Date().toLocaleDateString().split(",")[0],'active','regular_row');
    fetch(`http://localhost:3000/addNewTask/${title}-${expiredDate}`,{
    method: 'POST', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>console.log(res))
}

function SomeDeleteRowFunction(o) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    var title=p.childNodes[0].innerHTML;
    fetch(`http://localhost:3000/removeTask/${title}`,{
    method: 'POST', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>{return res.json()})
    .then(res=>{console.log(res)})

}

function markRow(o){
    var p=o.parentNode.parentNode;
    console.log(p.childNodes[0].innerHTML)
    var title=p.childNodes[0].innerHTML;
    (p.id=='mark_row')? p.id='regular_row' : p.id='mark_row';
    if( p.id=='mark_row'){
        fetch(`http://localhost:3000/markTask/${title}`,{
        method: 'POST', // or 'PUT'
        headers: {
            "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
            },
        }).then(res=>{return res.json()})
        .then(res=>{console.log(res)})
    }
    else{
        fetch(`http://localhost:3000/removeMarkTask/${title}`,{
        method: 'POST', // or 'PUT'
        headers: {
            "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
            },
        }).then(res=>{return res.json()})
        .then(res=>{console.log(res)})

    }


}

function init(){
    fetch('http://localhost:3000/getAllTasks',{
    method: 'GET', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>{return res.json()})
    .then(res=>{buildTable(res)})
}

function buildTable(tasks){
    let table = document.getElementById("table");
    table.innerHTML="<tr><th>title</th><th>update date</th><th>expired date</th><th>status</th><th></th></tr>"
    tasks.forEach(task => {
        addNewRow(task.title,task.expiredDate,task.updateDate,task.status,task.mark)
        }
    );
}

window.addEventListener("DOMContentLoaded", function() {
    init();
}, false);



