const operations = ['+' , '-' , '*', '/']
const lvlOption = [0]

let attempts =
    {
        'correct': 0,
        'nCorrect': 0
    }

const att = {
    'correct': -1,
    'nCorrect': 0
}

export const storageAttempts = JSON.parse(localStorage.getItem('attempt'))
console.log(storageAttempts)
if (storageAttempts){
    attempts = storageAttempts
}else {
    localStorage.setItem('attempt', JSON.stringify(attempts))
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
export const setSolutionInput  = (result, input, correct, nCorrect) => {;
    input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            setAttempt(input, result, correct, nCorrect)
        }
    })
}
const setAttempt = (input, result, correct, nCorrect) => {
        if(Number(input.value) === eval(result.innerHTML)){
        result.innerHTML = setRandom()
            att.correct += 1
            correct.innerHTML = `correct: ${att.correct}`
            localStorage.setItem('attempt', JSON.stringify({
                ...storageAttempts,
                'correct': storageAttempts.correct + att.correct,
            }))
        input.value = ''
    }else{
        result.innerHTML = setRandom()
        att.nCorrect += 1
        localStorage.setItem('attempt', JSON.stringify({
            ...storageAttempts,
            'nCorrect': storageAttempts.nCorrect + att.nCorrect,
        }))
        nCorrect.innerHTML = `not correct: ${att.nCorrect}`
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
