// credit: https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf
// creadit (video): https://github.com/FormidableLabs/react-animations

// credit (series): 
//  1) https://www.youtube.com/watch?v=ztvNwFV0Ai0
//  2) https://www.youtube.com/watch?v=8E6J0ZfeyBU
//  3) https://www.youtube.com/watch?v=-nCOjH0XOos
//  4) https://www.youtube.com/watch?v=kYVPoo9iGNQ 

// credit: https://www.youtube.com/watch?v=BZRyIOrWfHU
// credit: https://reactcommunity.org/react-transition-group/transition
// credit: https://css-tricks.com/animating-between-views-in-react/

import * as React from 'react';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { Switch, Typography, Paper, Box } from '@material-ui/core';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

export interface ITransitionSampleProps {
}

export default function TransitionSample(props: ITransitionSampleProps) {
    const [t1, setT1] = React.useState(false);
    const [switching, setSwitching] = React.useState(false);

    const FadeTransition = (props: CSSTransitionProps) => (
        <CSSTransition
            {...props}
            classNames={{
                enter: "dialog-enter",
                enterActive: "dialog-enter-active",
                exit: "dialog-exit"
            }}
            addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
            }}
        />
    );
    return (
        <>
            <Switch checked={t1} onChange={e => setT1(prev => !prev)} />
            <TransitionGroup>
                {t1 &&
                    <CSSTransition classNames="dialog" timeout={300}>
                        <Box m={3} width={1 / 4}>
                            <Paper>
                                <Typography variant="h6" display="block">
                                    Check app.css
                            </Typography>
                                <Typography>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will gi
                            </Typography>
                            </Paper>
                        </Box>
                    </CSSTransition>}
            </TransitionGroup>
            <SwitchTransition>
                <FadeTransition key={switching ? "Goodbye, world!" : "Hello, world!"}
                    timeout={500}
                    classNames='fade' >
                    <button onClick={() => setSwitching(state => !state)}>
                        {switching ? "Goodbye, world!" : "Hello, world!"}
                    </button>
                </FadeTransition>
            </SwitchTransition>
        </>
    );
}
