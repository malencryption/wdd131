const themeSelector = document.querySelector("#theme")
const body = document.body
const logo = document.querySelector("img.logo")

function changeTheme() {
  const theme = themeSelector.value

  if (theme === 'dark'){  
    body.classList.add("dark")
    logo.src = "byui-logo_white.png"
  } else {
    body.classList.remove("dark")
    logo.src = "byui-logo_blue.webp"
  }
}

themeSelector.addEventListener('change', changeTheme);