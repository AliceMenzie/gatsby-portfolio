import React from "react"
import Layout from "../components/Layout"
import HeroHome from "../components/HeroHome"
import TransitionButton from "../components/TransitionButton"
import TechStack from "../components/TechStack"
import scrollTo from 'gatsby-plugin-smoothscroll';
export default function Home() {
  return (
    <Layout>
  <section>    
<div>
<h1 className="logo">Hello World,</h1>
<HeroHome />
<div className="wrapper">
<button className="button" onClick={() => scrollTo('#tech-slogan')}> <TransitionButton /></button>
</div>
<TechStack />
</div>
  </section>
  </Layout>
  )
}
