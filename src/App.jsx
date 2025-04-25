import React from 'react';
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
// import { ClassBinding } from './Components/class-bindinf';

const App = () => {
  return (
    <div>
  <Start/>
  </div>
  );
};

export default App;
