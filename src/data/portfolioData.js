export const portfolioData = {
  overview: {
    title: "Overview",
    content: `Frontend Developer specializing in React.js with a strong foundation in JavaScript, HTML, CSS, and REST APIs. Built multiple responsive projects using modern front-end tools like Next.js, Redux, Bootstrap, Tailwind CSS. Passionate about writing clean, efficient code and continuously learning new technologies.`,
  },
  experience: [
    {
      role: "Junior Frontend Developer",
      company: "Betopia Group",
      period: "August 2025 - Present",
      description: [
        "Developed and maintained dynamic web applications using React.js and Next.js.",
        "Implemented state management efficiently using Redux Toolkit, RTK Query, and TanStack Query for optimized data fetching and caching.",
        "Integrated RESTful APIs using Axios with proper error handling and authentication flows.",
        "Designed responsive and modern UI components using Tailwind CSS and Ant Design.",
        "Ensured clean, maintainable, and scalable code following best practices and modern development standards.",
      ],
      website: "https://betopiagroup.com",
    },
    {
      role: "Junior Software Engineer",
      company: "Nawab Host",
      period: "July 2022 - April 2023",
      description: [
        "Collaborated closely with the development team to ensure accurate, pixel-perfect implementation of Figma designs into clean, maintainable React components.",
        "Redesigned the Nawab Host website by converting UI designs from Figma into responsive HTML templates and integrating them into a Laravel framework.",
        "Contributed to the development of custom WordPress widgets, enhancing the overall flexibility and usability of the CMS.",
      ],
      website: "https://nawabhost.com.bd",
    },
    {
      role: "Junior Officer - IT",
      company: "Proyas Manobik Unnayan Society (PMUS)",
      period: "May 2021 - July 2022",
      description: [
        "Assisted developers in the development of web applications using core technologies including HTML, CSS, Bootstrap, PHP and MySQL.",
        "Actively contributed to troubleshooting, debugging, and maintaining the existing codebase to ensure optimal functionality and performance.",
        "Supported the implementation and customization of WordPress CMS for dynamic content management across various organizational platforms.",
      ],
      website: "https://proyas.org",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Node.js backend",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      details: {
        overview:
          "A comprehensive e-commerce platform designed to provide seamless shopping experiences with modern UI/UX patterns and robust backend infrastructure.",
        challenge:
          "Building a scalable platform that handles high traffic, real-time inventory management, and secure payment processing while maintaining excellent performance.",
        solution:
          "Implemented microservices architecture with React frontend, Node.js backend, MongoDB for data persistence, and integrated Stripe for payment processing. Used Redis for caching and session management.",
      },
      features: [
        "User authentication and authorization with JWT",
        "Product catalog with advanced search and filtering",
        "Shopping cart with real-time updates",
        "Secure payment integration with Stripe",
        "Order tracking and management system",
        "Admin dashboard for inventory management",
        "Email notifications for order updates",
        "Responsive design for all devices",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Stripe API",
        "JWT",
        "Tailwind CSS",
      ],
      results: [
        "Successfully handled 10,000+ daily active users",
        "Reduced page load time by 40% through optimization",
        "Achieved 99.9% uptime with proper error handling",
        "Increased conversion rate by 25% with improved UX",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Real-time task management application with drag-and-drop functionality",
      tags: ["Next.js", "Firebase", "React DnD"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      details: {
        overview:
          "A collaborative task management tool that helps teams organize, prioritize, and track their work efficiently with real-time synchronization.",
        challenge:
          "Creating a real-time collaborative environment where multiple users can interact with tasks simultaneously without conflicts.",
        solution:
          "Leveraged Firebase Realtime Database for instant data synchronization, implemented optimistic updates for better UX, and used React DnD for intuitive drag-and-drop interfaces.",
      },
      features: [
        "Drag-and-drop task organization",
        "Real-time collaboration with multiple users",
        "Task assignment and due date tracking",
        "Priority levels and color-coded labels",
        "Comments and file attachments",
        "Board templates for quick setup",
        "Activity timeline and notifications",
        "Dark mode support",
      ],
      technologies: [
        "Next.js",
        "Firebase",
        "React DnD",
        "Tailwind CSS",
        "React Query",
      ],
      results: [
        "Improved team productivity by 35%",
        "Real-time updates with less than 100ms latency",
        "Used by 50+ teams across different organizations",
        "95% user satisfaction rate",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Personal Blog Platform",
      description:
        "Blogging platform with markdown support and SEO optimization",
      tags: ["React", "Next.js", "Markdown", "PostgreSQL"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      details: {
        overview:
          "A modern blogging platform that empowers writers to create and publish content with ease, featuring markdown support and powerful SEO capabilities.",
        challenge:
          "Building a platform that balances simplicity for writers while providing advanced features like SEO optimization, fast loading times, and content discoverability.",
        solution:
          "Used Next.js for server-side rendering and static generation, implemented markdown parsing with syntax highlighting, and integrated comprehensive SEO meta tags and structured data.",
      },
      features: [
        "Markdown editor with live preview",
        "Syntax highlighting for code blocks",
        "SEO optimization with meta tags",
        "Social media sharing integration",
        "Comment system with moderation",
        "Tag-based categorization",
        "Reading time estimation",
        "RSS feed generation",
      ],
      technologies: [
        "Next.js",
        "React",
        "PostgreSQL",
        "Markdown-it",
        "Prisma",
        "Tailwind CSS",
      ],
      results: [
        "Achieved 95+ Google PageSpeed score",
        "Ranked on first page for target keywords",
        "Reduced bounce rate by 30%",
        "Published 100+ articles with 50K+ monthly readers",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio with dark mode and smooth animations",
      tags: ["React", "Tailwind CSS", "React Router"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      details: {
        overview:
          "A personal portfolio website showcasing projects, skills, and professional experience with modern design principles and smooth user interactions.",
        challenge:
          "Creating a visually appealing and performant portfolio that stands out while maintaining accessibility and responsive design across all devices.",
        solution:
          "Built with React and Tailwind CSS for rapid development, implemented dark/light mode toggle, smooth scroll animations, and optimized images for fast loading.",
      },
      features: [
        "Dark/Light theme toggle with persistence",
        "Responsive design for all screen sizes",
        "Smooth scroll animations",
        "Interactive project showcase",
        "Contact form with validation",
        "Blog integration",
        "Performance optimized",
        "SEO friendly",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Vite",
        "Font Awesome",
      ],
      results: [
        "100% Lighthouse accessibility score",
        "Sub-second page load times",
        "Increased client inquiries by 60%",
        "Featured in design showcases",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  // New education section added
  education: [
    {
      degree: "BSc in CSE",
      institution: "Daffodil International University",
      year: "2021",
      gpa: "3.39/4.0",
    },
  ],
  // New skills added
  skills: [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Docker", "REST APIs", "Responsive Design"],
    },
  ],
  // New certifications added
  certifications: [
    {
      title: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2023",
    },
    {
      title: "Web Performance Optimization",
      issuer: "Google",
      date: "2023",
    },
    {
      title: "Full Stack JavaScript",
      issuer: "The Odin Project",
      date: "2022",
    },
  ],
};
