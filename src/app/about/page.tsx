
import Image from "next/image";

/*
  A simple static page.
  It is static by default since there are not dynamic rendering.
  Image is cached and its size depends on screen size.
*/

export default async function AboutPage() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">
      About Our Company
    </h1>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h2>
      <div className="w-full lg:w-1/2 mb-6">
        <Image
          src="/images/company.webp"
          alt="Company Image"
          width={1429}
          height={1116}
          sizes="(max-width: 640px) 100vw, 
                  (max-width: 768px) 50vw, 
                  50vw"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-600">
        Our company was founded with the goal of transforming the way businesses operate
        by leveraging innovative technology solutions. Over the years, we have grown from a
        small team of passionate developers into a leading firm with a global presence.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h2>
      <p className="text-gray-600">
        Our mission is to empower businesses with cutting-edge technology to streamline
        operations and improve customer experiences. We believe in creating value through
        collaboration, innovation, and integrity.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow relative">
          <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
          <p className="text-sm text-gray-600">CEO & Founder</p>
          <p className="text-gray-500 mt-2">
            John has over 20 years of experience in the industry and is passionate about
            driving change through technology.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h2>
      <p className="text-gray-600">
        If you would like to learn more about our company or discuss how we can help your business, feel
        free to get in touch.
      </p>
    </section>
  </div>
  );
}
