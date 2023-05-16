const zInfo = document.getElementById("zInfo");
const pInfo = document.getElementById("pInfo");
const plan = document.getElementById("plan");
const sal = document.getElementById("sal");
const uvod = document.getElementById("uvod");
const rozhlas = document.getElementById("rozhlas");
const kontakty = document.getElementById("kontakty");
const fotky = document.getElementById("fotky");



addEventListener("load", (event) => {});

onload = (event) => {
    uvod.style.display = "flex";
};

Zaklados = () => {
    zInfo.style.display = "block";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
povinos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "flex";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
plankos = () => {
zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "flex";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
salos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "flex";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
uvodos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "flex";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
rozhlasos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "flex";
    kontakty.style.display = "none";
    fotky.style.display = "none";
}
kontaktos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "block";
    fotky.style.display = "none";
}
fotkos = () => {
    zInfo.style.display = "none";
    pInfo.style.display = "none";
    plan.style.display = "none";
    sal.style.display = "none";
    uvod.style.display = "none";
    rozhlas.style.display = "none";
    kontakty.style.display = "none";
    fotky.style.display = "flex";
}
 