import { Button, SxProps, Theme } from "@mui/material";
import { CSSProperties, ElementType } from 'react'

type ButtonProps = {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    sx?: SxProps<Theme>
    size?: 'small' | 'medium' | 'large';
    onClick?: Function;
    href?: string;
    to?: string;
    style?: CSSProperties;
    fontSize?: string;
    borderRad?: 1 | 2 | 3;
    icon?: React.ReactNode | string;
    component?: ElementType;
    target?: "_blank" | "_self";
};

export default function StyledButton({
    children, text, sx, style, className = '', component= 'a', to, href, icon, target= "_self", size, fontSize, borderRad, onClick}: ButtonProps) {
    return <Button
            style={style}
            onClick={onClick}
            className={`${className}`}
            to={to}
            component={component}
            href={href}
            target={target}
            variant="contained"
            startIcon={icon}
            size={size}
            sx={{
                textAlign: 'center',
                background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                fontWeight: 700,
                fontSize: fontSize,
                px: 4,
                py: 2,
                borderRadius: borderRad,
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(226, 0, 0, 0.3)',
                '&:hover': {
                    background: 'linear-gradient(45deg, #c10000, #e55a2b)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(226, 0, 0, 0.4)'
                },
                transition: 'all 0.3s ease',
                ...sx,
            }}
        >
            {children || text}
        </Button>
}