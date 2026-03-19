import { useState } from "react";
import { motion } from "framer-motion";
import { Users, LogIn, LogOut } from "lucide-react";
import { mockClubs } from "@/data/mock";

const categories = ["All", "Tech", "Creative", "Academic", "Business"];

export default function ClubsPage() {
  const [filter, setFilter] = useState("All");
  const [clubs, setClubs] = useState(mockClubs);

  const filtered = filter === "All" ? clubs : clubs.filter((c) => c.category === filter);

  const toggleJoin = (id: string) => {
    setClubs(clubs.map((c) =>
      c.id === id ? { ...c, joined: !c.joined, members: c.joined ? c.members - 1 : c.members + 1 } : c
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
        <h1 className="font-heading text-2xl font-bold text-foreground">Clubs & Communities</h1>
        <p className="text-sm text-muted-foreground">Find your tribe on campus</p>
      </motion.div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === cat ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((club, i) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl shadow-card p-5 space-y-3 hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{club.avatar}</span>
              <div>
                <h3 className="font-heading font-bold text-card-foreground">{club.name}</h3>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{club.category}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{club.description}</p>
            <div className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5" />{club.members} members
              </span>
              <button
                onClick={() => toggleJoin(club.id)}
                className={`flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-lg transition-all ${
                  club.joined
                    ? "bg-secondary text-secondary-foreground hover:bg-destructive/10 hover:text-destructive"
                    : "gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {club.joined ? <><LogOut className="w-3.5 h-3.5" />Leave</> : <><LogIn className="w-3.5 h-3.5" />Join</>}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
