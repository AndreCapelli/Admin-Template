interface AuthInputProps {
  label: string;
  value: any;
  obrigatorio?: boolean;
  naoRenderizar?: boolean;
  tipo?: "text" | "email" | "password";
  valueChange: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizar ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChange?.(e.target.value)}
        required={props.obrigatorio}
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-1 
        border focus:border-blue-500 focus:outline-none focus:bg-white`}
      />
    </div>
  );
}
