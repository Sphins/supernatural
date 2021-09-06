export default class SupernaturalItemSheet extends ItemSheet {
    get template() {
        console.log(`supernatural | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/supernatural/template/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        console.log(data);

        return data;
    }
}