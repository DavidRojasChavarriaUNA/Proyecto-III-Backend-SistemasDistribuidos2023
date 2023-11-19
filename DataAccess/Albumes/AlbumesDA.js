'use strict';

const {
    Crud
} = require('../RedisDB/CrudBD');

const {
    AlbumKey
} = require('../RedisDB/ParametrosBD');

/**
 * Retorna todos los álbumes.
 *
 * returns List
 **/
const GetAllAlbumes = async () => {
    const albumes = await Crud.GetAll(AlbumKey);
    return albumes;
}

/**
 * Retorna un álbum por Id.
 *
 * albumId Integer 
 * returns Album
 **/
const GetAlbumById = async (albumId) => {
    const album = await Crud.GetOne(AlbumKey, albumId);
    return album;
}

/**
 * Crea un nuevo álbum.
 *
 * body Album Datos álbume
 * no response value expected for this operation
 **/
const InsertAlbum = async (body) => {
    const response = await Crud.InsertOne(AlbumKey, body);
    return response;
}

/**
 * Actualiza la información de un álbum.
 *
 * body Album Datos álbum
 * albumId Integer 
 * no response value expected for this operation
 **/
const UpdateAlbum = async (body, albumId) => {
    const response = await Crud.UpdateOne(AlbumKey, albumId, body);
    return response;
}

/**
 * Elimina un álbum por id.
 *
 * albumId Integer 
 * no response value expected for this operation
 **/
const DeleteAlbum = async (albumId) => {
    const response = await Crud.DeleteOne(AlbumKey, albumId);
    return response;
}

exports.AlbumesDA = {
    GetAllAlbumes,
    GetAlbumById,
    InsertAlbum,
    UpdateAlbum,
    DeleteAlbum
}