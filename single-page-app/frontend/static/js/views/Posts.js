import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    // async bc you might want to render/load this from the server side
    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing posts</p>
        `;
    }
}