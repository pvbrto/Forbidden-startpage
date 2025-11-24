themeRandomizer = () => {
const theme = ["gold", "pastel", "alcest", "griffith", "guts"]
const random = theme[Math.floor(Math.random() * theme.length)]
return random
}

setTheme = () => {
    document.documentElement.className = "pastel"
}

setTheme()