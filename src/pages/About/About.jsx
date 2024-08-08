import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { AllData, Academicdata, Curricular, Sports, event } from '../../data';
import '../../components/component.css';
import PhotoCard from '../../components/PhotoCard';


const About = () => {
  const [value, setValue] = useState("All");
  const [selectedAll, setSelectedAll] = useState(null);
  const [visibleData, setVisibleData] = useState(10);  
  const selectedAllRef = useRef(null);

  useEffect(() => {
    if (selectedAll && selectedAllRef.current) {
      selectedAllRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedAll]);


  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 10); 
  };

  const renderTitleWithUnderline = (title) => {
    if (!title) return null;
    const firstThreeLetters = title.slice(0, 3);
    const remainingLetters = title.slice(3);
    return (
      <>
        <span className="underline">{firstThreeLetters}</span>{remainingLetters}
      </>
    );
  };

  return (
    <div>
      <div className="photo-gallery">
        {selectedAll && (
          <div ref={selectedAllRef} className="selected-photo">
            <h3>{renderTitleWithUnderline(selectedAll.title)}</h3>
            <p>{selectedAll.memory}</p>
            <img src={selectedAll.image} alt={selectedAll.title} />
          </div>
        )}
       <div className="flex flex-col items-start gap-x-4 sm:flex-row sm:items-center sm:justify-start sm:space-x-2">
            <h2>
     <span className="underline">Pho</span>to Albums
           </h2>
          <h2>
      <span className="underline">Vid</span>eo Gallery
       </h2>
         <h2>
     <span className="underline">Med</span>ia Gallery
         </h2>
           </div>
        
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-8 mb-8">
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
            <li>
              <button className={`${value === "All" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm" : "button bg-transparent text-black border-none"}`} onClick={() => setValue("All")}>All</button>
            </li>
            <li>
              <button className={`${value === "Academic" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm" : "button bg-transparent text-black border-none"}`} onClick={() => setValue("Academic")}>Academic</button>
            </li>
            <li>
              <button className={`${value === "Co-Curricular" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm" : "button bg-transparent text-black border-none"}`} onClick={() => setValue("Co-Curricular")}>Co-Curricular</button>
            </li>
            <li>
              <button className={`${value === "Sports" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm" : "button bg-transparent text-black border-none"}`} onClick={() => setValue("Sports")}>Sports</button>
            </li>
            <li>
              <button className={`${value === "event" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm" : "button bg-transparent text-black border-none"}`} onClick={() => setValue("event")}>Event</button>
            </li>
          </ul>
        </div>

        <div className="photo-grid">
          {value === "All" && AllData.slice(0, visibleData).map((alldata) => (
            <PhotoCard key={alldata.id} alldata={alldata}  />
          ))}
          {value === "Academic" && Academicdata.slice(0, visibleData).map((alldata) => (
            <PhotoCard key={alldata.id} alldata={alldata} />
          ))}
          {value === "Co-Curricular" && Curricular.slice(0, visibleData).map((alldata) => (
            <PhotoCard key={alldata.id} alldata={alldata} />
          ))}
          {value === "Sports" && Sports.slice(0, visibleData).map((alldata) => (
            <PhotoCard key={alldata.id} alldata={alldata}  />
          ))}
          {value === "event" && event.slice(0, visibleData).map((alldata) => (
            <PhotoCard key={alldata.id} alldata={alldata}/>
          ))}
        </div>

        {visibleData < (value === "All" ? AllData.length :
          value === "Academic" ? Academicdata.length :
          value === "Co-Curricular" ? Curricular.length :
          value === "Sports" ? Sports.length :
          value === "event" ? event.length : 0) && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More Albums
          </button>
        )}
      </div>
    </div>
  );
}

export default About