const {Schema, model} = require('mongoose')

const RecipeComment = new Schema({
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now(), immutable: true},
    authorId: {type: Schema.Types.ObjectId, ref: 'user', required: true, immutable: true},
})

module.exports = model('recipe_comment', RecipeComment)