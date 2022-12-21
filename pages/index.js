import Head from "next/head";
import Image from "next/image";
import First from "../components/first"
import styles from "../styles/index.module.css"
import Last from "../components/last";

//dark is the color for black bg
//lightBlue is the color for the Arduous Carifer
//blue is the blue for the headings
//offwhite is the color for the paragraphs
//the library is mobile first, so we have to make the site mobile me pehle  then desktop
//~sid

export default function Home() {
  return (
    <div className="bg-dark">
      <div>yoo</div>
      <First />
      <br /><br />
      <Last />
    </div>
  );
}
