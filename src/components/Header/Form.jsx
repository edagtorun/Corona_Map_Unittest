import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form className="flex items-center border rounded" onSubmit={handleSubmit}>
      <input
        className="bg-transparent py-1 px-1 md:px-5 outline-none"
        type="text"
        placeholder="Ulke ismine Gore Ara"
        required
      />
      <button
        className="bg-green-500 text-xl p-[6px] w-full h-full rounded transition hover:bg-green-600"
        type="submit"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
