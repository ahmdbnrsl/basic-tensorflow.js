import * as tf from '@tensorflow/tfjs';


//SCALAR
tf.scalar(3.14).print();

//TENSOR 1 DIMENSI
const tensor1D = tf.tensor1d([10, 34, 89], "int32");
tensor1D.print();

//TENSOR 2 DIMENSI
const tensor2D = tf.tensor2d([[1, 2], [3, 4]]);
tf.tensor2d([1, 2, 3, 4], [2/*row*/, 2/*column*/]).print();
tensor2D.print();
//result like below
const resultTensor2D = [
    [1, 2],
    [3, 4]
];

//TENSOR 3 DIMENSION 
const tensor3D = tf.tensor3d([[[1, 2], [3, 4]], [[5,6], [7,8]]])
tensor3D.print();
tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8], [2/*Group*/, 2/*row*/, 2/*column*/]).print();
//result like below
const resultTensor3D = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]

//TENSOR 4 DIMENSIONS
tf.tensor4d([
    [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ],
    [
        [
            [9, 19],
            [11, 12]
        ],
        [
            [13, 14],
            [15, 16]
        ]
    ]
]).print();
tf.tensor4d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2]).print();

//and more sampai 6 DIMENSIONS
//atau bisa langsung pake shape tanpa menuliskan format, contoh:
tf.tensor([1, 2]).print(); //1 DIMENSIONS,
tf.tensor([1, 2], [2, 1]).print(); //2 DIMENSIONS
//And more... sampai 6 dimensi


