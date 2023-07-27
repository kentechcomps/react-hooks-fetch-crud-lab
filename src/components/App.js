import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsl ,setQuestion] =useState([])

useEffect(()=>{
  fetch(" http://localhost:3000/questions")
  .then(r=>r.json())
  .then((items) => {
    setQuestion(items)
  })
  
  
},[]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}

       <QuestionList 
       questionlist = {questionsl}
       /> 
        
        </main>
  );
}

export default App;
