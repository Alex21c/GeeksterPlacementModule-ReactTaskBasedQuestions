import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";

import { useEffect, useRef, useState } from "react";
function App() {
  const [stateAttempts, setStateAttempts] = useState(0);
  const [stateIndicesLocked, setStateIndicesLocked] = useState(() => []);
  const [open, setOpen] = useSetInitialStateSnackbar();
  const [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });
  const fruitsAndVegetables = [
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍉",
    "🍇",
    "🍓",
    "🍈",
    "🍒",
    "🍍",
    "🥭",
    "🥥",
    "🍅",
    "🍆",
    "🥑",
    "🥦",
    "🌽",
    "🌶️",
    "🥕",
    "🥔",
    "🥬",
    "🧄",
    "🧅",
    "🍄",
    "🥜",
    "🥝",
  ];

  const [
    stateSixteenRandomFruitsAndVegetables,
    setStateSixteenRandomFruitsAndVegetables,
  ] = useState(() =>
    getAnyEightFruitsAndProvide16GridValue(fruitsAndVegetables)
  );

  let [queue, setQueue] = useState(() => []);

  function getAnyEightFruitsAndProvide16GridValue(fruitsAndVegetables) {
    const idexesUsed = [];
    let result = [];
    function getRandomFruit() {
      const idx = Math.floor(Math.random() * fruitsAndVegetables.length);

      if (!idexesUsed.includes(idx)) {
        idexesUsed.push(idx);
        result.push(fruitsAndVegetables[idx]);
      }
    }

    while (result.length < 8) {
      getRandomFruit();
    }
    const eightFruits = result;
    result = [];

    // now create two copies of each fruit at random index
    function generateCopiesToFill8by8Grid() {
      const gridSize = 16;
      const idxOccupied = [];
      const result = [];
      function generateRandomIndexAndPutFruitOntoIt(idxOccupied) {
        let idx = Math.floor(Math.random() * gridSize);
        while (idxOccupied.includes(idx)) {
          idx = Math.floor(Math.random() * gridSize);
        }
        idxOccupied.push(idx);
        return idx;
      }

      eightFruits.forEach((fruit) => {
        // generate first index
        result[generateRandomIndexAndPutFruitOntoIt(idxOccupied)] = {
          value: fruit,
          className:
            "cursor-pointer w-[7rem] h-[7rem] text-center bg-yellow-200 text-[3rem] rounded-md shadow-sm shadow-stone-200 p-[1rem] select-none text-transparent  transition",
        };

        // generate second index
        result[generateRandomIndexAndPutFruitOntoIt(idxOccupied)] = {
          value: fruit,
          className:
            "cursor-pointer w-[7rem] h-[7rem] text-center bg-yellow-200 text-[3rem] rounded-md shadow-sm shadow-stone-200 p-[1rem] select-none text-transparent transition",
        };
      });

      return result;
    }

    return generateCopiesToFill8by8Grid();
  }

  function reset() {
    setStateSixteenRandomFruitsAndVegetables(
      getAnyEightFruitsAndProvide16GridValue(fruitsAndVegetables)
    );

    setStateAttempts(0);
    setStateIndicesLocked([]);
  }

  function handleTileClicked(idx) {
    if (stateIndicesLocked.includes(idx)) {
      return console.log("its already matched !");
    }
    if (idx === queue.at(-1)) {
      if (
        stateSixteenRandomFruitsAndVegetables[idx].className
          .split(" ")
          .includes("text-transparent")
      ) {
        // remove it
        stateSixteenRandomFruitsAndVegetables[idx].className =
          stateSixteenRandomFruitsAndVegetables[idx].className.replaceAll(
            " text-transparent",
            ""
          );
      } else {
        stateSixteenRandomFruitsAndVegetables[idx].className =
          stateSixteenRandomFruitsAndVegetables[idx].className +
          " text-transparent";
      }

      setStateSixteenRandomFruitsAndVegetables([
        ...stateSixteenRandomFruitsAndVegetables,
      ]);

      queue.splice(idx, 1);
      setQueue([...queue]);

      return console.log("its same idx");
    }
    setStateAttempts(stateAttempts + 1);
    queue = [...queue, idx];
    setQueue(queue);

    stateSixteenRandomFruitsAndVegetables[idx].className =
      stateSixteenRandomFruitsAndVegetables[idx].className.replace(
        "text-transparent",
        ""
      );
    setStateSixteenRandomFruitsAndVegetables([
      ...stateSixteenRandomFruitsAndVegetables,
    ]);

    // hide again oldest element

    if (
      queue.length == 2 &&
      stateSixteenRandomFruitsAndVegetables.at(queue.at(0)).value ===
        stateSixteenRandomFruitsAndVegetables.at(queue.at(1)).value
    ) {
      // matched
      stateIndicesLocked.push(queue.at(0));
      stateIndicesLocked.push(queue.at(1));
      setStateIndicesLocked([...stateIndicesLocked]);
      setQueue([]);
    } else if (queue.length > 2) {
      if (
        stateSixteenRandomFruitsAndVegetables.at(queue.at(1)).value ===
        stateSixteenRandomFruitsAndVegetables.at(queue.at(2)).value
      ) {
        const oldestElementIdx = queue.shift();

        stateSixteenRandomFruitsAndVegetables[oldestElementIdx].className =
          stateSixteenRandomFruitsAndVegetables[oldestElementIdx].className +
          " text-transparent";
        setStateSixteenRandomFruitsAndVegetables([
          ...stateSixteenRandomFruitsAndVegetables,
        ]);
        stateIndicesLocked.push(queue.at(0));
        stateIndicesLocked.push(queue.at(1));
        setStateIndicesLocked([...stateIndicesLocked]);

        setQueue([]);
      } else {
        // hide the oldest element inside queue
        const oldestElementIdx = queue.shift();
        setQueue([...queue]);

        stateSixteenRandomFruitsAndVegetables[oldestElementIdx].className =
          stateSixteenRandomFruitsAndVegetables[oldestElementIdx].className +
          " text-transparent";
        setStateSixteenRandomFruitsAndVegetables([
          ...stateSixteenRandomFruitsAndVegetables,
        ]);
      }
    }
  }

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[33rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/match-pair"
            title="Original Question URL"
          >
            Q.5 Match Pair
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
      <section className="p-[1rem] flex flex-col gap-[1rem] items-center">
        <ul className="grid grid-cols-4 grid-rows-4 w-[29.5rem] gap-[.5rem]">
          {stateSixteenRandomFruitsAndVegetables.map((obj, idx) => {
            return (
              <li
                className={obj.className}
                key={idx}
                onClick={(event) => handleTileClicked(idx)}
              >
                {obj.value}
              </li>
            );
          })}
        </ul>

        <div>
          <div className="text-[1.5rem]">
            Attempts: {Math.floor(stateAttempts / 2)}
          </div>
        </div>
        <button
          className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.15rem]  border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]"
          onClick={reset}
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
