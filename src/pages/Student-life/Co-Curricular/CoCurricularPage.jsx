import React from 'react';
import CoCurricular from './CoCurricular';
import Sidebar from './Sidebar';
import ClubActivities from './ClubActivities';


const CoCurricularPage = () => {
    return (
        <div className="CoApp">
        <Sidebar />
      <div className="Co-content">
      <CoCurricular />
      <ClubActivities />
      </div>
      </div>
      );
    };

    export default CoCurricularPage;