import questions from "../_data/questions.json";

function FAQ() {
  return (
    <div id="faq-content">
      <div class="page-heading">
        <div class="big-logo-faq"></div>
        <h1>FAQ</h1>
        <h2>Answering your most frequently asked questions</h2>
      </div>

      <div id="questions">
        <div id="q1" class="left-question">
          <h2>{questions[0]["question"]}</h2>
          <h3>{questions[0]["answer"]}</h3>
        </div>
        <div id="q2" class="right-question">
          <h2>{questions[1]["question"]}</h2>
          <h3>{questions[1]["answer"]}</h3>
        </div>
        <div id="q3" class="left-question">
          <h2>{questions[2]["question"]}</h2>
          <h3>{questions[2]["answer"]}</h3>
        </div>
        <div id="q4" class="right-question">
          <h2>{questions[3]["question"]}</h2>
          <h3>{questions[3]["answer"]}</h3>
        </div>
        <div id="q5" class="left-question">
          <h2>{questions[4]["question"]}</h2>
          <h3>{questions[4]["answer"]}</h3>
        </div>
        <div id="q6" class="right-question">
          <h2>{questions[5]["question"]}</h2>
          <h3>{questions[5]["answer"]}</h3>
        </div>
        <div id="questions"></div>
      </div>
    </div>
  );
}

export default FAQ;
