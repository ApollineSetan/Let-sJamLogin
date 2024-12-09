window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
 
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

// Ce fichier sert de pont sécurisé entre le front-end (HTML/JS) et le back-end
// Node.js. Il est chargé avant le rendu de la page. Il récupère les versions 
// de Chrome, Node et Electron et les insère dans la page.