import React, {useState}  from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { type } from 'os';

// これをステート管理で保持する。
const steps = [
  {
    label: {place:'京都駅', arriveTime:null,startTime:'7:00'},
    description:'京都駅で朝ご飯を食べて大阪駅に出発します。'
},
  {
    label: {place:'大阪駅', arriveTime:'8:00',startTime:'9:00'},
    description:
      '到着後、USJへ行きます。',
  },
//   {
//     label: 'Create an ad',
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
];



export default function TimePlan() {
  const [activeStep, setActiveStep] = useState(0);
//inputの値が完了したらテキストにして、新しいインプットを生み出すボタンを出現する。
    const [inputFilled, setInputFilled] = useState(false)
    const [places, setPlaces] = useState<string[]>([])
    const inputFilledHandler = (e: React.KeyboardEvent<HTMLDivElement> |  React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) =>{
        e.preventDefault()
        setInputFilled(!inputFilled);
    }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
        <Box display='flex' alignItems='center'>
            <Typography fontSize={15} marginRight={1}>
                出発地：
            </Typography>

            {inputFilled?
            <>
                <Button sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'},marginLeft:'3rem'}} onClick={e => setInputFilled(!inputFilled)}>変更する</Button>
            </>
            :
                <TextField
                size='small'
                required
                id="outlined-required"
                label="出発地"
                onKeyPress={e => inputFilledHandler(e)}
                onBlur={e => inputFilledHandler(e)}
                />
            }
        </Box>
        <Box display='flex' alignItems='center' pt={2}>
            <Typography fontSize={15} marginRight={1}>
                出発時間：
            </Typography>
            {inputFilled?
            <>
                <Button sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'},marginLeft:'2rem'}} onClick={e => setInputFilled(!inputFilled)}>変更する</Button>
            </>
            :
                <TextField
                size='small'
                required
                id="outlined-required"
                label="出発地"
                onKeyPress={e => inputFilledHandler(e)}
                onBlur={e => inputFilledHandler(e)}
                />
            }
        </Box>
        <Box sx={{ maxWidth: 400 }}>
            {places?
            places.map(place=> {
                return(
                    <Typography>{place}</Typography>
                )
            })
            :
            null
            }
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
            <Step key={step.label.place}>
                <StepLabel
                optional={
                    index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                    ) : null
                }
                >
                {step.label.arriveTime?
                    <>{step.label.arriveTime}到着<br /></>
                    :
                    null
                }
                    {step.label.startTime}出発
                </StepLabel>
                <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button>
                </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
            </Button>
            </Paper>
        )}
        </Box>
    </>
  );
}
