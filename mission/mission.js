const themeSelector = document.querySelector("#theme")

function changeTheme() {
  const theme = themeSelector.value
  const body = document.querySelector("body")
  const logo = document.querySelector("img.logo")

  if (theme === 'dark'){  
    body.classList.add("dark")
    logo.src = "byui-logo_white.png"
  } else {
    body.classList.remove("dark")
    logo.src = "byui-logo_blue.webp"
  }
}

themeSelector.addEventListener('change', changeTheme);