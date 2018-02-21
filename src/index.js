/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var cur = 0;
    for(var i = 0; i < preferences.length; i++){
        if(preferences[i] - 1 > i && preferences[preferences[i] - 1] - 1 > i){
            if(preferences[preferences[preferences[i] - 1] - 1] === i + 1){
                cur = cur + 1;
            }
        }
    }
    return cur;
};
