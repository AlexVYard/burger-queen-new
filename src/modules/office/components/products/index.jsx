import Products from "./components/products";
import AddProducts from "./components/addProducts";
import Header from "../header";

function Office() {

  return (
    <>
    <Header />
      <main className="officeScreen">

        <Products />
        <AddProducts />

      </main>
    </>
  )
}

export default Office;