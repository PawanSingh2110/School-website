import React from 'react';

const Sidebar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${id}" not found`);
    }
  };

  return (
    <div className="sidebar">
      <div className="tab" onClick={() => scrollToSection('coCurricular')}>
        Co-Curricular
      </div>
      <div className="tab" onClick={() => scrollToSection('clubActivities')}>
        Club Activities
      </div>
    </div>
  );
};

export default Sidebar;