import React from 'react';

const SessionDetail = ({ selectedYear, showSessions, download }) => {
  return (
    <div className="container">
      <div className="ps-0 mb-4">
        <a
          className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
          style={{ cursor: 'pointer' }}
          onClick={showSessions}
        >
          Go Back
        </a>
      </div>
      <div id="heading" className="fs-3 text-decoration-underline">
        {`Session ${selectedYear}-${selectedYear + 1}`}
      </div>
      <div className="row" id="view">
        {selectedYear === 2024 && (
          <div
            onClick={() => download('pdf/scholar/APR-JUN_2024.pdf')}
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
                    style={{ textTransform: 'uppercase' }}
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
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionDetail;
