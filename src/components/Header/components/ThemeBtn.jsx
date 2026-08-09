import React from 'react'
import useTheme from '../../../Contexts/ThemeContext'
import { useState } from 'react'

function ThemeBtn() {

    const {themeState, lightTheme, darkTheme} = useTheme()
    const [isClicked, setIsClicked] = useState(true) //state provides prev


    const onChangeButton = () => { 
        setIsClicked((prev) => !prev)
        isClicked ? darkTheme() : lightTheme();
    }

  return (
    <div >
      {/* Dark Mode Toggle Button */}
            <button onClick={onChangeButton}
              className=" w-9 h-9 rounded-full border border-[#3A2B20]/40 flex items-center justify-center hover:bg-[#3A2B20]/10 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
    </div>
  )
}

export default ThemeBtn
