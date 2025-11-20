function showSelection() {
    const paragraph = document.getElementById("result");
    const selectedOption = document.getElementById("languageSelect").value;

    paragraph.innerHTML = "You Picked: " + selectedOption;

}