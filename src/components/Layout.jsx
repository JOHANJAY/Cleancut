import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    // Clean up in case component unmounts while menu is open
    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Booking', path: '/booking' },
    { title: 'Contact', path: '/contact' },
    // { title: 'Admin', path: '/admin' },
  ]

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-primary text-white py-3 shadow-md' : 'bg-transparent text-primary py-6'
  }`

  return (
    <div className="min-h-screen flex flex-col">
      <header className={headerClasses}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl font-bold">
            <span className={scrolled ? 'text-white' : 'text-primary'}>Clean</span>
            <span className="text-accent">Cut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'active' : ''} ${scrolled ? 'text-white hover:text-accent-light' : ''}`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden z-50 relative ${isOpen ? 'text-white' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current my-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center">
            <nav>
              <ul className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink 
                      to={link.path} 
                      className={({ isActive }) => 
                        `nav-link text-white text-2xl ${isActive ? 'active' : ''}`
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CleanCut</h3>
              <p className="text-gray-300">Premium barbershop services with a modern touch.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Monday - Friday: 9am - 8pm</li>
                <li>Saturday: 10am - 6pm</li>
                <li>Sunday: 11am - 4pm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-300 space-y-2">
                <li>123 Main Street, New York, NY</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@cleancut.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CleanCut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout