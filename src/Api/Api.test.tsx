import { renderer, shallow, React, Api } from "../test.config";

// This test has been ignored in coverage and will not appear
describe("Api", () => {
  const response = (type: string) => {
    const data = {
      backend: ["python"],
      frontend: ["javascript"]
    };
    const response = jest.spyOn(Api, type) as jest.Mocked<any>;
    response.mockImplementation(() =>
      Promise.resolve({
        data: {
          backend: ["python"],
          frontend: ["javascript"]
        }
      })
    );
    return response;
  };

  beforeEach(() => {
    jest.restoreAllMocks();

    window.sessionStorage.setItem("jwtToken", "token");
    window.fetch = jest.fn().mockImplementation(() => {
      const fetch = Promise.resolve({
        ok: true,
        json() {
          return {
            data: {
              back: ["python"],
              frontend: ["javascript"]
            }
          };
        }
      });
      return fetch;
    });
  });

  describe("get", () => {
    it("should fetch data correctly", (): Promise<void> => {
      const getResponse = response("get");
      return Api.get("/mockurl").then(response => {
        const headers = {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
        };
        expect(getResponse).toHaveBeenCalledTimes(1);
        expect(getResponse).toHaveBeenCalledWith("/mockurl");
        expect(response).toEqual({
          data: { backend: ["python"], frontend: ["javascript"] }
        });
      });
    });

    it("should be called with the right headers", () => {
      return Api.get("mockurl").then(response => {
        expect(fetch).toHaveBeenCalledWith(
          "http://localhost:8000/api/mockurl",
          {
            headers: { Authorization: "Bearer token" }
          }
        );
        expect(response).toEqual({
          data: {
            back: ["python"],
            frontend: ["javascript"]
          }
        });
      });
    });
  });

  describe("post", () => {
    const postData = { test: "test" };
    it("should post data correctly", (): Promise<void> => {
      const postResponse = response("post");
      return Api.post("/mockurl", { ...postData }).then(response => {
        expect(postResponse).toHaveBeenCalledTimes(1);
        expect(postResponse).toHaveBeenCalledWith("/mockurl", postData);
        expect(response).toEqual({
          data: { backend: ["python"], frontend: ["javascript"] }
        });
      });
    });

    it("should be called with the right headers", () => {
      return Api.post("mockurl", { ...postData }).then(response => {
        expect(fetch).toHaveBeenCalledWith(
          "http://localhost:8000/api/mockurl",
          {
            headers: {
              Authorization: "Bearer token",
              "Content-type": "application/json"
            },
            body: JSON.stringify({ test: "test" }),
            method: "post"
          }
        );
        expect(response).toEqual({
          data: {
            back: ["python"],
            frontend: ["javascript"]
          }
        });
      });
    });
  });
});
