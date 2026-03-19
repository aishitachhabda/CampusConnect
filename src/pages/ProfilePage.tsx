import { motion } from "framer-motion";
import { MapPin, BookOpen, Sparkles, Edit } from "lucide-react";
import { mockProfile } from "@/data/mock";

export default function ProfilePage() {
  const p = mockProfile;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl shadow-card overflow-hidden"
      >
        <div className="h-28 gradient-hero" />
        <div className="px-6 pb-6 -mt-12 space-y-4">
          <div className="flex items-end justify-between">
            <img src={p.avatar} alt={p.name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-card shadow-lg" />
            <button className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors">
              <Edit className="w-3.5 h-3.5" />Edit Profile
            </button>
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-card-foreground">{p.name}</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />{p.branch} · {p.year}
            </p>
          </div>
          <p className="text-sm text-card-foreground">{p.bio}</p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl shadow-card p-5 space-y-3">
          <h2 className="font-heading font-semibold text-sm text-card-foreground flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-accent" />Skills</h2>
          <div className="flex flex-wrap gap-2">
            {p.skills.map((skill) => (
              <span key={skill} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-xl shadow-card p-5 space-y-3">
          <h2 className="font-heading font-semibold text-sm text-card-foreground flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" />Interests</h2>
          <div className="flex flex-wrap gap-2">
            {p.interests.map((interest) => (
              <span key={interest} className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">{interest}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl shadow-card p-5 space-y-3">
        <h2 className="font-heading font-semibold text-sm text-card-foreground">Activity Stats</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-heading text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-accent">3</p>
            <p className="text-xs text-muted-foreground">Events</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-primary">2</p>
            <p className="text-xs text-muted-foreground">Clubs</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
