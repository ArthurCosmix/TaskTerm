import EventEmitter from 'events'

class TaskTermServer extends EventEmitter {
    constructor(){
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
    }
}

export default client => new TaskTermServer(client)