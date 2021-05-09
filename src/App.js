import "./App.css";
import BasicForm from "./components/FormikAndYupp/BasicForm";
import EasyForm from "./components/FormikAndYupp/EasyForm";
import FormWithYup from "./components/FormikAndYupp/FormWithYup";
import ReusableForm from "./components/FormikAndYupp/ReusableForm";
import HookForm from "./components/hookForm/HookForm";
import Form from "./components/hookForm/form";
function App() {
  return (
    <div className="App">
      {/* <BasicForm />
      <FormWithYup />
      <EasyForm />
      <ReusableForm /> */}
      {/* <HookForm /> */}
      <Form />
    </div>
  );
}

export default App;
