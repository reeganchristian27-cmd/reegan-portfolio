import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Code2, Monitor, Database, Terminal, Cpu, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "MySQL", "Canva", "Thumbnail Design"]
  },
  {
    title: "Data & Analytics",
    icon: Monitor,
    skills: ["Data Cleaning & EDA", "Predictive Modelling", "MS Excel", "Streamlit"]
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Vibe Coding"]
  },
  {
    title: "CS Fundamentals",
    icon: Lightbulb,
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS"]
  },
  {
    title: "Emerging Tech",
    icon: Cpu,
    skills: ["Machine Learning", "Artificial Intelligence", "Collaborative Filtering"]
  }
];

const technicalSkills = [
  { name: "Python", value: 85 },
  { name: "Pandas & NumPy", value: 82 },
  { name: "MySQL", value: 78 },
  { name: "Data Cleaning & EDA", value: 83 },
  { name: "Scikit-learn", value: 75 },
  { name: "Predictive Modelling", value: 72 },
  { name: "Matplotlib & Seaborn", value: 80 },
  { name: "Streamlit", value: 70 },
  { name: "MS Excel", value: 75 },
  { name: "Git & GitHub", value: 78 },
  { name: "Machine Learning", value: 70 },
  { name: "C Programming", value: 72 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiency levels across various domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Category Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={16} />
              </span>
              Skill Categories
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Bars */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <Terminal size={16} />
              </span>
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}