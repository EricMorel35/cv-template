var dateformat = require("dateformat");

var date = dateformat(new Date(), 'yyyy');

module.exports = {
    document: {
        title: "Mona MOREL" //Test
    },
    contact: {
        title: 'Contact',
        item1: {
            caption: 'Adresse ',
            data: '6 rue des forgerons<br>35410 Nouvoitou'
        },
        item2: {
            caption: 'Téléphone ',
            data: '06-07-45-72-43'
        },
        item3: {
            caption: 'E-Mail ',
            data: `<a href="mailto:mona.guinel@yahoo.com?subject=Contact">mona.guinel@yahoo.com</a>`
        }
    },
    skills: {
        title: 'Compétences',
        item1:{
            subject: 'Patience / Créativité'
        },
        item2:{
            subject: 'Empathie / Sens de l\'écoute'
        },
        item3:{
            subject: 'Respect du secret professionnel'  
        },
        item4:{
            subject: 'Travail en équipe / Organisation'
        },
        item5:{
            subject: 'Ponctualité / Gestion du temps'
        }
    },
    aboutMe: {
        firstName: 'Mona',
        lastName: 'Morel',
        position: 'Auxiliaire de puériculture',
        summary: `Autonome et enthousiaste, j’aime animer des activités éducatives et ludiques,
assurer la sécurité des enfants et favoriser leur socialisation.
Bienveillante et organisée, je recherche un poste d'Auxiliaire de puériculture,
pour mettre en pratique mes connaissances et contribuer au bien-être des
enfants dans un environnement stimulant et sécurisant.`
    },
    experience:{
        title : 'Expériences',
        item1: {
            period: {
                start: "Depuis 2012"
            },
            location: 'St Erblon / 35',
            firm: 'La Poste / CDI',
            position: 'Factrice',
            summary: `- Distribution du courrier et des colis aux adresses résidentielles et commerciales<br> 
    - Collecte des lettres et colis à déposer<br> 
    - Respect des délais de livraison et qualité́ du service client<br> 
    - Proposition de services additionnels comme la vente de timbres, l'enregistrement de lettres recommandées et la gestion des réclamations<br> 
    - Bonne relation avec les clients en fournissant des informations précises et en répondant à leurs questions<br> 
    - Exécution rapide et efficace des tâches assignées<br>
    - Collaboration en équipe en communiquant, en partageant les idées et en mutualisant les efforts`
        },
	item2: {
            period: {
                start: "2010",
                end: "2011",
            },
            location: 'Redon / 35',
            firm: 'Mairie de Redon / Contrat d\'Accompagnement à l\'Emploi',
            position: 'Agent de services en écoles primaires et Animatrice (ALSH)',
            summary: `- Nettoyage des différentes infrastructures<br> 
- Surveillance des élèves durant les repas<br>
- Animation de groupes (activités manuelles, observation des étoiles, etc…)`
        },
	item3: {
	    period: {
                start: "2007"
            },
            location: 'Douala / Cameroun',
            firm: 'Orphelinat St Jean de Deïdo / Stage d\'un mois',
            position: 'Animatrice pour enfants',
            summary: `- Organisation de jeux et activités en plein air pour favoriser l'épanouissement des enfants.<br>
- Assistance aux enfants dans l'apprentissage des compétences de vie comme la propreté et l'habillage.<br>
- Encadrement des enfants pendant les repas et les siestes.`
	}		
    },
    education: {
        title: 'Diplômes',
        item1: {
            period: {
                end: 2011
            },
            location: 'Nantes / 44',
            school: 'CEMEA',
            degree: 'Brevet d\'Aptitude aux Fonctions d\'Animateur (BAFA)',
            summary: ``
        },
        item2: {
            period: {
                end: 2008
            },
            location: 'St Jacut les Pins / 56',
            school: 'Lycée d\'Enseignement Général et Technologique Privé (LEGTP)',
            degree: 'Baccalauréat Professionnel Services en Milieu Rural',
            summary: 'Mention Bien'
        },
        item3: {
            period: {
                end: 2006
            },
            location: 'St Jacut les Pins / 56',
            school: 'Lycée d\'Enseignement Général et Technologique Privé (LEGTP)',
            degree: 'Brevet d\'Aptitude Professionnelle Agricole Services aux Personnes',
            summary: ''
        } 
    },
    interests: {
        title: 'Centres d\'intérêts',
        item1: {
            icon: 'icon--crea',
            caption: 'Loisirs créatifs<br> (bijoux, quilling, dessins,...)'
        },
	item2: {
            icon: 'icon--cuisine',
            caption: 'Cuisine (pâtisserie)'
        },
        item3: {
            icon: 'icon--open-book',
            caption: 'Ecriture / Lecture'
        }
    }
};
