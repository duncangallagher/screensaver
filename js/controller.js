var show_data = [
    {
        "title": "The Workplace",
        "font": "'Inconsolata', monospace",
        "color": "#fff",
        "tags": ["Sitcom", "Irreverant", "Bizarre"],
        "image": "img/workplace.jpg"
    },
    {
        "title": "Vampire Journals",
        "font": "'Montez', cursive",
        "color": "#BF2200",
        "tags": ["Thrilling", "Drama", "Teen"],
        "image": "img/vampire-journals.jpg"
    },
    {
        "title": "CROSSERTON",
        "font": "'Overpass', sans-serif",
        "color": "#fff",
        "tags": ["Romance", "Drama", "Era"],
        "image": "img/crosserton.jpg"
    },
    {
        "title": "DIM",
        "font": "'Montserrat', sans-serif",
        "color": "#fff",
        "tags": ["Scifi", "Mind-bending", "Drama"],
        "image": "img/light.jpg"
    },
    {
        "title": "THE KING'S GAMBLE",
        "font": "'Andada Pro', serif",
        "color": "#fff",
        "tags": ["Psychological", "Rousing", "Drama"],
        "image": "img/kings-gamble.jpg"
    },
    {
        "title": "Normal Things",
        "font": "",
        "color": "",
        "tags": ["Scifi", "Comedy", "Teen"],
        "image": ""
    }
]

var i = 0;
var active_show = show_data[i];

const slideShowData = Vue.createApp({
    data() {
        return {
            active_show
        }
    },
    created() {
        this.updateShow();
        setInterval(() => {
            this.updateShow();
        }, 15000)
    },
    methods: {
        updateShow() {
            if (i == show_data.length) {
                i = 0;
            }
            this.active_show = show_data[i++];
        },
        cancelAutoUpdate() {
            clearInterval(this.timer);
        },
        beforeDestroy() {
            this.cancelAutoUpdate();
        }
    }
}).mount('#app');