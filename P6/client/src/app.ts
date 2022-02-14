var userId;


function addNewRow(title:string,expiredDate:string,updateDate:string,status:string,mark:string){
    let table = document.getElementById("table") as HTMLTableElement;
    var row = table.insertRow(1);
    row.id=mark;
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
    saveUserTable();
}

function addNewTask(){
    var title = (<HTMLInputElement>document.getElementById("title")).value;
    var expiredDate = (<HTMLInputElement>document.getElementById("date")).value;
    addNewRow(title,expiredDate,new Date().toLocaleDateString().split(",")[0],'active','regular_row');
    fetch(`http://localhost:3000/addNewTask/${title}-${expiredDate}`,{
    method: 'POST', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>console.log(res))
}

function SomeDeleteRowFunction(o: any) {
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
    saveUserTable();

}

function markRow(o: any){
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
    saveUserTable();
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

function buildTable(tasks:any){
    let table = document.getElementById("table") as HTMLTableElement;
    table.innerHTML="<tr><th>title</th><th>update date</th><th>expired date</th><th>status</th><th></th></tr>"
    tasks.forEach((task: { title: string; expiredDate: string; updateDate: string; status: string; mark: string; }) => {
        addNewRow(task.title,task.expiredDate,task.updateDate,task.status,task.mark)
        }
    );
}

window.addEventListener("DOMContentLoaded", function() {
    init();
}, false);


function loadUserId(){
    userId= (<HTMLInputElement>document.getElementById("userId")).value;
    fetch(`http://localhost:3000/getAllUserTasks/${userId}`,{
        method: 'GET', // or 'PUT'
        headers: {
            "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
            },
        })
        .then(res=>{return res.text()})
        .then(res=>{
            let table = document.getElementById('table') as HTMLTableElement;
            table.innerHTML=res.substring(3,res.length-1);
        })
}

function saveUserTable(){
    const table = document.getElementById('table') as HTMLTableElement;
    console.log(JSON.stringify(table.innerHTML))
    const data={table:JSON.stringify(table.innerHTML)};
    userId= (<HTMLInputElement>document.getElementById("userId")).value;
    if(!userId) 
        return;
    fetch(`http://localhost:3000/setUserTasks/${userId}`,{
        method: 'POST', // or 'PUT'
        headers: {
            "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
        })
        .then(res=>{return res.text()})
}