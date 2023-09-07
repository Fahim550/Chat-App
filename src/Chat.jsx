import React,{useState,useEffect,useRef} from 'react'
// import Massege from './Massege'
import { collection, onSnapshot, orderBy,query } from 'firebase/firestore'
import { db } from './firebase'
import Massege from './Massege';
import SendMessage from './SendMessage';

const style={
    main:`flex flex-col p-[1px] relative bg-black overflow-auto touch-auto `,
    scrole:`flex flex-col bg-black sticky`,
    massage:``
}
export default function Chat() {
  const [messages,setMessages]=useState([]);
  const scroll=useRef();
  console.log('mes',messages);
useEffect(()=>{
  const q =query(collection(db, 'messages'), orderBy('timestamp'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let messagesArr = [];
    querySnapshot.forEach((doc) => {
      messagesArr.push({...doc.data(),id: doc.id});
    });
    setMessages(messagesArr)
  })
  return ()=>unsubscribe();
  
},[])
// console.log('message',messages);

  return (
    <>
       <main className={style.main}>
        {/* <Massege text={"fahim"}/> */}
        <div className={style.scrole}>
        {messages &&
          messages.map((msg) => (
          <Massege msg={msg} key={msg.id} />
          ))}
        </div>
       
        </main>
        {/* send massege component */}
        <SendMessage scroll={scroll} className={style.massage}/>
        <span ref={scroll}></span>
            {/* <h1>hello</h1> */}
    </>
 
  )
}
