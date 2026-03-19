import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Check } from "lucide-react";
import { mockEvents } from "@/data/mock";

const categories = ["All", "Tech", "Cultural", "Business", "Sports"];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const [events, setEvents] = useState(mockEvents);

  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  const toggleRegister = (id: string) => {
    setEvents(events.map((e) =>
      e.id === id ? { ...e, registered: !e.registered, attendees: e.registered ? e.attendees - 1 : e.attendees + 1 } : e
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
        <h1 className="font-heading text-2xl font-bold text-foreground">Events</h1>
        <p className="text-sm text-muted-foreground">Discover what's happening on campus</p>
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

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl shadow-card overflow-hidden group hover:shadow-card-hover transition-shadow"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-card/90 text-card-foreground text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {event.category}
              </span>
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-heading font-bold text-card-foreground">{event.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{event.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.venue}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3.5 h-3.5" />{event.attendees} going
                </span>
                <button
                  onClick={() => toggleRegister(event.id)}
                  className={`flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-lg transition-all ${
                    event.registered
                      ? "bg-primary/10 text-primary"
                      : "gradient-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {event.registered && <Check className="w-3.5 h-3.5" />}
                  {event.registered ? "Registered" : "Register"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
