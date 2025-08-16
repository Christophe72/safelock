import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import FormulaireContact from "../../components/formulaire-contact";

export default function dashboard() {
  return (
    <>
      <NavBar />
      <FormulaireContact />
      <div style={{ height: "100px" }}></div>
      <Footer />
    </>
  );
}
