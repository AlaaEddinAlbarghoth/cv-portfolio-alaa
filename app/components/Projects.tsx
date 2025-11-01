'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getProjects, type Project } from '@/lib/data';

// Enterprise-grade props interfaces
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Generate unique ID for project
const generateProjectId = (name: string): string => 
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

// Memoized ProjectCard component for performance optimization
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const projectId = useMemo(() => generateProjectId(project.name), [project.name]);
  
  return (
    <motion.article
      className="group relative bg-foreground/5 rounded-2xl p-6 hover:bg-foreground/10 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl border border-gray-200/10 hover:border-blue-500/30 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.02 }}
      role="article"
      aria-labelledby={`project-${projectId}-title`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* GitHub link - would be added based on actual repository availability */}
            <button
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`View ${project.name} on GitHub`}
              onClick={(e) => {
                e.stopPropagation();
                // TODO: Add actual GitHub URLs when available
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            {/* Live demo link */}
            <button
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`View ${project.name} live demo`}
              onClick={(e) => {
                e.stopPropagation();
                // TODO: Add live demo URLs when available
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        <h3 
          id={`project-${projectId}-title`}
          className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300"
        >
          {project.name}
        </h3>
        
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.period && (
          <div className="text-sm text-blue-400 font-semibold mb-4" aria-label={`Project period: ${project.period}`}>
            {project.period}
          </div>
        )}

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                role="listitem"
                tabIndex={0}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
};

export default function Projects() {
  const projects = useMemo(() => getProjects(), []);

  return (
    <section 
      id="projects" 
      className="section-padding bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project, index) => (
              <ProjectCard 
                key={generateProjectId(project.name)} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
