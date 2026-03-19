export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  category: string;
  attendees: number;
  registered?: boolean;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  avatar: string;
  joined?: boolean;
}

export interface Post {
  id: string;
  author: { name: string; avatar: string; branch: string };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  liked?: boolean;
  createdAt: string;
}

export interface Resource {
  id: string;
  title: string;
  subject: string;
  type: string;
  author: string;
  downloads: number;
  uploadedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  branch: string;
  year: string;
  bio: string;
  avatar: string;
  skills: string[];
  interests: string[];
}
