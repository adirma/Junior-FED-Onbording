import Cookies from 'js-cookie'
var userId;

export function init(){
    return fetch('http://localhost:3000/getAllTasks',{
    method: 'GET', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>{return res.json()})
}

export function addNewTask(expiredDate,title){
    fetch(`http://localhost:3000/addNewTask/${title}-${expiredDate}`,{
    method: 'POST', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>console.log(res))
}

export function deleteServerTask(title) {
    fetch(`http://localhost:3000/removeTask/${title}`,{
    method: 'POST', // or 'PUT'
    headers: {
        "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        },
    }).then(res=>{return res.json()})
    .then(res=>{console.log(res)})
}

export function saveUserTable(userId,data){
    userId= document.getElementById("userId").value;
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

export function markRow(o){
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
    save();
    saveUserTable();
}


export function save(data){
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

export function loadUserId(){
    userId= document.getElementById("userId").value;
    fetch(`http://localhost:3000/getAllUserTasks/${userId}`,{
        method: 'GET', // or 'PUT'
        headers: {
            "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
            },
        })
        .then(res=>{return res.text()})
        .then(res=>{
            let table = document.getElementById('table');
            table.innerHTML=res.substring(3,res.length-1);
        })
}

