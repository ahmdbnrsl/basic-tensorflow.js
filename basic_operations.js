import * as tf from '@tensorflow/tfjs';

const a = tf.tensor1d([1, 2, 3, 4]);

a.print(true)
//CLONE
const b = tf.clone(a);
b.print(true);

//ZEROS, ONES, AND fill
tf.zeros([2/*group*/, 4/*row*/, 4/*column*/]).print(true);
tf.ones([2/*group*/, 4/*row*/, 4/*column*/]).print(true);
tf.fill([2/*group*/, 4/*row*/, 4/*column*/], 8/*angka yang mau di fill*/).print(true);

//EYE, DIAG, LINSSPACE, Range and ZEROSLIKE
tf.eye(5/*membuat angka satu secara diagonal*/).print(true);
tf.diag(a).print(true); //membuat data tensor menjadi diagonal
tf.linspace(0/*angka awal*/, 10/*angka akhir*/, 2/*pembagi*/).print(true);
tf.range(0, 70, 5/*selisih*/).print(true);

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
c.print(true);
tf.zerosLike(c).print(true);//reset all tensor value to zero


//================[MATH OPERATIONS]==================//
const A = tf.tensor1d([1, 2, 3, 4, 5]);
const B = tf.tensor1d([6, 7, 8, 9, 10]);
const C = tf.tensor([10]);
//ADD OR PENJUMLAHAN
tf.add(A, B).print(true);
const pxx = A.add(B);
pxx.print(true);
//penjumlahan untuk tensor yang hanya memiliki satu scalar
const pyy = A.add(C);
pyy.print(true); //maka single scalar tersebut akan otomatis di tambahkan ke semua scalar

//SUB OR PENGURANGAN
tf.sub(A, B).print(true);
const pxx2 = A.sub(B);
pxx2.print(true);
//PENGURANGAN untuk tensor yang hanya memiliki satu scalar
const pyy2 = A.sub(C);
pyy2.print(true); //maka single scalar tersebut akan otomatis di kurang kan ke semua scalar