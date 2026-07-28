const SUPABASE_URL = "https://dxvhibiteowkjfiadeu.supabase.co";
const SUPABASE_KEY = "sb_publishable_QKWrisOZxBkl1k59dMbfeQ_FbCeIEbx";


async function loadVideos(){

const response = await fetch(
`${SUPABASE_URL}/rest/v1/videos`,
{
headers:{
apikey:SUPABASE_KEY,

}
}
);


const videos = await response.json();


let box=document.getElementById("videos");

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
