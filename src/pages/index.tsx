import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Window from "../components/Window";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className="grid h-screen grid-rows-4 pb-4 overflow-hidden bg-slate-900 lg:grid-cols-5 cols-1">
  {/* main nav */}
  <Nav/>   
  {/* main window */}
  <Window/>
</div>
);

export default Home;


