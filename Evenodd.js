function oddishorEvenish(number){;

    let a=0;
    let stringnum = String(number);

    for(i=0; i< stringnum.length; i++ ){
        a += parseInt(stringnum[i],10)
    }

    if(a % 2 == 0) {
        alert("Even bir sayı");
    }
    else {
        alert("Odd bir sayı");
    }
}

oddishorEvenish(15)