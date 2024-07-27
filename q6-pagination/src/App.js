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
    { name: "Apple", price: 150 },
    { name: "Banana", price: 40 },
    { name: "Mango", price: 100 },
    { name: "Orange", price: 80 },
    { name: "Grapes", price: 60 },
    { name: "Papaya", price: 50 },
    { name: "Pineapple", price: 90 },
    { name: "Watermelon", price: 30 },
    { name: "Strawberry", price: 200 },
    { name: "Blueberry", price: 250 },
    { name: "Lemon", price: 40 },
    { name: "Lime", price: 35 },
    { name: "Cherry", price: 300 },
    { name: "Peach", price: 120 },
    { name: "Plum", price: 110 },
    { name: "Kiwi", price: 150 },
    { name: "Pear", price: 90 },
    { name: "Guava", price: 60 },
    { name: "Pomegranate", price: 180 },
    { name: "Coconut", price: 30 },
    { name: "Tomato", price: 25 },
    { name: "Potato", price: 20 },
    { name: "Onion", price: 30 },
    { name: "Carrot", price: 40 },
    { name: "Cabbage", price: 25 },
    { name: "Cauliflower", price: 35 },
    { name: "Broccoli", price: 80 },
    { name: "Spinach", price: 20 },
    { name: "Lettuce", price: 50 },
    { name: "Cucumber", price: 30 },
    { name: "Bell Pepper", price: 60 },
    { name: "Zucchini", price: 70 },
    { name: "Pumpkin", price: 40 },
    { name: "Eggplant", price: 30 },
    { name: "Radish", price: 20 },
    { name: "Beetroot", price: 35 },
    { name: "Garlic", price: 200 },
    { name: "Ginger", price: 100 },
    { name: "Chili Pepper", price: 50 },
    { name: "Mushroom", price: 120 },
  ];

  const step = 10;
  const [stateBegin, setStateBegin] = useState(0);
  const [stateEnd, setStateEnd] = useState(step);
  const [stateProducts, setStateProducts] = useState(() =>
    fruitsAndVegetables.slice(stateBegin, stateEnd)
  );
  let [stateSrNo, setStateSrNo] = useState(() => 1);

  function previous() {
    setStateSrNo(stateBegin - step + 1);
    setStateEnd(stateBegin);
    setStateBegin(stateBegin - step);
  }
  function next() {
    setStateSrNo(stateEnd + 1);
    setStateBegin(stateEnd);
    setStateEnd(stateEnd + step);
  }

  useEffect(() => {
    setStateProducts(fruitsAndVegetables.slice(stateBegin, stateEnd));
  }, [stateEnd, stateBegin]);

  const cssBtn = {
    active:
      "bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1rem] transition hover:bg-yellow-300 border-[.15rem]  border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem] h-[3rem]",
    incative:
      " text-stone-200 rounded-md font-medium text-[1rem] transition  border-[.15rem] w-[100%] opacity-[.8]  p-[.5rem] h-[3rem] cursor-not-allowed",
  };

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[33rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/pagination"
            title="Original Question URL"
          >
            Q.6 Pagination
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
      <section className="p-[1rem] flex flex-col gap-[1rem] pt-[0]">
        <table>
          <thead className="flex gap-[2rem] bg-blue-300 p-[.5rem] text-stone-100">
            <tr>
              <th className="w-[3rem]">#</th>
              <th className="w-[10rem]">Fruit/Vegetable</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {stateProducts.map((product, idx) => {
              return (
                <tr
                  key={idx}
                  className={`flex gap-[2rem] text-center  border-stone-200 p-[.5rem] ${
                    idx !== 0 ? "border-t-[.1rem]" : ""
                  }`}
                >
                  <td className="w-[3rem]">{stateSrNo++}</td>
                  <td className="w-[10rem] ">{product.name}</td>
                  <td>₹ {product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex gap-[.5rem] items-center">
          <button
            className={stateBegin - step < 0 ? cssBtn.incative : cssBtn.active}
            onClick={previous}
            disabled={stateBegin - step < 0 ? true : false}
          >
            Previous
          </button>
          <div className="w-[20rem] text-yellow-200 opacity-[.9] text-center">
            Page {Math.floor(stateEnd / step)} of{" "}
            {Math.floor(fruitsAndVegetables.length / step)}
          </div>
          <button
            className={
              stateEnd + step > fruitsAndVegetables.length
                ? cssBtn.incative
                : cssBtn.active
            }
            onClick={next}
            disabled={
              stateEnd + step > fruitsAndVegetables.length ? true : false
            }
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
