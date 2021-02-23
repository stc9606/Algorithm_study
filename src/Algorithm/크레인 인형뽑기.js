function solution(board, moves) {
    let result = 0; //터트린 아이템 갯수.
    let box = [];  //아이템을 담을 바구니.        
    
    
    for(const move of moves) {
        for(let i=0; i < board.length; i++) { /* board의 길이만큼 반복.. */
            /* 값이 0이 아닌 경우만 담자.. */
            if(board[i][move-1] !== 0) {                
                const selectItem = board[i][move-1];  //선택한 아이템..
                
                if(selectItem === box[box.length-1]) { //선택한 아이템과 바구니의 마지막으로 담긴 아이템이 같으면 파괴.
                    box.pop();                    
                    result += 2; //선택한 아이템과 파괴한 아이템 카운트 하기                     
                } else {
                    box.push(selectItem);
                }
                board[i][move-1] = 0; // 빈 배열로 초기화.
                break;                
            }
        }       
    }
    return result;
}