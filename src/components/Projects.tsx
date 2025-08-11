import React from 'react';
import { Code, Database, Smartphone, Shield, Plane } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Government Digital Platform',
      icon: Shield,
      technologies: ['OpenShift', 'Tekton', 'ArgoCD', 'Kafka', 'Spring Boot'],
      description: 'Comprehensive DevOps ecosystem for Spanish Ministry of Foreign Affairs',
      impact: 'Automated CI/CD for 20+ microservices, 75% deployment error reduction',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Telecom e-SIM Integration',
      icon: Smartphone,
      technologies: ['Java 11', 'Spring Boot', 'Oracle', 'AngularJS'],
      description: 'Seamless e-commerce platform extension for e-SIM sales',
      impact: 'Zero disruption to existing workflows, enhanced customer experience',
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'Insurance MDM Strategy',
      icon: Database,
      technologies: ['Azure', 'Data Integration', 'Master Data Management'],
      description: 'Comprehensive data strategy assessment and roadmap',
      impact: 'Improved data governance and enterprise-wide consistency',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Travel Platform API Integration',
      icon: Plane,
      technologies: ['MuleSoft', 'AWS', 'Kafka', 'API Gateway'],
      description: 'API-led connectivity for major online travel platform',
      impact: 'Streamlined data flows and improved system integration',
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Banking Digital Transformation',
      icon: Code,
      technologies: ['Spring Boot', 'Angular', 'REST APIs'],
      description: 'User experience redesign for power and signature processes',
      impact: 'Enhanced customer experience and operational efficiency',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <project.icon className="w-8 h-8 text-white drop-shadow-sm" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'}} />
                </div>

                <h3 className="text-xl font-bold text-navy dark:text-white mb-4 group-hover:text-steel-blue dark:group-hover:text-orange transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-steel-blue dark:text-orange mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-navy/10 dark:bg-orange/20 text-navy dark:text-orange text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Impact:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;