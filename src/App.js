import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button, OneDiv } from './Components';

export default function App() {
  const initialColor = randomColor();
  const [bgColor, setBgColor] = useState(initialColor);
  const [hexColor, setHexColor] = useState('#b2120c');
  const newColor = randomColor();

  return (
    <div>
      <h1> React Random Color Generator</h1>
      <br />
      <Button
        onClick={() => {
          setBgColor(newColor);
        }}
      >
        Generate
      </Button>
      <br />
      <br />
      <br />
      <OneDiv backgroundColor={bgColor}>Generated Color: {bgColor}</OneDiv>
    </div>
  );
}
