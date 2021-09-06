import supernaturalItemSheet from "./sheet/supernaturalitemsheet.js";
import supernaturalActorSheet from "./sheet/supernaturalactorsheet.js";

Hooks.once("init", () => {
    console.log("supernatural | Initialisation du système Fil d'argent");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("supernatural", supernaturalItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("supernatural", supernaturalActorSheet, { makeDefault: true });
})