async function loadVideo(){


let id=new URLSearchParams(
location.search
).get("id");


let res=await fetch("videos.json");


let videos=await res.json();


let video=videos.find(v=>v.id==id);



document.getElementById("player").src=
video.video;


document.getElementById("title").innerHTML=
video.title;


document.getElementById("avatar").src=
video.avatar;


document.getElementById("channel").innerHTML=
video.channel;


document.getElementById("views").innerHTML=
video.views+" · "+video.time;


document.getElementById("description").innerHTML=
video.description;



let box=document.getElementById("recommend");


videos.forEach(v=>{


if(v.id!=video.id){


box.innerHTML+=`

<div class="card">

<img class="cover" src="${v.cover}">

<h3>${v.title}</h3>

</div>

`;

}


});


}


loadVideo();
