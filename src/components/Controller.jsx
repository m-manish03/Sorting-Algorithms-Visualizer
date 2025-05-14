import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPause } from "react-icons/im";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { delay } from "../common/helper";
import shallow from "zustand/shallow";
import { useControls, useData } from "../common/store";
import {
  convertInputToArrayString,
  convertArrayStringToArray,
  getRandomArray,
} from "../common/helper";

const ControlBar = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    font-size: 1.5rem;
    gap: 15px;
  }
`;

const ArrayBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  flex-grow: 1;
  min-width: 300px;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: unset;
    width: 100%;
  }
`;

const ExecutionBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 40%;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-left: 20px;
  column-gap: 5px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

export function Controller() {

  const [isPausing, setIsPausing] = useState(false);

  const [progress, speed] = useControls(
    (state) => [state.progress, state.speed],
    shallow
  );

  const [sortingArray, setSortingArray] = useData(
    (state) => [state.sortingArray, state.setSortingArray],
    shallow
  );

  const [startSorting, pauseSorting, resetSorting, setSpeed] = useControls(
    (state) => [
      state.startSorting,
      state.pauseSorting,
      state.resetSorting,
      state.setSpeed,
    ],
    shallow
  );

  const [arrayInput, setArrayInput] = useState(sortingArray);

  // Add keyboard event listener for space bar
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is space and prevent default scrolling
      if (event.code === 'Space' && !event.target.matches('input, textarea')) {
        event.preventDefault();
        
        // Handle space bar based on current progress state
        if (progress === "reset" || progress === "pause") {
          startSorting();
        } else if (progress === "start") {
          pauseAndDelaySorting();
        }
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [progress, startSorting]);

  const startElement = <VscDebugStart onClick={startSorting} />;
  const pauseElement = <ImPause onClick={pauseAndDelaySorting} />;
  const resetElement = <VscDebugRestart onClick={resetSorting} />;
  const disabledPauseElement = <ImPause style={{ color: "#fafafa" }} />;

  async function pauseAndDelaySorting(){
    pauseSorting();
    setIsPausing(true);
    await delay(useControls.getState().swapTime);
    setIsPausing(false);
  }

  function arrayDataChangeHandler(value) {
    const arrayString = convertInputToArrayString(value);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    setSortingArray(array);
    resetSorting();
  }

  function generate() {
    const randomArray = getRandomArray();
    setArrayInput(randomArray);
    setSortingArray(randomArray);
    resetSorting();
  }

  function getProgressButton() {
    if(isPausing)
      return disabledPauseElement;

    switch (progress) {
      case "reset":
        return startElement;
      case "start":
        return pauseElement;
      case "pause":
        return startElement;
      case "done":
        return disabledPauseElement;
    }
  }

  return (
    <ControlBar>
      <ArrayBar>
        <Button
          variant="contained"
          color="primary"
          onClick={generate}
          fullWidth
          style={{ maxWidth: '200px' }}
        >
          Generate Random Array
        </Button>

        <TextField
          id="outlined-basic"
          label="Enter the Elements of the Array"
          variant="outlined"
          onChange={(event) => arrayDataChangeHandler(event.target.value)}
          value={arrayInput}
          size="small"
          fullWidth
          style={{ flexGrow: 1 }}
        />
      </ArrayBar>
      <ExecutionBar>
        <SliderContainer>
          <span style={{ fontSize: '1rem', marginBottom: '5px' }}>Speed</span>
          <Slider
            key={`slider-${speed}`}
            defaultValue={speed}
            onChange={(event, value) => setSpeed(value)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
              { value: 6, label: '6' },
              { value: 7, label: '7' },
              { value: 8, label: '8' },
              { value: 9, label: '9' },
              { value: 10, label: '10' }
            ]}
            min={1}
            max={10}
          />
        </SliderContainer>

        <ButtonGroup>
          {getProgressButton()}
          {resetElement}
        </ButtonGroup>
      </ExecutionBar>
    </ControlBar>
  );
}