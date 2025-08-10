import React from 'react'

const Blog = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      
      {/* Steps Column */}
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        {[
          {
            title: "STEP 1 — Explore",
            text: "Browse our curated collections featuring the latest trends in streetwear, casual, and premium fashion. Handpicked for every style.",
            svg: (
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            ),
          },
          {
            title: "STEP 2 — Select",
            text: "Choose from a wide range of styles, fits, and colors. Whether it's a statement tee or a classic hoodie, we’ve got you covered.",
            svg: (
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            ),
          },
          {
            title: "STEP 3 — Checkout",
            text: "Add your favorites to the cart and enjoy a seamless, secure checkout. Multiple payment options and express delivery available.",
            svg: (
              <>
                <circle cx="12" cy="5" r="3" />
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
              </>
            ),
          },
          {
            title: "STEP 4 — Track Order",
            text: "Get real-time tracking updates as your order ships. We keep you informed from the warehouse to your wardrobe.",
            svg: (
              <>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </>
            ),
          },
          {
            title: "FINISH — Style Up",
            text: "Unbox your outfits and slay your look. Tag us on socials to get featured. Your style journey starts here!",
            svg: (
              <>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </>
            ),
          },
        ].map((step, idx) => (
          <div className={`flex relative ${idx < 4 ? "pb-12" : ""}`} key={idx}>
            {idx < 4 && (
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
            )}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                {step.svg}
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                {step.title}
              </h2>
              <p className="leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <img
        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
        src="https://dummyimage.com/1200x500"
        alt="step"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default Blog