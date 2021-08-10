var show_data = [
    {
        "title": "Girl of Many Colors",
        "tags": ["Obscure", "Quirky", "Heartfelt"],
        "image": "img/gomc.jpg"
    },
    {
        "title": "show 2 test",
        "tags": ["test", "test", "test"],
        "image": "img/gomc.jpg"
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
        }, 20000)
    },
    methods: {
        updateShow() {
            this.active_show = show_data[i++];
            console.log("show updated");
        },
        cancelAutoUpdate() {
            clearInterval(this.timer);
        },
        beforeDestroy() {
            this.cancelAutoUpdate();
        }
    }
}).mount('#app');