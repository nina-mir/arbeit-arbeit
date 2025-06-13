// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import BookingFAQ from './components/BookingFAQ'
import TourDates from './components/TourDates'
import SpoilMe from './components/SpoilMe'
import Gallery from './components/Gallery'
import Blog from './components/Blog'

function App() {
  // State for toggling contact form in md mode
  const [toggleContact, setToggleContact] = useState(false)

  return (
    <Router>
      <div className="w-full bg-stone-100">
        <Header onContactClick={() => {
          setToggleContact(!toggleContact)
        }} />
        
        {/* Show contact form overlay when toggled (for md mode) */}
        {toggleContact && <ContactForm />}
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/booking-faq" element={<BookingFAQ />} />
            <Route path="/tour-dates" element={<TourDates />} />
            <Route path="/spoil-me" element={<SpoilMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            {/* Catch-all route - redirects any unknown URLs to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

// // App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './components/Home'
// import ContactForm from './components/ContactForm'
// import Footer from './components/Footer'
// import BookingFAQ from './components/BookingFAQ'
// import TourDates from './components/TourDates'
// import SpoilMe from './components/SpoilMe'
// import Gallery from './components/Gallery'
// import Blog from './components/Blog'

// function App() {
//   return (
//     <Router>
//       <div className="w-full bg-stone-100">
//         <Header />
        
//         <main className="min-h-screen">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<ContactForm />} />
//             <Route path="/booking-faq" element={<BookingFAQ />} />
//             <Route path="/tour-dates" element={<TourDates />} />
//             <Route path="/spoil-me" element={<SpoilMe />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </main>
        
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App

// // import { useState } from 'react'
// // import Header from './components/Header'
// // import Home from './components/Home'
// // import ContactForm from './components/ContactForm'
// // import Footer from './components/Footer'


// // function App() {

// //   let [toggleContact, setToggleContact] = useState(false)


// //   return (
// //     <div className="w-full  bg-stone-100">



// //       <Header onContactClick={() => {
// //         let curr = toggleContact
// //         setToggleContact(!curr)
// //       }
// //       }
// //       />
// //       {toggleContact && <ContactForm />}

// //       <Home />
// //       <Footer />
// //     </div>
// //   )
// // }

// // export default App
