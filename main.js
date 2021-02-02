console.log("break");
for (let i=0; i<10; i+=1){
    if(i==4){        
        break;
    }
    console.log(i);
}

console.log("continue");
for (let i=0; i<10; i+=1){
    if(i==5){        
        continue;
    }
    console.log(i);
}

// Array
console.log("array break");
let lista = ["Miguel", "Diego", "Julian", "Emanuel"];
let lista_2 = ["Andrea", "Dayana", lista, "AnaMaría"];

for(let i=0; i<lista.length; i++) {
    if (lista[i]=="Julian"){
        break;
    }
    console.log(lista[i]);
}
console.log("array continue");
for(let i=0; i<lista.length; i++) {
    if (lista[i]=="Julian"){
        continue;
    }
    console.log(lista[i]);
}

console.log("array continue");

for (let i=0; i<lista_2.length; i++){
    if (typeof(lista_2[i]) === "object"){
        continue;      
    }
    console.log(lista_2[i]);
}
