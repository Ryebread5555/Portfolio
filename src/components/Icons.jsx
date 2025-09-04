import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiHandlebarsdotjs
} from 'react-icons/si';

const Icons = () => {
  const frontendIcons = [
    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiReact, name: 'React', color: 'text-blue-400' },
    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-500' }
  ];

  const backendIcons = [
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express.js', color: 'text-gray-600' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { icon: SiHandlebarsdotjs, name: 'Handlebars', color: 'text-orange-600' }
  ];

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
      {/* Front-end Icons */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Front-end Proficiencies</h2>
        <div className="grid grid-cols-2 gap-6">
          {frontendIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <item.icon className={`text-4xl ${item.color} hover:scale-110 transition-transform duration-200`} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Back-end Icons */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Back-end Proficiencies</h2>
        <div className="grid grid-cols-2 gap-6">
          {backendIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <item.icon className={`text-4xl ${item.color} hover:scale-110 transition-transform duration-200`} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
