import axios from 'axios';

export const getListUser = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `http://localhost:8081/user?limit=4&page=1`,
		method: method,
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwODkxMTc3LCJleHAiOjE2MTE0OTU5Nzd9.lUwpuhjsg0XlnaaqBsXO6d6x_-wsPrggd0cyzeNy9RNCi27e6qQjpLcEqKY5ZCZfCAfdpGIIHrBo7Jg4Nx0V-g',
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};

export const deleteUser = (id) => {
	return axios({
		url: `http://localhost:8081/user/${id}`,
		method: 'DELETE',
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEwOTM4NDg3LCJleHAiOjE2MTE1NDMyODd9.kq7bmjIHBq6y4DUjf4nRg83Eb2YLv-blTPQwfxzFDUX_PMI7xfM-Bg2CTi4ZUnrShum4MfKtFFcazrlZCQNiDg',
			'content-type': 'application/json',
			accept: 'application/json',
		},
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
