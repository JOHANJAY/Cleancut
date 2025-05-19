import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Services() {
  const haircuts = [
    {
      title: "Classic Cut",
      description: "Traditional haircut with clippers and scissors, includes a hot towel finish.",
      price: 35,
      duration: 30
    },
    {
      title: "Fade",
      description: "Precision fade haircut with your choice of style on top.",
      price: 40,
      duration: 45
    },
    {
      title: "Skin Fade",
      description: "Sharp skin fade with meticulous detailing and styling.",
      price: 45,
      duration: 45
    },
    {
      title: "Cut & Beard Trim",
      description: "Full haircut service combined with a professional beard trim.",
      price: 55,
      duration: 60
    }
  ]

  const shaves = [
    {
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towels and premium shaving cream.",
      price: 40,
      duration: 45
    },
    {
      title: "Beard Trim",
      description: "Shape and maintain your beard for a clean, professional look.",
      price: 25,
      duration: 30
    },
    {
      title: "Beard Sculpting",
      description: "Complete beard redesign and styling for a fresh new look.",
      price: 35,
      duration: 45
    }
  ]

  const additional = [
    {
      title: "Hair Coloring",
      description: "Professional color application to cover grays or change your look.",
      price: 60,
      duration: 90
    },
    {
      title: "Facial Treatment",
      description: "Rejuvenating facial treatment designed specifically for men's skin.",
      price: 50,
      duration: 45
    },
    {
      title: "Head Massage",
      description: "Relaxing scalp and neck massage to relieve tension.",
      price: 30,
      duration: 20
    }
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Our Services" 
            subtitle="Premium grooming options for the modern gentleman"
            center
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            At CleanCut, we offer a comprehensive range of barbering services to keep you looking your best. From classic cuts to premium shaves and grooming treatments, our skilled barbers deliver exceptional results.
          </motion.p>
        </div>
      </section>

      {/* Haircuts Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-accent pb-2">Haircuts & Styling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {haircuts.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Shaves Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-accent pb-2">Shaves & Beard Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shaves.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-accent pb-2">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additional.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <SectionTitle 
            title="Ready to Look Your Best?" 
            subtitle="Book an appointment today and experience the CleanCut difference"
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

export default Services