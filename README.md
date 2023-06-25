# express-exo

## Questions

1. Ajoutez la route "/about" qui renvoie la page about.html


2. Actuellement, si aucun tag n'est sélectionné, il y a une erreur.

   *Ajoutez une route qui renvoie tous les shows et fix ainsi ce problème*


3. Actuellement, en cas d'erreur 404 (comme pour api/ping), le process plante.
   
   *Rectifiez app.js pour, en cas d'erreur qaund on demande du JSON, renvoie une erreur en JSON : `{'error': 404}`*

4. Ajoutez une route /api/ping contenant le code suivant :

   ```js
   res.set('Content-Type', 'application/json; charset=utf-8');
   res.send(JSON.stringify({'ping': 'pong'}));
   ```


5. Basculez le style dans un fichier propre, contenu dans *stylesheets*


6. Basculez le scripting dans un fichier propre, contenu dans un dossier *javascripts*


7. Finalisez la méthode "ping" qui retournera la différence entre un `Date.now()` avant l'appel et après le résultat de l'appel

