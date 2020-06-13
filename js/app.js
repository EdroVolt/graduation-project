const btnDoctor = document.querySelector(".doctor");
const btnPatient = document.querySelector(".patient");
const btnClinic = document.querySelector(".clinic");
const divContent = document.querySelector(".my-content");

const fr = document.createDocumentFragment();

// view doctors
btnDoctor.addEventListener("click", loadDoctors);

function loadDoctors() {
    divContent.textContent = "";

    for (let i = 0; i < 50; i++) {
        // create doctor card
        const divCard = document.createElement("div");
        divCard.classList.add("card", "m-auto");
        divCard.style = "max-width: 540px;";

        const divRow = document.createElement("div");
        divRow.classList.add("row", "no-gutters");

        const divImgCol = document.createElement("div");
        divImgCol.classList.add("col-md-4");

        const img = document.createElement("img");
        img.setAttribute("src", "imgs/doctor2.jpg");
        img.classList.add("card-img");


        const divBodyCol = document.createElement("div");
        divBodyCol.classList.add("col-md-8");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const h5Body = document.createElement("h5");
        h5Body.classList.add("card-title");
        h5Body.textContent = "Card title";

        const p1Body = document.createElement("p");
        p1Body.classList.add("card-text");
        p1Body.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const p2Body = document.createElement("p");
        p2Body.classList.add("card-text");

        const small = document.createElement("small");
        small.classList.add("text-muted");
        small.textContent = "Last updated 3 mins ago";

        // append element to create card tree
        divCard.appendChild(divRow);

        divRow.appendChild(divImgCol);
        divRow.appendChild(divBodyCol);

        divImgCol.appendChild(img);

        divBodyCol.appendChild(divBody);

        divBody.appendChild(h5Body);
        divBody.appendChild(p1Body);
        divBody.appendChild(p2Body);

        p2Body.appendChild(small);

        // append card to document fragment
        fr.appendChild(divCard);
    }
    divContent.appendChild(fr);
    fr.textContent = "";
}

// view patients
btnPatient.addEventListener("click", loadPatients);

function loadPatients() {
    divContent.textContent = "";

    //   for (let i = 0; i < 50; i++) {}
    //   divContent.appendChild(fr);
}