const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: February 10, 2026</p>

      <div className="prose lg:prose-lg space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information you provide directly to us, including your name, email address,
            and course enrollment data. We also collect information about your usage of our platform
            to improve your learning experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your course enrollments and payments</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Personalize your learning experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal information. We may share your information with service
            providers who assist us in operating our platform, conducting our business, or serving
            our users, as long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our platform and
            hold certain information. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at
            privacy@akmskillverse.com
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
