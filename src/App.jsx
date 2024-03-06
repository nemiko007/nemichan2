import "bulma/css/bulma.css";

import Works from "./compornents/Works";
import About from "./compornents/About";
import Articles from "./compornents/Articles";

import { useState } from "react";

export default function App() {

  const[active, setActive] = useState(false);

  return (
    <>
      <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a onClick={() => setActive(!active)} role="button" class={`navbar-burger burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasic" className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div class="navbar-start">
            <a class="navbar-item" href="#about">About</a>
            <a class="navbar-item" href="#articles">Articles</a>
            <a class="navbar-item" href="#works">Works</a>
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
      <a name="about"></a>
      <About />
      <br></br>
      <a name="articles"></a>
      <Articles />
      <br></br>
      <a name="works"></a>
      <Works />
    </>
  )
}