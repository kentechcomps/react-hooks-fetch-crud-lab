import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questionlist}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        <QuestionItem key={questionlist.id}
         question = {questionlist}
        />
        }</ul>
    </section>
  );
}

export default QuestionList;

