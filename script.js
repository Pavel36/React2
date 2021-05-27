let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        const question1 = prompt("Один из последних просмотренных фильмов?"),
            question2 = +prompt("На сколько оцените его?");
        if (question1.length < 50 && question1.length != '' && question2.length != '' && question1 != null && question2 != null) {
            personalMovieDB.movies[question1] = question2;
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.private);

function writeYourGenres() {
    for(let i=0; i<3; i++) {
        personalMovieDB.genres[i]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}