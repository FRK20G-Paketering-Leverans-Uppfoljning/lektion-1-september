import { shallowMount } from '@vue/test-utils';
import ExerciseTwo from '@/components/ExerciseTwo';

/**
 * När komponenten visas ska texten vara "on". 
 * När användaren klickar och texten är "on" ska den byta till "off". 
 * När användaren klickar och texten är "off" ska den byta till "on".
 */

describe('ExerciseTwo.vue', () => {
  const wrapper, buttonElem;
  
  //BeforeEach körs inför varje test
  //BeforeEach används för att slippa skriva samma kodrader i varje test
  beforeEach(() => {
    wrapper = shallowMount(ExerciseTwo);
    buttonElem = wrapper.find('button');
  });

  it('should display "On" when rendered', () => {
    //Arrange
    const expected = 'On';
    
    //Act
    const buttonText = buttonElem.text();
    console.log('Button text:', buttonText);

    //Assert
    expect(buttonText).toBe(expected);
  });

  it('should display "Off" when clicked', async () => {
    //Arrange
    const expected = 'Off';

    //Act
    await buttonElem.trigger('click');
    const buttonText = buttonElem.text();

    //Assert
    expect(buttonText).toBe(expected);
  });

  it('should display "On" when clicked', async () => {
    //Arrange
    const expected = 'On';

    //Act
    await buttonElem.trigger('click');
    await buttonElem.trigger('click');
    const buttonText = buttonElem.text();

    //Assert
    expect(buttonText).toBe(expected);
  });
})
