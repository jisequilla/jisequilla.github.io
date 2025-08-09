import React from 'react';
import { Cloud, Cpu, Network, Settings, Users, TrendingUp, Layers, GitBranch } from 'lucide-react';

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Multi-cloud strategy (AWS, Azure, GCP), Infrastructure as Code, Cloud migration and modernization',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Layers,
      title: 'Solutions Design',
      description: 'Enterprise architecture, System integration, Digital transformation',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Network,
      title: 'Microservices & APIs',
      description: 'Spring Boot ecosystem, API-first design, Service-oriented architecture',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'DevOps & Platform Engineering',
      description: 'Kubernetes orchestration, CI/CD pipelines, GitOps methodology',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Cross-functional teams, Technical mentoring, Agile methodologies',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Alignment',
      description: 'Requirements gathering, Stakeholder management, Technology roadmaps',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            Core Expertise
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-navy dark:text-white mb-4">
                {area.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;