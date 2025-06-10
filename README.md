# Prévisionnel Financier Template

Ce dépôt fournit un exemple minimal de site web pour présenter un prévisionnel financier.
Il contient:

- Une page HTML simple dans `public/index.html`.
- Les styles et scripts séparés dans `src/css` et `src/js`.
- Des composants JavaScript avec un test Jest (`tests/finance.test.js`).
- Un script Python `generate_excel.py` permettant de générer un fichier Excel
  nommé `financial_template.xlsx` contenant un exemple de tableau.

## Installation des dépendances

```bash
npm install
```

## Génération du fichier Excel

```bash
python3 generate_excel.py
```

## Lancement des tests

```bash
npm test
```

Cette structure peut servir de point de départ pour créer un prévisionnel
financier pour des projets audiovisuels similaires à The Voice.
