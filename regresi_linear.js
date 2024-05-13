import * as tf from '@tensorflow/tfjs';
import papa from 'papaparse';
import fs from "fs";

const fileXy = fs.readFileSync('./data/xy.csv', 'utf8');
const X = [];
const Y = [];

papa.parse(fileXy, {
    step: (row, parser) => {
        console.log(row);
        if(row.data[0] !== 'Header') {
            X.push(parseFloat(row.data[1]));
            Y.push(parseFloat(row.data[2]));
        }
    },
    complete: processs
});

function processs() {
    
    const persent = 70/100;
    
    let X_train = [];
    let Y_train = [];
    let X_test = [];
    let Y_test = [];
    
    X_train = X.splice(0, (X.length * persent));
    Y_train = Y.splice(0, (Y.length * persent));
    
    X_test = X;
    Y_test = Y;
    //konversi ke tensor
    const trainTensor = {
        x: tf.tensor2d(X_train, [X_train.length, 1]),
        y: tf.tensor2d(Y_train, [Y_train.length, 1]),
    }
    
    const testTensor = {
        x: tf.tensor2d(X_test, [X_test.length, 1]),
        y: tf.tensor2d(Y_test, [Y_test.length, 1]),
    }
    
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1], units: 1}));
    model.compile({optimizer: "sgd", loss: "meanAbsoluteError"});
    
    async function train() {
        const hasil = await model.fit(
            trainTensor.x,
            trainTensor.y,
            {
                epochs: 78 //proses training
            }
        );
        
        //evaluation 
        model.evaluate(testTensor.x, testTensor.y).print();
    }
    
    train().then(() => {
        model.predict(tf.tensor2d([
            [20],
            [45],
            [19]
        ])).print(true);
    });
}