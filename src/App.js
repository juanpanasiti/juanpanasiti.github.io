import { Typography } from '@material-ui/core';
import Button from './components/atoms/Button';
import Text from './components/atoms/Text'
import Navbar from './components/organisms/Navbar';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Navbar/>
                <Text>Hola</Text>
                <Button color='secondary' label='hola mundo' />
            </header>
        </div>
    );
}

export default App;
