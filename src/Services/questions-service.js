import config from "../config";
import TokenService from "../Services/TokenService";

const QuestionsApiService = {
  getQuestions() {
    return fetch(`${config.API_ENDPOINT}/api/questions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
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
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })

      .catch((error) => {
        console.error({ error });
      });
  },

  likeQuestion(question_id, user_id) {
    console.log(question_id);
    return fetch(`${config.API_ENDPOINT}/api/likes/${question_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken(user_id)}`,
      },
    });
  },
  userLikedQuestions() {

    return fetch(`${config.API_ENDPOINT}/api/likes/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

   deleteQuestions (question_id, user_id) {
     fetch(`${config.API_ENDPOINT}/api/questions/${question_id}`, {
         method: 'DELETE',
         headers: {
           'content-type': 'application/json',
           Authorization: `Bearer ${TokenService.getAuthToken(user_id)}`,
         },
       })
       .catch(error => {
         console.error({
           error
         })
       })
   }
};

export default QuestionsApiService;
