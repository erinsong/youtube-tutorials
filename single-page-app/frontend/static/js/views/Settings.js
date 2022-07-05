import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    // async bc you might want to render/load this from the server side
    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your settings</p>
        `;
    }
}