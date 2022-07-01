import './App.css'
import { Navbar } from './components/Navbar'
import { Description } from './components/Description'
import { Forms } from './components/Forms'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Description />
        <Forms />
      </div>
      <Footer />
    </div>
  )
}

export default App
