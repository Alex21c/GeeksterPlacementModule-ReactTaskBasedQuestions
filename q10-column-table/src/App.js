import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";
import { useEffect, useRef, useState } from "react";
import apple from "./Assests/Images/apple.webp";
import fire from "./Assests/Images/fire.jpg";
import mountain from "./Assests/Images/mountain.jpg";
import tree from "./Assests/Images/tree.webp";
import lake from "./Assests/Images/lake.webp";

function App() {
  const [open, setOpen] = useSetInitialStateSnackbar();
  let [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });

  const [stateRows, setStateRows] = useState(8);
  const [stateColumns, setStateColumns] = useState(8);
  let [stateCellNo, setStateCellNo] = useState(1);
  let [stateElements, setStateElements] = useState(setElements());

  useEffect(() => {
    setStateElements(setElements());
  }, [stateRows, stateColumns]);

  function setElements() {
    const elements = [];
    let val = 1;
    while (val <= stateRows * stateColumns) {
      elements.push(val);
      ++val;
    }
    return elements;
  }

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[55rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/column-table"
            title="Original Question URL"
          >
            Q.10 Column Table
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
      <section className="p-[1rem] flex flex-col gap-[1rem] pt-[0] items-center">
        <div className="flex flex-col items-end">
          <div className="flex gap-[1rem]">
            <label htmlFor="rows">Rows: {stateRows}</label>
            <input
              id="rows"
              type="range"
              min="2"
              max="77"
              step={1}
              defaultValue={stateRows}
              onChange={(event) => setStateRows(Number(event.target.value))}
            />
          </div>
          <div className="flex gap-[1rem]">
            <label htmlFor="cols">Columns: {stateColumns}</label>
            <input
              type="range"
              min="2"
              max="13"
              defaultValue={stateColumns}
              onChange={(event) => setStateColumns(Number(event.target.value))}
            />
          </div>
        </div>
        <ul
          className={`grid`}
          style={{
            gridTemplateColumns: `repeat(${stateColumns}, 1fr)`,
            gridTemplateRows: `repeat(${stateRows}, 1fr)`,
          }}
        >
          {stateElements.map((val) => {
            return (
              <li
                key={val}
                className=" border-[.10rem] border-stone-200 p-[1rem] "
              >
                {val}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
