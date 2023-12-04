/*
 * Filename: ComplexCodeExample.js
 * 
 * Description: This complex code example demonstrates the implementation of a library that provides extensive mathematical operations, including complex numbers, matrix operations, and vector calculations.
 */

// Complex number implementation
class Complex {
    constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
    }
  
    add(complex) {
      return new Complex(
        this.real + complex.real,
        this.imaginary + complex.imaginary
      );
    }
  
    subtract(complex) {
      return new Complex(
        this.real - complex.real,
        this.imaginary - complex.imaginary
      );
    }
  
    multiply(complex) {
      const real = this.real * complex.real - this.imaginary * complex.imaginary;
      const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
      return new Complex(real, imaginary);
    }
  
    divide(complex) {
      const denominator = complex.real * complex.real + complex.imaginary * complex.imaginary;
      const real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
      const imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
      return new Complex(real, imaginary);
    }
  
    conjugate() {
      return new Complex(this.real, -this.imaginary);
    }
  
    magnitude() {
      return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
  
    toString() {
      if (this.imaginary >= 0) {
        return `${this.real} + ${this.imaginary}i`;
      }
      return `${this.real} - ${Math.abs(this.imaginary)}i`;
    }
}

// Matrix operations
class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        for (let i = 0; i < rows; i++) {
          this.data[i] = [];
          for (let j = 0; j < cols; j++) {
            this.data[i][j] = 0;
          }
        }
    }
  
    static createFromArray(arr) {
        const matrix = new Matrix(arr.length, arr[0].length);
        for (let i = 0; i < matrix.rows; i++) {
          for (let j = 0; j < matrix.cols; j++) {
            matrix.data[i][j] = arr[i][j];
          }
        }
        return matrix;
    }
  
    get(row, col) {
        return this.data[row][col];
    }
  
    set(row, col, value) {
        this.data[row][col] = value;
    }
  
    add(matrix) {
        if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
            throw new Error('Matrix dimensions must match for addition operation');
        }
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] + matrix.data[i][j];
            }
        }
        return result;
    }
  
    subtract(matrix) {
        if (this.rows !== matrix.rows || this.cols !== matrix.cols) {
            throw new Error('Matrix dimensions must match for subtraction operation');
        }
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = this.data[i][j] - matrix.data[i][j];
            }
        }
        return result;
    }
  
    multiply(matrix) {
        if (this.cols !== matrix.rows) {
            throw new Error('Matrix dimensions mismatch for multiplication operation');
        }
        const result = new Matrix(this.rows, matrix.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * matrix.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }
  
    transpose() {
        const result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }
  
    static identity(size) {
        const matrix = new Matrix(size, size);
        for (let i = 0; i < size; i++) {
            matrix.data[i][i] = 1;
        }
        return matrix;
    }
  
    toString() {
        let str = '';
        for (let i = 0; i < this.rows; i++) {
            str += '[ ';
            for (let j = 0; j < this.cols; j++) {
                str += `${this.data[i][j]} `;
            }
            str += ']\n';
        }
        return str;
    }
}

// Vector operations
class Vector {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.data = [];
        for (let i = 0; i < dimensions; i++) {
            this.data[i] = 0;
        }
    }
  
    static createFromArray(arr) {
        const vector = new Vector(arr.length);
        for (let i = 0; i < vector.dimensions; i++) {
          vector.data[i] = arr[i];
        }
        return vector;
    }
  
    get(index) {
        return this.data[index];
    }
  
    set(index, value) {
        this.data[index] = value;
    }
  
    add(vector) {
        if (this.dimensions !== vector.dimensions) {
            throw new Error('Vector dimensions must match for addition operation');
        }
        const result = new Vector(this.dimensions);
        for (let i = 0; i < this.dimensions; i++) {
            result.data[i] = this.data[i] + vector.data[i];
        }
        return result;
    }
  
    subtract(vector) {
        if (this.dimensions !== vector.dimensions) {
            throw new Error('Vector dimensions must match for subtraction operation');
        }
        const result = new Vector(this.dimensions);
        for (let i = 0; i < this.dimensions; i++) {
            result.data[i] = this.data[i] - vector.data[i];
        }
        return result;
    }
  
    multiply(vector) {
        if (this.dimensions !== vector.dimensions) {
            throw new Error('Vector dimensions must match for element-wise multiplication operation');
        }
        const result = new Vector(this.dimensions);
        for (let i = 0; i < this.dimensions; i++) {
            result.data[i] = this.data[i] * vector.data[i];
        }
        return result;
    }
  
    dot(vector) {
        if (this.dimensions !== vector.dimensions) {
            throw new Error('Vector dimensions must match for dot product operation');
        }
        let sum = 0;
        for (let i = 0; i < this.dimensions; i++) {
            sum += this.data[i] * vector.data[i];
        }
        return sum;
    }
  
    magnitude() {
        let sumOfSquares = 0;
        for (let i = 0; i < this.dimensions; i++) {
            sumOfSquares += this.data[i] * this.data[i];
        }
        return Math.sqrt(sumOfSquares);
    }
  
    toString() {
        return `[ ${this.data.join(', ')} ]`;
    }
}

// Testing the complex numbers, matrix, and vector operations

// Complex numbers
const c1 = new Complex(3, 2);
const c2 = new Complex(-1, 4);
console.log("c1: ", c1.toString());
console.log("c2: ", c2.toString());

console.log("c1 + c2: ", c1.add(c2).toString());
console.log("c1 - c2: ", c1.subtract(c2).toString());
console.log("c1 * c2: ", c1.multiply(c2).toString());
console.log("c1 / c2: ", c1.divide(c2).toString());
console.log("Conjugate of c1: ", c1.conjugate().toString());

// Matrices
const m1 = Matrix.createFromArray([[1, 2, 3], [4, 5, 6]]);
const m2 = Matrix.createFromArray([[7, 8], [9, 10], [11, 12]]);
console.log("\nm1: \n", m1.toString());
console.log("m2: \n", m2.toString());

console.log("m1 + m2: \n", m1.add(m2).toString());
console.log("m1 - m2: \n", m1.subtract(m2).toString());
console.log("m1 * m2: \n", m1.multiply(m2).toString());
console.log("Transposed m1: \n", m1.transpose().toString());
console.log("Identity matrix of size 3: \n", Matrix.identity(3).toString());

// Vectors
const v1 = Vector.createFromArray([1, 2, 3]);
const v2 = Vector.createFromArray([4, 5, 6]);
console.log("\nv1: ", v1.toString());
console.log("v2: ", v2.toString());

console.log("v1 + v2: ", v1.add(v2).toString());
console.log("v1 - v2: ", v1.subtract(v2).toString());
console.log("Element-wise multiplication of v1 and v2: ", v1.multiply(v2).toString());
console.log("Dot product of v1 and v2: ", v1.dot(v2));
console.log("Magnitude of v1: ", v1.magnitude());

// Additional complex code...

// ... (More functionality, operations, or examples can be added here)

// End of complex code example.