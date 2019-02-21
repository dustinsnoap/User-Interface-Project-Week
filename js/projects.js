window.onload = () => {
    let atts = {
        carousel: {
            title: 'Projects',
            imgs: [
                '../img/home/home-jumbotron.png',
                '../img/services/services-jumbotron.png',
                '../img/contact/contact-jumbotron.png',
                ]
        },
        projects: [
            {
                name: 'Project 1',
                imgSrc: '../img/home/home-img-1.png',
                description: `Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.`,
            },{
                name: 'Project 2',
                imgSrc: '../img/home/home-img-1.png',
                description: `Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.`,
            },{
                name: 'Project 3',
                imgSrc: '../img/home/home-img-1.png',
                description: `Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.`,
            },{
                name: 'Project 4',
                imgSrc: '../img/home/home-img-1.png',
                description: `Non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.`,
            }
        ],
    }
    new Carousel(atts.carousel)
    new Projects(atts.projects)
}

class Projects {
    constructor(projects) {
        this.projects = projects
        this.build()
    }
    build() {
        let main = document.querySelector('.main')
        this.projects.forEach(project => main.appendChild(this.buildProject(project)));
    }
    buildProject(project) {
        let projectNode = document.createElement('div')
        projectNode.classList.add('project')

        let img = document.createElement('img')
        img.src = project.imgSrc
        projectNode.appendChild(img)

        let text = document.createElement('text')
        text.classList.add('text')
        projectNode.appendChild(text)

        let h3 = document.createElement('h3')
        h3.textContent = project.name
        text.appendChild(h3)

        let p1 = document.createElement('p')
        p1.textContent = project.description
        text.appendChild(p1)

        return projectNode
    }
}