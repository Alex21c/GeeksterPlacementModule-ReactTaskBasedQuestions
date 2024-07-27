import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import SimpleSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
} from "./Components/MuiSnackbar/SimpleSnackbar.jsx";

import { useEffect, useRef, useState } from "react";
function App() {
  const [open, setOpen] = useSetInitialStateSnackbar();
  let [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "success",
  });

  const mcxFAQs = [
    {
      id: 1,
      question: "What is MCX?",
      answer:
        "MCX (Multi Commodity Exchange) is a commodity exchange based in India where various commodities like gold, silver, crude oil, and agricultural products are traded. It provides a platform for price discovery and risk management in the commodity markets.",
      isAnswerVisible: false,
    },
    {
      id: 2,
      question: "How can I start trading on MCX?",
      answer:
        "To start trading on MCX, you need to open an account with a registered commodity broker who is a member of MCX. After completing the KYC (Know Your Customer) process and getting your trading account set up, you can begin trading through the broker's trading platform.",
      isAnswerVisible: false,
    },
    {
      id: 3,
      question: "What are the major commodities traded on MCX?",
      answer:
        "Major commodities traded on MCX include gold, silver, crude oil, natural gas, copper, zinc, lead, and various agricultural products like guar gum and soybean.",
      isAnswerVisible: false,
    },
    {
      id: 4,
      question:
        "What is the difference between futures and options contracts in MCX trading?",
      answer:
        "Futures contracts obligate the buyer to purchase, and the seller to sell, a commodity at a predetermined price at a future date. Options contracts give the buyer the right, but not the obligation, to buy or sell a commodity at a specified price before the contract expires.",
      isAnswerVisible: false,
    },
    {
      id: 5,
      question: "What is margin trading in MCX?",
      answer:
        "Margin trading allows traders to take larger positions in the market with a relatively smaller amount of capital. It involves paying a fraction of the total trade value as margin, while the rest is borrowed. However, margin trading also increases the risk, as losses can exceed the initial margin.",
      isAnswerVisible: false,
    },
    {
      id: 6,
      question: "What are the trading hours for MCX?",
      answer:
        "MCX trading hours generally run from 10:00 AM to 11:30 PM (Indian Standard Time), Monday through Friday. Specific trading hours may vary for different commodities and trading sessions.",
      isAnswerVisible: false,
    },
    {
      id: 7,
      question: "What risks are involved in MCX commodity trading?",
      answer:
        "Risks in MCX commodity trading include price volatility, market liquidity, leverage risk, and geopolitical factors. It's important to conduct thorough research, use risk management strategies, and understand the market dynamics before trading.",
      isAnswerVisible: false,
    },
  ];

  let [stateMcxFaqs, setStateMcxFaqs] = useState(() => mcxFAQs);

  function updateVisibility(id) {
    stateMcxFaqs = stateMcxFaqs.map((faq) => {
      if (faq.id === id) {
        faq.isAnswerVisible = !faq.isAnswerVisible;
      }
      return faq;
    });

    setStateMcxFaqs(stateMcxFaqs);
  }

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[33rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/accordion"
            title="Original Question URL"
          >
            Q.8 Accordion
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
        <ul className="flex flex-col gap-[1rem]">
          {stateMcxFaqs.map((faq) => {
            return (
              <li
                key={faq.id}
                className="rounded-md border-[.05rem] border-stone-200 p-[.5rem] shadow-sm shadow-stone-300"
              >
                <div className="flex justify-between">
                  <h2 className="w-[25rem] text-stone-300 font-medium text-[1.2rem]">
                    {faq.question}
                  </h2>
                  <button
                    className="text-[1.5rem]  bg-yellow-200 hover:bg-yellow-300 hover:opacity-1 transition opacity-[.8] text-stone-700 rounded-full w-[2rem] h-[2rem] text-center cursor-pointer "
                    onClick={() => updateVisibility(faq.id)}
                  >
                    {faq.isAnswerVisible ? "-" : "+"}
                  </button>
                </div>
                {faq.isAnswerVisible && (
                  <p className="text-[1rem] text-stone-200">{faq.answer}</p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
