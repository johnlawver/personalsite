
const ThemeToggle = document.querySelector(".header-theme-toggle")
const MenuButton = document.querySelector(".header-mobile-icon")
const Menu = document.querySelector(".header-menu")
const BodyTag = document.querySelector('body')
const Moon = document.querySelector('.moon-icon')
const Sun = document.querySelector('.sun-icon')

const setInitialTheme = () => {
    const Theme = window.localStorage.getItem("theme")
    if (Theme !== null) {
        Theme === 'light' ? SetLightTheme() : SetDarkTheme()
    }
}

const ChangeTheme = () => {
    if (BodyTag.getAttribute('data-theme') === 'dark') {
        SetLightTheme()
    } else {
        SetDarkTheme()
    }
}


const SetLightTheme = () => {
    BodyTag.setAttribute('data-theme', 'light')
    Sun.classList.add('hidden')
    Moon.classList.remove('hidden')
    window.localStorage.setItem("theme", "light")
}

const SetDarkTheme = () => {
    BodyTag.setAttribute('data-theme', 'dark')
    Moon.classList.add('hidden')
    Sun.classList.remove('hidden')
    window.localStorage.setItem("theme", "dark")
}

const ToggleMenu = () => {
    Menu.classList.toggle("isActive")
}

const CloseMenu = () => {
    Menu.classList.remove("isActive")
}

setInitialTheme()

ThemeToggle.addEventListener('click', ChangeTheme)
MenuButton.addEventListener('click', ToggleMenu)
Menu.addEventListener('click', CloseMenu)