import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black opacity-60"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative z-10 container text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Classic Cuts, <span className="text-accent">Modern Style</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Experience premium grooming at its finest with our expert barbers.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/booking" className="btn btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7697232/pexels-photo-7697232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barbershop interior" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <div>
              <SectionTitle 
                title="The CleanCut Experience" 
                subtitle="Where tradition meets modernity"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                At CleanCut, we believe that a haircut is more than just a service – it's an experience. Our skilled barbers combine traditional techniques with modern styles to provide you with the perfect look.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/about" className="btn btn-secondary">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Our Premium Services" 
            subtitle="Expert grooming for the modern gentleman"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classic Haircut",
                description: "Our signature haircut tailored to your style and preferences.",
                icon: "✂️",
              },
              {
                title: "Hot Towel Shave",
                description: "Luxurious traditional straight razor shave with hot towel treatment.",
                icon: "🪒",
              },
              {
                title: "Beard Trim",
                description: "Shape and maintain your beard for a clean, professional look.",
                icon: "✨",
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <SectionTitle 
            title="Ready for a Fresh Look?" 
            subtitle="Book your appointment today and experience the difference"
            center
            light
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/booking" className="btn btn-primary">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home