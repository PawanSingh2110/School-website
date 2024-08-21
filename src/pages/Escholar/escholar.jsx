import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Escholar = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleClick = (session) => {
    showEScholarsOf(session);
    setSelectedYear(session);
  };

  const showEScholarsOf = (session) => {
    // Function implementation to show scholars of the selected session
    console.log(`Showing scholars of ${session}`);
  };

  const handleDownload = (filePath) => {
    // Logic to handle file download
    console.log(`Downloading file from ${filePath}`);
  };

  const handleBackClick = () => {
    setSelectedYear(null);
  };

  return (
    <div>
      {/* Title Section */}
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">E-Scholars</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> News & Calendar <FaArrowRight />{' '}
          <span className="font-medium"> E-Scholars </span>
        </h1>
      </div>
      <section className="bg-silver-light">
        <div className="container">
          <div className="section-title">
            <div className="ps-0 mb-4">
              {selectedYear && (
                <button
                  className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={handleBackClick}
                >
                  <FaArrowLeft /> Go Back
                </button>
              )}
            </div>
            <div className="row" id="view">
              {!selectedYear ? (
                [2024, 2023, 2022, 2020, 2019].map((year) => (
                  <div key={year} className="p-3 col-md-4 col-sm-12">
                    <div
                      className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                      onClick={() => handleClick(year)}
                      style={{
                        textTransform: 'capitalize',
                        borderRadius: '1rem',
                        cursor: 'pointer',
                        backgroundColor: '#202C45', // Example background color
                      }}
                    >
                      {`Session ${year}-${year + 1}`}
                    </div>
                  </div>
                ))
              ) : (
                <div className="container">
                  <div className="ps-0 mb-4">
                    <button
                      className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
                      style={{ cursor: 'pointer' }}
                      onClick={handleBackClick}
                    >
                      <FaArrowLeft /> Go Back
                    </button>
                  </div>
                  <div id="heading" className="fs-3 text-decoration-underline">
                    Session {selectedYear}-{selectedYear + 1}
                  </div>
                  <div className="row" id="view">
                    <div
                      onClick={() => handleDownload('pdf/scholar/APR-JUN_2024.pdf')}
                      style={{ cursor: 'pointer' }}
                      className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
                    >
                      <div className="tm-sc-flipbox">
                        <div
                          className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                          style={{ minHeight: '120px', borderRadius: '1rem' }}
                        >
                          <div className="flipbox-inner justify-content-center d-flex align-items-center">
                          <h4 
  className="icon-box-title text-white fw-bold" 
  style={{ marginTop: '3rem', textTransform: 'uppercase' }}
>
  APRIL-JUNE
</h4>

                          </div>
                        </div>
                        <div
                          className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                          style={{ minHeight: '120px', borderRadius: '1rem' }}
                        >
                          <div className="flipbox-inner justify-content-center d-flex align-items-center">
                            <h4 className="icon-box-title text-white fw-bold">
                              <a
                                href="#"
                                target="_self"
                                className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                                onClick={() => handleDownload('pdf/scholar/APR-JUN_2024.pdf')}
                              >
                                Download Attachment
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Escholar;
