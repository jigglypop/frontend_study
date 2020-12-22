const identify = <T extends number | string>(p1:T):T =>{
    return p1;
}
console.log(identify(1));
console.log(identify('a'));
