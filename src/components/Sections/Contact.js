import React from "react"

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className=" mb-5">
              Ready to start your next project with us? Give us a call, an
              email, or simply fill out the form below and we will be in touch
              as soon as possible!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
            <div>+1 555-555-5555</div>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <a className="d-block" href="mailto:contact@yourwebsite.com">
              contact@yourwebsite.com
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto my-5">
            <form
              action="https://formspree.io/jeffau13@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Message">Message</label>
                <textarea
                  name="Message"
                  id="Message"
                  className="form-control"
                  rows="3"
                  placeholder=""
                  required
                />
              </div>
              <div className="row justify-content-center text-center">
                <button type="submit" className="btn btn-primary btn-xl">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
