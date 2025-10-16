let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');

let operation = ''

let numpad = document.getElementById('buttons-section')

let inputArea = document.getElementById('input-area')

numpad.addEventListener('click', (e) => {
    let currentKey = e.target.textContent.trim();
    console.log(currentKey)

    if (currentKey === '=') {

        console.log('i happen')
        console.log(operation)
        inputArea.textContent = eval(operation)
        return;
    }

    if (currentKey === 'AC') {

        inputArea.textContent = ''
        operation = ''
        return;
    }

    operation += currentKey;
    inputArea.textContent += currentKey
})

