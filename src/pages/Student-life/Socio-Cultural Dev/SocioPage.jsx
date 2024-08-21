import React from 'react';
import SocioCulture from './SocioCulture';
import ARMS from './ARMS';
import Sidebar2 from './Sidebar2';
import Clubs from './Clubs';
import SETU from './SETU';
import IIMUN from './IIMUN';
import IIMUNForm from './Form';


const Socio = () => {
    return (
        <div className="SocioApp">
        <Sidebar2 />
      <div className="Socio-content">
      <SocioCulture />
        <SETU />
        <ARMS />
        <Clubs />
        <IIMUN />
        <IIMUNForm />
      </div>
      </div>
      );
    };

    export default Socio ;