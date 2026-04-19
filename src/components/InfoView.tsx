import { PERSON_TYPE_DATE, PERSON_TYPE_TIME } from "@/types";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const InfoView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        <p className="text-5xl text-white text-center mb-5">GENDER REVEAL</p>
        <p className="text-2xl text-white text-center mb-5">
          {/* GLOBAL GARDEN 1 <br /> 1273 - 12 ТООТ */}
          Эрхи төв 2 давхарт <br />
          Bunny Lounge

        </p>
        <Image
          src={"/assets/icons/info_signature.png"}
          alt="info-sign"
          width={380}
          height={0}
          className="mb-10 w-[380px] h-auto"
        />
        <div className="flex justify-center place-items-center flex-col mb-5">
          <p className="text-2xl text-white text-center">
            {PERSON_TYPE_DATE}
          </p>
          <p className="text-base text-white text-center">
            {PERSON_TYPE_TIME}
          </p>
        </div>

        {/* <Image
          src={"/assets/icons/invite-nobg.png"}
          alt="info-sign"
          width={500}
          height={0}
          className="mb-10 w-[500px] h-auto"
        /> */}

        <button
          onClick={() => setShowModal(true)}
          className="text-white underline mb-5"
        >
          Дэлгэрэнгүй энд дарна уу
        </button>

        <p className="text-5xl text-white text-center mb-5"></p>

        <Image
          src={"/assets/icons/info-2.svg"}
          alt="info-2"
          width={186}
          height={34}
        />
      </motion.div>}

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-8 mx-6 w-full max-w-sm flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-center text-blue-400">Мэдээлэл</h2>

              <div>
                <p className="font-semibold text-gray-400 mb-1">Dress code</p>
                <p className="text-gray-600">Дуртай хувцас</p>
              </div>

              <div>
                <p className="font-semibold text-gray-400 mb-1">Санамж:</p>
                <p className="text-gray-600">Анугийн зургийг story-доо хийхгүй байх :p</p>
              </div>

               <div>
                <p className="font-semibold text-gray-400 mb-1">Авчрах зүйл:</p>
                <p className="text-gray-600">Ямар ч хамаагүй бэлэг (Хүүхдийн хүйстэй холбоотой өөрийн бодлоор)</p>
              </div>

              <button
                className="mt-2 bg-blue-400 text-white py-2 rounded-xl text-base font-medium"
                onClick={() => setShowModal(false)}
              >
                Хаах
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default InfoView;
