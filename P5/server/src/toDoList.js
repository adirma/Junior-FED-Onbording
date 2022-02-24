var dataset={
    tasks:[ {
        title: "test 10",
        expiredDate: "01/01/2023",
        updateDate: new Date().toLocaleDateString().split(",")[0],
        status: "active",
        mark: "regular_row",
      }],
}
var taskIndex=[]
var usesDatasets={
    users:[
        {
    userid:"1",
    table:"\n <tbody><tr>\n <th>title</th>\n <th>update date</th>\n <th>expired date</th>\n <th>status</th>\n <th></th>\n\n </tr>\n <tr id=\"regular_row\"><td>ff</td><td>2/6/2022</td><td>ff</td><td>active</td><td><input type=\"button\" value=\"Delete Row\" onclick=\"SomeDeleteRowFunction(this)\"><input type=\"button\" value=\"mark Row\" onclick=\"markRow(this)\"></td></tr></tbody>"
    }
]
}
var userIdIndex=["1"]

export function getUserTable(userId){
    const index=userIdIndex.indexOf(userId) ;
    if(index<0)
        return;
    return usesDatasets.users[index].table;
}

export function setUserTable(userId,htmlTable){
    const index=userIdIndex.indexOf(userId) ;
    if(index<0){
        userIdIndex.push(userId);
        usesDatasets.users.push({
            userid:userId,
            table:htmlTable
        })
        return;
    }
    usesDatasets.users[index].table=htmlTable;
}

export function addNewTask(taskTitle,taskExpiredDate){
    const task={  title:taskTitle,
            updateDate:new Date().toLocaleDateString().split(",")[0],
            expiredDate:taskExpiredDate,
            status:'active',
            mark:'regular_row'
    }
    dataset.tasks.push(task)
    taskIndex.push(taskTitle)
    return dataset.tasks;
}

export function removeTask(title){
    const index=taskIndex.indexOf(title) ;
    if(index>-1){
        dataset.tasks.splice(index,1);
        taskIndex.splice(index,1)
    }
}

export function markTask(title){
    const index=taskIndex.indexOf(title) ;
    if(index<0)
        return;
    dataset.tasks[index].mark='mark_row';
    dataset.tasks[index].status="done";
    return dataset.tasks;
}

export function removeMarkTask(title){
    const index=taskIndex.indexOf(title) ;
    if(index<0)
        return;
    dataset.tasks[index].mark='regular_row';
    dataset.tasks[index].status="active";
    return dataset.tasks;
}

export function getAllTask(){
    return dataset.tasks
}

