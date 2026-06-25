import { motion } from "framer-motion";
import { GitCommit, Github, GitPullRequest, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GitHubStats() {
  // Generate dummy heatmap data
  const generateHeatmap = () => {
    const cols = 52; // roughly a year of weeks
    const rows = 7;
    const grid = [];
    
    for (let c = 0; c < cols; c++) {
      const colDots = [];
      for (let r = 0; r < rows; r++) {
        // Random intensity 0-4
        const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
        colDots.push(intensity);
      }
      grid.push(colDots);
    }
    return grid;
  };

  const heatmap = generateHeatmap();

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">GitHub Activity</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </div>
          
          <Button variant="outline" className="w-fit border-primary/20 hover:bg-primary/10 gap-2">
            <Github size={18} />
            @c-reegan
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Commits", value: "50+", icon: GitCommit, color: "text-emerald-500" },
              { label: "Repositories", value: "5+", icon: Github, color: "text-blue-500" },
              { label: "Stars Earned", value: "2+", icon: Star, color: "text-amber-500" },
              { label: "Pull Requests", value: "1+", icon: GitPullRequest, color: "text-purple-500" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border flex flex-col justify-center items-center text-center">
                <stat.icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Activity Graph placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Contributions in the last year</h3>
            
            <div className="w-full overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-[700px]">
                {heatmap.map((col, cIndex) => (
                  <div key={cIndex} className="flex flex-col gap-1">
                    {col.map((intensity, rIndex) => (
                      <div 
                        key={rIndex} 
                        className={`w-3 h-3 rounded-sm ${
                          intensity === 0 ? "bg-secondary" :
                          intensity === 1 ? "bg-emerald-900/40 dark:bg-emerald-900/60" :
                          intensity === 2 ? "bg-emerald-700/60 dark:bg-emerald-700" :
                          intensity === 3 ? "bg-emerald-500/80 dark:bg-emerald-500" :
                          "bg-emerald-400 dark:bg-emerald-400"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Learn how we count contributions</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-secondary" />
                  <div className="w-3 h-3 rounded-sm bg-emerald-900/40" />
                  <div className="w-3 h-3 rounded-sm bg-emerald-700/60" />
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/80" />
                  <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Most Used Languages</h3>
            
            <div className="h-4 w-full rounded-full overflow-hidden flex mb-4">
              <div className="h-full bg-yellow-400" style={{ width: "35%" }} />
              <div className="h-full bg-blue-500" style={{ width: "25%" }} />
              <div className="h-full bg-cyan-400" style={{ width: "20%" }} />
              <div className="h-full bg-gray-400" style={{ width: "12%" }} />
              <div className="h-full bg-purple-500" style={{ width: "8%" }} />
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"/> JavaScript (35%)</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"/> Python (25%)</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-400"/> React (20%)</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gray-400"/> C (12%)</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"/> Other (8%)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}