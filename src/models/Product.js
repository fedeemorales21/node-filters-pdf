const { model,Schema } = require('mongoose')

productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Product', productSchema)