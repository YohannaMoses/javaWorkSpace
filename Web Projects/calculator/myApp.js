const clearScreen = () => {
    document.getElementById('result').value = '';
}
const backSpace = () => {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}
const appendCharacter = (num) => {
    document.getElementById('result').value += num;
}
const calculateResult = () => {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;

    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}