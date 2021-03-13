// Put it all together

const generateTeam = fullTeam => {
    const generateManager = Manager => {
        return `<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${Manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${Manager.getId()}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${Manager.getEmail()}?subject=So, you're the Manager?">${Manager.getEmail()}</a></li>
            <li class="list-group-item"><strong>Office Number:</strong> ${Manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>`
    };

    const generateEngineer = Engineer => {
        return `<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${Engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${Engineer.getId()}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${Engineer.getEmail()}?subject=So, you're an Engineer?">${Engineer.getEmail()}</a></li>
            <li class="list-group-item"><strong>GitHub:</strong> <a href="https://github.com/${Engineer.getGitHub()}" target="_blank">${Engineer.getGitHub()}</a></li>
        </ul>
        </div>
        </div>`
    };

    const generateIntern = Intern => {
        return `<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${Intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${Intern.getId()}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${Intern.getEmail()}?subject=So, you're an Engineer?">${Intern.getEmail()}</a></li>
            <li class="list-group-item"><strong>School:</strong> ${Intern.getSchool()}</li>
        </ul>
        </div>
        </div>`
    };
    const htmlArray = [];

    htmlArray.push(fullTeam
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );

    htmlArray.push(fullTeam
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
    );
    htmlArray.push(fullTeam
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
    );

    return htmlArray.join('');
}

module.exports = fullTeam => {
    return `<!DOCTYPE html>
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
    ${generateTeam(fullTeam)}
    </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>

</html>`
};