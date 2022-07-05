import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Dashboard");
    }

    // async bc you might want to render/load this from the server side
    async getHtml() {
        return `
            <h1> Welcome!</h1>
            <p> This is your dashboard</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}