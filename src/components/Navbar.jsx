import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { Padding } from '@mui/icons-material';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between'}}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={45} />
        </Link>

        <SearchBar></SearchBar>
        
        <Stack direction="row" p={1} sx={{position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between'}}>
            <Button className="category-btn" style={{ display: 'flex', borderRadius: '50%', alignItems: 'center', width: '30px'}}>
                <img src="./images/Create.png" alt="Create" height={45}/>
            </Button>
            <Button className="category-btn" style={{ display: 'flex', borderRadius: '50%', alignItems: 'center', width: '30px'}}>
                <img alt="Notification" src="./images/Notification.png" height={40}></img>
            </Button>
            <Button className="category-btn" style={{ display: 'flex', borderRadius: '50%', alignItems: 'center', width: '30px'}}>
                <img src="./images/Logo.png" alt="K" height={45}/>
            </Button>
            
        </Stack>
        
        
                
    </Stack>
)

export default Navbar