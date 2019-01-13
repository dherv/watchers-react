class Api {
  base: string;
  constructor() {
    this.base = `http://localhost:8000/api`;
  }

  fetchData(url: string) {
    return fetch(`${this.base}${url}`)
      .then(response => response.json())
      .catch(e => e);
  }

  postData(url: string) {
    return fetch(this.base, {
      method: "post"
    })
      .then(response => response.json())
      .catch(e => e);
  }

  putData(url: string) {
    return fetch(this.base, {
      method: "put"
    })
      .then(response => response.json())
      .catch(e => e);
  }

  deleteData(url: string) {
    return fetch(this.base, {
      method: "delete"
    })
      .then(response => response.json())
      .catch(e => e);
  }
}

export default new Api();
