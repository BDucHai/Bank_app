import { clients } from "../constant";
import styles from "../style";

const Clients = () => {
    return (
        <div className={`${styles.flexCenter} flex-wrap my-4`}>
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    );
};

export default Clients;
