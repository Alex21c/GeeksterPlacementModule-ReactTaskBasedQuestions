import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import { useEffect, useState } from "react";

function App() {
  const [stepperCurrentState, setStepperCurrentState] = useState(1);
  const bgSpan = {
    active: "bg-blue-400",
    unProcessed: "bg-stone-400",
    processed: "bg-green-500",
  };
  const bgLine = {
    unProcessed: "bg-stone-400",
    processed: "bg-green-500",
  };

  const onScreenMessage = {
    1: "Add contact details for further communications.",
    2: "Add shipping address for successfull delivery.",
    3: "Complete Payment to complete the order.",
    4: "Ready to get delivered!",
    5: "Order Delivered successfully!🎉",
  };

  useEffect(() => {
    console.log(stepperCurrentState);
  }, [stepperCurrentState]);
  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[55rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/stepper"
            title="Original Question URL"
          >
            Q.1 Stepper Component
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

      <section className="p-[2rem] flex flex-col gap-[2rem] ">
        <div className="flex  justify-between text-stone-300">
          <div className="relative flex flex-col gap-[1rem] items-center">
            <div
              className={`${
                stepperCurrentState == 1 ? bgLine.unProcessed : bgLine.processed
              } h-[.3rem]  absolute z-[-1] left-[3rem]	 top-[1.4rem] w-[18rem]`}
            ></div>
            <span
              className={`${
                stepperCurrentState == 1 ? bgSpan.active : bgSpan.processed
              } text-stone-100 font-medium rounded-full text-center w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] border-[.15rem] border-gray-600`}
            >
              {stepperCurrentState == 1 ? (
                1
              ) : (
                <i className="fa fa-solid fa-check text-[1.8rem] text-stone-100" />
              )}
            </span>
            <span>Contact Details</span>
          </div>
          <div className="relative flex flex-col gap-[1rem] items-center">
            <div
              className={`${
                stepperCurrentState <= 2 ? bgLine.unProcessed : bgLine.processed
              } h-[.3rem]  absolute z-[-1] left-[3rem]	 top-[1.4rem] w-[18rem]`}
            ></div>
            <span
              className={`${
                stepperCurrentState == 2
                  ? bgSpan.active
                  : stepperCurrentState <= 2
                  ? bgSpan.unProcessed
                  : bgSpan.processed
              } text-stone-100 font-medium rounded-full text-center w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] border-[.15rem] border-gray-600`}
            >
              {stepperCurrentState <= 2 ? (
                2
              ) : (
                <i className="fa fa-solid fa-check text-[1.8rem] text-stone-100" />
              )}
            </span>
            <span>Shipping Address</span>
          </div>
          <div className="relative flex flex-col gap-[1rem] items-center">
            <div
              className={`${
                stepperCurrentState <= 3 ? bgLine.unProcessed : bgLine.processed
              } h-[.3rem]  absolute z-[-1] left-[3rem]	 top-[1.4rem] w-[12rem]`}
            ></div>
            <span
              className={`${
                stepperCurrentState == 3
                  ? bgSpan.active
                  : stepperCurrentState <= 3
                  ? bgSpan.unProcessed
                  : bgSpan.processed
              } text-stone-100 font-medium rounded-full text-center w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] border-[.15rem] border-gray-600`}
            >
              {stepperCurrentState <= 3 ? (
                3
              ) : (
                <i className="fa fa-solid fa-check text-[1.8rem] text-stone-100" />
              )}
            </span>
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col gap-[1rem] items-center">
            <span
              className={`${
                stepperCurrentState == 4
                  ? bgSpan.active
                  : stepperCurrentState <= 4
                  ? bgSpan.unProcessed
                  : bgSpan.processed
              } text-stone-100 font-medium rounded-full text-center w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] border-[.15rem] border-gray-600`}
            >
              {stepperCurrentState <= 4 ? (
                4
              ) : (
                <i className="fa fa-solid fa-check text-[1.8rem] text-stone-100" />
              )}
            </span>
            <span>Delivered</span>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] items-center">
          <h2 className="font-medium text-[1.5rem] text-stone-200">
            {onScreenMessage[stepperCurrentState]}
          </h2>
          {stepperCurrentState < 5 && (
            <button
              onClick={() => setStepperCurrentState(stepperCurrentState + 1)}
              className="bg-yellow-200 text-[#343d3f] rounded-md font-medium text-[1.7rem] transition hover:bg-yellow-300 border-[.15rem] border-stone-200 w-[19rem] opacity-[.8] hover:opacity-[1] p-[.5rem] text-center"
            >
              {stepperCurrentState == 4 ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
