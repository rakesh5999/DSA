var createCounter = function(init) {
    let current = init;
    return {
        increment (){
        return ++current
    },
    reset (){
       current = init;
       return current 
    },
    decrement (){
      return  --current
    }
}
};

const counter = createCounter(5)
 counter.increment(); 
counter.reset()
counter.decrement();
