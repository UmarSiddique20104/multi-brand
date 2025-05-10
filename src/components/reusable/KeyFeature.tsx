import React from 'react'

const KeyFeature = ({text ,padding}:any) => {
  return (
    < > 
    <h1 className={`BumbaText2 font-titillium-bold ${padding ? padding :" py-32 "}       xl:text-8xl lg:text-7xl  text-6xl         `}>{text}</h1>
    
    </>
  )
}

export default KeyFeature 
 