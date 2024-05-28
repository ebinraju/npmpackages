import { Input } from "../../components/input/index.jsx";

export default {
  component: Input,
  title: "Input",
};

export const Default = {
  args: {
    onChange: console.log,
    onClear:console.log,
    className: "",
    defaultValue: "",
    showClearButton: true,
    showConfirmButton: true,
    placeholder: "Type...",
  },
};

export const WithExpression = {
  args: {
    onChange: console.log,
    onClear: console.log,
    className: "",
    defaultValue: "",
    showClearButton: true,
    showConfirmButton: true,
    placeholder: "Type...",
    expression: /^\d{0,6}(\.\d{0,2})?$/
  },
};
