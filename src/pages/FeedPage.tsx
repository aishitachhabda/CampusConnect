import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Image, Plus } from "lucide-react";
import { mockPosts, mockEvents } from "@/data/mock";
import type { Post } from "@/types";

function PostCard({ post, index }: { post: Post; index: number }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-card rounded-xl shadow-card p-4 space-y-3"
    >
      <div className="flex items-center gap-3">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-heading font-semibold text-sm text-card-foreground">{post.author.name}</p>
          <p className="text-xs text-muted-foreground">{post.author.branch} · {post.createdAt}</p>
        </div>
      </div>
      <p className="text-sm text-card-foreground leading-relaxed">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="" className="w-full rounded-lg object-cover max-h-64" />
      )}
      <div className="flex items-center gap-4 pt-1">
        <button onClick={toggleLike} className={`flex items-center gap-1.5 text-sm transition-colors ${liked ? "text-accent" : "text-muted-foreground hover:text-accent"}`}>
          <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          {likes}
        </button>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-4 h-4" />
          {post.comments}
        </button>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function UpcomingEventMini() {
  const event = mockEvents[0];
  return (
    <div className="bg-card rounded-xl shadow-card p-4 space-y-3">
      <h3 className="font-heading font-semibold text-sm text-card-foreground">🔥 Upcoming</h3>
      <div className="flex gap-3">
        <img src={event.image} alt={event.title} className="w-16 h-16 rounded-lg object-cover" />
        <div>
          <p className="font-heading font-semibold text-sm text-card-foreground">{event.title}</p>
          <p className="text-xs text-muted-foreground">{event.date} · {event.venue}</p>
          <p className="text-xs text-primary font-medium mt-1">{event.attendees} going</p>
        </div>
      </div>
    </div>
  );
}

export default function FeedPage() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
        <h1 className="font-heading text-2xl font-bold text-foreground">Your Feed</h1>
        <p className="text-sm text-muted-foreground">See what's happening on campus</p>
      </motion.div>

      {/* Create post */}
      <div className="bg-card rounded-xl shadow-card p-4 space-y-3">
        <div className="flex gap-3">
          <img src="https://i.pravatar.cc/150?img=12" alt="" className="w-10 h-10 rounded-full object-cover" />
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            rows={2}
            className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Image className="w-4 h-4" /> Photo
          </button>
          <button className="gradient-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity">
            Post
          </button>
        </div>
      </div>

      {/* Upcoming event widget (mobile) */}
      <div className="md:hidden">
        <UpcomingEventMini />
      </div>

      <div className="grid md:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-4">
          {mockPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>
        <aside className="hidden md:block space-y-4">
          <UpcomingEventMini />
          <div className="bg-card rounded-xl shadow-card p-4 space-y-3">
            <h3 className="font-heading font-semibold text-sm text-card-foreground">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["#TechFest", "#Hackathon", "#StudyGroup", "#CulturalNight", "#Placements"].map((tag) => (
                <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
