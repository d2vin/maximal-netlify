import React, { useState, useCallback } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' },
  });

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    message: '',
    file: '',
  });

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: '' },
      });
    },
    []
  );

  const handleServerResponse = useCallback((ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fullName: '',
        email: '',
        message: '',
        file: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus((prevStatus) => ({
        ...prevStatus,
        submitting: true,
      }));
      axios({
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, 'Message sent!');
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-6">Contact</h2>
      <p className="px-10 pt-4 text-center text-lg font-medium">Maximal</p>
      <p className="text-center mt-4">
        1178 Broadway, 3rd Floor, New York, NY 10001, United States
      </p>
      <p className="text-center mt-2">Telephone: +1 917 387 4309</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        {status.info.error && (
          <div
            className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            <strong className="font-bold">Error</strong>:{' '}
            <span className="block sm:inline-table">{status.info.msg}</span>
          </div>
        )}
        {status.submitted ? (
          <div
            className="relative rounded px-4 py-3 text-center text-xl font-semibold"
            role="alert"
          >
            Thanks for reaching out!
            <br />
            We&apos;ll be sure to get back to you shortly.
          </div>
        ) : (
          <>
            <input
              id="fullName"
              name="fullName"
              required
              maxLength={128}
              type="text"
              placeholder="Your name"
              className="rounded-lg border-2 border-neutral-100 px-8 py-2 outline-none"
              onChange={handleOnChange}
              value={inputs.fullName}
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={128}
              placeholder="Your email"
              className="rounded-lg border-2 border-neutral-100 px-8 py-2 outline-none"
              onChange={handleOnChange}
              value={inputs.email}
            />
            <textarea
              name="message"
              id="message"
              required
              maxLength={1048576}
              placeholder="Additional information"
              className="min-h-[8em] rounded-lg border-2 border-neutral-100 px-8 py-2 outline-none"
              onChange={handleOnChange}
              value={inputs.message}
            />
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="rounded-3xl border-2 border-neutral-100 px-8 py-2 hover:bg-neutral-400 hover:text-white"
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Sending...'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Contact;
