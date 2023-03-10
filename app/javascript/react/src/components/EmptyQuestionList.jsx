import React from "react";

EmptyQuestionList = (props) => {
  return (
    <div>
      <div
        className="mt-5 alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>OOPS!</strong> No questions found with the tag: {props.tagname}.
        Please select another options from the list.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default EmptyQuestionList;
