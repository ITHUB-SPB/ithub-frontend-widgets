import { useState } from 'react'

import Counter from './components/counter'
import './App.css'

export default function App() {
  const [clicks, updateClicks] = useState<number>(0)

  const handleClick = () => updateClicks(state => state + 1)

  return (
    <>
      <p>Кликов: {clicks}</p>
      <section id="center">
        <Counter min={null} max={10} updateClicks={handleClick} />
        <Counter min={3} max={null} updateClicks={handleClick} />
      </section>
    </>
  )
}