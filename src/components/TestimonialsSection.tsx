import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "In 2023, the year when the title of the European Capital of Culture was awarded, 2023 Eleusis in cooperation with the Aikaterini Laskaridis Foundation and with its exclusive sponsorship, implemented the dedicated bilingual anthology They Wrote about Her with texts by Greek and foreign authors written about Eleusis, from antiquity to the present day. The Afterwords Translations team undertook the difficult task of translating texts from the entire range of this anthology. The collaboration was flawless at every level and the result was excellent with an emphasis on the quality of the style and meaning of the texts.",
      author: "Isavela Karouti",
      company: "2023 Eleusis European Capital of Culture",
      featured: true,
    },
    {
      quote:
        "I strongly endorse Ms. Chatzistylianou as a subtitler. She is professional, reliable, and fast, with excellent knowledge of multiple languages, strong research abilities, and clear communication. Her expertise and work ethic make her one of the best in today's subtitling market.",
      author: "Georgios Kalipetis",
      company: "VIDEOPRESS S.A.",
    },
    {
      quote:
        "Beyond their linguistic expertise, Afterwords Translations proves to be a collaborative and reliable team. They consistently go above and beyond to meet deadlines and play a crucial role in the overall success of our projects, especially focusing on chemical and technical patents.",
      author: "Olena Vasilatos",
      company: "LSP Owner & Translator",
    },
    {
      quote:
        "After working with Afterwords Translations, I can confidently affirm their outstanding proficiency in medical and legal translations. Their precision, unwavering professionalism, and dedication to meeting deadlines make them an indispensable resource.",
      author: "Sofia Simoni",
      company: "Greek LSP Owner & Subtitler",
    },
    {
      quote:
        "The Afterwords Translations team is dedicated and readily accessible to deliver outstanding services for translation and interpreting requirements. Moreover, they exhibit a high level of professionalism and ethical conduct, making them excellent colleagues. I wholeheartedly recommend their services.",
      author: "Zoe Resta, Ph.D.",
      company: "Translator & Conference Interpreter",
    },
    {
      quote:
        "We engaged Afterwords Translations for a high-stakes interpretation project and they delivered at a level few vendors reach. They were professional and strong on context, not just language. Communication was clear, controlled, and seamless throughout. I would work with them again without hesitation.",
      author: "Ifigenia Geiveli",
      company: "Human Resources Executive",
    },
    {
      quote:
        "Our long-standing collaboration with Afterwords proves the quality of their work. They are a team of translators who respond with great success to the translation of texts from various scientific disciplines, always respecting the deadlines set each time.",
      author: "Maria Simantiri",
      company: "Gutenberg Editions, Athens",
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
            <div
              key={index}
              className={testimonial.featured ? "md:col-span-3" : ""}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
