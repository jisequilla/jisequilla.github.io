import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 90 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud Platform (GCP)', level: 80 }
      ]
    },
    {
      category: 'Programming & Frameworks',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot/Framework', level: 95 },
        { name: 'JavaScript/Node.js', level: 80 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      category: 'Architecture & Design',
      skills: [
        { name: 'Microservices Architecture', level: 95 },
        { name: 'API Design', level: 90 },
        { name: 'Enterprise Integration Patterns', level: 90 },
        { name: 'Domain-Driven Design', level: 85 }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Kubernetes', level: 90 },
        { name: 'Docker', level: 90 },
        { name: 'Terraform', level: 85 },
        { name: 'Jenkins/Tekton', level: 85 },
        { name: 'GitOps/ArgoCD', level: 85 }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'Oracle', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL Server', level: 75 }
      ]
    },
    {
      category: 'Leadership & Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Stakeholder Management', level: 90 },
        { name: 'Technical Mentoring', level: 90 },
        { name: 'Project Management', level: 85 }
      ]
    }
  ];

  const getBarColor = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-green-500 to-green-600';
    if (level >= 80) return 'bg-gradient-to-r from-blue-500 to-blue-600';
    if (level >= 70) return 'bg-gradient-to-r from-orange-500 to-orange-600';
    return 'bg-gradient-to-r from-gray-400 to-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-steel-blue dark:text-orange font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${getBarColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;