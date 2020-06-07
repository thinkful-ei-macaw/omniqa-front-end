import config from "../config";

const DepartmentApiService = {
    getDepartments() {
      return fetch(`${config.API_ENDPOINT}/api/departments`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
    },
}

 export default DepartmentApiService;
