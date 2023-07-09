import { initializeApp } from 'firebase/app';
import { getAuth, updatePassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  // Coloque aqui as suas configurações do Firebase
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Adicione o evento de envio do formulário
document.getElementById("reset-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (newPassword !== confirmPassword) {
    document.getElementById("message").textContent = "As senhas não coincidem.";
    return;
  }

  const user = auth.currentUser;

  updatePassword(user, newPassword)
    .then(() => {
      document.getElementById("message").textContent = "Senha redefinida com sucesso!";
    })
    .catch((error) => {
      document.getElementById("message").textContent = "Erro ao redefinir a senha: " + error.message;
    });
});

// Verifique se o usuário está autenticado e redirecione-o para a página de sucesso
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "reset-success.html";
  }
});
