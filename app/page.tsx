import heroImage from '../public/hero.png'
 
export default function Home() {
  return (
        <div className="lg:flex flex-row justify-evenly items-center content-center h-screen">
          <div className="">
            <div className="my-2 flex flex-col justify-between">  
              <div className="text-[#1E1E1E] text-sm">
                Your go-to platform for 3D printing files
              </div>
              <div className="my-2 text-[#1E1E1E] text-4xl font-bold">
                Discover what’s possible with 3D printing
              </div>
              <div className="my-2 text-[#1E1E1E] text-lg">
                Join our community of creators and explore a vast library of user-submitted models.
              </div>
            </div>
            <button className="mt-2 cursor-pointer border-2 p-2">
              BROWSE MODELS
            </button>
          </div>
          <div className="">
            <img src={heroImage.src} alt="Hero image" className="w-sm rounded-full" width={heroImage.width} height={heroImage.height}/>
          </div>
      </div>
  );
}
