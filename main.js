let formaReg = document.querySelector("form");
let listas = [];

formaReg.addEventListener("submit", function (e) {

    e.preventDefault();
    let vardas = formaReg["vardas"].value;
    let pavarde = formaReg["pavarde"].value;
    let mokykla = formaReg["mokykla"].value;
    let miestas = formaReg["miestas"].value;
    let sritis = formaReg["sritis"].value;

    console.log(vardas, pavarde, mokykla, miestas, sritis);

    // surinkti į objketą
    let user = { vardas, pavarde, mokykla, miestas, sritis }
    // pridėti į masyvą
    listas.push(user);


    // let txt = " ";
    // for (let x in user) {
    //     txt += user[x] + " ";
    // }
    // document.getElementById("list").innerHTML = txt;

    // console.log(txt);

})
let spausdinimas = document.querySelector("btn-list");
let list = document.querySelector("list");
spausdinimas.addEventListener("click", function (e) {
    let sarasas = listas.map(function (user) {
        return `<li>${user.vardas} ${user.pavarde} ${user.mokykla} ${user.miestas} ${user.sritis}</li>`;
    });
    list.innerHTML = sarasas.join("");
});

