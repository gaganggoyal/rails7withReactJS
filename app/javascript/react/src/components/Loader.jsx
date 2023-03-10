import React from "react";

const Loader = (props) => {
  return (
    <React.Fragment>
      { !props.isShowLoader ? 
      <div className="mt-5 d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : ''
      } 
    </React.Fragment>
  );
};

export default Loader;
