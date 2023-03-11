import React, { useState } from "react";

const NewQuestion = () => {
  const questionTags = [
    { label: "Ruby", value: 0 },
    { label: "Rails", value: 1 },
    { label: "React", value: 2 },
    { label: "Bootstrap", value: 3 },
    { label: "Javascript", value: 4 },
    { label: "Data Structure", value: 5 },
  ];

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState(questionTags[0].value);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const tagChangeHandler = (event) => {
    setTag(event.target.value);
  };

  // const [formField, setFormField] = useState({
  //   title: "",
  //   tag: questionTags[0].value,
  // });

  const QuestionSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ title: title, tag: tag });
  };

  // const formFieldHandler = (event) => {
  //   setFormField({...formField, [event.target.name]: event.target.value})
  // }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Write your question and help the world to grow.
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={QuestionSubmitHandler}>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label mt-3 mb-3">Title</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  value={title}
                  onChange={(event) => titleChangeHandler(event)}
                  name="title"
                ></input>
              </div>
              <div className="form-group">
                <label className="form-label mt-3 mb-3">
                  Select the question tag
                </label>
                <select
                  className="form-select form-select-lg rounded-0"
                  value={tag}
                  onChange={(event) => tagChangeHandler(event)}
                  name="tag"
                >
                  {questionTags.map((tag) => (
                    <option key={tag.value} value={tag.value}>
                      {tag.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
