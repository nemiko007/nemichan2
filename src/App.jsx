import "bulma/css/bulma.css";

import Works from "./compornents/Works";
import About from "./compornents/About";

import { useState } from "react";

export default function App() {
  return (
    <>
      <nav class="navbar is-fixed-top is-primary is-mobile">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#works">Works</a>
            <a class="navbar-item" href="#about">About</a>
          </div>
        </div>
      </nav>

      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              nemichan introduction
            </p>
            <br></br>
            <p class="subtitle">
              ねみちゃんが気まぐれで更新するサイトです。ポートフォリオ的な感じで使っていきたい。。。
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <a name="works"></a>
      <Works />
      <br></br>
      <a name="about"></a>
      <About />
    </>
  )
}