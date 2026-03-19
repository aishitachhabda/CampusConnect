import type { Event, Club, Post, Resource, UserProfile } from "@/types";

export const mockEvents: Event[] = [
  { id: "1", title: "TechFest 2026", description: "Annual technology festival featuring hackathons, workshops, and tech talks from industry leaders.", date: "2026-04-15", time: "10:00 AM", venue: "Main Auditorium", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", category: "Tech", attendees: 234, registered: false },
  { id: "2", title: "Cultural Night", description: "Celebrate diversity with performances, art exhibitions, and food from around the world.", date: "2026-04-20", time: "6:00 PM", venue: "Open Air Theatre", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", category: "Cultural", attendees: 189, registered: true },
  { id: "3", title: "Startup Pitch Day", description: "Present your startup idea to investors and mentors. Win funding and incubation support.", date: "2026-04-25", time: "2:00 PM", venue: "Innovation Lab", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", category: "Business", attendees: 78, registered: false },
  { id: "4", title: "Sports Meet 2026", description: "Inter-college sports championship with cricket, football, basketball and more.", date: "2026-05-01", time: "8:00 AM", venue: "Sports Complex", image: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80", category: "Sports", attendees: 312, registered: false },
];

export const mockClubs: Club[] = [
  { id: "1", name: "Code Club", description: "Learn to code, build projects, and compete in hackathons together.", members: 156, category: "Tech", avatar: "💻", joined: true },
  { id: "2", name: "Photography Society", description: "Capture moments, learn editing, and showcase your work in exhibitions.", members: 89, category: "Creative", avatar: "📸", joined: false },
  { id: "3", name: "Debate Club", description: "Sharpen your arguments and public speaking skills through weekly debates.", members: 67, category: "Academic", avatar: "🎤", joined: false },
  { id: "4", name: "Music Band", description: "Jam sessions, gigs, and music production. All genres welcome!", members: 45, category: "Creative", avatar: "🎵", joined: true },
  { id: "5", name: "Entrepreneurship Cell", description: "Build your startup from idea to execution with mentorship and resources.", members: 112, category: "Business", avatar: "🚀", joined: false },
  { id: "6", name: "Robotics Lab", description: "Design, build, and program robots for competitions and research.", members: 73, category: "Tech", avatar: "🤖", joined: false },
];

export const mockPosts: Post[] = [
  { id: "1", author: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=1", branch: "CSE, 3rd Year" }, content: "Just finished building my first full-stack app! 🚀 The hackathon prep is going amazing. Who else is joining TechFest?", likes: 42, comments: 8, liked: true, createdAt: "2h ago" },
  { id: "2", author: { name: "Arjun Patel", avatar: "https://i.pravatar.cc/150?img=3", branch: "ECE, 2nd Year" }, content: "Study group for Digital Electronics exam this Friday? Meet at Library Block B, 4 PM. Drop a comment if you're in! 📚", likes: 28, comments: 15, liked: false, createdAt: "4h ago" },
  { id: "3", author: { name: "Sneha Reddy", avatar: "https://i.pravatar.cc/150?img=5", branch: "Design, 4th Year" }, content: "Check out the poster I designed for Cultural Night! Let me know what you think 🎨", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", likes: 67, comments: 12, liked: false, createdAt: "6h ago" },
  { id: "4", author: { name: "Rahul Kumar", avatar: "https://i.pravatar.cc/150?img=7", branch: "ME, 3rd Year" }, content: "Our robotics team just qualified for nationals! 🤖🏆 Thanks to everyone who supported us. Next stop: IIT Delhi!", likes: 93, comments: 21, liked: true, createdAt: "1d ago" },
];

export const mockResources: Resource[] = [
  { id: "1", title: "Data Structures Notes - Complete", subject: "Computer Science", type: "PDF", author: "Prof. Kumar", downloads: 342, uploadedAt: "2 days ago" },
  { id: "2", title: "Linear Algebra Cheat Sheet", subject: "Mathematics", type: "PDF", author: "Ankit Singh", downloads: 189, uploadedAt: "1 week ago" },
  { id: "3", title: "Digital Electronics Lab Manual", subject: "Electronics", type: "PDF", author: "Prof. Reddy", downloads: 156, uploadedAt: "3 days ago" },
  { id: "4", title: "Machine Learning Tutorial Series", subject: "Computer Science", type: "Link", author: "AI Club", downloads: 278, uploadedAt: "5 days ago" },
  { id: "5", title: "Physics Formula Reference", subject: "Physics", type: "PDF", author: "Meera Joshi", downloads: 445, uploadedAt: "1 week ago" },
];

export const mockProfile: UserProfile = {
  id: "1",
  name: "Alex Johnson",
  branch: "Computer Science",
  year: "3rd Year",
  bio: "Full-stack dev | Open source contributor | Coffee enthusiast ☕",
  avatar: "https://i.pravatar.cc/150?img=12",
  skills: ["React", "TypeScript", "Python", "UI/UX Design"],
  interests: ["Hackathons", "Music", "Photography", "AI/ML"],
};

export const mockProfiles: UserProfile[] = [
  mockProfile,
  { id: "2", name: "Priya Sharma", branch: "CSE", year: "3rd Year", bio: "Building the future, one line at a time", avatar: "https://i.pravatar.cc/150?img=1", skills: ["Java", "Spring Boot", "AWS"], interests: ["Coding", "Dance", "Travel"] },
  { id: "3", name: "Arjun Patel", branch: "ECE", year: "2nd Year", bio: "Circuits & coffee", avatar: "https://i.pravatar.cc/150?img=3", skills: ["VLSI", "Embedded", "C++"], interests: ["Robotics", "Gaming", "Cricket"] },
  { id: "4", name: "Sneha Reddy", branch: "Design", year: "4th Year", bio: "Designing experiences that matter ✨", avatar: "https://i.pravatar.cc/150?img=5", skills: ["Figma", "Illustrator", "Branding"], interests: ["Art", "Photography", "Yoga"] },
];
