import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
        <div
          className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png')",
          }}
        >
          <div className="absolute bottom-0 right-0 p-6 text-white">
            <button className="text-white border-2 hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2">
              Case Studies
            </button>
            <p className="text-2xl md:text-3xl font-primary font-semibold mt-4">
              A pool is a man-made or natural body of water that is used for
              swimming and other leisure activities.
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md px-4 py-8 relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png')",
          }}
        >
          <div className="absolute bottom-0 right-0 p-6 text-white">
            <button className="text-white border-2 border-white hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2">
              Case Studies
            </button>
            <p className="text-2xl md:text-3xl lg:text-2xl font-primary font-semibold mt-4">
              Chicken is a widely consumed type of poultry that...
            </p>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md px-4 py-8 relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png')",
          }}
        >
          <div className="absolute bottom-0 right-0 p-6 text-white">
            <button className="text-white border-2 border-white hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2">
              Case Studies
            </button>
            <p className="text-2xl md:text-3xl lg:text-2xl font-primary font-semibold mt-4">
              Pasta is a versatile and beloved food that has become...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
