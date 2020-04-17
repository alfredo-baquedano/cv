import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        person: {
            contactInfo: {
                image: 'img/alfredo.jpg',
                firstName: 'Alfredo',
                lastName: 'Baquedano',
                position: 'Full-Stack Developer',
                email: 'alfredo.baquedano.c@gmal.com',
                phone: '+569 8443 3012',
                address: 'Manuel Bayón 3273, Talcahuano, Chile',
                dateOfBirth: '5 June 1993',
                linkedin: 'https://www.linkedin.com/in/alfredo-baquedano/',
                github: 'https://github.com/alfredo-baquedano',
                stackoverflow: 'https://stackoverflow.com/users/8777500'
            },
            profileInfo: 'A Developer with great team work and self-learning skills who loves to master interesting new technologies and use them to code large-scale, challenging and highly innovative projects',
            experiences: [
                {
                    year: '2018 - Now',
                    company: {
                        color: 'red',
                        logo: './img/logos/sicom.png',
                        name: 'Sicom Electronics'
                    },
                    position: 'Full-Stack Developer',
                    duties: [
                        'Led the development of a TALQ certified large-scale smart city CMS called CityMesh using Vue.js, Express.js and MongoDB.',
                        'Built platforms to involve the citizenship in the continuous improvement of their cities using Vue.js, React Native and Lumen.',
                        'Collaborated in the design of home and industrial IoT projects.'
                    ]
                },
                {
                    year: '2018',
                    company: {
                        color: 'blue',
                        logo: './img/logos/ubb.png',
                        name: 'Universidad del Bío-Bío'
                    },
                    position: 'Lecturer',
                    duties: [
                        'Teach Android Development and Advanced Web APP Development for "Civil Engineers in Informatics" and "Computer Execution Engineer" students.'
                    ]
                },
                {
                    year: '2017 - 2018',
                    company: {
                        color: 'green',
                        logo: './img/logos/smartgrows.png',
                        name: 'SmartGrows'
                    },
                    position: 'Full-Stack Developer',
                    duties: [
                        'Led the development of an environmental standards management system using React.js, MySQL and Slim.',
                        'Built an 8-relay controller NodeMCU firmware and a Native Android APP to trigger each relay using MQTT.',
                        'Built 5 prototypes of a wireless ergo spirometer called Oxygen Fitlab using React.js, MQTT, PHP, MySQL and Arduino.'
                    ]
                },
                {
                    year: '2016',
                    company: {
                        color: 'cyan',
                        logo: './img/logos/cimubb.png',
                        name: 'CIMUBB'
                    },
                    position: 'Intern',
                    duties: [
                        'Built a Native Android APP to control the movements of a Lego MindStorm NXT Robot using Bluetooth.',
                        'Collaborated in an open house at the CEAT high school representing the career of Informatic Civil Engineer at the Universidad del Bío-Bío.'
                    ]
                }
            ],
            skills: [
                {
                    name: 'Front-End',
                    knowledges: [
                        {
                            name: 'Vue.js',
                            value: 95
                        },
                        {
                            name: 'React',
                            value: 85
                        }
                    ]
                },
                {
                    name: 'Mobile',
                    knowledges: [
                        {
                            name: 'React\nNative',
                            value: 80
                        },
                        {
                            name: 'Java',
                            value: 75
                        }
                    ]
                },
                {
                    name: 'Back-End',
                    knowledges: [
                        {
                            name: 'Lumen',
                            value: 75
                        },
                        {
                            name: 'Express',
                            value: 30
                        }
                    ]
                },
                {
                    name: 'SGBD',
                    knowledges: [
                        {
                            name: 'MySQL',
                            value: 75
                        },
                        {
                            name: 'MongoDB',
                            value: 30
                        }
                    ]
                },
                {
                    name: 'Other Languages',
                    knowledges: [
                        {
                            name: 'Java',
                            value: 75
                        },
                        {
                            name: 'Python',
                            value: 70
                        }
                    ]
                },
                {
                    name: 'Other Skills',
                    knowledges: [
                        {
                            name: 'Git',
                            value: 78
                        },
                        {
                            name: 'Security',
                            value: 43
                        }
                    ]
                }
            ],
            projects: [],
            education: [
                {
                    name: 'First Place in “Do i+T”',
                    type: 'mdi-certificate',
                    date: '2018',
                    description: 'Certified by MacroFacultad of Universidad del Bío-Bío and WorkingPlace by the project Oxygen FitLab.'
                },
                {
                    name: 'Outstanding Collaboration Diploma',
                    type: 'mdi-school',
                    date: '2018',
                    description: 'For working as a part-time lecturer at the Universidad del Bío-Bío.'
                },
                {
                    name: 'English Intermediate ',
                    type: 'mdi-certificate',
                    date: '2017',
                    description: 'ETS TOEIC Bridge Level B1 (at least).'
                },
                {
                    name: 'Effective Communication ',
                    type: 'mdi-certificate',
                    date: '2016',
                    description: 'Certified by Universidad del Bío-Bío.'
                }
            ],
            references: [
                {
                    author: {
                        firstName: 'Carlos',
                        lastName: 'Araneda',
                        position: 'CEO at SmartGrows',
                        image: 'img/alfredo.jpg'
                    },
                    text: '...Es un profesional integro, responsable, eficiente, que cumple a cabalidad sus tareas. Siempre estuvo abierto a adoptar nuevas tecnologías, a trabajar en equipo y aprender de quienes tienen mas años de experiencia que el.'
                },
                {
                    author: {
                        firstName: 'Brunny',
                        lastName: 'Troncoso',
                        position: 'Principal at Universidad del Bío-Bío',
                        image: 'img/alfredo.jpg'
                    },
                    text: '...Ha demostrado a lo largo de los años una gran dedicación a los proyectos de desarrollo tecnológico y de innovación ...destaca además por contribuir a un buen clima laboral y buena disposicion.'
                },
                {
                    author: {
                        firstName: 'Luis',
                        lastName: 'Vera',
                        position: 'Support Engineer and Laboratory Coordinator at CIMUBB',
                        image: 'img/alfredo.jpg'
                    },
                    text: 'Buena disposicion, respeta horarios y compromiso con la misión encomendada. Propone soluciones alternativas a problemas encontrados. Demuestra interés y entusiasmo en la ejecución del proyecto más alla de lo comprometido.'
                }
            ]
        }
    }
})
