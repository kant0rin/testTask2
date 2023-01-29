new Swiper('.daily__swiper', {
    navigation: {
        nextEl: '.daily__swiper_next',
        prevEl: '.daily__swiper_prev',
    }
})

let swiperPage = 1

const dailyNext = document.querySelector('.daily__swiper_next')
const dailyPrev = document.querySelector('.daily__swiper_prev')

dailyNext.addEventListener('click', () => {
    if (dailyNext.classList.contains('empty')) {
        return
    } else {
        page++
        dailyPrev.classList.remove('empty')
        page === 3 ? dailyNext.classList.add('empty') : null
    }
})

dailyPrev.addEventListener('click', () => {
    if (dailyPrev.classList.contains('empty')) {
        return
    } else {
        page--
        dailyNext.classList.remove('empty')
        page === 1 ? dailyPrev.classList.add('empty') : null

    }
})

const circles = document.querySelectorAll('.color__circle')

circles.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('chosen')) {
            return
        } else {
            circles.forEach(e => {
                e.classList.remove('chosen')
            })
            e.classList.add('chosen')
        }
    })
})

const voprosik = document.querySelector('.voprosik')
const hidden = document.querySelector('.hidden__window')

voprosik.addEventListener('mouseover', () => {
    hidden.classList.add('visible')
})
voprosik.addEventListener('mouseout', () => {
    hidden.classList.remove('visible')
})

const sizes = document.querySelectorAll('.size')

sizes.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('empty') || e.classList.contains('chosen')){
            return
        } else {
            sizes.forEach(e => {
                e.classList.remove('chosen')
            })
            e.classList.add('chosen')
        }
    })
})

const toCart = document.getElementById('tocart')
const oneClick = document.getElementById('oneclick')


toCart.addEventListener('click', () => {
    toCart.classList.contains('pressed') ? toCart.classList.remove('pressed') : toCart.classList.add('pressed')
})

oneClick.addEventListener('click', () => {
    oneClick.classList.contains('pressed') ? oneClick.classList.remove('pressed') : oneClick.classList.add('pressed')
})

const otherLike = document.querySelector('.other__like')
otherLike.addEventListener('mouseover', () => {
    document.querySelector('.other__like_hovered').classList.add('hovered')
})
otherLike.addEventListener('mouseout', () => {
    document.querySelector('.other__like_hovered').classList.remove('hovered')
})

otherLike.addEventListener('click', () => {
    document.querySelector('.other__like_pressed').classList.contains('pressed') ?
        document.querySelector('.other__like_pressed').classList.remove('pressed') :
        document.querySelector('.other__like_pressed').classList.add('pressed')

})


const dailyContentNext = document.querySelector('.daily__arows_next')
const dailyContentPrev = document.querySelector('.daily__arows_prev')
let dailyPage = 1

dailyContentNext.addEventListener('click', () => {
    if (dailyContentNext.classList.contains('empty')) {
        return
    } else {

        dailyPage === 2 ? dailyContentNext.classList.add('empty') : null
        dailyContentNext.classList.add('pressed')
        dailyContentPrev.classList.contains('empty') ? dailyContentPrev.classList.remove('empty') : null
        setTimeout(()=> {
            dailyContentNext.classList.remove('pressed')
        }, 300)
        dailyPage++

    }
})

dailyContentPrev.addEventListener('click', () => {
    if (dailyContentPrev.classList.contains('empty')) {
        return
    } else {

        dailyPage === 2 ? dailyContentPrev.classList.add('empty') : null
        dailyContentPrev.classList.add('pressed')
        dailyContentNext.classList.contains('empty') ? dailyContentNext.classList.remove('empty') : null
        setTimeout(()=> {
            dailyContentPrev.classList.remove('pressed')
        }, 300)
        dailyPage--
        console.log(dailyPage)

    }
})


function countDown () {
    let mins = 46
    let hours = 12
    let secs = 51
    setInterval(() => {
        document.getElementById('seconds').innerText = secs < 10 ? '0' + secs : secs
        document.getElementById('minutes').innerText = mins < 10 ? '0' + mins : mins
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours
        secs--
        if (secs === 0){
            if (mins === 0) {
                mins = 59
                secs = 59
                hours--
            } else {
                secs = 59
                mins--
            }
        }
    }, 1000)

}

window.onload = countDown