
export default function Home() {
  const resume = {
  "projectName": "portfolio-sai-varshith",
  "files": [
    {
      "path": "package.json",
      "content": "{\n  \"name\": \"portfolio-sai-varshith\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lint\": \"next lint\"\n  },\n  \"dependencies\": {\n    \"next\": \"14.2.3\",\n    \"react\": \"^18\",\n    \"react-dom\": \"^18\",\n    \"lucide-react\": \"^0.378.0\"\n  },\n  \"devDependencies\": {\n    \"@types/node\": \"^20\",\n    \"@types/react\": \"^18\",\n    \"@types/react-dom\": \"^18\",\n    \"postcss\": \"^8\",\n    \"tailwindcss\": \"^3.4.1\",\n    \"typescript\": \"^5\",\n    \"eslint\": \"^8\",\n    \"eslint-config-next\": \"14.2.3\"\n  }\n}"
    },
    {
      "path": "app/layout.tsx",
      "content": "import type { Metadata } from 'next';\nimport { Inter } from 'next/font/google';\nimport './globals.css';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport const metadata: Metadata = {\n  title: 'Sai Varshith Pujala | Portfolio',\n  description: 'Pujala Sai Varshith personal portfolio website - Aspiring Backend Developer',\n};\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\" className=\"scroll-smooth\">\n      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}>{children}</body>\n    </html>\n  );\n}\n"
    },
    {
      "path": "app/page.tsx",
      "content": "import Navbar from '@/components/Navbar';\nimport Hero from '@/components/Hero';\nimport About from '@/components/About';\nimport Skills from '@/components/Skills';\nimport Projects from '@/components/Projects';\nimport Contact from '@/components/Contact';\n\nconst personalData = {\n  name: 'PUJALA SAI VARSHITH',\n  title: 'Aspiring Backend Developer | Student',\n  tagline: 'Building robust and scalable backend solutions.',\n  social: {\n    github: 'https://github.com/saivarshithnaidu',\n    linkedin: 'https://www.linkedin.com/in/sai-varshith-pujala-704036252',\n  },\n  contact: {\n    email: 'saivarshith8284@gmail.com',\n    phone: '8185958336',\n  },\n  about: `B. Tech Computer Science student seeking a Back-end Developer Intern role at IBM Systems, with strong fundamentals in\n  software development, computer architecture, debugging, and scripting, and hands-on experience in backend services. Highly\n  motivated to learn mainframe and z/OS infrastructure.`,\n  skills: {\n    languages: ['Java', 'C', 'Basic Assembly', 'JavaScript'],\n    technologies_concepts: ['OOP', 'Debugging', 'Software Testing', 'REST API Basics', 'TCP/IP Basics', 'Web Application Fundamentals', 'Next.js', 'Node.js', 'APIs'],\n    tools: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Linux'],\n  },\n  projects: [\n    {\n      title: 'Universal AI Chat Application',\n      description: 'Developed backend logic for handling user requests and API responses. Implemented error handling and debugging to improve reliability. Followed clean coding and modular design principles.',\n      techStack: ['Next.js', 'JavaScript', 'APIs'],\n      githubLink: '#',\n    },\n    {\n      title: 'SMTP Email Service',\n      description: 'Implemented email sending functionality using SMTP with Gmail as the host. Focused on secure authentication, error handling, and debugging mail delivery issues. Improved backend service reliability, logging, and monitoring.',\n      techStack: ['Node.js', 'Gmail SMTP'],\n      githubLink: '#',\n    },\n  ],\n};\n\nexport default function Home() {\n  return (\n    <>\n      <Navbar />\n      <main className=\"container mx-auto px-4 py-8 max-w-6xl\">\n        <section id=\"home\" className=\"min-h-screen flex items-center justify-center\">\n          <Hero data={personalData} />\n        </section>\n        <section id=\"about\" className=\"py-24\">\n          <About data={personalData} />\n        </section>\n        <section id=\"skills\" className=\"py-24\">\n          <Skills data={personalData} />\n        </section>\n        <section id=\"projects\" className=\"py-24\">\n          <Projects data={personalData} />\n        </section>\n        <section id=\"contact\" className=\"py-24\">\n          <Contact data={personalData} />\n        </section>\n      </main>\n    </>\n  );\n}\n"
    },
    {
      "path": "components/Navbar.tsx",
      "content": "import Link from 'next/link';\n\nconst Navbar = () => {\n  const navLinks = [\n    { name: 'Home', href: '#home' },\n    { name: 'About', href: '#about' },\n    { name: 'Skills', href: '#skills' },\n    { name: 'Projects', href: '#projects' },\n    { name: 'Contact', href: '#contact' },\n  ];\n\n  return (\n    <nav className=\"fixed top-0 z-50 w-full bg-gray-950 bg-opacity-90 backdrop-blur-sm py-4 shadow-lg\">\n      <div className=\"container mx-auto px-4 max-w-6xl flex justify-between items-center\">\n        <Link href=\"#home\" className=\"text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors\">\n          Sai Varshith\n        </Link>\n        <div className=\"flex space-x-6\">\n          {navLinks.map((link) => (\n            <Link\n              key={link.name}\n              href={link.href}\n              className=\"text-gray-300 hover:text-emerald-400 transition-colors text-lg font-medium\"\n            >\n              {link.name}\n            </Link>\n          ))}\n        </div>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;\n"
    },
    {
      "path": "components/Hero.tsx",
      "content": "import { GitHub, Linkedin } from 'lucide-react';\nimport Link from 'next/link';\n\ninterface HeroProps {\n  data: {\n    name: string;\n    title: string;\n    tagline: string;\n    social: {\n      github: string;\n      linkedin: string;\n    };\n  };\n}\n\nconst Hero = ({ data }: HeroProps) => {\n  return (\n    <div className=\"text-center space-y-6 animate-fadeInUp\">\n      <h1 className=\"text-5xl md:text-7xl font-extrabold text-white leading-tight\">\n        Hi, I'm <span className=\"text-emerald-400 block sm:inline-block\">{data.name}</span>\n      </h1>\n      <p className=\"text-2xl md:text-3xl text-gray-300 font-medium\">{data.title}</p>\n      <p className=\"text-lg md:text-xl text-gray-400 max-w-2xl mx-auto\">{data.tagline}</p>\n      <div className=\"flex justify-center space-x-6 pt-4\">\n        <Link\n          href={data.social.github}\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          className=\"text-gray-300 hover:text-emerald-400 transition-colors transform hover:scale-110\"\n          aria-label=\"GitHub Profile\"\n        >\n          <GitHub size={36} />\n        </Link>\n        <Link\n          href={data.social.linkedin}\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          className=\"text-gray-300 hover:text-emerald-400 transition-colors transform hover:scale-110\"\n          aria-label=\"LinkedIn Profile\"\n        >\n          <Linkedin size={36} />\n        </Link>\n      </div>\n    </div>\n  );\n};\n\nexport default Hero;\n"
    },
    {
      "path": "components/About.tsx",
      "content": "interface AboutProps {\n  data: { about: string };\n}\n\nconst About = ({ data }: AboutProps) => {\n  return (\n    <div className=\"text-center max-w-3xl mx-auto space-y-6\">\n      <h2 className=\"text-4xl font-bold text-white mb-8\">About Me</h2>\n      <p className=\"text-lg leading-relaxed text-gray-300 whitespace-pre-line\">\n        {data.about}\n      </p>\n    </div>\n  );\n};\n\nexport default About;\n"
    },
    {
      "path": "components/Projects.tsx",
      "content": "interface Project {\n  title: string;\n  description: string;\n  techStack: string[];\n  githubLink?: string;\n}\n\ninterface ProjectsProps {\n  data: { projects: Project[] };\n}\n\nconst Projects = ({ data }: ProjectsProps) => {\n  return (\n    <div className=\"text-center\">\n      <h2 className=\"text-4xl font-bold text-white mb-12\">My Projects</h2>\n      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8\">\n        {data.projects.map((project, index) => (\n          <div\n            key={index}\n            className=\"bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-emerald-500\"\n          >\n            <h3 className=\"text-2xl font-semibold text-emerald-400 mb-4\">{project.title}</h3>\n            <p className=\"text-gray-300 mb-6 leading-relaxed\">{project.description}</p>\n            <div className=\"flex flex-wrap gap-2 mb-6 justify-center\">\n              {project.techStack.map((tech, techIndex) => (\n                <span\n                  key={techIndex}\n                  className=\"bg-gray-700 text-sm text-gray-200 px-3 py-1 rounded-full font-medium\"\n                >\n                  {tech}\n                </span>\n              ))}\n            </div>\n            {project.githubLink && project.githubLink !== '#' && (\n              <a\n                href={project.githubLink}\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                className=\"inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium\"\n              >\n                View on GitHub\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"20\"\n                  height=\"20\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  strokeWidth=\"2\"\n                  strokeLinecap=\"round\"\n                  strokeLinejoin=\"round\"\n                  className=\"ml-2\"\n                >\n                  <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>\n                  <polyline points=\"15 3 21 3 21 9\"></polyline>\n                  <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>\n                </svg>\n              </a>\n            )}\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default Projects;\n"
    },
    {
      "path": "components/Skills.tsx",
      "content": "interface SkillsProps {\n  data: {\n    skills: {\n      languages: string[];\n      technologies_concepts: string[];\n      tools: string[];\n    };\n  };\n}\n\nconst Skills = ({ data }: SkillsProps) => {\n  const skillCategories = [\n    { name: 'Languages', skills: data.skills.languages },\n    { name: 'Technologies & Concepts', skills: data.skills.technologies_concepts },\n    { name: 'Tools', skills: data.skills.tools },\n  ];\n\n  return (\n    <div className=\"text-center\">\n      <h2 className=\"text-4xl font-bold text-white mb-12\">My Skills</h2>\n      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">\n        {skillCategories.map((category, index) => (\n          <div key={index} className=\"bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700\">\n            <h3 className=\"text-2xl font-semibold text-emerald-400 mb-6\">{category.name}</h3>\n            <div className=\"flex flex-wrap justify-center gap-3\">\n              {category.skills.map((skill, skillIndex) => (\n                <span\n                  key={skillIndex}\n                  className=\"bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-md font-medium hover:bg-emerald-600 transition-colors\"\n                >\n                  {skill}\n                </span>\n              ))}\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default Skills;\n"
    },
    {
      "path": "components/Contact.tsx",
      "content": "import { Mail, Phone } from 'lucide-react';\n\ninterface ContactProps {\n  data: {\n    contact: {\n      email: string;\n      phone: string;\n    };\n  };\n}\n\nconst Contact = ({ data }: ContactProps) => {\n  return (\n    <div className=\"text-center max-w-xl mx-auto space-y-8\">\n      <h2 className=\"text-4xl font-bold text-white mb-8\">Get In Touch</h2>\n      <p className=\"text-lg text-gray-300\">\n        I'm always open to new opportunities and collaborations. Feel free to reach out!\n      </p>\n      <div className=\"flex flex-col sm:flex-row justify-center items-center gap-6\">\n        <a\n          href={`mailto:${data.contact.email}`}\n          className=\"flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors text-lg font-medium transform hover:scale-105\"\n        >\n          <Mail size={24} />\n          {data.contact.email}\n        </a>\n        <a\n          href={`tel:${data.contact.phone}`}\n          className=\"flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors text-lg font-medium transform hover:scale-105\"\n        >\n          <Phone size={24} />\n          {data.contact.phone}\n        </a>\n      </div>\n    </div>\n  );\n};\n\nexport default Contact;\n"
    },
    {
      "path": "tailwind.config.ts",
      "content": "import type { Config } from 'tailwindcss';\n\nconst config: Config = {\n  content: [\n    './pages/**/*.{js,ts,jsx,tsx,mdx}',\n    './components/**/*.{js,ts,jsx,tsx,mdx}',\n    './app/**/*.{js,ts,jsx,tsx,mdx}',\n  ],\n  theme: {\n    extend: {\n      colors: {\n        'gray-950': '#0a0a0a',\n        'gray-900': '#111827',\n        'gray-800': '#1f2937',\n        'gray-700': '#374151',\n        'emerald-400': '#34d399',\n        'emerald-300': '#6ee7b7',\n        'emerald-500': '#10b981',\n        'emerald-600': '#059669',\n      },\n      keyframes: {\n        fadeInUp: {\n          '0%': { opacity: '0', transform: 'translateY(20px)' },\n          '100%': { opacity: '1', transform: 'translateY(0)' },\n        },\n      },\n      animation: {\n        fadeInUp: 'fadeInUp 1s ease-out forwards',\n      },\n    },\n  },\n  plugins: [],\n};\nexport default config;\n"
    },
    {
      "path": "postcss.config.js",
      "content": "module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n"
    },
    {
      "path": "tsconfig.json",
      "content": "{\n  \"compilerOptions\": {\n    \"target\": \"es5\",\n    \"lib\": [\"dom\", \"dom.iterable\", \"esnext\"],\n    \"allowJs\": true,\n    \"skipLibCheck\": true,\n    \"strict\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"noEmit\": true,\n    \"esModuleInterop\": true,\n    \"module\": \"esnext\",\n    \"moduleResolution\": \"bundler\",\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"jsx\": \"preserve\",\n    \"incremental\": true,\n    \"paths\": {\n      \"@/*\": [\"./*\"]\n    }\n  },\n  \"include\": [\"next-env.d.ts\", \"**/*.ts\", \"**/*.tsx\"],\n  \"exclude\": [\"node_modules\"]\n}"
    },
    {
      "path": "README.md",
      "content": "# Pujala Sai Varshith's Portfolio\n\nThis is a personal portfolio website for Pujala Sai Varshith, built with Next.js 14, TypeScript, and Tailwind CSS.\n\n## Features\n\n-   **Hero Section**: Introduction with name, title, tagline, and social links.\n-   **About Section**: Professional summary.\n-   **Skills Section**: Categorized display of technical skills.\n-   **Projects Section**: Dynamic display of personal projects with descriptions and tech stacks.\n-   **Contact Section**: Easy access to email and phone.\n-   **Responsive Design**: Optimized for various screen sizes.\n-   **Modern UI**: Clean, minimal, and developer-style design.\n\n## Getting Started\n\nFollow these steps to set up and run the project locally.\n\n### Prerequisites\n\nMake sure you have Node.js (v18 or later) and npm or yarn installed on your machine.\n\n### Installation\n\n1.  **Clone the repository:**\n\n    bash\n    git clone https://github.com/your-github-username/portfolio-sai-varshith.git\n    cd portfolio-sai-varshith\n    \n\n    (Note: Replace `your-github-username/portfolio-sai-varshith.git` with the actual repository URL once hosted.)\n\n2.  **Install dependencies:**\n\n    bash\n    npm install\n    # or\n    yarn install\n    \n\n### Running the Development Server\n\nbash\nnpm run dev\n# or\nyarn dev\n\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\n### Building for Production\n\nbash\nnpm run build\n# or\nyarn build\n\n\nThis command builds the application for production to the `.next` folder. You can then deploy this folder to any Next.js hosting provider.\n\n### Starting the Production Server\n\nbash\nnpm run start\n# or\nyarn start\n\n\nThis command starts the Next.js production server.\n\n## Customization\n\nAll personal data, skills, and project information are defined within `app/page.tsx` in the `personalData` object. Modify this object to update the content of the portfolio.\n\n-   `components/`: Contains all the UI components.\n-   `app/`: Contains the main layout and page files.\n-   `tailwind.config.ts`: For Tailwind CSS customization.\n\nFeel free to customize the styling and add more sections as needed."
    }
  ],
  "skills": [],
  "experience": [],
  "education": [],
  "projects": [],
  "links": {}
};

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{resume.name || ""}</h1>
          <p className="text-xl text-gray-400">{resume.title || ""}</p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {resume.summary || ""}
          </p>
        </section>

        {resume.skills && resume.skills.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {resume.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {resume.projects && resume.projects.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resume.projects.map((project, i) => (
                <div key={i} className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold">
                    {project.name || ""}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {project.description || ""}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="text-center text-gray-600 border-t border-gray-800 pt-8">
          Built with Next.js & Tailwind CSS
        </footer>

      </div>
    </div>
  );
}
