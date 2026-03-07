'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { CheckCircleIcon } from '@/components/Icons';
import { getInquiryFormContent } from '@/site-data/site-content';

export default function ContactForm() {
  const locale = useLocale();
  const inquiryFormContent = getInquiryFormContent(locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    productInterest: '',
    productModel: '',
    productSize: '',
    quantity: '',
    application: '',
    message: '',
    honeypot: '',
  });
  const [trackingData, setTrackingData] = useState({
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
    utmTerm: '',
    referrer: '',
    landingPage: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setTrackingData({
        utmSource: params.get('utm_source') || '',
        utmMedium: params.get('utm_medium') || '',
        utmCampaign: params.get('utm_campaign') || '',
        utmContent: params.get('utm_content') || '',
        utmTerm: params.get('utm_term') || '',
        referrer: document.referrer || '',
        landingPage: window.location.pathname,
      });
    } catch {
      // Ignore client-only tracking failures.
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus('submitting');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          phone: formData.phone,
          productInterest: formData.productInterest,
          productModel: formData.productModel,
          productSize: formData.productSize,
          quantity: formData.quantity,
          application: formData.application,
          message: formData.message,
          ...trackingData,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          phone: '',
          productInterest: '',
          productModel: '',
          productSize: '',
          quantity: '',
          application: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <p className="text-green-800 font-medium text-lg">{inquiryFormContent.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 space-y-5">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{inquiryFormContent.title}</h2>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">{inquiryFormContent.error}</div>
      )}

      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{inquiryFormContent.sectionContact}</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.name} *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.email} *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.company}</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.country}</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.phone}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4 border-t border-gray-100 pt-4">
        <legend className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{inquiryFormContent.sectionProduct}</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.productInterest}</label>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
            >
              <option value="">{inquiryFormContent.selectProduct}</option>
              {inquiryFormContent.productOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="productModel" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.productModel}</label>
            <input
              type="text"
              id="productModel"
              name="productModel"
              value={formData.productModel}
              onChange={handleChange}
              placeholder={inquiryFormContent.placeholders.productModel}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="productSize" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.productSize}</label>
            <input
              type="text"
              id="productSize"
              name="productSize"
              value={formData.productSize}
              onChange={handleChange}
              placeholder={inquiryFormContent.placeholders.productSize}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.application}</label>
            <input
              type="text"
              id="application"
              name="application"
              value={formData.application}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.quantity}</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder={inquiryFormContent.placeholders.quantity}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>
      </fieldset>

      <div className="border-t border-gray-100 pt-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{inquiryFormContent.fields.message}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          placeholder={inquiryFormContent.placeholders.message}
        />
      </div>

      <p className="text-xs text-gray-500">{inquiryFormContent.privacyNote}</p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-800 text-white py-3 rounded font-semibold hover:bg-blue-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? inquiryFormContent.submitting : inquiryFormContent.submit}
      </button>
    </form>
  );
}
