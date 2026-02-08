"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!EMAIL_PATTERN.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="bg-[#1a1a1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get in <span className="text-amber-500">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Questions, quotes, or just want to talk metal? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6">
              <h2 className="mb-6 text-xl font-bold text-white">
                Business Information
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-sm text-gray-400">
                      142 Anvil Road, Steel City, PA 15201
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-400">(412) 555-0198</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">
                      info@ironforge.example
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-sm text-gray-400">
                      Monday – Saturday: 7:00 AM – 6:00 PM
                    </p>
                    <p className="text-sm text-gray-400">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex h-48 items-center justify-center rounded-xl border border-[#374151] bg-[#2a2a2a]">
              <div className="text-center">
                <span className="text-4xl">🗺️</span>
                <p className="mt-2 text-sm text-gray-500">
                  Map — 142 Anvil Road, Steel City, PA
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-[#374151] bg-[#2a2a2a] p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="text-5xl">✅</span>
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Message Sent!
                </h2>
                <p className="mt-2 text-gray-400">
                  We&apos;ll get back to you within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "general",
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-lg border border-amber-600 px-6 py-2 text-amber-400 transition-colors hover:bg-amber-600/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="mb-6 text-xl font-bold text-white">
                  Send Us a Message
                </h2>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#374151] bg-[#1a1a1a] px-4 py-2.5 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#374151] bg-[#1a1a1a] px-4 py-2.5 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#374151] bg-[#1a1a1a] px-4 py-2.5 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="(412) 555-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-lg border border-[#374151] bg-[#1a1a1a] px-4 py-2.5 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Forging Project</option>
                      <option value="wholesale">Wholesale Order</option>
                      <option value="repair">Repair & Restoration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-[#374151] bg-[#1a1a1a] px-4 py-2.5 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="Tell us about your project or question..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
