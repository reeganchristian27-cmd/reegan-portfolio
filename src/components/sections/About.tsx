import { motion } from "framer-motion";
import { Code, Server, Cpu, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Avatar/Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 shadow-xl group">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              <img
                src="/profile.jpg"
                alt="Reegan Christian"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>
                I'm Reegan Christian, a B.Tech Computer and Communication Engineering student at Sri Manakula Vinayagar Engineering College (2024–2028). I'm skilled in Python, SQL, and data analytics tools with hands-on experience in data cleaning, exploratory data analysis, and building predictive models.
              </p>
              <p>
                Passionate about turning raw data into meaningful insights, I completed an internship and training in Data Analytics at Mindenious. I'm eager to contribute to data-driven projects and grow in the field of analytics and machine learning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center">
                <Server className="w-5 h-5 mr-2 text-primary" /> Career Objective
              </h3>
              <p className="text-muted-foreground">
                To secure a challenging role in data analytics or machine learning that allows me to apply my skills in Python, SQL, and predictive modelling — contributing meaningfully to data-driven decision making and business growth.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { label: "Projects", value: "4+", icon: Code },
                { label: "Technologies", value: "10+", icon: Database },
                { label: "Learning", value: "2 Yrs", icon: Server },
                { label: "Passion", value: "∞", icon: Cpu },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-background/30 border border-border/30 hover:border-primary/30 transition-colors text-center group">
                  <stat.icon className="w-6 h-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-foreground mb-1">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}