import React from 'react';
import { ReactComponent as D20 } from './d20.svg';
import { ReactComponent as D12 } from './d12.svg';
import { ReactComponent as D10 } from './d10.svg';
import { ReactComponent as D6 } from './d6.svg';

function DieImage(props) {
  const { sides } = props;
  return (
    <div>
      {sides === 6 ? <D6 />
        : sides === 10 ? <D10 />
          : sides === 12 ? <D12 /> :
            <D20/>
      }
    </div>
  );
}

export default DieImage;

