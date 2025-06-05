import heroImage from '../../public/hero.png'

export default function AboutePage() {
  return (
    <div className="min-h-screen">
      {/* <div className="fixed">Navbar</div> */}
      <div className=" justify-evenly items-center h-screen px-6 py-12">
        <section className="container mx-auto py-15 lg:flex flex-row gap-20">
          <div className="">
            <img src={heroImage.src} className="w-lg" alt="as" width={heroImage.width} height={heroImage.height} />
          </div>
          <div className=" flex flex-col justify-evenly">
            <p className="lg:text-3xl text-lg">About printforge</p>
            <h1 className="lg:text-5xl text-2xl font-bold">
              Empowering makers worldwide
            </h1>
            <p className="lg:text-lg text-sm">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="lg:text-lg text-sm">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </section>
        <section id="description"
          className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white"
        >
          <div className="flex flex-col items-start gap-2 px-4">
            <h1 className="font-display text-2xl font-bold">
              100K+ Models
            </h1>
            <p>
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 px-4">
            <h1 className="font-display text-2xl font-bold">
              Active Community
            </h1>
            <p>
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 px-4">
            <h1 className="font-display text-2xl font-bold">
              Free to Use
            </h1>
            <p>
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </section>
        <section id="team" className="container mx-auto flex flex-col justify-center gap-8 px-6 lg:px-40 lg:py-15 py-8">
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">Our vision</h1>
            <p>
              At PrintForge, we believe that 3D printing is revolutionizing the
              way we create, prototype, and manufacture. Our platform serves as
              a bridge between designers and makers, enabling the sharing of
              knowledge and creativity that pushes the boundaries of whats
              possible with 3D printing.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p>
              Whether youre a hobbyist looking for your next weekend project,
              an educator seeking teaching materials, or a professional designer
              wanting to share your creations, PrintForge provides the tools and
              community to support your journey in 3D printing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
