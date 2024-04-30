import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TextInput = ({
  searchText,
  onSubmit,
  onInputChange,
}: {
  searchText: string;
  onSubmit: any;
  onInputChange: any;
}) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input onChange={onInputChange} type="email" placeholder={searchText} />
      <Button onClick={onSubmit} type="submit">
        Translate
      </Button>
    </div>
  );
};

export default TextInput;
