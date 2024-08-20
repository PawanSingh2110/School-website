import React from 'react';

const Sidebar2 = () => {
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
      <div className="tab" onClick={() => scrollToSection('socioCulture')}>
        Socio - Cultural Activities     
        </div>
      <div className="tab" onClick={() => scrollToSection('setu')}>
        SETU
      </div>
      <div className="tab" onClick={() => scrollToSection('arms')}>
      The open ARMS Project – Inclusive Education
      </div>
      <div className="tab" onClick={() => scrollToSection('clubs')}>
      Clubs - Internationalism
      </div>
      <div className="tab" onClick={() => scrollToSection('iimun')}>
      IIMUN Championship Conference - 2024
      </div>
      <div className="tab" onClick={() => scrollToSection('form')}>
      Interested candidates, kindly fill the form
      </div>
    </div>
  );
};

export default Sidebar2;