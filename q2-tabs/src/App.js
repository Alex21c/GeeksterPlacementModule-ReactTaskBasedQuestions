import "./App.css";
import "./Assests/fontAwesomeProIcons/fontAwesomeIcons.css";
import { useEffect, useState } from "react";
import html5 from "./Assests/Images/html5.png";
import css3 from "./Assests/Images/css3.png";
import jsEs6 from "./Assests/Images/jsES6.png";

function App() {
  const bgTabs = {
    active: "bg-blue-500 font-semibold text-stone-100 p-[1rem] w-[100%]",
    inactive: "bg-sky-300 text-stone-600 p-[1rem] w-[100%]",
  };

  let [stateCurrentTabIs, setStateCurrentTabIs] = useState(1);

  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[55rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/tabs"
            title="Original Question URL"
          >
            Q.2 Tabs
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

      <section className=" m-[1rem] rounded-xl overflow-hidden w-[96%] flex flex-col gap-[1rem]">
        <ul className="flex w-[100%] justify-between cursor-pointer select-none">
          <li
            className={
              stateCurrentTabIs == 1 ? `${bgTabs.active}` : `${bgTabs.inactive}`
            }
            onClick={() => setStateCurrentTabIs(1)}
          >
            Tab #1
          </li>
          <li
            className={
              stateCurrentTabIs == 2 ? `${bgTabs.active}` : `${bgTabs.inactive}`
            }
            onClick={() => setStateCurrentTabIs(2)}
          >
            Tab #2
          </li>
          <li
            className={
              stateCurrentTabIs == 3 ? `${bgTabs.active}` : `${bgTabs.inactive}`
            }
            onClick={() => setStateCurrentTabIs(3)}
          >
            Tab #3
          </li>
        </ul>

        {stateCurrentTabIs == 1 && (
          <div className="flex flex-col gap-[.5rem] p-[1rem] pb-[2rem]">
            <h2 className="text-[2rem] font-medium">Content of Tab 1</h2>
            <div className="flex gap-[.5rem] mt-[2rem]">
              <img src={html5} className="w-[20rem]" />
              <p className="w-[20rem] text-justify">
                HTML elements tell the browser how to display the content. For
                example, you can use HTML to create static pages with text,
                headings, tables, lists, images, links, and more.
              </p>
            </div>
          </div>
        )}

        {stateCurrentTabIs == 2 && (
          <div className="flex flex-col gap-[.5rem] p-[1rem] pb-[2rem]">
            <h2 className="text-[2rem] font-medium">Content of Tab 2</h2>
            <div className="flex gap-[2rem] mt-[2rem]">
              <img src={css3} className="w-[20rem]" />
              <p className="w-[20rem] text-justify">
                Cascading Style Sheets is a style sheet language used for
                specifying the presentation and styling of a document written in
                a markup language such as HTML or XML.
              </p>
            </div>
          </div>
        )}

        {stateCurrentTabIs == 3 && (
          <div className="flex flex-col gap-[.5rem] p-[1rem] pb-[2rem]">
            <h2 className="text-[2rem] font-medium">Content of Tab 3</h2>
            <div className="flex gap-[2rem] mt-[2rem]">
              <img src={jsEs6} className="w-[20rem]" />

              <p className="w-[20rem] text-justify">
                JavaScript, often abbreviated as JS, is a programming language
                and core technology of the Web, alongside HTML and CSS. 99% of
                websites use JavaScript on the client side for webpage behavior.
                Web browsers have a dedicated JavaScript engine that executes
                the client code.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
