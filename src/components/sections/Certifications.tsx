import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    id: 1,
    title: "Data Analytics Training",
    issuer: "Mindenious",
    badge: "MIND-TRN-353",
    date: "Mar – Apr 2026 · Issued 04 May 2026",
    link: "#"
  },
  {
    id: 2,
    title: "Data Analytics Internship",
    issuer: "Mindenious",
    badge: "MIND-INT-353",
    date: "Apr – May 2026 · Issued 04 May 2026",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <ShieldCheck size={100} className="text-primary/20 -rotate-12 translate-x-4 -translate-y-4" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Award size={24} />
                </div>
                
                <h3 className="text-lg font-bold mb-2 pr-8">{cert.title}</h3>
                
                <div className="flex items-center justify-between mt-auto pt-6">
                  <span className="text-sm font-medium text-muted-foreground">{cert.issuer}</span>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs hover:text-primary group-hover:bg-primary/10" asChild>
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      View <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}