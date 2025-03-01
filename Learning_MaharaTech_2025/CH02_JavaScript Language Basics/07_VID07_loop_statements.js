<!doctype html>
<html>
    <head>
        <title>Untitled Document</title>
    </head>
    <body>
        <script>
            for (var i = 5; i < 10; i++) {
                document.write("the value of i is " + i + "<br>");
            }
            document.write("<hr>");

            i = 5;
            while (i < 10) {
                document.write("the value of i is " + i + "<br>");
                i++;
            }
            do {
                var response = prompt("Enter your name:", "");
            } while (!response);
        </script>
    </body>
</html>
