import React, { createContext} from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';


//type
type textOrnull = string | null; 

type fixed = "FELIPE" | "DANIEL" | "OLIVEIRA"; 

//context interface
interface IContext {
  language: string, 
  framework: string,
  projects: number
}

export const AppContext = createContext<IContext | null>(null);

function App() {

  const name: string = "PELIF ELNIDA";
  const isWorking: boolean = true;

  const myText: textOrnull = "testando o tipo null ou undefined";

  const myFixed: fixed = "FELIPE";

  //context 
  const contextValue: IContext = {
    language: "TypeScript",
    framework: "React",
    projects: 5
  }; 


  const showName = (name: string): string => {
    return `Olá, ${name}!`;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TS com React</h1>
        <h2>{showName(name)}</h2>
        {isWorking ? <p>{" - Trabalhando"}</p> : <p>{" - Aposentado"}</p>}
        <FirstComponent />
        <SecondComponent name="Second Name" age={20} />
        <Destructuring 
          title="POST 01" 
          content="This is my first post" 
          commentsQty={10} 
          tags={["js","ts","react","node"]} 
          category={Category.JS}/>
        <Destructuring 
          title="Post 02" 
          content="This is my second post " 
          commentsQty={10} 
          tags={["python","backend"]} 
          category={Category.PY}/>
          <State/>
          <p>{myFixed}</p>
          <Context></Context>
      </div>
    </AppContext.Provider>
  );
}

export default App;
