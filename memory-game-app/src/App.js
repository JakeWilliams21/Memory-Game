import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import React, {useState} from 'react';

function App() {
  const [players, setPlayers] = useState([
    {
      name: 'Lebron James',
      url: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxNTkwODM1ODMyMjM1NTA2/usatsi_17543584_168388303_lowres.jpg',
      id: 1
    },
    {
      name: 'Kyrie Irving',
      url: 'https://pyxis.nymag.com/v1/imgs/978/b5d/a907d400ac88988bd0cbd28bdb37edab6f-kyrie-irving.rsquare.w700.jpg',
      id : 2
    },
    {
      name: 'Luka Doncic',
      url: 'https://static01.nyt.com/images/2021/02/24/sports/24nba-stein-luka1/24nba-stein-luka1-mediumSquareAt3X-v2.jpg',
      id : 3
    },
    {
      name: 'Donovan Mitchell',
      url: 'https://cdn.vox-cdn.com/thumbor/Jj-tmaioJNHK6B6-LF_tCMqIe28=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23989411/1394877463.jpg',
      id : 4
    },
    {
      name: 'Darius Garland',
      url: 'https://images.news18.com/ibnlive/uploads/2022/01/darius-garland.jpg',
      id : 5
    },
    {
      name: 'Jayson Tatum',
      url: 'https://static01.nyt.com/images/2020/09/12/sports/12nba-celtics01/12nba-celtics01-mediumSquareAt3X.jpg',
      id : 6
    },
    {
      name: 'Lamelo Ball',
      url: 'https://static01.nyt.com/images/2021/05/27/sports/00nba-rookie-ball/00nba-rookie-ball-mediumSquareAt3X.jpg',
      id : 7
    },
    {
      name: 'Chris Paul',
      url: 'https://static01.nyt.com/images/2021/06/16/sports/16nba-chrispaul3/16nba-chrispaul3-mediumSquareAt3X.jpg',
      id : 8
    },
    {
      name: 'Kevin Durant',
      url: 'https://pyxis.nymag.com/v1/imgs/29e/e25/9c2e22181899b251611623bcb715ed16b1-kevin-durant.rsquare.w700.jpg',
      id : 9
    },
    {
      name: 'Anthony Davis',
      url: 'https://static01.nyt.com/images/2021/05/29/sports/29lakers1-print/29lakers-davis1-mediumSquareAt3X.jpg',
      id : 10
    },
    {
      name: 'Nikola Jokic',
      url: 'https://cdn.vox-cdn.com/thumbor/ZKYc2RZzitzfgFKpLR7tnDAZea4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23051349/1236573315.jpg',
      id : 11
    },
    {
      name: 'Joel Embiid',
      url: 'https://cdn.vox-cdn.com/thumbor/i-6FZ7ARzzr_2HmFyqA6-urnNJ8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/14724969/usa_today_12181947.jpg',
      id : 12
    }

  ])
  const [selection, setSelection] = useState([])
  const [score, setScore] = useState({
    current: 0,
    best: 0
  })

  const shuffle = () => {
    let newOrder = players

    for (let i = newOrder.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = newOrder[i]
      newOrder[i] = newOrder[j];
      newOrder[j] = temp
    }
    
  }

  const handleClick = (id) => {
      
      
      if(selection.includes(id)) {
        setSelection(prevSelection => ([]))
        setScore(prevBest => ({
          ...prevBest,
          current: 0
        }))
      } else {
        setSelection(prevSelection => ([...prevSelection, id]))
        setScore(prevBest => ({
          ...prevBest,
          current: score.current + 1
        }))
        if (score.current === score.best && score.current === 0) {
          setScore(prevScore => ({
            ...prevScore,
            best: 1
          }))
        } else if (score.current >= score.best) {
          setScore(prevScore => ({
            ...prevScore,
            best: score.best + 1
          }))
        }
      }

      shuffle()
      
  }

  return (
    <div className="App">
      <Navbar score = {score} />

      {score.current === 12 ? 
      <h1 className = 'win'>WINNER</h1> :
      <div className = 'card-grid'>
        <Card key = {players[0].id} score = {score} click = {handleClick} player = {players[0]}/>
        <Card key = {players[1].id} score = {score} click = {handleClick} player = {players[1]} />
        <Card key = {players[2].id} score = {score} click = {handleClick} player = {players[2]} />
        <Card key = {players[3].id} score = {score} click = {handleClick} player = {players[3]} />
        <Card key = {players[4].id} score = {score} click = {handleClick} player = {players[4]} />
        <Card key = {players[5].id} score = {score} click = {handleClick} player = {players[5]} />
        <Card key = {players[6].id} score = {score} click = {handleClick} player = {players[6]} />
        <Card key = {players[7].id} score = {score} click = {handleClick} player = {players[7]} />
        <Card key = {players[8].id} score = {score} click = {handleClick} player = {players[8]} />
        <Card key = {players[9].id} score = {score} click = {handleClick} player = {players[9]} />
        <Card key = {players[10].id} score = {score} click = {handleClick} player = {players[10]} />
        <Card key = {players[11].id} score = {score} click = {handleClick} player = {players[11]} />
      </div>
      }
      
      
    </div>
  );
}

export default App;
