// const answer = prompt(question);

const p_start = prompt('Enter the start:');
const p_step = prompt('Enter the step:');
const p_end = prompt('Enter the end:');


// Parse values into integers

let start = parseInt(p_start, 10);
const step = parseInt(p_step, 10);
const end = parseInt(p_end, 10);


// Initialize array and sum functions

const my_array = new Array();
const array_sum = 0;

// 'If' statement

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
}
document.write("The generated array is: " + my_array)