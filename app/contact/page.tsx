"use client";
import Slide from "@/components/Slide";
import { MapPin, Phone, Mail, Clock, Contact } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex justify-center mt-2 mb-4">
            <Contact className="w-12 h-12 text-primary" />
          </div>
          <Slide>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
            Contact Us
          </h1>
          </Slide>
          <Slide delay={0.2}>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Get in touch with us for any inquiries or collaboration
            opportunities.
          </p>
          </Slide>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {/* Contact Information */}
            <div>
              <Slide>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Office Address
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                23, Kayasthapara 3rd Lane, P.O.Haltu , Kolkata - 700078, India.
              </p>
              </Slide>
            </div>

            <div>
              <Slide>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Info
                </h2>
              </div>
              <div className="space-y-2 text-lg text-gray-600">
                <p>Subrat K Das - +91 9874883393</p>
                <p>Office - +91 33 24840118</p>
              </div>
              </Slide>
            </div>

            <div>
              <Slide>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">
                  E-Mail Address
                </h2>
              </div>
              <p className="text-lg text-gray-600">info@silkroute.ind.in</p>
              </Slide>
            </div>

            <div>
              <Slide>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Time Table</h2>
              </div>
              </Slide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { day: "Monday", hours: "10:00am - 19:00pm" },
                      { day: "Tuesday", hours: "10:00am - 19:00pm" },
                      { day: "Wednesday", hours: "10:00am - 19:00pm" },
                      { day: "Thursday", hours: "10:00am - 19:00pm" },
                      { day: "Friday", hours: "10:00am - 19:00pm" },
                      { day: "Saturday", hours: "10:00am - 19:00pm" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <tr
                        key={schedule.day}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {schedule.day}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {schedule.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Map */}
          <Slide delay={0.3}>
          <div className="h-full">
            <div className="bg-white rounded-lg shadow-sm p-1 h-full">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5789391449087!2d88.39340931495945!3d22.51748798520441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271236ed2f3d7%3A0x8f7f5c0c1b1b8b0a!2sKayasthapara%2C%20Haltu%2C%20Kolkata%2C%20West%20Bengal%20700078!5e0!3m2!1sen!2sin!4v1625147614058!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
