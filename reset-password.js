import { initializeApp } from 'firebase/app';
import { getAuth, confirmPasswordReset, updatePassword } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyA1elJaTMHC0I1_IyFlt4x31_lu-AoB_Vc",
  authDomain: "fillfast-385014.firebaseapp.com",
  projectId: "fillfast-385014",
};

// Inicialize o Firebase
const app = initializeApp(config);
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

  // Obtém o código de redefinição de senha do parâmetro da URL
  const urlParams = new URLSearchParams(window.location.search);
  const oobCode = urlParams.get("oobCode");

  // Redefine a senha usando o código de redefinição de senha
  confirmPasswordReset(auth, oobCode, newPassword)
    .then(() => {
      document.getElementById("message").textContent = "Senha redefinida com sucesso!";
    })
    .catch((error) => {
      document.getElementById("message").textContent = "Erro ao redefinir a senha: " + error.message;
    });
});
