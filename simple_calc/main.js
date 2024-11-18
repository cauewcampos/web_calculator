
function outcome () {

    let firstNum = Number(document.getElementById("num-one").value)
    let secNum = Number(document.getElementById("num-two").value)
    let total = 0

    if(document.getElementById('box1').checked)
        total = firstNum + secNum
    else if(document.getElementById('box2').checked)
        total = firstNum - secNum
    else if(document.getElementById('box3').checked)
        total = firstNum * secNum
    else
        total = firstNum / secNum
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total)
}