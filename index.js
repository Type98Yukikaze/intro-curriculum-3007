'use strict';

/**
 * 17で割り切れるときtrueを返す
 * @param 
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
