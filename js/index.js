window.onload = () => {
    let atts = {
        carousel: {
            title: 'Integrity,\nExcellence,\nProgress',
            imgs: [
                './img/home/home-jumbotron.png',
                './img/services/services-jumbotron.png',
                './img/contact/contact-jumbotron.png',
                ]
        },
    }
    new Carousel(atts.carousel)
}