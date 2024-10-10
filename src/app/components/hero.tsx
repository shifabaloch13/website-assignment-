import Image from "next/image";
import profile from "../../../public/organic.jpeg"



export default function Hero() {
  return (
    <main className="bg-gray-200 h-screen">
      <h1 className="font-serif absolute mx-32 my-2 top-20 text-black text-6xl">Best quality products</h1>
      <h1 className="font-serif absolute mx-56 my-4 top-36 text-black text-6xl">join the organic movement! </h1>
      <p className="absolute mx-20 top-80 text-black w-1/2">Embrace the power of nature with our organic products, grown without harmful chemicals, harvested with care, and delivered fresh to nourish your body, mind, and soul. Discover the sustainable way to a healthier lifestyle, where quality and purity come first.
</p>
      <button className="absolute bottom-48 mx-80 text-center bg-green-900 rouneded-none border-5 w-24 h-8"><b>shop now</b></button>
      <Image
        src={profile}
        alt="image"
        className="w-[550px] h-[100] absolute right-7 top-40 "
      />
        </main>
  )
}

