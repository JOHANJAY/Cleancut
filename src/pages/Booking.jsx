import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { supabase } from '../supabase/client'

function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  
  const services = [
    "Classic Cut",
    "Fade",
    "Skin Fade",
    "Cut & Beard Trim",
    "Hot Towel Shave",
    "Beard Trim",
    "Beard Sculpting",
    "Hair Coloring",
    "Facial Treatment",
    "Head Massage"
  ]
  
  const barbers = [
    "James Wilson",
    "Michael Rodriguez",
    "David Chen",
    "Robert Johnson"
  ]
  
  // Generate available time slots from 9am to 8pm
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 20; hour++) {
      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12
      const amPm = hour < 12 ? 'AM' : 'PM'
      slots.push(`${hourFormatted}:00 ${amPm}`)
      slots.push(`${hourFormatted}:30 ${amPm}`)
    }
    return slots
  }
  
  const timeSlots = generateTimeSlots()
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([data])
      
      if (error) throw error
      
      // If successful, show success message and reset form
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitError('There was an error submitting your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Book Your Appointment" 
            subtitle="Reserve your spot for a premium grooming experience"
            center
          />
          
          {submitSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-xl mx-auto mb-8"
            >
              <p className="text-center">
                <strong>Booking Successful!</strong> We've received your appointment request and will confirm shortly. Thank you for choosing CleanCut!
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 btn btn-primary w-full"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md"
            >
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                  <p>{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      id="date"
                      type="date"
                      {...register('date', { required: 'Date is required' })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <p className="error-message">{errors.date.message}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <select
                      id="time"
                      {...register('time', { required: 'Time is required' })}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="error-message">{errors.time.message}</p>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    {...register('service', { required: 'Service is required' })}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="error-message">{errors.service.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="barber">Preferred Barber</label>
                  <select
                    id="barber"
                    {...register('barber')}
                  >
                    <option value="">No preference</option>
                    {barbers.map((barber, index) => (
                      <option key={index} value={barber}>
                        {barber}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="notes">Additional Notes (Optional)</label>
                  <textarea
                    id="notes"
                    rows="3"
                    {...register('notes')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Booking Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center p-6"
            >
              <div className="text-accent text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 8pm</p>
              <p className="text-gray-600">Saturday: 10am - 6pm</p>
              <p className="text-gray-600">Sunday: 11am - 4pm</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-accent text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Booking Policy</h3>
              <p className="text-gray-600">Please arrive 10 minutes before your appointment. Late arrivals may result in reduced service time.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-accent text-4xl mb-4">❓</div>
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-gray-600">Call us at (123) 456-7890 or email us at booking@cleancut.com for assistance with your booking.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Booking