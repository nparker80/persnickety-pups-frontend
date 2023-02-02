import './Back.scss';

const Back = ({ show, click }) => {
  return show && <div className="backdrop" onClick={click}></div>
}

export default Back