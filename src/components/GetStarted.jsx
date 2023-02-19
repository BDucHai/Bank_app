import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
    return (
        <div
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] bg-blue-gradient cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary h-full w-full rounded-full`}>
                <p
                    className={`${styles.flexStart} font-poppins text-[18px] font-medium leading-[23.4px] text-gradient`}>
                    Get
                    <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] ml-[8px] object-contain" />
                </p>
                <p
                    className={`${styles.flexStart} font-poppins text-[18px] font-medium leading-[23.4px] text-gradient`}>
                    Started
                </p>
            </div>
        </div>
    );
};

export default GetStarted;
