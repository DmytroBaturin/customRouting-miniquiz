const operations = ['+' , '-' , '*', '/']
const lvlOption = [0]
const attempts =
    {
        'correct': -1,
        'nCorrect': 0
    }

const setRandom = () => {
    if(lvlOption[0] === 0) {
        return `${Math.trunc(Math.random() * 10)} ${operations[Math.trunc(Math.random() * 1)]} ${Math.trunc(Math.random() * 10)}`
    }else if(lvlOption[0] === 1){
        return `${Math.trunc(Math.random() * 20)} ${operations[Math.trunc(Math.random() * 3)]} ${Math.trunc(Math.random() * 10)}`
    }
    else if(lvlOption[0] === 2){
        return `${Math.trunc(Math.random() * 30)} ${operations[Math.trunc(Math.random() * 4)]} ${Math.trunc(Math.random() * 10)}`
    }
}


export const SetRandomNumber = (button, text, input, correct, nCorrect) => {
    button.addEventListener('click', () => {
           setAttempt(input, text, correct, nCorrect)
    })
}
export const setSolutionInput  = (result, input, correct, nCorrect) => {
    input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            setAttempt(input, result, correct, nCorrect)
        }
    })
}
const setAttempt = (input, result, correct, nCorrect) => {
        if(Number(input.value) === eval(result.innerHTML)){
        console.log("good")
        attempts.correct += 1
        correct.innerHTML = `correct: ${attempts.correct}`
        result.innerHTML = setRandom()
        input.value = ''
    }else{
        result.innerHTML = setRandom()
        attempts.nCorrect += 1
        nCorrect.innerHTML = `not correct: ${attempts.nCorrect}`
        console.log("bad")
            input.value = ''
        }
}
export const setLvl = (lvls) => {
    lvls.forEach((lvl, i) => {
        lvl.addEventListener('click', () => {
            if (!lvl.hasAttribute('active')) {
                lvls.forEach((otherLvl) => {
                    if (otherLvl !== lvl) {
                        otherLvl.removeAttribute('active');
                    }
                });
                lvl.setAttribute('active', true);
                lvlOption.pop();
                lvlOption.push(i);
            }
        });
    });
};
