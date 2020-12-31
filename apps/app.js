"use strict";
const numberOfFilms = +prompt("Сколько фильмов посмотрели","") ;
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};

const a = prompt("Один из последних фильмов?","");
const b = prompt("Какая оценка","");
const c = prompt("Один из последних фильмов?","");
const d = prompt("Какая оценка","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);