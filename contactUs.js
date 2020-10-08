var maxAmount = 250;

function textCounter(textField, showCountField) {
    if (textField.value.length > maxAmount) {
        textField.value = textField.value.substring(0, maxAmount);
    } else {
        showCountField.value = maxAmount - textField.value.length;
    }
}

document.getElementById("buttonMain").addEventListener("click", function () {
    document.querySelector(".mainDiv").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".mainDiv").style.display = "none";
});
