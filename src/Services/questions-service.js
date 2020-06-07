import config from "../config";
import TokenService from "../Services/TokenService";

const QuestionsApiService = {
  getQuestions() {
    return fetch(`${config.API_ENDPOINT}/api/questions`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postQuestion(question_body, department_id) {
    return fetch(`${config.API_ENDPOINT}/api/questions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ question_body, department_id }),
    })
      .then((res) => {
        !res.ok ? res.json().then((e) => Promise.reject(e)) :
          res.json();
      })

      .catch((error) => {
        console.error({ error });
      });
  },

  likeQuestion(question_id, user_id) {
    return fetch(`${config.API_ENDPOINT}/likes/${question_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_id
      }),
    })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res
      )
  }
};

export default QuestionsApiService;
