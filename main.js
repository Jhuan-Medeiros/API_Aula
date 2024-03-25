const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });


console.log(cidade)


document.getElementById('api').addEventListener('submit', function (event) {
    var pais = document.getElementById("pais")

    axios.get(`https://restcountries.com/v3.1/name/${pais}`)
        .then(response => {
            const dataPais = response.data
            console.log(dataPais)
        })
}