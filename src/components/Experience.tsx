import React from 'react';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2025 - PRESENT',
      company: 'NFQ Technologies',
      role: 'Expert Consultant',
      description: [
        'Led MLOps platform design using Azure DevOps',
        'Architected e-SIM integration for major Spanish telecom',
        'Conducted comprehensive technical audits and assessments'
      ],
      current: true
    },
    {
      period: '2019 - 2025',
      company: 'Minsait (Indra Company)',
      role: 'Expert Consultant',
      description: [
        'Solutions Architect for Spanish Ministry of Foreign Affairs',
        'Led 35+ platform engineers in DevOps excellence initiatives',
        'Designed comprehensive microservices ecosystems'
      ],
      current: false
    },
    {
      period: '2016 - 2018',
      company: 'Everis Spain',
      role: 'Solutions Architect',
      description: [
        'Architected enterprise PaaS platforms',
        'Led DevOps transformation initiatives',
        'Designed cloud-native applications'
      ],
      current: false
    },
    {
      period: '2006 - 2016',
      company: 'Tata Consultancy Services',
      role: 'Senior Technical Lead',
      description: [
        'Managed teams up to 70 professionals',
        'Architected 30+ enterprise applications',
        'Led digital transformation projects'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-steel-blue"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-4 h-4 rounded-full border-4 ${
                  exp.current 
                    ? 'bg-orange border-orange' 
                    : 'bg-white dark:bg-gray-800 border-steel-blue'
                }`}></div>

                <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-steel-blue dark:text-orange mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-3 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;