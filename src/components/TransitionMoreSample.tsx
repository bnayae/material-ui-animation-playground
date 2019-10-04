// credit: https://www.youtube.com/watch?v=BZRyIOrWfHU&t=148s

import * as React from 'react';
import { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export interface ITransitionMoreSampleProps {
}

export default function TransitionMoreSample(props: ITransitionMoreSampleProps) {
    const [state, setState] = useState(0);
    const contents = [
        `One morning, when Gregor Samsa woke from troubled dreams, 
        he found himself transformed in his bed into a horrible
         vermin. He lay on his armour-like back, and if he lifted his head a 
         little he could see his brown belly, slightly domed and divided by 
         arches into stiff sections. The bedding was hardly able to 
         cover it and seemed ready`,
        `The quick, brown fox jumps over a lazy dog. DJs flock
         by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, 
        flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox`]

    return (
        <>
            <Box justifyContent="center" mt={10} display="flex" >
                <Button onClick={e => setState(0)}>A</Button>
                <Button onClick={e => setState(1)}>B</Button>
            </Box>
            <CSSTransition in={true} appear={true} timeout={1500} classNames="page">
                <div>
                    <Box display="flex" justifyContent="center" mt={5}>

                        <Box p={1} width="40%" >
                            <Paper key={state}>
                                {contents[state]}
                            </Paper>
                        </Box>
                    </Box>
                </div>
            </CSSTransition>
            <Box display="flex" justifyContent="center" >

                <Box p={1} width="40%" >
                    <TransitionGroup>
                        <CSSTransition key={state} timeout={3000} classNames="page">
                            <Box position="absolute">
                                <Paper key={state}>
                                    {contents[state]}
                                </Paper>
                            </Box>
                        </CSSTransition>
                    </TransitionGroup>
                </Box>
            </Box>
        </>
    );
}
