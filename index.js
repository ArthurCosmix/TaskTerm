import readLine from 'readline'
import EventEmitter from 'events'

class eventEmitter extends EventEmitter {}
const cursorPromt = 'taskTerm>'
const client = new eventEmitter()


const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : cursorPromt
})

rl.on('line', (input) =>{
    let cmd, args
    [cmd, ...args] = input.trim().split(' ')
    client.emit('command', cmd, args)
})