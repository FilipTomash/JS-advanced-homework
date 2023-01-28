$(document).ready(function () {
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");
    let table = document.getElementById("myTable");
    callBtn.addEventListener("click", function () {
        $.ajax({
            url: "https://swapi.dev/api/people/1",
            success: function (response) {
                console.log("Success!");
                let resultTitle = result.getElementsByTagName("h1")[0];
                let resultRow = table.getElementsByTagName("tr")[1];
                resultTitle.innerText = (`${response.name}`)
                resultRow.innerHTML += `
                    <td>${response.height}</td>
                    <td>${response.mass}</td>
                    <td>${response.eye_color}</td>
                    <td>${response.hair_color}</td>
                    `
            },
            error: function (error) {
                console.log(error);
            }
        })
    })
})