import axios from "axios";

/**
 * ApiCall method calls axios for api fetch

 * @param   {string} method should be one out of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
 * @param   {string} url must be an string with http or https
 * @param   {object} data can contains headers value
 * @return  return json data from url or error
*/
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
