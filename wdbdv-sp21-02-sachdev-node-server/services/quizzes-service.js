let quizzesDao = require('../daos/quizzes-dao');

const findAllQuizzes = () => quizzesDao
    .findAllQuizzes();

const findQuizById = (quizId) => quizzesDao
    .findQuizById(quizId)
    .populate('questions').exec();

module.exports = {
    findAllQuizzes,
    findQuizById
};