import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoCurricular = () => {
  return (
    <div>
       <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Co-Curricular</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> School-life <FaArrowRight/> <span className="font-medium ">Co-Curriculam</span> </h1>
      </div>
      <div className="Addmision-section">
        <div className="Addmission-bg">
          <h1></h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt;{" "}
            <Link to="">School-life</Link> &gt;{" "}
            <Link>CoCurricular</Link> 
          </nav>
        </div>
      </div>
    
    <div id="coCurricular" className="content">
      <h2>Co-Curricular</h2>
      <p>
      Co-curricular activities are an integral part of the life of a student. They are much more than mere recreational activities; they provide important directions to a student on his journey to self-discovery. These activities hone the softer skills, the aesthetic senses, design consciousness, sensitivity of feelings, dignity of labour, team work, inclusivity and link the physical skills to the mind and emotion. These are run during activity lessons so that cooperation and mutual respect prevails over selfish conduct through a wide range of co-curricular activities and Social Work platforms. With a bent to social welfare. The School embraced this approach for the all-round growth of the students well before the co-scholastic grades were introduced by the CBSE.

Moreover, the co-curricular activities of today could form the bedrock of career options of tomorrow
      </p>
    </div>
    </div>
  );
};

export default CoCurricular;