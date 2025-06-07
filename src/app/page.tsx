import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      name: "Finance Managing App (Welth)",
      description:
        "A comprehensive AI-powered personal finance management application built using the MERN stack. Features intelligent insights, automated tracking, smart receipt scanner, and personalized recommendations to help users grow their wealth effortlessly.",
      githubLink: "https://github.com/AftabKhan707/Finance_managing_App",
      liveLink:
        "https://finance-managing-nms1u42ns-aftab-khans-projects-e8f62483.vercel.app/",
      featured: true,
    },
    {
      name: "Chat App",
      description:
        "A real-time chat application built with the MERN stack and socket.io, enabling users to communicate in public or private chat rooms with instant messaging capabilities and seamless user experience.",
      githubLink: "https://github.com/AftabKhan707/Chat-App-MERN-Stack",
      liveLink: "https://chat-app-mern-stack-3p3t.onrender.com/",
    },
    {
      name: "File Transfer App",
      description:
        "A secure and efficient application for peer-to-peer file transfers using Node.js and WebRTC, ensuring fast and safe file sharing between users.",
      githubLink: "https://github.com/AftabKhan707/File-Transfer",
    },
    {
      name: "Realtime Device Tracker",
      description:
        "A web-based real-time device tracking dashboard leveraging socket.io and map APIs to visualize live device movements with interactive mapping features.",
      githubLink: "https://github.com/AftabKhan707/Realtime-Device-Tracker",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/60">AK</div>
                {/* Replace this div with your actual image */}
                <Image
                  src="/profile.png"
                  alt="Aftab Khan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Aftab Khan
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer & Problem Solver
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I&apos;m a passionate full-stack developer specializing in the{" "}
              <span className="font-semibold text-foreground">MERN stack</span>{" "}
              (MongoDB, Express.js, React, Node.js) with extensive experience in
              building high-performance, SEO-optimized web applications using{" "}
              <span className="font-semibold text-foreground">Next.js</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I thrive on transforming complex problems into elegant, scalable
              solutions. My focus is on creating user-centric applications that
              deliver real value. I&apos;m actively seeking opportunities in the
              software engineering domain, particularly with innovative startups
              where I can contribute to building impactful features and solving
              real-world challenges.
            </p>
            <p className="text-lg font-medium text-foreground mb-8">
              Looking for a React/Next.js developer? Let&apos;s connect and
              build something amazing together! 🚀
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" asChild>
                <a
                  href="mailto:aftabsaboorkhan@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/AftabKhan707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://linkedin.com/in/aftabskhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 px-6 max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Let&apos;s Connect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 91990 35463</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  aftabsaboorkhan@gmail.com
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in
            modern web development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.featured && (
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button asChild className="flex-1">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-muted-foreground border-t">
        <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        <p className="mt-2">
          © 2024 Aftab Khan. Open to exciting opportunities!
        </p>
      </footer>
    </main>
  );
}
