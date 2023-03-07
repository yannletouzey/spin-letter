const text = document.getElementById('text')
const textContainer = text.innerText
const newText = textContainer.toUpperCase()
const textReplace = newText.replace(" ", "");
const textArray = Array.from(textReplace)

spinLetter(text, textArray)
function spinLetter(container, array) {
    for (let i = 0; i < array.length; i++) {
        setTimeout(
            function () {
                container.innerHTML = `${array[i]}`
            }, i * 1000
        )
    }
}
setInterval(function () {
    for (let i = 0; i < textArray.length; i++) {
        setTimeout(
            function () {
                text.innerHTML = `${textArray[i]}`
            }, i * 1000
        )
    }
}, textArray.length * 1000);