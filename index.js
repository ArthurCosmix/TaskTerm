import readLine from 'readline'
import EventEmitter from 'events'
import connectServer from './server.js'

class eventEmitter extends EventEmitter {}
const cursorPrompt = 'taskTerm>'
const client = new eventEmitter()
const server = connectServer(client)

server.on('response' , (response) =>{
    process.stdout.write('\u001B[2J\u001B[0;0f'),
    process.stdout.write(response),
    process.stdout.write(`\n${cursorPrompt}`)
})

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : cursorPrompt
})

rl.on('line', (input) =>{
    let cmd, args
    [cmd, ...args] = input.trim().split(' ')
    client.emit('command', cmd, args)
})