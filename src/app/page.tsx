"use client";
import Image from "next/image";
import { ServiceCard } from "~/components/Services";
import Emoji from "a11y-react-emoji";
import LabeledEmoji from "~/components/LabeledEmoji";
import Translator from "~/components/Translator";

declare global {
  interface Window {
    // eslint-disable-next-line
    Beacon: any;
  }
}

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900 h-full pb-16">
        <div className="container mx-auto">
          <header className="text-gray-100 body-font w-full">
            <div className="container mx-auto flex p-5 flex-col md:flex-row">
              <a className="mt-4 order-first lg:order-none lg:w-2/5 title-font font-medium mb-4 md:mb-0">
                <Image
                  src="/logo.svg"
                  width={312}
                  height={67}
                  alt="Afterwords Logo"
                />
              </a>
              <nav className="lg:w-3/5 text-base md:mt-6">
                <a className="text-white m-2 px-2 py-1 " href="#about">
                  About us
                </a>
                <a className="text-white m-2 px-2 py-1 " href="#services">
                  Our services
                </a>
                <a className="text-white m-2 px-2 py-1 " href="#team">
                  Our team
                </a>
                <a
                  className="text-white m-2 px-2 py-1 "
                  href="https://www.linkedin.com/company/afterwordstranslations"
                >
                  <Image
                    alt="LinkedIn logo"
                    width={50}
                    height={50}
                    className="w-6"
                    src="/in.png"
                  />
                </a>
              </nav>
            </div>
          </header>
          <div className="md:flex">
            <div className="sm:w-full md:w-6/12 text-white p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {" "}
                  <Emoji symbol="👋" /> Hi,
                </h1>
                <h1 className="text-4xl font-bold text-white mb-8">
                  we are a boutique translation agency from Greece{" "}
                </h1>
                <p className="text-xl text-white mb-8">
                  dedicated to helping businesses and organizations
                  thrive—whether in the vibrant local Greek market or the
                  expansive global marketplace.
                </p>
                <button
                  className="btn text-xl btn-lg normal-case text-indigo-900 hover:text-white dark:bg-white dark:text-indigo-900"
                  onClick={() => window.Beacon("open")}
                >
                  Get a quote →
                </button>
              </div>
            </div>
            <div className="md:w-6/12 lg:w-6/12 xl:4/12">
              <Image
                className="lg:p-16"
                src="/world.svg"
                width={500}
                height={500}
                alt="Banner Desktop"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div id="about" className="lg:w-2/3 p-8">
          <p className="text-2xl mb-2 text-gray-600 dark:text-slate-500">
            About us
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Translation is more than <i className="font-normal">just</i> a
            document.
          </h2>

          <p className="text-xl mb-4">
            We pride ourselves on delivering tailored language solutions that
            empower our clients to communicate effectively, reach broader
            audiences, and achieve their goals with confidence.
          </p>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
            <LabeledEmoji emoji="🇬🇷" label="Greek" />
            <LabeledEmoji emoji="🇩🇪" label="German" />
            <LabeledEmoji emoji="🇫🇷" label="French" />
            <LabeledEmoji emoji="🇪🇸" label="Spanish" />
            <LabeledEmoji emoji="🇮🇹" label="Italian" />
            <LabeledEmoji emoji="🇸🇪" label="Swedish" />
            <LabeledEmoji emoji="🇵🇹" label="Portuguese" />
            <LabeledEmoji emoji="🇫🇮" label="Finnish" />
          </div>
          <Image
            alt="I work with SDL Trados Studio"
            width={200}
            height={50}
            src="/trados.png"
            className="sm:w-2/3 lg:w-2/5"
          />
        </div>

        <div className="p-8" id="services">
          <p className="text-2xl mb-2 text-gray-600 dark:text-slate-500">
            Our services
          </p>
          <h2 className="text-4xl font-bold mb-8">How we can help you</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8 md:w-3/4 lg:w-2/3">
            <div>
              <LabeledEmoji emoji="😌" label="Quality" />
            </div>
            <div>
              <LabeledEmoji emoji="🚀" label="Speed" />
            </div>
            <div>
              <LabeledEmoji emoji="⏰" label="Consistency" />
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mb-8">
            <ServiceCard
              label="Certified Translations"
              description={
                <>
                  <p className="mb-4">
                    Translation of academic and public documents for submission
                    to various authorities.
                  </p>
                  {/* <p className="mb-4"> */}
                  {/*   These are sealed by Certified Translators who graduated from */}
                  {/*   the Ionian University and delivered conveniently by courier. */}
                  {/* </p> */}
                  {/* <p> */}
                  {/*   From industry-specific solutions to certified document */}
                  {/*   translations, our dedicated team ensures accuracy, cultural */}
                  {/*   relevance, and professionalism at every step. */}
                  {/* </p> */}
                </>
              }
            />
            <ServiceCard
              label="Interpreting Services"
              description={
                <>
                  <p className="mb-4">
                    We provide professional interpreting services to ensure
                    seamless communication in any setting.
                  </p>
                  {/* <p> */}
                  {/*   {" "} */}
                  {/*   Whether for private meetings, diplomatic and political */}
                  {/*   engagements, press conferences, business events, or political */}
                  {/*   roundtables, our skilled interpreters deliver precision and */}
                  {/*   cultural fluency for meaningful dialogue. */}
                  {/* </p> */}
                </>
              }
            />
            <ServiceCard
              label="Subtitling Services"
              description={
                <>
                  <p className="mb-4">
                    Our subtitling team brings stories and messages to life on
                    screen.
                  </p>
                  {/* <p className="mb-4"> */}
                  {/*   From movies, series, and documentaries to conferences, */}
                  {/*   commercial spots, interviews, and festival entries, we work */}
                  {/*   with passion and precision. */}
                  {/* </p> */}
                  {/* <p> */}
                  {/*   We also collaborate with independent directors to ensure their */}
                  {/*   unique projects resonate with diverse audiences worldwide. */}
                  {/* </p> */}
                </>
              }
            />
          </div>
          <h3 className="text-2xl font-bold mt-8 mb-4">Industries we serve</h3>

          <p className="text-xl mb-8 md:w-3/4 lg:w-2/3">
            We provide specialized translation services designed to meet the
            unique needs of businesses, organizations, and individuals. Our
            expertise spans multiple areas.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mb-8">
            <ServiceCard
              label="Medical & patent"
              description="Expert translations of medical documentation, research papers, patents, as well as medical devices and product information."
            />
            <ServiceCard
              label="Legal & Financial"
              description="Accurate and dependable translations of contracts, legal proceedings, financial statements, and related documents."
            />
            <ServiceCard
              description="Engaging and culturally attuned translations to enhance your online presence and global reach."
              label="Websites"
            />
            <ServiceCard
              label="Marketing"
              description="Creative translations that resonate with your audience and amplify your brand’s message."
            />
            <ServiceCard
              label="Academic Books"
              description="High-quality translations that preserve the intellectual rigor and voice of scholarly works."
            />
            <ServiceCard
              description="Specialized translations rooted in practical expertise, bolstered by a Permaculture Design Certificate (PDC) at Oregon State University."
              label="Agriculture & Agroforestry"
            />
          </div>
        </div>
        <div id="team" className="p-8">
          <p className="text-2xl mb-2 text-gray-500 dark:text-slate-500">
            Our team
          </p>
          <h2 className="text-4xl font-bold mb-8">You are in good hands</h2>
          <p className="text-xl mb-8 lg:w-2/3 ">
            Our seasoned translators brings together diverse expertise to meet a
            wide range of translation and interpretation needs.
          </p>
          <div className="mb-16 text-xl lg:w-3/4 ">
            <Translator
              fullName="Aggeliki Gkika"
              imageSrc="/aggeliki.jpeg"
              shortName="Aggeliki"
              href="https://www.linkedin.com/in/agkika/"
              description="Aggeliki specializes in medical, patent, and legal translations,
              ensuring accuracy and professionalism in highly specialized
              fields."
            />
            <Translator
              fullName="Chrysanthi Partsanaki"
              imageSrc="/chrysanthi.jpeg"
              shortName="Chrysanthi"
              href="https://www.linkedin.com/in/cpartsanaki/"
              description="
              Chrysanthi excels in book, financial, and political translations,
              along with skilled English and Spanish interpretation."
            />
            <Translator
              fullName="Anna Maria Chatzistylianou"
              imageSrc="/am.jpeg"
              shortName="Anna Maria"
              href="https://www.linkedin.com/in/amchatzistylianou/"
              description="Anna Maria is your go-to for subtitles, website and marketing translations,
              combining linguistic precision with creativity."
            />
          </div>
          {/* <p className="text-xl mb-2 text-gray-600">Our clients</p> */}
          {/* <h2 className="text-2xl font-bold mb-8"> */}
          {/*   They trust us to get their job done */}
          {/* </h2> */}
          {/* <div className="grid grid-cols-3 gap-4 mb-8 lg:w-3/4"> */}
          {/*   <div> */}
          {/*     <Image */}
          {/*       alt="aia logo" */}
          {/*       className="block h-24 mx-auto" */}
          {/*       width={200} */}
          {/*       height={50} */}
          {/*       src="/aia.png" */}
          {/*     /> */}
          {/*   </div> */}
          {/*   <div> */}
          {/*     <Image */}
          {/*       alt="gutenberg logo" */}
          {/*       src="/gutenberg.jpg" */}
          {/*       width={200} */}
          {/*       height={50} */}
          {/*     /> */}
          {/*   </div> */}
          {/*   <div> */}
          {/*     <Image */}
          {/*       alt="gutenberg logo" */}
          {/*       src="/gutenberg.jpg" */}
          {/*       width={200} */}
          {/*       height={50} */}
          {/*     /> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="bg-gradient-to-tr from-blue-700 via-indigo-900 to-gray-900 h-full pb-16">
        <div className="container mx-auto">
          <div className="xl:w-2/3 p-8 pb-0 text-white">
            <p className="text-2xl text-slate-400 mb-2">
              Do you have any further questions?{" "}
              <Emoji className="text-2xl" symbol="🤔" />
            </p>
            <h3 className="text-4xl font-bold mb-8">
              Feel free to contact us!
            </h3>
            <p className="text-xl mb-8 md:w-2/3">
              What is your next big web project?
            </p>
            <p className="text-xl mb-8 md:w-2/3">
              Do you want to translate your new book or find interpreters for
              your big conference or event? Or do you have another question?{" "}
            </p>
            <button
              className="btn text-xl btn-lg normal-case text-indigo-900 hover:text-white dark:bg-white dark:text-indigo-900"
              onClick={() => window.Beacon("open")}
            >
              Contact us →
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="container mx-auto p-8">
          <Image
            alt="Afterwords logo"
            src="/logo.svg"
            width={200}
            height={50}
            className="mb-8 w-2/3 md:w-1/4"
          />
          <div className="flex items-center">
            <h3 className="text-white text-xl mr-4">Find us on social media</h3>
            <a href="#" className="inline-block mr-4">
              <Image
                alt="Instagram logo"
                width={50}
                height={50}
                className="w-6"
                src="/insta.svg"
              />
            </a>
            <a href="#" className="inline-block mr-4">
              <Image
                alt="LinkedIn logo"
                width={50}
                height={50}
                className="w-6"
                src="/in.png"
              />
            </a>
            <a href="#" className="inline-block mr-4">
              <Image
                alt="Facebook logo"
                width={50}
                height={50}
                className="w-6"
                src="/fb.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
