import React, { useState } from "react";

const QuestionDetail = (props) => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <h3 className="card-title">{props.question.title}</h3>
        <p className="lead">
          <span className="badge bg-primary">{props.question.tag}</span>
        </p>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => setLikeCount(likeCount + 1)}
        >
          Like
          {likeCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {likeCount}
            </span>
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;
