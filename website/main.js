// const answer = prompt(question);

const p_start = prompt('Enter the start:');
const p_step = prompt('Enter the step:');
const p_end = prompt('Enter the end:');


// Parse values into integers

let start = parseInt(p_start, 10);
const step = parseInt(p_step, 10);
const end = parseInt(p_end, 10);


// Initialize array, sum, and binary objects that will be filled in through if loop

const my_array = new Array();
var sumarray = 0;
const bin_array = new Array();

// 'If' statement. 

if (isNaN(start) || isNaN(step) || isNaN(end) || step == 0 ||
step > 0 && start > end || step < 0 && start < end){
    document.write('Invalid integer input, please reload and try again.');
} else {
    if (step > 0) {
        for (start; start <= end; start += step) {
            my_array.push(start);
        }
    }
    else {
        for (start; start >= end; start += step) {
            my_array.push(start)
        }
    }
    for (var i = 0; i < my_array.length; i++) {
        sumarray += my_array[i]
    }
    for (var i = 0; i < my_array.length; i++) {
        bin_array.push(my_array[i].toString(2))
    }


document.write("The generated array is: " + my_array)
document.write("<br/> The sum is: " + sumarray)
document.write("</br> The binary of absolute element values are: " + bin_array)
}