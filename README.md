# packetcodeofficial.github.io


: Installer la version LTS de node JS

: vérifier dans une console que node et npm sont bien installé
: avec la commande node -v et npm -v
: Installer la dernière version d'angular sur votre machine en Global

: avec la commande npm install -g @angular/cli (-g pour global à la machine et pas au projet !)
: Tester l'installation avec la commande ng version (attention il vaux mieux relancer une console)
: Pour créer un projet, se mettre dans le répertoire souhaiter et lancer la commande

: ng new nomPorjet --skip-tests
: Il vous demande pour ajouter auto le router on dit "y"
: Et on choisi le style avec scss
: Pour la DataViz -> installer la librairie ngx-chart avec la commande npm i @swimlane/ngx-charts --save

: Vérifier également dans le fichier package.json en racine si @swimlane est bien cité
: Ajouter la ligne d'import dans le app.module.ts dans la partie import : [] ->
: NgxChartsModule avec l'import import { NgxChartsModule } from "@swimlane/ngx-charts"
: Couper VS Code, et relancer dans la raçine du projet !!! et bien vérifier dans le terminal que l'on soit dedans !

: lancé le projet avec la commande ng serve --port 4200
: Si vous obtenez une erreur comme quoi le systeme ne pas pas lancer de script bla bla bla, lancer la commande suivante
: Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "Unrestricted" (une fois faite, elle reste valable à vie)
: Si vous obtenez une erreur de types manquant genre d3-scales et d3-selection lancez les deux commandes suivantes
: npm i --save-dev @types/d3-selection
: npm i --save-dev @types/d3-scale
: le app.compo.html contient le code de base prévu par angular, ne laisser que la ligne du router <router-outlet>

: Materialize : https://materializecss.com/

: ajouter au besoin une librairie css comme materialize -> ajouter les deux lignes suivante dans le index.html de la racine dans le <head>

: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

: <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

: pour créer un compo, lancer la commande suivante dans un terminal dans la racine du projet: ng g c folder/nomCompo
: ne pas oublier une petite navbar, et votre routage !
: ajouter par exemple dans le app.routing.module.ts dans le tableau des routes -> { path : "url", component : nomCompo }
: n'oubliez pas que les liens de navigation ne sont pas des <a href="url"> mais bien <a routerLink="path">
