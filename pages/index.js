import Head from "next/head";
import Image from "next/image";
import First from "../components/first";
import styles from "../styles/index.module.css";
import Last from "../components/last";
import Events from "../components/Events.js/Events";
import Speakers from "../components/Events.js/Speakers";

//dark is the color for black bg
//lightBlue is the color for the Arduous Carifer
//blue is the blue for the headings
//offwhite is the color for the paragraphs
//the library is mobile first, so we have to make the site mobile me pehle  then desktop
//~sid

export default function Home() {
  return (
    <div className="bg-dark">
      <First />
      <Events />
      <Speakers></Speakers>
      <Last />
    </div>
  );
}
