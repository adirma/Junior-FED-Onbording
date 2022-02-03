var dataset={
    tasks:[],
}
var taskIndex=[]

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

