let data=[];


fetch("videos.json")
.then(res=>res.json())
.then(videos=>{

data=videos;
show(videos);

});


function show(list){

let box=document.getElementById("videos");

box.innerHTML="";


list.forEach(v=>{

box.innerHTML+=`

<div class="card">

<img src="${v.cover}">

<h3>${v.title}</h3>

<p>${v.category}</p>


<a href="${v.url}" target="_blank">

▶ 播放视频

</a>

</div>

`;

});

}



document
.getElementById("search")
.onkeyup=function(){

let key=this.value;


let result=data.filter(v=>

v.title.includes(key)

);


show(result);


}