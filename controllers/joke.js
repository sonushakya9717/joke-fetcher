const express = require("express");
const app = express();
const axios = require('axios')

const randomJoke = async (req, res, next) => {
  try{
    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    if(response){
        const joke = response.data.value
        return res.status(200).json(joke)
    }
  }catch(err){
    return next({status:500,error:"server error"})
  }
};

module.exports = {randomJoke}