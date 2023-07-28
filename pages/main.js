export default function Main(){
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="main">
        <h1 class="result">0</h1>
        <input type="number" class="solution">
        <button class="buttonClick">Click</button>
        <div class="attempt">
        <p class="correct">correct: 0</p>
        <p class="nCorrect">not correct: 0</p>
        </div>
        </div>`
    return element
}


