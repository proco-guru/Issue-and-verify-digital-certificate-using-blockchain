import Header from "../components/Layout/Header";
import SeoHead from "../components/SeoHead";
import VerifierForm from "../components/Verifier/VerifierForm";


export default function VerifierPage() {
    return (<>
          <SeoHead title='Dvan:Verify Certificate' />

        <Header></Header>
        <VerifierForm></VerifierForm>
    </>)
}