const QuestionsBox = (props) => {
  return (
    <div className="questions-box">
      <div className="accordion mark"></div>
      <h5>{props.head}</h5>
      <p className="info hide">{props.text}</p>
    </div>
  );
};

const btn = document.getElementsByClassName("accordion");
const info = document.getElementsByClassName("info");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].classList.toggle("mark");
    info[i].classList.toggle("hide");
  });
}

export default QuestionsBox;
