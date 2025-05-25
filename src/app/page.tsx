import Link from "next/link";

export default function Home() {
  return (
    <div className="place-self-center mt-20">
      <span className=" text-3xl mb-5 block">Select:</span>
      <div>
        <Link href="/heating">Heating Simulation</Link>
      </div>
      <div>
        <Link href="/info">Experimental Results; Simulation Methodology</Link>
      </div>
    </div>
  );
}
