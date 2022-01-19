import QuizContainer from "../containers/QuizContainer";
import NavBar from "./NavBar";

const Quiz = () => {
    return (
        <div id="grid">
            <header id="header">
            <img className="logo" src={"/img/wonderlogo.gif"}></img>
            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
            <h1>Quiz</h1>
              <QuizContainer />
            </section>
    </div>
    );
}

export default Quiz;