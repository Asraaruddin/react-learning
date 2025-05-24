import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';



import { MovieList } from './Components/movielist';
import { MovieInput } from './Components/movieinput';


// ✅ Only ONE App component
const App = () => {
  return (
    <Provider store={store}>
      <MovieInput/>
<MovieList/>

    </Provider>
  );
};

export default App;
