# Portfolio de Mathis Brefdent

Site statique (HTML / CSS / JS), sans framework ni étape de build : il suffit d'ouvrir `index.html` ou de le publier tel quel.

## Structure

```
index.html      Page principale (présentation, compétences, projets, parcours, contact)
projets.html    Détail des projets avec galeries photos, filtres et agrandissement des photos
css/style.css   Styles (couleurs modifiables dans la section :root, en haut du fichier)
js/main.js      Thème clair/sombre, menu mobile, filtres, lightbox, animations
assets/         Images optimisées (JPEG, max. 1600 px), rangées par projet
```

## Ajouter ou modifier un projet

1. Mets l'image dans `assets/<projet>/` (JPEG, ~1600 px de large pour garder un site léger).
2. Dans `projets.html`, copie une section `<article class="project" ...>` et change `id`, `data-cat`, le texte et les images. Les catégories de filtre sont `hackintosh`, `virtualisation`, `embarque`, `selfhost` ; pour en créer une, ajoute un bouton `.filter` avec le même `data-filter`.
3. Dans `index.html`, copie une carte `<article class="card">` pour la faire apparaître sur la page d'accueil.

## Publier sur GitHub Pages

1. Crée un dépôt GitHub (par exemple `portfolio`, ou `ton-pseudo.github.io` pour l'adresse la plus courte).
2. Envoie tous les fichiers à la racine du dépôt (`index.html` doit être à la racine).
3. **Settings → Pages → Source : Deploy from a branch → `main` / `(root)` → Save**.
4. Après une minute, le site est en ligne sur `https://ton-pseudo.github.io/portfolio/`.

## Confidentialité

Ne publie pas ton CV complet : il contient ta date de naissance et ton numéro de téléphone. Le site n'affiche volontairement que ton e-mail.
