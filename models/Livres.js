const mongoose = require("mongoose");

const livresSchema = new mongoose.Schema({
    titre:{
        type: String,
        required : [true,"Le titre est un champ obligatoire."],
        trim: true
    },
    auteur:{
        type: String,
        required : [true,"L'auteur est un champ obligatoire."],
        trim: true
    },
    categorie:{
        type: String,
        required:[true,"la catégorie est un champ obligatoire."],
        enum:["roman","informatique","sciences","histoire"]
    },
    annee:{
        type: Number,
        required : [true,"Le prix est un champ obligatoire."],
        min: 1900
    },
    language: {
        type: String,
        maxlength: 3,
    },
    disponible: {
        type: Boolean,
        default: true               
    }

},{timestamps:true});

module.exports = mongoose.model("livres",livresSchema,"livres")//3e paramètre est le nom utilisé sur MongoDB