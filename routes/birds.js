const express = require('express');
const router = express.Router();

/**
 * Middleware that is specific to this router
 */
router.use((req,res,next)=>{
    console.log('Time ',Date.now());
    next();
});