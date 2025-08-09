// Variaveis:
console.log("inicio do script...");
let logos = document.getElementById("logos");
let local = document.getElementById("local");
let mapa = document.getElementById("mapa");
let producao = document.getElementById("producao");
let nos = document.getElementById("nos");

let bl_logos = document.getElementById("bl_logos");
let bl_mapa = document.getElementById("bl_mapa");
let bl_local = document.getElementById("bl_local");
let bl_producao = document.getElementById("bl_producao");
let bl_nos = document.getElementById("bl_nos");

let foto_pdv = document.getElementById("foto_pdv");
let pdv_foto1 = document.getElementById("pdv_foto1");
let pdv_foto2 = document.getElementById("pdv_foto2");
let pdv_text = document.getElementById("pdv_text");

let foto_patio = document.getElementById("foto_patio");
let patio_foto1 = document.getElementById("patio_foto1");
let patio_foto2 = document.getElementById("patio_foto2");
let patio_text = document.getElementById("patio_text");

let foto_igar = document.getElementById("foto_igar");
let igar_foto1 = document.getElementById("igar_foto1");
let igar_foto2 = document.getElementById("igar_foto2");
let igar_text = document.getElementById("igar_text");


console.log("FUNC LOGOS OK");
logos.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("SESSÃO LOGOS")
    bl_logos.classList.remove("hide")
    bl_mapa.classList.add("hide")
    bl_local.classList.add("hide")
    bl_producao.classList.add("hide")
    bl_nos.classList.add("hide")
})

console.log("FUNC MAPA OK");
mapa.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("SESSÃO LOCAL")
    bl_logos.classList.add("hide")
    bl_mapa.classList.remove("hide")
    bl_local.classList.add("hide")
    bl_producao.classList.add("hide")
    bl_nos.classList.add("hide")
})

console.log("FUNC LOCAL OK");
local.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("SESSÃO LOCAL")
    bl_logos.classList.add("hide")
    bl_mapa.classList.add("hide")
    bl_local.classList.remove("hide")
    bl_producao.classList.add("hide")
    bl_nos.classList.add("hide")
})

console.log("FUNC PRODUCAO OK");
producao.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("SESSÃO PRODUCAO")
    bl_logos.classList.add("hide")
    bl_mapa.classList.add("hide")
    bl_local.classList.add("hide")
    bl_producao.classList.remove("hide")
    bl_nos.classList.add("hide")
})

console.log("FUNC NOS OK");
nos.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("SESSÃO NOS")
    bl_logos.classList.add("hide")
    bl_mapa.classList.add("hide")
    bl_local.classList.add("hide")
    bl_producao.classList.add("hide")
    bl_nos.classList.remove("hide")
})

pdv_foto1.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    pdv_foto2.classList.add("hide")
    pdv_text.classList.add("hide")
    pdv_foto1.classList.add("fotomax")
    foto_patio.classList.add("hide")
    foto_igar.classList.add("hide")
})
pdv_foto1.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    pdv_foto2.classList.remove("hide")
    pdv_text.classList.remove("hide")
    pdv_foto1.classList.remove("fotomax")
    foto_patio.classList.remove("hide")
    foto_igar.classList.remove("hide")
})

pdv_foto2.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    pdv_foto1.classList.add("hide")
    pdv_text.classList.add("hide")
    pdv_foto2.classList.add("fotomax")
    foto_patio.classList.add("hide")
    foto_igar.classList.add("hide")
})
pdv_foto2.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    pdv_foto1.classList.remove("hide")
    pdv_text.classList.remove("hide")
    pdv_foto2.classList.remove("fotomax")
    foto_patio.classList.remove("hide")
    foto_igar.classList.remove("hide")
})

patio_foto1.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    patio_foto2.classList.add("hide")
    patio_text.classList.add("hide")
    patio_foto1.classList.add("fotomax")
    foto_pdv.classList.add("hide")
    foto_igar.classList.add("hide")
})
patio_foto1.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    patio_foto2.classList.remove("hide")
    patio_text.classList.remove("hide")
    patio_foto1.classList.remove("fotomax")
    foto_pdv.classList.remove("hide")
    foto_igar.classList.remove("hide")
})

patio_foto2.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    patio_foto1.classList.add("hide")
    patio_text.classList.add("hide")
    patio_foto2.classList.add("fotomax")
    foto_pdv.classList.add("hide")
    foto_igar.classList.add("hide")
})
patio_foto2.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    patio_foto1.classList.remove("hide")
    patio_text.classList.remove("hide")
    patio_foto2.classList.remove("fotomax")
    foto_pdv.classList.remove("hide")
    foto_igar.classList.remove("hide")
})

igar_foto1.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    igar_foto2.classList.add("hide")
    igar_text.classList.add("hide")
    igar_foto1.classList.add("fotomax")
    foto_pdv.classList.add("hide")
    foto_patio.classList.add("hide")
})
igar_foto1.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    igar_foto2.classList.remove("hide")
    igar_text.classList.remove("hide")
    igar_foto1.classList.remove("fotomax")
    foto_pdv.classList.remove("hide")
    foto_patio.classList.remove("hide")
})

igar_foto2.addEventListener("mouseover", (evento)=> {
    evento.preventDefault()
    igar_foto1.classList.add("hide")
    igar_text.classList.add("hide")
    igar_foto2.classList.add("fotomax")
    foto_patio.classList.add("hide")
    foto_pdv.classList.add("hide")
})
igar_foto2.addEventListener("mouseleave", (evento)=> {
    evento.preventDefault()
    igar_foto1.classList.remove("hide")
    igar_text.classList.remove("hide")
    igar_foto2.classList.remove("fotomax")
    foto_patio.classList.remove("hide")
    foto_pdv.classList.remove("hide")
})