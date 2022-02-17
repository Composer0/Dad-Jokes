const jokeEl = document.getElementById("joke")
const joketn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'applicaiton/json'
//         }
//     }
//     const res = await fetch('https://icanhazdadjoke.com', config)
//         // when a function has an await the function must be labeled as async.

//     const data = await res.json()

//     jokeEl.innerHTML = data.joke
// }
// Alternate way using async/await that did not work for me.


function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}