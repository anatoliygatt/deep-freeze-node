/**
 * @module index
 * @description Entry point for deep-freeze-node module.
 * @version 1.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

"use strict";

/**
 * @public
 * @description Expose function to recursively freeze objects.
 * @returns {Function} - Function to recursively freeze objects.
 */

module.exports = require("./lib/deep-freeze");