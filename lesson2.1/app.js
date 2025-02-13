setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("hey");
        setTimeout(() => {
            console.log("Nameste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => 
                console.log("Bonjour"), 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);