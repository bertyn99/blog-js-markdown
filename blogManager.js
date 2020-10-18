import Post from './post.js'

module.exports = class BlogManager {
    constructor() {
        this.blog = [],
            this._container = document.querySelector("main")
    }

    set view(dom) {
        this._container.innerHTML = ""
        this._container.append(dom)
    }
    render(vue) {
        this.getList()
        if (!vue || vue == "") {
            return this.renderListView()
        }
    }

    async getList() {
        const response = await fetch('/db/posts.json');
        const data = response.json();
        this.blog = data.map((jsonPost) => new Post(jsonPost));
    }
    renderListView() {
        const list = document.querySelector('#list').content.cloneNode(true);
        this.getList()
        for (const item of this.blog) {
            list.append()
        }
        this.view = list
    }

    getItemList() {
        const item = document.querySelector('#list-item').content.cloneNode(true);
    }

    renderArticle(article) {
        const post = document.querySelector('#article').content.cloneNode(true);

        post.querySelector('.article-title').textContent = article.title
        post.querySelector('.article-description').textContent = article.description
        post.querySelector('.article-author').textContent = article.author
        this.view = post
    }



}