<!doctype html>
<html lang="eng">
    <head>
        <meta charset="UTF-8" />
        <title>Untitled Document</title>
    </head>
    <body>
        <script>
            var a = 10; 
            var z = 40;
            function incVar(x) {
                console.log(z)
                var z = 5; 
                var sum = z + a; 
                a++;
                console.log(a);
                return sum; 
            }
            var newx = incVar(a); 
            console.log(z);
            console.log(newx);
        </script>
    </body>
</html>