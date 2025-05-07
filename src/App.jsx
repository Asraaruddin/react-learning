import React, { useState } from 'react';
 export const ThemeContext = React.createContext();
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import TodoContainer from './Components/TodoContainer';
import { Debounce } from './Components/debounce';
import { Debouncedemo } from './Components/debouncedemo';
import { FakestoreProducts } from './Components/fakestorapi';
import { Focusinput } from './Components/inputfocus';
import { TimerComponent } from './Components/timer';
import { PreviousValue } from './Components/previouscount';
import RenderCounter from './Components/example';
import { Stopwatch } from './Components/stopwatch';
import { Start } from './Components/startstop';
import { ExpensiveComponent } from './Components/usememo';
import { FilteredList } from './Components/filterdata';
import { Component } from './Components/component';
import { CounterComponent } from './Components/countercomponnet';
import { ToggleComponent } from './Components/togglecomponent';
import { ToggleButton } from './Components/togglebutton';
import { DarkModeToggle } from './Components/darkmode';
import { AutoCounterApp } from './Components/autocounterapp';
import { LoginForm } from './Components/loginform';
import { LocalStorageDemo } from './Components/localstorage';
import { UserList } from './Components/userlist';
import { Fakestore } from './Components/fakestore';
import { ProductList } from './Components/productlist';
import { Parent } from './Components/rerender';
import { useEffect } from 'react';
import { Useeffect } from './Components/useEffect';
import { Toolbar } from './Components/Toolbar';
import { CounterReducer } from './Components/reducer';
// import { ClassBinding } from './Components/class-bindinf';

const App = () => {

  const [theme,setTheme] =useState('light');
  return (
   
  <CounterReducer/>
  
  );
};

export default App;
