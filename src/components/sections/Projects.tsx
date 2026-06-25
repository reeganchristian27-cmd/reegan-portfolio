import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Map, Users, ShieldCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description: "Built a content-based machine learning movie recommendation system using Python and Streamlit. Applied collaborative filtering with Scikit-learn for similarity modelling, with an interactive web app for personalised movie suggestions.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Collaborative Filtering"],
    category: "AI",
    icon: ShieldCheck,
    color: "from-violet-500 to-purple-600",
    date: "May 2026",
    links: { github: "https://github.com/reeganchristian27-cmd", live: "#" }
  },
  {
    id: 2,
    title: "House Price Prediction",
    description: "Developed a regression model to predict housing prices from structured tabular data. Performed exploratory data analysis, feature engineering, and model evaluation using MAE and RMSE metrics. Hands-on experience in supervised learning workflows.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    category: "AI",
    icon: Map,
    color: "from-blue-500 to-indigo-600",
    date: "May 2026",
    links: { github: "https://github.com/reeganchristian27-cmd", live: "#" }
  },
  {
    id: 3,
    title: "Customer Churn Analysis",
    description: "Analysed telecom customer data to identify churn drivers and high-risk customer segments. Cleaned and processed raw datasets, built classification models, and visualised results for stakeholder reporting — completed during internship at Mindenious.",
    tech: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib"],
    category: "AI",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    date: "Apr 2026 · Mindenious Internship",
    links: { github: "https://github.com/reeganchristian27-cmd", live: "#" }
  },
  {
    id: 4,
    title: "Brand Identity & Design Portfolio",
    description: "Created professional brand identity systems, social media thumbnails, and visual design assets using Canva. Developed cohesive branding — logos, colour palettes, typography, and marketing visuals — for personal and academic projects.",
    tech: ["Canva", "Thumbnail Design", "Brand Identity", "Visual Design", "Social Media"],
    category: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    date: "2025 – Present",
    links: { github: "https://github.com/reeganchristian27-cmd", live: "#" }
  }
];

const categories = ["All", "AI", "Design"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8" />
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Header Image Area */}
                <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                  <project.icon className="w-20 h-20 text-white/90 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground" asChild>
                      <a href={project.links.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground" asChild>
                      <a href={project.links.live} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
                    </Button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}