import { Project, Expertise, TimelineEvent, LabConcept, TeamMember } from "./types";

export const TRANSLATED_DATA: {
  [key: string]: {
    projects: Project[];
    expertises: Expertise[];
    timeline: TimelineEvent[];
    labConcepts: LabConcept[];
    teamMembers: TeamMember[];
  };
} = {
  fr: {
    projects: [
      {
        id: "ebene-cultural-center",
        name: "Le Complexe Culturel d'Ébène",
        location: "Yaoundé, Cameroun",
        category: "Institutional",
        shortDescription: "Un complexe civique monumental combinant l'esthétique de la sculpture sur bois ancestrale et un béton moderne bas-carbone à haute performance passive.",
        description: "Conçu comme un dialogue entre l'histoire et le futur technologique, le Complexe Culturel d'Ébène est un site public de 12 000 m² abritant des archives nationales, une bibliothèque et un centre des arts du spectacle. Émergeant des collines de Yaoundé, ses piliers de structure rendent hommage aux colonnes traditionnelles en bois sculpté de l'Ouest du Cameroun, réinterprétées en béton à ultra-haute performance. Le complexe recourt à une ventilation naturelle guidée par les microclimats locaux et une forte inertie thermique pour assurer un confort acoustique et thermique optimal sans climatisation mécanique lourde.",
        challenge: "Le climat tropical de Yaoundé présente un rayonnement solaire intense et une humidité saisonnière élevée, des contraintes difficiles pour la conservation des archives délicates. Le défi consistait à maintenir des galeries d'exposition stables et tempérées avec une dépendance énergétique nulle du réseau, en respectant rigoureusement l'écologie locale.",
        concept: "Le squelette structurel imite les ramifications de la canopée forestière primaire. Des enveloppes de forte masse thermique sont combinées avec des doubles persiennes en bambou sur mesure qui filtrent la lumière tout en favorisant la circulation d'air frais ascendante dans l'atrium central.",
        response: "Nous avons intégré un labyrinthe de refroidissement passif. L'air frais souterrain est acheminé par des canaux géothermiques, déshumidifié naturellement au contact de profonds dômes de maçonnerie, puis distribué dans les galeries. Le noyau utilise des briques de terre compressée d'argile locale de Yaoundé, stabilisées à la cendre volcanique.",
        technicalStrategy: "La modélisation thermodynamique sous processus BIM a permis d'ajuster l'orientation des façades pour ombrager naturellement les voies publiques d'accès. La canopée de toiture récupère 100% des eaux pluviales réinjectées dans les jardins botaniques indigènes entourant le site.",
        experience: "Dès l'entrée dans l'atrium monumental, les visiteurs sont accueillis par des puits de lumière spectaculaires filtrant à travers des colonnades hélicoïdales. Les panneaux acoustiques sculptés dans du bois d'Okoumé du Gabon absorbent les bruits pour créer une atmosphère de solennité et de recueillement propice à l'apprentissage.",
        impact: "Depuis son inauguration, le centre fonctionne avec une consommation d'énergie inférieure de 78% aux normes régionales standard, s'imposant comme le principal poumon social du centre de Yaoundé avec plus de 1 500 visiteurs quotidiens.",
         year: "2024",
        client: "Ministère de la Culture & Collectivités Locales",
        area: "12 400 m²",
        budget: "$18.5M USD",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200"
        ],
        facts: [
          { label: "Année de Livraison", value: "2024" },
          { label: "Système Structurel", value: "Composite BFUP & Bambou" },
          { label: "Performance Énergétique", value: "Standard Net-Zero PassivHaus" },
          { label: "Empreinte Carbone", value: "-45% par rapport à la moyenne régionale" }
        ],
        drawings: [
          "M1 : Plan de Masse – Intégration topographique sur les collines de Yaoundé échelle 1:500",
          "S1 : Schéma de Rayonnement – Étude d'ombrage de la façade lors des équinoxes extrêmes",
          "P1 : Coupe de Vent – Vecteurs de circulation d'air frais via le labyrinthe souterrain"
        ]
      },
      {
        id: "canopee-ogouee",
        name: "La Canopée de l'Ogooué",
        location: "Libreville, Gabon",
        category: "Commercial",
        shortDescription: "Un chef-d'œuvre à usage mixte sur le front de mer de Libreville, inspiré par l'organisation verticale de la forêt équatoriale.",
        description: "Situé sur la façade littorale de Libreville, La Canopée de l'Ogooué redéfinit l'élégance résidentielle et corporative en Afrique Centrale. S'étendant sur 25 000 m², le complexe offre des terrasses botaniques en cascade, des jardins suspendus et une façade thermo-régulée en bois noble. Entièrement construit en essences de Padouk et de Kevazingo gérées durablement, accompagnées d'agrégats de sable de basalte local, ce projet est un laboratoire d'expérimentation pour l'architecture bois tropicale haut de gamme.",
        challenge: "Le défi principal résidait dans l'agression saline permanente du climat marin et la pression des vents côtiers de Libreville, tout en insérant d'importants massifs de verdure verticaux qui nécessitent une gestion hydrique d'une grande précision.",
        concept: "Calqué sur la stratification de la forêt gabonaise, le bâtiment exploite de grands débords de toits protecteurs qui ombragent les galeries commerciales du rez-de-chaussée. Ces surplombs accueillent des couches de terre végétale agissant comme d'excellents régulateurs de chaleur.",
        response: "Nous avons conçu une façade dynamique pourvue de brise-soleil orientables en Padouk massif. Ceux-ci pivotent de manière autonome grâce à des capteurs d'ensoleillement, protégeant du rayonnement direct tout en favorisant la pénétration de la brise marine dans les espaces intérieurs.",
        technicalStrategy: "Une structure en lamellé-collé de bois de Padouk certifié a été conçue pour porter l'ensemble. Les liaisons métalliques en acier inoxydable marin sont invisibles et traitées contre la corrosion saline, résolvant totalement les faiblesses des ponts thermiques liés au béton traditionnel.",
        experience: "Des allées commerciales ombragées du rez-de-chaussée jusqu'aux appartements baignés de lumière, l'expérience est profondément tactile et sereine. Les essences de bois tropicaux locaux, l'horizon marin à perte de vue et le bruissement des jardins suspendus créent une harmonie intime avec le milieu marin.",
        impact: "Ce projet démontre la pérennité et la noblesse des bois de pays d'Afrique Centrale comme éléments structurels porteurs modernes, ouvrant la voie à une nouvelle filière de construction d'excellence.",
        year: "2023",
        client: "Gabon Urban Development Corp",
        area: "25 000 m²",
        budget: "$34.0M USD",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200",
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200"
        ],
        facts: [
          { label: "Année de Livraison", value: "2023" },
          { label: "Essence Structurelle", value: "Lamellé-Collé d'Essences Nobles" },
          { label: "Réduction Thermique", value: "-6.5°C sur l'enveloppe de façade" },
          { label: "Ressource Eau", value: "140 000 Litres de stockage d'eaux pluviales" }
        ],
        drawings: [
          "A1 : Élévation Maritime – Profil de déviation des forces de vent sur le front de mer",
          "D2 : Détail de Façade – Liaison mécanique des brise-soleil pivotants en Padouk"
        ]
      },
      {
        id: "mvolye-towers",
        name: "Les Éco-Tours Hybrides de Mvolyé",
        location: "Yaoundé, Cameroun",
        category: "Residential",
        shortDescription: "Un ensemble résidentiel contemporain intégrant des structures mixtes bois-béton et des mantilles en briques de terre volcanique.",
        description: "Les Éco-Tours Hybrides de Mvolyé proposent une alternative durable à la densification urbaine. Ce groupe de trois tours de 12 étages s'appuie sur des noyaux structurels en béton bas-clinker entourés d'une ossature bois en éco-matériaux de pays. La façade se distingue par une mantille ajourée façonnée à la main avec des briques d'argile de terre rouge cuites au feu de biomasse locale. Ce double écran s'inspire du principe du 'moucharabieh', générant un jeu d'ombres douces et un courant d'air permanent qui garantit la fraîcheur des appartements sans climatisation.",
        challenge: "La métropole de Yaoundé fait face à une prolifération de gratte-ciels en verre importé inadaptés au climat équatorial, provoquant une surconsommation énergétique majeure due au refroidissement mécanique artificiel.",
        concept: "Nous avons opté pour une 'Sophistication Vernaculaire' : appliquer le savoir-faire de la briqueterie traditionnelle camerounaise à la grande hauteur, à travers des calculs de porosité précis permettant une luminosité agréable sans apport thermique négatif.",
        response: "Nous avons mis en place une coopérative locale de cuisson propre en exploitant les écorces et rebuts des scieries voisines. Chaque brique a été pressée avec de l'argile de latérite mélangée à du sable basaltique de la région pour une résistance et une couleur rouge-ocre profonde.",
        technicalStrategy: "L'écart d'un mètre entre la mantille de briques de protection et le vitrage thermique permet de créer une cheminée de ventilation passive. L'air chaud s'élève et s'échappe par des ouïes supérieures, aspirant l'air frais filtré par la riche végétation du socle.",
        experience: "À l'intérieur, les appartements dégagent une atmosphère chaleureuse et apaisante. Les motifs lumineux projetés par le moucharabieh dessinent des ombres évolutives sur de splendides sols en terre cuite. Les larges vérandas offrent une voute ombragée face aux collines verdoyantes de la cité.",
        impact: "120 logements d'exception livrés via une chaîne d'approvisionnement 100% continentale, réinjectant plus de 4 millions d'euros dans l'industrie manufacturière de briques de terre cuite du Cameroun.",
        year: "2025",
        client: "Mvolye Green Urbanism Co-op",
        area: "18 400 m²",
        budget: "$22.5M USD",
        imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
        ],
        facts: [
          { label: "Année de Livraison", value: "2025" },
          { label: "Matériau Principal", value: "Brique Volcanique & Bois CLT de pays" },
          { label: "Index Main d'Œuvre", value: "92% d'artisans et ouvriers camerounais" },
          { label: "Climatisation Passive", value: "98% d'autonomie thermique annuelle" }
        ],
        drawings: [
          "B1 : Densité Algorithmique – Calepinage de la mantille pour déviation solaire optimale",
          "S2 : Coupe Structurelle – Détail d'assemblage bois-métal de la charpente hybride"
        ]
      }
    ],
    expertises: [
      {
        id: "architecture",
        name: "Architecture",
        heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000",
        tagline: "Concevoir des espaces qui créent de la valeur",
        presentation: "Chez FOCUS INTERNATIONAL GROUP, l'architecture est bien plus qu'un exercice de conception. Elle constitue un outil de transformation capable de répondre aux enjeux fonctionnels, économiques, environnementaux et humains de chaque projet.\n\nNotre approche repose sur une compréhension approfondie des besoins du client, des usages futurs et du contexte territorial afin de concevoir des espaces durables, performants et porteurs de sens.\n\nQu'il s'agisse d'équipements publics, de bâtiments tertiaires, de programmes résidentiels ou de projets à vocation institutionnelle, nous développons des solutions architecturales qui concilient identité, innovation et excellence technique.",
        methodology: [
          "Analyse & compréhension des enjeux : Étude du contexte, des besoins, des contraintes techniques et des objectifs stratégiques du projet.",
          "Conception architecturale : Développement du concept architectural, définition des usages, optimisation des espaces et intégration des principes de durabilité.",
          "Développement technique : Production des études techniques, coordination des expertises et préparation opérationnelle du projet.",
          "Accompagnement à la réalisation : Suivi de l'exécution, contrôle de la qualité et accompagnement du maître d'ouvrage jusqu'à la livraison."
        ],
        cases: ["Le Complexe Culturel d'Ébène", "La Canopée de l'Ogooué"]
      },
      {
        id: "urban-planning",
        name: "Urbanisme & Grands Projets",
        heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000",
        tagline: "Penser les territoires, accompagner leur transformation",
        presentation: "L'urbanisation rapide de l'Afrique constitue à la fois un défi majeur et une formidable opportunité de développement.\n\nChez FOCUS INTERNATIONAL GROUP, nous accompagnons les collectivités, les institutions, les aménageurs et les investisseurs dans la planification et la conception de projets urbains capables de répondre aux besoins actuels tout en anticipant les exigences des générations futures.\n\nNotre approche vise à créer des territoires attractifs, fonctionnels et résilients, où les infrastructures, les espaces publics, les activités économiques et les usages quotidiens s'articulent harmonieusement pour améliorer durablement la qualité de vie.\n\nQu'il s'agisse de quartiers, de zones d'activités, de pôles urbains ou de grands projets d'aménagement, nous développons des solutions adaptées aux réalités sociales, économiques et environnementales des territoires africains.",
        methodology: [
          "Diagnostic territorial & analyse stratégique : Étude du territoire, identification des enjeux, analyse des dynamiques urbaines et définition des objectifs de développement.",
          "Planification & conception urbaine : Élaboration des schémas d'aménagement, organisation des fonctions urbaines et structuration des espaces publics et des infrastructures.",
          "Développement des projets : Conception des équipements, coordination des expertises techniques et intégration des principes de durabilité et de résilience.",
          "Accompagnement à la mise en œuvre : Assistance aux maîtres d'ouvrage, suivi des opérations et accompagnement des projets jusqu'à leur réalisation."
        ],
        cases: ["Lomé Urban Gateway Masterplan", "Yaoundé River Green Corridor"]
      },
      {
        id: "interior-design",
        name: "Architecture d'Intérieur & Mobilier",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
        tagline: "Concevoir des espaces habités, élégants et intemporels",
        presentation: "Chez FOCUS INTERNATIONAL GROUP, l’architecture d’intérieur prolonge la conception architecturale en créant des espaces à la fois fonctionnels, sensibles et raffinés.\n\nNous imaginons des intérieurs minimalistes et contemporains, où la matière, la lumière et les usages dialoguent pour offrir des environnements harmonieux et durables.\n\nEn parallèle, nous développons des pièces de mobilier sur mesure, conçues comme des éléments architecturaux à part entière, en collaboration avec des artisans locaux et des savoir-faire d’excellence.",
        methodology: [
          "Conception sur mesure : Définition des espaces intérieurs et création de mobilier adapté aux usages et à l’identité du projet.",
          "Choix des matériaux : Sélection de matériaux durables, nobles et adaptés aux exigences esthétiques et techniques du projet.",
          "Ambiance & confort : Intégration des principes de confort, d’acoustique et de lumière pour optimiser l’expérience des usagers.",
          "Mise en valeur des espaces : Conception d’ambiances cohérentes, élégantes et fonctionnelles, en harmonie avec l’architecture globale."
        ],
        cases: ["Résidences Diplomatiques Libreville", "Siège Social Focus Yaoundé"]
      }
    ],
    timeline: [
      {
        year: "2015",
        title: "Diplômé de l'École Africaine des Métiers de l'Architecture et de l'Urbanisme (EAMAU)",
        description: "Obtention du diplôme d'architecte et début d'une carrière orientée vers les grands projets de développement."
      },
      {
        year: "2015 – 2017",
        title: "Cabinet CODUC",
        description: "Participation au suivi architectural du Stade Omnisports de Bafoussam, projet majeur à portée nationale."
      },
      {
        year: "2017 – 2019",
        title: "Bati Concept Plus",
        description: "Renforcement de son expertise en conception, coordination et gestion de projets architecturaux complexes."
      },
      {
        year: "2019",
        title: "Création de FOCUS GROUP",
        description: "Lancement du cabinet avec l'ambition de contribuer au développement du continent à travers une architecture adaptée aux réalités africaines."
      },
      {
        year: "2020 – Aujourd'hui",
        title: "FOCUS INTERNATIONAL GROUP",
        description: "Développement du cabinet et accompagnement de projets institutionnels, résidentiels, tertiaires et urbains au Cameroun et en Afrique."
      },
      {
        year: "Aujourd'hui",
        title: "Transmission & engagement professionnel",
        description: "Enseignant à l'École Nationale Supérieure Polytechnique, conférencier et acteur engagé dans la promotion d'une architecture responsable et durable pour l'Afrique."
      }
    ],
    labConcepts: [
      {
        id: "smart-villages-dja",
        title: "Coopératives Intelligentes du Dja",
        category: "Smart Villages",
        tagline: "Un éco-système villageois circulaire alliant architectures en bambou, séchoirs solaires et biogaz en périphérie de la réserve du Dja.",
        description: "Situé en zone de transition écologique de la Réserve du Dja, ce projet d'étude vise à endiguer l'exode rural en créant des pôles agro-forestiers viables et autonomes. Construits en bambou structural de pays et terre stabilisée, ces espaces partagés s'articulent autour d'unités de transformation solaire et de stations de micro-méthanisation décentralisées.",
        renders: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"],
        researchObjectives: [
          "Déployer des toitures froides passives pour la protection et la déshydratation des récoltes.",
          "Optimiser les micro-centrales thermiques solaires pour l'autonomie des communautés.",
          "Valider l'intégrité structurelle du bambou local comme élément porteur permanent."
        ],
        materialsUsed: ["Bambou Structurel du Dja", "Pisé stabilisé aux liants de lignin locale", "Panneaux isolants de co-produits agricoles"]
      },
      {
        id: "floating-nzime",
        title: "Les Communautés Lacustres de Nzime",
        category: "Future African Cities",
        tagline: "Infrastructures flottantes résilientes anticipant la montée du niveau marin dans l'estuaire du littoral d'Afrique Centrale.",
        description: "Plutôt que de fuir l'élévation des océans, nous proposons d'épouser le milieu aquatique. Le plan expérimental de Nzime déploie des plateformes légères constituées de flotteurs en polymère recyclé haute densité et de structures légères en bois lamellé-collé, intégrant des espaces collectifs, des bassins d'aquaculture écologique et des toits solaires.",
        renders: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"],
        researchObjectives: [
          "Mesurer le comportement du lamellé-collé vernaculaire en milieu hautement salin et humide.",
          "Concevoir des conduits d'aspiration de brise marine pour la climatisation autonome des cellules.",
          "Intégrer des systèmes de phytorégénération d'épuration d'eau par les mangroves littorales."
        ],
        materialsUsed: ["Lamellé-Collé d'essence Padouk", "Flotteurs PEHD Recyclés de Haute Mer", "Filtres racinaires de Palétuviers"]
      },
      {
        id: "earth-cocoon",
        title: "Les Logements Cocoon de Terre",
        category: "Future Housing",
        tagline: "Impression 3D robotisée par empilement de terre crue argileuse sur des parcelles foncières complexes à Yaoundé.",
        description: "Comment offrir un habitat haut de gamme, accessible et totalement affranchi des importations ? Ce projet utilise un système d'extrusion de terre crue locale. Les parois nervurées améliorent la tenue mécanique tout en agissant comme régulateurs d'hygrométrie et de température face à la chaleur équatoriale.",
        renders: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"],
        researchObjectives: [
          "Adapter l'impression robotisée aux argiles latéritiques enrichies de fibres organiques (bananier, sisal).",
          "Calculer la géométrie de double-coque organique pour optimiser l'aérodynamique et la dissipation thermique.",
          "Générer des alvéoles de respiration internes tirant profit de l'évaporation de rosée matinale."
        ],
        materialsUsed: ["Argile Latéritique de Yaoundé", "Fibres naturelles de Sisal", "Cire végétale d'étanchéité à base de résidus de cacao"]
      }
    ],
    teamMembers: [
      {
        name: "NYANGON Steevy Princy",
        role: "Architecte ONAC — Associé Gérant & Principal",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
        bio: "Architecte ONAC diplômé, Steevy Princy assure la direction générale et artistique. Il pilote le développement stratégique de FOCUS INTERNATIONAL GROUP avec une vision d'excellence et de durabilité pour l'Afrique."
      },
      {
        name: "GWEHA DJOB NGUIMBOUS MICHEL",
        role: "Architecte ONAC — Collaborateur",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
        bio: "Architecte ONAC rigoureux, Michel apporte une expertise de haut niveau dans la coordination de chantiers complexes, garantissant la conformité structurelle et la qualité d'exécution des projets."
      },
      {
        name: "TAJOUEGO MEDIDJOU Geraude",
        role: "Architecte — Collaboratrice",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
        bio: "Spécialisée en planification d'espace et en architecture bioclimatique, Geraude allie maîtrise technique et sensibilité esthétique pour concevoir des intérieurs fluides et durables."
      },
      {
        name: "MENGUE Yan Vanel",
        role: "Architecte — Collaborateur",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
        bio: "Yan Vanel se consacre à l'optimisation fonctionnelle et environnementale des projets, traduisant les schémas conceptuels en solutions architecturales performantes."
      },
      {
        name: "ABOUA Willy Rodian",
        role: "Architecte — Collaborateur",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
        bio: "Willy Rodian intervient sur les aspects matériels et graphiques avancés des projets, alliant innovation formelle et intégrations architecturales de haute technicité."
      }
    ]
  },
  en: {
    projects: [
      {
        id: "ebene-cultural-center",
        name: "The Ebene Cultural Center",
        location: "Yaoundé, Cameroon",
        category: "Institutional",
        shortDescription: "A monumental civic complex merging ancestral Cameroonian wood-carving aesthetics with modern high-performance passive low-carbon concrete.",
        description: "Conceived as a dialogue between history and technological future, Le Complexe Culturel d'Ebène is a 12,000 m² public archive, national library, and performing arts center. Rising from the hills of Yaoundé, its monumental structural columns pay tribute to the traditional carved wooden pillars of the Grassfields region, reinterpreted in custom ultra-high-performance concrete. The complex uses natural ventilation guided by local microclimates and heavy thermal mass to achieve world-class acoustics and cooling without relying on intensive HVAC systems.",
        challenge: "The tropical climate of Yaoundé exhibits intense solar radiation and high seasonal humidity, which are typically destructive to delicate library collections and historical archives. The challenge was to maintain stable, climate-controlled preservation galleries and comfortable auditorium conditions with zero grid reliance, honoring the local ecology.",
        concept: "The structural skeleton mimics the cellular form of primary forest canopy branches. Thick thermal-mass envelopes are combined with custom double-skin bamboo shutters that filter incident solar rays while encouraging updrafts, creating a continuous convective cooling current across the central atrium.",
        response: "We integrated a localized passive cooling labyrinth. Cool underground air is drawn through subterranean channels, naturally dehumidified as it contacts deep masonry vaults, and delivered to the library galleries. The core of the building consists of double-wall natural clay bricks manufactured in Yaoundé, stabilized with natural volcanic ash, providing high thermal storage.",
        technicalStrategy: "By modeling dynamic thermal physics with BIM integration, we adjusted the massing profile to shade active public pathways. The iconic roof structure captures rain, channeling 100% of stormwater down gravity-fed filtration channels to water native botanical public parks surrounding the facility.",
        experience: "Upon entering the monumental atrium, visitors are embraced by dramatic light shafts filtering through double-helix concrete colonnades. Acoustic panels made of sustainably harvested Gabonese Okoumé wood absorb internal sound, reflecting calm, monumental stillness that encourages scholarship, culture, and deep reflection.",
        impact: "Since opening, the Cultural Center operates with 78% lower power consumption than code baselines, and has become the primary social anchor in central Yaoundé, hosting over 1,500 daily students and international researchers.",
        year: "2024",
        client: "Ministère de la Culture & Collectivités Locales",
        area: "12,400 m²",
        budget: "$18.5M USD",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200"
        ],
        facts: [
          { label: "Completion Year", value: "2024" },
          { label: "Structural Type", value: "UHPC & Bamboo Composite" },
          { label: "Energy Class", value: "Net-Zero PassivHaus Standard" },
          { label: "Embodied Carbon", value: "-45% vs regional baseline" }
        ],
        drawings: [
          "M1: Site Plan – Topographic integration with Yaoundé hills scales 1:500",
          "S1: Solar Radiation Map – Facade shade profile engineering under extreme equinox exposure",
          "P1: Ventilation Section – Deep masonry labyrinth subterranean cooling flow vectors"
        ]
      },
      {
        id: "canopee-ogouee",
        name: "The Ogooué Canopy",
        location: "Libreville, Gabon",
        category: "Commercial",
        shortDescription: "A waterfront mixed-use residential and commercial masterwork modeled after the vertical layers of equatorial canopies.",
        description: "Located on the sweeping coastal edge of Libreville, La Canopée de l'Ogooué redefines corporate and high-end residential architecture in Central Africa. Spanning 25,000 m², the building elevates Libreville's waterfront through cascading public terraces, multi-level botanical gardens, and custom-engineered modular timber facades. Built entirely with certified Gabonese Padouk and Kevazingo timbers alongside local basalt sands, this project is a global pilot for equatorial wooden architectures.",
        challenge: "The primary challenge was managing aggressive tidal wind pressures and corrosive marine air on a dense urban waterfront, while incorporating heavy columns of vertical gardens that require smart hydrology on tropical soils.",
        concept: "Mimicking the layering of Gabon's rainforest canopy, the structure uses high, dense overhangs that protect lower-level commercial boulevards. These overhangs support localized soils that buffer thermal heat transfer, creating microclimates of cool fresh air moving vertically through residential balconies.",
        response: "We engineered a modular facade system with dynamic, motorized marine-grade timber louvres. These rotate autonomously based on sun angle sensors, mitigating glare while encouraging optimal views and trade-winds to flow directly into open apartments.",
        technicalStrategy: "High-grade structural glulam made from certified Padouk wood was used for the primary frame. Timber members are connected with concealed stainless steel joints, certified to resist high humidity and sea-spray rust, eliminating typical concrete-induced thermal bridging.",
        experience: "From the maritime breeze of the ground floor boutique avenues to the serene, vertical high-rise apartments, the sensory palette is warm and tactile. The scent of local wood, continuous ocean views, and soft acoustic rustling from the integrated terrace gardens create a deep connection with coastal nature.",
        impact: "This project has proven the high durability of native African hardwoods as modern structural load-bearing materials, initiating a new sustainable forestry-architecture industrial loop in Gabon.",
        year: "2023",
        client: "Gabon Urban Development Corp",
        area: "25,000 m²",
        budget: "$34.0M USD",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200",
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200"
        ],
        facts: [
          { label: "Completion Year", value: "2023" },
          { label: "Timber Certification", value: "FSC Tropical Hardwood Glulam" },
          { label: "Thermal Reduction", value: "6.5°C reduction on outer skin temperature" },
          { label: "Rainwater Harvesting", value: "140,000 Liters storage for vertical ecology" }
        ],
        drawings: [
          "A1: Coastal Elevation – Multi-axial waterfront wind mitigation profiles",
          "D2: Facade Detail – Rotary glulam Padouk louvre structural joint layout"
        ]
      },
      {
        id: "mvolye-towers",
        name: "Mvolye Hybrid Eco-Towers",
        location: "Yaoundé, Cameroon",
        category: "Residential",
        shortDescription: "A cluster of dynamic residential high-rises utilizing timber-concrete hybrid frames and locally fired volcanic clay brick screens.",
        description: "Mvolye Hybrid Eco-Towers present a sustainable response to density in Yaoundé. The trio of 12-story residential buildings is supported by a solid, low-clinker concrete core wrapped in structural timber trusses. The outer facade is a sophisticated, hand-crafted architectural screen built using thousands of locally fired volcanic clay bricks. This screen acts as a gorgeous architectural veil ('mashrabiya'), allowing soft, naturally filtered shadow plays and constant interior drafts, ensuring the residences remain cool and comfortable without air conditioning.",
        challenge: "High-density urbanization in Central Africa often resorts to imported curtain-wall glass skyscrapers, causing terrible greenhouse trap effects and massive HVAC operational overhead.",
        concept: "We embraced 'Vernacular Sophistication' – scaling Cameroonian earthen screen brickwork to tall skyscraper structures, using advanced computer-calculated porous brick densities to maximize natural illumination while eliminating solar thermal gain.",
        response: "We established a localized, clean brick-firing cooperative using waste thermal biomass fuel from local sawmills. Each brick was molded using local red clays mixed with volcanic basalt sand to guarantee high structural hardness and rich, native red pigments.",
        technicalStrategy: "By separating the heavy privacy veil from the primary living glass line, we created a 1-meter thermodynamic ventilation flue. Heated air rises in this envelope and is drawn out the top, drawing fresh cooler air from the surrounding shaded base vegetation.",
        experience: "Inside, the spaces are characterized by elegant warmth. Light filters through brick patterns, painting ever-shifting graphic patterns on continuous local terracotta-tiled floors. Balconies are generous, framing panoramic views of Yaoundé's lush, mountainous landscapes.",
        impact: "120 premium residences completed with 100% African craft supply chains, diverting over $4M of construction capital straight into Cameroonian local material manufacturing loops.",
        year: "2025",
        client: "Mvolye Green Urbanism Co-op",
        area: "18,400 m²",
        budget: "$22.5M USD",
        imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000",
        images: [
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
        ],
        facts: [
          { label: "Completion Year", value: "2025" },
          { label: "Primary Material", value: "Sustainably Fired Volcanic Clay & CLT" },
          { label: "Local Labor Index", value: "92% Cameroonian craftsmen" },
          { label: "HVAC Avoidance", value: "98% passive internal cooling success" }
        ],
        drawings: [
          "B1: Porous Brick Vector – Algorithmic density layout for custom solar deflection",
          "S2: Structural Cross-Truss – Hybrid glulam-concrete joint detailing"
        ]
      }
    ],
    expertises: [
      {
        id: "architecture",
        name: "Architecture",
        heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000",
        tagline: "Designing spaces that create value",
        presentation: "At FOCUS INTERNATIONAL GROUP, architecture is far more than a design exercise. It is a tool for transformation capable of meeting the functional, economic, environmental, and human challenges of each project.\n\nOur approach is based on a deep understanding of our clients' needs, future user patterns, and the territorial context to design spaces that are sustainable, high-performing, and meaningful.\n\nWhether public facilities, commercial structures, residential complexes, or institutional projects, we develop architectural designs that reconcile identity, innovation, and technical excellence.",
        methodology: [
          "Analysis & understanding of challenges : Study of context, needs, technical constraints, and strategic project goals.",
          "Architectural design : Development of the architectural concept, definition of usage, space optimization, and integration of sustainability principles.",
          "Technical development : Production of technical studies, coordination of expertise, and operational project preparation.",
          "Assistance in implementation : Construction monitoring, quality control, and client support up to delivery."
        ],
        cases: ["Le Complexe Culturel d'Ebène", "La Canopée de l'Ogooué"]
      },
      {
        id: "urban-planning",
        name: "Urban Planning & Masterplans",
        heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000",
        tagline: "Planning territories, supporting their transformation",
        presentation: "The rapid urbanization of Africa presents both a major challenge and a tremendous opportunity for development.\n\nAt FOCUS INTERNATIONAL GROUP, we assist communities, institutions, developers, and investors in the planning and design of urban projects capable of meeting today's needs while anticipating the demands of future generations.\n\nOur approach aims to create attractive, functional, and resilient territories, where infrastructure, public spaces, economic activities, and daily uses articulate harmoniously to sustainably improve the quality of life.\n\nWhether districts, activity zones, urban hubs, or major development projects, we develop solutions adapted to the social, economic, and environmental realities of African territories.",
        methodology: [
          "Territorial diagnosis & strategic analysis : Study of the territory, identification of challenges, analysis of urban dynamics, and definition of development goals.",
          "Urban planning & design : Preparation of master plans, organization of urban functions, and structuring of public spaces and infrastructure.",
          "Project development : Design of facilities, coordination of technical expertise, and integration of sustainability and resilience principles.",
          "Assistance in implementation : Support to contractors, monitoring of operations, and supporting projects through to completion."
        ],
        cases: ["Lomé Urban Gateway Masterplan", "Yaoundé River Green Corridor"]
      },
      {
        id: "interior-design",
        name: "Interior Architecture & Furniture",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
        tagline: "Designing inhabited, elegant and timeless spaces",
        presentation: "At FOCUS INTERNATIONAL GROUP, interior architecture extends architectural design by creating spaces that are functional, sensitive, and refined.\n\nWe imagine minimalist and contemporary interiors, where materials, light, and usage converse to offer harmonious and sustainable environments.\n\nAt the same time, we develop bespoke furniture pieces, designed as architectural elements in their own right, in collaboration with local artisans and outstanding craft methods.",
        methodology: [
          "Bespoke design : Definition of interior spaces and creation of furniture adapted to the uses and identity of the project.",
          "Choice of materials : Selection of sustainable, noble materials adapted to the aesthetic and technical requirements of the project.",
          "Ambiance & comfort : Integration of comfort, acoustic, and lighting principles to optimize the user experience.",
          "Enhancing spaces : Design of coherent, elegant, and functional atmospheres, in harmony with the global architecture."
        ],
        cases: ["Embassy Residence Libreville", "Focus Head Offices Yaoundé"]
      }
    ],
    timeline: [
      {
        year: "2015",
        title: "Graduated from EAMAU",
        description: "Awarded structural degree from the Ecole Africaine des Métiers de l'Architecture et de l'Urbanisme, starting a career in architectural master planning."
      },
      {
        year: "2015 – 2017",
        title: "CODUC Practice",
        description: "Involved in the key architectural monitoring of the Bafoussam Omnisports Stadium, a national milestone project."
      },
      {
        year: "2017 – 2019",
        title: "Bati Concept Plus",
        description: "Deepened specialized skills in coordination, advanced technical design, and full-scale project management."
      },
      {
        year: "2019",
        title: "Establishment of FOCUS GROUP",
        description: "Founded the firm with the vision to shape sustainable African environments leveraging regional identity and local expertise."
      },
      {
        year: "2020 – Present",
        title: "FOCUS INTERNATIONAL GROUP",
        description: "Expanding the practice to execute premium institutional, residential, commercial, and complex urban commissions across the region."
      },
      {
        year: "Present",
        title: "Mentorship & Academic Advocacy",
        description: "Lecturing at the École Nationale Supérieure Polytechnique, acting as keynote advocate for the renaissance of sustainable tropical design."
      }
    ],
    labConcepts: [
      {
        id: "smart-villages-dja",
        title: "Dja Bio-Smart Cooperatives",
        category: "Smart Villages",
        tagline: "A circular smart village cluster integrating solar timber farming shelters with decentralized bio-gas loops near the Dja Reserve.",
        description: "Positioned on the buffer boundaries of the Dja Biosphere Reserve, this diagnostic concept eliminates traditional rural-to-urban brain drain by building self-sustaining smart village platforms. Constructed using high-grade bamboo structures and stabilized rammed earth, the village centers around solar-ventilated timber cooperative facilities, solar water desalination wells, and decentralized smart farming grids.",
        renders: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"],
        researchObjectives: [
          "Deploy self-cooling architectural canopies for high-yield food processing.",
          "Integrate local solar thermal engines for community grid-independence.",
          "Utilize native non-invasive structural bamboo for major structural frameworks."
        ],
        materialsUsed: ["Dja Structural Bamboo", "Rammed Earth with Local Lignin Binder", "Recycled Agri-waste acoustic boards"]
      },
      {
        id: "floating-nzime",
        title: "The Floating Communities of Nzime",
        category: "Future African Cities",
        tagline: "Resilient waterborne structures anticipating extreme sea-level rises in the lagoons of western Central Africa.",
        description: "We imagine the coastal cities of Gabon and Cameroon not retreating from water, but living within it. Nzime is an experimental floating masterplan constructed using high-buoyancy modular recycled polymer hulls layered with light glulam frameworks, acting as floating public plazas, biological fishing platforms, and self-powering solar micro-habitats.",
        renders: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"],
        researchObjectives: [
          "Hydrodynamics of modular glulam structures subject to ocean swell and corrosion.",
          "Passive sea-breeze microclimate chimneys for multi-level structures.",
          "Integrated biological greywater filtration loops utilizing marine mangroves."
        ],
        materialsUsed: ["FSC Certified Glulam Hardwoods", "Marine-grade Recycled HDPE Hulls", "Mangrove filtration cells"]
      },
      {
        id: "earth-cocoon",
        title: "The Earth Cocoon Apartments",
        category: "Future Housing",
        tagline: "Robotic compressed earth block 3D-printing on micro-sites around high-density Yaoundé.",
        description: "How can we scale affordable, luxury living with zero imports? The Earth Cocoon is a research project utilizing advanced semi-robotic extrusion of local Cameroonian clays, creating monumental, organically ribbed skyscraper housing that maintains comfortable interior temperatures under extreme outdoor heat.",
        renders: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"],
        researchObjectives: [
          "Robotic Clay Extrusion with local multi-mineral fibers (banana husk, bamboo).",
          "Dynamic shell geometry optimization to minimize wind drag and structural thickness.",
          "Self-hydrating cellular cavities within walls that cool spaces via sweat evaporation."
        ],
        materialsUsed: ["High-iron Yaoundé Clay Extrusion", "Sisal Fiber Reinforcements", "Cacao-husk natural waterproofing pigments"]
      }
    ],
    teamMembers: [
      {
        name: "NYANGON Steevy Princy",
        role: "ONAC Architect — Managing Partner & Principal",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
        bio: "An outstanding ONAC architect, Steevy Princy leads overall design and strategic development. He guides FOCUS INTERNATIONAL GROUP's vision towards high-performing, sustainable, and contextualized African architectural solutions."
      },
      {
        name: "GWEHA DJOB NGUIMBOUS MICHEL",
        role: "ONAC Architect — Collaborator",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
        bio: "A rigorous ONAC registered architect, Michel delivers supreme expertise in construction site coordination and technical detailing, ensuring perfect structural compliance."
      },
      {
        name: "TAJOUEGO MEDIDJOU Geraude",
        role: "Architect — Collaborator",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
        bio: "Specializing in spatial layouts and bioclimatic planning, Geraude blends elegant form manipulation with technical rigor to draft fluid, sustainable interiors."
      },
      {
        name: "MENGUE Yan Vanel",
        role: "Architect — Collaborator",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
        bio: "Yan Vanel handles passive design performance and structural detailing, translating conceptual volumes into highly durable, local-resource-based solutions."
      },
      {
        name: "ABOUA Willy Rodian",
        role: "Architect — Collaborator",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
        bio: "Willy Rodian develops advanced graphic representations, site strategies, and material optimization models, creating unique textures and innovative envelopes."
      }
    ]
  }
};

// Localized helper getters
export const getProjects = (lang: string) => TRANSLATED_DATA[lang === "fr" ? "fr" : "en"].projects;
export const getExpertises = (lang: string) => TRANSLATED_DATA[lang === "fr" ? "fr" : "en"].expertises;
export const getTimeline = (lang: string) => TRANSLATED_DATA[lang === "fr" ? "fr" : "en"].timeline;
export const getLabConcepts = (lang: string) => TRANSLATED_DATA[lang === "fr" ? "fr" : "en"].labConcepts;
export const getTeamMembers = (lang: string) => TRANSLATED_DATA[lang === "fr" ? "fr" : "en"].teamMembers;

// Fallback legacy getters for absolute backwards compatibility
export const PROJECTS_DATA = TRANSLATED_DATA.en.projects;
export const EXPERTISES_DATA = TRANSLATED_DATA.en.expertises;
export const TIMELINE_DATA = TRANSLATED_DATA.en.timeline;
export const LAB_CONCEPTS = TRANSLATED_DATA.en.labConcepts;
export const TEAM_MEMBERS = TRANSLATED_DATA.en.teamMembers;

// Common generic dictionary for labels, actions, links
export const INTERFACE_DICT: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  fr: {
    backToIndex: "← Retour à l'index",
    exploreBrief: "Explorer l'Étude",
    viewBiography: "Voir la biographie du associé",
    closeProfile: "Fermer le profil",
    returnExhibition: "← Retour au catalogue des projets",
    commissionFacts: "Détails de la Commission",
    performanceMetrics: "Indicateurs de Performance Technique",
    certifiedCompliance: "CONFORT ET NORMES TECHNIQUES EAMAU",
    inquireDiagnostic: "Faire une demande d'étude bioclimatique",
    smartVillages: "Villages Intelligents",
    futureCities: "Villes Africaines du Futur",
    futureHousing: "Habitat de Demain",
    materialsReconceived: "Matériaux Réinventés",
    primaryResearchMatrix: "Matrice de Recherche Appliquée",
    designedAndEngineered: "Imaginé, conçu et calculé en Afrique Centrale et de l'Ouest. Chaque projet étudie la thermodynamique passive, la structure bois de pays et les argiles locales.",
    commissionArchive: "REGISTRE DES COMMISSIONS",
    ourProjects: "Nos Réalisations",
    exhibitionStatus: "Projets Réspertoriés",
    all: "Tous",
    residential: "Résidentiel",
    commercial: "Tertiaire & Commercial",
    institutional: "Institutionnel & Public",
    urbanDesign: "Urbanisme",
    aboutUs: "Le Cabinet",
    theFounder: "Le Fondateur",
    theFirm: "L'Agence",
    theLab: "Africa Design Lab",
    contactUs: "Inquire",
    inquiries: "Contact & Études",
    tagline: "Un cabinet d'architecture climato-passif et d'ingénierie d'excellence panafricain.",
    hqYaounde: "Studio Yaoundé — Cameroun",
    hqLibreville: "Studio Libreville — Gabon",
    bilingualAspiration: "Afrique francophone et anglophone",
    certifiedSovereignty: "Conception & Innovation Écologique Durable",
    discussProject: "Soumettre une étude de projet",
    discussSubtitle: "FOCUS INTERNATIONAL GROUP accompagne les États, les institutions publiques, les aménageurs et les investisseurs privés dans la conception et l’évaluation de leurs projets architecturaux et urbains.",
    clientName: "Nom du Client / Organisation *",
    corporateAffiliation: "Affiliation Corporative",
    targetSiteCountry: "Pays d'Implantation",
    typologyFocus: "Typologie du Projet",
    siteArea: "Surface du Site",
    capitalInvestment: "Budget d'Investissement Estimé",
    projectBrief: "Présentation de l'Intention & Cahier des Charges *",
    liveAIOptimizer: "Générer instantanément une étude de faisabilité bioclimatique assistée par IA",
    liveAISubtitle: "Invoque le moteur IA (modèle Gemini) entraîné sur la doctrine écologique de Princy NYANGON.",
    runningSolvers: "Calcul des variables thermiques...",
    submitInquiry: "Soumettre l'Inquiry",
    inquiryFiled: "Dossier Enregistré",
    inquirySuccessSubtitle: "Nous avons compilé vos spécifications. Princy NYANGON et notre comité d'ingénierie basé à Yaoundé étudieront votre dossier sous 48 heures.",
    fileNewProject: "Soumettre un autre projet",
    adviserActive: "CONSEILLER DES PROJETS BIOCLIMATIQUES",
    adviserSubtitle: "Activez l'analyse generative pour structurer instantanément vos paramètres thermiques, matériaux biosourcés et orientations bioclimatiques.",
    liveDiagnosticGenerated: "[RAPPORT DE FAISABILITÉ DYNAMIQUE EXPÉDIÉ]",
    netZeroOptimized: "Optimisation Éco-Passif",
    preliminaryBrief: "NOTE DE SYNTHÈSE DE L'ARCHITECTE",
    steevyVision: "VISION DE PRINCY & INERTIE",
    sovereignMaterials: "SOURCING DES MATÉRIAUX LOCAUX",
    passiveHVAC: "VENTILATION passive & PHYSIQUE",
    circulationMatrix: "FLUX ET ORGANISATION SPATIALE",
    resetInquiry: "RÉINITIALISER LES DONNÉES",
    feasibilityRef: "Rapport Faisabilité Réf"
  },
  en: {
    backToIndex: "← Return to index",
    exploreBrief: "Explore Brief",
    viewBiography: "View partner biography",
    closeProfile: "Close Profile",
    returnExhibition: "← Return to exhibition portfolio",
    commissionFacts: "Commission Facts",
    performanceMetrics: "Technical Performance Metrics",
    certifiedCompliance: "EAMAU-CERTIFIED DESIGN COMPLIANCE",
    inquireDiagnostic: "Inquire about this design diagnostic",
    smartVillages: "Smart Villages",
    futureCities: "Future African Cities",
    futureHousing: "Future Housing",
    materialsReconceived: "Materials Reconceived",
    primaryResearchMatrix: "Primary Reassessment Matrix",
    designedAndEngineered: "Designed and engineered directly across Central and West Africa. Each project represents a rigorous investigation into passive thermodynamics, noble timber glulams, and massive local brick systems.",
    commissionArchive: "COMMISSION ARCHIVE",
    ourProjects: "Our Projects",
    exhibitionStatus: "Projects Listed",
    all: "All",
    residential: "Residential",
    commercial: "Commercial",
    institutional: "Institutional",
    urbanDesign: "Urban Design",
    aboutUs: "The Firm",
    theFounder: "The Founder",
    theFirm: "The Studio",
    theLab: "Africa Design Lab",
    contactUs: "Inquire",
    inquiries: "Contact & Briefing",
    tagline: "A premium, climate-passive Pan-African architecture, urban planning, and advisory practice.",
    hqYaounde: "Studio Yaoundé — Cameroon",
    hqLibreville: "Studio Libreville — Gabon",
    bilingualAspiration: "Pioneering high-altitude tropical engineering",
    certifiedSovereignty: "Sustainable Material Sovereignty & Innovation",
    discussProject: "Submit a Project Study",
    discussSubtitle: "FOCUS INTERNATIONAL GROUP supports States, public institutions, developers, and private investors in the design and evaluation of their architectural and urban projects.",
    clientName: "Client / Organization Name *",
    corporateAffiliation: "Corporate Affiliation",
    targetSiteCountry: "Target Site Country",
    typologyFocus: "Typology Focus",
    siteArea: "Estimated Site Area",
    capitalInvestment: "Estimated Capital Investment",
    projectBrief: "Project Intent & Architectural Brief Description *",
    liveAIOptimizer: "Generate Live Generative AI Concept Feasibility Brief",
    liveAISubtitle: "Invokes partner Princy NYANGON's computational generative brief engines (Gemini Model) instantly.",
    runningSolvers: "Running Solvers...",
    submitInquiry: "Submit Inquiry Brief",
    inquiryFiled: "Inquiry Filed Securely",
    inquirySuccessSubtitle: "We have compiled your architectural parameters. Princy NYANGON and our senior partner board based in Yaoundé will evaluate this document within 48 business hours.",
    fileNewProject: "File New Project",
    adviserActive: "COMPUTATIONAL ADVISER ACTIVE",
    adviserSubtitle: "Toggle the Generative AI Concept switch to instantly construct custom material, thermodynamic, and programmatic studies.",
    liveDiagnosticGenerated: "[LIVE DIAGNOSTIC BRIEF GENERATED]",
    netZeroOptimized: "Net-Zero Optimized",
    preliminaryBrief: "PRELIMINARY PARTNER BRIEF",
    steevyVision: "PRINCY'S CRITICAL VISION",
    sovereignMaterials: "SOVEREIGN MATERIALS SOURCING",
    passiveHVAC: "PASSIVE THERMODYNAMICS",
    circulationMatrix: "PROPOSED CIRCULATION & SPACE MATRIX",
    resetInquiry: "RESET INQUIRY CORE",
    feasibilityRef: "Feasibility Study Code REF"
  }
};
