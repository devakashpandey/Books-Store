import React from 'react';
// import { SpinnerRoundOutlined } from 'spinners-react';
import { Blocks } from  'react-loader-spinner'

const Loding = () => {
  return (
    <>
    <div className='loding'>
         {/* <SpinnerRoundOutlined /> */}
         <Blocks
            visible={true}
             height="90"
            width="90"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
           wrapperClass="blocks-wrapper"
         />
     </div>
    </>
  )
}

export default Loding;
