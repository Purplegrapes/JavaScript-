var reverseString = function(s, target) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        const sum = s[left] + s[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else {
            left++;
            right--;
        }
    }
    return null;
};
reverseString(['h','e', 'l'])