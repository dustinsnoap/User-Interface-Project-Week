window.onload = () => {
    let atts = {
        carousel: {
            title: 'About Us',
            imgs: [
                '../img/home/home-jumbotron.png',
                '../img/services/services-jumbotron.png',
                '../img/contact/contact-jumbotron.png',
                ]
        },
        // aboutus: {
        //     articles: [
        //         {
        //             category: 'About us.',
        //             title: 'We grow buildings by nailing scrap materials together.',
        //             p1: `Today, people walk into buildings and have experiences. We design those buildings, driven by low costs and a complete disregard for safety. We combine scrap materials and duct tape into a single solution, creating unified brand life threatening experiences that change peoples lives and foster meaningful relationships with their future physicians. This unique approach has made us the fastest-growing agency of the past decade.`,
        //         },{
        //             category: 'How we do it.',
        //             title: 'The overpaid architect experience.',
        //             p1: `Today, people walk into buildings and have experiences. We design those buildings, driven by low costs and a complete disregard for safety. We combine scrap materials and duct tape into a single solution, creating unified brand life threatening experiences that change peoples lives and foster meaningful relationships with their future physicians. This unique approach has made us the fastest-growing agency of the past decade.`,
        //         },
        //     ]
        // }
    }
    new Carousel(atts.carousel)
}