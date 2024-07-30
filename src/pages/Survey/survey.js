import {Link, useParams} from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();
    const questionNum = parseInt(questionNumber, 10);

    const backPage = questionNum > 1 ? questionNum - 1 : questionNum;
    const nextPage = questionNum + 1;

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNum}</h2>

            <Link to={`/survey/${backPage}`}>Précédent</Link>

            {nextPage <= 10 ? (
                <Link to={`/survey/${nextPage}`}>Suivant</Link>
            ) : (
                <Link to="/results">Voir les résultats</Link>
            )}
        </div>
    );
}

export default Survey;