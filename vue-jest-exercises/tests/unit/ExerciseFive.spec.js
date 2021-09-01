import { shallowMount } from '@vue/test-utils';
import ExerciseFive from '@/components/ExerciseFive';

/**
 * Lägg till ett testfall och sedan funktionalitet för att ta bort en todo.
 */

describe('ExerciseFive.vue', () => {
  it('should render the todo from the input field', async () => {
    const expected = 1;
    const wrapper = shallowMount(ExerciseFive);
  
    const inputElem = wrapper.find('#todo-text');
    await inputElem.setValue('Köp kaffe');
  
    const buttonElem = wrapper.find('button');
    await buttonElem.trigger('click');
  
    const todosCount = wrapper.findAll('ul > li').length;
    expect(todosCount).toBe(expected);
  });
  
  it('should remove correct todo from the list', async () => {
    const expected = 1;

    const data = [{ text: 'Köp kaffe' }, { text: 'Köp mjölk' }];
    const wrapper = shallowMount(ExerciseFive, { 
      data: () => ({
        todos: data
      })
    });
    console.log('Todos before remove', wrapper.findAll('ul > li').length);
    const todoElem = wrapper.find('li');
    const todoText = todoElem.text();
    await todoElem.trigger('click');

    const todosCount = wrapper.findAll('ul > li').length;
    const todos = wrapper.findAll('ul > li');
    console.log('Todos after remove', todosCount);
    expect(todosCount).toBe(expected);
    //För att testa att vi inte bara har tagit bort en todo utan rätt todo med
    //Vi förväntar oss att i vår todo lista att "Köp kaffe" inte finns kvar
    expect(todos).not.toContain(todoText);
  });
});