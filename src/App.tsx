import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


function App() {

  let [toggleContact, setToggleContact] = useState(false)


  return (
    <div className="w-full  bg-stone-100">



      <Header onContactClick={() => {
        let curr = toggleContact
        setToggleContact(!curr)
      }
      }
      />
      {toggleContact && <ContactForm />}

      <Home />
      <Footer />
    </div>
  )
}

export default App
