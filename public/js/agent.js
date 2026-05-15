document.addEventListener('DOMContentLoaded', () => {
    const askButton = document.getElementById('askButton');
    const userInput = document.getElementById('userInput');
    askButton.addEventListener('click', () => {
        askAgent(userInput.value);
        userInput.value = ''; 
    });
});


async function askAgent(params) {
    try{
        const response = await fetch('/api/ask-agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: params })
        }) 
        const data = await response.json();

    } catch (error) {
        console.error('Error occurred while asking the agent:', error);
    } 
}