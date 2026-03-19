import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, Link as LinkIcon } from "lucide-react";
import { mockResources } from "@/data/mock";

const subjects = ["All", "Computer Science", "Mathematics", "Electronics", "Physics"];

export default function ResourcesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = mockResources.filter((r) => {
    const matchSubject = filter === "All" || r.subject === filter;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.subject.toLowerCase().includes(search.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
        <h1 className="font-heading text-2xl font-bold text-foreground">Study Resources</h1>
        <p className="text-sm text-muted-foreground">Notes, guides, and learning materials</p>
      </motion.div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search resources..."
          className="w-full bg-card shadow-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {subjects.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === s ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((res, i) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl shadow-card p-4 flex items-center gap-4 hover:shadow-card-hover transition-shadow"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${res.type === "PDF" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
              {res.type === "PDF" ? <FileText className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-sm text-card-foreground truncate">{res.title}</h3>
              <p className="text-xs text-muted-foreground">{res.subject} · by {res.author} · {res.uploadedAt}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-muted-foreground hidden sm:block">{res.downloads} ↓</span>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
