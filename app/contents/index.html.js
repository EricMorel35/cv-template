var dateformat = require("dateformat");

var date = dateformat(new Date(), 'yyyy');

module.exports = {
    document: {
        title: "Mona GUINEL"
    },
    contact: {
        title: 'Contact',
        item1: {
            caption: 'Téléphone ',
            data: '06-07-45-72-43'
        },
        item2: {
            caption: 'E-Mail ',
            data: '<a href="mailto:mona.guinel@yahoo.com?subject=Contact">mona.guinel@yahoo.com</a>'
        },
        item3: {
            caption: 'Adresse ',
            data: `6 rue des forgerons<br>35410 Nouvoitou`
        }
    },
    skills: {
        title: 'Compétences',
        item1:{
            subject: 'Patience'
        },
        item2:{
            subject: 'Empathie'
        },
        item3:{
            subject: 'Aptitudes aux premiers secours'
        },
        item4:{
            subject: 'Sens de l\'écoute'
        },
        item5:{
            subject: 'Respect du secret professionnel'
        },
        item6:{
            subject: 'Travail en équipe'
        },
	item7:{
            subject: 'Créativité'
        },
	item8:{
            subject: 'Ponctualité'
        },
        item9:{
            subject: 'Organisation'
        }
    },
    lang: {
        title: 'Langues',
        data: {
            lang1: {
                caption: 'Français ',
                level: 'langue maternelle'
            }
        }
    },
    aboutMe: {
        firstName: 'Mona',
        lastName: 'Guinel',
        position: 'Auxiliaire de puériculture',
        summary: `Souhaitant débuter une reconversion professionnelle, je recherche une formation d'auxiliaire de puériculture.<br>Bienveillante et organisée, j'aimerais contribuer au bien-être des enfants dans un environnement stimulant et sécurisant.`
    },
    experience:{
        title : 'Expériences',
        item1: {
            period: {
                start: "06/2012",
                end: date,
            },
            location: 'St Erblon',
            firm: 'La Poste / CDI',
            position: 'Agent de La Poste',
            summary: `- Exécution rapide et efficace des tâches assignées.<br>
- Collaboration en équipe en communiquant, en partageant les idées et en mutualisant les efforts.<br>
- Organisation du travail en priorisant les tâches dans le but de répondre aux attentes et de respecter les délais.<br>
- Adaptation rapide à différents interlocuteurs et différentes situations.`
        },
	item2: {
            period: {
                start: "03/2010",
                end: "02/2011",
            },
            location: 'Redon',
            firm: 'Mairie de Redon / Contrat d\'Accompagnement dans l\'Emploi',
            position: 'Agent de services en écoles primaires',
            summary: `- Nettoyage courant des infrastructures : vidage des poubelles, aspiration des bureaux, lavage des sols et désinfection des sanitaires.<br>
- Surveillance des élèves durant les heures de repas pour assurer un environnement paisible.`
        },
	item3: {
	    period: {
                start: "03/2007",
                end: "04/2007",
            },
            location: 'Douala / Cameroun',
            firm: 'Orphelinat St Jean de Deido / Stage',
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
                start: 2010,
                end: 2011,
            },
            location: 'Nantes',
            school: 'CEMEA',
            degree: 'Brevet d\'Aptitude aux Fonctions d\'Animateur',
            summary: ``
        },
        item2: {
            period: {
                start: 2006,
                end: 2008
            },
            location: 'St Jacut les Pins',
            school: 'Lycée d\'Enseignement Général et Technologique Privé',
            degree: 'Baccalauréat professionnel Services en Milieu Rural',
            summary: 'Mention Bien'
        },
        item3: {
            period: {
                start: 2004,
                end: 2006
            },
            location: 'St Jacut les Pins',
            school: 'Lycée d\'Enseignement Général et Technologique Privé',
            degree: 'Brevet d\'Aptitude Professionnelle Agricole Services aux Personnes',
            summary: ''
        } 
    },
    interests: {
        title: 'Centres d\'intérêts',
        item1: {
            icon: 'icon--crea',
            caption: 'Loisirs créatifs'
        },
	item2: {
            icon: 'icon--cuisine',
            caption: 'Cuisine'
        },
        item3: {
            icon: 'icon--open-book',
            caption: 'Ecriture / Lecture'
        }
    }
};
