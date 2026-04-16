import { PERSON_TYPE_DATE, PERSON_TYPE_TIME } from "@/types";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const InfoView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} className="w-[416] z-20 absolute bg-blue-400 flex flex-col justify-between place-items-center py-10 px-1">
        <Image
          src={"/assets/icons/info-1.svg"}
          alt="info-1"
          width={208}
          height={31}
          className="mb-5"
        />
        <p className="text-5xl text-white text-center mb-5">ШИНЭ БАЙРНЫ ЦАЙЛЛАГА</p>
        <p className="text-2xl text-white text-center mb-10">
          GLOBAL GARDEN 1 <br /> 1273 - 12 ТООТ
        </p>
        <Image
          src={"/assets/icons/info-signature.jpeg"}
          alt="info-sign"
          width={310}
          height={184}
          className="mb-10"
        />
        <div className="flex justify-center place-items-center flex-col mb-5">
          <p className="text-2xl text-white text-center">
            {PERSON_TYPE_DATE}
          </p>
          <p className="text-base text-white text-center">
            {PERSON_TYPE_TIME}
          </p>
        </div>

        <Image
          src={"/assets/icons/info-2.svg"}
          alt="info-2"
          width={186}
          height={34}
        />
      </motion.div>}
    </>
  );
};
export default InfoView;
