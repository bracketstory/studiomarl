import { useState } from 'react';

const currentYear = new Date().getFullYear();

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    msg: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const rules = {
    name: (v) => v.trim().length > 1 || 'Enter your name.',
    email: (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || 'Enter a valid email address.',
    type: (v) => !!v || 'Choose a project type.',
    msg: (v) => v.trim().length >= 20 || 'Tell us a little more (at least 20 characters).',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error if field becomes valid
    if (rules[name] && rules[name](value) === true) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let firstError = null;

    for (const k in rules) {
      const result = rules[k](formData[k]);
      if (result !== true) {
        newErrors[k] = result;
        if (!firstError) firstError = k;
      }
    }

    setErrors(newErrors);

    if (firstError) {
      setStatus('Please fix the highlighted fields.');
      return;
    }

    const body = encodeURIComponent(
      `Name: ${formData.name}\nProject type: ${formData.type}\n\n${formData.msg}`
    );
    setStatus(
      <>
        Your details are valid, but this form is not connected to a backend yet, so nothing has been
        sent.{' '}
        <a
          href={`mailto:hello@studiomarl.example?subject=Project%20enquiry&body=${body}`}
        >
          Send it by email instead
        </a>
        .
      </>
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 className="contact-title rv">
          Have a space
          <br />
          <i>in mind?</i>
        </h2>
        <div className="grid rv">
          <div>
            <a className="mail" href="mailto:hello@studiomarl.example">
              hello@studiomarl.example
            </a>
            <address>
              <span>Based in Bengaluru, working across India and Europe.</span>
              <span>
                <a href="#" rel="noopener">
                  Instagram
                </a>{' '}
                &nbsp;{' '}
                <a href="#" rel="noopener">
                  Behance
                </a>{' '}
                &nbsp;{' '}
                <a href="#" rel="noopener">
                  Pinterest
                </a>
              </span>
            </address>
          </div>
          <form onSubmit={handleSubmit} noValidate aria-describedby="status">
            <div className="row2">
              <div className="f">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  required
                />
                <span className="err" id="e-name">
                  {errors.name}
                </span>
              </div>
              <div className="f">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  required
                />
                <span className="err" id="e-email">
                  {errors.email}
                </span>
              </div>
            </div>
            <div className="f">
              <label htmlFor="type">Project type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                aria-invalid={!!errors.type}
                required
              >
                <option value="">Choose one</option>
                <option>Residence</option>
                <option>Hospitality</option>
                <option>Commercial</option>
                <option>Consultation</option>
              </select>
              <span className="err" id="e-type">
                {errors.type}
              </span>
            </div>
            <div className="f">
              <label htmlFor="msg">About the space</label>
              <textarea
                id="msg"
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                aria-invalid={!!errors.msg}
                required
                minLength="20"
              />
              <span className="err" id="e-msg">
                {errors.msg}
              </span>
            </div>
            <button className="send" type="submit">
              Send enquiry
            </button>
            <p id="status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
        <footer className="rv">
          <span>Studio Marl</span>
          <span>
            © <span id="yr">{currentYear}</span> Studio Marl. All rights reserved.
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
