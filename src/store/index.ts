import { applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import RootReducer from './root.reducer';
import { RootActions, rootInitialState, RootState } from './root.types';

export const configureStore = () => {
   let middleware: any[] = [];
   if (process.env.NODE_ENV !== 'production') {
      middleware = [...middleware];
   }
   const store = createStore(
      RootReducer,
      rootInitialState,
      compose(
         applyMiddleware(
            ...[thunk as ThunkMiddleware<RootState, RootActions>].concat(
               middleware,
            ),
         ),
      ),
   );

   return store;
};

export default configureStore;
