class Carousel {
    constructor(atts) {
        this.images = atts.imgs
        this.header = document.querySelector('header')
        this.title = atts.title
        this.index = 0;
        this.element = this.build()
        this.header.append(this.element)
        //event listeners
        this.element.querySelectorAll('.arrow')
            .forEach(arrow => arrow.addEventListener('click', () => this.arrow(arrow)))
        this.element.querySelectorAll('.tab')
            .forEach(tab => tab.addEventListener('click', () => this.tab(tab)))
    }
    updateSlide() {
        let slide = this.element.querySelector('.slides')
        slide.removeChild(slide.childNodes[0])
        let img = document.createElement('img')
        img.src = this.images[this.index]
        slide.appendChild(img)
        this.updateTabs()
    }
    updateTabs() {
        this.element.querySelectorAll('.tab')
            .forEach(tab => {
                tab.classList.remove('selected')
                if(tab.dataset.slide == this.index) tab.classList.add('selected')
            })
    }
    tab(tab) {
        this.index = tab.dataset.slide
        this.updateSlide()
    }
    arrow(arrow) {
        arrow.classList.contains('left') ? this.index-- : this.index++
        if(this.index < 0) this.index = this.images.length - 1
        if(this.index >= this.images.length) this.index = 0
        this.updateSlide()
    }
    build() {
        let carousel = document.createElement('div')
        carousel.classList.add('carousel')

        let slides = document.createElement('div')
        slides.classList.add('slides')
        carousel.appendChild(slides)

        let img = document.createElement('img')
        img.src = this.images[this.index]
        slides.appendChild(img)

        let text = document.createElement('div')
        text.classList.add('text')
        carousel.appendChild(text)

        let h1 = document.createElement('h1')
        h1.textContent = this.title
        text.appendChild(h1)

        let arrows = document.createElement('div')
        arrows.classList.add('arrows')
        carousel.appendChild(arrows)

        let leftArrow = document.createElement('div')
        leftArrow.classList.add('arrow', 'left')
        arrows.appendChild(leftArrow);

        let figure = document.createElement('figure')
        leftArrow.appendChild(figure)

        let rightArrow = document.createElement('div')
        rightArrow.classList.add('arrow', 'right')
        arrows.appendChild(rightArrow);

        figure = document.createElement('figure')
        rightArrow.appendChild(figure)

        let tabs = document.createElement('div')
        tabs.classList.add('tabs')
        carousel.appendChild(tabs)

        this.images.forEach((imgsrc, i) => {
            let tab = document.createElement('div')
            tab.classList.add('tab')
            if(this.index === i) tab.classList.add('selected')
            tab.dataset.slide = i
            tabs.appendChild(tab)
        })

        return carousel
    }
}