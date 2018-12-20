import {TodoListModel} from "@NF/Models";
import {UIComponent} from "./UIComponent";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>Liste</h1>
			<form action="#/">
				<input class="new-todo" placeholder="Que faire?" autofocus>
			</form>
		</header>
		<section class="main">
			<input class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list"></ul>
		</section>
	</section>
`;

// Classe à compléter...
export class TodoListUI extends UIComponent {

    constructor(public model: TodoListModel, root: HTMLElement | string) {
        super(model, root);
        console.log( "Il faut injecter le template HTML dans la balise racine", this.root, "du composant TodoListUI");

        // Etape 0: Identifier dans le DOM les balises qui m'intéressent

        // Etape 1: On traduit les événements issus du HTML en commandes du noyau fonctionnel

        // Etape 2: Traduire les événements du Noyau fonctionnel en commandes à l'IHM

    }
}





