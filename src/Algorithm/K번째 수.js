/*
    [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3
    
    i = 시작
    j = 끝
    k = 원소 위치
    
    3개의 array[i,j,k] (리스트)를 제공.
    
    return [5, 6, 3] 총 3개의 원소 값을 구하는 거임.
    
    ex)
    1단계 : 2에서 5번째까지 배열을 자른다. [5, 2, 6, 3]
    2단계 : 1단계에서 자른 배열을 정렬한다. [2, 3, 5, 6]
    3단계 : 2단계에서 나온 배열의 3번째 요소를 저장한다.
*/


const solution = (array, commands) => {
    const result = [];    
    
    for(const idx of commands) {
        const i = idx[0] - 1;
        const j = idx[1]; 
        const k = idx[2] - 1;
        
        /* 1단계 */
        const sliceList = array.slice(i, j);
        
        /* 2단계 */
        sliceList.sort((a, b) => {
            return a - b;
        });
        
        /* 3단계 */
        result.push(sliceList[k]);        
    }
    
    return result;
}