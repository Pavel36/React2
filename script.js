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
    private: false,
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            const genresInput = prompt("Введите ваши любимые жанры через запятую").toLowerCase();
            if (genresInput == null || genresInput == '') {
                i--;
            } else {
                this.genres = genresInput.split(', ');
                this.genres.sort();
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (this.private) {
            this.private = false;
        } else if (!this.private) {
            this.private = true;
        }
    }
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb(personalMovieDB.private);
personalMovieDB.writeYourGenres();