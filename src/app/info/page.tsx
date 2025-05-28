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
          <thead>
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
          </thead>
          <tbody>
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
          </tbody>
        </table>
        <span className="text-2xl mt-10 block">
          Methodology of the heating simulation
        </span>
        <span className="mt-3 block">
          The results of the heating simulation are based on a linear regression
          of the percent change of the experimental results. The equations used
          are given below:
        </span>
        <span className="mt-3 block">
          Temperature change: 0.09896*X + 341.8
        </span>
        <span className="mt-3 block">Mass change: 0.1056*X + 51.50</span>
        <span className="text-2xl mt-10 block">References</span>
        <ul>
          <li>
            <a href="https://energy.sustainability-directory.com/term/thermal-inertia/">
              Thermal Inertia - Sustainability Directory
            </a>
          </li>
          <li>
            <a href="https://byjus.com/physics/absolute-zero/">
              Absolute Zero - BYJU&apos;S
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=TNUDBdv3jWI">
              YouTube: Absolute Zero - BBC Documentary
            </a>
          </li>
          <li>
            <a href="https://revistapesquisa.fapesp.br/en/supposed-room-temperature-superconductors-fail-to-convince-critics/">
              Room-Temperature Superconductors - Pesquisa FAPESP
            </a>
          </li>
          <li>
            <a href="https://www.spinquanta.com/news-detail/why-do-quantum-computers-need-to-be-cold-new">
              Quantum Computers and Low Temperatures - Spinquanta
            </a>
          </li>
          <li>
            <a href="https://www.msesupplies.com/blogs/news/cryogenic-storage-of-biological-samples?srsltid=AfmBOopvD4D9RdqIeDG1EBzPMHs2EOEIJOqFYJ-Slej7RZ3s38lYnTjI">
              Cryogenic Storage of Biological Samples - MSE Supplies
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/real-life-applications-of-thermal-expansion/">
              Applications of Thermal Expansion - GeeksforGeeks
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=qg-xEj-0xX0">
              YouTube: Thermal Expansion - Learn Engineering
            </a>
          </li>
          <li>
            <a href="https://www.materion.com/en/insights/blog/in-our-element-thermal-expansion-and-contraction-of-materials">
              Thermal Expansion and Contraction - Materion
            </a>
          </li>
          <li>
            <a href="https://hzo.com/blog/what-is-coefficient-of-linear-expansion-formula-units-more">
              Coefficient of Linear Expansion - HZO
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
