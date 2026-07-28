let allVideos = [];


// 加载视频

async function loadVideos(){

    const response = await fetch("videos.json");

    allVideos = await response.json();

    showVideos(allVideos);

}



// 显示视频

function showVideos(videos){

    const box = document.getElementById("videos");

    box.innerHTML = "";


    videos.forEach(v=>{


        box.innerHTML += `

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


                <a href="${v.url}" target="_blank">
                ▶ 播放视频
                </a>


            </div>


        </div>

        `;


    });


}



// 搜索功能

document.getElementById("search")
.addEventListener("input",function(){


    let keyword=this.value.toLowerCase();


    let result=allVideos.filter(v=>{


        return (

        v.title.toLowerCase().includes(keyword)

        ||

        v.category.toLowerCase().includes(keyword)

        ||

        v.channel.toLowerCase().includes(keyword)

        );


    });


    showVideos(result);


});




// 分类筛选

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



loadVideos();
