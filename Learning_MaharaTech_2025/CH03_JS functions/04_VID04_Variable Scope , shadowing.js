<!doctype html>
<html lang="eng">
    <head>
        <meta charset="UTF-8" />
        <title>Untitled Document</title>
    </head>
    <body>
        <script>
            var a = 10; // Declare a global variable 'a' with value 10
            function incVar(x) {
                // Define a function that takes 'x' as a parameter
                var z = 5; // Declare a local variable 'z' with value 5
                var sum = z + a; // Calculate sum using global variable 'a' (NOT 'x')
                return sum; // Return the sum
            }
            var newx = incVar(a); // Call the function with 'a' (but 'x' is ignored inside)
            console.log(newx); // Print the result (output: 15)
        </script>
    </body>
</html>