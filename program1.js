function longestSubstring(s) {
    // Implementation of longestSubstring function
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;

}
module.exports = { longestSubstring };



