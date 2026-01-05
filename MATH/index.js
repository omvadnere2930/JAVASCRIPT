let arr = [];
function calc() {
    let values = Number(document.getElementById("values").value);
    if (values <= 0) {
        document.getElementById("values").value = "";
        alert("Negative value & zero is Not Allowed");
        return;
    }
    arr.push(values);
    const length = arr.length;
    let sum = arr.reduce((a, b) => a + b, 0);
    document.getElementById('result').innerHTML = arr.join(" | ");
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('total').innerHTML = length;
    document.getElementById('average').innerHTML = sum / length;
    document.getElementById('minimum').innerHTML = Math.min(...arr);
    document.getElementById('maximum').innerHTML = Math.max(...arr);
    document.getElementById('values').value = "";
}