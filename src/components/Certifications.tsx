import React from 'react';
import { Award, GraduationCap, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    { name: 'MongoDB SI Architect', year: '2025', type: 'cert', status: 'recent' },
    { name: 'GitOps Scale', year: '2025', type: 'cert', status: 'recent' },
    { name: 'Google Cloud Professional DevOps Engineer', year: '2022', type: 'cert', status: 'active' },
    { name: 'Google Cloud Engineer', year: '2021', type: 'cert', status: 'active' },
    { name: 'Red Hat Platform-as-a-Service Administration', year: '2018-2020', type: 'cert', status: 'active' },
    { name: 'ITIL', year: '2013', type: 'cert', status: 'active' }
  ];

  const education = [
    {
      name: 'Leadership and Project Management Diploma',
      institution: 'Universidad Adolfo Ibáñez',
      year: '2009-2010',
      type: 'education'
    },
    {
      name: 'CCNA Coursework',
      institution: 'Universidad Católica del Uruguay',
      year: '2004-2005',
      type: 'education'
    },
    {
      name: 'Network Security Analyst Diploma',
      institution: 'PROYDESA – NET-K',
      year: '2002-2003',
      type: 'education'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            Certifications & Education
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-orange mr-3" />
              <h3 className="text-2xl font-bold text-navy dark:text-white">
                Recent Certifications
              </h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-navy dark:text-white mb-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    </div>
                    {cert.status === 'recent' && (
                      <span className="px-3 py-1 bg-orange text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-steel-blue mr-3" />
              <h3 className="text-2xl font-bold text-navy dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-navy dark:text-white mb-2">
                    {edu.name}
                  </h4>
                  <p className="text-steel-blue dark:text-orange font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;