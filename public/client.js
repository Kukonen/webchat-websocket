const textElement = document.getElementById("Input-text")
const buttonElemet = document.getElementById("Input-button")
let text = ""

const ws = new WebSocket('ws://localhost:8080')

buttonElemet.addEventListener('click', () => {
    text = textElement.value
})

ws.onopen = () => setStatus('ONLINE')
ws.onclose = () => setStatus('DISCONECTED')
ws.onmessage = response => console.log(response.data)