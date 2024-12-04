function criarUsuario(nome, telefone, email, nascimento) {
    return {
        nome: nome,
        telefone: telefone,
        email: email,
        nascimento: nascimento
    };
}

function cadastrar() {
    
    let nome = document.getElementById('id_nome').value;
    let telefone = document.getElementById('id_telefone').value;
    let email = document.getElementById('id_email').value;
    let nascimento = document.getElementById('id_nascimento').value;
    let usuario = criarUsuario(nome, telefone, email, nascimento);
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso!');
}

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    cadastrar();
});