const solution =(a, b) => {
    const weekend = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];    
    
    const date = "2016"+ "-" + a + "-" + b;
    
    const today = new Date(date).getDay();
    const result = weekend[today];
    
    return result;
}