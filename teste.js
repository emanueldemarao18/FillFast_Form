

import { initializeApp } from 'firebase/app';
import { getAuth, updatePassword, onAuthStateChanged } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// Resto do seu código...

const firebaseConfig = {

  apiKey: "AIzaSyA1elJaTMHC0I1_IyFlt4x31_lu-AoB_Vc",
  authDomain: "fillfast-385014.firebaseapp.com",
  projectId: "fillfast-385014",
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reset-button").addEventListener("click", function(event) {
    event.preventDefault();
  
    
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (newPassword !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }
  

    // Executar ação desejada ao clicar no botão
    alert("Botão de redefinição de senha foi clicado!");
    console.log('clicado');
  });

  
// Verifique se o usuário está autenticado e redirecione-o para a página de sucesso
onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "reset-success.html";
    }
  });
  