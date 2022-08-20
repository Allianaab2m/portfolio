import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { MockUpWindow } from '../components/MockUpWindow'
import { MockUpCommand } from '../components/MockUpCommand'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'
import { setTimeout } from 'timers'

const Home: NextPage = () => {
  const [visible, setVisible] = useState(new Array(3).fill(false))

  return (
    <div>
      <Navbar />
      
      {/* I want to put some my icon */}
      {/* cli like window mock */}
      <MockUpWindow className="m-10">
        {/* Command */}
        <MockUpCommand prefix="$" visible={true}>
          <Typewriter words={['name']} onLoopDone={() => setTimeout(() => setVisible([true, false, false]), 500)}/>
        </MockUpCommand>
        {/* prompt */}
        <MockUpCommand prefix=">" visible={visible[0]}>Alliana</MockUpCommand>

        <MockUpCommand prefix="$" visible={visible[0]}>
          <Typewriter words={['language']} onLoopDone={() => setTimeout(() => setVisible([true, true, false]), 500)} />
        </MockUpCommand>
        <MockUpCommand prefix=">" visible={visible[1]}>
          [<i className="devicon-typescript-plain" />, <i className="devicon-python-plain" />]
        </MockUpCommand>

        <MockUpCommand prefix="$" visible={visible[1]}>
          <Typewriter words={['framework']} onLoopDone={() => setTimeout(() => setVisible([true, true, true]), 500)} />
        </MockUpCommand>
        <MockUpCommand prefix=">" visible={visible[2]}>
          [<i className="devicon-nextjs-plain" />, <i className="devicon-react-plain" />, <i className="devicon-discordjs-plain" />]
        </MockUpCommand>
      </MockUpWindow>

      <Footer />
    </div>
  )
}

export default Home
