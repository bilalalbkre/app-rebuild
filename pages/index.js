import Head from 'next/head'
import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import  Header  from '../compounent/Header/header';
import Footer from '../compounent/Footer/Footer';
import { attributes, react as HomeContent } from '../content/home.md';


export default function Home() {
  let { title, cats } = attributes;
  //console.log('test 1 : ' ,cats )
  return ( 
    <>
    <Header style={{display:'flex', justifyContent:'center' , color:'blue'}}  />
    <div style={{height:'500px'}}>
      {cats.map((cat,indx) => <div key={indx}><h1>{cat.name}</h1><p>{cat.description}</p></div> )}
      </div>
    <Footer/>
    </>
  )
}
