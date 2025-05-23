import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text lg:text-5xl">Privacy Notice</h2>

        <section className="space-y-4">
          <p className="text-sm">
            <strong className='bg-gradient-to-r from-rose-600 to-indigo-600 text-transparent bg-clip-text '>Softmore It Solutions Pvt Ltd</strong> ("Company," "we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Visiting our website at{' '}
              <a href="http://www.softmoreit.com" className="text-blue-600 hover:underline">
                www.softmoreit.com
              </a>
            </li>
            <li>Engaging with us in related ways, including any sales, marketing, or events</li>
          </ul>
          <p>
            Questions or concerns? Contact us at{' '}
            <a href="mailto:Support@softmoreit.com" className="text-blue-600 hover:underline">
              Support@softmoreit.com
            </a>
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-indigo-600 text-transparent bg-clip-text">Summary of Key Points</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We collect personal information based on how you interact with us and our Services.</li>
            <li>We do not process sensitive personal information or receive info from third parties.</li>
            <li>We use your information for communication, fraud prevention, legal compliance, and improving our Services.</li>
            <li>Information may be shared in certain cases and with specific third parties.</li>
            <li>We take reasonable steps to protect your data, but no system is 100% secure.</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">What Information Do We Collect?</h3>
          <p>We collect the personal information you voluntarily provide such as:</p>
          <ul className="list-disc pl-6">
            <li>Names, phone numbers, contact preferences</li>
            <li>Billing addresses, debit/credit card numbers</li>
          </ul>
          <p>Automatically collected information may include IP addresses, device/browser data, usage activity, etc.</p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">How Do We Process Your Information?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>To manage orders, returns, and payments</li>
            <li>To send marketing and promotional content (with opt-out available)</li>
            <li>To publish testimonials (with consent)</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-600 to-indigo-600 text-transparent bg-clip-text">Sharing Your Information</h3>
          <ul className="list-disc pl-6">
            <li><strong>Business Transfers:</strong> Shared during mergers or acquisitions</li>
            <li><strong>Business Partners:</strong> Shared for certain offerings or promotions</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text">Your Privacy Rights</h3>
          <p>You can review, modify, or delete your information. Contact us to exercise your rights or opt out of marketing emails at any time.</p>
        </section>

        <p className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Softmore It Solutions Pvt Ltd. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}