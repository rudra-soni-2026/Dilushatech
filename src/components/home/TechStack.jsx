import React from 'react';

const TechStack = () => {
  const techs = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 
    'Flutter', 'Firebase', 'AWS', 'Docker', 'Tailwind CSS', 'TypeScript'
  ];

  return (
    <div className="tech-stack">
      <div className="marquee-v3">
        <div className="marquee-content-v3">
          {techs.concat(techs).map((tech, index) => (
            <div className="tech-item-v3" key={index}>
              <div className="tech-dot-v3"></div>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
