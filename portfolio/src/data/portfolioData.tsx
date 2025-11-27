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
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/nevindisadeera" },
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
    { value: "1.5+", label: "YEARS EXPERIENCE" },
    { value: "7", label: "PROJECTS DONE" },
    { value: "5", label: "TECHNOLOGIES" },
    { value: "100%", label: "DEDICATION" },
  ],
  resume: {
    education: [
      { year: "2023 - 2025", degree: "Higher National Diploma of Information & Communication Technology", school: "HNDIT-Labuduwa", desc: "Completed with 3.4+ GPA" },
      { year: "2022 - 2023", degree: " Diploma of Software Engineering ", school: "The Open University of Sri Lanka", desc: "Holded -To be continued as TopUP" },
      { year: "2021 AL", degree: "Physical Science", school: "St.Mary's Convent", desc: "RESULT:CCC" },
    ],
    experience: [
      { year: "2025 Septhember - Present", role: "Trainee FullStack Engineer", company: "BotCalm(PVT)LTD", desc: "Builing and Practising FullStack projects under the Tech Leads" },
      { year: "2024 October - January", role: "UI/UX Developer", company: "Souther Province Irrigation Department", desc: "Designed user interfaces for a website name IrriGo, focusing on UX best practices." },
      
      
    ]
  },
  portfolio: [
    { 
      id: 1, 
      title: "Agency Sample Website", 
      category: "web", 
      description: "Frontend Web Agency Sample Website- This is the first react frontend done by me",
      tech: "React Vite and Tailwind for styling",
      github: "https://github.com/Nevindiiii/1st_project",
      demo: "https://project-demo.com",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      title: "Token Site of Gaming", 
      category: "web", 
      description: "Frontend Gaming site named - MechaCore . Green on black themed website",
      tech: "React Vite and Tailwind for styling",
      github: "https://github.com/certix-tokens/MechaCore---T00193",
      demo: "https://mechacore-t00193.onrender.com/",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 3, 
      title: "Crypto site that named CaptainMEK", 
      category: "web", 
      description: "Frontend crypto coin site named - CaptainMEK . themed captainmEK and characters",
      tech: "React Vite and Tailwind for styling",
      github: "https://github.com/certix-tokens/CaptainMEK-T00197",
      demo: "https://captainmek-t00197.onrender.com/",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 4, 
      title: "My Portfolio", 
      category: "web", 
      description: "TailwindCSS for styling and some component styles",
      tech: "React Vite and Tailwind for styling",
      github: "https://github.com/Nevindiiii/Portfolio2025",
      demo: "https://captainmek-t00197.onrender.com/",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 5, 
      title: "My Final Year Project - speakUP", 
      category: "web", 
      description: "Full-stack MERN citizen complaint system for Sri Lanka. Citizens can raise complaints anonymously or with identity, while officers manage, track, and respond efficiently. Features: dashboards, file uploads, maps, chatbot, real-time updates, analytics.",
      tech: "React Vite and Tailwind for styling",
      github: "https://github.com/Nevindiiii/speakUP-FinalYearProject",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 6, 
      title: "MobileAPP - Expense Tracker", 
      category: "mobile", 
      description: "Full-stack Mobile App for track monthly salary and how we waste! AI chatbot will help you to manage your income!",
      tech: "React Native and NativeWind with AI chatbot",
      github: "https://github.com/Nevindiiii/expense-tracker-app",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 7, 
      title: "Inventory Management System", 
      category: "web", 
      description: "Full-stack Management System",
      tech: "React , Tailwind CSS, shadcn , react queries , zod zustand , Nodemailer and emailjs",
      github: "https://github.com/Nevindiiii/expense-tracker-app",
      img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800" 
    },
  ],
  testimonials: [
    { name: "Mrs. DNP Aththanayake", role: "Senior Lecturer, SLIATE", text: "Nevindi is an exceptional student with strong problem-solving skills and dedication to learning. Her final year project demonstrated excellent technical abilities and innovative thinking." },
   
    { name: "Kasun Silva", role: "Project Manager, Tech Solutions", text: "Nevindi consistently meets deadlines and communicates effectively throughout project development. Her attention to detail and willingness to learn make her a valuable team member." },
  ]
};