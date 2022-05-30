
const download=(link, format) =>{
    console.log("running2");
    document.querySelector('button').innerHTML=('<iframe style="height: 50px;background-color:red; border:none; overflow:hidden;" src="https://loader.to/api/button/?url='+ link + '&f=' + format + '"></iframe>');
}
document.querySelector('button').addEventListener("click", ()=>{
    console.log("running");
    const link = document.querySelector('.link').value;
    const format = document.querySelector('.format').value;
    download(link,format);
})
// const but=document.getElementById("myBtn");
// but.addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("myBtn").innerHTML = Date();
}