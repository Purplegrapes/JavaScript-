export const checkInclusion = function(s1, s2) {
  let map = {};
  let window = {};
  let left = 0;
  let right = 0;
  let needSize = 0;
  for (let i =0; i< s1.length; i++) {
      if (!map[s1[i]]) {
          map[s1[i]] = 1;
          needSize++;
      } else {
          map[s1[i]]++;
      }
  }
  while(right < s2.length) {
    const chart = s2[right];
    right++;
    if (map[chart]) {
      window[chart] = window[chart] ? window[chart] + 1 : 1;
      if (window[chart] === map[chart]) {
        needSize--;
      }
    }
    while (right-left >= s1.length) {
      if (needSize === 0) {
         return true;
      }
      const chart = s2[left];
      left++;
      if (map[chart]) {
        if (window[chart] === map[chart]) {
          needSize++;
        }
        window[chart]--;
      }
    }
  }
  return false;
};
