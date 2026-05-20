function findminimumvalue(m, n) {
    return m < n ? m : n;

    console.log(findminimumvalue(5, 10)); // Output: 5
    console.log(findminimumvalue(-3, 2)); // Output: -3
    console.log(findminimumvalue(0, 0)); // Output: 0
    }
    
    // Write a javascript code to reverse your name
    let name = "Aiyedun Miracle";

    let reversedName = name.split("").reverse().join("");

    console.log(reversedName);

    // write a javascript code to change the value of an array
    let names = ["Samuel", "Silas", "John"];

    // Change "Samuel" to "Jude"
    names[1] = "Jude";

    console.log(names);

    // write a javascript code to find the factor of a number using the concept of recursion
    function factorial(n) {
        // Base case
        if (n === 0 || n === 1) {
            return 1;
        }

        // Recursive case
        return n * factorial(n - 1);
        }

        // Example usage
        console.log(factorial(5)); // 120
    
    