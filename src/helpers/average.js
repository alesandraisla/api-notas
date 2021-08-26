
const average = async (saveStudent) => {
    const ObjectAluno = Object.entries(saveStudent);
    const notasArray = ObjectAluno.filter(([key, value]) => key.includes("nota"));
    const soNotas = notasArray.map(([key, value]) => {
        return value;
    });
    const media = await soNotas.reduce((acc, curr, index, array) => {
        if (index !== array.length - 1) {
        acc += curr;
        return acc;
    }
    acc += curr;
    return acc / array.length;
    }, 0);
    return media;
};


export default average;