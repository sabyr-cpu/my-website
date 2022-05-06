import { useEffect, useState } from 'react'

function AppearingText({ text, delay, time }) {
  const [textnow, setTextnow] = useState('')
  const [_textnow, _setTextnow] = useState('')

  // useEffect(() => {
  //   setTimeout(async () => {
  //     setTextnow(_textnow + text[_textnow.length])
  //   }, delay)
  // }, [_textnow, delay, text, time])

  function _() {
    setTimeout(() => {
      const interval = setInterval(addLetter, time / text.length)
      function addLetter() {
        if (text[_textnow.length] !== undefined) {
          setTextnow(textnow + text[textnow.length])
        } else {
          clearInterval(interval)
        }
      }
    })
  }

  useEffect(_, [])

  return (
    <>{textnow}</>
  )
}

export default AppearingText