export default function Footer() {
  return (
    <footer className="bg-white shadow flex flex-col justify-center dark:bg-gray-800">
      <div className="p-4 md:flex w-full md:items-center md:justify-center">
        <div className="grid md:grid-cols-3 w-full md:pl-24 md:pr-24">
          <ul className="lg:pl-8 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <p className="font-bold">telefone:</p>
              <a href="#" className="hover:underline me-4 text-[12px]">
                (11) 2548-0440
              </a>
            </li>
            <br />
            <li>
              <p className="font-bold">email:</p>
              <a href="#" className="hover:underline me-4 text-[12px]">
                contato@gmstechnology.com.br
              </a>
            </li>
            <br />
          </ul>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            <p className="font-bold">parceiros:</p>
            <img className="h-8  md:h-10 w-[250px]" src="/partner1.png" />
            <img className="h-8  md:h-10 w-[250px]" src="/matsushima.avif" />
          </div>
          <span className="
            whitespace-nowrap self-end align-bottom
            text-gray-500 text-[12px] md:text-[10px]
            mt-10 dark:text-gray-400
            md:text-center
            md:mb-6
            ">
            ©2021<a>GMS - Gas Monitoring System Technology Ltda.</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
