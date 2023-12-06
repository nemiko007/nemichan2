import "bulma/css/bulma.css";

import Works from "./compornents/Works";
import About from "./compornents/About";

import { useState } from "react";

export default function App() {
  return (
    <>
      <section class="hero is-primary is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <span class="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              nemichan introduction
            </p>
            <br></br>
            <p class="subtitle">
              ねみちゃんが気まぐれで更新するサイトです。ポートフォリオ的な感じで使って行きたい。。。
            </p>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <li><a href="#works">Works</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <a name="works"></a>
      <Works />
      <br></br>
      <a name="about"></a>
      <About />
    </>
  )
}