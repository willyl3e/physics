import Link from "next/link";

const data = {
  startingTemp: [18, 29, 26, 22, 28, 24, 18, 18, 19],
  finalTemp: [80, 93, 90, 88, 90, 83, 72, 72, 74],
  initialMass: [100, 100, 100, 250, 250, 250, 500, 500, 500],
  finalMass: [51, 61, 48, 233, 222, 234, 496, 496, 494],
};



export default function Page() {
  return (
    <>
      <div className="m-20 border-b-[1px] border-gray-300 mb-6 pb-2">
        <Link href="/" className=" inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#6b7280"
            className="inline mb-1"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>{" "}
          <span className="text-gray-500">Go back</span>
        </Link>
      </div>
      <div className="mt-10 ml-20 mb-20 mr-[40%]">
        <span className="text-2xl mb-5 block">Experimental Results</span>
        <table className="border-[1px] text-center">
          <tr className="text-sm [&>th]:border-[1px] [&>th]:border-gray-300 [&>th]:bg-gray-100">
            <th>Initial mass (g)</th>
            <th>Final mass (g)</th>
            <th>Difference in mass (g)</th>
            <th>Percent difference in mass (%)</th>
            <th>Starting temperature (℃)</th>
            <th>Final temperature (℃)</th>
            <th>Difference in temperature (℃)</th>
            <th>Percent difference in mass (%)</th>
          </tr>
          {data.startingTemp.map((x, i) => (
            <tr
              key={i}
              className={`[&>td]:border-[1px] [&>td]:border-gray-300 ${
                i % 2 !== 0 && `[&>td]:bg-gray-100`
              }`}
            >
              <td>{data.initialMass[i]}</td>
              <td>{data.finalMass[i]}</td>
              <td>{data.initialMass[i] - data.finalMass[i]}</td>
              <td>
                {((data.initialMass[i] - data.finalMass[i]) /
                  data.initialMass[i]) *
                  100}
              </td>
              <td>{x}</td>
              <td>{data.finalTemp[i]}</td>
              <td>{x - data.finalTemp[i]}</td>
              <td>{((x - data.finalTemp[i]) / x) * 100}</td>
            </tr>
          ))}
        </table>
        <span className="text-2xl mt-10 block">
          Methodology of the heating simulation
        </span>
        <span className="mt-3 block">
          The results of the heating simulation are based on a linear regression
          of the percent change of the experimental results. The equations used
          are given below:
        </span>
        <span className="mt-3 block">Temperature change: 0.09896*X + 341.8</span>
        <span className="mt-3 block">Mass change: 0.1056*X + 51.50</span>
      </div>
    </>
  );
}
