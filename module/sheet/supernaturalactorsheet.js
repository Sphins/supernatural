export default class supernaturalActorSheet extends ActorSheet {
    get template() {
        console.log(`supernatural | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/supernatural/template/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        console.log(data);

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.jetdeatt').click(this._onRollAtt.bind(this));
        html.find('.jetdecmp').click(this._onRollCmp.bind(this));
        html.find('.jetdedeg').click(this._onRollDeg.bind(this));
        html.find('.item-edit').click(this._onItemEdit.bind(this));
        html.find('.item-delete').click(this._onItemDelete.bind(this));
    }

    _onRollDeg(event) {
        console.log(event);
        const jetDdeg = event.currentTarget.dataset["dicedeg"];
        console.log(jetDdeg);
        const effets = event.currentTarget.dataset["effets"];
        const name = event.currentTarget.dataset["name"];
        const texte = "Dégats " + name + " : " + jetDdeg + " " + effets;
        let roll = new Roll(jetDdeg);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte
        });
    }

    getItemFromEvent = (ev) => {
        const parent = $(ev.currentTarget).parents(".item");
        return this.actor.getOwnedItem(parent.data("itemId"));
    }

    _onItemEdit(event) {
        const item = this.getItemFromEvent(event);
        item.sheet.render(true);
    }

    _onItemDelete(event) {
        const item = this.getItemFromEvent(event);
        let d = Dialog.confirm({
            title: "Suppression d'élément",
            content: "<p>Confirmer la suppression de '" + item.name + "'.</p>",
            yes: () => this.actor.deleteOwnedItem(item._id),
            no: () => {},
            defaultYes: false
        });
    }

    _onRollAtt(event) {
        const jetDAtt = event.currentTarget.dataset["diceatt"];
        const name = event.currentTarget.dataset["name"];
        const jetDAttformule = "2d6+" + jetDAtt;
        const texte = "Jet de " + name + " : " + jetDAttformule;
        let roll = new Roll(jetDAttformule);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte
        });
    }

    _onRollCmp(event) {
        console.log(event);
        const jetDCmp = event.currentTarget.dataset["diceatt"];
        console.log(jetDCmp);
        const name = event.currentTarget.dataset["name"];
        console.log(name);
        const jetDCmpformule = "2d6+2+" + jetDCmp;
        const texte = "Jet de " + name + " : " + jetDCmpformule;
        let roll = new Roll(jetDCmpformule);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte
        });
    }
}