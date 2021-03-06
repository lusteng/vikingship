import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';


const App:React.FC =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} mode='vertiacal'>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >
              dropdown 1
            </MenuItem>
            <MenuItem >
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
              cool link3
          </MenuItem>
        </Menu>
        <Button autoFocus>Hello</Button>
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
