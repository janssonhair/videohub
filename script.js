async function loadVideos(){

    const response = await fetch("videos.json");

    const videos = await response.json();

    const box = document.getElementById("videos");

    box.innerHTML = "";


    videos.forEach(v => {

        box.innerHTML += `

        <div class="card">

            <img src="${v.cover}">

            <div class="info">

                <h3>${v.title}</h3>

                <p>${v.category}</p>

                <p>${v.description}</p>

                <a href="${v.url}" target="_blank">
                    ▶ 播放视频
                </a>

            </div>

        </div>

        `;

    });

}


loadVideos();
