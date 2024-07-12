import * as React from 'react';
import "../../CSSfiles/label.css";


interface LabelProps {
  children: React.ReactNode;
}

const Label = ({children}: LabelProps) => {
  return (
    <>
      <label className='label'>{children}</label>
      <div className="height"></div>
    </>
  );
};

export default Label;
