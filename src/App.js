import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BasicInfo from './components/BasicInfo';
import EnteredDetails from './components/EnteredDetails';
import AdditionalQuestions from './components/AdditionalQuestions';
import ThankYouPage from './components/ThankYouPage';
import About from './components/About';
import MainLayout from './layouts/MainLayout';

function App() {
  const initBasicData = JSON.parse(localStorage.getItem("data")) || {};
  const initQuestionsData =
    JSON.parse(localStorage.getItem("questiondata")) || {};

  const [basicData, setBasicData] = useState(initBasicData);
  const [questionData, setQuestionData] = useState(initQuestionsData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(basicData));
  }, [basicData]);

  useEffect(() => {
    localStorage.setItem("questionData", JSON.stringify(questionData));
  }, [questionData]);

  const addBasicData = (name, email, contact) => {
    const myBasicData = {
      name: name,
      email: email,
      contact: contact,
    };

    setBasicData(myBasicData);
    localStorage.setItem("data", JSON.stringify(myBasicData));
  };

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = {
      profession: profession,
      interest: interest,
      reference: reference,
    };

    setQuestionData(myQuestionData);
    localStorage.setItem("questionData", JSON.stringify(myQuestionData));
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<BasicInfo addBasicData={addBasicData} />} />
        <Route
          path="/questions"
          element={<AdditionalQuestions addQuestionData={addQuestionData} />}
        />
        <Route
          path="/details"
          element={
            <EnteredDetails data={basicData} questionData={questionData} />
          }
        />
        <Route path="/thanks" element={<ThankYouPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
