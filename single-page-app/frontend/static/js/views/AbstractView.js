// all view classes will inherit abstractview

export default class {
    constructor(params) {
        this.params = params;
        console.log(this.params);
    }

    // set/update page title
    setTitle(title) {
        document.title = title;
    }

    // this will be overridden and return Html
    async getHtml() {
        return "";
    }
}