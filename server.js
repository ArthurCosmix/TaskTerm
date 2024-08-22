import EventEmitter from 'events'

class TaskTermServer extends EventEmitter {
    constructor(client){
        super()
         // Initialise variables
         this.tasks = {};
         this.taskId = 1;
 
         // initial server response
         process.nextTick(() => {
             this.emit(
               'response',
               'Type a command (help to list commands)'
             );
         })

         client.on('command', (cmd, args) =>{
            switch (cmd) {
                case 'help' : this.help()
                case 'ls'   : this.ls()
                case 'add'  : this.add()
                case 'delete' : this.delete()
                    this[cmd][args]
                    break
                default : 
                    this.emit('!response' , 'Unknow command')
            }
         })
    }

    help() {
        this.emit('response', `Available commands: 
            add task
            ls
            delete :id
           `)
    }

    ls() {
        this.emit('response', `Tasks: \n${this.#tasksString()}`)
    }

    add(){
        const newTask = args.join(' ')
        this.tasks[this.taskId] = newTask;
        this.emit('response', `Added Task ${this.taskId}`)
        this.taskId++
    }

    delete(){
        delete (this.tasks[args[0]]);
        this.emit('response', `Deleted task id ${args[0]}`)
    }

    #tasksString(){
        return Object.keys(this.tasks).map((key) => {
            return `${key}: ${this.tasks[key]}`
        }).join('\n');
    }

}

export default client => new TaskTermServer(client)