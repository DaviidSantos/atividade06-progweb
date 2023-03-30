import express from "express";
import pessoas from './pessoas.router.js'

const router = express.Router();

export default () => {
    pessoas(router)
    return router
}