import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";

import { useEffect, useRef, useState } from "react";
function App() {
  const [open, setOpen] = useSetInitialStateSnackbar();
  const [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });

  function snackbarSuccessMsgRelay(msg) {
    setOpen(true);
    setSnackbarState({ msg });
  }
  function snackbarWarningMsgRelay(msg) {
    setOpen(true);
    setSnackbarState({ msg, successOrError: "warning" });
  }

  var isAnagramLogic = function (s, t) {
    // Safeguard
    if (s.length != t.length) {
      return false;
    }
    // Approach: hash Map
    let sMap = createMap(s);
    let tMap = createMap(t);
    // console.log(sMap);
    // console.log(tMap);

    // iterating s and comparing to check if not anagram
    let idx = 0;
    let letter;
    while (idx < s.length) {
      letter = s[idx];
      if (sMap.get(letter) != tMap.get(letter)) {
        return false;
      }
      ++idx;
    }

    // Default
    return true;
  };

  function createMap(s) {
    // constructin sMap
    let sMap = new Map();
    let idx = 0;
    let letter;
    let freq;
    while (idx < s.length) {
      letter = s[idx];
      freq = sMap.get(letter) || 0;
      sMap.set(letter, freq + 1);
      ++idx;
    }
    return sMap;
  }

  useEffect(() => {
    str1.current.focus();
  }, []);

  function isAnagram() {
    if (str1.current.value === "") {
      str1.current.focus();
      return snackbarWarningMsgRelay("Enter value for first word or phrase !");
    }
    if (str2.current.value === "") {
      str2.current.focus();
      return snackbarWarningMsgRelay("Enter value for second word or phrase !");
    }

    if (isAnagramLogic(str1.current.value, str2.current.value)) {
      snackbarSuccessMsgRelay("ineed, Are Anagrams !");
    } else {
      snackbarSuccessMsgRelay("No, are Not Anagrams !");
    }
  }

  const str1 = useRef(null);
  const str2 = useRef(null);
  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[33rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/anagram-checker"
            title="Original Question URL"
          >
            Q.7 Anagram Checker
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
      <section className="p-[1rem] flex flex-col gap-[.5rem] pt-[0]">
        <input
          className="p-[.5rem] rounded-md text-[#343d3f] font-medium text-[1.5rem] bg-stone-200 w-[100%] outline-none border-[.15rem] focus:border-yellow-300 transition"
          placeholder="Enter first word or phrase "
          type="text"
          ref={str1}
        />
        <input
          className="p-[.5rem] rounded-md text-[#343d3f] font-medium text-[1.5rem] bg-stone-200 w-[100%] outline-none border-[.15rem] focus:border-yellow-300 transition"
          placeholder="Enter second word or phrase"
          type="text"
          ref={str2}
        />

        <button
          className="bg-yellow-200 text-[#343d3f] rounded-md font-medium transition hover:bg-yellow-300 border-[.5rem] border-yellow-200 w-[100%] opacity-[.8] hover:opacity-[1] p-[.5rem]  text-[1.5rem]"
          onClick={isAnagram}
        >
          Is Anagram?
        </button>
      </section>
    </div>
  );
}

export default App;
