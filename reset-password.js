
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
const auth = getAuth();


document.getElementById("reset-button").addEventListener("click", function() {
  // Seu código para redefinir a senha aqui
  console.log('clicado');
  alert("Botão de redefinição de senha foi clicado!");
});
