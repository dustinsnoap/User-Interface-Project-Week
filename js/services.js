window.onload = () => {
    new Carousel(atts.carousel)
    new TabLinks(atts.articles)
}

let atts = {
    carousel: {
        title: 'Services',
        imgs: [
            '../img/home/home-jumbotron.png',
            '../img/services/services-jumbotron.png',
            '../img/contact/contact-jumbotron.png',
            ]
    },
    articles: [
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
            imgSrc: `services/services-tab-design-build-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },{
            id: 'sustainability',
            title: `Sustainability`,
            imgSrc: `services/services-tab-sustainability-img.png`,
            p1:  `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            p2: `Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.`,
        },
    ],
}