const nummero1 =1;
const nummero2 =2;

console.log("A soma de " + nummero1 + " e " + nummero2 + " é " + (nummero1 + nummero2));

console.log(`A soma de ${nummero1} e ${nummero2} é: ${nummero1+nummero2}`);

console.log("\n");

//------------------------------------------

const array = [1, "Fodase", {a:3}, [4,5]];

console.log(array[1]);

console.log("\n");

//------------------------------------------

const palavra = 'pitchuca'; 
console.log(palavra.length);

console.log(palavra.replace("tchuca","tchuquinha"));


const arraynew = [1 ,2 , 3];
console.log(arraynew.length);
console.log(arraynew.join("_"));

console.log("\n");

//----------------------------------------

/*Arrow Function*/

const oi = () => {
    console.log("Oi Luiz!")
}

oi();

const homelander = (_)=>{
    console.log(_)
}

homelander("I'm the Homelander, and I can do Whatever the Fuck I want!")

console.log("\n");
//------------------------------------

const registros = [
    {nome: 'Luiz', idade:18},
    {nome: 'Hang', idade:12},
    {nome: 'Cauã', idade:10},
    {nome: 'Felipe', idade:82},
];

const idades = registros.map((registro) => registro.idade);
console.log(idades);


const nomes = registros.map((registro) => registro.nome);
console.log(nomes);

console.log("\n");
 //-----------------------------------------------

 function execute(){
     console.log("Executou...")
 }
 setTimeout(execute, 2000) /* Função que coloca um Timer em milissegundos*/