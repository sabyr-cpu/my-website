import AppearingText from '../common/AppearingText'

function page1() {
  return (
    <>
      <div className="header">Sabyrzhan's personal website</div>
      <div className="center">
        <div className="greeting"><AppearingText text="Hello and welcome" delay={1000} time={5000} /></div>
      </div>
    </>
  )
}

export default page1;