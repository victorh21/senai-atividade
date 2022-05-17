a1 = Math.floor(Math.random() * 40)
b1 = Math.floor(Math.random() * 40)
matriz1 = [a1, b1]

a2 = Math.floor(Math.random() * 40)
b2 = Math.floor(Math.random() * 40)
matriz2 = [b2, b2]

matrizP = [matriz1, matriz2]
console.log(matrizP);

determinante1 = matrizP[1][1] * matrizP[0][0]
determinante2 = matrizP[1][0] * matrizP[0][1]
determinante = determinante1 - determinante2
console.log(determinante);