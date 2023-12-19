# colorValidator - module pour Node.js
colorValidator, verifie si commence par # suivi de 3 ou 6 caractères hexadécimaux


## installation
Placer le fichier colorValidator.js dans le dossier modules


## utilisation
Dans le fichier, ajouter sur la première ligne
```
const { colorValidator } = require('./colorValidator')
```

Exemple d'utilisation
```
// exemple d'utilisation avec un code couleur hexadécimal
const codeCouleurHexValide = '#1a2b3c'
const codeCouleurHexInvalide = '#xyz123'

// vérifier la validité des codes couleurs
console.log('Le code couleur ' + codeCouleurHexValide + ' est ' + (colorValidator(codeCouleurHexValide) ? 'valide' : 'invalide'))
console.log('Le code couleur ' + codeCouleurHexInvalide + ' est ' + (colorValidator(codeCouleurHexInvalide) ? 'valide' : 'invalide'))
```
