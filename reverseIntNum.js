const reverseInt = num => {
  let reverseNum = '';
  const numStr = String(num);
    numStr[0] === '-' ? reverseNum += '-' : false;
    for (let i = numStr.length - 1; i >= 0; i--) {
      const result = numStr[i] === '-' ? return Number(reverseNum) : reverseNum += numStr[i];
    }
    return result;
}
