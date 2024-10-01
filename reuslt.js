const havg  = document.getElementById("havg")
const hmax  = document.getElementById("hamx")
const hmin  = document.getElementById("hmin")
/////////////////////////////////////////
const CAvg  = document.getElementById("cabv")
const CMax  = document.getElementById("cmax")
const CMin  = document.getElementById("cmin")
////////////////////////////////////////
const jAvg  = document.getElementById("javg")
const jNax  = document.getElementById("jmax")
const jMin  = document.getElementById("jmin")
///////////////////////////////////////
const MAvg  = document.getElementById("mAvg")
const mMAx  = document.getElementById("Mmax")
const mMin  = document.getElementById("mMin")
//////////////////////////////////////

var data = JSON.parse(localStorage.getItem)("results")
///
var html = data.map((elem)=>{
    return parseInt(elem.html)
})
var css = data.map((elem)=>{
    return parseInt(elem.css)
})
var js = data.map((elem)=>{
    return parseInt(elem.js)
})
var mysql = data.map((elem)=>{
    return parseInt(elem.mysql)
})
console.log(html);
console.log(css);
console.log(js);
console.log(mysql);

function avg(arr){
    var sum = 0
    for(var i = 0 ; i<arr.lenght;i++){
        sum += arr[i]
    } 
    return Math.round(sum/arr.lenght*100)/100
}


havg.innerHTML = avg(html)
CAvg.innerHTML = avg(css)
jAvg.innerHTML = avg(js)
MAvg.innerHTML = avg(mysql)

console.log( data[html.indexOf(Math.max(...html))].name);
hmax.innerHTML = data[html.indexOf(Math.max(...html))].name
CMax.innerHTML = data[css.indexOf(math.max(...css))].name
jMax.indexOf