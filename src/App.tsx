import { useState } from "react";
import { TextInput, Translation } from "./components";
import translate from "./util";

const App = () => {
  const [searchText, setSearchText] = useState("This is pretty cool");
  const [arabicTranslation, setArabicTranslation] = useState("");
  const [tigrinyaTranslation, setTigrinyaTranslation] = useState("");
  const onInputChange = (event: any) => {
    setSearchText(event.target.value);
  };
  const onSubmit = async () => {
    const data = await translate(searchText);
    setArabicTranslation(data[0].text);
    setTigrinyaTranslation(data[1].text);
  };

  return (
    <div className="flex flex-col w-4/5 m-auto mt-5 md:w-3/5 md:lg:items-center lg:w-1/2 ">
      <TextInput
        searchText={searchText}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      />
      <Translation
        arabicTranslation={arabicTranslation}
        tigrinyaTranslation={tigrinyaTranslation}
      />
    </div>
  );
};

export default App;
