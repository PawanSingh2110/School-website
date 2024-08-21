import React from 'react';

const SocioCulture = () => {
  return (
    <div>
    <div className=" title w-full h-48 py-10  text-white bg-orange-500">
     <h1 className="lg:text-5xl text-3xl font-medium text-center ">Socio-Cultural Development</h1>
     <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> School-life <FaArrowRight/> <span className="font-medium ">Co-Curriculam</span> </h1>
   </div>
   <div className="Addmision-section">
     <div className="Addmission-bg">
       <h1></h1>
       <nav className="breadcrumb">
         <Link to="/">Home</Link> &gt;{" "}
         <Link to="">School-life</Link> &gt;{" "}
         <Link>Socio-Cultural Development</Link> 
       </nav>
     </div>
   </div>
    <div id="socioCulture" className="content">
      <h2>Socio – Cultural Development</h2>
      <p>
      The burgeoning youth of India makes our nation one of the youngest countries in the world. No wonder, there is talk of India's 'Demographic Dividend' and if channelled right during their formative years, these Change-makers can start contributing to society quite early on by involving its students in home grown projects/schemes like SETU, Open Arms Project, Model United Nations Environment Assembly to name just a few.

These initiatives are not only about making life better for the marginalised, the less fortunate and the physically challenged, but also seek to answer burning topical questions of climate and environment. Of course, it's a quid pro quo. While tentative steps to bring positive changes in society are introduced with students' active participation in socio-economic and environmental causes, the former too learn traits like team work and leadership, making them evolve into responsible and aware citizens of the country.
      </p>
    </div>
    </div>
  );
};

export default SocioCulture;