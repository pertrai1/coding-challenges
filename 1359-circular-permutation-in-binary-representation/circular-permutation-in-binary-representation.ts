function circularPermutation(n: number, start: number): number[] {
    // create an array to return
    const result: number[] = [];
  
    // loop a certain amount of times
    for (let i = 0; i < (1 << n); i++) {
        let gray = i ^ (i >> 1);
        result.push(start ^ gray);
    }

    return result;
};