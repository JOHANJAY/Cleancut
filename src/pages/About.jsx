import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import BarberCard from "../components/BarberCard";
import { motion } from "framer-motion";

function About() {
  const barbers = [
    {
      name: "James Wilson",
      role: "Master Barber & Founder",
      image:
        "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of experience, James founded CleanCut to provide premium barbering services with a modern twist.",
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Barber",
      image:
        "https://images.pexels.com/photos/1688948/pexels-photo-1688948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael specializes in classic cuts and hot towel shaves. His attention to detail ensures every client leaves looking their best.",
    },
    {
      name: "David Chen",
      role: "Style Specialist",
      image:
        "https://images.unsplash.com/photo-1691493506847-a0bebef35474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "David is our trendsetter, keeping up with the latest styles and techniques to give you the most current looks.",
    },
    {
      name: "Robert Johnson",
      role: "Beard Expert",
      image:
        "https://images.pexels.com/photos/2896366/pexels-photo-2896366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Robert is our beard grooming specialist, making sure your facial hair is perfectly shaped and maintained.",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="Tradition meets innovation at CleanCut"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-gray-600 mb-6">
                  Founded in 2015, CleanCut began with a simple mission: to
                  provide exceptional grooming services in an environment that
                  combines the nostalgia of a traditional barbershop with the
                  comfort and style of a modern establishment.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, James Wilson, trained in the classic barbering
                  traditions before bringing his skills and vision to life with
                  CleanCut. What started as a small two-chair shop has grown
                  into the premier destination for men's grooming in the city.
                </p>
                <p className="text-gray-600">
                  Every client who walks through our doors becomes part of our
                  story, and we're committed to making sure each chapter is
                  defined by quality, satisfaction, and style.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Barbershop vintage"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our craft"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality. From our tools to our techniques, everything is selected and performed with excellence in mind.",
                icon: "🏆",
              },
              {
                title: "Authenticity",
                description:
                  "We stay true to the classic barbering traditions while embracing innovations that enhance the experience and results.",
                icon: "✅",
              },
              {
                title: "Community",
                description:
                  "Our barbershop is more than a business; it's a community hub where clients become friends and every visit feels like coming home.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Meet Our Expert Barbers"
            subtitle="The skilled professionals behind every great haircut"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barbers.map((barber, index) => (
              <BarberCard key={index} barber={barber} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default About;
