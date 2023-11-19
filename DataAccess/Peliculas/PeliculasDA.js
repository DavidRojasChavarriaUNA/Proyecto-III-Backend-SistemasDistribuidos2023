'use strict';

const {
    Crud
} = require('../RedisDB/CrudBD');

const {
    PeliculaKey
} = require('../RedisDB/ParametrosBD');

/**
 * Retorna todas las peliculas.
 *
 * returns List
 **/
const GetAllMovies = async () => {
    const peliculas = await Crud.GetAll(PeliculaKey);
    return peliculas;
}

/**
 * Retorna una pelicula por Id.
 *
 * peliculaId Integer 
 * returns Movie
 **/
const GetMovieById = async (peliculaId) => {
    const pelicula = await Crud.GetOne(PeliculaKey, peliculaId);
    return pelicula;
}

/**
 * Crea una nueva película.
 *
 * body Movie Datos película
 * no response value expected for this operation
 **/
const InsertMovie = async (body) => {
    const response = await Crud.InsertOne(PeliculaKey, body);
    return response;
}

/**
 * Actualiza la información de una película.
 *
 * body Movie Datos película
 * peliculaId String 
 * no response value expected for this operation
 **/
const UpdateMovie = async (body, peliculaId) => {
    const response = await Crud.UpdateOne(PeliculaKey, peliculaId, body);
    return response;
}

/**
 * Elimina una película por id.
 *
 * peliculaId String 
 * no response value expected for this operation
 **/
const DeleteMovie = async (peliculaId) => {
    const response = await Crud.DeleteOne(PeliculaKey, peliculaId);
    return response;
}

exports.PeliculasDA = {
    GetAllMovies,
    GetMovieById,
    InsertMovie,
    UpdateMovie,
    DeleteMovie
}