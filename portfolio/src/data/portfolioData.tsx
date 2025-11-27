import { Facebook, Twitter, Instagram, Linkedin, Monitor, Camera, Printer } from 'lucide-react';
import myImage from '../assets/myNew.jpg';

export const DATA = {
  theme: {
    primary: "bg-yellow-400",
    primaryText: "text-yellow-400",
    dark: "bg-zinc-900",
    light: "bg-gray-100",
  },
  profile: {
    name: "NEVINDI SADEERA",
    firstName: "NEVINDI",
    lastName: "SADEERA",
    role: "TRAINEE FULL STACK DEVELOPER | UI/UX DESIGNER",
    shortBio: "I'm a dedicated IT undergraduate with a strong foundation in problem-solving, critical thinking, and communication, passionate about full-stack development.",
    longBio: "I am a dedicated and fast-learning IT undergraduate with a strong foundation in problem-solving, critical thinking, and communication. I am passionate about expanding my technical skills across various domains in the IT field and enjoy applying knowledge to real-world projects. My self-driven learning mindset allows me to quickly adapt to new tools and technologies, stay updated with industry trends, and continuously grow both personally and professionally.",
    mainImage: myImage, 
    sidebarImage: myImage,
    email: "nevindisadeera@gmail.com",
    phone: "+94-76 3862252",
    address: "Nevindi, Navimana-South, Matara",
  },
  social: [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
  ],
  services: [
    {
      title: "PRINT DESIGN",
      icon: <Printer size={32} />,
      desc: "Creating stunning print materials including brochures, business cards, and posters that leave a lasting impression."
    },
    {
      title: "WEB DESIGN",
      icon: <Monitor size={32} />,
      desc: "Designing responsive, modern, and user-friendly websites that look great on all devices."
    },
    {
      title: "PHOTOGRAPHY",
      icon: <Camera size={32} />,
      desc: "Professional photography services for events, portraits, and commercial products."
    }
  ],
  stats: [
    { value: "10+", label: "YEARS EXPERIENCE" },
    { value: "450", label: "PROJECTS DONE" },
    { value: "65", label: "AWARDS WON" },
    { value: "300+", label: "HAPPY CLIENTS" },
  ],
  resume: {
    education: [
      { year: "2018 - 2020", degree: "Master in Graphics", school: "New York University", desc: "Specialized in advanced typography and brand identity systems." },
      { year: "2015 - 2018", degree: "Bachelor of Arts", school: "London Art Institute", desc: "Graduated with honors. Focused on visual communication and digital media." },
      { year: "2014 - 2015", degree: "Diploma in Design", school: "Design Academy", desc: "Foundation course in design principles and color theory." },
    ],
    experience: [
      { year: "2020 - Present", role: "Senior Designer", company: "Creative Agency", desc: "Leading a team of designers to deliver high-quality creative solutions for global clients." },
      { year: "2018 - 2020", role: "Web Designer", company: "Tech Solutions Inc.", desc: "Designed user interfaces for web and mobile applications, focusing on UX best practices." },
      { year: "2016 - 2018", role: "Junior Designer", company: "StartUp Hub", desc: "Assisted in the creation of marketing materials and social media graphics." },
    ]
  },
  portfolio: [
    { id: 1, title: "Modern Brand", category: "print", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Dark UI Kit", category: "web", img: "https://images.unsplash.com/photo-1555421689-492633762719?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Portrait Session", category: "photo", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Magazine Layout", category: "print", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "E-commerce App", category: "web", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Urban Shot", category: "photo", img: "https://images.unsplash.com/photo-1517799094727-4843e50936e2?auto=format&fit=crop&q=80&w=800" },
  ],
  testimonials: [
    { name: "Alex Doe", role: "CEO, Company", text: "Sarita is an incredible designer. She understood our vision perfectly and delivered beyond expectations.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Jane Smith", role: "Marketing Director", text: "Professional, creative, and timely. The rebranding project was a huge success thanks to her work.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
    { name: "Mike Johnson", role: "Developer", text: "Great understanding of web constraints. Her designs were easy to implement and looked amazing.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  ]
};