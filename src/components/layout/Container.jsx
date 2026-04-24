import cl from './Container.module.css';
import Header from './Header/Header';

function Container(params) {
    return (
        <div className={cl.container}>
              <Header/>
        </div>
      );
}
export default Container;