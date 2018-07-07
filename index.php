<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sustek - Login</title>
    <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAgAAAAcAAAATAAAAFQAAABUAAAASAAAABgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAIAAAAxAAAASgAAAEgAAABhAAAAsQAAALQAAAC0AAAAsAAAAFcAAABIAAAASgAAACoAAAACAAAAAAAAAAAAAAAEAAAAbgAAAKUAAABNAAAASwAAAE0AAABNAAAATQAAAE0AAABLAAAATwAAALQAAABWAAAAAgAAAAAAAAAAAAAAAgAAAGMAAACVAAAABwAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAoAAACtAAAASAAAAAEAAAAAAAAAAAAAAAIAAABjAAAAlgAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAArgAAAEgAAAABAAAAAAAAAAAAAAACAAAAYwAAAJYAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAK4AAABIAAAAAQAAAAAAAAAAAAAAAgAAAGMAAACXAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAACvAAAASAAAAAEAAAAAAAAAAAAAAAIAAABjAAAAmAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAsAAAAEgAAAABAAAAAAAAAAAAAAAGAAAAZgAAAJkAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAALAAAABMAAAABQAAAAAAAAADAAAAaAAAAKIAAACRAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAACkAAAAmwAAAFUAAAACAAAAAgAAADcAAADJAAAAuwAAADAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAA4AAAAxQAAAL0AAAAtAAAAAQAAAAAAAAADAAAAGQAAAIcAAADfAAAAawAAABIAAAACAAAAAgAAABQAAAB1AAAA3gAAAHgAAAAVAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAKAAAARgAAAM8AAAC0AAAAMwAAADgAAAC9AAAA1QAAADsAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAcAAAAkAAAANcAAADdAAAApwAAAJoAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAoAAAA0AAAALwAAAD0AAAB8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAGAAAACQAAAAEAAAAAAAAAAAAAAAAAAAAAgAEAAIABAACAAQAAgAEAAIfhAACH4QAAh+EAAIfhAAAH4AAAA8AAAAGAAAAAAAAAwAMAAOAHAAD4DwAA/A8AAA=="
          rel="icon" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body background="others/background-2.jpg">
<div class="login-page">
    <div class="form">
        <h5 class="my-0 mr-md-auto font-weight-normal"><a href="#"><img src="others/house.png" height="50px"></a></h5>

        <form class="register-form">
            <input id="regNome"  type="text" placeholder="Nome"/>
            <input id="regPass" type="password" placeholder="senha"/>
            <input id="regEmail" type="text" placeholder="email"/>
            <input id="regCpf" type="text" placeholder="CPF"/>
            <input id="regRg" type="text" placeholder="RG"/>
            <input id="regTel" type="text" placeholder="Telefone"/>
            <button id="registrar" >Criar conta</button>
            <p class="message">Já é registrado? <a href="#">Entrar</a></p>
        </form>
        <form class="login-form">
            <input id="textlogin" type="text" placeholder="usuario"/>
            <input id="textpass"  type="password" placeholder="senha"/>
            <button id = "login" type="button" >Entrar</button>
            <p class="message">Não é registrado? <a href="#">Crie uma conta</a></p>
        </form>
        <hr>
        <button type="button" onclick="location.href = 'pages/home.php';">Entrar sem conta</button>
    </div>

</div>

<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/login.js"></script>
<script src="js/params.js"></script>
<script src="js/registrar.js"></script>
<script src="js/anuncio.js"></script>

</body>
</html>