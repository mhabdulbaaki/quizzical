import React from "react";
import IntroPage from "./Intro";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";

const questionsURL = "https://opentdb.com/api.php?amount=10";

export default function App(props) {
  async function getData() {
    const data = [];
    try {
      const response = await fetch(questionsURL);
      const jsonResponse = await response.json();

      jsonResponse.results.forEach((quiz) => {
        const answerOptions = [...quiz.incorrect_answers, quiz.correct_answer];
        answerOptions.sort(() => Math.random() - 0.5);

        return data.push({
          answer: quiz.correct_answer,
          question: quiz.question,
          options: answerOptions,
          id: nanoid(),
          selected: false
        });
      });
      return data;
    } catch (e) {
      console.log(`error fetching data\n Error: ${e}`);
    }
  }

  function toggleStartQuizState() {
    setStartQuizState((prevState) => !prevState);
  }

  const [startQuizState, setStartQuizState] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [answerSelected, setAnswerSelected] = React.useState(false)

  React.useEffect(() => {
    async function data() {
      const data = await getData();
      setQuestions(data);
    }

    data();

    //to clean-up the effect
    return () => {};
  }, [startQuizState]);

  function onSelected(v) {
    console.log(v);
  }

  const quizzes = questions.map((question) => (
    <Quiz
      key={question.id}
      data={question}
      selected={onSelected}
    />
  ));

  return (
    <main className="container">
      {!startQuizState ? (
        <IntroPage
          startQuiz={() => {
            toggleStartQuizState();
          }}
        />
      ) : (
        <div className="quiz-cards">
          {quizzes}
          <div className="checkAnswers">
            <h2 className="span">you scored 3/5 correct answers</h2>
            <button className="btn">Check answers</button>
          </div>
        </div>
      )}
    </main>
  );
}
