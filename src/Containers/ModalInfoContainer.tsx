import useFirestore from "@/hooks/useFirestore";
import { FirestoreDocument } from "@/types";
import { FC, useState } from "react";
import { toast } from "sonner";

type Props = {
  onClose: () => void;
};

const ModalInfoContainer: FC<Props> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { createDocument } = useFirestore();

  const onPressSave = async () => {
    if (!name || name == "") {
      return toast.error("Та өөрийн нэрийг оруулна уу");
    }
    try {
      setLoading(true);
      const payload: FirestoreDocument = {
        name: name,
        type: "Анарэрдэнэ",
        date: new Date(),
      };
      await createDocument("invite", payload);
      setName("");
      onClose();
      toast.success("Мэдээлэл амжилттай илгээгдлээ");
    } catch (e) {
      console.error(e);
      toast.error("Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-500">
          Хүний тоо авч байгаа тул нэрээ үлдээгээрэй 😊
        </h2>
      </div>
      <div className="mb-4">
        <label
          htmlFor="inputField"
          className="block text-sm font-medium text-blue-500 mb-2"
        >
          Таны нэр
        </label>
        <input
          type="text"
          id="inputField"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-14 px-4 block w-full border border-blue-400 shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="bg-gray-300 text-blue-500 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Болих
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          disabled={loading}
          onClick={onPressSave}
        >
          Илгээх
        </button>
      </div>
    </div>
  );
};
export default ModalInfoContainer;
