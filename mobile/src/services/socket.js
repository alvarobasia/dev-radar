import  sockeio  from 'socket.io-client'

const socket = sockeio('http://192.168.1.15:3333', {
  autoConnect : false
})

function subscribeToNewDevs(subcribeFunction){
  socket.on('new-dev', subcribeFunction)
}

function connect(latitude, longitude, techs){
  console.log(latitude, longitude, techs)
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect()
  socket.on('massage', text => console.log(text))
}

function disconnect(){
  if(socket.connected)
    socket.disconnect()
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}
