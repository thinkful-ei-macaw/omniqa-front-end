import config from "../config";
import TokenService from "../Services/TokenService";

const DepartmentsApiService = {
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

};

export default DepartmentsApiService;
