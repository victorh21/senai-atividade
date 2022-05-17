a1 = Math.floor(Math.random() * 60)
b1 = Math.floor(Math.random() * 60)
c1 = Math.floor(Math.random() * 60)
matriz1 = [a1, b1, c1]
y2 = Math.floor(Math.random() * 60)
x2 = Math.floor(Math.random() * 60)
z2 = Math.floor(Math.random() * 60)
matriz2 = [y2, x2, z2]
x3 = Math.floor(Math.random() * 60)
y3 = Math.floor(Math.random() * 60)
z3 = Math.floor(Math.random() * 60)
matriz3 = [x3, y3, z3]

matrizP = [matriz1, matriz2, matriz3]
console.log(matrizP);


diagonalP1 = matrizP[0][0] *=2
diagonalP2 = matrizP[1][1] *=2
diagonalP3 = matrizP[2][2] *=2

console.log(`principais multiplicados ficam: ${diagonalP1}, ${diagonalP2}, ${diagonalP3}`);