const jokeElement = document.getElementById("joke");
const getJokeButton = document.getElementById("getJoke");

getJokeButton.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            jokeElement.textContent = data.value;
        })
        .catch(error => {
            jokeElement.textContent = "Произошла ошибка при получении шутки.";
        });
});