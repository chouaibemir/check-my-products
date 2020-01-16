const product_hunt = require('../core/services/producthunt.service');
const Product = require('../products/products.model');

/*
 * Get all products by params
 *@param {String} sort_by
 * @param {String} order
 * @param {Number} per_page
 * @returns {Promise<Object>}
 */

module.exports.getAllProducts = async ({ sort_by, order, per_page  }) => product_hunt.getProducts(sort_by, order, per_page)
.then((products) => {
    const productsObject = JSON.parse(products.body);
    const productsToReturn = new Array();
    productsObject.posts.forEach((post) => {
        const product = Object.assign({
          id: post.id,
          name: post.name,
          tagline: post.tagline,
          day: post.day,
          created_at: post.created_at,
          votes_count: post.votes_count,
          thumbnail: post.thumbnail.image_url,
          topis: post.topics
        });
        productsToReturn.push(product);
      });
    return productsToReturn;
})
