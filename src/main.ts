import './style.css'
import { setupCounter } from './counter.ts'
import { charmander } from './bases/05-decoratores.ts'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hellow vite, ${charmander.name} ${charmander.id}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
