import { createContext, useState } from "react";
import run from "../Config/Ai";
export const Context = createContext();

const ContextProvider = (props) => {

  // give the input data from the user

  const [input, setinput] = useState("");

  // user propmt to show the data

  const [recentprompt, setrecentprompt] = useState("");

  // history of prompt

  const [previous, setprevious] = useState([]);

  // display the result 
  const [result, setresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState("");

  const OnSent = async (prompt) => {
    setresult("")
    setloading(true)
    setresult("")
    setrecentprompt(input)
    setprevious((prev) => [...prev, input]);
   const response= await run(input);
   setresult(response)
   setloading(false)
   setinput("")

  };
  //    OnSent("What is web developer")
  const contextValue = {
    previous,
    setprevious,
    OnSent,
    recentprompt,
    setrecentprompt,
    result,
    setresult,
    input,
    setinput,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
