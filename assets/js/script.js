class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url
    }

    setInicio() {
        console.log("Este metodo es para realizar un cambio en la URL del video")
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this.id = id;
    };

    setInicio(time) {
        this._url += `?start=${time}`;
    };

    playMultimedia() {
        const iframe = document.querySelector(this.id)
        iframe.setAttribute("src", this.url)
    };
};

const Musica = new Reproductor(
    "https://www.youtube.com/embed/o-hzTmeCqN0",
    "#musica"
);

const Pelicula = new Reproductor(
    "https://www.youtube.com/embed/-AwLMRgcEoA",
    "#pelicula"
);

const Serie = new Reproductor(
    "https://www.youtube.com/embed/eT62thMtLp8",
    "#serie"
);

Musica.setInicio(10)
Serie.setInicio(5)

const collapseOneElement = document.querySelector("#headingOne")
collapseOneElement.addEventListener("click", function () {
    Musica.playMultimedia();
})

const collapseTwoElement = document.querySelector("#headingTwo")
collapseTwoElement.addEventListener("click", function () {
    Pelicula.playMultimedia();
})

const collapseThreeElement = document.querySelector("#headingThree")
collapseThreeElement.addEventListener("click", function () {
    Serie.playMultimedia();
})







