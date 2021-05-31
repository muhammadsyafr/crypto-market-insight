import { Footer } from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { React } from 'libraries';

const BaseContainer = ({ children }) => {
  return (
    <div className="BaseContainer">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default BaseContainer;