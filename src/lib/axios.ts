import Axios from 'axios';

export const axios = Axios.create({
	baseURL: `${ import.meta.env.VITE_API_ENDPOINT }`,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
        "Authorization": `Bearer ${ import.meta.env.VITE_API_TOKEN }`
	}
});
