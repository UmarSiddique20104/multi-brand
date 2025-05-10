import React from 'react'

const BumpaHeading = ({text ,padding}:any) => {
  return (
    < > 
    <h1 className={`BumbaText font-titillium-bold ${padding ? padding :" py-32 "}  sm:text-[150px] text-8xl `}>{text}</h1>
    
    </>
  )
}

export default BumpaHeading 