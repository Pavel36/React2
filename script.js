let numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
let question1=prompt("Один из последних просмотренных фильмов?");
let question2=prompt("На сколько оцените его?");
personalMovieDB.movies[question1]=question2;