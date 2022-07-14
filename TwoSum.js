var twoSum = function(array, target) {
    let hashMap = {}

    let lengthOfArray = array.length;

    for(let i = 0;i < lengthOfArray; i++) {

        let containKey = target - array[i];
        
        let content = hashMap[containKey];
        if(content !=undefined) {
            return [array[hashMap[containKey]],array[i]]
        }

        hashMap[array[i]] = i;
        
    }
};

console.log(twoSum([1,-2,3,4,2], 5)); [1,4]