let allVideos=[];



async function loadVideos(){

let res=await fetch("videos.json");

allVideos=await res.json();

showVideos(allVideos);

}



function showVideos(list){


let box=document.getElementById("videos");


box.innerHTML="";


list.forEach(v=>{


box.innerHTML+=`

<div class="card" onclick="openVideo(${v.id})">


<img class="cover" src="${v.cover}">


<div class="info">


<div class="channel">

<img class="avatar" src="${v.avatar}">

<span>${v.channel}</span>

</div>


<h3>${v.title}</h3>


<p class="meta">

${v.views} · ${v.time}

</p>


</div>


</div>

`;


});


}



function filterCategory(c){


if(c=="全部"){

showVideos(allVideos);

return;

}


showVideos(

allVideos.filter(v=>v.category==c)

);


}




document.getElementById("search")
.addEventListener("input",function(){


let k=this.value.toLowerCase();


showVideos(

allVideos.filter(v=>

v.title.toLowerCase().includes(k)

||v.channel.toLowerCase().includes(k)

||v.category.toLowerCase().includes(k)

)

);


});



function openVideo(id){

location.href="video.html?id="+id;

}



loadVideos();
