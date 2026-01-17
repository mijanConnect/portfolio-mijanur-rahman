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
      image: "/assets/projects/the-pigeon-hub.png",
      details: {
        overview:
          "ThePigeonHub is an online platform designed for pigeon breeders and pigeon enthusiasts to manage, verify, and share pigeon pedigree information.",
        challenge:
          "The biggest challenge was designing an accurate and scalable pedigree generation flow, along with efficient data handling.",
        solution:
          "To overcome this challenge, I used React Flow to build a visual pedigree generation system that efficiently handles complex parent-child relationships and improves data clarity.",
      },
      features: [
        "User authentication and authorization with JWT",
        "Offers free and premium plans",
        "Premium plans allow more entries and advanced features like unlimited pigeons",
        "Create detailed pigeon pedigrees (up to 4–5 generations)",
        "Access a database of verified pigeons and breeders",
        "Share pigeon pedigrees and information globally",
        "Store and manage all pigeon data online",
        "Secure payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "React Flow",
        "JWT",
        "Stripe API",
        "Tailwind CSS",
        "Ant Design",
        "Shadcn UI",
      ],
      results: [
        "4000+ pigeon pedigrees created within the first 2 months",
        "Pedegree showing accuracy improved",
        "Increased user engagement by 50% through premium features",
        "Reduced page load time through optimization",
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
      image: "/assets/projects/motly.png",
      details: {
        overview:
          "This is a multi-purpose platform designed to offer multiple services under one roof, including vehicle rental, vehicle purchasing, and air ticket booking. The platform was initially launched with a focus on car rental, which has already been designed and developed as the first core service.",
        challenge:
          "The primary challenge was designing a scalable and flexible architecture capable of supporting multiple services (vehicle rental, vehicle purchase, and air ticket booking) while initially developing a complete and reliable car rental system.",
        solution:
          "The solution involved building a robust and scalable car rental system as the initial module, using modular design principles to ensure that new services such as vehicle purchase and air ticket booking could be added seamlessly later.",
      },
      features: [
        "Search cars by location, start date, and end date with real-time availability",
        "View available cars pinned near your selected location on an interactive map",
        "Apply multiple filters to find cars that match your preferences",
        "Rent cars as desired for specific dates and durations.",
        "Extend rental duration anytime during an ongoing rental.",
        "Cancel rentals easily if plans change.",
        "Pay securely with Stripe or major cards (Visa/MasterCard).",
        "Select cars based on user reviews and ratings.",
      ],
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "Swiper.js",
        "Shadcn UI",
        "Tailwind CSS",
        "Google Maps API",
        "Stripe API",
      ],
      results: [
        "Improved User Experience – Users can easily find, filter, and rent cars, leading to faster and smoother bookings.",
        "Increased Engagement – Interactive map and review-based selection help users make confident decisions.",
        "Higher Conversion Rates – Secure payment integration (Stripe & cards) encourages more completed rentals.",
        "Flexible Operations – Features like extending or canceling rentals increase customer satisfaction and trust.",
        "Scalable Platform – Modular design allows adding new services (vehicle purchase, air tickets) in the future without major redesign.",
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
      image: "/assets/projects/loyalty.png",
      details: {
        overview:
          "MLITech’s Loyalty & Rewards Program is designed to enhance customer engagement and retention by rewarding users for their interactions and purchases. The platform enables businesses to create, manage, and track loyalty campaigns efficiently while providing customers with points, discounts, and exclusive rewards.",
        challenge:
          "The main challenge was designing a flexible and scalable loyalty system that could handle diverse reward types, track user engagement accurately, and provide actionable insights to businesses, all while ensuring a seamless and engaging experience for customers.",
        solution:
          "We developed a flexible and scalable loyalty platform that supports multiple reward types, tracks user interactions in real-time, and provides businesses with actionable insights. The system is designed with an intuitive interface, ensuring a seamless experience for customers while allowing businesses to easily create, manage, and monitor loyalty campaigns.",
      },
      features: [
        "Manage users by adding, editing, deleting, or activating/deactivating accounts.",
        "Assign roles and set permissions for different admin levels.",
        "View real-time metrics and key system statistics on the dashboard.",
        "Visualize data with charts and graphs for trends and analytics.",
        "Search and filter users or records quickly and efficiently.",
        "Track actions and activity with audit logs for security and compliance.",
        "Receive notifications and alerts for important system events.",
        "Access a responsive interface that works on desktop and mobile.",
        "Configure system settings and application preferences in one place.",
        "Export or import data for reporting, backups, or analysis.",
      ],
      technologies: [
        "React.js",
        "Ant Design",
        "Tailwind CSS",
        "React Router",
        "RTK Query",
        "Socket.io",
        "Stripe API",
      ],
      results: [
        "Improved Efficiency – Admins can manage users, roles, and settings quickly in one centralized platform.",
        "Better Decision-Making – Real-time metrics and data visualization provide actionable insights.",
        "Enhanced User Engagement – Flexible reward types and notifications keep users motivated and active.",
        "Enhanced Security & Compliance – Audit logs and role-based permissions ensure system security.",
        "Higher User Satisfaction – Notifications, alerts, and responsive design improve overall user experience.",
        "Scalable & Future-Ready – Modular architecture allows easy addition of new features and services.",
      ],
      liveUrl: "https://mlitech-admin-dashboard.vercel.app",
      githubUrl: "https://github.com/mijanConnect/mlitech-admin-dashboard.git",
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
      image: "/assets/projects/nawab-host.png",
      details: {
        overview:
          "Nawab Host is a modern hosting company website designed to let users browse, compare, and purchase domains and servers all in one place. The platform combines interactive design and smooth animations to create an engaging showcase experience, making it easy for users to explore hosting plans, server options, and domain availability. The website emphasizes user-friendly navigation, visual appeal, and interactivity, turning the process of selecting hosting services into an intuitive and enjoyable experience.",
        challenge:
          "The main challenge was creating an interactive and visually engaging showcase website using raw CSS and SCSS, while implementing dynamic DOM manipulation for smooth animations and responsive user interactions.",
        solution:
          "To address the challenge, we used raw CSS and SCSS for styling and implemented dynamic DOM manipulation to create smooth animations and interactive elements. Additionally, we leveraged Node packages to build reusable components and maintainable code, ensuring scalability and efficiency across the website.",
      },
      features: [
        "Browse and compare domains and server plans in one place.",
        "Interactive and visually engaging showcase-style design with smooth animations.",
        "Fully responsive interface for desktop, tablet, and mobile users.",
        "Reusable components built with Node packages for maintainable code.",
        "Easy navigation to explore hosting plans, servers, and domain availability.",
        "Seamless user experience combining visuals, animation, and functionality.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "JavaScript",
        "JavaScript DOM",
        "Swiper.js",
      ],
      results: [
        "Enhanced User Engagement – Interactive design and animations make exploring hosting services intuitive and enjoyable.",
        "Improved Usability – Dynamic DOM manipulation ensures smooth interactions and responsive behavior across devices.",
        "Efficient Development – Reusable Node package components reduced development time and simplified maintenance.",
        "Showcase Ready – Visually appealing, interactive interface highlights products effectively for potential customers.",
        "Scalable & Future-Ready – Modular and maintainable code allows easy addition of new features or services.",
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
      tags: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "JavaScript",
        "JavaScript DOM",
        "Swiper.js",
      ],
      link: "#",
      image: "/assets/projects/author.png",
      details: {
        overview:
          "Author Frontend is a clean and engaging website designed to showcase an author, their biography, books, awards, and related content in a visually appealing format. The site highlights key sections like About Me, Books, Blog, Store, Awards, and Contact, making it easy for visitors to explore the author’s work and achievements. With a structured navigation and well‑organized content layout, it serves as an interactive digital presence for an author or writer, allowing users to learn more about the author’s background, browse published works, and engage with available media and offerings—all in one place.",
        challenge:
          "The main challenge was creating an interactive and visually engaging showcase website using raw CSS and SCSS, while implementing dynamic DOM manipulation for smooth animations and responsive user interactions.",
        solution:
          "To address the challenge, we used raw CSS and SCSS for styling and implemented dynamic DOM manipulation to create smooth animations and interactive elements. Additionally, we leveraged Node packages to build reusable components and maintainable code, ensuring scalability and efficiency across the website.",
      },
      features: [
        "Author Biography – Detailed “About Me” section showcasing the author’s background and achievements.",
        "Books & Publications – Browse and explore the author’s published works with summaries and details.",
        "Awards & Recognition – Display of awards, honors, and notable achievements.",
        "Blog / Articles – Section for articles, blog posts, or news related to the author.",
        "Store / Purchase Links – Integrated links or sections for buying books or related merchandise.",
        "Interactive Navigation – Smooth scrolling and easy-to-use menu for seamless browsing.",
        "Responsive Design – Optimized layout for desktop, tablet, and mobile devices.",
        "Media Integration – Images, videos, and other media to enhance the storytelling and showcase content.",
        "Contact / Inquiry Form – Allows visitors to reach out directly to the author or management team.",
        "Clean & Visual Design – Focused on readability, aesthetics, and engaging presentation.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "JavaScript",
        "JavaScript DOM",
        "Swiper.js",
      ],
      results: [
        "Enhanced Author Visibility – Provides a centralized, engaging platform for readers to learn about the author and their works.",
        "Improved User Engagement – Interactive navigation, media integration, and clean design keep visitors exploring the site longer.",
        "Showcased Publications & Achievements – Books, awards, and blog posts are prominently highlighted, increasing discoverability.",
        "Seamless User Experience – Responsive design ensures smooth browsing across desktop, tablet, and mobile devices.",
        "Professional Online Presence – Creates a polished, portfolio-ready digital identity for the author, enhancing credibility and reach.",
      ],
      liveUrl: "https://author-frontend-pi.vercel.app",
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
      image: "/assets/certificate/udemy.png",
      certificateURL:
        "https://www.udemy.com/certificate/UC-22f0b588-d9cc-45af-bc1a-9cd5cad11cf7/",
      date: "June 20, 2025",
    },
    {
      title: "Master Git and Github - Beginner to Expert",
      issuer: "Udemy",
      image: "/assets/certificate/udemy.png",
      certificateURL:
        "https://www.udemy.com/certificate/UC-1ca68fd6-c136-43af-8d60-4616007b1001/",
      date: "March 06, 2023",
    },
  ],
};
