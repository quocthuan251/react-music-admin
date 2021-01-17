import axios from 'axios';

export const getListSinger = (
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
				'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjEwODYyMDM5LCJleHAiOjE2MTE0NjY4Mzl9.SeVwjbnYz3LyWZ_69NRL19320rokk4ofNJC54ap3CE0ndAFtpN2gXBJeyw4F3I-E_OBoLAnz9FVVYeGGzl0Yjw',
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
