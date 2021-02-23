function solution(participant, completion) {    
    
    participant.sort();
    completion.sort();
    
    for(const idx in participant) {
        if(participant[idx] !== completion[idx]) {
            /* 
            조건이 단 한명의 선수를 제외하고 모두 완주이기 때문에
            한명이라도 걸리면 return해서 끝내자
            */
            return participant[idx];            
        }
    }
}
  
/*
	map : key, value로 이루어진 객체 반환.
    
    완주한 선수의 중복을 체크. 
*/
  
// const solution = (participant,completion) => { 
//   completion.map(name => completion[name] = (completion[name]|0)+1);

//   return participant.find((name) => !completion[name]--); 
