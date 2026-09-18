import Counter from './components/counter'
import './App.css'

export default function App() {
  return (
    <section id="center">
      <Counter min={null} max={10} />
      <Counter min={3} max={null} />
    </section>
  )
}