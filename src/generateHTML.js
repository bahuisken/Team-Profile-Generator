// Put it all together

function generateHTML(data) {
    //call manager function
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">    
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/40d36cdded.js" crossorigin="anonymous"></script>
    <title>My Software Engineering Team</title>
</head>

<body>
    <header class="jumbotron bg-danger text-white text-center">
        <h1 class="display-3">My Team</h1>
    </header>
    <div class="container">
        <div class="row">
            <!-- Insert Employee Cards here -->
    ${data}
    </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>

</html>
    `;
    //call intern function
    //call engineer function
}


module.exports = generateHTML;