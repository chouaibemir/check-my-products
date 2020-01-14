var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = new Schema({
    id: {
        type: Number,
      },
    name: {
        type: String
    },
    tagline: {
        type: String
    },
    day: {
         type: Date,
    },
    votes_count: {
        type: Number
    }
});

Product.plugin(mongoosePaginate);
Product.set('toJSON', { virtuals: true });

/**
 * toJSON implementation
 */
Product.options.toJSON = {
    transform(doc, ret) {
      const r = ret;
      r.id = r._id;
      delete r._id;
      delete r.__v;
      return r;
    },
  };

module.exports = Product;
