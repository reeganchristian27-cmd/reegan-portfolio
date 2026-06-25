import { motion } from "framer-motion";
import { Monitor, Smartphone, PenTool, Layout, Palette, Cpu } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, performant, and scalable full-stack web applications using modern tech stacks like React, Node.js, and modern databases."
  },
  {
    icon: Layout,
    title: "Front-End Development",
    description: "Crafting pixel-perfect, interactive user interfaces with modern CSS frameworks, animations, and component-driven architecture."
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Designing user-centered interfaces with Figma, focusing on usability, accessibility, and intuitive user experiences."
  },
  {
    icon: PenTool,
    title: "Portfolio Design",
    description: "Creating professional, bespoke portfolio websites for developers, creatives, and professionals to showcase their work effectively."
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Developing cohesive visual identities including logo design, color systems, typography, and brand guidelines."
  },
  {
    icon: Cpu,
    title: "AI Application Development",
    description: "Integrating machine learning models and intelligent automation features into applications to solve complex problems."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            What I can do for you. Providing high-quality solutions across development and design domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-primary font-medium text-sm flex items-center">
                Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}