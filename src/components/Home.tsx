import * as React from 'react';

import { Fade, Typography, Switch, Grow, Slide, Zoom, Collapse } from '@material-ui/core';


export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const [collapse, setCollapse] = React.useState(false);
    const [fade, setFade] = React.useState(false);
    const [grow, setGrow] = React.useState(false);
    const [slide, setSlide] = React.useState(false);
    const [zoom, setZoom] = React.useState(false);

    return (
        <>
            <Switch checked={collapse} onChange={e => setCollapse(prev => !prev)} />
            <Collapse in={collapse}>
                {collapse ?
                    <Typography>
                        Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit is the first known version ("Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It was found by Richard McClintock, a philologist, director of publications at Hampden-Sydney College in Virginia; he searched for citings of consectetur in classical Latin literature, a term of remarkably low frequency in that literary corpus.

Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)

Cicero's version of Liber Primus (first Book), sections 1.10.32–3 (fragments included in most Lorem Ipsum variants in red):
                </Typography> :
                    <Typography>
                        Lorem Ipsum
                </Typography>}
            </Collapse>

            <Switch checked={fade} onChange={e => setFade(prev => !prev)} />
            <Fade in={fade}>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </Fade>

            <Switch checked={grow} onChange={e => setGrow(prev => !prev)} />
            <Grow
                in={grow}
                style={{
                    transformOrigin: '0 10 0', transitionDelay: grow ? '100ms' : '150ms'
                }}
            >
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </Grow>

            <Switch checked={slide} onChange={e => setSlide(prev => !prev)} />
            <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </Slide>
            <br />

            <Switch checked={zoom} onChange={e => setZoom(prev => !prev)} />
            <Zoom in={zoom} >
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </Zoom>
        </>
    );
}
