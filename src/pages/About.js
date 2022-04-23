import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div className='hero-image2'>
        <div className='content'>
          <h1 className='title'>Angra family</h1>
          <p className='title '>
            We are very happy to announce this news with every one our daughter
            is getting married......
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--primary-2);
  .content {
    position: fixed;
    bottom: 4rem;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 2px;
    h1 {
      color: var(--primary-3);
    }
    p {
      color: var(--primary-3);
      padding-bottom: 8rem;
    }
  }
`
export default About
