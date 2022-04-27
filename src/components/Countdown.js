import Countdown from 'react-countdown'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <div className='container'>
        <h1>Time Count Down</h1>
        <div className='countdown'>
          <Countdown date={Date.now() + 406904000} />
        </div>
        <div className='time-container'>
          {/* <span className='time'>Total</span> */}
          <span className='days'>Days</span>
          <span className='hours'>hour </span>
          <span className='minutes'>m</span>
          <span className='seconds'>Seconds</span>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--primary-2);
  position: relative;
  display: grid;
  place-items: center;
  color: var(--primary-8);

  .countdown {
    letter-spacing: 10px;
    width: 255px;
    background-color: var(--primary-5);
    margin-left: 28px;
    color: var(--primary-1);
  }
  .time-container {
    position: absolute;
    bottom: 0px;
  }
  .time {
    background-color: var(--primary-5);

    color: var(--primary-1);
  }
  .day {
    background-color: var(--primary-5);
  }
  .days {
    color: var(--primary-1);
    margin-left: 3.9rem;
    background-color: var(--primary-5);
    width: 10px;
  }
  .hours {
    margin-left: 1rem;
    background-color: var(--primary-5);
    color: var(--primary-1);
  }
  .minutes {
    margin-left: 0.9rem;
    background-color: var(--primary-5);
    color: var(--primary-1);
  }
  .seconds {
    margin-left: 2.8rem;
    background-color: var(--primary-5);
    color: var(--primary-1);
  }
`
export default App
