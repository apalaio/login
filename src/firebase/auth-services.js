import fire from "./config";

export const loginUser = async (email, password) => {
  await fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
    });
};

export const logoutUser = () => {
  fire.auth().signOut();
};

export const registerUser = async (email, password) => {
  const isRegistered = await fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      console.log("registeruser-error: ", error.message);
      return error.message;
    });
  return isRegistered;
};

// const changePassword = () => {
//   return;
// };

// const deleteUser = () => {
//   return;
// };
