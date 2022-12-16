import { IoMoonOutline, IoMoon } from "react-icons/io5";
import styled from 'styled-components';
import { useTheme } from './use-theme';


const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: 14px;
    cursor: pointer;
    text-transform: capitalize;
    user-select: none;
`;

export const ThemeSwitcher = () => {
    const [theme, toggleTheme] = useTheme();
	
	return (
		<ModeSwitcher onClick={toggleTheme}>
			{theme === 'light' ? (
				<IoMoonOutline size="14px" />
			) : (
				<IoMoon size="14px" />
			)}
			<span
				style={{ marginLeft: '0.75rem' }}
			>
				{theme} Mode
			</span>
		</ModeSwitcher>
	)
}