import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div id="Orders-Container">
      <PageHeader />

      <h1 className="mb-6 text-2xl font-bold">
        Ini Orders
      </h1>

      {/* Container Card */}
      <div className="flex flex-wrap gap-6">

        {/* Card 1 */}
        <div
          className="
            card bg-base-100 w-64 shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:border hover:border-green-400
          "
        >
          <figure className="overflow-hidden">
            <img
              src="img/MU.jpg"
              alt="Matheus Cunha"
              className="
                transition-transform
                duration-500
                hover:scale-110
              "
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              About Cunha
            </h2>

            <p>
              Matheus Cunha merupakan pemain yang dikenal karena
              kecepatan, kreativitas, dan kemampuannya
              menciptakan peluang di lini depan.
            </p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Detail
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="
            card bg-base-100 w-64 shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:border hover:border-green-400
          "
        >
          <figure className="overflow-hidden">
            <img
              src="img/CR7.jpg"
              alt="Cristiano Ronaldo"
              className="
                transition-transform
                duration-500
                hover:scale-110
              "
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Cristiano Ronaldo
            </h2>

            <p>
              Cristiano Ronaldo adalah salah satu pemain
              terbaik sepanjang masa yang telah memenangkan
              berbagai gelar dan penghargaan individu.
            </p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Detail
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="
            card bg-base-100 w-64 shadow-sm
            cursor-pointer
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:border hover:border-green-400
          "
        >
          <figure className="overflow-hidden">
            <img
              src="img/M.Ali.jpg"
              alt="Muhammad Ali"
              className="
                transition-transform
                duration-500
                hover:scale-110
              "
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Muhammad Ali
            </h2>

            <p>
              Muhammad Ali merupakan legenda olahraga dunia
              yang dikenal karena prestasi luar biasa di dunia
              tinju dan pengaruhnya yang besar.
            </p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Detail
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}