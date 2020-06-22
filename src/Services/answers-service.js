import config from "../config";
import TokenService from "../Services/TokenService";

const AnswersApiService = {
  getAnswers() {
    return fetch(`${config.API_ENDPOINT}/api/answers`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },

  postAnswer(answer_body, question_id) {
    return fetch(`${config.API_ENDPOINT}/api/answers`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ answer_body, question_id }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })

      .catch((error) => {
        console.error({ error });
      });
    
  }
};

export default AnswersApiService;
