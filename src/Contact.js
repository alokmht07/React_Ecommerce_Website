import styled from "styled-components";

const Contact = () => {
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

  return <Wrapper>
    <h2 className="common-heading">Contact</h2>

    <iframe title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6652830517423!2d86.10027257465177!3d22.8148633240488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5dbe98a5ec9%3A0xc689fb1d645f66b1!2sLal%20building!5e0!3m2!1sen!2sin!4v1702464648240!5m2!1sen!2sin" 
      width="100%" 
      height="400" 
      style={{border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xqkvrorg" method="post" className="contact-inputs">
          <input type="text" placeholder="username" name="username" autoComplete="off" required />

          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />

          <textarea name="Message" placeholder="Enter your message" autoComplete="off" required cols="30" rows="10"></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
