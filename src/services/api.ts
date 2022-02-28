import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {},
});

api.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		const data = {
			...error.response,
			mensagem: error.response.data.mensagem ?? "Por favor, verifique sua conexão ou tente novamente mais tarde.",
		};
		return Promise.reject(data);
	}
);

export { api };
