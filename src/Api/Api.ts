/* istanbul ignore file */
// need to ignore the file for test coverage. class using static functions is not covered.
export default class Api {
  static prefix =
    process.env.NODE_ENV === "production"
      ? "http://13.231.85.189/api/"
      : "http://localhost:8000/api/";

  static get(url: string): Promise<any> {
    return fetch(`${this.prefix}${url}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
      }
    })
      .then(response => (response.ok ? response.json() : null))
      .catch(error => error);
  }
  static post(url: string, body: object): Promise<any> {
    return fetch(`${this.prefix}${url}`, {
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        "Content-type": "application/json"
      },
      method: "post"
    })
      .then(response => (response.ok ? response.json() : response))
      .catch(error => error);
  }

  static search(query: string): Promise<any> {
    console.log("key", process.env.REACT_APP_API_KEY);
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(response => (response.ok ? response.json() : response))
      .catch(error => error);
  }
}
