import axios from "axios";

const ApiCall = async (method, url, data = {}) => {
	try {
		switch (method) {
			case 'GET': {
				return await axios.get(url, data).then((response) => response.data);
			};
			default: {
				return await axios.get(url, data).then((response) => response.data);
			};
		}
	} catch (error) {
		console.log(error);
	}
}

export default ApiCall;
