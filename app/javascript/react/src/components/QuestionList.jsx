import React, { useState, useEffect } from "react";
import EmptyQuestionList from "./EmptyQuestionList";
import QuestionDetail from "./QuestionDetail";

const QuestionList = () => {
  const questionTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "Javascript", value: 5 },
  ];

  const [questionList, setQuestionList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionTags[0].value);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const questionsUrl = "http://localhost:3000/api/v1/questions";

  const fetchQuestionList = () => {
    fetch(questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionList(data);
      });
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

  const updateSelectedItem = (event) => {
    setQuestionList([]);
    setSelectedOption(event.target.value);
    fetch(questionsUrl + `?tags=${questionTags[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionList(data);
        if (data.length == 0) {
          setIsShowAlert(true);
        } else {
          setIsShowAlert(false);
        }
      });
  };

  // const questionList = [
  //   {
  //     id: 1,
  //     title: "How to check if a key is present in a Hash?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 2,
  //     title: "What is the difference between string and symbol?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 3,
  //     title: "What will happen if you add two same keys in Hash?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 4,
  //     title: "How to delete a given key from hash?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 5,
  //     title: "How to check if two hashes are identicle?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 6,
  //     title: "How to combine two hashes in Ruby?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 7,
  //     title: "How to get unique keys from two hashes in Ruby?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 8,
  //     title: "What does the hash key?, key? member? include? methods in hash?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 9,
  //     title: "What are blocks in ruby?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 10,
  //     title: "Does the order of keys matters to compare two hashes in Ruby?",
  //     tag: "Ruby",
  //   },
  // ];

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter Questions by Tags</p>
        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(event) => updateSelectedItem(event)}
        >
          {questionTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
        {questionList.length > 0
          ? questionList.map((question) => (
              <QuestionDetail question={question} key={question.id} />
            ))
          : ""}
        {isShowAlert && (
          <EmptyQuestionList tagname={questionTags[selectedOption].label} />
        )}
      </div>
    </div>
  );
};

export default QuestionList;
