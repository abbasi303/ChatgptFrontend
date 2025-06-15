const oldContent = document.getElementById('old-content');
const newContent = document.getElementById('new-content');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// store message pairs in the new panel
let newMessages = [];

function addMessage(userText, responseText) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message');

    const userSpan = document.createElement('span');
    userSpan.classList.add('user');
    userSpan.textContent = userText;

    const responseSpan = document.createElement('span');
    responseSpan.classList.add('response');
    responseSpan.textContent = responseText;

    messageWrapper.appendChild(userSpan);
    messageWrapper.appendChild(document.createElement('br'));
    messageWrapper.appendChild(responseSpan);

    newContent.appendChild(messageWrapper);
    newMessages.push(messageWrapper);

    // move messages to old panel if more than 5 pairs in new panel
    if (newMessages.length > 5) {
        const oldMessage = newMessages.shift();
        newContent.removeChild(oldMessage);
        oldContent.appendChild(oldMessage);
    }

    // scroll to bottom of new panel
    newContent.scrollTop = newContent.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    // Placeholder response: echo the prompt
    const response = `Echo: ${text}`;
    addMessage(text, response);
    userInput.value = '';
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});
