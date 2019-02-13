import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Elm} from '../elm/Main.elm';



class SecondPage extends React.Component {
  componentDidMount() {
    var app = Elm.Main.init({
      node: document.getElementById('main')
    });
  }
  render() {
    return (<Layout>
    <SEO title="page 2" keywords={[`gatsby`, `application`, `react`]} />
    <div id="main">Elm app loading...</div>
    <Link to="/">Go to home</Link>
  </Layout>)
  }
}

export default SecondPage
