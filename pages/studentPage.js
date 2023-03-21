import StudentForm from "../components/Student/StudentForm";
import Header from "../components/Layout/Header";
import SeoHead from "../components/SeoHead";


export default function StudentPage() {
    return (<>
          <SeoHead title='Dvan:Student Form' />

        <Header></Header>
        <StudentForm></StudentForm>
    </>)
}