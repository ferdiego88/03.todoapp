import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{texto: string}>()
  );

export const toogle = createAction(
  '[TODO] Toogle Todo',
  props<{id: number}>()
)

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
)

export const borrar = createAction(
  '[TODO] Editar Todo',
  props<{id: number}>()
)

export const toggleAll = createAction(
  '[TODO] Toggle Completados',
   props<{completado: boolean}>()
)
