import { Link } from 'react-router'

const BuyCourses = () => {
  const pricingPlans = [
    {
      name: 'Individual',
      price: 'Free',
      description: 'Perfect for individual learners',
      features: [
        'Access to free courses',
        'Basic course materials',
        'Community support',
        'Course completion certificates',
      ],
      cta: 'Get Started',
      link: '/register',
    },
    {
      name: 'Premium',
      price: '$29/month',
      description: 'Best for serious learners',
      features: [
        'Access to all courses',
        'Premium course materials',
        'Priority support',
        'Verified certificates',
        'Downloadable resources',
        'Live Q&A sessions',
      ],
      cta: 'Start Premium',
      link: '/allcourses',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Everything in Premium',
        'Custom learning paths',
        'Dedicated account manager',
        'Advanced analytics',
        'Volume discounts',
        'API access',
      ],
      cta: 'Contact Sales',
      link: '/contact-sales',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Choose Your Plan</h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Select the perfect plan for your learning journey. All plans include access to our expert
        instructors and community.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`card bg-base-100 shadow-xl ${plan.popular ? 'ring-2 ring-secondary' : ''}`}
          >
            {plan.popular && (
              <div className="badge badge-secondary absolute top-4 right-4">Most Popular</div>
            )}
            <div className="card-body">
              <h2 className="card-title text-2xl">{plan.name}</h2>
              <p className="text-3xl font-bold my-4">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={plan.link} className="btn btn-secondary w-full">
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-base-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
            <p className="text-gray-700">
              Yes, you can upgrade or downgrade your plan at any time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a refund policy?</h3>
            <p className="text-gray-700">
              We offer a 30-day money-back guarantee on all premium plans.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Do you offer student discounts?</h3>
            <p className="text-gray-700">
              Yes! Students get 50% off on premium plans with valid student ID.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyCourses
