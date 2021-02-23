const solution = (n, lost, reserve) => {        
   
    const filterLost = lost.filter((item) => {
        if(!reserve.includes(item)) {
            return item;
        }
    });
    const filterReserve = reserve.filter((item) => {
        if(!lost.includes(item)) {
            return item;
        }
    });    
    
    for(const l of filterReserve) {
        const first = l - 1;
        const last = l + 1;        
        
        if(filterLost.includes(first)) {
            const index = filterLost.indexOf(first);
            filterLost.splice(index, 1);
        }
        else if(filterLost.includes(last)) {
            const index = filterLost.indexOf(last);
            filterLost.splice(index, 1);
        }              
    }
    n = n - filterLost.length;
    
    return n;
 }