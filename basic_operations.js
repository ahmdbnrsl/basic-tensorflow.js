import * as tf from '@tensorflow/tfjs';

const a = tf.tensor1d([1, 2, 3, 4]);

//a.print(true)
//CLONE
const b = tf.clone(a);
//b.print(true);

//ZEROS, ONES, AND fill
tf.zeros([2/*group*/, 4/*row*/, 4/*column*/])//.print(true);
tf.ones([2/*group*/, 4/*row*/, 4/*column*/])//.print(true);
tf.fill([2/*group*/, 4/*row*/, 4/*column*/], 8/*angka yang mau di fill*/)//.print(true);

//EYE, DIAG, LINSSPACE, Range and ZEROSLIKE
tf.eye(5/*membuat angka satu secara diagonal*/)//.print(true);
tf.diag(a)//.print(true); //membuat data tensor menjadi diagonal
tf.linspace(0/*angka awal*/, 10/*angka akhir*/, 2/*pembagi*/)//.print(true);
tf.range(0, 70, 5/*selisih*/)//.print(true);

const c = tf.tensor3d([
    [
        [1,2],
        [3,4]
    ],
    [
        [5,6],
        [7,8]
    ]
]);
c//.print(true);
tf.zerosLike(c)//.print(true);//reset all tensor value to zero


//================[MATH OPERATIONS]==================//
const A = tf.tensor1d([1, 2, 3, 4, 5]);
const B = tf.tensor1d([6, 7, 8, 9, 10]);
const C = tf.tensor([10]);
//ADD OR PENJUMLAHAN
tf.add(A, B)//.print(true);
const pxx = A.add(B);
//pxx.print(true);
//penjumlahan untuk tensor yang hanya memiliki satu scalar
const pyy = A.add(C);
C.add(A)//.print(true);
//pyy.print(true); //maka single scalar tersebut akan otomatis di tambahkan ke semua scalar

//SUB OR PENGURANGAN
tf.sub(A, B)//.print(true);
const pxx2 = A.sub(B);
C.sub(B)//.print(true);
//pxx2.print(true);
//PENGURANGAN untuk tensor yang hanya memiliki satu scalar
const pyy2 = A.sub(C);
//pyy2.print(true); //maka single scalar tersebut akan otomatis di kurang kan ke semua scalar

//MUL ATAU PERKALIAN 
tf.mul(A, B)//.print(true);
tf.mul(C, C)//.print(true);
const xyy = C.mul(B);
//xyy.print(true);

//DIV ATAU PEMBAGIAN 
tf.div(A, B)//.print(true);
tf.div(C, C)//.print(true);
const yyx = C.div(B);
//yyx.print(true);

//MOD ATAU MODULUS
//MODULUS ADALAH SISA DARI PEMBAGIAN
tf.mod(B, A)//.print(true);
tf.mod(C, A)//.print(true);
tf.mod(A, B)//.print(true);//hasil nya tetap sama
const ffg = B.mod(A);
//ffg.print(true);

//FloorDiv atau kebalikan dari modulus yaitu hasil baginya
tf.floorDiv(B, A)//.print(true);
tf.floorDiv(C, A)//.print(true);
tf.floorDiv(A, B)//.print(true);//hasil nya tetap sama
const zzc = B.floorDiv(A);
//zzc.print(true);

//Maximum atau perbandingan nilai secalar diambil yang lebih besar
tf.maximum(A, B)//.print(true);// [6, 7, 8, 9, 10]
tf.maximum(A, C)//.print(true); //[10, 10, 10, 10, 10]
tf.maximum(C, C)//.print(true);

//Minimum kebalikan dari maximum
tf.minimum(A, B)//.print(true);// [1, 2, 3, 4, 5]
tf.minimum(A, C)//.print(true); //[1, 2, 3, 4, 5]
tf.minimum(C, C)//.print(true);

//===================[SLICING OPERATION]=====================//
const D = tf.tensor1d([1, 2, 3, 4, 5]);
const E = tf.tensor1d([6, 7, 8, 9, 10]);
const F = tf.tensor([10]);
const G = tf.tensor3d([
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
])
//GATHER untuk mengambil nilai scalar atau tensor berdasarkan index
tf.gather(D, [1, 3]/*INDEX*/).print(true); //[2, 4]
tf.gather(G, [1]).print(true); // index ke 1 dari tensor3d
/****
 * [
 * [5,6],
 * [7, 8]
 * ]
 */

//CONCAT atau penggabungan beberapa tensor
tf.concat([D, E, F]).print(true);
tf.concat3d([G, G]).print(true);
G.concat(G).print(true);

//REVERSE membalikan nilai pada tensor
tf.reverse(G).print(true);
G.reverse().print(true);

//TRANSPOSE atau membalikan baris menjadi kolom
tf.transpose(G).print(true);

//EQUAL atau perbandingan antara tensor satu dengan lainya apakah sama atau tidak jika sama maka akan mengembalikan nilai 'true' jika tidak maka 'false'
tf.equal(D, E).print(true); //[false, false, false, false, false]
tf.equal(E, F).print(true); //[false, false, false, false, true]

//GREATER atau pembanding untuk ukuran yang lebih besar maka mengembalikan nilai 'true' jika tidak maka 'false'
/**apakah nilai pada tensor d lebih besar dari nilai pada tensor e**/
tf.greater(D, E).print(true); //[false, false, false, false, false]
tf.greater(F, E).print(true); //[true, true, true, true, false]