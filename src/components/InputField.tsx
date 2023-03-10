const InputField = () => {
  return (
    <form>
      <input placeholder="Enter a task" className="px-4 py-2 mx-2" />{" "}
      <button className="bg-gray-500 py-2 px-4 mx-2 hover:bg-gray-600 active:bg-gray-800 transition-all text-white font-bold">
        Submit
      </button>
    </form>
  );
};
export default InputField;
