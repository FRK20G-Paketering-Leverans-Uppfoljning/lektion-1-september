import { shallowMount } from "@vue/test-utils";
import ExerciseThree from '@/components/ExerciseThree';

/**
 * Skriv test för, och implementera, en komponent som har en button och visar en siffra. 
 * När man klickar på knappen ska värdet som visas öka med 1.
 * Lägg till en knapp med texten "Minska" som minskar värdet med 1 när man klickar.
 */

describe('ExerciseThree.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ExerciseThree);
  })

  it('should display value 0 when rendered', () => {
    const expected = 0;
    const resultElem = wrapper.find('#result');

    const value = resultElem.text();

    expect(Number(value)).toBe(expected);
  });

  it('should display value 1 when clicked on increase', async () => {
    const expected = 1;
    const buttonElem = wrapper.find('#increase');
    const resultElem = wrapper.find('#result');

    await buttonElem.trigger('click');
    const value = resultElem.text();

    expect(Number(value)).toBe(expected);
  });

  it('should display value -1 when clicked on increase', async () => {
    const expected = -1;
    const buttonElem = wrapper.find('#decrease');
    const resultElem = wrapper.find('#result');

    await buttonElem.trigger('click');
    const value = resultElem.text();

    expect(Number(value)).toBe(expected);
  });
});