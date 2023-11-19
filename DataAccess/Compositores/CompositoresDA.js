'use strict';

const {
    Crud
} = require('../RedisDB/CrudBD');

const {
    CompositorKey
} = require('../RedisDB/ParametrosBD');

/**
 * Retorna todos los compositores.
 *
 * returns List
 **/
const GetAllComposers = async () => {
    const compositor = await Crud.GetAll(CompositorKey);
    return compositor;
}

/**
 * Retorna un compositor por Id.
 *
 * compositorId Integer 
 * returns Composer
 **/
const GetComposerById = async (compositorId) => {
    const compositor = await Crud.GetOne(CompositorKey, compositorId);
    return compositor;
}

/**
 * Crea un nuevo compositor.
 *
 * body Composer Datos compositor
 * no response value expected for this operation
 **/
const InsertComposer = async (body) => {
    const response = await Crud.InsertOne(CompositorKey, body);
    return response;
}

/**
 * Actualiza la información de un compositor.
 *
 * body Composer Datos compositor
 * compositorId Integer 
 * no response value expected for this operation
 **/
const UpdateComposer = async (body, compositorId) => {
    const response = await Crud.UpdateOne(CompositorKey, compositorId, body);
    return response;
}

/**
 * Elimina un compositor por id.
 *
 * compositorId Integer 
 * no response value expected for this operation
 **/
const DeleteComposer = async (compositorId) => {
    const response = await Crud.DeleteOne(CompositorKey, compositorId);
    return response;
}

exports.CompositoresDA = {
    GetAllComposers,
    GetComposerById,
    InsertComposer,
    UpdateComposer,
    DeleteComposer
}