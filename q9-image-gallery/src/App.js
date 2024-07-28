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

  const images = [
    {
      name: "apple",
      img: apple,
      isActive: false,
    },
    {
      name: "mountain",
      img: mountain,
      isActive: false,
    },
    {
      name: "tree",
      img: tree,
      isActive: false,
    },
    {
      name: "lake",
      img: lake,
      isActive: false,
    },
    {
      name: "fire",
      img: fire,
      isActive: false,
    },
  ];

  let [stateActiveImage, setStateActiveImage] = useState({
    name: "",
    image: "",
    className: "displayNone",
  });

  let [stateImages, setStateImages] = useState(() => images);
  function showImage(imageName) {
    stateImages = images.map((image) => {
      if (image.name === imageName) {
        image.isActive = true;
        setStateActiveImage({
          name: image.name,
          image: image.img,
          className: "rounded-md max-h-[30rem]",
        });
      } else {
        image.isActive = false;
      }
      return image;
    });
    setStateImages([...stateImages]);
  }
  return (
    <div className="border-[.12rem] border-yellow-100 rounded-2xl m-[auto] mb-[2rem] w-[45rem] mt-[2rem] shadow-yellow-100 shadow-md flex flex-col gap-[1rem]">
      <header className="flex gap-[.3rem] flex-col bg-yellow-200 rounded-t-xl p-[1rem] text-[#343d3f]">
        <h1 className="text-[2rem]">
          <a
            className="underline font-medium text-blue-400 hover:text-blue-600 transition"
            href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/image-gallery"
            title="Original Question URL"
          >
            Q.9 Image Gallery
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
        <span>Click on any image !</span>
        <div className="flex gap-[.5rem]">
          {stateImages.map((image) => {
            return (
              <div className="rounded-full w-[6rem]  h-[6rem] overflow-hidden shadow-sm shadow-yellow-100">
                <img
                  key={image.name}
                  src={image.img}
                  className={`transition hover:grayscale-[0]  hover:opacity-[1] hover:scale-[1.2] object-fit w-[100%] h-[100%]
                    ${
                      image.isActive
                        ? "opacity-[1] grayscale-[0] "
                        : "opacity-[.9] grayscale-[.8]"
                    }`}
                  onClick={() => showImage(image.name)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <h2 className="text-[2rem] font-stone-200 font-medium text-center">
            {stateActiveImage.name &&
              stateActiveImage.name.at(0).toLocaleUpperCase()}
            {stateActiveImage.name && stateActiveImage.name.slice(1)}
          </h2>
          <img
            src={stateActiveImage.image}
            className={stateActiveImage.className}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
