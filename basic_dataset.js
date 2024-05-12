import * as tf from '@tensorflow/tfjs';
import papa from 'papaparse';
import fs from "fs";

const TrainData = fs.readFileSync("./data/train-data.csv", "utf8");
const TrainTarget = fs.readFileSync("./data/train-target.csv", "utf8");
const TestData = fs.readFileSync("./data/test-data.csv", "utf8");
const TestTarget = fs.readFileSync("./data/test-target.csv", "utf8");

const loadData = (file) => {
    papa.parse(file, {
        header: true,
        complete: (results) => {
            const Tensor = tf.tensor(results["data"]);
            Tensor.print();
        }
    });
};

loadData(TrainData);
loadData(TrainTarget);
loadData(TestData);
loadData(TestTarget);