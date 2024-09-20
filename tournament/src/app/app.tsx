"use client"

import Players from './pages/players/page'
import IntroVideo from './pages/players/introvideo'
import QR from './pages/players/qr'
import RegistrationForm from './pages/players/regform'
import AvatarSelection from './pages/players/avatarselection'
import TeamRegistered from './pages/players/teamregistered'
import FinalLoading from './pages/players/finalloading'

import Join from './pages/operators/join'
import AllTeams from './pages/operators/allteams'
import SelectedTeam from './pages/operators/selectedteam'
import PlayerTurn from './pages/operators/playerturn'
import FinalScreen from './pages/operators/finalscreen'

import RegisteredTeams from './pages/managers/registeredteams.tsx/page'
import MonitorTeams from './pages/managers/monitorteams'
import LeaderBoard from './pages/managers/leaderboard'
import Menu from './pages/managers/menu'
import OperatorControl from './pages/managers/operatorcontrol'
import SubmitResult from './pages/managers/submitresult'

import DisplayScore from './pages/display/displayscore'

import TeamScore from './pages/display/teamscore'
import DuringRegistration from './pages/display/duringregistration'
import IndividualScore from './pages/display/individualscore'
import FinalScore from './pages/display/finalscore'
import FinalScoreTwo from './pages/display/finalscoretwo'
import ScanQR from './pages/display/scanqr'



function App() {
    return(
        <div className='background-image'>
        {/* Playes */}

            {/* <Players/> */}
            {/* <IntroVideo/> */}
            {/* <QR/> */}

            {/* Phone screens below */}

            {/* <RegistrationForm/> */}
            {/* <AvatarSelection /> */}
            {/* <TeamRegistered/> */}
            {/* <FinalLoading/> */}

        {/* Operator */}
            {/* <Join/> */}
            {/* <AllTeams/> */}
            {/* <SelectedTeam/> */}
            {/* <PlayerTurn/> */}
            {/* <FinalScreen/> */}

        {/* Manager */}
            {/* <Menu/> */}
            {/* <RegisteredTeams/> */}
            {/* <MonitorTeams/> */}
            {/* <OperatorControl/> */}
            {/* <LeaderBoard/> */}
            {/* <SubmitResult/> */}

        {/* Main Display */}
            {/* <DisplayScore /> */}
            {/* <DuringRegistration/> */}
            {/* <TeamScore/> */}
            {/* <IndividualScore/> */}
            {/* <FinalScore/> */}
            {/* <FinalScoreTwo/> */}
            {/* <ScanQR/> */}
            
        </div>
    )
}

export default App; 