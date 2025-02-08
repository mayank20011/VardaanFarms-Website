import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import blog5 from "../../img/blog5.jpg";
import blog6 from "../../img/blog6.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  return (
    <section className="bg-slate-100 text-black min-h-screen" id="blogPage">
      <Helmet>
        <title>Our Blogs - Dairy Farm Insights</title>
        <meta
          name="description"
          content="Explore a variety of topics about dairy farming, from maintaining a safe and sustainable environment to producing delicious and nutritious dairy products. Join us to learn more about A2 Desi Cow Milk, Full Cream Milk, Toned Milk, and more."
        />
        <meta
          name="keywords"
          content="Dairy Farm, A2 Desi Cow Milk, Full Cream Milk, Toned Milk, Sustainable Dairy Farming"
        />
      </Helmet>
      <div className="p-24 md:p-48 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 flex flex-col gap-6">
        <span className="md:text-center font-bold text-green-600 text-lg">
          Our Blogs
        </span>
        <h1 className="md:text-center text-5xl font-extrabold">Latest Blog</h1>
        <p className="w-full md:text-center text-slate-500 md:w-[700px] mx-auto text-lg">
          Welcome to our latest blog post! In this edition, we explore a variety
          of topics that touch upon every aspect of dairy farming, from
          maintaining a safe and sustainable environment to producing delicious
          and nutritious dairy products. Whether you're a dairy enthusiast or
          just curious about where your milk comes from, there's something here
          for everyone.
        </p>

        {/* for blogs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* blog-1 */}
          <article className="grid gap-4">
            <div className="relative">
              <img
                src={blog1}
                alt="Cow Heard Staring at camera"
                className="rounded-md"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Local
              </span>
            </div>
            <h1 className="text-xl font-bold">Why A2 Desi Cow Milk</h1>
            <p className="text-slate-500 text-lg">
              A2 Desi Cow Milk is a type of milk that comes from desi cows,
              which are native to our ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"001"}`}
              onClick={() => {
                setBlogToView(1);
              }}
            >
              Read More
            </Link>
          </article>

          {/* blog-2 */}
          <article className="grid gap-4" onClick={() => setBlogs(item)}>
            <div className="relative">
              <img
                src={blog2}
                alt="Indian Tea Stall"
                className="rounded-md"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Energizer
              </span>
            </div>
            <h1 className="text-xl font-bold">Enjoy Full Cream Milk Daily</h1>
            <p className="text-slate-500 text-lg">
              Full Cream Milk is a rich and creamy type of milk that is perfect
              for your daily diet ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"002"}`}
              onClick={() => {
                setBlogToView(2);
              }}
            >
              Read More
            </Link>
          </article>

          {/* blog-3 */}
          <article className="grid gap-4">
            <div className="relative">
              <img
                src={blog3}
                alt="Kesar Doodh"
                className="rounded-md"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Digestable
              </span>
            </div>
            <h1 className="text-xl font-bold">Healthy and Tasty: Toned Milk</h1>
            <p className="text-slate-500 text-lg">
              Toned Milk is a type of milk that offers a good balance of health
              and ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"003"}`}
              onClick={() => {
                setBlogToView(3);
              }}
            >
              Read More
            </Link>
          </article>

          {/* blog-4 */}
          <article className="grid gap-4">
            <div className="relative">
              <img
                src={blog4}
                alt="Indian Culture"
                className="rounded-md"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Low Fat
              </span>
            </div>
            <h1 className="text-xl font-bold">
              Light and Tasty: Double Toned Milk
            </h1>
            <p className="text-slate-500 text-lg">
              Double Toned Milk is a lighter choice that does not compromise on
              taste. Here's why ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"004"}`}
              onClick={() => {
                setBlogToView(4);
              }}
            >
              Read More
            </Link>
          </article>

          {/* blog-5 */}
          <article className="grid gap-4">
            <div className="relative w-full">
              <img
                src={blog5}
                alt="Buffalo Heard"
                className="rounded-md w-full"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Creamy
              </span>
            </div>
            <h1 className="text-xl font-bold">
              Buffalo Milk: Rich and Nutritious
            </h1>
            <p className="text-slate-500 text-lg">
              Buffalo Milk is known for its rich and creamy texture. Here's why
              you should consider adding ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"005"}`}
              onClick={() => {
                setBlogToView(5);
              }}
            >
              Read More
            </Link>
          </article>

          {/* bllog-6 */}
          <article className="grid gap-4">
            <div className="relative">
              <img
                src={blog6}
                alt="Cows Sitting and Staring at camera"
                className="rounded-md w-full"
                loading="lazy"
              />
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">
                Dairy
              </span>
            </div>
            <h1 className="text-xl font-bold">
              Sustainability On A Dairy Farm
            </h1>
            <p className="text-slate-500 text-lg">
              Sustainability is a crucial aspect of modern dairy farming. Here’s
              how dairy farms can adopt ...
            </p>
            <Link
              className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit h-fit"
              to={`/readFullBlog/${"006"}`}
              onClick={() => {
                setBlogToView(6);
              }}
            >
              Read More
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
