console.log("Hello, first command here");

// Even though we didn't had any delay in the timeout() [i.e. 0 sec delay], it still got offloaded

// Asynchronous code will run, once all the synchronous code gets executed. 
setTimeout(()=>{
    console.log("This is second command, got offloaded!!!");
}, 0);




console.log("Hello, this is the third command");