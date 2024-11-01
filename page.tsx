import Image from "next/image";

export default function Home() {
  return (

        <div className="h-screen flex justify-center items-center">
          <div className="flex h-[465px] w-11/12">
            <div className="flex flex-col flex-1 gap-4 justify-center px-4">
               <h1 className="font-bold text-[44px]">Welcome To My Website</h1>
                <p className="font-normal text-[32px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
                  aliquid quis quisquam, ducimus earum repellat consequuntur sint vero?
                  Alias possimus quam nulla et quia facere aut, labore sed neque
                  impedit.
                </p>
                <button className="text-white w-[237px] h-[66px] p-4 bg-black">Contact Us</button>
            </div>

            <div className="flex-1">
              <div>
               <Image
               src="/images/banner-image.png"
               alt="Banner Image"
               width={502}
               height={465}
               />
              </div>
            </div>
          </div>
        </div>
  );
};
