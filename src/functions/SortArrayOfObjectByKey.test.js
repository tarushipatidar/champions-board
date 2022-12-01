import { sortArrayOfObjectByKey } from "./SortArrayOfObjectByKey";

let unordered_array_of_objects;

beforeEach(() => {
  unordered_array_of_objects = [
    {
      id: 3,
      count: 70
    },
    {
      id: 7,
      count: 10
    },
    {
      id: 4,
      count: 20
    }
  ];
});

it('Should return an array of object sort by id', () => {
  const expected_ordered_array_of_objects = [
    {
      id: 3,
      count: 70
    },
    {
      id: 4,
      count: 20
    },
    {
      id: 7,
      count: 10
    }
  ];
  expect(sortArrayOfObjectByKey(unordered_array_of_objects, 'id')).toMatchObject(expected_ordered_array_of_objects);
})
