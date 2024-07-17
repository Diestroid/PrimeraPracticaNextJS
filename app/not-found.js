import Link from "next/link";

function Custom404() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl bg-red-600 m-5 p-5 rounded-lg">
          NO SE ENCONTRÓ LA PÁGINA
        </h1>
      </div>
      <div className="text-center">
        <Link href={"/"}>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-0"
          >
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
