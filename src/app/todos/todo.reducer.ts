import { createReducer, on } from '@ngrx/store';
import { crear, toogle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al Mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Fabricar traje de IronMan'),
  new Todo('Robar escudo de Capitán America'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]  ),
  on(toogle,(state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
      return {
        ...todo,
        completado: !todo.completado
      }
      } else {
        return todo;
      }

    });
  })
);
