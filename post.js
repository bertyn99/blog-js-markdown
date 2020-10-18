import marked from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'
//class post

module.exports = class Posts {
    constructor(title, date, author, slug) {
        this.title = title,
            this.date = date,
            this.author = author,
            this.slug = slug
    }


    async getContent() {
        const response = await fetch(`/db/${this.slug}.md`);
        const data = response.text();
    }





}