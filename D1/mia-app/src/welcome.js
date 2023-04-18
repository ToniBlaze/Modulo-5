function AppWelcome(props) {
    return <h1>Ciao, {props.nome}</h1>
}

function Welcome() {
    return (
        <div>
            <AppWelcome nome="Alessio!" />
            <AppWelcome nome="Piero!" />
            <AppWelcome nome="Gianni!" />
        </div>
    )
}

export default Welcome;