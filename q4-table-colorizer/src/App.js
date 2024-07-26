import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";

import { useEffect, useRef, useState } from "react";
function App() {
  const tableMaxValue = 25;
  const [open, setOpen] = useSetInitialStateSnackbar();
  const [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });

  let [stateTable, setStateTable] = useState([]);
  function initialize() {
    stateTable = [];
    setStateTable([]);
    setTimeout(() => {
      for (let i = 1; i <= tableMaxValue; i++) {
        stateTable.push({
          value: i,
          isColored: false,
        });
        setStateTable([...stateTable]);
      }
    }, 500);
  }

  useEffect(() => {
    initialize();
  }, []);

  const refInput = useRef(null);

  useEffect(() => {
    if (refInput) {
      clearInputAndSetFocus();
    }
  }, []);

  function clearInputAndSetFocus() {
    refInput.current.value = "";
    refInput.current.focus();
  }

  function color() {
    const userInput = Number(refInput.current.value);
    if (userInput < 1 || userInput > tableMaxValue) {
      setSnackbarState({ msg: `kindly select between 1 and ${tableMaxValue}` });
      setOpen(true);
      clearInputAndSetFocus();
      return;
    }

    const updatedState = stateTable.map((obj) => {
      if (obj.value == userInput) {
        obj.isColored = true;
      }
      return obj;
    });
    setStateTable([...updatedState]);
    clearInputAndSetFocus();
  }

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[55rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/table-colorizer"
            title="Original Question URL"
          >
            Q.4 Table Colorizer
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
        <div className="flex gap-[1rem] items-center">
          <input
            className="p-[.5rem] rounded-md text-[#343d3f] font-medium text-[1.5rem] bg-stone-200 outline-none border-[.15rem] focus:border-yellow-300 transition w-[35rem]"
            placeholder="which cell to color e.g. 5"
            type="number"
            ref={refInput}
          />

          <button
            className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
            onClick={color}
          >
            Color
          </button>
          <button
            className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
            onClick={initialize}
          >
            Reset
          </button>
        </div>

        <ul className="grid grid-cols-5 grid-rows-5 ">
          {stateTable.map((obj) => {
            return (
              <li
                className={`p-[1rem] text-center text-stone-200 font-medium border-[.10rem] border-stone-200 ${
                  obj.isColored === true ? "bg-blue-300" : ""
                }`}
                key={obj.value}
              >
                {obj.value}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
