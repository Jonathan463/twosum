var twoSum = function(nums, target) {
    let hashMap = {}

    let lengthOfArray = nums.length;

    for(let i = 0;i < lengthOfArray; i++) {

        let containKey = target - nums[i];
        
        let content = hashMap[containKey];
        if(content !=undefined) {
            return [nums[hashMap[containKey]],nums[i]]
        }

        hashMap[nums[i]] = i;
        
    }
};

console.log(twoSum([1,-2,3,4,2], 5)); [1,4]