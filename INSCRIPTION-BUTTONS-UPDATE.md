# Mise à Jour des Boutons d'Inscription

## Modifications Effectuées

### 1. Bouton Modal "S'inscrire maintenant" (formations.html)

**Avant:**
```html
<button class="...">S'inscrire maintenant</button>
```

**Après:**
```html
<a id="modalInscriptionBtn" href="index.html#contact" class="...">
    S'inscrire maintenant
</a>
```

**Fonctionnalité:**
- Le bouton redirige vers le formulaire de contact
- Le lien est dynamiquement mis à jour avec les informations de la formation
- Le message est pré-rempli avec les détails de la formation

### 2. Boutons Cartes Immobilières (formations.html)

#### Carte T - Transaction Immobilière
**Lien mis à jour:**
```
index.html#contact?formation=carte-t&message=Je souhaite m'inscrire à la formation Transaction Immobilière (Carte T). Merci de me recontacter pour finaliser mon inscription.
```

#### Carte G - Gestion Immobilière
**Lien mis à jour:**
```
index.html#contact?formation=carte-g&message=Je souhaite m'inscrire à la formation Gestion Immobilière (Carte G). Merci de me recontacter pour finaliser mon inscription.
```

### 3. Script de Pré-remplissage (index.html)

**Ajouté à la fin du fichier:**
- Détecte les paramètres URL `formation` et `message`
- Pré-remplit automatiquement le champ message du formulaire
- Sélectionne automatiquement le type de formation dans le dropdown

## Fonctionnement

### Depuis le Modal de Formation

1. L'utilisateur clique sur "Détails →" d'une formation
2. Le modal s'ouvre avec les informations complètes
3. L'utilisateur clique sur "S'inscrire maintenant"
4. Redirection vers `index.html#contact` avec paramètres:
   - `formation`: ID de la formation (ex: dev-web, carte-t)
   - `message`: Message pré-rédigé avec le nom de la formation

### Depuis les Cartes Immobilières

1. L'utilisateur clique sur "Obtenir ma Carte T/G"
2. Redirection directe vers le formulaire de contact
3. Message pré-rempli spécifique à la carte demandée

### Sur le Formulaire de Contact

1. La page charge avec les paramètres URL
2. Le script JavaScript détecte les paramètres
3. Le champ "Message" est automatiquement rempli
4. Le dropdown "Type de formation" est pré-sélectionné
5. L'utilisateur n'a plus qu'à remplir ses coordonnées

## Mapping des Formations

Le script mappe les IDs de formation aux options du dropdown:

```javascript
{
    'dev-web': 'digital',
    'dev-mobile': 'digital',
    'data-science': 'digital',
    'cybersecurite': 'digital',
    'intelligence-artificielle': 'digital',
    'cloud-computing': 'digital',
    'management': 'management',
    'gestion-projet': 'management',
    'communication': 'management',
    'marketing-digital': 'autre',
    'ecommerce': 'autre',
    'techniques-vente': 'autre',
    'comptabilite': 'finance',
    'controle-gestion': 'finance',
    'fiscalite': 'finance',
    'sst': 'autre',
    'hygiene-resto': 'autre',
    'hygiene-entreprise': 'autre'
}
```

## Avantages

### Pour l'Utilisateur
✅ Gain de temps - pas besoin de retaper le nom de la formation
✅ Moins d'erreurs - le nom de la formation est correct
✅ Expérience fluide - transition naturelle vers l'inscription
✅ Contexte préservé - sait exactement quelle formation l'intéresse

### Pour HelloForma
✅ Meilleur taux de conversion - moins de friction
✅ Données structurées - sait quelle formation génère des leads
✅ Suivi facilité - peut analyser quelles formations sont populaires
✅ Moins de questions - le message initial est clair

## Exemple de Flux Utilisateur

1. **Page Formations** → Clique sur "Détails" de "Développement Web"
2. **Modal** → Lit les informations, clique "S'inscrire maintenant"
3. **Formulaire Contact** → Voit le message pré-rempli:
   ```
   Je souhaite m'inscrire à la formation "Développement Web" 
   (40h, Digital & Technologies). Merci de me recontacter 
   pour finaliser mon inscription.
   ```
4. **Utilisateur** → Remplit nom, email, téléphone
5. **Envoi** → HelloForma reçoit une demande claire et complète

## Tests Recommandés

- [ ] Tester chaque bouton "S'inscrire maintenant" du modal
- [ ] Tester les boutons "Obtenir ma Carte T/G"
- [ ] Vérifier que le message est bien pré-rempli
- [ ] Vérifier que le dropdown est bien pré-sélectionné
- [ ] Tester sur mobile et desktop
- [ ] Vérifier que le formulaire s'envoie correctement

## Notes Techniques

- Les paramètres URL sont encodés avec `encodeURIComponent()`
- Le décodage se fait automatiquement avec `decodeURIComponent()`
- Le script utilise `URLSearchParams` pour parser les paramètres
- Compatible avec tous les navigateurs modernes
- Fonctionne même si JavaScript est désactivé (lien simple vers contact)
