import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Afterwords has been our trusted translation partner for over 5 years. Their attention to detail and cultural understanding ensures our medical documents are always accurate and professionally delivered.",
      author: "Maria Papadopoulos",
      company: "MedTech Hellas",
      industry: "Medical & Healthcare",
    },
    {
      quote:
        "The team at Afterwords consistently delivers high-quality translations for our legal documents. Their expertise in financial and legal terminology is unmatched in the industry.",
      author: "Nikos Antoniou",
      company: "Antoniou & Partners Law Firm",
      industry: "Legal & Financial",
    },
    {
      quote:
        "We needed our entire website localized for multiple European markets. Afterwords handled everything seamlessly, maintaining our brand voice while making it culturally relevant for each audience.",
      author: "Eleni Constantinou",
      company: "Aegean Tech Solutions",
      industry: "Technology & Software",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-2xl mb-2 text-slate-300">
            Client testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              industry={testimonial.industry}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
