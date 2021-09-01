import React from 'react';
import * as S from './style'
// import { attributes, react as HomeContent } from '../../content/home.md';

const AboutCont = () => {
    // let { title, cats } = attributes;
    //console.log('test 1 : ' ,title)
    return (
        <>
            {/* <S.AboutContent> */}
                {/* <h1> {title} </h1> */}
                    <div style={{height:'500px'}}>
                     {/* {cats.map((cat,indx) => <div key={indx}><h1>{cat.name}</h1><p>{cat.description}</p></div> )} */}
                    </div>
            {/* </S.AboutContent> */}
        </>
    )
}

export default AboutCont;