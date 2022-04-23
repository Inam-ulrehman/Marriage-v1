import React from 'react'
import { useGlobalContext } from '../contex/contextapi'
import styled from 'styled-components'
import FamilyHome from '../components/FamilyHome'
import dia from '../images/dia.png'

const Home = () => {
  const data = useGlobalContext()
  console.log(data)

  return (
    <Wrapper>
      <div className='hero-image'>
        <div className='hero-text'>
          <h3>vivah Ceremony</h3>
          <p>
            Sania Angra <br /> &#38; <br /> Inam Ul Rehman
          </p>
        </div>
      </div>

      <div className='featured'>
        <div className='time'>
          <h2>Time</h2>
          <div className='title-underline'></div>
          <p className='small-text diya '>Tuesday 3rd May 2022 </p>
          <img className='diya-img' src={dia} alt='' />
          <p>Ramayan paath April 30@ 4pm </p>
          <p className='mamoaddress'>18 spachman street Kitchener N2R 0N5</p>
        </div>
        <div className='address'>
          <h2>Address</h2>
          <div className='title-underline'></div>
          <p>Sai Bhakti Dham</p>
          <a
            className='mandar'
            target='_blank'
            rel='noopener noreferrer'
            href='http://saibhaktidham.com/'
          >
            Address
          </a>
          <p>52 Mclntyre pl Unit A, Kitchener, On, N2R1G3</p>
        </div>
      </div>
      <FamilyHome />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 0px;
  .home-page {
    min-height: calc(85vh);
    img {
      width: 100%;

      object-fit: cover;
      height: 85vh;
    }
  }
  text {
    position: absolute;
  }
  .featured {
    background-color: var(--primary-2);
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  .time {
    color: white;

    color: var(--primary-8);
    border: 4px solid var(--primary-4);
  }
  .address {
    color: var(--primary-8);
    border: 4px solid var(--primary-4);
  }
  .diya {
    position: relative;
  }
  .diya-img {
    position: absolute;
    height: 40px;
    left: 20px;
    top: 670px;
  }
  .mandar {
    color: var(--white);
    background-color: var(--primary-7);
    padding: 0.3rem;
    border-radius: var(--borderRadius);
  }
  .mamoaddress {
    margin: 0;
  }
`
export default Home
