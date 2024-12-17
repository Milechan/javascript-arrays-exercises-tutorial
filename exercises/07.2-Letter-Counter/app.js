let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
par.toLowerCase()
    for (let index = 0; index < par.length; index++) {
        let letra = par[index]
       if (counts[letra] != undefined) {
           
           counts[letra]=counts[letra] +1;
       }else{
           counts[letra]=1;
       }
     }   
   
console.log(counts);

 