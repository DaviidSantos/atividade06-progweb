import express from "express";
import { listarPessoas, procurarPessoa } from "../controller/pessoa.js";

export default (router) => {
    router.get('/', listarPessoas);
    router.get('/:nome', procurarPessoa);
}