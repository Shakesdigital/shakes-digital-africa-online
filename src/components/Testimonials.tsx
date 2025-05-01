
import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>
      <div className="text-gray-600 italic relative">
        <div className="text-4xl text-shakes-teal/20 absolute top-0 left-0">"</div>
        <p className="pl-6">{quote}</p>
        <div className="text-4xl text-shakes-teal/20 absolute bottom-0 right-0">"</div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Shakes Digital transformed our outdated website into a modern, responsive platform that has significantly increased our customer engagement and bookings.",
      name: "Sarah Ochieng",
      title: "Marketing Director",
      company: "Savanna Tours",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Their eCommerce solution allowed us to reach customers across Africa and beyond. The local payment integration was seamless and transformed our business.",
      name: "David Mwangi",
      title: "CEO",
      company: "Artisan Crafts Kenya",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "The web application Shakes Digital built for our hospital network has streamlined patient management and improved our service delivery significantly.",
      name: "Dr. Amina Hassan",
      title: "Head of IT",
      company: "Afya Health Network",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our clients across Africa have to say about working with Shakes Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
