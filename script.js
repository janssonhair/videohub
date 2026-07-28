async function loadVideos(){

    const response = await fetch("videos.json");

    const videos = await response.json();

    const box = document.getElementById("videos");

    box.innerHTML = "";


    videos.forEach(v => {

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


loadVideos();
