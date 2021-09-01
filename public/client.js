const messagesElement = document.getElementById("Messages")
const textElement = document.getElementById("Input-text")
const buttonElemet = document.getElementById("Input-button")
const fileBlockElement = document.getElementById("Input-file-block")
const fileInputElement = document.getElementById("Input-file-input")
let text = ""
let file = ""

const ws = new WebSocket('ws://localhost:8080')

buttonElemet.addEventListener('click', event => {
    event.preventDefault();
    console.log(file)
    text = textElement.value
    // ws.send(text)
    ws.send(file)
    textElement.value = ""
})

fileBlockElement.addEventListener('click', () => {
    fileInputElement.click()
})

fileInputElement.addEventListener('change',getFile => {
    file = getFile.target.files[0]
})

ws.onopen = () => setStatus('ONLINE')
ws.onclose = () => setStatus('DISCONECTED')
ws.onmessage = async (response) => {
    console.log(response)
    const text = await response.data.text()
    const newElement = document.createElement('div')
    newElement.className = "Message"
    newElement.innerText = text
    // console.log(newElement)
    messagesElement.appendChild(newElement)
}