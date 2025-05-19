import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="We'd love to hear from you"
            center
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="text-accent text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-gray-600">123 Main Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@cleancut.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-2xl mr-4">⏰</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 8pm</p>
                    <p className="text-gray-600">Saturday: 10am - 6pm</p>
                    <p className="text-gray-600">Sunday: 11am - 4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl hover:text-accent">📱</a>
                  <a href="#" className="text-2xl hover:text-accent">📸</a>
                  <a href="#" className="text-2xl hover:text-accent">🐦</a>
                  <a href="#" className="text-2xl hover:text-accent">📘</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[400px] md:h-full"
            >
              {/* Replace with an actual map component or embedded map */}
              <div className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2037709517763!2d-73.98784738459473!3d40.74844797932838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8d3c57accc206!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1677677563900!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CleanCut Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionTitle 
              title="Send Us a Message" 
              subtitle="Got questions? We're here to help"
              center
            />
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions"
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do I need to make an appointment?",
                answer: "While we do accept walk-ins, we recommend booking an appointment to ensure you get your preferred time slot and barber."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, all major credit cards, Apple Pay, and Google Pay."
              },
              {
                question: "Is there parking available?",
                answer: "Yes, we have a small parking lot behind our shop and there's also street parking available."
              },
              {
                question: "Do you offer any special packages?",
                answer: "Yes, we offer various packages that combine different services at a discounted rate. Ask about our current specials when you book."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact