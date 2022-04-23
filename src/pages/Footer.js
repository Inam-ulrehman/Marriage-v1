import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>All copyright &copy; Reserved by Inam 2022.</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 40px;
  background-color: var(--primary-2);
  position: sticky;
  bottom: 0;
  text-align: center;
`

export default Footer
