class TabLinks {
    constructor(tabElement) {
        //inital vars
        this.element = tabElement
        this.page = this.element.classList[0]
        this.main = document.querySelector('.main')
        this.tabs = this.element.querySelectorAll('.tab')
        this.selectedTab = 'construction'
        //add click listener to each tab
        this.tabs.forEach(tab => tab.addEventListener('click', () => this.select(tab)));
        this.init()
    }
    init() {
        this.updateArticle()
    }
    select(tab) {
        this.selectedTab = tab.dataset.tab;
        this.tabs.forEach(tab => tab.classList.remove('selected'))
        tab.classList.toggle('selected')
        this.updateArticle()
    }
    updateArticle() {
        while(this.main.querySelectorAll('article')[0]) {this.main.querySelectorAll('article')[0].parentNode.removeChild(this.main.querySelectorAll('article')[0])}
        let tests = articles[this.page]
            .filter(article => article.id === this.selectedTab)
            .forEach(article => this.main.appendChild(this.createArticle(article)))
    }
    createArticle(article) {
        document.createElement
        let articleNode = document.createElement('article')
        articleNode.classList.add('small')

        let imgNode = document.createElement('img')
        imgNode.src = './img/' + article.imgSrc
        articleNode.appendChild(imgNode)

        let textNode = document.createElement('div')
        textNode.classList.add('text')
        articleNode.appendChild(textNode)

        let h2Node = document.createElement('h2')
        h2Node.textContent = article.title
        textNode.appendChild(h2Node)

        let p1Node = document.createElement('p')
        p1Node.textContent = article.p1
        textNode.appendChild(p1Node)

        let p2Node = document.createElement('p')
        p2Node.textContent = article.p2
        textNode.appendChild(p2Node)

        return articleNode
    }
}
class TabArticle {
    constructor(article, parent) {
        this.article = article
        this.parent = parent
        this.element = creadeNode()
    }
    createNode() {
        let article = document.createElement('article')
        article.classList.add('services', 'small')
        let img = document.createElement('img')
        img.src 
    }
}

let articles = {
    home: [],
    services: [
        {
            id: 'preconstruction',
            title: 'Pre-Construction',
            imgSrc: `services/services-tab-pre-construction-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },{
            id: 'construction',
            title: 'Construction',
            imgSrc: `services/services-tab-construction-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },{
            id: 'designbuild',
            title: `Design Build`,
            imgSrc: `services/services-tab-pre-construction-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },{
            id: 'sustainability',
            title: `Sustainability`,
            imgSrc: `services/services-tab-pre-construction-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },
    ],
}

window.onload = () => {
    new TabLinks(document.querySelector('.tabs'))
    // document.querySelectorAll('.tab').forEach(tab => new TabLink(tab))
}