import { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icon';
import { contact } from '../data/contact';
import { profile } from '../data/profile';
import '../assets/css/sections/Contact.css';

const EMPTY_FORM = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Add your name so I know who I am replying to.';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'That email address does not look right.';
  if (message.trim().length < 10) errors.message = 'Tell me a little more — 10 characters minimum.';
  return errors;
}

const details = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { label: 'Based in', value: profile.location },
];

function Field({ id, label, error, multiline = false, ...inputProps }) {
  const Control = multiline ? 'textarea' : 'input';
  const errorId = `${id}-error`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Control id={id} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} {...inputProps} />
      {error && (
        <span className="field__error" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading lead="Start a" accent="conversation" />

        <div className="contact__grid">
          <div className="contact__aside reveal">
            <span className="contact__status">
              <i aria-hidden="true" />
              {contact.status}
            </span>
            <p className="contact__lead">{contact.lead}</p>
            <p className="contact__sub">{contact.sub}</p>

            <ul className="contact__details">
              {details.map(({ label, value, href, external }) => (
                <li key={label}>
                  {href ? (
                    <a
                      className="contact__row"
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                    >
                      <span className="contact__label">{label}</span>
                      <span className="contact__value">{value}</span>
                      <Icon name="arrowUpRight" className="contact__arrow" />
                    </a>
                  ) : (
                    <div className="contact__row contact__row--static">
                      <span className="contact__label">{label}</span>
                      <span className="contact__value">{value}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
            <Field id="c-name" label="Name" type="text" autoComplete="name" placeholder="Your name" value={form.name} onChange={update('name')} error={errors.name} />
            <Field id="c-email" label="Email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={update('email')} error={errors.email} />
            <Field id="c-message" label="Message" multiline rows={5} placeholder="What are you building?" value={form.message} onChange={update('message')} error={errors.message} />

            <button type="submit" className="btn btn--primary contact__submit">
              Send message
              <Icon name="arrowRight" strokeWidth={1.9} />
            </button>

            {sent && (
              <p className="contact__sent" role="status">
                Your mail app should be open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
