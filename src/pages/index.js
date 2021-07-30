import React from "react"
import Layout from "../components/Layout"
import HeroHome from "../components/HeroHome"
import TransitionButton from "../components/TransitionButton"
export default function Home() {
  return (
    <Layout>
  <section>    
<div>
<h1 className="logo">Hello World,</h1>
<HeroHome />
<TransitionButton />
</div>
  </section>
  </Layout>
  )
}
