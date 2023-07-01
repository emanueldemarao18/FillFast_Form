// Configure a inicialização do Firebase com as suas chaves de configuração
var config = {
  apiKey: "AIzaSyA1elJaTMHC0I1_IyFlt4x31_lu-AoB_Vc",
  authDomain: "fillfast-385014.firebaseapp.com",
  projectId: "fillfast-385014"
};
firebase.initializeApp(config);

// Reference to the Firebase authentication
var auth = firebase.auth();

// Form submission event listener
document.getElementById("reset-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get user inputs
  var oldPassword = document.getElementById("old-password").value;
  var newPassword = document.getElementById("new-password").value;
  
  // Reauthenticate user with old password
  var user = auth.currentUser;
  var credential = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
  
  user.reauthenticateWithCredential(credential)
    .then(function() {
      // Update password
      user.updatePassword(newPassword)
        .then(function() {
          document.getElementById("message").innerHTML = "Senha atualizada com sucesso!";
        })
        .catch(function(error) {
          document.getElementById("message").innerHTML = "Erro ao atualizar a senha: " + error.message;
        });
    })
    .catch(function(error) {
      document.getElementById("message").innerHTML = "Erro de autenticação: " + error.message;
    });
});
