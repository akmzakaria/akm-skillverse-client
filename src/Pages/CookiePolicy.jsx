const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: February 10, 2026</p>

      <div className="prose lg:prose-lg space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences and
            understanding how you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Essential Cookies</h3>
              <p className="text-gray-700">
                These cookies are necessary for the website to function properly. They enable core
                functionality such as security, network management, and accessibility.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Performance Cookies</h3>
              <p className="text-gray-700">
                These cookies help us understand how visitors interact with our website by
                collecting and reporting information anonymously.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Functionality Cookies</h3>
              <p className="text-gray-700">
                These cookies allow the website to remember choices you make and provide enhanced
                features and personalization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Targeting Cookies</h3>
              <p className="text-gray-700">
                These cookies may be set through our site by our advertising partners to build a
                profile of your interests and show you relevant content.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
            <li>Delete cookies: You can delete cookies already stored on your device</li>
            <li>Third-party tools: Use privacy tools to manage tracking cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about our use of cookies, please contact us at
            privacy@akmskillverse.com
          </p>
        </section>
      </div>
    </div>
  )
}

export default CookiePolicy
