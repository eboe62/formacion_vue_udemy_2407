import './styles.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './02_javascript/01-const-let'
// import './02_javascript/02-object'
// import './02_javascript/03-arrays'
// import './02_javascript/04-functions'
// import './02_javascript/05-deses-obj'
// import './02_javascript/06-deses-arr'
// import './02_javascript/07-imp-exp'
// import './02_javascript/08-promises'
// import './02_javascript/09-fetch-api'
// import './02_javascript/10-axios'
import './02_javascript/11-async-await'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`