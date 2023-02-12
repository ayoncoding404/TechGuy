import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
.container {
  margin-top: 6rem;
  .contact-form {
    max-width: 50rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

const Contact = () => {
  return (
  <Wrapper>
  <h2 className='common-heading'> Contact Us </h2>
  
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2391992645444!2d90.38340781545197!3d23.738848095133378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c78adbec73%3A0x12b9ec0f1c8e7b03!2sMultiplan%20Center!5e0!3m2!1sen!2sbd!4v1664622737507!5m2!1sen!2sbd" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    <div className='container'>
    <div className='contact-form'>
      <form action="https://formspree.io/f/mjvzrgna" method="POST" className='contact-inputs'>
        <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete='off'
        />

        <input
        type="email"
        placeholder="Email"
        name="Email"
        required
        autoComplete='off'
        />

        <textarea
        name="message"
        cols="30"
        rows ="10"
        required
        autoComplete="off"
        placeholder='Enter your message'/>

       <input type ="submit" value="submit" />

      </form>

    </div>
    </div>


    </Wrapper>
  )
}

export default Contact