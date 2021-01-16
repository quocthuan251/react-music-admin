import axios from 'axios';

export const getListSinger = (
	endpoint,
	body,
	method = 'GET',
	typeAuthor = 'Token'
) => {
	return axios({
		url: `https://demo7080721.mockable.io/node-list-artist`,
		method: method,
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
		},
		data: body,
	})
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
};
