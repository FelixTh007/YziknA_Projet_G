const publications = [
    {
      nomEntreprise: "Acme Corporation",
      heurePublication: "14:23:00",
      datePublication: "2024-06-24",
      contenu: "Nous recherchons un développeur web front-end talentueux pour rejoindre notre équipe dynamique ! Développez des interfaces utilisateur attrayantes et réactives pour nos applications web.",
      type: "Informatique",
      competencesRequises: ["Développement web front-end", "JavaScript", "React", "CSS"]
    },
    {
      nomEntreprise: "Beta Solutions",
      heurePublication: "11:55:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un analyste de données expérimenté pour nos projets passionnants ! Analysez des ensembles de données complexes et extrayez des informations précieuses pour nos clients.",
      type: "Données",
      competencesRequises: ["SQL", "Python", "Tableau", "Power BI"]
    },
    {
      nomEntreprise: "Gamma Industries",
      heurePublication: "09:30:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe marketing et participez à des campagnes innovantes ! Créez du contenu engageant et attirez de nouveaux clients pour notre marque.",
      type: "Marketing",
      competencesRequises: ["Marketing digital", "SEO", "Réseaux sociaux", "Création de contenu"]
    },
    {
      nomEntreprise: "Delta Consulting",
      heurePublication: "16:00:00",
      datePublication: "2024-06-24",
      contenu: "Nous recherchons un consultant en gestion pour accompagner nos clients ! Élaborez des stratégies d'affaires efficaces et aidez nos clients à atteindre leurs objectifs.",
      type: "Gestion",
      competencesRequises: ["Stratégie d'entreprise", "Gestion de projet", "Analyse financière", "Négociation"]
    },
    {
      nomEntreprise: "Epsilon Technologies",
      heurePublication: "10:45:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un ingénieur réseau pour assurer la sécurité et la performance de notre infrastructure ! Configurez et gérez des réseaux complexes pour garantir une connectivité stable.",
      type: "Informatique",
      competencesRequises: ["Réseaux TCP/IP", "Cybersécurité", "Cisco", "Linux"]
    },
    {
      nomEntreprise: "Zeta Innovations",
      heurePublication: "13:15:00",
      datePublication: "2024-06-24",
      contenu: "Développez votre carrière en tant que designer UX/UI dans notre équipe créative ! Concevez des interfaces utilisateur intuitives et esthétiques pour nos produits numériques.",
      type: "Design",
      competencesRequises: ["UX/UI", "Figma", "Adobe XD", "Principes de design"]
    },
    {
      nomEntreprise: "Eta Systems",
      heurePublication: "08:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de support technique et aidez nos clients à résoudre leurs problèmes ! Offrez un excellent service client et résolvez les problèmes techniques efficacement.",
      type: "Support",
      competencesRequises: ["Dépannage informatique", "Communication efficace", "Résolution de problèmes", "Patience"]
    },
    {
      nomEntreprise: "Theta Enterprises",
      heurePublication: "12:30:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un rédacteur web talentueux pour créer du contenu engageant et informatif ! Rédigez des articles de blog, des newsletters et d'autres contenus pour notre site web.",
      type: "Marketing",
      competencesRequises: ["Rédaction web", "SEO", "Grammaire", "Style de rédaction clair et concis"]
    },
    {
      nomEntreprise: "Kappa Industries",
      heurePublication: "17:15:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un chef de projet expérimenté pour gérer des projets complexes et assurer leur succès ! Planifiez, exécutez et livrez des projets dans les délais et selon le budget.",
      type: "Gestion",
      competencesRequises: ["Gestion de projet", "Leadership", "Communication efficace", "Résolution de problèmes"]
    },
    {
      nomEntreprise: "Lambda Solutions",
      heurePublication: "15:00:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un développeur back-end talentueux pour créer des API robustes et évolutives ! Concevez et développez des systèmes back-end efficaces pour nos applications web.",
      type: "Informatique",
      competencesRequises: ["Développement back-end", "Java", "Python", "Bases de données"]
    },
    {
      nomEntreprise: "Mu Solutions",
      heurePublication: "12:45:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de marketing digital et boostez la visibilité de notre marque ! Gérez des campagnes de marketing digital et analysez les résultats pour optimiser les performances.",
      type: "Marketing",
      competencesRequises: ["Marketing digital", "SEO", "SEM", "Google Analytics"]
    },
    {
      nomEntreprise: "Nu Enterprises",
      heurePublication: "10:30:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un graphiste créatif pour concevoir des visuels attrayants pour nos supports marketing ! Créez des designs accrocheurs pour nos brochures, affiches et autres supports.",
      type: "Design",
      competencesRequises: ["Graphisme", "Adobe Photoshop", "Adobe Illustrator", "Principes de design"]
    },
    {
      nomEntreprise: "Xi Technologies",
      heurePublication: "09:15:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un administrateur système pour gérer notre infrastructure informatique ! Assurez la sécurité, la stabilité et la performance de nos systèmes.",
      type: "Informatique",
      competencesRequises: ["Administration système", "Linux", "Windows", "Réseaux"]
    },
    {
      nomEntreprise: "Omicron Industries",
      heurePublication: "14:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de vente et développez votre carrière commerciale ! Vendez nos produits et services à des clients potentiels et concluez des affaires.",
      type: "Vente",
      competencesRequises: ["Vente", "Négociation", "Communication efficace", "Prospection"]
    },
    {
      nomEntreprise: "Pi Solutions",
      heurePublication: "11:45:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un spécialiste du marketing de contenu pour créer du contenu engageant pour notre blog et nos réseaux sociaux ! Rédigez des articles, des posts et d'autres contenus pour attirer et fidéliser notre audience.",
      type: "Marketing",
      competencesRequises: ["Marketing de contenu", "Rédaction web", "SEO", "Réseaux sociaux"]
    },
    {
      nomEntreprise: "Rho Enterprises",
      heurePublication: "09:30:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un développeur mobile pour créer des applications iOS et Android attractives ! Concevez et développez des applications mobiles natives pour nos utilisateurs.",
      type: "Informatique",
      competencesRequises: ["Développement mobile", "Swift", "Java", "Android Studio"]
    },
  
  
    {
      nomEntreprise: "Sigma Solutions",
      heurePublication: "14:20:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un ingénieur qualité pour garantir la qualité de nos logiciels ! Testez et validez nos logiciels pour assurer une expérience utilisateur optimale.",
      type: "Informatique",
      competencesRequises: ["Assurance qualité logicielle", "Tests logiciels", "Méthodologies de test", "Débogage"]
    },
    {
      nomEntreprise: "Tau Enterprises",
      heurePublication: "12:15:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un responsable des ressources humaines pour gérer notre équipe et ses talents ! Recrutez, développez et fidélisez les meilleurs talents pour notre entreprise.",
      type: "Ressources Humaines",
      competencesRequises: ["Gestion des ressources humaines", "Recrutement", "Formation et développement", "Gestion des performances"]
    },
  
    {
      nomEntreprise : " Upsilon Industries",
      heurePublication: "10:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de support client et offrez une expérience client exceptionnelle ! Assistez nos clients et résolvez leurs problèmes de manière efficace et professionnelle.",
      type: "Support",
      competencesRequises: ["Service client", "Communication efficace", "Résolution de problèmes", "Patience"]
    },
    {
      nomEntreprise: "Phi Industries",
      heurePublication: "15:30:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un chef de produit pour développer et lancer de nouveaux produits ! Concevez, planifiez et lancez des produits qui répondent aux besoins du marché.",
      type: "Produit",
      competencesRequises: ["Gestion de produit", "Développement produit", "Marketing produit", "Analyse du marché"]
    },
    {
      nomEntreprise: "Chi Solutions",
      heurePublication: "13:15:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un spécialiste du marketing d'influence pour promouvoir notre marque sur les réseaux sociaux ! Collaborez avec des influenceurs pour accroître notre visibilité et notre engagement.",
      type: "Marketing",
      competencesRequises: ["Marketing d'influence", "Réseaux sociaux", "Création de contenu", "Marketing numérique"]
    },
    {
      nomEntreprise: "Psi Enterprises",
      heurePublication: "11:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de développement commercial et développez de nouvelles opportunités ! Identifiez et prospectez de nouveaux clients pour faire croître notre entreprise.",
      type: "Vente",
      competencesRequises: ["Développement commercial", "Prospection", "Négociation", "Relation client"]
    },
    {
      nomEntreprise: "Omega Solutions",
      heurePublication: "08:45:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un comptable pour gérer nos finances et garantir la conformité ! Gérez les comptes, préparez les états financiers et assurez la conformité aux réglementations.",
      type: "Finance",
      competencesRequises: ["Comptabilité", "Finance d'entreprise", "Analyse financière", "Logiciels de comptabilité"]
    },
    {
      nomEntreprise: "Zeta Industries",
      heurePublication: "15:00:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un responsable marketing pour élaborer et mettre en œuvre des stratégies marketing ! Développez et exécutez des plans marketing pour atteindre nos objectifs commerciaux.",
      type: "Marketing",
      competencesRequises: ["Marketing stratégique", "Marketing numérique", "Gestion de marque", "Analyse du marché"]
    },
     {
      nomEntreprise: "Eta Solutions",
      heurePublication: "12:30:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un responsable du service client pour superviser et améliorer notre équipe d'assistance ! Gérez et motivez l'équipe de support client pour offrir une expérience client exceptionnelle.",
      type: "Support",
      competencesRequises: ["Gestion d'équipe", "Leadership", "Service client", "Résolution de problèmes"]
    },
    {
      nomEntreprise: "Theta Enterprises",
      heurePublication: "10:15:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un spécialiste SEO pour optimiser notre site web et améliorer notre visibilité en ligne ! Augmentez le trafic organique de notre site web grâce à des techniques de référencement efficaces.",
      type: "Marketing",
      competencesRequises: ["SEO", "Marketing de contenu", "Analyse Web", "Mots-clés"]
    },
    {
      nomEntreprise: "Iota Ventures",
      heurePublication: "17:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de conception UX/UI et créez des interfaces utilisateur intuitives ! Concevez des interfaces utilisateur attrayantes et conviviales pour nos produits numériques.",
      type: "Design",
      competencesRequises: ["UX/UI", "Figma", "Adobe XD", "Principes de design"]
    },
    {
      nomEntreprise: "Kappa Industries",
      heurePublication: "14:45:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un analyste marketing pour analyser les données et mesurer l'efficacité de nos campagnes marketing ! Collectez et analysez des données marketing pour optimiser nos stratégies.",
      type: "Marketing",
      competencesRequises: ["Analyse marketing", "Google Analytics", "Tableau", "Intelligence d'affaires"]
    },
    {
      nomEntreprise: "Lambda Solutions",
      heurePublication: "12:30:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un développeur full-stack pour créer des applications web performantes et évolutives ! Maîtrisez les technologies front-end et back-end pour développer des applications complètes.",
      type: "Informatique",
      competencesRequises: ["Développement web", "JavaScript", "Python", "Bases de données"]
    },
    {
      nomEntreprise: "Mu Solutions",
      heurePublication: "10:15:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de community management et animez notre communauté en ligne ! Engagez et fidélisez notre communauté sur les réseaux sociaux et les forums.",
      type: "Marketing",
      competencesRequises: ["Community management", "Réseaux sociaux", "Création de contenu", "Modération"]
    },
    {
      nomEntreprise: "Nu Enterprises",
      heurePublication: "17:00:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un spécialiste du marketing par e-mail pour créer et diffuser des campagnes e-mail engageantes ! Rédigez et envoyez des newsletters et des emails marketing pour promouvoir nos produits et services.",
      type: "Marketing",
      competencesRequises: ["Marketing par e-mail", "Email marketing", "AWeber", "MailChimp"]
    },
    {
      nomEntreprise: "Xi Technologies",
      heurePublication: "14:45:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un spécialiste du référencement payant pour gérer nos campagnes publicitaires en ligne ! Augmentez notre visibilité et notre trafic web grâce à des campagnes Google Ads et Facebook Ads efficaces.",
      type: "Marketing",
      competencesRequises: ["Marketing payant", "Google Ads", "Facebook Ads", "SEM"]
    },
    {
      nomEntreprise: "Omicron Industries",
      heurePublication: "12:30:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un spécialiste juridique pour conseiller notre entreprise sur les questions juridiques ! Assurez la conformité juridique de nos activités et rédigez des contrats et autres documents juridiques.",
      type: "Juridique",
      competencesRequises: ["Droit des affaires", "Droit des contrats", "Propriété intellectuelle", "Litige"]
    },
    {
      nomEntreprise: "Pi Solutions",
      heurePublication: "10:15:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un spécialiste des ressources humaines pour gérer la paie et les avantages sociaux ! Gérez la paie des employés et administrez les programmes d'avantages sociaux.",
      type: "Ressources Humaines",
      competencesRequises: ["Paie", "Avantages sociaux", "Droit du travail", "Gestion des ressources humaines"]
    },
    {
      nomEntreprise: "Rho Enterprises",
      heurePublication: "17:00:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de vente et développez votre expertise en vente B2B ! Vendez nos produits et services à des entreprises clientes et établissez des relations durables.",
      type: "Vente",
      competencesRequises:[ "Vente B2B", "Prospection", "Négociation", "Relation client"]
    },
    {
      nomEntreprise: "Sigma Solutions",
      heurePublication: "14:45:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un spécialiste du marketing de contenu pour créer des vidéos attrayantes pour nos réseaux sociaux ! Produisez des vidéos engageantes et informatives pour promouvoir notre marque.",
      type: "Marketing",
      competencesRequises: ["Marketing de contenu", "Production vidéo", "Montage vidéo", "Création de scénarios"]
    },
    {
      nomEntreprise: "Tau Enterprises",
      heurePublication: "12:30:00",
      datePublication: "2024-06-24",
      contenu: "Cherchons un spécialiste de la sécurité informatique pour protéger nos systèmes contre les cybermenaces ! Assurez la sécurité de notre infrastructure informatique et prévenez les intrusions.",
      type: "Informatique",
      competencesRequises: ["Sécurité informatique", "Cybersecurité", "Réseaux", "Tests d'intrusion"]
    },
  {
      nomEntreprise: "Upsilon Industries",
      heurePublication: "10:15:00",
      datePublication: "2024-06-24",
      contenu: "Rejoignez notre équipe de développement logiciel et contribuez à des projets passionnants ! Développez des logiciels innovants et de haute qualité pour nos clients.",
      type: "Informatique",
      competencesRequises: ["Développement logiciel", "Java", "C#", "Méthodologies de développement agiles"]
    },
    {
      nomEntreprise: "Phi Industries",
      heurePublication: "17:00:00",
      datePublication: "2024-06-24",
      contenu: "Besoin d'un traducteur pour adapter notre contenu dans différentes langues ! Traduisez notre site web, nos documents marketing et autres contenus dans les langues cibles.",
      type: "Langues",
      competencesRequises: ["Traduction", "Langues étrangères", "Localisation", "Terminologie"]
    }
]

module.exports = publications;