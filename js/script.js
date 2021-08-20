const nav = document.getElementById('nav');
const bar = document.getElementById('bar');
const navContainer = document.getElementById('navContainer');
let navLeft = document.querySelector('.nav_left')
window.addEventListener('resize', () => {
    nav.classList.remove('active')
})
bar.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        navLeft.style.marginTop = "23px";
    } else {
        navLeft.style.marginTop = "5px";
    }
})

window.addEventListener('scroll', () => {
    window.scrollY > 40 ? navContainer.style.position = 'fixed' : navContainer.style.position = 'static'
    window.scrollY > 40 ? navContainer.style.backgroundColor = '#f9fcff' : navContainer.style.backgroundColor = '#fff'
})

const portfolio = [
    {
        id: 1,
        category: 'APP',
        title: 'App 1',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-1.jpg'
    },
    {
        id: 2,
        category: 'WEB',
        title: 'Web 3',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-2.jpg'
    },
    {
        id: 3,
        category: 'APP',
        title: 'App 2',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-3.jpg'
    },
    {
        id: 4,
        category: 'CARD',
        title: 'Card 2',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-4.jpg'
    },
    {
        id: 5,
        category: 'WEB',
        title: 'Web 2',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-5.jpg'
    },
    {
        id: 6,
        category: 'APP',
        title: 'App 3',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-6.jpg'
    },
    {
        id: 7,
        category: 'CARD',
        title: 'Card 3',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-7.jpg'
    },
    {
        id: 8,
        category: 'CARD',
        title: 'Card 1',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-8.jpg'
    },
    {
        id: 9,
        category: 'WEB',
        title: 'Web 1',
        img: 'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/portfolio/portfolio-9.jpg'
    },
]
const portfolioItems = document.querySelector('.portfolio_items');
const filterBtn = document.querySelector('.portfolio_btns');

window.addEventListener('DOMContentLoaded', () => {
    displayItem(portfolio);
    const category = portfolio.reduce((value, item) => {
        if (!value.includes(item.category)) {
            value.push(item.category)
        }
        return value
    }, ['All']);
    const categoryBtn = category.map(btn => {
        return `<button class='filterbtn' data-id=${btn}>${btn}</button>`
    }).join('');
    filterBtn.innerHTML = categoryBtn;
    const filterbtn = document.querySelectorAll('.filterbtn');
    filterbtn[0].classList.add('active-btn');
    btnFor(filterbtn)
    filterbtn.forEach((btn) => {
        btn.addEventListener('click', e => {
            const type = e.currentTarget.dataset.id
            const filterItem = portfolio.filter(item => {
                if (item.category === type) {
                    return item
                }
            });
            if (type === 'All') {
                displayItem(portfolio);
            } else {
                displayItem(filterItem);
            }
        })
    })
})
function btnFor(btns) {
    for (let i = 0; i < btns.length; i++) {
        const element = btns[i];
        element.addEventListener('click', function () {
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove('active-btn');
            }
            this.classList.add('active-btn')
        })
    }
}
function displayItem(portfolioItem) {
    const renderItems = portfolioItem.map(item => {
        return `
        <div class='item'>
            <img src=${item.img} alt=${item.title}/>
            <div class='over'>
                <h1>${item.title}</h1>
                <h4>${item.category}</h4>
                <div class='icons'>
                    <i class='fas fa-plus'></i>
                    <i class='fas fa-link'></i>
                </div>
            </div>
        </div>`
    }).join("");
    portfolioItems.innerHTML = renderItems;
}