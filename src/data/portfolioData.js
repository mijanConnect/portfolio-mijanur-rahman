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
      title: "The Pigeon Hub",
      associationURL: "betopiagroup.com",
      association: "Betopia Group",
      description:
        "A pigeon pedigree platform to helping breeders create, verify, and showcase authentic pigeon lineages.",
      tags: [
        "React.js",
        "Next.js",
        "React Router",
        "Redux Toolkit",
        "React Flow",
        "Tailwind CSS",
        "Ant Design",
      ],
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
      liveUrl: "https://thepigeonhub.com",
      githubUrl: "https://github.com/mijanConnect/the-piegeon-hub-website.git",
    },
    {
      id: 2,
      title: "Motly - Vehicle Rental Service",
      associationURL: "betopiagroup.com",
      association: "Betopia Group",
      description:
        "Motly is a vehicle rental service that lets you find and rent nearby vehicles for a specific time, making short term mobility fast and convenient.",
      tags: [
        "Next.js",
        "Redux Toolkit",
        "Swiper.js",
        "Shadcn UI",
        "Tailwind CSS",
      ],
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
      liveUrl: "https://motly-car-rental-website-mahsundic.vercel.app",
      githubUrl:
        "https://github.com/mijanConnect/motly-car-rental-website-mahsundic.git",
    },
    {
      id: 3,
      title: "MLITech - Loyalty & Rewards Program",
      associationURL: "betopiagroup.com",
      association: "Betopia Group",
      description:
        "MLITech is a loyalty and rewards system for ecommerce, supporting admin control, merchant management, user rewards, promotions, and tier based benefits.",
      tags: [
        "React.js",
        "Ant Design",
        "Tailwind CSS",
        "React Router",
        "RTK Query",
      ],
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
    {
      id: 4,
      title: "Nawab Host",
      associationURL: "nawabhost.com.bd",
      association: "Nawab Host",
      description:
        "Nawab Host is a hosting company website where users can browse, compare, and purchase domains and servers in one place.",
      tags: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "JavaScript",
        "JavaScript DOM",
      ],
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
      liveUrl: "https://mijanconnect.github.io/NawabHostFrontend/",
      githubUrl: "https://github.com/mijanConnect/NawabHostFrontend.git",
    },
    {
      id: 5,
      title: "Author - eBooks Platform",
      associationURL: "https://softexsolution.com/",
      association: "Softex Solution",
      description:
        "Author Digital World is an ebook platform where users can browse a store, read books online, and download PDFs.",
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
      liveUrl: "https://author-frontend-pi.vercel.app/",
      githubUrl: "https://github.com/mijanConnect/AuthorFrontend.git",
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
      category: "Programming Languages",
      skills: [
        {
          name: "HTML5",
          image:
            "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        },
        {
          name: "CSS",
          image:
            "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        },
        {
          name: "SASS",
          image:
            "https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white",
        },
        {
          name: "JavaScript",
          image:
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        },
        {
          name: "TypeScript",
          image:
            "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
        },
        {
          name: "Python",
          image:
            "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {
          name: "React.js",
          image:
            "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        },
        {
          name: "Next.js",
          image:
            "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
        },
        {
          name: "Axios",
          image:
            "https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white",
        },
        {
          name: "Redux Toolkit",
          image:
            "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
        },
        {
          name: "React Router",
          image:
            "https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
        },
        {
          name: "TanStack Query",
          image:
            "https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white",
        },
        {
          name: "React Hook Form",
          image:
            "https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white",
        },
        {
          name: "Tailwind CSS",
          image:
            "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
        },
        {
          name: "Bootstrap",
          image:
            "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
        },
        {
          name: "Ant Design",
          image:
            "https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=ant-design&logoColor=white",
        },
        {
          name: "Shadcn UI",
          image:
            "https://img.shields.io/badge/Shadcn%20UI-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white",
        },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        {
          name: "Git",
          image:
            "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
        },
        {
          name: "GitHub",
          image:
            "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
        },
        {
          name: "REST APIs",
          image:
            "https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=fastapi&logoColor=white",
        },
        {
          name: "Responsive Design",
          image:
            "https://img.shields.io/badge/Responsive%20Design-4A90E2?style=for-the-badge&logo=responsive&logoColor=white",
        },
        {
          name: "Figma",
          image:
            "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
        },
      ],
    },
  ],
  // Competitive Programming section
  competitiveProgramming: [
    {
      id: 1,
      platform: "URI Online Judge",
      handle: "172161",
      description:
        "Actively solving competitive programming problems and improving algorithmic skills.",
      icon: "fa-solid fa-code",
      url: "https://www.urionlinejudge.com.br/judge/en/profile/172161",
    },
  ],
  // New certifications added
  certifications: [
    {
      title: "Master HTML and CSS by building real world projects",
      issuer: "Udemy",
      image:
        "https://img.shields.io/badge/Udemy-EC5252?style=for-the-badge&logo=udemy&logoColor=white",
      certificateURL:
        "https://www.udemy.com/certificate/UC-22f0b588-d9cc-45af-bc1a-9cd5cad11cf7/",
      date: "June 20, 2025",
    },
    {
      title: "Master Git and Github - Beginner to Expert",
      issuer: "Udemy",
      image:
        "https://img.shields.io/badge/Udemy-EC5252?style=for-the-badge&logo=udemy&logoColor=white",
      certificateURL:
        "https://www.udemy.com/certificate/UC-1ca68fd6-c136-43af-8d60-4616007b1001/",
      date: "March 06, 2023",
    },
  ],
};
