import React, { useContext } from 'react'
import './Hero.css'
import { Context } from '../../Context/Context';

const HEro = () => {

  const {OnSent,recentprompt,result,loading,data,input,setinput}=useContext(Context);

  return (
    <div className='main'>
      <div className="navbar">
        <p>Chatbot</p>
        <img src="https://i.pinimg.com/736x/dc/30/1d/dc301dd6fac108a2a60f103e01539f04.jpg" alt="" width={"50px"} />
      </div>
      <div className="main-hero">
        
{/* jsx code */}

        {!result?
      <>
       <div className="greeet">
            <p><span>Hello, Coder's</span></p>
            <p>How Can I Help u?</p>
          </div>

          <div className="cards">
            <div className="card">
            <p>Suggest beautiful place to see on a upcoming road trip</p>
            <svg xmlns="http://www.w3.org/2000/svg"  width={"40px"} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path></svg>
            </div>
            <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <svg xmlns="http://www.w3.org/2000/svg"  width={"40px"} viewBox="0 0 24 24" fill="currentColor"><path d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"></path></svg>
            </div>
            <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src="images/chat-2-line.png" alt="" />
            </div>
            <div className="card">
            <p>Tell me about React js and React native</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={"40px"} viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>
            </div>
          </div>
      </>  
      :

      // jsx code 

       <div className="result">
        <div className="title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" alt="userlogo" width={"30px"} />
          <p>{recentprompt}</p>
        </div>
        <div className="result-data">
          <img src="https://i.pinimg.com/736x/dc/30/1d/dc301dd6fac108a2a60f103e01539f04.jpg" alt="applogo"  width={"50px"}/>
          <p dangerouslySetInnerHTML={{__html:result}}></p>
          {/* <p>{result}</p> */}
        </div>
      </div>
      }


      <div className="footer">
      <div className="search">

        {/* onclick function onchange function */}

        <input type="text" onChange={(e)=>setinput(e.target.value)} name="" value={input} placeholder='Enter Here ....'/>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} viewBox="0 0 24 24" fill="currentColor"><path d="M20.4668 7.69379L20.7134 7.12811C21.1529 6.11947 21.9445 5.31641 22.9323 4.87708L23.6919 4.53922C24.1027 4.35653 24.1027 3.75881 23.6919 3.57612L22.9748 3.25714C21.9616 2.80651 21.1558 1.97373 20.7238 0.930828L20.4706 0.319534C20.2942 -0.106511 19.7058 -0.106511 19.5293 0.319534L19.2761 0.930828C18.8442 1.97373 18.0384 2.80651 17.0252 3.25714L16.308 3.57612C15.8973 3.75881 15.8973 4.35653 16.308 4.53922L17.0677 4.87708C18.0555 5.31641 18.8471 6.11947 19.2866 7.12811L19.5331 7.69379C19.7136 8.10792 20.2864 8.10792 20.4668 7.69379ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11ZM12 1C9.23858 1 7 3.23858 7 6V10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10V7H15V10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10V6C9 4.34315 10.3431 3 12 3C12.5972 3 13.1509 3.17349 13.617 3.47248L14.6969 1.7891C13.9182 1.28957 12.9914 1 12 1Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>OnSent()} width={"30px"} viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path></svg>
        </div>
      </div>
      </div>     
      </div>
    </div>
  )
}

export default HEro
