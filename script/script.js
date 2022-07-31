var contador = 0;

const restar = document.querySelector("#btn_restar")
const sumar = document.querySelector("#btn_sumar")


restar.addEventListener("click", (e) => {
    contador>0? contador-=1:contador=contador;
    console.log(contador)
    update()
})

sumar.addEventListener("click", (e) => {
    contador+=1
    console.log(contador)
    update()
})

function update (){
    document.getElementById("span").innerHTML=contador

}