export const portfolio = {
  person: {
    name: "Anoruse-Thomas, Samuel",
    role: "Software Engineer",
    location: "Toronto, ON",
    focus: "Full-stack, cloud, and AI-powered apps",
    openTo: "QA Analyst / Software Engineer roles",
    email: "samuelanoruse3@gmail.com",
    links: {
      github: "https://github.com/Tanoruse",
      linkedin: "https://www.linkedin.com/in/anoruse-samuel-a90197256/",

      resume: ""
    },
    headline:
      "I build clean, reliable web apps with React, .NET, and cloud services — and I care about shipping quality.",
    about:
      "I’m a Software Engineering graduate with hands-on experience building and supporting real applications. I like work that mixes clean UI, strong backend logic, and practical cloud deployments. I’m big on clarity, testing, and making things easy for users."
  },

  projects: [
    {
      title: "Dolet Car Wash Booking App",
      description:
        "A Firebase-based booking web app with booking flow, admin management, and deployment to a production domain.",
      tech: ["React", "Firebase Auth", "Firestore", "Firebase Hosting", "HTML", "CSS"],
      impact: ["Production-ready booking flow", "Deployed + maintained live"],
      links: {
        live: "https://doletcarwash.com/",
        code: "https://github.com/Tanoruse/Dolet-car-wash-booking"
      }
    },
    {
      title: "EcoGauge AI (Environmental Impact Analyzer)",
      description:
        "AI-powered tool that evaluates environmental footprint signals from product data and generates summaries + suggestions.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI API", "AWS (S3/Lambda)"],
      impact: ["Automates analysis & reporting", "Designed for scalable pipeline"],
      links: {
        live: "",
        code: "https://github.com/Tanoruse/" 
      }
    },
    {
      title: "GoogleExplorer",
      description:
        "A project from your GitHub showing frontend logic, API usage, and clean structure as you iterate and improve.",
      tech: ["JavaScript", "APIs", "UI Components"],
      impact: ["Improved structure & readability", "Shows consistent iteration"],
      links: {
        live: "",
        code: "https://github.com/Tanoruse/GoogleExplorer"
      }
    }
  ],

  skills: [
    { category: "Languages", items: ["C#", "JavaScript", "SQL", "HTML", "CSS"] },
    { category: "Frontend", items: ["React", "Vite", "Bootstrap", "Responsive UI"] },
    { category: "Backend", items: ["ASP.NET Core", "REST APIs", "Node.js", "Express"] },
    { category: "Cloud / DB", items: ["Firebase", "AWS S3", "DynamoDB", "PostgreSQL", "SQL Server"] },
    { category: "Dev Tools", items: ["Git/GitHub", "Postman", "Azure DevOps", "CI basics"] }
  ]
};
