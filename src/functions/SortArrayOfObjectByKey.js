/**
 * This method used for sorting array of objects by their key (in ASC)

 * @param   {array} array it should be array of object like [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]
 * @param   {object} data it should be any key from object (object in array)
 * @return  {array} it returns a sorted array (sort by object key in ascending order)
 * 
 * @example
 * array = [
 *          {name: 'xin zhao', id: 3237, armor: 35, attackrange: 175, attackdamage: 63},
 *          {name: 'twitch', id: 3234, armor: 27, attackrange: 550, attackdamage: 59},
 *          {name: 'talon', id: 3233, armor: 30, attackrange: 125, attackdamage: 68}
 *         ]
 * key = 'armor'
 * return [
 *         {name: 'twitch', id: 3234, armor: 27, attackrange: 550, attackdamage: 59},
 *         {name: 'talon', id: 3233, armor: 30, attackrange: 125, attackdamage: 68},
 *         {name: 'xin zhao', id: 3237, armor: 35, attackrange: 175, attackdamage: 63}
 *        ]
*/
export const sortArrayOfObjectByKey = (array = [], key) => {
	return array.sort(function (a, b) {
		var x = a[key]; var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}
