data = [{
        'img1' : 'asset/foto syaviq.jpg',
        'img2' : 'asset/foto syaviq.jpg',
        'title': 'Web E-Commerce',
        'subtitle': 'Uyung later', 
        'desc' : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni animi. Esse aliquam blanditiis rem"
}, {
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
        container.innerHTML +=
        ` <div class="project">
        <div class="img-project">
                <img src="${element.img1}"
                        alt="">
                <img src="${element.img2}"
                        alt="">
        </div>
        <div class="desc-project">
                <h1>${element.title}</h1>
                <h2>${element.subtitle}</h2>
                <p>${element.desc}</p>
        </div>
        <button class="read-more">Read More</button>
</div>`
});

