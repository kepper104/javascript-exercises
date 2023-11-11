const removeFromArray = function() {
    let argLength = arguments.length
    arr = arguments[0]

    for (let itemToRemoveIndex = 1; itemToRemoveIndex < argLength; itemToRemoveIndex++){
        let itemToRemove = arguments[itemToRemoveIndex]
        let itemToRemoveIndexInArr = arr.indexOf(itemToRemove)
        if (itemToRemoveIndexInArr > -1){
            arr.splice(itemToRemoveIndexInArr, 1)
        }

    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;