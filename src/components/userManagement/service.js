import axios from 'axios';

export const editUser = (body) => {
	console.log('vytran');
	console.log(body);
	return axios({
		url: `http://localhost:8081/user/${body[0].id}`,
		method: 'PUT',
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwOTM4NDg3LCJleHAiOjE2MTE1NDMyODd9.kq7bmjIHBq6y4DUjf4nRg83Eb2YLv-blTPQwfxzFDUX_PMI7xfM-Bg2CTi4ZUnrShum4MfKtFFcazrlZCQNiDg',
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body[0],
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
