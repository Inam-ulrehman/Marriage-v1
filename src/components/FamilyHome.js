import React from 'react'
import styled from 'styled-components'

const FamilyHome = () => {
  return (
    <Wrapper>
      <h5 className='title'>R.S.V.P</h5>
      <div className='family'>
        <div className='brothers'>
          <h2 className='title'>Brothers</h2>
          <div className='title-underline'></div>
          <ul className='list'>
            <li>Shubham Angra</li>
            <li>Akshat Grover</li>
            <li>Aditya Gulati</li>
            <li>Karan Gulati</li>
            <li>Vinay Kumar and bhabhi Parveen</li>
            <li>Brar Angra</li>
          </ul>
        </div>
        <div className='family-friends'>
          <h2 className='title'>Family and Friends</h2>
          <div className='title-underline d'>
            <div className='names'>
              <ul className='listt'>
                <li className='b'>Deepak and Neeraj Grover</li>
                <li>Rakesh Deepak and Pinky</li>
                <li>Arvind and Meenu Arora</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--primary-2);
  border: 4px solid var(--primary-4);
  height: 410px;
  .family {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .brothers {
    border: 4px solid var(--primary-4);
    height: 365px;
  }
  .family-friends {
    border: 4px solid var(--primary-4);
    height: 365px;
  }
  .list {
    li {
      text-align: center;
    }
  }
  .names {
    margin-top: 1rem;
  }
`
export default FamilyHome
