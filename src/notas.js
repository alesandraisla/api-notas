// // Média para um array

// const obj = {
//     name: "Joabe",
//     email: "joabe@email.com",
//     notas: [1, 1, 1, 1, 1],
// };

// let acumulador = 0;

// for (let i = 0; i <= obj.notas.length - 1; i++) {
//     acumulador = acumulador + obj.notas[i]
// }

// let mediaAluno = acumulador / obj.notas.length;
// console.log("======= Média de um array")
// console.log(mediaAluno);

// // Média para objetos

// const obj2 = {
//     name: "Joabe",
//     email: "joabe@email.com",
//     notas1: 1,
//     notas2: 1,
//     notas3: 1,
//     notas4: 1,
//     notas5: 1,
//     notas6: 1,
//     notas7: 1,
//     notas8: 1,
// };
// const ArrayObj2 = Object.entries(obj2);
// const notasArray = ArrayObj2.filter(([key, value]) => key.includes("nota"));
// const soNotas = notasArray.map(([key, value]) => {
//     return value;
// });
// let acc = 0;
// const somaNotas = soNotas.map((item) => {
//     return (acc = acc + item);
// });

// const media = acc / soNotas.length;

// console.log("====== transformando objeto em array");
// console.log(ArrayObj2);
// console.log("====== filtrando somente as notas");
// console.log(notasArray);
// console.log("====== pegando todas as notas");
// console.log(soNotas);
// console.log("====== MEDIA");
// console.log(media);