import * as tf from '@tensorflow/tfjs';

//================[DISPOSE]==================//
function Dispose() {
    let a = tf.fill([100, 100], 0);
    let b = tf.fill([100, 100], 1);
    let c = tf.fill([100, 100], 2);
    let d = tf.fill([100, 100], 3);
    
    tf.dispose(a);
    tf.dispose(b);
    tf.dispose(c);
    tf.dispose(d);
    console.log(tf.memory().numBytes);
}
//================[DISPOSE]==================//
function Tidy() {
    tf.tidy(() => {
        let a = tf.fill([100, 100], 0);
        let b = tf.fill([100, 100], 1);
        let c = tf.fill([100, 100], 2);
        let d = tf.fill([100, 100], 3);
        console.log(tf.memory().numBytes);
    });
    console.log(tf.memory().numBytes);
}

setInterval(loopData2, 1);