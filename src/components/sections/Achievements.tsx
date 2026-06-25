import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "5+", icon: Trophy, color: "text-blue-500" },
  { label: "Technologies Learned", value: "13+", icon: Zap, color: "text-indigo-500" },
  { label: "Certifications", value: "6+", icon: Star, color: "text-violet-500" },
  { label: "Dedication", value: "100%", icon: Target, color: "text-purple-500" },
];

const achievements = [
  {
    title: "Academic Excellence",
    description: "Top performer in programming and computer science coursework consistently throughout semesters.",
    icon: Trophy
  },
  {
    title: "Project Innovation",
    description: "Successfully developed and deployed an AI-powered verification system demonstrating practical ML application.",
    icon: Zap
  },
  {
    title: "Continuous Learner",
    description: "Completed 6+ industry-recognized online certifications in modern web technologies and AI fundamentals.",
    icon: Star
  },
  {
    title: "Open Source Advocate",
    description: "Active GitHub contributor, exploring collaborative development and maintaining a consistent learning streak.",
    icon: Target
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
              <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-background border border-border hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}