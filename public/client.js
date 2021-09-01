const messagesElement = document.getElementById("Messages")
const textElement = document.getElementById("Input-text")
const buttonElemet = document.getElementById("Input-button")
let text = ""

const ws = new WebSocket('ws://localhost:8080')

buttonElemet.addEventListener('click', event => {
    event.preventDefault();
    text = textElement.value
    ws.send(text)
    textElement.value = ""
})

ws.onopen = () => setStatus('ONLINE')
ws.onclose = () => setStatus('DISCONECTED')
ws.onmessage = async (response) => {
    const text = await response.data.text()
    const newElement = document.createElement('div')
    newElement.className = "Message"
    newElement.innerText = text
    // console.log(newElement)
    messagesElement.appendChild(newElement)
}