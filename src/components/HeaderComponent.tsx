import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/system";
import { useEffect, useState } from "react";

type HeaderProps = {
    headingText: string,
    headingClassName?: string,
    subHeadingText?: string,
    subHeadingClassName?: string,
}

export default function HeaderComponent({headingText, subHeadingText, headingClassName, subHeadingClassName}: HeaderProps) {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));   
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return <>
        {/* Heading */}
            <Typography
                variant={isSmUp ? "h2" : "h3"}
                component="h2"
                fontWeight={900}
                className={headingClassName}
                sx={{
                    background: 'linear-gradient(45deg, #e20000, #ff6b35, #f1c40f)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                    transition: 'all 0.8s ease',
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isLoaded ? 1 : 0
                }}
            >
                {headingText.toUpperCase()}
            </Typography>
        {/* Sub Heading */}
            <Typography
                variant="h6"
                className="subHeadingClassName"
                sx={{
                    color: '#b0b0b0',
                    mb: 6,
                    maxWidth: 800,
                    mx: 'auto',
                    lineHeight: 1.6,
                    transition: 'all 0.8s ease 0.2s',
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isLoaded ? 1 : 0
                }}
            >
                {subHeadingText}
            </Typography>
        </>
}
