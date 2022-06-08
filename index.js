// setTimeout(()=>{
//     console.log('Shuvo love programming');
// },2000);
//
// console.log(__dirname);
// console.log(__filename);
// let number =(a,b)=> a+b;
// console.log(number(5,10));

let javascript = {
    name:'JavaScript',
    libraries:["React","Angular","Vue"],
    printLibraries: function (){
        // let self = this;
        // this.libraries.forEach(function (a){
        //    console.log(`${self.name} love ${a}`);
        // });
        this.libraries.forEach((a)=>{
            console.log(`${this.name} love ${a}`);
        });
    },
};
javascript.printLibraries();