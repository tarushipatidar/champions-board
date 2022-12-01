import updateWatchList from './addRemoveWatchItem';
import * as actions from '../actions/index';

it('On first ever call it should return default state of WatchList', () => {
	expect(updateWatchList(undefined, {})).toEqual(expect.any(Array));
})

it('After reset should return default state', () => {
	const action = { type: 'RESETWATCH' };
	expect(updateWatchList(undefined, action)).toEqual([]);
})
