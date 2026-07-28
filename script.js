const SUPABASE_URL = "https://dxvhibiteowkjfiadeu.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dmhoaWJpdGVvd2tqZmlhZGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMDc0OTEsImV4cCI6MjEwMDc4MzQ5MX0.LOHFJW5L78bOnjyiim9ZbKa9edvShpuO7ZpG1Oy2O48";


async function loadVideos(){

const response = await fetch(
`${SUPABASE_URL}/rest/v1/videos`,
{
headers:{
apikey: SUPABASE_KEY,
Authorization:`Bearer ${SUPABASE_KEY}`
}
}
);


const videos = await response.json();


let box = document.getElementById("videos");

box.innerHTML="";


videos.forEach(v=>{

box.innerHTML += `

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


loadVideos();
