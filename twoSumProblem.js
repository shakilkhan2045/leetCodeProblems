let  target = 19; // Define the targeted number

const array1 = [12, 10, 7, 9]; // Define the array of integers

    for (i = 0; i < array1.length; i++) { // Iterate through the array
    for (j = array1.length - 1; j > 0; j--) { // Iterate through the array in reverse order
        
       function check() { // Define a function to check for the target sum
            if (array1[i] + array1[j] == target) { // Check if the sum of current elements equals the target
                console.log("Founded at position "); // If found, log the position
                console.log(i, "&", j); // Log the indices of the elements
            }
        }

        check(); // Call the check function
    }
}
//by_shakil_khan
