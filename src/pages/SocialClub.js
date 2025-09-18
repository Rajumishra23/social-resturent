import React from "react";

const SocialClub = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Top Section with Orange Background */}
      <div className="bg-orange-500 bg-cover bg-center mt-20">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-16 py-16 text-white">
    {/* Left - Big Heading */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        THE <br />
        SOCIAL <br />
        CLUB
      </h1>
    </div>

    {/* Right - Subtext */}
    <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold">
        Eat. Drink. Reward. Repeat.
      </h2>
      <p className="mt-6 text-lg leading-relaxed">
        We know you love hanging out at SOCIAL – so why not get rewarded
        for it? Welcome to the SOCIAL Club, our all-new loyalty program!
      </p>
    </div>
  </div>
</div>


      {/* ✅ Black Tabs Section */}
      <div className="bg-black text-center border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-10 py-4 text-white font-semibold text-sm md:text-base">
          <a href="#tiers" className="hover:text-orange-400">
            LOYALTY TIERS
          </a>
          <a href="#rewards" className="hover:text-orange-400">
            BENEFITS & REWARDS
          </a>
          <a href="#faqs" className="hover:text-orange-400">
            FAQS
          </a>
          <a href="#terms" className="hover:text-orange-400">
            TERMS & CONDITIONS
          </a>
        </div>
      </div>

      {/* ✅ Loyalty Tiers Intro Section */}
      <div
        id="tiers"
        className="px-6 md:px-20 py-16 bg-gray-900 text-center space-y-12"
      >
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          You now get rewarded every time you hangout at SOCIAL. Redeem them on
          your favourite <span className="text-orange-400">#eats</span>,{" "}
          <span className="text-orange-400">#drnks</span> or{" "}
          <span className="text-orange-400">#community</span> events. Get access
          to exclusive discounts and benefits, as you level up in the program.
        </p>

        {/* Tiers (Text Style) */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* Tier 1 */}
          <div className="text-center">
            <p className="mb-2 font-bold">TIER 1</p>
            <div className="text-4xl font-extrabold">
              {"["} <span className="text-orange-500">INSIDER</span> {"]"}
            </div>
          </div>

          {/* Tier 2 */}
          <div className="text-center">
            <p className="mb-2 font-bold">TIER 2</p>
            <div className="text-4xl font-extrabold">
              {"["} <span className="text-orange-500">VIP</span> {"]"}
            </div>
          </div>

          {/* Tier 3 */}
          <div className="text-center">
            <p className="mb-2 font-bold">TIER 3</p>
            <div className="text-4xl font-extrabold">
              {"["} <span className="text-orange-500">VVIP</span> {"]"}
            </div>
          </div>

          {/* Tier 4 */}
          <div className="text-center">
            <p className="mb-2 font-bold">TIER 4</p>
            <div className="text-4xl font-extrabold">
              {"["} <span className="text-orange-500">ALL ACCESS</span> {"]"}
            </div>
          </div>
        </div>

        {/* Info Paragraphs */}
        <div className="space-y-6 max-w-4xl mx-auto text-base md:text-lg">
          <p>
            Every time you dine-in from Social you are eligible for discounts
            and benefits based on your Tier level – Insider, VIP Member, VVIP
            Member and All Access.
          </p>
          <p>
            You will be enrolled into the program as an Insider, and get
            upgraded once your spends exceed the defined brackets.
          </p>
          <p>
            As you level up, you’ll have access to exclusive benefits and
            discounts!
          </p>
        </div>
      </div>

      {/* ✅ Loyalty Tier Cards */}
      <div className="px-6 md:px-20 py-16 bg-black text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          LOYALTY TIERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tier 1 */}
          <div className="border border-orange-500">
            <div className="bg-orange-600 py-3 font-bold uppercase">
              Tier 1: Insider
            </div>
            <div className="bg-black p-6 space-y-4 text-sm">
              <p>
                Required Monthly Average Frequency:{" "}
                <span className="text-orange-400">1 - 2</span>
              </p>
              <p>
                Required Monthly Average Spend:{" "}
                <span className="text-orange-400">INR 1 - 4,999</span>
              </p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="border border-orange-500">
            <div className="bg-orange-600 py-3 font-bold uppercase">
              Tier 2: VIP Member
            </div>
            <div className="bg-black p-6 space-y-4 text-sm">
              <p>
                Required Monthly Average Frequency:{" "}
                <span className="text-orange-400">3 - 4</span>
              </p>
              <p>
                Required Monthly Average Spend:{" "}
                <span className="text-orange-400">INR 5,000 - 19,999</span>
              </p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="border border-orange-500">
            <div className="bg-orange-600 py-3 font-bold uppercase">
              Tier 3: VVIP Member
            </div>
            <div className="bg-black p-6 space-y-4 text-sm">
              <p>
                Required Monthly Average Frequency:{" "}
                <span className="text-orange-400">5 - 8</span>
              </p>
              <p>
                Required Monthly Average Spend:{" "}
                <span className="text-orange-400">
                  INR 20,000 - 1,00,000
                </span>
              </p>
            </div>
          </div>

          {/* Tier 4 */}
          <div className="border border-orange-500">
            <div className="bg-orange-600 py-3 font-bold uppercase">
              Tier 4: All Access
            </div>
            <div className="bg-black p-6 space-y-4 text-sm">
              <p>
                Required Monthly Average Frequency:{" "}
                <span className="text-orange-400">9 and above</span>
              </p>
              <p>
                Required Monthly Average Spend:{" "}
                <span className="text-orange-400">Above INR 1,00,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Benefits & Rewards Section */}
<div
  id="rewards"
  className="px-6 md:px-20 py-16 bg-gray-900 text-center space-y-12"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-white">
    BENEFITS & REWARDS
  </h2>

  {/* Top Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    <button className="bg-orange-600 text-white px-4 py-2 rounded font-semibold">
      DINE-IN
    </button>
    <button className="bg-black text-white px-4 py-2 rounded font-semibold border border-gray-700">
      SPENDS MILESTONES
    </button>
    <button className="bg-black text-white px-4 py-2 rounded font-semibold border border-gray-700">
      VISIT MILESTONES
    </button>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-700 text-sm">
      <thead className="bg-orange-600 text-white">
        <tr>
          <th className="px-4 py-2 border border-gray-700">Benefit</th>
          <th className="px-4 py-2 border border-gray-700">Insider</th>
          <th className="px-4 py-2 border border-gray-700">VIP</th>
          <th className="px-4 py-2 border border-gray-700">VVIP</th>
          <th className="px-4 py-2 border border-gray-700">All Access</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-black">
          <td className="px-4 py-3 border border-gray-700">
            Flat discount on bill (via coupon)
          </td>
          <td className="px-4 py-3 border border-gray-700">10% (MOV 1500)</td>
          <td className="px-4 py-3 border border-gray-700">Flat 15%</td>
          <td className="px-4 py-3 border border-gray-700">Flat 20%</td>
          <td className="px-4 py-3 border border-gray-700">Flat 25%</td>
        </tr>
        <tr>
          <td className="px-4 py-3 border border-gray-700">Physical Card</td>
          <td className="px-4 py-3 border border-gray-700">N</td>
          <td className="px-4 py-3 border border-gray-700">N</td>
          <td className="px-4 py-3 border border-gray-700">Y</td>
          <td className="px-4 py-3 border border-gray-700">Y</td>
        </tr>
        <tr className="bg-black">
          <td className="px-4 py-3 border border-gray-700">
            Physical Card Dispatch
          </td>
          <td className="px-4 py-3 border border-gray-700">NA</td>
          <td className="px-4 py-3 border border-gray-700">NA</td>
          <td className="px-4 py-3 border border-gray-700">
            Will be sent via post
          </td>
          <td className="px-4 py-3 border border-gray-700">
            Need to provide your details to us, we’ll reach out to you
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

     {/* ✅ FAQs Section */}
<div
  id="faqs"
  className="px-6 md:px-20 py-16 bg-black text-center space-y-12"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-white">
    FAQS
  </h2>

  <div className="max-w-3xl mx-auto space-y-6 text-left">
    {/* Q1 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        How can I Sign Up?
      </h3>
      <p className="text-gray-300 mt-2">
        You are automatically enrolled as an Insider when you start dining with us.
      </p>
    </div>

    {/* Q2 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        How many tiers are there in The Social Club?
      </h3>
      <p className="text-gray-300 mt-2">
        There are four tiers – Insider, VIP Member, VVIP Member, and All Access.
      </p>
    </div>

    {/* Q3 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        How to maintain ALL ACCESS status?
      </h3>
      <p className="text-gray-300 mt-2">
        Maintain the required monthly average spends and visits to keep your All Access tier.
      </p>
    </div>

    {/* Q4 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        Where can I see my rewards?
      </h3>
      <p className="text-gray-300 mt-2">
        You can view your rewards in your Social Club account dashboard.
      </p>
    </div>

    {/* Q5 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        When do my coupon rewards get added to my account?
      </h3>
      <p className="text-gray-300 mt-2">
        Coupon rewards are added within 24 hours of your eligible transaction.
      </p>
    </div>

    {/* Q6 */}
    <div className="border-b border-gray-800 pb-4">
      <h3 className="font-bold text-lg text-orange-400">
        Is there a monthly/yearly membership fee to join The Social Club?
      </h3>
      <p className="text-gray-300 mt-2">
        No, joining The Social Club is free of cost.
      </p>
    </div>

    {/* Q7 */}
    <div>
      <h3 className="font-bold text-lg text-orange-400">
        I'm already an existing Social customer. How do I know which Tier I'm in?
      </h3>
      <p className="text-gray-300 mt-2">
        Your current tier is visible in your Social Club account profile.
      </p>
    </div>
  </div>
</div>

      {/* ✅ Terms & Conditions Section */}
      <div id="terms" className="px-6 md:px-20 py-16 bg-black text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">TERMS & CONDITIONS</h2>
        <div className="max-w-4xl mx-auto text-left space-y-4 text-white font-bold">
          <p>1. Membership is free and automatic upon your first dine-in.</p>
          <p>2. Tier upgrades are calculated monthly based on average spends.</p>
          <p>3. Benefits are subject to availability and may change without notice.</p>
          <p>4. SOCIAL reserves the right to modify or cancel the program at any time.</p>
          <p>5. SOCIAL reserves the right to modify or cancel the program at any time.</p>
          <p>6.To redeem your coupons, visit your neighbourhood SOCIAL. Scan the QR code on your table,
             login with your mobile number and redeem your available coupons</p>
          <p>7.Some offers can only be redeemed offline, please request the server for this and they will do the required</p>
          <p>8.The birthday offer is only available if you have previously shared your date of birth with us.
             We regularly send out profile completion forms to update your social profile. Once you share your details with us,
             the birthday offer will get unlocked and available to redeem via the QR code across all Social outlets</p>
          <p>9.The validity of coupons accumulated in any calendar year will vary for each coupon</p>
          <p>10.Only one coupon can be redeemed in one order</p>
          <p>11.Milestone offers are limited to one redemption per month.</p>
        </div>
      </div>
    </div>
  );
};

export default SocialClub;
