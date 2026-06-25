import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-0">
            {/* Timeline Line (Desktop only) */}
            <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            {/* Timeline Line (Mobile) */}
            <div className="sm:hidden absolute left-[15px] top-0 bottom-0 w-px bg-border" />

            {/* Entry 1 — College (right side) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative sm:w-1/2 sm:ml-auto sm:pl-10 pb-12"
            >
              <div className="absolute left-[-21px] sm:left-[-6px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    Currently Pursuing
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">B.Tech — Computer and Communication Engineering</h3>
                <h4 className="text-lg text-muted-foreground font-medium mb-4">Sri Manakula Vinayagar Engineering College</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-primary/70" /><span>2024 – 2028</span></div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-primary/70" /><span>Puducherry, India</span></div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Award size={16} className="text-primary" /> Key Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "OOPS", "DBMS", "AI/ML", "Computer Networks"].map((s, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 hover:border-primary/30 transition-colors">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Entry 2 — School (left side) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative sm:w-1/2 sm:pr-10 pb-8"
            >
              <div className="absolute left-[-21px] sm:right-[-6px] sm:left-auto top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-background z-10" />
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-600" />
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-500/10 p-3 rounded-xl text-indigo-500">
                    <GraduationCap size={24} />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border">
                    Completed 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">Higher Secondary School (Computer Science)</h3>
                <h4 className="text-lg text-muted-foreground font-medium mb-4">Seventh Day Adventist Higher Secondary School</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-indigo-500/70" /><span>2010 – 2024</span></div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-indigo-500/70" /><span>Puducherry, India</span></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50">10th Std — 65%</span>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50">12th Std — 75%</span>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50">Computer Science Group</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}