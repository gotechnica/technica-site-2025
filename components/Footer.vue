<template>
    <div class="footer-container">
          <img class="footer-img" src="../static/footer.png" style="width: 100vw"/>
          <div class="footer-text">
              <div class="footer-info">
                  <p style="font-size: 25px">Contact Us</p>
                  <p style="font-size: 18px">Reach out to us at <a href="mailto:hello@gotechnica.org">hello@gotechnica.org</a></p>
              </div>
  
              <div class="mb-3 mx-10 socials">
                <div class="social-container">
                    <a href="https://discord.gg/4dS8nB4WYg" target="_blank">
                    <img
                        class="icon"
                        style="background-color: #8CE8EF"
                        src="../static/w_discord.svg"
                    />
                    </a>
                </div>
                <div class="social-container">
                    <a href="https://www.facebook.com/gotechnica/" target="_blank">
                    <img 
                        class="icon"
                        style="background-color: #3C71C0"
                        src="../static/w_facebook.svg"
                    />
                    </a>
                </div>
                <div class="social-container">
                    <a href="https://twitter.com/gotechnica" target="_blank">
                    <img
                        class="icon"
                        style="background-color: #6C65A8"
                        src="../static/w_twitter_x_white.svg"
                    />
                    </a>
                </div>
                <div class="social-container">
                    <a
                    href="https://www.youtube.com/channel/UC-Wo4UqhGUKQEp4o-51VMIw/"
                    target="_blank"
                    >
                    <img
                        class="icon"
                        style="background-color: #9169A8"
                        src="../static/w_youtube.svg"
                    />
                    </a>
                </div>
  
                <div class="social-container">
                    <a href="https://www.instagram.com/gotechnica/" target="_blank">
                    <img
                        class="icon"
                        style="background-color: #C695BB"
                        src="../static/w_instagram.svg"
                    />
                    </a>
                </div>
                <div class="social-container">
                    <a href="https://www.tiktok.com/@gotechnica_" target="_blank">
                    <img
                        class="icon"
                        style="background-color: #EF8FB3"
                        src="../static/w_tiktok.svg"
                    />
                    </a>
                </div>
                <div class="social-container">
                    <a
                    href="https://www.linkedin.com/company/gotechnica"
                    target="_blank"
                    >
                    <img
                        class="icon"
                        style="background-color: #F27AAA"
                        src="../static/w_linkedin.svg"
                    />
                    </a>
                </div>
              </div>
              <p>
              <a href="https://gotechnica.org/sponsor" target="_blank">
                  Sponsor
              </a> |
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">
                  MLH Code of Conduct
              </a> |
              <a href="https://www.paypal.com/donate/?hosted_button_id=83S778CAUXCLS" target="_blank"
                  > Donate
              </a>
              </p>
              <p>Copyright &copy; 2024 | Technica</p>
          </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'FooterItem',
    components: {},
  };
  </script>
  
  <style lang="scss" scoped>
  
  a {
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
    color: white;
  }
  
  #footer {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .footer-container {
    position: absolute;
    margin-top: 0rem; // Changed from 10rem to remove space between FAQ and footer
    line-height: 0.5;
  }
  
  .footer-img {
    position: relative;
    bottom: 0;
    z-index: -1;
  }
  
  .footer-text {
    color: white;
    position: absolute;
    text-align: center;
    inset: 65% 0 0 0;
  }
  
  .socials {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  
  .social-container {
    margin-right: 0.5rem;
    padding-top: 5px;
    padding-bottom: 5px;
    z-index: 2;
  }
  
  .icon {
      border-radius: 50%;
      padding: 0.5rem;
      height: 3rem;
      width: 3rem;
  
      img {
        max-height: 2rem;
      }
  
      
    }
  
  @media screen and (max-width: 600px) {
    .icon {
      height: 2rem;
      width: 2rem;
    }
    
    .footer-text p {
      font-size: 14px !important;
    }
  
    .footer-text {
      inset: 45% 0 0 0;
    }
  }
  </style>
  