export default function Logo() {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white h-10 w-10 rounded-full`}
    >
      <div className={`h-3 w-3 rounded-full bg-red-600`}></div>
      <div className={`h-3 w-3 rounded-full bg-yellow-500`}></div>
      <div className={`h-3 w-3 rounded-full bg-green-600`}></div>
    </div>
  );
}
