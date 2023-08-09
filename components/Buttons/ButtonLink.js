import Link from "next/link";
import Button from "@mui/material/Button";
import * as React from "react";

function ButtonLink({ title, href, onClick }) {
    return (
        <Link
            passHref
            key={title}
            href={href}
            style={{ textDecoration: 'none' }}
        >
            <Button
                onClick={onClick}
                sx={{ my: 2, color: 'white', display: 'block', ":hover": { bgcolor: "#157068"} }}
            >
                {title}
            </Button>

        </Link>
    );
}

export default ButtonLink;