let questionsDao = require('../daos/questions-dao');

const findAllQuestions = () => questionsDao
    .findAllQuestions();

const findQuestionById = (qid) => questionsDao
    .findQuestionById(qid);

const findQuestionsForQuiz = (quizId) =>
    questionsDao.findQuestionsForQuiz(quizId);

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};