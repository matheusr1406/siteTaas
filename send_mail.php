<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenha os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Defina o endereço de e-mail para onde o formulário será enviado
    $to = "contato@taassolution.com.br";
    $subject = "Novo contato do site Taassolutions";
    $headers = "From: $email";

    // Mensagem de e-mail
    $email_message = "Nome: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Mensagem: \n$message\n";

    // Enviar o e-mail
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem. Tente novamente mais tarde.";
    }
} else {
    echo "Método de envio inválido.";
}
?>
