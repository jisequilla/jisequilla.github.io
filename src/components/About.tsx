import React from 'react';
import { Users, Calendar, Award, Briefcase, Code, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '18+' },
    { icon: Users, label: 'Team Members Led', value: '35+' },
    { icon: Briefcase, label: 'Projects Coordinated', value: '20+' },
    { icon: Globe, label: 'Industries Served', value: '4' },
    { icon: Code, label: 'Applications Architected', value: '30+' },
    { icon: TrendingUp, label: 'Cloud Platforms', value: 'Multiple' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a seasoned Solutions Architect with 18+ years of experience designing and delivering 
              enterprise-grade technology solutions that transform business operations. I specialize in 
              bridging technical excellence with business objectives across Banking, Telecommunications, 
              Insurance, and Hospitality industries.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans cloud architecture, microservices design, DevOps practices, and team 
              leadership. I've successfully managed cross-functional teams up to 35 professionals, 
              delivering complex projects on time and within budget while maintaining the highest 
              technical standards.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about emerging technologies, continuous learning, and mentoring the next 
              generation of technology professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-navy to-steel-blue rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;