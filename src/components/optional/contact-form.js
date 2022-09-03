import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  AuthorIcon,
  EnterEmailIcon,
  EnterSubjectIcon,
  EnterMessageIcon,
  SendMailIcon,
  SuccessIcon,
  // ErrorIcon,
} from '../core/icons.js';

function ContactForm() {
  const [state, handleSubmit] = useForm('mdogqyrk'); // Go to Formspree.io for ID #
  if (state.succeeded) {
    return (
      <p className='success-message'>
        <SuccessIcon /> Thanks for the message! We'll get right back at you.
      </p>
    );
  }
  return (
    <section className='contact-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <AuthorIcon /> Name
          <input type='text' name='name' id='name' />
        </label>
        <label htmlFor='email'>
          <EnterEmailIcon /> Email
          <input type='email' name='email' id='email' />
        </label>
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='subject'>
          <EnterSubjectIcon /> Subject
          <input type='text' name='subject' id='subject' />
        </label>
        <label htmlFor='message'>
          <EnterMessageIcon />
          Message
          <textarea name='message' id='message' rows='5' />
        </label>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button aria-label='submit' type='reset'>
          Clear
        </button>
        <button aria-label='submit' type='submit' disabled={state.submitting}>
          <SendMailIcon />
          Submit
        </button>
      </form>
    </section>
  );
}

function ContactFormApp() {
  return <ContactForm />;
}

export default ContactFormApp;
