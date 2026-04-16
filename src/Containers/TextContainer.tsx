import useData from "@/hooks/useData";
import { PageType, PERSON_TYPE_COLOR, PERSON_TYPE_TEXT_COLOR } from "@/types";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TextContainer = () => {
    const { setPageType } = useData();
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                `Найрамдал хайр хоёр зэрэгцсэн<br>
                Наран мэт гийгүүлсэн найзууддаа<br>
                Шинэ амьсгалын мэндийг илчлэх<br>
                Шинэслэн баярлах энэ өдөртөө<br>
                Хамт байсан дурсамжаа сэргээн<br>
                Хажуудаа байхыг чинь хүсч байна<br>
                Хүрэлцэн ирнэ үү найзуудаа<br>`,
                ''
            ],
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 1,
            backDelay: 1000,
            loop: false,
            showCursor: false,
            onComplete: onComplete
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const onComplete = () => {
        setTimeout(() => {
            setPageType(PageType.INFO_PAGE)
        }, 1500)
    }

    const onPressEnd = () => {
        setPageType(PageType.INFO_PAGE)
    }

    return <div className={`w-full h-full flex justify-center place-items-center p-8 bg-${PERSON_TYPE_COLOR} cursor-pointer`} onClick={onPressEnd}><span ref={el} className={`text-${PERSON_TYPE_TEXT_COLOR} text-xl md:text-4xl text-left`} /></div>
}
export default TextContainer
