const solution = (arr) => {
    
    const result = arr.filter((item, index) => {
        return item !== arr[index-1]
    });
    
    return result;    
}