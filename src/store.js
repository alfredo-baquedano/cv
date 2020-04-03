import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        person: {
            contactInfo: {
                image: 'assets/alfredo.jpg',
                firstName: 'Alfredo',
                lastName: 'Baquedano',
                email: 'alfredo.baquedano.c@gmal.com',
                phone: '+569 8443 3012',
                address: 'Manuel Bayón 3273, Talcahuano, Chile',
                dateOfBirth: '05/06/1993',
                linkedin: undefined,
                github: undefined,
                facebook: undefined
            },
            profileInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi dapibus, varius purus vitae, dapibus nunc. Curabitur pellentesque varius ante interdum pellentesque. Aenean pretium sollicitudin augue quis gravida. Nunc a varius dolor. Duis at enim ante. Mauris id facilisis nisi. Maecenas sed bibendum sapien. In imperdiet ipsum magna, nec tincidunt tellus pulvinar et. Fusce sit amet porta elit, eget commodo massa. Duis viverra non mi in blandit. Nulla mollis dignissim sem ut sodales. Morbi faucibus leo massa.',
            experiences: [
                {
                    year: '2018 - Now',
                    company: {
                        color: 'red',
                        logo: 'https://yt3.ggpht.com/a-/AAuE7mCc1I1yr1XXHoVmMR9z4Fx7Q_Ykr9I9YX1XiA=s900-mo-c-c0xffffffff-rj-k-no',
                        name: 'Sicom Electronics'
                    },
                    position: 'Full-stack Developer',
                    description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    year: '2018',
                    company: {
                        color: 'blue',
                        logo: 'http://www.uestatales.cl/cue/sites/default/files/universidades/biobio.jpg?1254970361',
                        name: 'Universidad del Bío-Bío'
                    },
                    position: 'Teacher',
                    description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    year: '2017 - 2018',
                    company: {
                        color: 'green',
                        logo: 'data:image/png;base64,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',
                        name: 'SmartGrows'
                    },
                    position: 'Full-stack Developer',
                    description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    year: '2016',
                    company: {
                        color: 'cyan',
                        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZy8Cyqn_SBVYOMOaxSdDmCjEt7aCNgFIS3nMLYPVPW-ESDbibg',
                        name: 'CIMUBB'
                    },
                    position: 'Intern',
                    description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                }
            ],
            skills: [
                {
                    name: 'FrontEnd Web',
                    knowledges: [
                        {
                            name: 'Vue.js',
                            value: 88
                        },
                        {
                            name: 'React',
                            value: 75
                        }
                    ]
                },
                {
                    name: 'FrontEnd Mobile',
                    knowledges: [
                        {
                            name: 'React\nNative',
                            value: 57
                        },
                        {
                            name: 'Java',
                            value: 60
                        }
                    ]
                },
                {
                    name: 'BackEnd',
                    knowledges: [
                        {
                            name: 'Lumen',
                            value: 64
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
                            value: 64
                        },
                        {
                            name: 'MongoDB',
                            value: 34
                        }
                    ]
                },
                {
                    name: 'Other Programming Languages',
                    knowledges: [
                        {
                            name: 'Java',
                            value: 65
                        },
                        {
                            name: 'Python',
                            value: 23
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
                    name: 'Lorem ipsum',
                    type: 'mdi-school',
                    date: '',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    name: 'Lorem ipsum',
                    type: 'mdi-school',
                    date: '',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    name: 'Lorem ipsum',
                    type: 'mdi-certificate',
                    date: '',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    name: 'Lorem ipsum',
                    type: 'mdi-certificate',
                    date: '',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                }
            ],
            references: [
                {
                    author: {
                        firstName: 'Lorem',
                        lastName: 'ipsum',
                        position: '',
                        image: 'img/alfredo.jpg'
                    },
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    author: {
                        firstName: 'Lorem',
                        lastName: 'ipsum',
                        position: '',
                        image: 'img/alfredo.jpg'
                    },
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    author: {
                        firstName: 'Lorem',
                        lastName: 'ipsum',
                        position: '',
                        image: 'img/alfredo.jpg'
                    },
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                },
                {
                    author: {
                        firstName: 'Lorem',
                        lastName: 'ipsum',
                        position: '',
                        image: 'img/alfredo.jpg'
                    },
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices'
                }
            ]
        }
    }
})
