import { motion } from 'framer-motion'

function BarberCard({ barber }) {
  const { name, role, image, bio } = barber

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="text-accent font-medium mb-4">{role}</div>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  )
}

export default BarberCard