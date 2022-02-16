import React from 'react'
import { useDoubleTap } from 'use-double-tap';

const DoubleTap = () => {
    const bind = useDoubleTap( (event) => {
      // Your action here
      console.log('Double tapped');
    });

    return <button {...bind}>Tap me</button>;
}

export default DoubleTap;
