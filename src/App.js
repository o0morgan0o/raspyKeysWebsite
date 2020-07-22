import React from 'react';
import Navbar from './components/Navbar'
import Head from './components/Head'
import Functions from './components/Functions'
import Video from './components/Video'
import Schema from './components/Schema'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Space from './components/Space'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Space height={"3em"} />
      <Head />
      <Space height={"2em"} />
      <Functions />
      <Space height={"3em"} />
      <Video />
      <Space height={"5em"} />

      <Schema />
      {/* <Space height={"5em"} /> */}

      <Faq />
      <Space height={"5em"} />
      <Contact />
      <Space height={"5em"} />

      <Footer />

    </div>
  );
}

export default App;
