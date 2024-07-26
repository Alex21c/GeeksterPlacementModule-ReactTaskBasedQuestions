import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";

import { useEffect, useRef, useState } from "react";
function App() {
  const [open, setOpen] = useSetInitialStateSnackbar();
  const stackMaxSize = 7;

  const [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });

  const refInput = useRef(null);
  const [stateStack, setStateStack] = useState(["apple", "grapes", "oranges"]);
  useEffect(() => {
    if (refInput) {
      refInput.current.focus();
    }
  }, []);

  function pop() {
    if (stateStack.length === 0) {
      return snackbarSuccessMessageRelay("Stack is Empty !");
    }
    let remaining = stateStack;
    remaining.pop();
    setStateStack([...remaining]);
  }

  function push() {
    if (stateStack.length === stackMaxSize) {
      return snackbarSuccessMessageRelay(
        "Stack is full, kindly pop first then add new element !"
      );
    }
    if (refInput.current.value === "") {
      resetInput();
      return snackbarSuccessMessageRelay(
        "push what, write something into the input field first"
      );
    }

    setStateStack([...stateStack, refInput.current.value]);

    resetInput();
  }

  function resetInput() {
    refInput.current.value = "";
    refInput.current.focus();
  }

  function snackbarSuccessMessageRelay(msg) {
    setOpen(true);
    setSnackbarState({ msg });
  }

  function peek() {
    setOpen(true);

    if (stateStack.length === 0) {
      snackbarSuccessMessageRelay("Stack is empty");

      return;
    }
    snackbarSuccessMessageRelay(stateStack.at(-1));
  }

  function isEmpty() {
    if (stateStack.length === 0) {
      return snackbarSuccessMessageRelay("Stack is empty !");
    }

    return snackbarSuccessMessageRelay("Stack is Not empty !");
  }
  function isFull() {
    if (stateStack.length === stackMaxSize) {
      return snackbarSuccessMessageRelay("Stack is Full !");
    }

    return snackbarSuccessMessageRelay("Stack is Not full !");
  }

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[55rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/stack"
            title="Original Question URL"
          >
            Q.3 Stack
          </a>
        </h1>
        <h2 className="flex gap-[.15rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            title="Author: Abhishek kumar"
            href="https://www.linkedin.com/in/alex21c/"
          >
            Abhishek kumar
          </a>
          |
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            title="Geekster"
            href="https://www.geekster.in/"
          >
            Geekster
          </a>
          FS-14 Batch
        </h2>
      </header>
      <SimpleSnackbar
        open={open}
        setOpen={setOpen}
        snackbarState={snackbarState}
      />
      <section className="p-[1rem] flex flex-col gap-[1rem]">
        <input
          className="p-[.5rem] rounded-md text-[#343d3f] font-medium text-[1.5rem] bg-stone-200 w-[100%] outline-none border-[.15rem] focus:border-yellow-300 transition"
          placeholder="Enter any value"
          type="text"
          ref={refInput}
        />

        <div className="flex gap-[1rem]">
          <div className="grid grid-cols-2 grid-rows-2 gap-[.5rem] text-blue-300 w-[20rem] h-[10rem]">
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={push}
            >
              Push
            </button>
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={pop}
            >
              Pop
            </button>
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={peek}
            >
              Peek
            </button>
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={isEmpty}
            >
              isEmpty
            </button>
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={isFull}
            >
              isFull
            </button>
            <button
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
              onClick={() => {
                setStateStack([]);
                refInput.current.value = "";
                refInput.current.focus();
              }}
            >
              Reset
            </button>
          </div>

          <ul className="rounded-md p-[1rem] border-[.15rem] border-stone-200  shadow-md shadow-stone-400 flex flex-col-reverse gap-[.25rem] text-stone-600 font-medium w-[40rem]">
            {stateStack.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="bg-stone-300 p-[1rem] rounded-md border-[.15rem] border-stone-700  hover:bg-stone-500 hover:text-stone-200 transition"
                >
                  #{idx + 1} {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
