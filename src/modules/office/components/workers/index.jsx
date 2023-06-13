import Workers from "./components/workers";
import AddWorkers from "./components/addWorkers";

function Office() {

  return (
    <>
      <main className="officeScreen">

        <Workers />
        <AddWorkers />

      </main>
    </>
  )
}

export default Office;