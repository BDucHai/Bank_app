import styles from './style'
import { NavBar, Hero, Stat, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from "./components"
const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
          <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Stat />
          <Business />
          <Billing  />
          <CardDeal  />
          <Testimonials  />
          <Clients  />
          <CTA  />
          <Footer />
      </div>
    </div>
  </div>
)

export default App
