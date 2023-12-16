const BASE_URL = "http://localhost:3000/users";

export async function signUp(userData) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const createURL = BASE_URL + '/create';
    console.log(createURL);
    const res = await fetch(createURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Fetch requires data payloads to be stringified
      // and assigned to a body property on the options object
      body: JSON.stringify(userData),
    });
    // Check if request was successful
    if (res.ok) {
      // res.json() will resolve to the JWT
      console.log(res);
      return res.json();
    } else {
      throw new Error("Invalid Sign Up");
    }
  }
  