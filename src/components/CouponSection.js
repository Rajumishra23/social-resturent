import React from "react";

const CouponSection = () => {
  const code = "SOCIAL20";

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Coupon copied!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Coupon copied!");
    }
  };

  return (
    <section className="w-full">
      {/* Top black banner (like your reference) */}
      <div className="bg-black text-center py-8 px-4">
        <p className="text-orange-500 tracking-wider text-sm md:text-base font-semibold">
          INDIA&apos;S FAVOURITE PLACE TO CHILL
        </p>
        <h2 className="text-white text-xl md:text-2xl font-extrabold mt-2">
          CAFÉ <span className="text-white/60">|</span> COLLABORATIVE WORKSPACE{" "}
          <span className="text-white/60">|</span> BAR
        </h2>
      </div>
    </section>
  );
};

export default CouponSection;