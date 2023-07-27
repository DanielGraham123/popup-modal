import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PopupModal } from '../dist/';
import './index.css';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    console.log('close modal');
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <PopupModal handleClose={closeModal}>
          <h2>Modal</h2>
          <div>
            <p>A paragraph</p>
          </div>
        </PopupModal>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
