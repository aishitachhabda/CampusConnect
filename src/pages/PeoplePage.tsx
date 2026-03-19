import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { mockProfiles } from "@/data/mock";

export default function PeoplePage() {
  const [search, setSearch] = useState("");

  const filtered = mockProfiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.branch.toLowerCase().includes(search.toLowerCase()) ||
    p.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
        <h1 className="font-heading text-2xl font-bold text-foreground">People</h1>
        <p className="text-sm text-muted-foreground">Find and connect with fellow students</p>
      </motion.div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, branch, or skill..."
          className="w-full bg-card shadow-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((person, i) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl shadow-card p-5 text-center space-y-3 hover:shadow-card-hover transition-shadow"
          >
            <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full mx-auto object-cover ring-2 ring-primary/20" />
            <div>
              <h3 className="font-heading font-bold text-card-foreground">{person.name}</h3>
              <p className="text-xs text-muted-foreground">{person.branch} · {person.year}</p>
            </div>
            <p className="text-xs text-muted-foreground">{person.bio}</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {person.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="bg-primary/10 text-primary text-[10px] font-medium px-2 py-0.5 rounded-full">{skill}</span>
              ))}
            </div>
            <button className="w-full py-1.5 rounded-lg text-sm font-medium border border-primary/20 text-primary hover:bg-primary/5 transition-colors">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
