import { motion } from 'framer-motion'

function ServiceCard({ service }) {
  const { title, description, price, duration } = service

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-accent font-bold">${price}</div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">Duration: {duration} min</div>
      </div>
    </motion.div>
  )
}

export default ServiceCard