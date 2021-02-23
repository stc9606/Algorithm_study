const solution = (numbers) =>  {
    let result = [];
       
    for(let i=0; i < numbers.length; i++) {
        for(let j=i+1; j < numbers.length; j++) {
            const number = numbers[i] + numbers[j];
            
            result.push(number);
        }     
    }
    const uniqueNumbers = [...new Set(result)];
    
    uniqueNumbers.sort((a, b) => {
        return a-b;
    })
    
    return uniqueNumbers;    
}