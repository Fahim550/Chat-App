
import './App.css'
import Navbar from './Navbar'
import { auth } from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
 import Chat from './Chat'
const style={
  appContainer: `max-w-[728px] mx-auto text-center `,
  sectionContainer: `mt-0 flex flex-col h-[90vh] bg-black mt-10 shadow-xl border relative`,

}
function App() {
  const [user]=useAuthState(auth)
  console.log(user)

  return (
   <div className={style.appContainer}>
    <section className={style.sectionContainer}>
      <Navbar/>
      {user ? <Chat /> : null}
    </section>
   </div>
  )
}

export default App
