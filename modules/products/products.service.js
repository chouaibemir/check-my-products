const product_hunt = require('../core/services/producthunt.service');


/*
 * Get all products by params
 *@param {String} sort_by
 * @param {String} order
 * @param {Number} per_page
 * @returns {Promise<Object>}
 */

module.exports.getAllProducts = async ({ sort_by, order, per_page  }) => product_hunt.getProducts(sort_by, order, per_page);
