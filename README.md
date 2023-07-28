# Popup Modal

[![NPM](https://img.shields.io/badge/npm-v0.1.1-blue)](https://www.npmjs.com/package/@dannybee/popup-modal)
[![Downloads](https://img.shields.io/badge/downloads-'%20%20'-green)](https://www.npmjs.com/package/@dannybee/popup-modal)

Popup Modal is a Simple React component that allows you to create a popup modal with your own custom UI content. It wraps around your content and gives you full control over it.

## Installing Popup Modal

To install Popup Modal, run the following command:

```bash
npm i @dannybee/popupmodal

# or

yarn add @dannybee/popupmodal
```

## Using Popup Modal

To use Popup Modal, import it into your project and wrap it around your content. You can then use the `handleClose` prop to hide the modal.

```jsx
import React, { useState } from 'react';
import { PopupModal } from '@dannybee/popupmodal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    console.log('close modal');
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal()}>Show Modal</button>

      {showModal && (
        <PopupModal handleClose={closeModal}>
          <h2>Modal</h2>
          <div>
            <p>My Modal content</p>
          </div>
        </PopupModal>
      )}
    </div>
  );
};
```

## To Do

- [ ] Add more props
- [ ] Add more tests
- [ ] Add annimations
- [ ] Add more styling options
