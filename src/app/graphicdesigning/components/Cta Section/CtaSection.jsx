import { Phone} from 'lucide-react';

const CtaSection = () => {
  return (
    <div className="bg-[#f97316]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Phone Number Section */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-full">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <p className="text-white opacity-90">Book Your Schedule</p>
                <a 
                  href="tel:+91 83208 00556" 
                  className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
                >
                  +91 83208 00556
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <p className="text-white text-center lg:text-left">
                From concept to print — we bring your brand vision to life
              </p>
              <a 
                href="/graphicdesigning/contact" 
                className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors duration-300 whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CtaSection