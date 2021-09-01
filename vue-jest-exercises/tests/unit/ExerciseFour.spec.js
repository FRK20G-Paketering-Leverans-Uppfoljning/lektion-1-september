import { shallowMount } from '@vue/test-utils';
import ExerciseFour from '@/components/ExerciseFour';

/**
 * När användaren skriver in en text så ska första bokstaven i strängen 
 * automatiskt ändras till stor bokstav.
 */

describe('ExerciseFour.vue', () => {
  it('should capitalize the first letter in a string', async () => {
    const expected = 'Ada';
    const wrapper = shallowMount(ExerciseFour);
    const inputElem = wrapper.find('input');

    await inputElem.setValue('ada');
    const result = wrapper.find('p').text();

    expect(result).toBe(expected);
  });
});