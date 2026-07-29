let allVideos=[];



async function loadVideos(){


const res=await fetch("videos.json");


allVideos=await res.json();


showVideos(allVideos);


}



function showVideos(list){


let box=document.getElementById("videos");


box.innerHTML="";


list.forEach(v=>{


box.innerHTML+=`

<div class="card">


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


<p>

${v.description}

</p>


</div>


</div>


`;


});


}





function filterCategory(category){


if(category==="全部"){

showVideos(allVideos);

return;

}


let result=allVideos.filter(v=>

v.category===category

);


showVideos(result);


}





document.getElementById("search")
.addEventListener("input",function(){


let key=this.value.toLowerCase();


let result=allVideos.filter(v=>{


return (

v.title.toLowerCase().includes(key)

||

v.category.toLowerCase().includes(key)

||

v.channel.toLowerCase().includes(key)

);


});


showVideos(result);


});




loadVideos();
