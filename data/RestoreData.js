'use strict';

const {
    CrearRespuestaError,
    CrearRespuestaFAAS,
    Codigos
} = require('../utils/Tools');

const {
    PeliculasBL
} = require('../Bussisness/Peliculas/PeliculasBL');

const {
    CompositoresBL
} = require('../Bussisness/Compositores/CompositoresBL');

const {
    AlbumesBL
} = require('../Bussisness/Albumes/AlbumesBL');

const fs = require('fs');

const loadFile = (fileName) => {
    return new Promise((resolve, reject) => {
        const path = `${__dirname}\\${fileName}`;
        console.log(path);
        fs.readFile(path, 'utf8', (err, data) => {
            const dataFile = JSON.parse(data);
            resolve(dataFile);
        });
    });
}

const RestoreData = async () => {
    try {
        const respuestaPeliculas = await PeliculasBL.GetAllMovies();
        if(respuestaPeliculas.Code === Codigos.CodeSuccess){
            for(let i = 0; i<respuestaPeliculas.data.length; i++){
                const respuestaDel = await PeliculasBL.DeleteMovie(respuestaPeliculas.data[i]._id);
                if(respuestaDel.Code !== Codigos.CodeSuccess)
                    console.log(respuestaDel);
            };
        }

        const respuestaCompositores = await CompositoresBL.GetAllComposers();
        if(respuestaCompositores.Code === Codigos.CodeSuccess){
            for(let i = 0; i<respuestaCompositores.data.length; i++){
                const respuestaDel = await CompositoresBL.DeleteComposer(respuestaCompositores.data[i]._id);
                if(respuestaDel.Code !== Codigos.CodeSuccess)
                    console.log(respuestaDel);
            };
        }

        const respuestaAlbumes = await AlbumesBL.GetAllAlbumes();
        if(respuestaAlbumes.Code === Codigos.CodeSuccess){
            for(let i = 0; i<respuestaAlbumes.data.length; i++){
                const respuestaDel = await AlbumesBL.DeleteAlbum(respuestaAlbumes.data[i]._id);
                if(respuestaDel.Code !== Codigos.CodeSuccess)
                    console.log(respuestaDel);
            };
        }

        const peliculas = await loadFile('peliculas.json');
        for(let i = 0; i<peliculas.length; i++){
            const respuestaNew = await PeliculasBL.InsertMovie(peliculas[i]);
            if(respuestaNew.Code !== Codigos.CodeSuccess)
                console.log(respuestaNew);
        }

        const compositores = await loadFile('compositores.json');
        for(let i = 0; i<compositores.length; i++){
            const respuestaNew = await CompositoresBL.InsertComposer(compositores[i]);
            if(respuestaNew.Code !== Codigos.CodeSuccess)
                console.log(respuestaNew);
        }

        const albumes = await loadFile('albumes.json');
        for(let i = 0; i<albumes.length; i++){
            const respuestaNew = await AlbumesBL.InsertAlbum(albumes[i]);
            if(respuestaNew.Code !== Codigos.CodeSuccess)
                console.log(respuestaNew);
        }

        return CrearRespuestaFAAS(Codigos.OK, 'Fin');
    } catch (error) {
        return CrearRespuestaError(Codigos.UnprocessableContent, error);
    }
}

//ejecutar en local unicamente para restaurar los datos.
RestoreData().then(console.log);