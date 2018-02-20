/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let k = [];
    for(let i = 0; i < preferences.length; i++){
        if(){
            k.push(i)
        }
    }
    if(k.length < 3){
        return 0;
    }
    return Math.floor(k.length / 3);
};
