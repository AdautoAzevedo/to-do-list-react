export const userLogin = async (user) => {
    const authURL = "http://localhost:8080/auth/login";
    console.log(user);
      try {
          const response = await fetch(authURL,{
              method: "POST",
              headers: {"Content-type":"application/json"},
              body: JSON.stringify(user)
          });

          if (!response.ok){
            const message = response.status;
            console.error(message);
            throw new Error(message);
          }

          const data = await response.json();
          const token = data.token;
          return token
        } catch (error) {
          console.log(error.message);
          throw error;
      }
}