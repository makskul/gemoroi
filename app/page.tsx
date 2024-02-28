import Image from "next/image";
import MainPageBanner from '@/components/HomePage/Banner';
import Content from "@/components/Content";
import Link from "next/link";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function Home() {
  return (
    <>
      <MainPageBanner />
      <Content>
        <section className="sm:mb-5 md:mb-10 lg:mb-12">
          <h2 className="sm:text-2xl lg:text-4xl text-center lg:font-semibold">Discover relief
            from discomfort and swelling with our comprehensive approach to hemorrhoid treatment.</h2>
        </section>
        <section className="md:flex flex-1 py-6 items-center sm:mb-5 md:mb-10 lg:mb-12">
          <div className="px-2 pr-8 md:w-1/2 items-center">
            <h3 className="text-4xl font-semibold content-center uppercase leading-tight">
              No Pain <br/><span className="text-rose-600">No Gain</span>
            </h3>
            <div className="mt-3.5">
              <p className="text-2xl">
                Trust our dedicated <Link href="/team" className="text-rose-600">doctors</Link> to guide you towards a
                life free from hemorrhoidal discomfort.
              </p>
            </div>
          </div>
          <div className="sm:mt-4 md:mt-0 px-2">
            <Image
              className="rounded-2xl"
              src="/imag1.png"
              alt="Strawberry in hand"
              width={900}
              height={596}
              priority
            />
          </div>
        </section>
        <section className="bg-gray-200 rounded-2xl w-full p-6 items-center sm:mb-5 md:mb-10 lg:mb-12">
          <h2 className="sm:text-2xl lg:text-4xl text-center font-semibold uppercase">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <article className="py-6 px-4">
              <Image
                  className="rounded-2xl w-full"
                  src="/avatar1.jpeg"
                  alt="Doctor 1"
                  width={355}
                  height={400}
              />
              <h4 className="text-xl font-semibold text-center pt-4 pb-2">
                <Link href="/team/doctor-strange" className="">Doctor Strange</Link>
              </h4>
              <p className="lg:text-justify">
                Best doctor in our team. We call him from Nepal, because he have big talent and many achievements in medicine...
              </p>
            </article>
            <article className="py-6 px-4">
              <Image
                  className="rounded-2xl w-full"
                  src="/avatar1.jpeg"
                  alt="Doctor 1"
                  width={355}
                  height={400}
              />
              <h4 className="text-xl font-semibold text-center pt-4 pb-2">
                <Link href="/team/doctor-strange" className="">Doctor Strange</Link>
              </h4>
              <p className="lg:text-justify">
                Best doctor in our team. We call him from Nepal, because he have big talent and many achievements in medicine...
              </p>
            </article>
            <article className="py-6 px-4">
              <Image
                  className="rounded-2xl w-full"
                  src="/avatar1.jpeg"
                  alt="Doctor 1"
                  width={355}
                  height={400}
              />
              <h4 className="text-xl font-semibold text-center pt-4 pb-2">
                <Link href="/team/doctor-strange" className="">Doctor Strange</Link>
              </h4>
              <p className="lg:text-justify">
                Best doctor in our team. We call him from Nepal, because he have big talent and many achievements in medicine...
              </p>
            </article>
            <article className="py-6 px-4">
              <Image
                  className="rounded-2xl w-full"
                  src="/avatar1.jpeg"
                  alt="Doctor 1"
                  width={355}
                  height={400}
              />
              <h4 className="text-xl font-semibold text-center pt-4 pb-2">
                <Link href="/team/doctor-strange" className="">Doctor Strange</Link>
              </h4>
              <p className="lg:text-justify">
                Best doctor in our team. We call him from Nepal, because he have big talent and many achievements in medicine...
              </p>
            </article>
          </div>
        </section>
        <section className="w-full p-6 items-center sm:mb-5 md:mb-10 lg:mb-12">
          <h2 className="sm:text-2xl lg:text-4xl text-center font-semibold uppercase">Contact Us</h2>
          <form className="py-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <Input title={'Name'} type={'Text'} />
              <Input title={'Surname'} type={'Text'} />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <Input title={'Email'} type={'Text'} />
              <Input title={'Subject'} type={'Text'} />
            </div>
            <div className="">
              <Textarea title={'Write your answer: '} id={'answer'}/>
            </div>
            <div className="text-right">
              <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white uppercase font-semibold px-6 py-3">Send</button>
            </div>
          </form>
        </section>

        {/* ------------------------------- */}
        <div
            className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>
            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Learn{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Templates{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore starter templates for Next.js.
              </p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
      </Content>
    </>
);
}
