export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "tom" && password === "hanks") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
