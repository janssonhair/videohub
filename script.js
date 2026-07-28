let videos = [];


fetch("videos.json")
.then(res => res.json())
.then(data => {

videos = data;

showVideos(videos);

});



function showVideos(list){

let box=document.getElementById("videos");

box.innerHTML="";


list.forEach(v=>{


box.innerHTML += `

<div class="card">

<img src="${v.cover}">

<div class="info">

<h3>${v.title}</h3>

<p>${v.category}</p>

<a href="${v.url}" target="_blank">
▶ 播放视频
</a>

</div>

</div>

`;

});


}
