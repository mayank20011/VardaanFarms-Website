import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import blog5 from "../../img/blog5.jpg";
import blog6 from "../../img/blog6.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  function redirect(url) {
    navigate(url);
  }

  const articleSchema = {};
  return (
    <section className="bg-slate-100 text-black min-h-screen" id="blogPage">
      <Helmet>
        <title>Vardaan Farms Blog: Fresh Insights on Dairy, Health & More!</title>
        <meta
          name="description"
          content="Welcome to the Vardaan Farms Blog! Explore insights on dairy, healthy living, and farm sustainability. Stay informed and enjoy fresh, pure dairy with us!"
        />
        <meta
          name="keywords"
          content="Vardaan dairy, Vardaan Milk, Vardaan Farms"
        />
        <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <div className="p-24 md:p-44 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 flex flex-col gap-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"001"}`);
            }}
          >
            <div className="relative w-full h-auto ">
              <div className="aspect-[16/9]">
                <img
                  src={blog1}
                  alt="Cow Heard Staring at camera"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"001"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Why A2 Desi Cow Milk</span>
            </Link>
          </article>

          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"002"}`);
            }}
          >
            <div className="relative w-full h-auto">
              <div className="aspect-[16/9]">
                <img
                  src={blog2}
                  alt="Indian Tea Stall"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"002"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Enjoy Full Cream Milk Daily</span>
            </Link>
          </article>

          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"003"}`);
            }}
          >
            <div className="relative w-full h-auto">
              <div className="aspect-[16/9]">
                <img
                  src={blog3}
                  alt="Kesar Doodh"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"003"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Healthy and Tasty Toned Milk</span>
            </Link>
          </article>

          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"004"}`);
            }}
          >
            <div className="relative w-full h-auto">
              <div className="aspect-[16/9]">
                <img
                  src={blog4}
                  alt="Indian Culture"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"004"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Light and Tasty DTM</span>
            </Link>
          </article>

          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"005"}`);
            }}
          >
            <div className="relative w-full h-auto">
              <div className="aspect-[16/9]">
                <img
                  src={blog5}
                  alt="Buffalo Heard"
                  className="rounded-md w-full"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"005"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Buffalo Milk Rich and Nutritious</span>
            </Link>
          </article>

          <article
            className="grid gap-4 cursor-pointer w-full"
            onClick={() => {
              redirect(`/blog/${"006"}`);
            }}
          >
            <div className="relative w-full h-auto">
              <div className="aspect-[16/9]">
                <img
                  src={blog6}
                  alt="Cows Sitting and Staring at camera"
                  className="rounded-md w-full"
                  loading="lazy"
                />
              </div>
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
              to={`/blog/${"006"}`}
            >
              Read More
              <span className="absolute w-[1px] h-[1px] overflow-hidden">Sustainability On a Dairy Farm</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
