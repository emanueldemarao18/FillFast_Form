import { initializeApp } from 'firebase/app';
import { getAuth, updatePassword, onAuthStateChanged } from 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Resto do seu código...






const firebaseConfig = {

  apiKey: "AIzaSyA1elJaTMHC0I1_IyFlt4x31_lu-AoB_Vc",
  authDomain: "fillfast-385014.firebaseapp.com",
  projectId: "fillfast-385014",
};

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
