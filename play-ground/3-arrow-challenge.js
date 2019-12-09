const tasks = {
    tasks: [{
        text: "Grocery shopping",
        completed: true
    },{
        text: "Clean yard",
        completed: false
    },{
        text: "File course",
        completed: false
    }],
    getTasksToDo(){
        const todosLeft = this.tasks.filter((task)=> !(task.completed))
        return todosLeft
    }
}


console.log(tasks.getTasksToDo())