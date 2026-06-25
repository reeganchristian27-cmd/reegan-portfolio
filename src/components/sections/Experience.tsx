import { motion } from "framer-motion";
import { Briefcase, BookOpen, GitMerge } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Mindenious",
    role: "Data Analytics Intern",
    date: "Apr 2026 – May 2026",
    description: "Completed a hands-on Data Analytics internship at Mindenious. Analysed telecom customer data to identify churn drivers and high-risk segments. Cleaned and processed raw datasets, built classification models, visualised results, and delivered stakeholder reports. Earned both a Training and Internship certificate.",
    skills: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Data Analytics", "Classification Models"],
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Independent ML Projects",
    role: "Self-Directed Developer",
    date: "Jan 2026 – May 2026",
    description: "Built end-to-end machine learning projects independently. Developed a content-based Movie Recommendation System using collaborative filtering and Streamlit, and a House Price Prediction regression model with full EDA, feature engineering, and model evaluation (MAE, RMSE).",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    icon: GitMerge,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Journey</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-0"
              >
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[15px] sm:left-8 top-14 bottom-[-32px] w-px bg-border" />
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
                  {/* Icon */}
                  <div className="absolute left-[-17px] sm:relative sm:left-0 w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-card border border-border shadow-sm z-10 group hover:border-primary transition-colors">
                    <exp.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full w-fit">
                        {exp.date}
                      </span>
                    </div>
                    
                    <h4 className="text-base text-foreground font-medium mb-4">{exp.role}</h4>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}