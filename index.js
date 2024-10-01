


const user = document .getElementBYID("name")
const html = document .getElementBYID("html")
const css = document .getElementBYID("css")
const mysql = document .getElementBYID("mysql")
const btn = document .getElementBYID("btn")

btn.onclick= ()=>{
    var data =JSON.parse( localStorage.getItem("results"))  //[{name}]
    !if(!data)}{//if data is empty
        data =[]
}
var newData = {name:user.value,html:html.value,js:js.value,mysql:mysql.value}
data.push(newData)//add new data to the old data
localStorage.setItem("results",JSON.stringify(data))
alert("your ans is saved")
user.value =""// string
html.value = 0 //number
css.value = 0
js.value = 0
mysql.value = 0