const solution = (answers) => {
    const losers = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const maxNumbers = []; /* 루저들의(수포자) 문제 맞힌 수*/
    
    /* 맞힌 문제 카운트하기 */
    for(const loser of losers) {
        maxNumbers.push(answers.reduce((acc, cur, idx) => {
            cur === loser[idx % loser.length] ? acc++ : acc;
            return acc;
        }, 0));
    }       
        
    /* 제일 많이 맞힌 루저 찾기 */            
    const result = maxNumbers.reduce((acc, cur, idx) => {           
        cur === Math.max(...maxNumbers) ? acc.push(idx+1) : acc; 
        return acc;
    }, []); 
    
    return result;
}