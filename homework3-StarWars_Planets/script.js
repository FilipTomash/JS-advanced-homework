const Base_URL = "https://swapi.dev/api/planets/?page=1";
const secondPage_URL = "https://swapi.dev/api/planets/?page=2";

let btnDiv = document.querySelector(".myBtn");
let callBtn = document.getElementById("callBtn");
let tableBody = document.getElementById("tableBody");


function getPlanets(url) {
    fetch(url)
    .then(response => response.json())
        .then(result => {
            console.log("The request is successful!")
            console.log(result)
            return renderPlanets(result.results);
        })
        .catch(error => {
            console.log("The request failed.")
            return error.responseText;
        })
    }
    
    function renderPlanets(data) {
        tableBody.innerHTML = "";
        for (const planet of data) {
            const tableBodyRow = document.createElement("tr");
        tableBodyRow.innerHTML = `
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        `
        tableBody.appendChild(tableBodyRow);
    }
};

function nextBtn() {
    btnDiv.innerHTML = "";
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next Page";
    btnDiv.appendChild(nextButton);
    nextButton.addEventListener("click", () => {
        getPlanets(secondPage_URL);
        previousBtn();
    })
}

function previousBtn() {
    btnDiv.innerHTML = "";
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "Previous page";
    btnDiv.appendChild(prevBtn);
    prevBtn.addEventListener("click", () => {
        getPlanets(Base_URL);
        nextBtn();
    })
}


callBtn.addEventListener("click", () => {
    getPlanets(Base_URL);
    nextBtn()
})