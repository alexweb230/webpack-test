export default class Post {
    constructor(title, img) {
        this.title = title;
        this.img = img;
        this.date = new Date();
    }

    toStr(){
       return  JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img
        })
    }
}
