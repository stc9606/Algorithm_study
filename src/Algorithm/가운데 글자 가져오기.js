const solution = (s) => {    
    const mok = s.length / 2;  
    return s.length % 2 === 0 ? s.substring(mok+1, mok-1) : s.substring(mok, mok+1);       
}