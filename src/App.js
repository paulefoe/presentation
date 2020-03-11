import React from 'react';
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';
import theme from './theme';

import cat from'./assets/thiscatdoesnotexist.com.jpg';


function App() {
  return (
    <Deck theme={theme} transitionEffect="fade">
    <Slide>
    <Heading margin="0px" fontSize="40px">
          Кто такой Python разработчик?
        </Heading>
      <FlexBox height="100%">
        <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"} size={500}/>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>О себе</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Software Engineer at EVO (prom.ua, shafa.ua, kabanchik и тд)</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Не получал профильного образования
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Обожаю проекты с открытым исходным кодом и всячески пытаюсь помогать развивать их</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(http://images.fineartamerica.com/images-medium-large/cat-collage-imagevixen-photography.jpg)"
      backgroundOpacity={0.5}
    >
      <Appear elementNum={0}>
        <Heading>Чем занимаются пайтон разработчики</Heading>
      </Appear>
      <UnorderedList>
      <Appear elementNum={1}>
      <Image src={cat} size={300} style={{float: "right", marginLeft: "30px"}}/>
      </Appear>
      <Appear elementNum={2}>
      <Image src={"https://i.imgur.com/Ud6mAke.jpg"} size={300} style={{float: "right"}}/>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>
          <CodeSpan>Machine Learning</CodeSpan>
        </ListItem>
        </Appear>
        <Appear elementNum={5}>
        <ListItem>
          <CodeSpan>Web development</CodeSpan>
        </ListItem>
        </Appear>
        <Appear elementNum={6}>
        <ListItem>
          <CodeSpan>DevOps</CodeSpan>
        </ListItem>
        </Appear>
        <Appear elementNum={4}>
        <ListItem>
          <CodeSpan>Data Science</CodeSpan>
        </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
    <FlexBox height="100%">
        <Image src={"https://raw.githubusercontent.com/kamranahmedse/developer-roadmap/master/img/backend.png"} />
    </FlexBox>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Zen of Python
        1. Beautiful is better than ugly.
        2. Explicit is better than implicit.
        3. Simple is better than complex.
        4. Readability counts.
        5. Special cases aren't special enough to break the rules.
      `}
    </Markdown>
  </Deck>
  );
}

export default App;
