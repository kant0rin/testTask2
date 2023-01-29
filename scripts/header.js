/*!
 * EasyToggler v2.2.7 (https://github.com/rah-emil/easy-toggler#readme)
 * Copyright 2022 Rah Emil <013131@mail.ru>
 * Licensed under MIT (https://github.com/rah-emil/easy-toggler/blob/master/LICENSE)
 */

! function() {
    "use strict";

    function e(e, t) {
        const s = e.target.closest(`[${t.toggle}]`),
            o = e.target.closest(`[${t.remove}]`),
            l = e.target.closest(`[${t.add}]`);
        s && (e.preventDefault(), ((e, t) => {
            const s = e.getAttribute(t.toggle);
            document.querySelectorAll(`[${t.toggle}]`).forEach((s => {
                if (!s.hasAttribute(t.parallel) && s !== e) {
                    document.querySelector(s.getAttribute(t.toggle)).classList.remove(s.getAttribute(t.class));
                    const o = e.getAttribute(t.self);
                    o && e.classList.remove(o);
                }
            })), document.querySelector(s)?.classList.toggle(e.getAttribute(t.class));
            const o = e.getAttribute(t.self);
            o && e.classList.toggle(o), t.onToggle(e)
        })(s, t)), o && (e.preventDefault(), ((e, t) => {
            const s = e.getAttribute(t.remove),
                o = e.getAttribute(t.class);
            document.querySelectorAll(s).forEach((e => {
                e.classList.remove(o)
            }));
            const l = e.getAttribute(t.self);
            l && e.classList.remove(l), t.onRemove(e)
        })(o, t)), l && (e.preventDefault(), ((e, t) => {
            const s = e.getAttribute(t.add),
                o = e.getAttribute(t.class);
            document.querySelectorAll(s).forEach((e => {
                e.classList.add(o)
            }));

            const l = e.getAttribute(t.self);
            l && e.classList.add(l), t.onAdd(e)
        })(l, t)), s || o || l || ((e, t) => {
            const s = document.querySelectorAll(`[${t.rcoe}]`);
            Array.from(s).forEach((s => {
                let o = s.getAttribute(t.toggle),
                    l = s.getAttribute(t.class);
                if (!e.target.closest(o)) {
                    document.querySelector(o)?.classList.remove(l);
                    const e = s.getAttribute(t.self);
                    e && s.classList.remove(e), t.onRcoe(s)
                }
            }))
        })(e, t)
    }
    const t = {
        toggle: "easy-toggle",
        add: "easy-add",
        remove: "easy-remove",
        class: "easy-class",
        rcoe: "easy-rcoe",
        parallel: "easy-parallel",
        self: "easy-self",
        selfRcoe: "easy-self-rcoe",
        onToggle(e) {},
        onAdd(e) {},
        onRemove(e) {},
        onRcoe(e) {}
    };
    document.addEventListener("DOMContentLoaded", (() => {
        document.addEventListener("click", (s => {
            e(s, t)
        }))
    }))
}();

//# sourceMappingURL=easy-toggler.iife.min.js.map

const btn = document.querySelector('.dropdown_btn')

function galochka() {
    const galochka = document.getElementById('galka')
    const menu = document.getElementById('dropdown')
    document.addEventListener('click', (e) => {
        if (galochka.classList.contains('active') && (e.target.parentNode !== btn && e.target.parentNode !== menu)){
            console.log(e.target.parentNode)
            galochka.classList.remove('active')
        } else if (btn === e.target.parentNode) {
            galochka.classList.add('active')
        }
    })
}

btn.addEventListener('click', galochka)

const navBtns = document.querySelectorAll('.nav__btn')
navBtns.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('pressed')) {
            e.classList.remove('pressed')
        } else {
            e.classList.add('pressed')
        }
    })
})

const chosenCity = document.getElementById('dropdown_chosen')

chosenCity.addEventListener('mouseover', () => {
    document.getElementById('map').style.opacity = '0.5'
})

chosenCity.addEventListener('mouseout', () => {
    document.getElementById('map').style.opacity = '1'
})

const tel = document.getElementById('tel')
const telImg = document.getElementById('tel_img')

tel.addEventListener('mouseover', () => {
    tel.style.opacity = '0.5'
    telImg.style.opacity = '0.5'
})

tel.addEventListener('mouseout', () => {
    tel.style.opacity = '1'
    telImg.style.opacity = '1'
})